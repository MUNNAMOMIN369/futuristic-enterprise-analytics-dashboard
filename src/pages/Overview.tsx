import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend 
} from 'recharts';
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  ShieldAlert, 
  Smile,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Zap,
  CheckCircle,
  Database,
  ArrowRight
} from 'lucide-react';
import { kpiMetrics, revenueTimeline, salesByChannel, customerSegments, aiGeneratedInsights } from '../utils/mockData';

interface OverviewProps {
  setCurrentPage: (page: string) => void;
}

export const Overview: React.FC<OverviewProps> = ({ setCurrentPage }) => {
  // Map strings to Lucide components safely
  const renderKpiIcon = (iconName: string, color: string) => {
    const props = { className: `w-5 h-5 text-${color}-400` };
    switch (iconName) {
      case 'DollarSign': return <DollarSign {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Users': return <Users {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Smile': return <Smile {...props} />;
      default: return <DollarSign {...props} />;
    }
  };

  // Color mapping utility for standard Tailwind background borders
  const getColorClass = (color: string) => {
    switch (color) {
      case 'purple': return 'from-purple-500/10 to-transparent border-purple-500/20 shadow-purple-500/5';
      case 'cyan': return 'from-cyan-500/10 to-transparent border-cyan-500/20 shadow-cyan-500/5';
      case 'blue': return 'from-blue-500/10 to-transparent border-blue-500/20 shadow-blue-500/5';
      case 'emerald': return 'from-emerald-500/10 to-transparent border-emerald-500/20 shadow-emerald-500/5';
      case 'amber': return 'from-amber-500/10 to-transparent border-amber-500/20 shadow-amber-500/5';
      case 'rose': return 'from-rose-500/10 to-transparent border-rose-500/20 shadow-rose-500/5';
      default: return 'from-zinc-500/10 to-transparent border-zinc-800 shadow-zinc-500/5';
    }
  };

  return (
    <div className="space-y-6">
      {/* Dynamic Welcome Hero Intelligence Summary */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/30 via-blue-950/20 to-zinc-950 border border-purple-500/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full bg-cyan-500/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 px-2.5 py-1 rounded-full w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-mono tracking-wide text-purple-200 uppercase font-bold">
                Automated AI Analysis Active
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Welcome Back to the NEXUS Intelligence Cluster
            </h2>
            <p className="text-zinc-400 text-xs mt-1 max-w-2xl leading-relaxed">
              Your Django REST server and MySQL backend are synchronous. Inbound events across 4 channels are processing with an average container execution latency of <span className="text-cyan-400 font-mono font-semibold">2.4ms</span>.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentPage('architecture')}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 font-medium border border-zinc-800 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span>Inspect AWS Blueprint</span>
            </button>
            <button 
              onClick={() => setCurrentPage('insights')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-95 text-xs text-white font-semibold transition-all shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <span>Consult Core AI Agent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 1. TOP KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpiMetrics.map((kpi) => (
          <div 
            key={kpi.id} 
            className={`glass-panel border bg-gradient-to-b p-4 rounded-2xl flex flex-col justify-between glass-panel-hover ${getColorClass(kpi.color)}`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-zinc-400 font-medium tracking-tight truncate">
                {kpi.title}
              </span>
              <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 shrink-0">
                {renderKpiIcon(kpi.icon, kpi.color)}
              </div>
            </div>

            <div className="mt-3">
              <span className="text-xl font-bold tracking-tight text-white font-mono block truncate">
                {kpi.value}
              </span>
              
              <div className="flex items-center gap-1.5 mt-1.5 overflow-hidden">
                <span className={`text-[10px] font-mono font-bold px-1 py-0.5 rounded flex items-center shrink-0 ${
                  kpi.isPositive ? 'text-emerald-400 bg-emerald-950/40' : 'text-rose-400 bg-rose-950/40'
                }`}>
                  {kpi.isPositive ? <ArrowUpRight className="w-2.5 h-2.5 inline" /> : <ArrowDownRight className="w-2.5 h-2.5 inline" />}
                  {kpi.change}
                </span>
                <span className="text-[10px] text-zinc-500 truncate font-sans">
                  {kpi.timeframe}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. CORE ANALYTICS CHARTS SPLIT GRAPH GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Macro Revenue Line / Area Chart */}
        <div className="lg:col-span-2 glass-panel border border-zinc-800/80 rounded-2xl p-5 flex flex-col bg-zinc-950/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-900 mb-4">
            <div>
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> Consolidated Gross Revenue Stream Timeline
              </h3>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Real-time tracking of SaaS multitenant models vs direct cloud architecture integrations
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono bg-zinc-900 p-1 border border-zinc-800 rounded-lg">
              <span className="bg-purple-950/60 text-purple-300 px-2 py-0.5 rounded font-semibold">USD Ledger</span>
              <span className="text-zinc-500 px-1">Continuous Ingest</span>
            </div>
          </div>

          <div className="h-72 w-full mt-2 text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTimeline} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="saasGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f1f2e" opacity={0.4} />
                <XAxis dataKey="month" stroke="#71717a" tickLine={false} fontSize={10} />
                <YAxis stroke="#71717a" tickLine={false} fontSize={10} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '12px' }}
                  itemStyle={{ color: '#e4e4e7', fontSize: '11px' }}
                  labelStyle={{ color: '#a1a1aa', fontWeight: 'bold' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '11px' }} />
                <Area name="Cloud Architecture Nodes" type="monotone" dataKey="cloudRevenue" stroke="#8b5cf6" strokeWidth={2.5} fillOpacity={1} fill="url(#cloudGrad)" />
                <Area name="SaaS Tenant Core Portal" type="monotone" dataKey="saasRevenue" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#saasGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right 1 Column: Customer Segmentation Pie Chart */}
        <div className="glass-panel border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-between bg-zinc-950/30">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-purple-400" /> Customer Segmentation
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Demographic breakdown by server tier commitments
            </p>
          </div>

          <div className="h-52 w-full relative my-auto flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerSegments}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {customerSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `${value}% Share`}
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Absolute indicator badge in the middle */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-extrabold text-white font-mono">100%</span>
              <span className="text-[9px] text-zinc-500 uppercase font-mono">Verified Pool</span>
            </div>
          </div>

          {/* Custom Legends Grid */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-900 text-[11px]">
            {customerSegments.map((seg, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} />
                <span className="truncate">{seg.name} ({seg.value}%)</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. LOWER STREAM: SALES CHANNELS BAR GRAPH & TOP LIVE INSIGHTS SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Sales bar graph */}
        <div className="glass-panel border border-zinc-800/80 rounded-2xl p-5 flex flex-col bg-zinc-950/30">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5 text-blue-400" /> Sales Volume Channels Graph
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Comparative volume distribution parsed by the Django REST API pipeline
            </p>
          </div>

          <div className="h-56 w-full mt-4 text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesByChannel} layout="vertical" margin={{ top: 5, right: 15, left: 35, bottom: 5 }}>
                <CartesianGrid strokeDasharray="2 2" stroke="#1f1f2e" opacity={0.3} horizontal={false} />
                <XAxis type="number" stroke="#71717a" tickLine={false} fontSize={10} />
                <YAxis type="category" dataKey="name" stroke="#a1a1aa" tickLine={false} fontSize={10} />
                <Tooltip 
                  formatter={(value) => [`${value} Orders`, 'Volume']}
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a' }}
                />
                <Bar dataKey="sales" fill="#3b82f6" radius={[0, 6, 6, 0]}>
                  {salesByChannel.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8b5cf6' : '#06b6d4'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Real-time Automated AI Insights Quick View Component */}
        <div className="glass-panel border border-zinc-800/80 rounded-2xl p-5 flex flex-col bg-zinc-950/30 justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-zinc-900 mb-3">
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Real-time Automated Agent Stream
              </h3>
              <button 
                onClick={() => setCurrentPage('insights')} 
                className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Full AI Hub</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            
            {/* Map out top 2-3 insights with beautiful styling */}
            <div className="space-y-3">
              {aiGeneratedInsights.slice(0, 3).map((insight, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-xl border text-xs flex flex-col gap-1 transition-all hover:bg-zinc-900/60 ${
                    insight.type === 'success' ? 'bg-emerald-950/10 border-emerald-500/20' :
                    insight.type === 'warning' ? 'bg-amber-950/10 border-amber-500/20' : 'bg-purple-950/10 border-purple-500/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`font-bold font-mono px-1.5 py-0.5 rounded text-[10px] uppercase ${
                      insight.type === 'success' ? 'text-emerald-400 bg-emerald-950/50' :
                      insight.type === 'warning' ? 'text-amber-400 bg-amber-950/50' : 'text-purple-400 bg-purple-950/50'
                    }`}>
                      {insight.impact}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">{insight.timestamp}</span>
                  </div>
                  <p className="text-zinc-200 font-semibold mt-1">{insight.title}</p>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
