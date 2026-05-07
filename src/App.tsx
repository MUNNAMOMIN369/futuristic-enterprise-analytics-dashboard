import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Overview } from './pages/Overview';
import { Analytics } from './pages/Analytics';
import { Architecture } from './pages/Architecture';
import { AIInsights } from './pages/AIInsights';
import { DataUpload } from './pages/DataUpload';
import { Reports } from './pages/Reports';
import { AdminPanel } from './pages/AdminPanel';
import { UserManagement } from './pages/UserManagement';

export default function App() {
  // Pre-seed an active mock session context to guarantee demo readiness instantly, 
  // but allow navigating to 'login' and 'register' for full pipeline visibility.
  const [userSession, setUserSession] = useState<{ name: string; email: string; role: string } | null>({
    name: 'Alexander Wright',
    email: 'admin@nexus-enterprise.io',
    role: 'Global Cloud Administrator & Architect',
  });

  // State to switch pages ('overview', 'analytics', 'architecture', 'insights', 'upload', 'reports', 'admin', 'users', 'login', 'register')
  const [currentPage, setCurrentPage] = useState<string>('overview');

  const handleLoginSuccess = (user: { name: string; email: string; role: string }) => {
    setUserSession(user);
    setCurrentPage('overview');
  };

  const handleLogout = () => {
    setUserSession(null);
    setCurrentPage('login');
  };

  // Render the unauthenticated login/register state blocks if no session or if page explicitly requested
  if (!userSession || currentPage === 'login' || currentPage === 'register') {
    if (currentPage === 'register') {
      return (
        <Register 
          onRegisterSuccess={handleLoginSuccess} 
          onNavigateToLogin={() => setCurrentPage('login')} 
        />
      );
    }
    return (
      <Login 
        onLoginSuccess={handleLoginSuccess} 
        onNavigateToRegister={() => setCurrentPage('register')} 
      />
    );
  }

  // Active modular subpage switcher matrix
  const renderActiveSubpage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview setCurrentPage={setCurrentPage} />;
      case 'analytics':
        return <Analytics />;
      case 'architecture':
        return <Architecture />;
      case 'insights':
        return <AIInsights />;
      case 'upload':
        return <DataUpload />;
      case 'reports':
        return <Reports />;
      case 'admin':
        return <AdminPanel />;
      case 'users':
        return <UserManagement />;
      default:
        return <Overview setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 flex font-sans">
      
      {/* Premium Neon Animated Sidebar Navigation Column */}
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onLogout={handleLogout} 
        user={userSession}
      />

      {/* Main Dynamic Workspace Body Container */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-950 via-zinc-900/30 to-black">
        
        {/* Dynamic Telemetry Header Bar */}
        <Header 
          currentPage={currentPage} 
          user={userSession}
          onRefreshData={() => {
            console.log("Nexus multi-region telemetry caches updated dynamically.");
          }}
        />

        {/* Dynamic Inner Component Grid Viewport */}
        <main className="p-6 flex-1 overflow-y-auto max-w-7xl w-full mx-auto space-y-6">
          
          {/* Direct view modifier breadcrumbs or hot-switches inside reports */}
          <div className="flex items-center justify-between text-xs font-mono bg-zinc-900/40 border border-zinc-800/50 p-2.5 rounded-xl">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>Identity Node: <strong className="text-zinc-200">{userSession.email}</strong></span>
              <span className="text-zinc-600">|</span>
              <span>Authorization Level: <span className="text-purple-400 font-bold">{userSession.role}</span></span>
            </div>
            
            {/* Quick Demo Mode Navigation helpers shortcut */}
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-zinc-500 uppercase text-[10px]">Jump To:</span>
              <button 
                onClick={() => setCurrentPage('login')} 
                className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Observe pristine unauthenticated state"
              >
                [Auth View Form]
              </button>
            </div>
          </div>

          {/* Core active page view block injection */}
          {renderActiveSubpage()}

        </main>
        
        {/* Fineprint professional academic footer bar */}
        <footer className="py-3 px-6 border-t border-zinc-900 text-center text-[10px] font-mono text-zinc-600 flex flex-col sm:flex-row justify-between items-center gap-2 bg-zinc-950/40">
          <span>NEXUS ENTERPRISE COMMERCE // DRF + MY-SQL CLOUD TOPOLOGY DIAGRAM METRICS</span>
          <span>COMPLIANT SNAPSHOT FOR INTERNSHIP AND ACADEMIC REPORTS © 2026</span>
        </footer>

      </div>
    </div>
  );
}
