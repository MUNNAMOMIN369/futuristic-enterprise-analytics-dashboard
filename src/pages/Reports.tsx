import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Camera, 
  Calendar, 
  CheckCircle, 
  FileArchive, 
  Sparkles,
  RefreshCw,
  Search
} from 'lucide-react';
import { recentReports } from '../utils/mockData';

export const Reports: React.FC = () => {
  const [isExportingPDF, setIsExportingPDF] = useState<string | null>(null);
  const [isCapturingScreenshot, setIsCapturingScreenshot] = useState(false);
  const [notification, setNotification] = useState('');

  const handleDownloadPDF = (reportId: string) => {
    setIsExportingPDF(reportId);
    setNotification('');
    
    setTimeout(() => {
      setIsExportingPDF(null);
      setNotification(`SECURE PROTOCOL DOWNLOAD DETECTED: ${reportId}.pdf has been transmitted to local machine logs.`);
    }, 1000);
  };

  const handleCaptureScreenshot = () => {
    setIsCapturingScreenshot(true);
    setNotification('');

    setTimeout(() => {
      setIsCapturingScreenshot(false);
      setNotification(`SNAPSHOT METADATA RECORDED: Full viewport canvas matrices compiled into NEXUS-SCREENSHOT-2026.png`);
    }, 900);
  };

  return (
    <div className="space-y-6">
      
      {/* Upper Meta Notification Alert */}
      {notification && (
        <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-mono flex items-center gap-2 animate-pulse">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* 1. BUSINESS SUMMARY INTUITIVE CARD GRID */}
      <div>
        <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
          [Summary Dimension Cards] Academic Presentation Ready Templates
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="glass-panel border border-zinc-800 bg-gradient-to-br from-purple-950/20 to-zinc-950 p-5 rounded-2xl relative">
            <div className="absolute top-3 right-3 text-[10px] font-mono bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded">
              Audited Q2 Snapshot
            </div>
            <span className="text-zinc-400 text-xs font-mono block">FINANCIAL LEDGER TOTAL</span>
            <h4 className="text-xl font-bold text-white mt-1 font-mono">$14,892,450.00</h4>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Relational transactions parsed by Django REST Framework APIs show consistent customer upgrading cycles across cloud nodes.
            </p>
          </div>

          <div className="glass-panel border border-zinc-800 bg-gradient-to-br from-blue-950/20 to-zinc-950 p-5 rounded-2xl relative">
            <div className="absolute top-3 right-3 text-[10px] font-mono bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">
              SecOps Compliance
            </div>
            <span className="text-zinc-400 text-xs font-mono block">INFRASTRUCTURE INTEGRITY</span>
            <h4 className="text-xl font-bold text-white mt-1 font-mono">99.99% Uptime</h4>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Continuous monitoring maps show 0 critical database node disconnect logs within the MySQL storage backend cluster.
            </p>
          </div>

          <div className="glass-panel border border-zinc-800 bg-gradient-to-br from-cyan-950/20 to-zinc-950 p-5 rounded-2xl relative">
            <div className="absolute top-3 right-3 text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded">
              AI Forecast Delta
            </div>
            <span className="text-zinc-400 text-xs font-mono block">PREDICTIVE STABILITY</span>
            <h4 className="text-xl font-bold text-white mt-1 font-mono">98.2% Confidence</h4>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Mathematical modeling parameters confirm next month yields will comfortably cross an annualized pace of $15.4M.
            </p>
          </div>

        </div>
      </div>

      {/* 2. RECENT REPORTS LEDGER LOGS TABLE VIEW */}
      <div className="glass-panel border border-zinc-800/80 rounded-2xl p-5 bg-zinc-950/20">
        <div className="pb-3 border-b border-zinc-900 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <FileArchive className="w-4 h-4 text-purple-400" /> Compliance Reports Ledger & PDF Generator
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Generate or export formal point-in-time financial audit sheets and system telemetry variables
            </p>
          </div>

          <button 
            type="button"
            onClick={handleCaptureScreenshot}
            disabled={isCapturingScreenshot}
            className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 font-semibold text-xs text-zinc-300 flex items-center gap-2 transition-all self-start sm:self-center cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isCapturingScreenshot ? 'CAPTURING CANVAS...' : 'EXPORT PORTAL SCREENSHOT'}</span>
          </button>
        </div>

        {/* Reports search header simulator */}
        <div className="flex gap-2 items-center bg-zinc-900/60 p-2 border border-zinc-800/60 rounded-xl mb-4">
          <Search className="w-4 h-4 text-zinc-500 ml-1" />
          <input 
            type="text" 
            placeholder="Search archived files by cryptographic identifier, scope context, or author entity..."
            className="bg-transparent border-none text-xs text-zinc-300 focus:outline-none w-full font-mono"
            disabled
          />
        </div>

        {/* Data Grid table listing files */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-900 text-zinc-500 font-mono text-[10px] uppercase bg-zinc-950/40">
                <th className="py-3 px-3">Cryptographic ID</th>
                <th className="py-3 px-2">Document Context Name</th>
                <th className="py-3 px-2">Scope Scope</th>
                <th className="py-3 px-2">Author Token</th>
                <th className="py-3 px-2">Generated Date</th>
                <th className="py-3 px-3 text-right">Action Token</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 font-sans text-zinc-300">
              {recentReports.map((report) => (
                <tr key={report.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-3.5 px-3 font-mono text-[11px] text-purple-400 font-bold">{report.id}</td>
                  <td className="py-3.5 px-2">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span className="font-semibold text-zinc-200">{report.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-2 font-mono text-[11px] text-zinc-400">{report.scope}</td>
                  <td className="py-3.5 px-2 text-zinc-400 text-[11px]">{report.author}</td>
                  <td className="py-3.5 px-2 font-mono text-[11px] text-zinc-500">{report.date}</td>
                  <td className="py-3.5 px-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleDownloadPDF(report.id)}
                      disabled={isExportingPDF !== null}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 hover:bg-purple-950/10 text-zinc-300 font-mono text-[10px] transition-all inline-flex items-center gap-1 cursor-pointer"
                    >
                      {isExportingPDF === report.id ? (
                        <RefreshCw className="w-2.5 h-2.5 text-cyan-400 animate-spin" />
                      ) : (
                        <Download className="w-2.5 h-2.5 text-purple-400" />
                      )}
                      <span>{isExportingPDF === report.id ? 'ASSEMBLING...' : 'PDF'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Academic Quick Template Report Export */}
        <div className="mt-5 p-4 rounded-xl bg-purple-950/10 border border-purple-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-zinc-300 block">Automated Weekly Analytics Compiled Ledger</span>
              <span className="text-zinc-500 text-[11px]">Includes raw metrics, multi-channel sales graphs, and risk analytics vectors.</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleDownloadPDF('REP-WEEKLY-AUTO')}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 font-bold text-xs text-white flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>DOWNLOAD INTERNSHIP LEDGER PACKET</span>
          </button>
        </div>

      </div>
    </div>
  );
};
