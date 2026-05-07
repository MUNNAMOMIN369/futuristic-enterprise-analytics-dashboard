import React, { useState } from 'react';
import { Shield, Lock, Mail, Terminal, ArrowRight, Sparkles } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: (user: { name: string; email: string; role: string }) => void;
  onNavigateToRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess, onNavigateToRegister }) => {
  const [email, setEmail] = useState('admin@nexus-enterprise.io');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        name: 'Alexander Wright',
        email: 'admin@nexus-enterprise.io',
        role: 'Global Cloud Administrator & Architect'
      });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#030303] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/30 via-zinc-950 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Absolute Decorative Tech Rings */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="w-full max-w-lg relative z-10">
        {/* Decorative Grid Mesh overlay background style */}
        <div className="glass-panel border border-zinc-800 p-8 rounded-3xl shadow-2xl relative bg-zinc-950/80 animate-neon-glow">
          
          {/* Header branding inside box */}
          <div className="text-center mb-8">
            <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20 mb-3 animate-bounce">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white font-sans">
              NEXUS COMMAND CENTER
            </h2>
            <p className="text-xs text-zinc-400 font-mono mt-1 uppercase tracking-widest">
              SecOps IAM Authentication Node
            </p>
          </div>

          {/* Quick Pre-fill helper banner */}
          <div className="mb-6 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-zinc-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Pre-seeded academic presentation mode enabled.</span>
            </div>
            <span className="text-[10px] font-mono bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800/50">
              Demo Ready
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 text-xs bg-rose-950/50 border border-rose-500/30 text-rose-300 rounded-xl">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs text-zinc-400 uppercase tracking-wider font-mono block">
                User Identity Token (Email)
              </label>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 focus-within:border-purple-500/50 transition-all">
                <Mail className="w-4 h-4 text-zinc-500" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none text-sm text-zinc-200 focus:outline-none w-full font-mono"
                  placeholder="name@enterprise.io"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs text-zinc-400 uppercase tracking-wider font-mono block">
                  SecOps Cryptographic Key
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Academic demo fallback: password recovery bypass authorized."); }} className="text-[11px] text-cyan-400 hover:underline">
                  Bypass Key?
                </a>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 focus-within:border-purple-500/50 transition-all">
                <Lock className="w-4 h-4 text-zinc-500" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-none text-sm text-zinc-200 focus:outline-none w-full font-mono"
                  placeholder="Enter access string"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-xl shadow-purple-900/20 hover:shadow-cyan-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center gap-2 font-mono text-xs">
                  <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent" />
                  INITIATING PROTOCOLS...
                </span>
              ) : (
                <>
                  <span>Mount Full Dashboard Context</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Registration link option */}
          <div className="mt-6 text-center text-xs text-zinc-500 border-t border-zinc-900 pt-4">
            New node cluster architect?{' '}
            <button 
              onClick={onNavigateToRegister}
              className="text-cyan-400 hover:underline font-semibold cursor-pointer"
            >
              Provision a new account context
            </button>
          </div>

        </div>

        {/* Footer Meta Details */}
        <div className="mt-4 flex justify-between px-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-emerald-500" /> TLS 1.3 AES-256 Enabled
          </span>
          <span>SYSTEM ARCHITECTURE v3.8.2</span>
        </div>
      </div>
    </div>
  );
};
