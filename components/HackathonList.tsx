
import React, { useState, useRef } from 'react';
import { ChevronLeft, Search, Radio, Trophy, Calendar, MapPin, ExternalLink, Globe, Zap, Banknote, Shield, Activity, Sparkles } from 'lucide-react';
import { HackathonUpdate } from '../types';

const GLOBAL_HACKATHONS: HackathonUpdate[] = [
  { id: '1', name: 'ETHGlobal London', location: 'London, UK', date: 'Mar 14-16, 2025', status: 'live', prizes: '$250,000+', description: 'The leading Ethereum hackathon in Europe.', link: 'https://ethglobal.com' },
  { id: '2', name: 'Solana Grizzlython', location: 'Online', date: 'LIVE NOW', status: 'live', prizes: '$1,000,000+', description: 'Massive global competition for Solana ecosystem builders.', link: 'https://solana.com/grizzlython' },
  { id: '3', name: 'Imagine Cup 2025', location: 'Global / Online', date: 'Registration Open', status: 'upcoming', prizes: '$100,000', description: 'Microsoft’s premier global student technology competition.', link: 'https://imaginecup.microsoft.com' },
  { id: '4', name: 'Google Solution Challenge', location: 'Global / Online', date: 'Upcoming: Mar 2025', status: 'upcoming', prizes: 'Mentorship & $10k', description: 'Solve for one or more of the UN Sustainable Development Goals.', link: 'https://developers.google.com/community/gdsc-solution-challenge' },
  { id: '5', name: 'TreeHacks', location: 'Stanford, CA', date: 'Feb 14-16, 2025', status: 'upcoming', prizes: '$150,000+', description: 'Stanford University’s premier hackathon.', link: 'https://treehacks.com' },
  { id: '6', name: 'Hack MIT', location: 'Cambridge, MA', date: 'Fall 2024', status: 'upcoming', prizes: '$50,000+', description: 'MIT’s flagship hackathon event.', link: 'https://hackmit.org' },
  { id: '7', name: 'Junction 2025', location: 'Espoo, Finland', date: 'Nov 2025', status: 'upcoming', prizes: 'Various Tracks', description: 'Europe’s leading hackathon held at the Aalto University campus.', link: 'https://hackjunction.com' },
  { id: '8', name: 'Hack the North', location: 'Waterloo, Canada', date: 'Sept 12-14, 2025', status: 'upcoming', prizes: '$30k + Hardware', description: 'Canada’s biggest hackathon held at UWaterloo.', link: 'https://hackthenorth.com' },
  { id: '9', name: 'LA Hacks', location: 'Los Angeles, CA', date: 'Spring 2025', status: 'upcoming', prizes: '$40,000', description: 'The West Coast’s premier hackathon hosted at UCLA.', link: 'https://lahacks.com' },
  { id: '10', name: 'HackZurich', location: 'Zurich, Switzerland', date: 'Sept 2025', status: 'upcoming', prizes: 'Various Perks', description: 'Europe’s largest hackathon with focus on industry challenges.', link: 'https://hackzurich.ch' },
  { id: '11', name: 'Chainlink Constellation', location: 'Online', date: 'LIVE NOW', status: 'live', prizes: '$350,000', description: 'Build the future of Hybrid Smart Contracts.', link: 'https://chain.link/hackathon' },
  { id: '12', name: 'MLH Season 2025', location: 'Multiple Cities', date: 'Rolling Events', status: 'upcoming', prizes: 'Mixed', description: 'Major League Hacking sanctioned events worldwide.', link: 'https://mlh.io/seasons/2025/events' },
  { id: '13', name: 'Technica', location: 'Maryland, USA', date: 'Oct 2025', status: 'upcoming', prizes: 'Mixed', description: 'The world’s largest all-women and non-binary hackathon.', link: 'https://gotechnica.org' },
  { id: '14', name: 'Bitcamp', location: 'Maryland, USA', date: 'Apr 2025', status: 'upcoming', prizes: 'Gear & Tech', description: 'A massive 36-hour hackathon at UMD.', link: 'https://bit.camp' },
  { id: '15', name: 'HackIndia 2025', location: 'Bangalore, India', date: 'Aug 2025', status: 'upcoming', prizes: '₹10,00,000+', description: 'One of the largest student hackathons in the APAC region.', link: 'https://hackindia.io' }
];

