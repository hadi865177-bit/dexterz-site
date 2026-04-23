import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, Mail, Shield, AlertCircle } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0.9))]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="max-w-lg w-full relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-2xl mb-6">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white mb-2" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em'}}>Admin Portal</h1>
          <p className="text-sm text-slate-400" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Secure authentication required</p>
        </div>

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="p-10">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl px-5 py-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-red-900" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Authentication Failed</p>
                    <p className="text-sm text-red-700 mt-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{error}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                    style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                    placeholder="admin@dexterzsol.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                    style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px'}}
                    placeholder="••••••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', letterSpacing: '0.02em'}}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Authenticating...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>

          <div className="bg-slate-50 px-10 py-5 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center flex items-center justify-center" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              <Lock className="h-3 w-3 mr-2" />
              Secured by Dexterz Technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
