
import React, { useState, useRef } from 'react';
import { ShieldAlert, Lock, User, Terminal, ChevronRight } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [badgeId, setBadgeId] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    // Simulate a secure handshake
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  return (
    <div className="flex-grow flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-12 relative overflow-hidden">
      {/* Hero Text side */}
      <div className="flex-1 max-w-xl space-y-8 text-center md:text-left order-2 md:order-1 relative z-20">
        <div className="space-y-0">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] cursor-default group/hero">
            <span className="relative inline-block text-white hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-500 hover:-translate-y-1">
              SECURE
              <span className="absolute -inset-1 bg-white/5 blur-2xl rounded-full opacity-0 group-hover/hero:opacity-100 transition-opacity" />
            </span> 
            <br/> 
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-br from-purple-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-700 hover:-translate-y-1 inline-block">
                AUDIT.
              </span>
              {/* Animated underline for the gradient text */}
              <div className="absolute -bottom-2 left-0 w-0 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover/hero:w-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
            </span>
          </h2>
        </div>

        <div className="space-y-4 max-w-sm mx-auto md:mx-0">
          <p className="text-zinc-400 text-lg font-medium leading-relaxed hover:text-white transition-colors duration-500">
            Neural-powered evaluation protocol. Establish a <span className="text-purple-400 font-bold">secure handshake</span> to begin the auditing process.
          </p>
          <div className="flex items-center gap-3 justify-center md:justify-start opacity-50 group-hover/hero:opacity-100 transition-opacity">
            <div className="h-[1px] w-8 bg-zinc-800" />
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-600">Encrypted by developer Shiv</span>
          </div>
        </div>
      </div>

      {/* Login Card side */}
      <div className="flex-1 w-full max-w-md order-1 md:order-2 relative z-20">
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="group bg-zinc-950/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/10 relative"
        >
          {/* Dynamic Cursor Spotlight Effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.15), transparent 40%)`
            }}
          />
          
          {/* Subtle Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />

          {/* Header Branding Section */}
          <div className="p-10 pb-4 text-center space-y-6 relative overflow-hidden z-10">
            {/* Holographic Icon Container */}
            <div className="relative inline-flex items-center justify-center group/icon">
              {/* Outer Rotating Ring */}
              <div className="absolute inset-[-12px] border border-dashed border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
              {/* Middle Glow Ring */}
              <div className="absolute inset-[-6px] border border-white/5 rounded-full group-hover/icon:border-purple-500/50 transition-colors duration-500" />
              {/* Main Icon Circle */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center shadow-2xl group-hover/icon:scale-110 transition-transform duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                <ShieldAlert className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                {/* Internal scanning line for icon */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 animate-[scan-vertical_3s_ease-in-out_infinite]" />
              </div>
            </div>

            <div className="space-y-1 relative">
              <h3 className="text-2xl font-black tracking-[0.15em] uppercase transition-all duration-500 cursor-default">
                <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent group-hover:from-white group-hover:via-purple-200 group-hover:to-white transition-all duration-700 inline-block">
                  JUDGE ACCESS
                </span>
                {/* Title underline glow */}
                <div className="h-0.5 w-12 bg-purple-500 mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] opacity-40 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
              </h3>
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] pt-2">
                Neural Link Status: <span className="text-emerald-500 animate-pulse font-bold">Standby</span>
              </p>
            </div>
            
            {/* Glimmer effect sweeping through header */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-20deg] animate-[glimmer_8s_infinite] pointer-events-none" />
          </div>

          <form onSubmit={handleSubmit} className="p-10 pt-4 space-y-8 relative z-10">
            <div className="space-y-6">
              {/* Badge ID Input Container */}
              <div className="space-y-2 group/input-wrap relative">
                <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 ml-1 transition-colors group-focus-within/input-wrap:text-purple-400 group-focus-within/input-wrap:glow-text">Badge ID</label>
                <div className="relative overflow-hidden rounded-2xl p-[1px] transition-all duration-500 group-focus-within/input-wrap:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  {/* Tracing Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -translate-x-full group-focus-within/input-wrap:animate-border-trace pointer-events-none opacity-0 group-focus-within/input-wrap:opacity-100" />
                  
                  <div className="relative bg-zinc-950/80 rounded-[inherit] overflow-hidden">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within/input-wrap:text-purple-400 transition-colors z-20" />
                    <input
                      required
                      type="text"
                      value={badgeId}
                      onChange={(e) => setBadgeId(e.target.value)}
                      placeholder="PROTOCOL_01"
                      className="w-full bg-white/[0.02] border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white text-sm focus:outline-none focus:border-purple-500/20 transition-all placeholder:text-zinc-800 font-mono relative z-10 focus:bg-white/[0.05]"
                    />
                    {/* Interior Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-focus-within/input-wrap:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Access Cipher Input Container */}
              <div className="space-y-2 group/input-wrap relative">
                <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 ml-1 transition-colors group-focus-within/input-wrap:text-blue-400 group-focus-within/input-wrap:glow-text">Access Cipher</label>
                <div className="relative overflow-hidden rounded-2xl p-[1px] transition-all duration-500 group-focus-within/input-wrap:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  {/* Tracing Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full group-focus-within/input-wrap:animate-border-trace pointer-events-none opacity-0 group-focus-within/input-wrap:opacity-100" />
                  
                  <div className="relative bg-zinc-950/80 rounded-[inherit] overflow-hidden">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within/input-wrap:text-blue-400 transition-colors z-20" />
                    <input
                      required
                      type="password"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white/[0.02] border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white text-sm focus:outline-none focus:border-blue-500/20 transition-all placeholder:text-zinc-800 font-mono relative z-10 focus:bg-white/[0.05]"
                    />
                    {/* Interior Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-focus-within/input-wrap:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Futuristic Animated Button */}
            <div className="relative group/btn mt-8">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-white to-blue-600 rounded-2xl blur-lg opacity-10 group-hover/btn:opacity-50 transition duration-1000 group-hover/btn:duration-200 animate-tilt"></div>
              
              <button
                type="submit"
                disabled={isAuthenticating}
                className={`relative w-full overflow-hidden flex items-center justify-center gap-3 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[13px] transition-all duration-500 ${
                  isAuthenticating
                    ? 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-white/5'
                    : 'bg-black text-white hover:text-black border border-white/10 group-hover/btn:border-transparent'
                }`}
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                
                {/* Shimmering line effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover/btn:animate-[shimmer_1.2s_infinite] pointer-events-none" />

                <span className="relative z-10 flex items-center gap-2">
                  {isAuthenticating ? (
                    <>
                      <Terminal className="w-4 h-4 animate-pulse" />
                      Authenticating
                    </>
                  ) : (
                    <>
                      Establish Neural Link
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>

          <div className="px-10 py-6 bg-white/[0.01] border-t border-white/5 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity relative z-10">
            <div className="flex flex-col gap-0.5">
              <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-widest">Protocol Engine</span>
              <span className="text-[9px] font-mono text-zinc-400 uppercase">HACKJUDGE.v3.NODE_X</span>
            </div>
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,1)]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-25deg); }
          100% { transform: translateX(350%) skewX(-25deg); }
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(0.8deg) scale(1.02); }
          75% { transform: rotate(-0.8deg) scale(1.02); }
        }
        @keyframes border-trace {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scan-vertical {
          0% { transform: translateY(0); }
          50% { transform: translateY(80px); }
          100% { transform: translateY(0); }
        }
        @keyframes glimmer {
          0% { left: -100%; }
          10% { left: 100%; }
          100% { left: 100%; }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        .animate-border-trace {
          animation: border-trace 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .glow-text {
          text-shadow: 0 0 8px currentColor;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
