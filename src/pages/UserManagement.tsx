import React, { useState } from 'react';
import { 
  Users2, 
  ShieldCheck, 
  UserMinus, 
  UserCheck, 
  RefreshCw, 
  Globe, 
  Fingerprint,
  Search,
  CheckCircle2
} from 'lucide-react';
import { databaseUsers } from '../utils/mockData';

export const UserManagement: React.FC = () => {
  const [userList, setUserList] = useState(databaseUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [auditLog, setAuditLog] = useState<string[]>([
    'Global Cloud Administrator granted cross-tenant scope to Elena Rostova',
    'External Contractor David Miller marked as SUSPENDED by automated SecOps session script'
  ]);

  const toggleUserStatus = (userId: string) => {
    setUserList(prev => prev.map(u => {
      if (u.id === userId) {
        const nextStatus = u.status === 'Active' ? 'Suspended' : 'Active';
        
        // Log to audit trail
        setAuditLog(current => [
          `[Just Now] Identity token ${u.id} (${u.name}) toggled manually to status: ${nextStatus.toUpperCase()}`,
          ...current
        ]);

        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  const filteredUsers = userList.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Search and Metadata Action Header */}
      <div className="p-4 bg-zinc-900/90 border border-zinc-800/80 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 border border-zinc-800 rounded-xl w-full sm:w-96 focus-within:border-purple-500/50 transition-all">
          <Search className="w-4 h-4 text-zinc-500 shrink-0" />
          <input 
            type="text" 
            placeholder="Search credentials, assigned IAM roles, cloud endpoints..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none w-full font-mono"
          />
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-zinc-500">POOL POLLING RATE:</span>
          <span className="text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/50 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin" /> Continuous 5s
          </span>
        </div>
      </div>

      {/* Main Core Users Data Table List Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: The Users Data Table Grid Panel */}
        <div className="lg:col-span-2 glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/20">
          <div className="pb-3 border-b border-zinc-900 mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <Users2 className="w-4 h-4 text-purple-400" /> Identity Access Management (IAM) Identity Pool
              </h3>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Authorized cluster tenants possessing active cryptographic query scopes to the Django + MySQL layers
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-900 text-zinc-500 font-mono text-[10px] uppercase bg-zinc-950/40">
                  <th className="py-2.5 px-3">Cryptographic Key</th>
                  <th className="py-2.5 px-2">Principal Identity Entity</th>
                  <th className="py-2.5 px-2">Assigned Access Role Preset</th>
                  <th className="py-2.5 px-2">Region Binding</th>
                  <th className="py-2.5 px-2">Active Status</th>
                  <th className="py-2.5 px-3 text-right">Access Token Modification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 font-sans text-zinc-300">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-3 px-3 font-mono text-[11px] text-zinc-400">{user.id}</td>
                    <td className="py-3 px-2">
                      <div className="flex flex-col">
                        <span className="font-semibold text-zinc-200 font-sans">{user.name}</span>
                        <span className="text-[10px] text-zinc-500 font-mono">{user.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 font-mono text-[11px] text-purple-300">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-cyan-400" />
                        <span>{user.role}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-zinc-400 font-mono text-[11px]">
                      <span className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-zinc-600" /> {user.region}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                        user.status === 'Active' 
                          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-900/40' 
                          : 'bg-rose-950/60 text-rose-400 border border-rose-900/40'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <button
                        type="button"
                        onClick={() => toggleUserStatus(user.id)}
                        className={`px-2 py-1 rounded text-[10px] font-mono transition-all inline-flex items-center gap-1 cursor-pointer ${
                          user.status === 'Active'
                            ? 'bg-zinc-900 border border-zinc-800 text-rose-400 hover:bg-rose-950/20'
                            : 'bg-emerald-600 border border-emerald-500 text-white hover:opacity-90'
                        }`}
                      >
                        {user.status === 'Active' ? (
                          <>
                            <UserMinus className="w-2.5 h-2.5" />
                            <span>Revoke</span>
                          </>
                        ) : (
                          <>
                            <UserCheck className="w-2.5 h-2.5" />
                            <span>Authorize</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
                
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-zinc-600 font-mono">
                      No identities found matching query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right 1 Column: Live Security Audit Trail Stream Box */}
        <div className="glass-panel border border-zinc-800 rounded-2xl p-5 bg-zinc-950/20 flex flex-col justify-between">
          <div>
            <div className="pb-3 border-b border-zinc-900 mb-3 flex items-center gap-2">
              <Fingerprint className="w-4 h-4 text-cyan-400 animate-pulse" />
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono">
                Continuous Governance Audit Trail Log
              </h3>
            </div>
            
            <p className="text-[11px] text-zinc-500 mb-3 font-sans">
              Immutable telemetry recording of programmatic user status revisions and permission expansions
            </p>

            <div className="space-y-2 max-h-80 overflow-y-auto">
              {auditLog.map((log, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 font-mono text-[10px] text-zinc-400 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block mr-1.5 shadow-sm shadow-cyan-400 animate-ping" />
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-purple-950/10 border border-purple-500/10 text-[11px] text-zinc-400 mt-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 inline mr-1 -mt-0.5" />
            <span>Changes made here commit to the <code>auth_user_permissions</code> MySQL relational indices dynamically.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
