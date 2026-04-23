import { useEffect, useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { supabase, Career } from '@/lib/supabase';
import { Plus, Edit, Trash2, Search, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BrandedLoader from '@/components/ui/BrandedLoader';

const CareerManagement = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCareers(data || []);
    } catch (error) {
      console.error('Error fetching careers:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCareer = async (id: string) => {
    if (!confirm('Are you sure you want to delete this career?')) return;

    try {
      const { error } = await supabase.from('careers').delete().eq('id', id);
      if (error) throw error;
      setCareers(careers.filter((career) => career.id !== id));
    } catch (error) {
      console.error('Error deleting career:', error);
      alert('Failed to delete career');
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('careers')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      setCareers(
        careers.map((career) =>
          career.id === id ? { ...career, is_active: !currentStatus } : career
        )
      );
    } catch (error) {
      console.error('Error updating career status:', error);
      alert('Failed to update career status');
    }
  };

  const filteredCareers = careers.filter((career) =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-slate-900" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>Career Management</h1>
            <p className="text-sm text-slate-500 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Manage job postings</p>
          </div>
          <button
            onClick={() => navigate('/admin/careers/new')}
            className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            <Plus className="h-5 w-5" />
            <span>Add New Career</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
              />
            </div>
          </div>

          {loading ? (
            <BrandedLoader message="LOADING CAREERS..." />
          ) : filteredCareers.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>No careers found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>TITLE</th>
                    <th className="text-left py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>DEPARTMENT</th>
                    <th className="text-left py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>LOCATION</th>
                    <th className="text-left py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>TYPE</th>
                    <th className="text-center py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>STATUS</th>
                    <th className="text-right py-4 px-6 font-bold text-slate-600 text-xs" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCareers.map((career) => (
                    <tr key={career.id} className="border-b border-slate-100 hover:bg-slate-50 transition-all duration-200">
                      <td className="py-5 px-6">
                        <div className="font-bold text-slate-900 text-sm" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{career.title}</div>
                        <div className="text-xs text-slate-500 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{career.experience}</div>
                      </td>
                      <td className="py-5 px-6 text-slate-700 text-sm font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{career.department}</td>
                      <td className="py-5 px-6 text-slate-700 text-sm font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{career.location}</td>
                      <td className="py-5 px-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                          {career.type}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-center">
                        <button
                          onClick={() => toggleActive(career.id, career.is_active)}
                          className={`px-3 py-1 text-xs font-bold rounded-full ${
                            career.is_active
                              ? 'bg-green-50 text-green-700'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                        >
                          {career.is_active ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => toggleActive(career.id, career.is_active)}
                            className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-all duration-200"
                            title={career.is_active ? 'Deactivate' : 'Activate'}
                          >
                            {career.is_active ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                          <button
                            onClick={() => navigate(`/admin/careers/edit/${career.id}`)}
                            className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => deleteCareer(career.id)}
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
    </AdminLayout>
  );
};

export default CareerManagement;
