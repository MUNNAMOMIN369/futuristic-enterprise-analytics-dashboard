import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Network, 
  FileText, 
  ShieldCheck, 
  Users2, 
  UploadCloud, 
  BrainCircuit, 
  LogOut, 
  Terminal,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onLogout: () => void;
  user: { name: string; role: string } | null;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  setCurrentPage, 
  onLogout,
  user 
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const menuItems = [
    { id: 'overview', label: 'Main Dashboard', icon: LayoutDashboard, category: 'CORE CONTROL' },
    { id: 'analytics', label: 'Sales & Revenue BI', icon: BarChart3, category: 'CORE CONTROL' },
    { id: 'architecture', label: 'Cloud Architecture', icon: Network, category: 'INFRASTRUCTURE' },
    { id: 'insights', label: 'AI Insights Engine', icon: BrainCircuit, category: 'INFRASTRUCTURE' },
    { id: 'upload', label: 'Enterprise Data Upload', icon: UploadCloud, category: 'DATA PIPELINE' },
    { id: 'reports', label: 'Audit & PDF Reports', icon: FileText, category: 'DATA PIPELINE' },
    { id: 'admin', label: 'Admin Command Center', icon: ShieldCheck, category: 'MANAGEMENT' },
    { id: 'users', label: 'User Node Access', icon: Users2, category: 'MANAGEMENT' },
  ];

  // Group by category to make it look like AWS or enterprise SaaS panels
  const categories = ['CORE CONTROL', 'INFRASTRUCTURE', 'DATA PIPELINE', 'MANAGEMENT'];

  return (
    <aside 
      className={`glass-panel border-r border-zinc-800/80 h-screen sticky top-0 flex flex-col justify-between transition-all duration-300 z-40 ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Platform Branding */}
      <div>
        <div className="p-5 border-b border-zinc-800/50 flex items-center justify-between relative">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/20 shrink-0">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent font-sans text-lg">
                  NEXUS <span className="text-cyan-400 text-xs font-mono px-1 py-0.5 border border-cyan-500/30 rounded bg-cyan-950/40">v3.8</span>
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                  Cloud BI Platform
                </span>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-7 w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-cyan-400 flex items-center justify-center shadow-md transition-colors cursor-pointer"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Live Cluster Indicator */}
        {!isCollapsed && (
          <div className="mx-4 mt-4 p-3 rounded-xl bg-purple-950/20 border border-purple-500/10 flex items-center gap-3">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-zinc-300">CLUSTER: DRF-MYSQL-PROD</span>
              <span className="text-[10px] text-emerald-400 font-mono">Telemetry: 100% Online</span>
            </div>
          </div>
        )}

        {/* Dynamic Nav Links */}
        <div className="px-3 py-4 space-y-6 overflow-y-auto max-h-[calc(100vh-210px)]">
          {categories.map((cat) => {
            const catItems = menuItems.filter(item => item.category === cat);
            return (
              <div key={cat} className="space-y-1">
                {!isCollapsed && (
                  <p className="px-3 text-[10px] font-bold text-zinc-500 tracking-widest font-mono uppercase">
                    {cat}
                  </p>
                )}
                <div className="space-y-0.5 mt-1">
                  {catItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all group relative cursor-pointer ${
                          isActive 
                            ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/10 text-white border-l-2 border-cyan-400 shadow-sm shadow-purple-500/5' 
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 shrink-0 transition-colors ${
                          isActive ? 'text-cyan-400' : 'text-zinc-400 group-hover:text-purple-400'
                        }`} />
                        
                        {!isCollapsed && (
                          <span className="truncate tracking-wide font-sans">{item.label}</span>
                        )}

                        {/* Hover Tooltip if collapsed */}
                        {isCollapsed && (
                          <div className="absolute left-full ml-2 px-2.5 py-1.5 bg-zinc-950 text-xs font-medium text-white rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-zinc-800 shadow-xl z-50">
                            {item.label}
                          </div>
                        )}

                        {/* Accent Neon Dot */}
                        {isActive && !isCollapsed && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* User Information & Session Termination Footer */}
      <div className="p-3 border-t border-zinc-800/50 bg-zinc-950/40">
        {!isCollapsed && user && (
          <div className="p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800 mb-2 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-xs text-white">
              {user.name.charAt(0)}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-zinc-200 truncate">{user.name}</span>
              <span className="text-[10px] text-zinc-500 truncate font-mono">{user.role}</span>
            </div>
          </div>
        )}
        
        <button
          onClick={onLogout}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-xs font-semibold text-rose-400 hover:bg-rose-950/20 hover:text-rose-300 rounded-xl transition-all cursor-pointer ${
            isCollapsed ? 'justify-center' : ''
          }`}
          title="Sign Out of Session"
        >
          <LogOut className="w-4 h-4 text-rose-400 shrink-0" />
          {!isCollapsed && <span>Sign Out Command</span>}
        </button>
      </div>
    </aside>
  );
};
