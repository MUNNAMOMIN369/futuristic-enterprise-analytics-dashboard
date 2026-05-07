import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, UserPlus, Database } from 'lucide-react';

interface RegisterProps {
  onRegisterSuccess: (user: { name: string; email: string; role: string }) => void;
  onNavigateToLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onRegisterSuccess, onNavigateToLogin }) => {
  const [fullName, setFullName] = useState('Alexander Wright');
  const [email, setEmail] = useState('architect@nexus-enterprise.io');
  const [nodeRole, setNodeRole] = useState('Global Cloud Administrator & Architect');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onRegisterSuccess({
        name: fullName,
        email: email,
        role: nodeRole
      });
    }, 850);
  };

  return (
    <div className="min-h-screen bg-[#030303] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-zinc-950 to-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-xl relative z-10">
        <div className="glass-panel border border-zinc-800 p-8 rounded-3xl shadow-2xl relative bg-zinc-950/80">
          
          <button 
            onClick={onNavigateToLogin}
            className="text-zinc-500 hover:text-zinc-300 text-xs flex items-center gap-1.5 mb-5 font-mono cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ACCOUNT SIGN IN
          </button>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-cyan-400" /> Provision Analytics Node Context
            </h2>
            <p className="text-xs text-zinc-400 mt-1 font-mono">
              Register metadata within our multi-region DRF + MySQL microservices layer.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wide">Full Operator Name</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-cyan-400 font-sans"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wide">Security Ingestion Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-cyan-400 font-mono"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-zinc-400 font-mono uppercase tracking-wide">Assigned Cloud IAM Role Preset</label>
              <select 
                value={nodeRole}
                onChange={(e) => setNodeRole(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-purple-400 font-mono cursor-pointer"
              >
                <option value="Global Cloud Administrator & Architect">Global Cloud Administrator & Architect</option>
                <option value="Lead Business Analytics Intelligence Officer">Lead Business Analytics Intelligence Officer</option>
                <option value="Senior DevOps Ingestion Manager">Senior DevOps Ingestion Manager</option>
                <option value="SecOps Fraud Mitigation Auditor">SecOps Fraud Mitigation Auditor</option>
              </select>
            </div>

            <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 space-y-2">
              <span className="text-[10px] text-purple-400 font-mono block font-bold uppercase tracking-widest flex items-center gap-1">
                <Database className="w-3 h-3" /> Auto-Provisioned Infrastructure Bindings
              </span>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                By confirming, the system generates dedicated schemas in the cluster MySQL tables, links a CloudWatch diagnostic thread, and seeds an AI optimization context weights file.
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 text-white py-2.5 px-4 rounded-xl font-semibold text-xs tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-4"
            >
              {isLoading ? (
                <span className="animate-pulse">SPAWNING CLUSTER ASSETS...</span>
              ) : (
                <>
                  <span>CONFIRM SCHEMA DEPLOYMENT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-zinc-500 pt-4 border-t border-zinc-900">
            Already possess active token?{' '}
            <button 
              onClick={onNavigateToLogin}
              className="text-purple-400 hover:underline font-semibold cursor-pointer"
            >
              Authenticate via standard console
            </button>
          </div>

        </div>

        <div className="mt-4 text-center text-[10px] text-zinc-600 font-mono flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> DEPLOYMENT AUTOMATED VIA NEXUS REST BLUEPRINTS
        </div>
      </div>
    </div>
  );
};
