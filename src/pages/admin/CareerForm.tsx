import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '@/components/layout/AdminLayout';
import { supabase } from '@/lib/supabase';
import { Save, ArrowLeft } from 'lucide-react';

const CareerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    experience: '',
    description: '',
    responsibilities: '',
    requirements: '',
    benefits: '',
    salary_range: '',
    is_active: true,
  });

  useEffect(() => {
    if (isEdit) {
      fetchCareer();
    }
  }, [id]);

  const fetchCareer = async () => {
    try {
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (data) {
        setFormData({
          title: data.title,
          department: data.department,
          location: data.location,
          type: data.type,
          experience: data.experience,
          description: data.description,
          responsibilities: data.responsibilities.join('\n'),
          requirements: data.requirements.join('\n'),
          benefits: data.benefits.join('\n'),
          salary_range: data.salary_range || '',
          is_active: data.is_active,
        });
      }
    } catch (error) {
      console.error('Error fetching career:', error);
      toast.error('Failed to load career details');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const careerData = {
        ...formData,
        responsibilities: formData.responsibilities.split('\n').filter((item) => item.trim()),
        requirements: formData.requirements.split('\n').filter((item) => item.trim()),
        benefits: formData.benefits.split('\n').filter((item) => item.trim()),
      };

      if (isEdit) {
        const { error } = await supabase
          .from('careers')
          .update(careerData)
          .eq('id', id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('careers').insert([careerData]);
        if (error) throw error;
      }

      // Invalidate cache by triggering a storage event
      window.dispatchEvent(new Event('storage'));
      
      toast.success(isEdit ? 'Career updated successfully' : 'Career created successfully');
      navigate('/admin/careers');
    } catch (error) {
      console.error('Error saving career:', error);
      toast.error('Failed to save career');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/admin/careers')}
            className="p-3 hover:bg-slate-100 rounded-xl transition-all duration-200"
          >
            <ArrowLeft className="h-6 w-6 text-slate-600" />
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>
              {isEdit ? 'Edit Career' : 'Add New Career'}
            </h1>
            <p className="text-sm text-slate-500 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              {isEdit ? 'Update job posting details' : 'Create a new job posting'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Job Title *</label>
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
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Department *</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="e.g., Engineering"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Remote"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Job Type *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Experience Level *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 3-5 years"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Salary Range (Optional)</label>
                <input
                  type="text"
                  name="salary_range"
                  value={formData.salary_range}
                  onChange={handleChange}
                  placeholder="e.g., $80,000 - $120,000"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Job Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Responsibilities * (one per line)</label>
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Design and develop software&#10;Collaborate with team members&#10;Write clean code"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Requirements * (one per line)</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Bachelor's degree in Computer Science&#10;3+ years of experience&#10;Strong problem-solving skills"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Benefits * (one per line)</label>
                <textarea
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Competitive salary&#10;Health insurance&#10;Flexible working hours"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                  style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleChange}
                    className="w-5 h-5 text-teal-500 border-slate-300 rounded-lg focus:ring-teal-500"
                  />
                  <span className="text-sm font-semibold text-slate-700" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Active (visible to public)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 p-8 bg-slate-50 border-t border-slate-200 rounded-b-2xl">
            <button
              type="button"
              onClick={() => navigate('/admin/careers')}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl transition-all duration-200 font-semibold"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 shadow-lg"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              <Save className="h-5 w-5" />
              <span>{loading ? 'Saving...' : 'Save Career'}</span>
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CareerForm;
