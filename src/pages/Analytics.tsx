import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  Area, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { 
  Globe, 
  Activity, 
  Filter, 
  RefreshCw, 
  Grid, 
  Flame, 
  ArrowUpRight, 
  TrendingUp,
  Server
} from 'lucide-react';
import { revenueTimeline, regionalTraffic, weeklyGrowthHeatmap } from '../utils/mockData';

export const Analytics: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [timeframe, setTimeframe] = useState('12M');

  // Heatmap heat level color utility
  const getHeatColor = (value: number) => {
    if (value > 100) return 'bg-purple-600 font-bold text-white shadow-sm shadow-purple-500/50';
    if (value > 80) return 'bg-blue-600 text-zinc-100';
    if (value > 50) return 'bg-cyan-700/80 text-zinc-200';
    return 'bg-zinc-900 text-zinc-400';
  };

  return (
    <div className="space-y-6">
      {/* Configuration Action Bar */}
      <div className="p-4 bg-zinc-900/90 border border-zinc-800/80 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zinc-800 rounded-xl text-cyan-400">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs text-zinc-400 block font-mono">ACTIVE DATA FILTER</span>
            <span className="text-xs text-white font-bold font-sans">Multi-Tenant Context Scope</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Region Switcher */}
          <select 
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 text-xs text-zinc-300 font-mono focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            <option value="ALL">All Cloud Edge Regions</option>
            <option value="US">us-east-1 Only</option>
            <option value="EU">eu-west-1 Only</option>
            <option value="APAC">ap-southeast-1 Only</option>
          </select>

          {/* Timeframe Switcher */}
          <div className="bg-zinc-950 p-1 rounded-xl border border-zinc-800 flex items-center gap-1">
            {['30D', '90D', '12M'].map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3 py-1 text-[11px] font-mono rounded-lg transition-all cursor-pointer ${
                  timeframe === t 
                    ? 'bg-purple-600 text-white font-bold shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-xl transition-all cursor-pointer" title="Recalculate models">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Charts Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Monthly Comparison Mixed Graph (Line, Area, Bar combo) */}
        <div className="lg:col-span-2 glass-panel border border-zinc-800/80 rounded-2xl p-5 flex flex-col bg-zinc-950/20">
          <div className="pb-4 border-b border-zinc-900 mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" /> Monthly Growth & Multi-Tier Comparison Graph
              </h3>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Simulated aggregation of infrastructure workloads by Cloud Nodes vs Enterprise contracts
              </p>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/30">
              DRF Realtime Feed
            </span>
          </div>

          <div className="h-72 w-full text-xs mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={revenueTimeline} margin={{ top: 10, right: -5, left: -15, bottom: 0 }}>
                <CartesianGrid stroke="#1f1f2e" strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" stroke="#a1a1aa" fontSize={10} tickLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={10} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a' }} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Area name="Enterprise Core Inflow" type="monotone" dataKey="enterpriseRevenue" fill="#1e1b4b" stroke="#4c1d95" opacity={0.6} />
                <Bar name="SaaS Tenant Core" dataKey="saasRevenue" barSize={16} fill="#06b6d4" radius={[4, 4, 0, 0]} />
                <Line name="Premium Cloud Nodes Delta" type="linear" dataKey="cloudRevenue" stroke="#a855f7" strokeWidth={3} dot={{ r: 3 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Global Node Hotspots & Traffic Analytics List */}
        <div className="glass-panel border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-between bg-zinc-950/20">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '20s' }} /> World Node Telemetry Analytics
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Live concurrent query distributions by active AWS Availability Zone anchors
            </p>
          </div>

          {/* Map Simulation Graphic Box */}
          <div className="my-3 p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 relative overflow-hidden flex flex-col justify-between h-40">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="flex justify-between items-start relative z-10">
              <span className="text-[10px] text-zinc-500 font-mono">GLOBAL COORDINATES MESH</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 border border-cyan-800 rounded">Active Ping</span>
            </div>

            {/* Glowing fake nodes maps points */}
            <div className="relative h-20 w-full">
              <div className="absolute top-4 left-6 group cursor-pointer" title="us-east-1 Node">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-purple-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                <span className="text-[8px] font-mono text-zinc-400 block -mt-1 ml-3 bg-zinc-950/80 px-1 rounded">US-East (42%)</span>
              </div>

              <div className="absolute top-8 right-24 group cursor-pointer" title="eu-west-1 Node">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-cyan-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                <span className="text-[8px] font-mono text-zinc-400 block -mt-1 ml-3 bg-zinc-950/80 px-1 rounded">EU-West (31%)</span>
              </div>

              <div className="absolute bottom-4 right-8 group cursor-pointer" title="ap-southeast-1 Node">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-amber-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                <span className="text-[8px] font-mono text-zinc-400 block -mt-1 ml-3 bg-zinc-950/80 px-1 rounded">APAC-East (16%)</span>
              </div>
            </div>
          </div>

          {/* Traffic Breakdown list rows */}
          <div className="space-y-2 pt-2 border-t border-zinc-900">
            {regionalTraffic.map((reg, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/40 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-zinc-300 font-sans truncate max-w-[120px]">{reg.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 text-[11px]">{reg.traffic}</span>
                  <span className={`text-[10px] font-bold px-1 py-0.2 rounded ${
                    reg.health === 'Optimal' ? 'text-emerald-400 bg-emerald-950/40' : 'text-amber-400 bg-amber-950/40'
                  }`}>
                    {reg.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 2. WEEKLY GROWTH HEATMAP MATRIX GRID */}
      <div className="glass-panel border border-zinc-800/80 rounded-2xl p-5 bg-zinc-950/20">
        <div className="pb-3 border-b border-zinc-900 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Grid className="w-3.5 h-3.5 text-cyan-400" /> Weekly Ingestion Heatmap Index Matrix
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Visualizes pipeline event ingestion density (events/sec) across 24-hour global server intervals
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1"><Flame className="w-3 h-3 text-purple-500" /> &gt;90 High Load</span>
            <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-cyan-400" /> &lt;50 Idle Node</span>
          </div>
        </div>

        {/* Heatmap Grid Layout */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px] space-y-1.5 pt-1">
            {/* Table Header Hours */}
            <div className="grid grid-cols-5 text-center text-[10px] font-mono font-bold text-zinc-500 pb-1">
              <div className="text-left pl-2">TEMPORAL DAY</div>
              <div>00:00 - 06:00 (Night Batch)</div>
              <div>06:00 - 12:00 (EU Peak)</div>
              <div>12:00 - 18:00 (US Peak)</div>
              <div>18:00 - 24:00 (APAC Cycles)</div>
            </div>

            {/* Matrix Data Rows */}
            {weeklyGrowthHeatmap.map((row, i) => (
              <div key={i} className="grid grid-cols-5 gap-2 items-center text-center">
                <div className="text-left font-mono font-bold text-xs text-zinc-300 py-2 pl-2 bg-zinc-900 border border-zinc-800 rounded-lg">
                  {row.day}
                </div>
                <div className={`py-2 rounded-lg text-xs font-mono transition-colors ${getHeatColor(row['00-06'])}`}>
                  {row['00-06']} req/s
                </div>
                <div className={`py-2 rounded-lg text-xs font-mono transition-colors ${getHeatColor(row['06-12'])}`}>
                  {row['06-12']} req/s
                </div>
                <div className={`py-2 rounded-lg text-xs font-mono transition-colors ${getHeatColor(row['12-18'])}`}>
                  {row['12-18']} req/s
                </div>
                <div className={`py-2 rounded-lg text-xs font-mono transition-colors ${getHeatColor(row['18-24'])}`}>
                  {row['18-24']} req/s
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explanatory Academic Report Note */}
        <div className="mt-4 p-3 rounded-xl bg-purple-950/10 border border-purple-500/10 text-[11px] text-zinc-400 font-sans flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Analytical Deduction:</strong> Mid-week intervals (Wed/Thu) between 12:00 - 18:00 exhibit standard deviation spikes mirroring enterprise CRM cron workflows. Infrastructure scales horizontally to cushion this load automatically.
          </span>
        </div>
      </div>
    </div>
  );
};
