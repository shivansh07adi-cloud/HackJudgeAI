
import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';
import { APP_NAME } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Branding Area */}
        <div className="flex items-center gap-4 group cursor-pointer relative">
          {/* Custom Code-style Logo {/) */}
          <div className="relative">
            <div className="absolute -inset-3 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-zinc-900/80 px-3 py-2 rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-all duration-500 shadow-2xl flex items-center justify-center min-w-[54px]">
              <div className="flex items-center text-xl font-black mono tracking-tighter select-none group-hover:scale-110 transition-transform duration-500">
                <span className="text-purple-600 transition-colors duration-500 group-hover:text-purple-400">{`{`}</span>
                <span className="text-white relative mx-0.5 group-hover:rotate-12 transition-transform duration-500">/</span>
                <span className="text-purple-600 transition-colors duration-500 group-hover:text-purple-400">{`)`}</span>
              </div>
            </div>
            {/* Pulsing indicator light */}
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)] border border-black" />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-tighter text-white relative overflow-hidden">
                {/* Text with Glow effect */}
                <span className="relative z-10 hover-glow-purple">{APP_NAME}</span>
                {/* Animated scanning line behind text */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent -translate-x-full group-hover:animate-scan pointer-events-none opacity-0 group-hover:opacity-100" />
              </h1>
              <div className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-[8px] font-black text-purple-400 uppercase tracking-widest mt-0.5 animate-pulse">
                Neural
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-zinc-600" />
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-mono group-hover:text-zinc-400 transition-colors">Audit Protocol v3.1</p>
            </div>
          </div>
        </div>

        {/* Right Side Status */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 px-5 py-2.5 bg-zinc-900/40 rounded-2xl border border-white/5 hover:border-emerald-500/40 transition-all duration-500 group/status cursor-default relative overflow-hidden">
            {/* Intensified Background Glows */}
            <div className="absolute inset-0 bg-emerald-500/0 group-hover/status:bg-emerald-500/5 transition-colors duration-500" />
            <div className="absolute -right-4 -top-4 w-12 h-12 bg-emerald-500/0 group-hover/status:bg-emerald-500/20 blur-2xl transition-all duration-700 rounded-full" />
            
            <div className="relative">
              {/* Layered Icon Glow */}
              <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-0 group-hover/status:opacity-100 transition-opacity duration-500 scale-[3]"></div>
              <div className="absolute inset-0 bg-emerald-400 blur-md opacity-0 group-hover/status:opacity-100 transition-opacity duration-300 scale-150"></div>
              <ShieldCheck className="w-4 h-4 text-emerald-500 relative z-10 drop-shadow-[0_0_12px_rgba(16,185,129,1)] group-hover/status:text-white transition-colors duration-300" />
            </div>

            <div className="flex flex-col relative z-10">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest transition-colors group-hover/status:text-emerald-200/50">Engine Status</span>
              <span className="text-xs text-white font-black uppercase tracking-[0.15em] transition-all duration-300 group-hover/status:text-emerald-400 group-hover/status:drop-shadow-[0_0_15px_rgba(52,211,153,1)]">
                Unbiased Core Active
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
