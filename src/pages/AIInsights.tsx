import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { 
  BrainCircuit, 
  ShieldAlert, 
  TrendingUp, 
  HelpCircle, 
  Zap, 
  Lightbulb, 
  Cpu, 
  CornerDownRight
} from 'lucide-react';
import { aiGeneratedInsights } from '../utils/mockData';

// Forecast timeline data with predictive elements
const forecastTimeline = [
  { month: 'Current', revenue: 14890000, confidenceLower: 14890000, confidenceUpper: 14890000 },
  { month: 'Month +1', revenue: 15400000, confidenceLower: 15100000, confidenceUpper: 15700000 },
  { month: 'Month +2', revenue: 16100000, confidenceLower: 15500000, confidenceUpper: 16600000 },
  { month: 'Month +3', revenue: 16900000, confidenceLower: 16200000, confidenceUpper: 17500000 },
  { month: 'Month +4', revenue: 17400000, confidenceLower: 16600000, confidenceUpper: 18200000 },
  { month: 'Month +5', revenue: 18100000, confidenceLower: 17100000, confidenceUpper: 19100000 },
];

export const AIInsights: React.FC = () => {
  const [customQuestion, setCustomQuestion] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);
  const [answerLog, setAnswerLog] = useState<Array<{ q: string; a: string }>>([
    { 
      q: 'What is our principal vector for structural cloud cost savings this quarter?', 
      a: 'Switching underutilized m5.xlarge instances to AWS Lambda serverless routines will decrease permanent cluster overhead by approximately 31.4% ($4,200/mo).' 
    }
  ]);

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsAnswering(true);
    const q = customQuestion;
    setCustomQuestion('');

    setTimeout(() => {
      let a = `NEXUS AI analysis complete for request. Relational database logs across the MySQL thread indicate a high correlation between customer tier upgrades and API endpoint traffic. Recommendation: allocate 15% more container pooling capacity in the us-east-1 server to prevent minor bottleneck latency spikes.`;
      
      if (q.toLowerCase().includes('fraud') || q.toLowerCase().includes('alert')) {
        a = `SecOps isolated threat mitigation protocol is active. 1 automated rate violation from an unverified proxy was caught and limited. No database leakage or user record exposure has occurred. Status is secure.`;
      } else if (q.toLowerCase().includes('revenue') || q.toLowerCase().includes('growth')) {
        a = `Mathematical modeling with 98.2% predictive confidence flags a Q3 gross yield of $17.4M, fueled by a seasonal +44% rise in AWS Marketplace listings contract conversions.`;
      }

      setAnswerLog(prev => [...prev, { q, a }]);
      setIsAnswering(false);
    }, 750);
  };

  return (
    <div className="space-y-6">
      
      {/* Upper AI Simulation Panel Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Conversational AI Core */}
        <div className="lg:col-span-2 glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-zinc-900 mb-4">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-purple-400 animate-pulse" />
                <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono">
                  NEXUS Cognitive Neural Analytics Assistant
                </h3>
              </div>
              <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/50 font-mono">
                Model: Llama 3B-Instruct Finetuned
              </span>
            </div>

            {/* Chat Response Stream Log */}
            <div className="space-y-3 max-h-64 overflow-y-auto mb-4 p-2 bg-zinc-900/40 rounded-xl border border-zinc-800 text-xs font-mono">
              {answerLog.map((log, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex gap-1.5 items-start text-zinc-400 bg-zinc-900 p-2 rounded-lg">
                    <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-zinc-500 block uppercase font-bold">Query Token</span>
                      <p className="text-zinc-200 font-sans">{log.q}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-start text-zinc-300 pl-4 border-l border-purple-500/30 py-1">
                    <CornerDownRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-purple-400 block uppercase font-bold">AI Agent Resolution</span>
                      <p className="text-zinc-300 font-sans leading-relaxed">{log.a}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isAnswering && (
                <div className="text-zinc-500 text-[11px] animate-pulse flex items-center gap-2 p-2">
                  <Cpu className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                  <span>Parsing multi-region Django and MySQL telemetry vectors...</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Query Trigger Forms */}
          <form onSubmit={handleAskQuestion} className="flex gap-2 bg-zinc-950 p-2 border border-zinc-800 rounded-xl">
            <input 
              type="text" 
              placeholder="Ask: 'Is there any fraud alert?' or type custom intelligence query..."
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="bg-transparent border-none text-xs text-zinc-200 focus:outline-none w-full pl-2 font-mono"
            />
            <button 
              type="submit"
              disabled={isAnswering || !customQuestion.trim()}
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-1.5 rounded-lg text-xs transition-all shrink-0 cursor-pointer disabled:opacity-40"
            >
              Run Query
            </button>
          </form>

          {/* Clickable Quick Starter Tags */}
          <div className="flex flex-wrap gap-2 mt-3 items-center text-[10px] font-mono text-zinc-500">
            <span>SUGGESTED VECTORS:</span>
            <button type="button" onClick={() => setCustomQuestion('Analyze risk parameters and active fraud warnings')} className="px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-400 hover:text-white">
              [Isolate Fraud Risk]
            </button>
            <button type="button" onClick={() => setCustomQuestion('Give me the Q3 gross revenue prediction matrix')} className="px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-400 hover:text-white">
              [Predictive Yields]
            </button>
          </div>
        </div>

        {/* Right 1 Column: Automated Risk Analysis Gauge Meter */}
        <div className="glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/30 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-400" /> Infrastructure Threat & Risk Dial
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Automated systemic coefficient calculating security posture vs credential violations
            </p>
          </div>

          <div className="my-6 text-center space-y-1">
            <div className="inline-flex items-center justify-center relative p-6 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-950 border-4 border-emerald-500/20 shadow-inner w-32 h-32 mx-auto">
              {/* Dynamic Overlay Text */}
              <div className="text-center">
                <span className="text-2xl font-extrabold text-emerald-400 font-mono block">0.03</span>
                <span className="text-[9px] text-zinc-500 uppercase tracking-tight block">Risk Score</span>
              </div>
              <div className="absolute top-1 right-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider pt-2 font-mono">
              CRITICAL LEVEL: EXTREMELY LOW
            </p>
          </div>

          <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1.5 text-[11px]">
            <div className="flex justify-between font-mono text-zinc-400">
              <span>Threat Mitigation Factor:</span>
              <span className="text-zinc-200 font-bold">100.00%</span>
            </div>
            <div className="flex justify-between font-mono text-zinc-400">
              <span>SQL Injection Isolation:</span>
              <span className="text-emerald-400 font-semibold">Active</span>
            </div>
          </div>
        </div>

      </div>

      {/* Lower Section: Q3 Business Growth Prediction Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Growth Forecast Area Chart */}
        <div className="lg:col-span-2 glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/20">
          <div className="pb-3 border-b border-zinc-900 mb-3 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" /> Next 5 Months Business Growth Prediction Models
              </h3>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Calculated via standard variance coefficients against active CRM user retention logs
              </p>
            </div>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
              98.2% Confidence Bounds
            </span>
          </div>

          <div className="h-56 w-full text-xs pt-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastTimeline} margin={{ top: 10, right: 15, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="predictionGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1f1f2e" strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" stroke="#a1a1aa" fontSize={10} />
                <YAxis stroke="#a1a1aa" fontSize={10} tickFormatter={(v) => `$${v/1000000}M`} />
                <Tooltip contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a' }} />
                <Area name="Median Predictive Path" type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2.5} fill="url(#predictionGrad)" />
                <Area name="Upper Variance Threshold" type="monotone" dataKey="confidenceUpper" stroke="#a855f7" strokeWidth={1} strokeDasharray="4 4" fill="none" />
                <Area name="Lower Risk Floor" type="monotone" dataKey="confidenceLower" stroke="#ec4899" strokeWidth={1} strokeDasharray="4 4" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Smart Recommendations Static Stack cards */}
        <div className="glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/20 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" /> Prescriptive Action Items Ledger
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Automated smart recommendations generated by the platform agent
            </p>
          </div>

          <div className="space-y-3 mt-4">
            {aiGeneratedInsights.map((insight, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] flex gap-2 items-start">
                <div className="p-1 rounded bg-purple-950 text-purple-400 mt-0.5 shrink-0">
                  <Zap className="w-3 h-3" />
                </div>
                <div>
                  <span className="font-bold text-zinc-300 block">{insight.title}</span>
                  <span className="text-zinc-400 text-[10px] line-clamp-2 mt-0.5">{insight.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
