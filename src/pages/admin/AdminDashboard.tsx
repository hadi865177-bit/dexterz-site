import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '@/components/layout/AdminLayout';
import { supabase } from '@/lib/supabase';
import { FileText, Briefcase, TrendingUp, Activity, Database, Server } from 'lucide-react';
import BrandedLoader from '@/components/ui/BrandedLoader';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalCareers: 0,
    activeCareers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [blogsResult, careersResult, activeCareersResult] = await Promise.all([
        supabase.from('blogs').select('id', { count: 'exact', head: true }),
        supabase.from('careers').select('id', { count: 'exact', head: true }),
        supabase.from('careers').select('id', { count: 'exact', head: true }).eq('is_active', true),
      ]);

      setStats({
        totalBlogs: blogsResult.count || 0,
        totalCareers: careersResult.count || 0,
        activeCareers: activeCareersResult.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Blogs',
      value: stats.totalBlogs,
      icon: FileText,
      gradient: 'from-blue-500 to-indigo-600',
      link: '/admin/blogs',
    },
    {
      title: 'Total Careers',
      value: stats.totalCareers,
      icon: Briefcase,
      gradient: 'from-teal-500 to-cyan-600',
      link: '/admin/careers',
    },
    {
      title: 'Active Positions',
      value: stats.activeCareers,
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-600',
      link: '/admin/careers',
    },
  ];

  return (
    <AdminLayout>
      {loading ? (
        <BrandedLoader message="LOADING DASHBOARD..." />
      ) : (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  to={card.link}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 group border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-br ${card.gradient} p-4 rounded-xl shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mb-2 font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{card.title}</p>
                  <p className="text-4xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{card.value}</p>
                  <div className="flex items-center text-teal-600 text-sm font-semibold group-hover:translate-x-1 transition-transform" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                    <span>View Details</span>
                    <span className="ml-2">→</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <h2 className="text-lg font-bold text-slate-900" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Quick Actions</h2>
                  <p className="text-sm text-slate-500 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Create and manage content</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      to="/admin/blogs/new"
                      className="group p-6 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <FileText className="h-8 w-8 text-white mb-3" />
                      <h3 className="text-base font-bold text-white mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Create Blog</h3>
                      <p className="text-sm text-blue-100" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Write article</p>
                    </Link>
                    <Link
                      to="/admin/careers/new"
                      className="group p-6 bg-gradient-to-br from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Briefcase className="h-8 w-8 text-white mb-3" />
                      <h3 className="text-base font-bold text-white mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Create Job</h3>
                      <p className="text-sm text-teal-100" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Add position</p>
                    </Link>
                    <Link
                      to="/admin/blogs"
                      className="p-6 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-200 border border-slate-200"
                    >
                      <FileText className="h-7 w-7 text-slate-700 mb-3" />
                      <h3 className="text-sm font-bold text-slate-900 mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Manage Blogs</h3>
                      <p className="text-xs text-slate-500" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Edit & delete</p>
                    </Link>
                    <Link
                      to="/admin/careers"
                      className="p-6 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-200 border border-slate-200"
                    >
                      <Briefcase className="h-7 w-7 text-slate-700 mb-3" />
                      <h3 className="text-sm font-bold text-slate-900 mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Manage Careers</h3>
                      <p className="text-xs text-slate-500" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Edit & delete</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Actions Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <h2 className="text-lg font-bold text-slate-900" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Actions</h2>
                  <p className="text-sm text-slate-500 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Use the sidebar navigation to manage your website content</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-600" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Create and publish blog posts</p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-600" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Post job openings and manage applications</p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-600" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Monitor content performance and analytics</p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-600" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Manage website content from dashboard</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* System Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-bold text-slate-900" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>System Info</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-xs text-slate-500 mb-2 font-semibold" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Platform</p>
                  <p className="text-sm text-slate-900 font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Dexterz CMS</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-2 font-semibold" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Version</p>
                  <p className="text-sm text-slate-900 font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>1.0.0</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-2 font-semibold" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Status</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-green-600 font-bold" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;
