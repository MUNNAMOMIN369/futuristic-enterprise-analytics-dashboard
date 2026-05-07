import React, { useState } from 'react';
import { 
  Users, 
  LayoutDashboard, 
  Network, 
  Server, 
  Cpu, 
  Database, 
  BarChart3, 
  FileText, 
  ArrowDown, 
  HelpCircle,
  Layers,
  CheckCircle2,
  AlertCircle,
  Cloud,
  FileSpreadsheet,
  Link,
  Shuffle
} from 'lucide-react';

interface ComponentDetail {
  title: string;
  type: string;
  tech: string;
  description: string;
  status: 'Optimal' | 'Scales Active' | 'Idle';
  metrics: string;
}

export const Architecture: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>('api-gateway');

  // Comprehensive node specification details for enterprise screenshot depth
  const nodeSpecs: Record<string, ComponentDetail> = {
    'data-sources': {
      title: 'Heterogeneous Data Sources Ingestion Pool',
      type: 'Input Layer',
      tech: 'CSV Files, CRM Webhooks, Web Clickstreams, Third-party APIs',
      description: 'Asynchronous multi-origin ingestion layer. Data is captured via public endpoints and buffered into cloud storage for normalization.',
      status: 'Optimal',
      metrics: '43.2 GB raw ingest volume per 24h cycle'
    },
    'users': {
      title: 'Global Concurrent End Users Pool',
      type: 'Client Layer',
      tech: 'React 19 Framework Client SPAs, Mobile iOS/Android SDKs',
      description: 'Distributed tenant requests authenticated via cryptographically signed JWT keys.',
      status: 'Optimal',
      metrics: '2,841,904 active web connections'
    },
    'frontend-dashboard': {
      title: 'NEXUS Frontend UI Node Client',
      type: 'Presentation Web Node',
      tech: 'ReactJS + Vite Engine + Tailwind Glassmorphism UI',
      description: 'Optimized high-fidelity analytics view hosted on AWS S3 with CloudFront CDN distribution caching globally at 240+ Edge Locations.',
      status: 'Optimal',
      metrics: '99.98% Cache Hit Rate at CloudFront Edge'
    },
    'api-gateway': {
      title: 'AWS API Gateway Proxy Controller',
      type: 'Routing & Security Node',
      tech: 'Amazon API Gateway + Custom IAM Lambda Authorizers',
      description: 'Handles cross-origin resource isolation, continuous rate-limiting protection, throttle algorithms, and handles request mapping to backend microservices.',
      status: 'Optimal',
      metrics: '0.00% verification failures over 4.8M queries'
    },
    'backend-server': {
      title: 'Django REST Framework Microservice Pods',
      type: 'Compute Engine Logic',
      tech: 'DRF + Gunicorn + AWS EC2 Auto-Scaling Cluster Groups',
      description: 'Processes relational schema validations, handles programmatic multi-tier database queries, and updates analytical ledgers seamlessly.',
      status: 'Scales Active',
      metrics: 'CPU Cluster Utilization at 79.4% (Horizontal scaling engaged)'
    },
    'ml-engine': {
      title: 'Cognitive Prediction & Machine Learning Engine',
      type: 'Artificial Intelligence Serverless Node',
      tech: 'Python scikit-learn + AWS Lambda + Matrix Vector Weights Tensor',
      description: 'Asynchronously runs automated fraud matrix checks, customer cohort churn predictions, and isolates abnormal traffic deviations.',
      status: 'Optimal',
      metrics: '98.2% Predictive Confidence Matrix accuracy'
    },
    'database': {
      title: 'Enterprise Transactional Database Node',
      type: 'Persistent Storage Tier',
      tech: 'MySQL High-Availability Relational DB Cluster + AWS RDS Instance',
      description: 'Maintains structured relational schemas, ledger verification logs, and active identity records with Multi-AZ redundancy backups.',
      status: 'Optimal',
      metrics: 'Active replication lag &lt; 2.4ms across secondary databases'
    },
    'analytics-engine': {
      title: 'Amazon QuickSight & NEXUS Core Analytics Pipeline',
      type: 'Business Intelligence Aggregator',
      tech: 'AWS QuickSight API Connectors + Recharts Core Matrix Engine',
      description: 'Aggregates long-term temporal revenue arrays, processes real-time chart definitions, and outputs formatted JSON blocks for UI rendering.',
      status: 'Optimal',
      metrics: 'Render latency &lt; 14ms per comprehensive grid layout query'
    },
    'dashboard-reports': {
      title: 'Automated Compliance Ledger Reports Output',
      type: 'Output Generation Layer',
      tech: 'Automated PDF Render Workers + AWS S3 Bucket Storage',
      description: 'Allows enterprise executives to query point-in-time financial snapshots and legally valid PDF data ledgers with secure cloud signoffs.',
      status: 'Idle',
      metrics: '1,240 automated monthly logs cached successfully'
    }
  };

  const currentNode = selectedNode ? nodeSpecs[selectedNode] : null;

  return (
    <div className="space-y-6">
      {/* Topology Intro Header Box */}
      <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <span className="text-xs text-purple-400 font-mono block tracking-wider font-bold">AWS & PLATFORM CORE SYSTEM TOPOLOGY</span>
          <h3 className="text-sm font-bold text-white mt-0.5">Interactive Full-Stack Architecture Workflow Blueprint</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono bg-zinc-950 p-2 rounded-lg border border-zinc-800">
          <Cloud className="w-3.5 h-3.5 text-cyan-400" />
          <span>Click any blueprint element below to stream its telemetry constraints</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: The Architecture Diagram Flow Graph */}
        <div className="xl:col-span-2 glass-panel border border-zinc-800/80 rounded-2xl p-6 bg-gradient-to-br from-zinc-950 via-zinc-900/40 to-black relative">
          
          {/* Ingestion Inputs Row */}
          <div className="mb-8">
            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3 text-center sm:text-left">
              [Phase 01] Heterogeneous Multi-Source Ingestion Pool
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div 
                onClick={() => setSelectedNode('data-sources')}
                className={`p-3 rounded-xl border transition-all text-center cursor-pointer ${
                  selectedNode === 'data-sources' ? 'bg-purple-950/40 border-purple-400 shadow-md shadow-purple-500/10' : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <FileSpreadsheet className="w-5 h-5 mx-auto text-purple-400 mb-1" />
                <span className="text-xs font-semibold text-zinc-200 block">CSV Flat Data</span>
                <span className="text-[9px] text-zinc-500 font-mono">S3 Buffer Bucket</span>
              </div>
              <div 
                onClick={() => setSelectedNode('data-sources')}
                className={`p-3 rounded-xl border transition-all text-center cursor-pointer ${
                  selectedNode === 'data-sources' ? 'bg-purple-950/40 border-purple-400 shadow-md shadow-purple-500/10' : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <Link className="w-5 h-5 mx-auto text-blue-400 mb-1" />
                <span className="text-xs font-semibold text-zinc-200 block">External APIs</span>
                <span className="text-[9px] text-zinc-500 font-mono">DRF Framework</span>
              </div>
              <div 
                onClick={() => setSelectedNode('data-sources')}
                className={`p-3 rounded-xl border transition-all text-center cursor-pointer ${
                  selectedNode === 'data-sources' ? 'bg-purple-950/40 border-purple-400 shadow-md shadow-purple-500/10' : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <Shuffle className="w-5 h-5 mx-auto text-cyan-400 mb-1" />
                <span className="text-xs font-semibold text-zinc-200 block">Enterprise CRM</span>
                <span className="text-[9px] text-zinc-500 font-mono">Webhook Listener</span>
              </div>
              <div 
                onClick={() => setSelectedNode('data-sources')}
                className={`p-3 rounded-xl border transition-all text-center cursor-pointer ${
                  selectedNode === 'data-sources' ? 'bg-purple-950/40 border-purple-400 shadow-md shadow-purple-500/10' : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <Users className="w-5 h-5 mx-auto text-emerald-400 mb-1" />
                <span className="text-xs font-semibold text-zinc-200 block">Web Clickstream</span>
                <span className="text-[9px] text-zinc-500 font-mono">AWS CloudWatch</span>
              </div>
            </div>
          </div>

          {/* Core Pipeline Downstream Map Visualization */}
          <div>
            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center sm:text-left">
              [Phase 02] Complete Cloud Core Pipeline Routing Sequence
            </p>

            <div className="space-y-4 max-w-xl mx-auto">
              
              {/* Row: Users */}
              <div 
                onClick={() => setSelectedNode('users')}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedNode === 'users' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-cyan-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">STEP 01 // CLIENTS</span>
                    <span className="text-sm font-bold text-white">Concurrent Global Users Accessing Portal</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">Live Traffic</span>
              </div>

              <div className="flex justify-center my-1"><ArrowDown className="w-4 h-4 text-zinc-600 animate-bounce" /></div>

              {/* Row: Frontend Dashboard */}
              <div 
                onClick={() => setSelectedNode('frontend-dashboard')}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedNode === 'frontend-dashboard' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-purple-400">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">STEP 02 // UI TIER</span>
                    <span className="text-sm font-bold text-white">NEXUS Frontend Client Framework (AWS S3)</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">CloudFront CDN</span>
              </div>

              <div className="flex justify-center my-1"><ArrowDown className="w-4 h-4 text-zinc-600" /></div>

              {/* Row: API Gateway */}
              <div 
                onClick={() => setSelectedNode('api-gateway')}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedNode === 'api-gateway' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-cyan-400">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">STEP 03 // SECURITY ENTRY</span>
                    <span className="text-sm font-bold text-white">Amazon API Gateway Controller Layer</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">Rate Limited</span>
              </div>

              <div className="flex justify-center my-1"><ArrowDown className="w-4 h-4 text-zinc-600" /></div>

              {/* Row: Backend Server */}
              <div 
                onClick={() => setSelectedNode('backend-server')}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedNode === 'backend-server' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-amber-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">STEP 04 // COMPUTE LAYER</span>
                    <span className="text-sm font-bold text-white">Django REST Framework Pods (AWS EC2 Cluster)</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded">Auto Scaling</span>
              </div>

              <div className="flex justify-center my-1"><ArrowDown className="w-4 h-4 text-zinc-600" /></div>

              {/* Row: Machine Learning Engine */}
              <div 
                onClick={() => setSelectedNode('ml-engine')}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedNode === 'ml-engine' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-purple-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">STEP 05 // AI ACCELERATION</span>
                    <span className="text-sm font-bold text-white">Machine Learning Engine (AWS Lambda Core)</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">Serverless</span>
              </div>

              <div className="flex justify-center my-1"><ArrowDown className="w-4 h-4 text-zinc-600" /></div>

              {/* Row: Database */}
              <div 
                onClick={() => setSelectedNode('database')}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedNode === 'database' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-blue-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">STEP 06 // DATA PERSISTENCE</span>
                    <span className="text-sm font-bold text-white">MySQL Database Engine (AWS RDS Instance)</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">Multi-AZ Sync</span>
              </div>

              <div className="flex justify-center my-1"><ArrowDown className="w-4 h-4 text-zinc-600" /></div>

              {/* Row: Analytics Engine */}
              <div 
                onClick={() => setSelectedNode('analytics-engine')}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedNode === 'analytics-engine' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-cyan-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">STEP 07 // BUSINESS INTELLIGENCE</span>
                    <span className="text-sm font-bold text-white">Analytics Aggregators & QuickSight Connectors</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">High Throughput</span>
              </div>

              <div className="flex justify-center my-1"><ArrowDown className="w-4 h-4 text-zinc-600" /></div>

              {/* Row: Dashboard Reports */}
              <div 
                onClick={() => setSelectedNode('dashboard-reports')}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedNode === 'dashboard-reports' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">STEP 08 // LEDGER EXPORT</span>
                    <span className="text-sm font-bold text-white">Dashboard Reports & Audit Trail PDFs</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">Immutable</span>
              </div>

            </div>
          </div>

        </div>

        {/* Right 1 Column: Interactive Node Constraint Drawer */}
        <div className="space-y-4">
          <div className="glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/70 text-xs sticky top-24">
            <div className="flex items-center gap-2 pb-3 border-b border-zinc-800 mb-4">
              <Layers className="w-4 h-4 text-purple-400" />
              <h4 className="font-bold text-zinc-200 uppercase tracking-wider font-mono">
                Component Telemetry Inspect
              </h4>
            </div>

            {currentNode ? (
              <div className="space-y-4 font-sans">
                <div>
                  <span className="text-[10px] font-mono text-purple-400 block uppercase font-bold tracking-widest bg-purple-950/40 px-2 py-1 rounded w-fit border border-purple-900/50">
                    {currentNode.type}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2">
                    {currentNode.title}
                  </h3>
                </div>

                <div className="space-y-1 bg-zinc-900 p-3 rounded-xl border border-zinc-800 font-mono text-[11px]">
                  <span className="text-zinc-500 block">UNDERLYING STACK:</span>
                  <span className="text-cyan-400 font-bold block">{currentNode.tech}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-zinc-500 block">OPERATIONAL BLUEPRINT FUNCTION:</span>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    {currentNode.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-900 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div>
                    <span className="text-zinc-500 block">HEALTH METRIC:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {currentNode.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">INGEST BANDWIDTH:</span>
                    <span className="text-zinc-300 font-semibold block mt-0.5 truncate" title={currentNode.metrics}>
                      {currentNode.metrics}
                    </span>
                  </div>
                </div>

                {/* Simulated AWS Cost Allocation Metric */}
                <div className="p-3 bg-cyan-950/10 rounded-xl border border-cyan-500/10 text-[11px] leading-relaxed text-zinc-400">
                  <AlertCircle className="w-3.5 h-3.5 text-cyan-400 inline mr-1 -mt-0.5" />
                  <span>Academic Report Ready: This pipeline conforms exactly to the AWS Well-Architected Framework guidelines for continuous performance efficiency.</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-zinc-500 font-mono">
                <HelpCircle className="w-8 h-8 mx-auto text-zinc-600 mb-2 animate-pulse" />
                <p>No element selected.</p>
                <p className="text-[11px] text-zinc-600 mt-1">Select any stack node on the blueprint graph map to mount active state matrices.</p>
              </div>
            )}
          </div>

          {/* Quick Technical Summary card */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 font-mono space-y-2">
            <span className="text-zinc-200 font-bold block">[Platform Health Diagnostics]</span>
            <div className="flex justify-between text-[11px]">
              <span>API Gateway Rate Limiter:</span>
              <span className="text-emerald-400">Active (Leaky Bucket)</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span>MySQL InnoDB Pools:</span>
              <span className="text-cyan-400">Allocated 64-bit context</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span>SecOps Isolated Threads:</span>
              <span className="text-zinc-300">0 anomalies queued</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
