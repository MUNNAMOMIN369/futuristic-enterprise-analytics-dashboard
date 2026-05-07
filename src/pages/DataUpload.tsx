import React, { useState } from 'react';
import { 
  UploadCloud, 
  FileSpreadsheet, 
  Link2, 
  Database, 
  CheckCircle, 
  RefreshCw, 
  AlertCircle, 
  Terminal,
  Play
} from 'lucide-react';

export const DataUpload: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState<'csv' | 'api' | 'crm'>('csv');
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'validating' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [logFeed, setLogFeed] = useState<string[]>([]);

  const runIngestionSequence = () => {
    setUploadState('uploading');
    setProgress(15);
    setLogFeed([
      `[14:41:02] INITIALIZING INGESTION STREAM FOR TYPE: ${selectedSource.toUpperCase()}`,
      `[14:41:03] CONNECTING TO BUFFER ENDPOINT POOL...`,
    ]);

    setTimeout(() => {
      setProgress(45);
      setLogFeed(prev => [...prev, 
        `[14:41:04] PACKETS RECEIVED SUCCESSFULLY. SIZE: 4.8MB // 24,500 DATA OBJECTS FOUND`,
        `[14:41:04] ENGAGING PARSING PIPELINE WORKER #3...`,
        `[14:41:05] COMMENCING DJANGO REST FRAMEWORK SCHEMA SERIALIZATION CHECK...`
      ]);
      setUploadState('validating');
    }, 800);

    setTimeout(() => {
      setProgress(80);
      setLogFeed(prev => [...prev, 
        `[14:41:06] VALIDATION PASSED: 0 BAD DATATYPES, 0 NULL CONSTRAINTS FLAGGED`,
        `[14:41:06] COMMITTING BATCH INSERT CHUNKS TO THE PRODUCTION MYSQL NODE...`,
        `[14:41:07] RE-INDEXING TRANSACTION_LEDGER UNIQUE KEYS...`
      ]);
    }, 1600);

    setTimeout(() => {
      setProgress(100);
      setLogFeed(prev => [...prev, 
        `[14:41:08] BATCH TRANSACTION COMMITTED SUCCESSFULLY.`,
        `[14:41:08] TELEMETRY SYNCHRONIZATION: OPTIMAL. STATUS: COMPLETED`
      ]);
      setUploadState('completed');
    }, 2400);
  };

  const resetPipeline = () => {
    setUploadState('idle');
    setProgress(0);
    setLogFeed([]);
  };

  return (
    <div className="space-y-6">
      
      {/* Upper Pipeline Configuration Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: File upload selector and trigger card */}
        <div className="lg:col-span-2 glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/30 flex flex-col justify-between">
          <div>
            <div className="pb-3 border-b border-zinc-800 mb-4">
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-cyan-400" /> Multi-Source Enterprise Data Ingestion Engine
              </h3>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Simulate uploading localized corporate files or connecting cloud CRM endpoints straight into your analytical ledger
              </p>
            </div>

            {/* Source Type Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <button
                type="button"
                onClick={() => { setSelectedSource('csv'); resetPipeline(); }}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedSource === 'csv' ? 'bg-purple-950/40 border-purple-500/80 shadow-md shadow-purple-500/10' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <FileSpreadsheet className="w-5 h-5 text-purple-400 mb-1.5" />
                <span className="text-xs font-bold text-zinc-200 block">Flat CSV File Ledger</span>
                <span className="text-[10px] text-zinc-500 font-mono block mt-0.5">Raw transaction tuples row dump</span>
              </button>

              <button
                type="button"
                onClick={() => { setSelectedSource('api'); resetPipeline(); }}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedSource === 'api' ? 'bg-blue-950/40 border-blue-500/80 shadow-md shadow-blue-500/10' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <Link2 className="w-5 h-5 text-blue-400 mb-1.5" />
                <span className="text-xs font-bold text-zinc-200 block">REST API Endpoints Link</span>
                <span className="text-[10px] text-zinc-500 font-mono block mt-0.5">Automated JSON schema synchronizer</span>
              </button>

              <button
                type="button"
                onClick={() => { setSelectedSource('crm'); resetPipeline(); }}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedSource === 'crm' ? 'bg-cyan-950/40 border-cyan-500/80 shadow-md shadow-cyan-500/10' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <Database className="w-5 h-5 text-cyan-400 mb-1.5" />
                <span className="text-xs font-bold text-zinc-200 block">Corporate CRM Connector</span>
                <span className="text-[10px] text-zinc-500 font-mono block mt-0.5">Dynamic Webhook integration channel</span>
              </button>
            </div>

            {/* Drag and Drop Zone Simulator Box */}
            <div className="p-8 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <UploadCloud className="w-10 h-10 mx-auto text-zinc-600 group-hover:text-cyan-400 transition-colors mb-3" />
              
              <span className="text-xs font-bold text-zinc-300 block">
                {selectedSource === 'csv' ? 'nexus_financial_ledger_Q2.csv' : selectedSource === 'api' ? 'https://api.nexus-enterprise.io/v3/telemetry/stream' : 'Salesforce-CRM-Webhook-Active'}
              </span>
              <p className="text-[11px] text-zinc-500 mt-1 max-w-sm mx-auto">
                File / stream token is pre-seeded for academic evaluation. Ready for deployment execution.
              </p>

              {/* Progress Bar Element */}
              {uploadState !== 'idle' && (
                <div className="mt-6 max-w-md mx-auto space-y-2">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-zinc-400 uppercase tracking-wider font-bold">Inflow Ingestion Pipeline Progress:</span>
                    <span className="text-cyan-400 font-bold">{progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                    <div 
                      className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-zinc-900">
            <span className="text-[11px] font-mono text-zinc-500">
              Target Node: <strong className="text-zinc-300">MySQL Cluster Serverless</strong>
            </span>

            <div className="flex items-center gap-2">
              {uploadState !== 'idle' && (
                <button
                  type="button"
                  onClick={resetPipeline}
                  className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Clear State
                </button>
              )}
              <button
                type="button"
                onClick={runIngestionSequence}
                disabled={uploadState === 'uploading' || uploadState === 'completed'}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xs shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-40"
              >
                {uploadState === 'uploading' || uploadState === 'validating' ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>PARSING STREAM...</span>
                  </>
                ) : uploadState === 'completed' ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>LEDGER DEPLOYED SUCCESSFULLY</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>EXECUTE SCHEMA INGESTION</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right 1 Column: Live Parser Feed Terminal Logs */}
        <div className="glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/30 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400" /> Live Ingestion Log Terminal
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Continuous monitoring of column mappings and Django REST data transformations
            </p>
          </div>

          <div className="bg-black/80 rounded-xl p-3 border border-zinc-900 h-64 my-4 font-mono text-[10px] space-y-2 text-zinc-400 overflow-y-auto terminal-font">
            {logFeed.length > 0 ? (
              logFeed.map((log, i) => (
                <p 
                  key={i} 
                  className={
                    log.includes('PASSED') || log.includes('SUCCESSFULLY') ? 'text-emerald-400' :
                    log.includes('INITIALIZING') ? 'text-cyan-400' : 'text-zinc-400'
                  }
                >
                  {log}
                </p>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-zinc-600 text-center px-4">
                <AlertCircle className="w-5 h-5 text-zinc-700 mb-1.5" />
                <p>[Terminal Idle]</p>
                <p className="text-[9px] mt-0.5">Execute the schema ingestion pipeline to observe dynamic transformations feed.</p>
              </div>
            )}
          </div>

          <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 text-[11px] leading-relaxed text-zinc-500">
            💡 <strong>Academic Fact:</strong> The ingest workers run an internal validation loop cross-referencing field lengths against standard MySQL constraints to avoid single-point data row replication failures.
          </div>
        </div>

      </div>
    </div>
  );
};
