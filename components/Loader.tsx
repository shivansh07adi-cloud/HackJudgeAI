
import React, { useState, useEffect } from 'react';
import { Terminal, ShieldAlert, Cpu, Activity, Binary, Sparkles } from 'lucide-react';

const MESSAGES = [
  "ESTABLISHING NEURAL HANDSHAKE...",
  "DECONSTRUCTING ARCHITECTURE...",
  "ISOLATING GENERIC PATTERNS...",
  "VERIFYING FEASIBILITY VECTORS...",
  "CALCULATING MARKET IMPACT...",
  "CROSS-REFERENCING REPOSITORIES...",
  "AUDITING TECHNICAL COMPLEXITY...",
  "FINALIZING RUTHLESS FEEDBACK..."
];

const Loader: React.FC = () => {
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMsgIdx((prev) => (prev + 1) % MESSAGES.length);
    }, 2800);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        const inc = Math.random() * 5;
        return Math.min(prev + inc, 100);
      });
    }, 400);

    return () => {
      clearInterval(msgTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 text-center overflow-hidden inter">
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(16,185,129,0.03),rgba(59,130,246,0.03),rgba(168,85,247,0.03))] bg-[length:100%_4px,4px_100%]" />
      </div>

      {/* Floating Geometric Fragments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Binary className="absolute top-20 left-20 w-40 h-40 text-emerald-500/5 animate-bounce" style={{ animationDuration: '4s' }} />
        <Cpu className="absolute bottom-20 right-20 w-48 h-48 text-blue-500/5 animate-pulse" />
        <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/2 right-10 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 space-y-16 max-w-4xl w-full flex flex-col items-center">
        {/* Central Core Visual */}
        <div className="relative group">
          <div className="absolute -inset-16 bg-emerald-500/20 blur-[100px] rounded-full animate-pulse opacity-50" />
          <div className="relative w-40 h-40 bg-zinc-950 border-4 border-white/5 rounded-[3rem] flex items-center justify-center shadow-3xl overflow-hidden group-hover:scale-110 transition-transform duration-700">
            {/* Spinning Rings */}
            <div className="absolute inset-2 border-2 border-emerald-500/20 border-t-emerald-500 rounded-[2.5rem] animate-[spin_3s_linear_infinite]" />
            <div className="absolute inset-6 border border-blue-500/20 border-b-blue-500 rounded-[2rem] animate-[spin_5s_linear_infinite_reverse]" />
            
            <ShieldAlert className="w-16 h-16 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse" />
            
            {/* Scanning Laser Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_15px_emerald] animate-[scan_2s_ease-in-out_infinite] opacity-50" />
          </div>
        </div>

        {/* Messaging Layout */}
        <div className="space-y-6 w-full px-4">
          <div className="flex items-center justify-center gap-4 opacity-60">
            <Activity className="w-5 h-5 text-emerald-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-zinc-500 shimmer-title">Neural Engine v5.0 Active</span>
            <Activity className="w-5 h-5 text-emerald-500" />
          </div>

          <div className="h-24 flex flex-col justify-center items-center">
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-in fade-in slide-in-from-bottom-4 duration-1000 key={msgIdx}">
              {MESSAGES[msgIdx]}
            </h2>
          </div>

          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed h-12">
            The HackJudge is currently <span className="text-emerald-400">stripping away the fluff</span> to evaluate your project's true core potential.
          </p>
        </div>

        {/* Advanced Progress Terminal */}
        <div className="w-full max-w-xl space-y-8">
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
               <span className="text-[10px] font-mono font-black text-zinc-600 tracking-[0.4em]">ENCRYPTED_UPLINK</span>
            </div>
            <span className="text-2xl font-mono font-black text-emerald-500 tabular-nums glow-text-emerald">
              {Math.floor(progress)}%
            </span>
          </div>
          
          <div className="relative h-4 w-full bg-zinc-900/50 border border-white/5 rounded-full overflow-hidden shadow-2xl backdrop-blur-md">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 via-white to-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[loading-bar_1s_linear_infinite]" />
            </div>
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer-edge_2s_infinite]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
             {['LOGIC', 'FEASIBILITY', 'ORIGIN', 'IMPACT'].map((label, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group/status">
                   <div className={`h-1.5 w-full rounded-full bg-zinc-800 relative overflow-hidden transition-all duration-700 ${progress > (idx * 25) ? 'bg-emerald-950' : ''}`}>
                      <div className={`absolute inset-0 bg-emerald-500 transition-all duration-1000 ${progress > (idx * 25) ? 'translate-x-0' : '-translate-x-full'}`} />
                   </div>
                   <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest group-hover/status:text-zinc-400 transition-colors">{label}</span>
                </div>
             ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(160px); }
        }
        @keyframes loading-bar {
          from { background-position: 0 0; }
          to { background-position: 20px 0; }
        }
        @keyframes shimmer-edge {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
