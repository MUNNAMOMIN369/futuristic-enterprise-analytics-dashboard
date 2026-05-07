import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Sliders, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Activity, 
  Lock, 
  RefreshCw,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { liveServerLogs } from '../utils/mockData';

export const AdminPanel: React.FC = () => {
  const [fraudThreshold, setFraudThreshold] = useState(45);
  const [cpuScaleTrigger, setCpuScaleTrigger] = useState(75);
  const [isFirewallActive, setIsFirewallActive] = useState(true);
  const [isLogsPulsing, setIsLogsPulsing] = useState(true);

  // Severe alert styling helper
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'WARNING': return 'bg-amber-950/60 text-amber-400 border border-amber-800/40';
      case 'SUCCESS': return 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40';
      default: return 'bg-blue-950/60 text-blue-400 border border-blue-800/40';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Parameter Control Grid Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Infrastructure Threshold Modifiers */}
        <div className="lg:col-span-2 glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/30 flex flex-col justify-between">
          <div>
            <div className="pb-3 border-b border-zinc-800 mb-4">
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-400" /> Django REST & MySQL Node Threshold Modifiers
              </h3>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Directly tune programmatic cluster thresholds simulating production orchestration parameters
              </p>
            </div>

            <div className="space-y-6 my-4">
              {/* Parameter Slider 1: Fraud Rate limit */}
              <div className="space-y-2 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-200 font-bold flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Fraud API Request Rate Deceleration Limit
                  </span>
                  <span className="text-cyan-400 font-extrabold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                    {fraudThreshold} req / sec
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="150" 
                  value={fraudThreshold} 
                  onChange={(e) => setFraudThreshold(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer h-1.5 bg-zinc-950 rounded-lg"
                />
                <span className="text-[10px] text-zinc-500 block">
                  Enforces continuous leaky-bucket limits across CRM and unverified multi-tenant API source connectors.
                </span>
              </div>

              {/* Parameter Slider 2: CPU Trigger */}
              <div className="space-y-2 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-200 font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" /> AWS EC2 Cluster Horizontal Scaling Capacity Trigger
                  </span>
                  <span className="text-purple-400 font-extrabold bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/50">
                    {cpuScaleTrigger}% Workload
                  </span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="95" 
                  value={cpuScaleTrigger} 
                  onChange={(e) => setCpuScaleTrigger(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-950 rounded-lg"
                />
                <span className="text-[10px] text-zinc-500 block">
                  Once continuous usage bridges this coefficient, a lambda webhook spins up 2 identical docker microservice pods.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Toggle Controls */}
          <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-4 items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-6">
              {/* Firewall Switch */}
              <div className="flex items-center gap-2">
                <button 
                  type="button" 
                  onClick={() => setIsFirewallActive(!isFirewallActive)} 
                  className="text-zinc-400 hover:text-white cursor-pointer"
                >
                  {isFirewallActive ? <ToggleRight className="w-7 h-7 text-emerald-400" /> : <ToggleLeft className="w-7 h-7 text-zinc-600" />}
                </button>
                <div>
                  <span className="text-zinc-300 block font-semibold text-[11px]">TLS 1.3 SecOps Web Filter</span>
                  <span className="text-[10px] text-zinc-500">{isFirewallActive ? 'ENGAGED' : 'BYPASSED'}</span>
                </div>
              </div>

              {/* Logs loop switcher */}
              <div className="flex items-center gap-2">
                <button 
                  type="button" 
                  onClick={() => setIsLogsPulsing(!isLogsPulsing)} 
                  className="text-zinc-400 hover:text-white cursor-pointer"
                >
                  {isLogsPulsing ? <ToggleRight className="w-7 h-7 text-cyan-400" /> : <ToggleLeft className="w-7 h-7 text-zinc-600" />}
                </button>
                <div>
                  <span className="text-zinc-300 block font-semibold text-[11px]">Real-Time Streaming Telemetry</span>
                  <span className="text-[10px] text-zinc-500">{isLogsPulsing ? 'LIVE POLLING' : 'PAUSED'}</span>
                </div>
              </div>
            </div>

            <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-900/50 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> SECURE ROOT CONFIG MOUNTED
            </span>
          </div>
        </div>

        {/* Right 1 Column: Security Posture Summary Box */}
        <div className="glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/30 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" /> SecOps Node Isolation Matrix
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Cryptographic tokens currently blacklisted across public load balancers
            </p>
          </div>

          <div className="my-4 space-y-2.5">
            <div className="p-2.5 rounded-lg bg-zinc-900 border-l-2 border-rose-500 text-xs font-mono">
              <div className="flex justify-between text-rose-400 font-bold text-[10px]">
                <span>TOKEN: token_crm_invalid_772</span>
                <span>BLOCKED</span>
              </div>
              <p className="text-zinc-400 text-[11px] mt-0.5">Origin: 198.162.0.44 (API Rate Violations)</p>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-900 border-l-2 border-amber-500 text-xs font-mono">
              <div className="flex justify-between text-amber-400 font-bold text-[10px]">
                <span>TOKEN: token_anonymous_proxy_11</span>
                <span>THROTTLED (10%)</span>
              </div>
              <p className="text-zinc-400 text-[11px] mt-0.5">Origin: 45.2.19.102 (Concurrent sync spike)</p>
            </div>
          </div>

          <button 
            type="button" 
            onClick={() => alert("Re-initializing master firewall state token sequence...")}
            className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl border border-zinc-800 font-mono text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
            <span>Flush Invalidation Pools</span>
          </button>
        </div>

      </div>

      {/* 2. LIVE SYSTEM TELEMETRY LOGGER OUTPUT TERMINAL BOX */}
      <div className="glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/20">
        <div className="pb-3 border-b border-zinc-900 mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400 animate-pulse" /> Production Cluster Live Log Terminal (Django Core + MySQL Pool)
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Live stream capture of inbound requests, SQL execution metrics, and container thread context parameters
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-900/40">
            <Activity className="w-3 h-3 text-emerald-400 animate-spin" /> Stream Active
          </span>
        </div>

        {/* Real Code-like Log Table Lines */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden font-mono text-[11px]">
          <div className="grid grid-cols-12 bg-zinc-900 p-2 text-zinc-500 text-[10px] font-bold border-b border-zinc-950 uppercase tracking-wider">
            <div className="col-span-1">TIMESTAMP</div>
            <div className="col-span-2">FACILITY CONTEXT</div>
            <div className="col-span-2">SEVERITY TIER</div>
            <div className="col-span-7">INGESTED MESSAGE DETAILS</div>
          </div>

          <div className="divide-y divide-zinc-900/80 p-1 space-y-0.5 max-h-64 overflow-y-auto font-mono text-zinc-300">
            {liveServerLogs.map((log) => (
              <div key={log.id} className="grid grid-cols-12 p-2 items-center hover:bg-zinc-900/40 transition-colors">
                <div className="col-span-1 text-zinc-500 text-[10px]">{log.time}</div>
                <div className="col-span-2 font-bold text-cyan-400 truncate pr-2">{log.facility}</div>
                <div className="col-span-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${getSeverityBadge(log.severity)}`}>
                    {log.severity}
                  </span>
                </div>
                <div className="col-span-7 text-zinc-300 text-[11px] truncate font-mono text-zinc-100 font-light">
                  {log.message}
                </div>
              </div>
            ))}
            
            {/* Extended lines to give realistic depth */}
            <div className="grid grid-cols-12 p-2 items-center text-zinc-500 text-[10px] italic">
              <div className="col-span-1">14:25:12</div>
              <div className="col-span-2 text-purple-400 font-bold">SYS-DAEMON</div>
              <div className="col-span-2"><span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">INFO</span></div>
              <div className="col-span-7 font-sans">Garbage collection pass cleared 14 idle socket contexts. Sleep timer configured to 30000ms.</div>
            </div>
          </div>
        </div>

        {/* Academic Presentation Advice block */}
        <div className="mt-4 p-3 rounded-xl bg-purple-950/10 border border-purple-500/10 text-zinc-400 text-xs leading-relaxed">
          💡 <strong>Academic Report Integration Hint:</strong> This panel models high-level infrastructure configuration parameters. Take snapshots of this grid layout when writing chapters relating to fault tolerance, state persistence, or automated security threat vectors separation.
        </div>

      </div>
    </div>
  );
};
