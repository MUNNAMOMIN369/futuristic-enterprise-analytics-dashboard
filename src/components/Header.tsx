import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Database, 
  Cpu, 
  RefreshCw
} from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onRefreshData?: () => void;
  user: { name: string; email: string } | null;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onRefreshData, user }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    if (onRefreshData) onRefreshData();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  const getPageTitle = (id: string) => {
    switch (id) {
      case 'overview': return 'Command Center Overview';
      case 'analytics': return 'Sales & Financial Intelligence Core';
      case 'architecture': return 'Cloud Topology & System Blueprint';
      case 'insights': return 'Cognitive AI Analytics & Growth Modeling';
      case 'upload': return 'Enterprise Data Pipeline Ingestion';
      case 'reports': return 'Compliance Audits & Generated PDF Ledger';
      case 'admin': return 'SecOps & Instance Infrastructure Panel';
      case 'users': return 'Identity Access Management (IAM) Nodes';
      default: return 'Enterprise Analytics Panel';
    }
  };

  return (
    <header className="glass-panel border-b border-zinc-800/80 px-6 py-3.5 sticky top-0 z-30 flex items-center justify-between bg-zinc-950/70">
      {/* Title section with route indicator */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>root_node</span>
          <span>/</span>
          <span className="text-purple-400">{currentPage}</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white mt-0.5">
          {getPageTitle(currentPage)}
        </h1>
      </div>

      {/* Search Input Bar */}
      <div className="hidden md:flex items-center gap-2 w-96 relative bg-zinc-900/80 border border-zinc-800 focus-within:border-cyan-500/50 rounded-xl px-3 py-2 transition-all">
        <Search className="w-4 h-4 text-zinc-500" />
        <input 
          type="text"
          placeholder="Query global clusters, logs, telemetry vectors..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent border-none text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none w-full font-mono"
        />
        {searchQuery && (
          <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded font-mono">
            Enter
          </span>
        )}
      </div>

      {/* Micro Tech Telemetry Badges */}
      <div className="flex items-center gap-4">
        {/* Django Status Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] font-mono">
          <Cpu className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span className="text-zinc-400">Backend:</span>
          <span className="text-emerald-400 font-bold">Django REST v3.14</span>
        </div>

        {/* MySQL Status Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] font-mono">
          <Database className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-zinc-400">DB Node:</span>
          <span className="text-cyan-400 font-bold">MySQL Cluster (2.4ms)</span>
        </div>

        {/* Refresh Action Trigger */}
        <button 
          onClick={handleRefresh}
          disabled={isRefreshing}
          className={`p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all flex items-center justify-center cursor-pointer ${
            isRefreshing ? 'opacity-60 text-cyan-400' : ''
          }`}
          title="Force telemetry synchronization"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>

        {/* System Alert Notification Bell */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all flex items-center justify-center relative cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 shadow-sm shadow-rose-500 animate-pulse"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 glass-panel border border-zinc-800 rounded-xl p-4 shadow-2xl z-50 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 mb-2">
                <span className="font-bold text-zinc-200">System Stream Notifications</span>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded-full font-mono">2 Critical</span>
              </div>
              <div className="space-y-3 pt-1">
                <div className="flex gap-2 items-start bg-rose-950/20 p-2 rounded-lg border border-rose-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0" />
                  <div>
                    <p className="text-zinc-200 font-semibold">CRM Token Deceleration</p>
                    <p className="text-zinc-400 text-[11px] mt-0.5">Rate threshold exceeded. Isolated successfully.</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start bg-purple-950/20 p-2 rounded-lg border border-purple-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-zinc-200 font-semibold">AWS Auto-Scale Active</p>
                    <p className="text-zinc-400 text-[11px] mt-0.5">Provisioned 2 nodes in response to Marketplace influx.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowNotifications(false)}
                className="w-full text-center mt-3 text-[11px] text-cyan-400 hover:underline pt-2 border-t border-zinc-900 block"
              >
                Dismiss Active Stream
              </button>
            </div>
          )}
        </div>

        {/* Simple active session avatar view */}
        {user && (
          <div className="flex items-center gap-2 pl-2 border-l border-zinc-800">
            <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold">
              SYS
            </div>
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-xs font-medium text-zinc-300">{user.name}</span>
              <span className="text-[10px] text-emerald-400 font-mono">SecOps Authenticated</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
