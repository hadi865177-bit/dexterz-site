import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import AdminLayout from '@/components/layout/AdminLayout';
import { supabase, Blog } from '@/lib/supabase';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BrandedLoader from '@/components/ui/BrandedLoader';
import DeleteModal from '@/components/ui/DeleteModal';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    setBlogToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!blogToDelete) return;

    try {
      const { error } = await supabase.from('blogs').delete().eq('id', blogToDelete);
      if (error) throw error;
      setBlogs(blogs.filter((blog) => blog.id !== blogToDelete));
      toast.success('Blog post deleted successfully');
      setBlogToDelete(null);
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete blog');
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-slate-900" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>Blog Management</h1>
            <p className="text-sm text-slate-500 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Manage your blog posts</p>
          </div>
          <button
            onClick={() => navigate('/admin/blogs/new')}
            className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            <Plus className="h-5 w-5" />
            <span>Add New Blog</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
              />
            </div>
          </div>

          {loading ? (
            <BrandedLoader message="LOADING BLOGS..." />
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>No blogs found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>TITLE</th>
                    <th className="text-left py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>AUTHOR</th>
                    <th className="text-left py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>CATEGORY</th>
                    <th className="text-left py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>DATE</th>
                    <th className="text-right py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr key={blog.id} className="border-b border-slate-100 hover:bg-slate-50 transition-all duration-200">
                      <td className="py-5 px-6">
                        <div className="font-bold text-slate-900 text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{blog.title}</div>
                        <div className="text-xs text-slate-500 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{blog.read_time}</div>
                      </td>
                      <td className="py-5 px-6 text-slate-700 text-sm font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{blog.author}</td>
                      <td className="py-5 px-6">
                        <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                          {blog.category}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-slate-700 text-sm font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{blog.publish_date}</td>
                      <td className="py-5 px-6">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => navigate(`/admin/blogs/edit/${blog.id}`)}
                            className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => deleteBlog(blog.id)}
                            className="p-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Blog"
        message="Are you sure you want to delete this blog? This action cannot be undone."
      />
    </AdminLayout>
  );
};

export default BlogManagement;