interface HackathonRegistryCardProps {
  hack: HackathonUpdate;
}

const HackathonRegistryCard: React.FC<HackathonRegistryCardProps> = ({ hack }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const isLive = hack.status === 'live';

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-zinc-950 border border-white/5 rounded-[3.5rem] p-10 hover:border-white/20 transition-all duration-700 flex flex-col justify-between h-[540px] overflow-hidden backdrop-blur-3xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.9)]"
    >
      {/* 
          INTENSE MULTI-CHROMATIC SPOTLIGHT 
          Chromatically separated colors that follow the cursor for a "holographic" feel.
      */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `
            radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.4), transparent 60%),
            radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.35), transparent 50%),
            radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.3), transparent 40%)
          `
        }}
      />
      
      {/* NEON TRACING BORDER EFFECTS */}
      <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-white/10 rounded-[inherit] pointer-events-none transition-all duration-1000 z-10" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-[shimmer-edge_4s_infinite]" />
         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-[shimmer-edge_4s_infinite_reverse]" />
      </div>

      <div className="relative z-20 space-y-8">
        <div className="flex justify-between items-center">
          {/* 
              ULTRA-HIGHLIGHTED STATUS BADGES
              Increased contrast and localized glow.
          */}
          <div className={`relative flex items-center gap-3 px-6 py-2.5 rounded-full border-2 text-[11px] font-black uppercase tracking-[0.4em] backdrop-blur-3xl transition-all duration-500 ${
            isLive 
              ? 'bg-red-500/20 border-red-500/60 text-red-400 shadow-[0_0_35px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_60px_rgba(239,68,68,0.8)]' 
              : 'bg-blue-500/20 border-blue-500/60 text-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]'
          }`}>
            {isLive && (
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_15px_#ef4444]"></span>
              </span>
            )}
            {!isLive && <Sparkles className="w-4 h-4 text-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />}
            <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">{hack.status}</span>
          </div>

          <div className="flex gap-4">
            <Trophy className="w-7 h-7 text-zinc-800 group-hover:text-yellow-400 transition-all duration-700 group-hover:scale-125 group-hover:drop-shadow-[0_0_25px_rgba(250,204,21,1)]" />
            <Zap className="w-7 h-7 text-zinc-800 group-hover:text-purple-400 transition-all duration-700 group-hover:scale-125 group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,1)]" />
          </div>
        </div>

        <div className="space-y-6">
          {/* THE UNIQUE GLOWUP TITLE */}
          <h3 className="text-[2.75rem] font-black tracking-tighter leading-[0.95] transition-all duration-700 cursor-default relative">
            <span className="block text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:via-emerald-300 group-hover:to-blue-500 transition-all duration-700 group-hover:drop-shadow-[0_0_40px_rgba(52,211,153,0.8)]">
              {hack.name}
            </span>
            {/* Dynamic Neon Underline */}
            <div className="h-[4px] w-16 bg-zinc-900 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:via-white group-hover:to-blue-500 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] mt-5 rounded-full shadow-[0_0_25px_rgba(16,185,129,1)]" />
          </h3>

          <p className="text-zinc-500 text-[17px] leading-relaxed font-medium line-clamp-3 group-hover:text-zinc-300 transition-colors duration-500">
            {hack.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-6">
          <div className="space-y-3 group/info cursor-default">
            <span className="text-[11px] uppercase font-black text-zinc-700 tracking-[0.6em] block group-hover/info:text-emerald-400 transition-colors">Coordinates</span>
            <div className="flex items-center gap-4 text-zinc-400">
               <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5 group-hover/info:border-emerald-500/60 transition-all shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover/info:opacity-100 transition-opacity" />
                <MapPin className="w-6 h-6 text-emerald-500/40 group-hover/info:text-emerald-500 transition-colors relative z-10" />
               </div>
               <span className="text-sm font-bold text-zinc-200 group-hover/info:text-white transition-colors tracking-tight">{hack.location}</span>
            </div>
          </div>
          <div className="space-y-3 group/info cursor-default">
            <span className="text-[11px] uppercase font-black text-zinc-700 tracking-[0.6em] block group-hover/info:text-blue-400 transition-colors">Timeline</span>
            <div className="flex items-center gap-4 text-zinc-400">
               <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5 group-hover/info:border-blue-500/60 transition-all shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/info:opacity-100 transition-opacity" />
                <Calendar className="w-6 h-6 text-blue-500/40 group-hover/info:text-blue-500 transition-colors relative z-10" />
               </div>
               <span className="text-sm font-bold text-zinc-200 group-hover/info:text-white transition-colors tracking-tight">{hack.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-10 pt-10 border-t border-white/10 flex items-end justify-between">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Banknote className="w-6 h-6 text-emerald-500 animate-pulse" />
            <span className="text-[12px] font-black uppercase text-zinc-600 tracking-[0.7em]">Nexus_Bounty</span>
          </div>
          <div className="text-[2.5rem] font-black text-white group-hover:text-emerald-400 transition-all duration-700 group-hover:scale-105 origin-left tracking-tighter drop-shadow-[0_0_45px_rgba(52,211,153,0.7)]">
            {hack.prizes}
          </div>
        </div>
        
        <a 
          href={hack.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/btn relative flex items-center justify-center w-24 h-24 bg-white/5 rounded-[2.5rem] text-white hover:bg-white hover:text-black hover:scale-110 hover:rotate-12 transition-all duration-500 border border-white/10 hover:border-transparent shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          <ExternalLink className="w-10 h-10 relative z-10" />
          <div className="absolute inset-0 bg-white blur-3xl opacity-0 group-hover/btn:opacity-60 transition-opacity" />
          {/* Internal Neon Sweep */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer-edge_2s_infinite]" />
        </a>
      </div>
      
      <style>{`
        @keyframes shimmer-edge {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

interface HackathonListProps {
  onBack: () => void;
}

const HackathonList: React.FC<HackathonListProps> = ({ onBack }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'live' | 'upcoming'>('all');

  const filteredHackathons = GLOBAL_HACKATHONS.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase()) || 
                          h.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || h.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 space-y-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
        <div className="space-y-14">
          <button 
            onClick={onBack}
            className="flex items-center gap-6 text-zinc-500 hover:text-white transition-all group"
          >
            <div className="w-16 h-16 rounded-[1.75rem] bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] group-hover:scale-110">
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-2 transition-transform duration-500" />
            </div>
            <span className="text-[16px] font-black uppercase tracking-[0.7em] drop-shadow-md text-zinc-600 group-hover:text-white transition-colors">Return_to_Nexus</span>
          </button>
          
          <div className="space-y-8">
            <div className="flex items-center gap-10">
              <div className="relative group/globe cursor-pointer">
                <div className="absolute -inset-8 bg-emerald-500/40 blur-[50px] rounded-full opacity-0 group-hover/globe:opacity-100 transition-opacity duration-700"></div>
                <div className="p-8 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-[3.5rem] shadow-[0_0_80px_rgba(16,185,129,0.3)] group-hover/globe:bg-emerald-500/20 transition-all duration-700 relative z-10">
                  <Globe className="w-20 h-20 text-emerald-500 group-hover/globe:rotate-[360deg] transition-transform duration-[3000ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </div>
              </div>
              <h2 className="text-[6.5rem] font-black text-white tracking-tighter leading-none italic select-none">
                The Global <span className="bg-gradient-to-r from-emerald-400 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(52,211,153,0.6)]">Registry.</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-4xl max-w-4xl font-medium border-l-[10px] border-emerald-500/30 pl-14 ml-5 italic leading-tight">
              Synchronizing neural uplinks across 142 distinct high-frequency innovation nodes.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 w-full lg:w-auto">
          <div className="relative group w-full sm:w-[550px]">
            <Search className="absolute left-10 top-1/2 -translate-y-1/2 w-8 h-8 text-zinc-600 group-focus-within:text-emerald-400 transition-colors duration-500" />
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by signal name, tech, or sector..."
              className="w-full bg-zinc-900 border-2 border-white/5 rounded-[3rem] pl-24 pr-12 py-8 text-2xl text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-800 font-medium shadow-3xl"
            />
            {/* Input background glow */}
            <div className="absolute inset-0 -z-10 bg-emerald-500/15 blur-[60px] opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="flex bg-zinc-900 border-2 border-white/5 rounded-[3rem] p-3 self-start shadow-3xl">
            {(['all', 'live', 'upcoming'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-12 py-5 text-[15px] font-black uppercase tracking-[0.5em] rounded-[2.25rem] transition-all duration-500 ${
                  filter === f 
                    ? 'bg-white text-black shadow-[0_0_50px_rgba(255,255,255,0.5)] scale-105' 
                    : 'text-zinc-600 hover:text-white hover:bg-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredHackathons.map((hack) => (
          <HackathonRegistryCard key={hack.id} hack={hack} />
        ))}
      </div>

      {filteredHackathons.length === 0 && (
        <div className="py-64 text-center space-y-16 bg-zinc-900/10 border-[3px] border-dashed border-white/5 rounded-[7rem] group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="w-40 h-40 bg-zinc-950 rounded-[4rem] border-2 border-white/10 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-700 shadow-3xl relative z-10">
            <Shield className="w-20 h-20 text-zinc-800 group-hover:text-red-500 transition-colors duration-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]" />
          </div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-6xl font-black text-white tracking-tighter italic">Signal Interrupted.</h3>
            <p className="text-zinc-500 text-2xl max-w-lg mx-auto font-medium leading-relaxed">No high-frequency competitive targets detected within current scanning radius.</p>
          </div>
          <button 
            onClick={() => {setSearch(''); setFilter('all');}}
            className="relative z-10 px-16 py-6 bg-white text-black hover:bg-red-500 hover:text-white rounded-[2.5rem] text-[16px] font-black uppercase tracking-[0.6em] transition-all duration-500 shadow-3xl group-hover:scale-105"
          >
            Recalibrate Uplink
          </button>
        </div>
      )}

      {/* Futuristic Technical Status Bar */}
      <footer className="pt-28 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/10 opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div className="flex flex-wrap items-center justify-center gap-16">
          <div className="flex items-center gap-5">
            <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,1)] animate-pulse" />
            <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-[0.7em]">Link_Status: NOMINAL</span>
          </div>
          <div className="flex items-center gap-5">
             <Activity className="w-7 h-7 text-zinc-600 animate-[pulse_2s_infinite]" />
             <span className="text-[12px] font-mono text-zinc-500 uppercase tracking-[0.7em]">Neural_Rate: 12.4 TB/S</span>
          </div>
          <div className="text-[12px] font-mono text-zinc-600 uppercase tracking-[0.7em]">Auth_Node: HACK_X_SUPREME</div>
        </div>
        <div className="flex items-center gap-8 text-[12px] font-mono text-zinc-700 uppercase tracking-[0.7em]">
          <span>© 2025 PIKA_ELITE_SYSTEMS</span>
          <span className="w-2 h-2 bg-zinc-800 rounded-full" />
          <span className="text-emerald-500/50">v5.2.1_ULTRA_STABLE</span>
        </div>
      </footer>
    </div>
  );
};

export default HackathonList;
