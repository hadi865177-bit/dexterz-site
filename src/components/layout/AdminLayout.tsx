import { ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, FileText, Briefcase, LayoutDashboard, Menu, X, Globe, User } from 'lucide-react';
import { useState } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'DASHBOARD', icon: LayoutDashboard },
    { path: '/admin/blogs', label: 'BLOGS', icon: FileText },
    { path: '/admin/careers', label: 'CAREERS', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-slate-200 transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-20'} flex flex-col shadow-sm`}>
        {/* Logo & Toggle */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-200">
          {sidebarOpen ? (
            <Link to="/" className="flex items-center">
              <img
                src="/assets/new-logo/logo-blue.png"
                alt="Dexterz Technologies"
                className="h-8"
              />
            </Link>
          ) : (
            <Link to="/" className="flex items-center justify-center w-full">
              <img
                src="/assets/new-logo/logo-squre-blue.png"
                alt="Dexterz"
                className="h-8"
              />
            </Link>
          )}
          {sidebarOpen && (
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg transition-all duration-200">
              <X className="h-5 w-5 text-slate-600" />
            </button>
          )}
        </div>

        {!sidebarOpen && (
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-4 hover:bg-slate-100 transition-all duration-200 border-b border-slate-200">
            <Menu className="h-5 w-5 mx-auto text-slate-600" />
          </button>
        )}

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3">
          {sidebarOpen && (
            <div className="px-3 mb-3">
              <p className="text-xs font-bold text-slate-400" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.05em'}}>MENU</p>
            </div>
          )}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 mb-1 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/30'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-semibold" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="border-t border-slate-200 bg-slate-50">
          {sidebarOpen ? (
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-400" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>ADMIN</p>
                  <p className="text-sm text-slate-700 truncate font-medium" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{user?.email || 'admin@dexterzsol.com'}</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500 hover:bg-red-600 rounded-xl transition-all duration-200 font-semibold text-white text-sm shadow-lg"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="p-4">
              <button onClick={handleSignOut} className="w-full p-3 hover:bg-red-50 rounded-xl transition-all duration-200 text-red-500">
                <LogOut className="h-5 w-5 mx-auto" />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <div>
            <h2 className="text-2xl font-black text-slate-900" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>
              {navItems.find(item => item.path === location.pathname)?.label || 'Admin Panel'}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Content Management System</p>
          </div>
          <Link 
            to="/" 
            className="flex items-center space-x-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all duration-200 font-semibold text-sm shadow-lg"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            <Globe className="h-4 w-4" />
            <span>View Website</span>
          </Link>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
