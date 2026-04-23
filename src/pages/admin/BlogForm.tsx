import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '@/components/layout/AdminLayout';
import { supabase, Blog } from '@/lib/supabase';
import { Save, ArrowLeft, Upload, X } from 'lucide-react';
import { SUPABASE_CONFIG } from '@/config/supabase';

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    author_title: '',
    publish_date: new Date().toISOString().split('T')[0],
    read_time: '',
    category: '',
    image: '',
    excerpt: '',
    tags: '',
    content: '',
  });

  useEffect(() => {
    if (isEdit) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (data) {
        setFormData({
          title: data.title,
          author: data.author,
          author_title: data.author_title || '',
          publish_date: data.publish_date,
          read_time: data.read_time,
          category: data.category,
          image: data.image,
          excerpt: data.excerpt,
          tags: data.tags.join(', '),
          content: data.content || '',
        });
        setImagePreview(data.image);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      alert('Failed to load blog');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview('');
    setFormData({ ...formData, image: '' });
  };

  const uploadImageToSupabase = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `blogs/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(SUPABASE_CONFIG.BUCKET_NAME)
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from(SUPABASE_CONFIG.BUCKET_NAME)
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = formData.image;

      if (imageFile) {
        setUploading(true);
        imageUrl = await uploadImageToSupabase(imageFile);
        setUploading(false);
      }

      if (!imageUrl) {
        alert('Please provide an image');
        setLoading(false);
        return;
      }

      const blogData = {
        ...formData,
        image: imageUrl,
        tags: formData.tags.split(',').map((tag) => tag.trim()),
      };

      if (isEdit) {
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('blogs').insert([blogData]);
        if (error) throw error;
      }

      // Invalidate cache by triggering a storage event
      window.dispatchEvent(new Event('storage'));
      
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog');
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/admin/blogs')}
            className="p-3 hover:bg-slate-100 rounded-xl transition-all duration-200"
          >
            <ArrowLeft className="h-6 w-6 text-slate-600" />
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>
              {isEdit ? 'Edit Blog' : 'Add New Blog'}
            </h1>
            <p className="text-sm text-slate-500 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              {isEdit ? 'Update blog details' : 'Create a new blog post'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Author *</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="e.g., John Doe"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Author Title *</label>
                <input
                  type="text"
                  name="author_title"
                  value={formData.author_title}
                  onChange={handleChange}
                  placeholder="e.g., Senior Developer"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Publish Date *</label>
                <input
                  type="date"
                  name="publish_date"
                  value={formData.publish_date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Read Time *</label>
                <input
                  type="text"
                  name="read_time"
                  value={formData.read_time}
                  onChange={handleChange}
                  placeholder="e.g., 5 min read"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Category *</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g., AI & Technology"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Blog Image *</label>
              
              {imagePreview ? (
                <div className="relative rounded-xl overflow-hidden">
                  <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover" />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-4 right-4 p-3 bg-red-500 text-white hover:bg-red-600 rounded-xl transition-all duration-200 shadow-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-teal-500 transition-all duration-200 bg-slate-50">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-700 font-bold mb-2" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Click to upload image</p>
                      <p className="text-xs text-slate-500" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>PNG, JPG, GIF up to 10MB</p>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-300"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-4 bg-white text-slate-500 font-semibold" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>OR</span>
                    </div>
                  </div>
                  
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={(e) => {
                      handleChange(e);
                      if (e.target.value) setImagePreview(e.target.value);
                    }}
                    placeholder="Paste image URL"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                    style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  />
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Tags * (comma separated)</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="AI, Machine Learning, Technology"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Excerpt *</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={10}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                placeholder="Full blog content..."
              />
            </div>
          </div>
          </div>

          <div className="flex items-center justify-end space-x-4 p-8 bg-slate-50 border-t border-slate-200 rounded-b-2xl">
            <button
              type="button"
              onClick={() => navigate('/admin/blogs')}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl transition-all duration-200 font-semibold"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || uploading}
              className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 shadow-lg"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              <Save className="h-5 w-5" />
              <span>{loading || uploading ? (uploading ? 'Uploading...' : 'Saving...') : 'Save Blog'}</span>
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default BlogForm;
