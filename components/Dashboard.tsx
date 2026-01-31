
import React, { useRef } from 'react';
import { Radio, Calendar, Trophy, Zap, BookOpen, ShieldCheck, ArrowRight, MapPin, ListFilter, Activity, Sparkles, Binary, Cpu, Cloud, BrainCircuit, Globe } from 'lucide-react';
import { ViewState, HackathonUpdate } from '../types';

export const PINNED_HACKATHONS: HackathonUpdate[] = [
  { id: '1', name: 'ETHGlobal London', location: 'London, UK', date: 'LIVE NOW', status: 'live', prizes: '$250,000' },
  { id: '2', name: 'Google Solution Challenge', location: 'Global / Online', date: 'Upcoming: Mar 2025', status: 'upcoming', prizes: '$100,000' },
  { id: '3', name: 'Solana Grizzlython', location: 'Global / Online', date: 'LIVE NOW', status: 'live', prizes: '$1,000,000' },
  { id: '4', name: 'Hack the North 2024', location: 'Waterloo, CA', date: 'Sept 13-15', status: 'upcoming', prizes: 'Gear & Venture' }
];

const AI_TOOLS = [
  { name: 'Gemini 2.5', color: 'from-blue-400 to-emerald-400', shadow: 'shadow-blue-500/50', icon: <Cpu className="w-6 h-6" /> },
  { name: 'VEO 3.1', color: 'from-purple-500 to-pink-500', shadow: 'shadow-purple-500/50', icon: <Zap className="w-6 h-6" /> },
  { name: 'GPT-O1', color: 'from-zinc-100 to-zinc-400', shadow: 'shadow-white/50', icon: <BrainCircuit className="w-6 h-6" /> },
  { name: 'Claude 3.5', color: 'from-orange-400 to-red-500', shadow: 'shadow-orange-500/50', icon: <Binary className="w-6 h-6" /> },
  { name: 'Llama 3', color: 'from-indigo-400 to-purple-600', shadow: 'shadow-indigo-500/50', icon: <Cloud className="w-6 h-6" /> }
];

interface DashboardProps {
  onNavigate: (view: ViewState) => void;
}

interface HackathonCardProps {
  hack: HackathonUpdate;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ hack }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-black/20 border border-white/5 p-7 rounded-[2.5rem] hover:border-emerald-500/60 transition-all duration-700 overflow-hidden cursor-default shadow-2xl glass-box"
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `
            radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.25), transparent 60%),
            radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%)
          `
        }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`flex items-center gap-3 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
            hack.status === 'live' 
              ? 'bg-red-500/15 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]' 
              : 'bg-blue-500/15 border-blue-500/50 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
          }`}>
            {hack.status === 'live' && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
              </span>
            )}
            <span className="glow-text-white">{hack.status}</span>
          </div>
          <Trophy className="w-5 h-5 text-zinc-800 group-hover:text-yellow-400 transition-all duration-700 group-hover:scale-125" />
        </div>

        <h3 className="text-xl font-black text-white mb-4 group-hover:glow-text-white transition-all duration-500 leading-tight tracking-tighter outfit uppercase">
          {hack.name}
        </h3>

        <div className="space-y-3 mb-6 outfit">
          <div className="flex items-center gap-3 text-zinc-500 group-hover:glow-text-white transition-colors">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs font-bold tracking-tight">{hack.location}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-600 group-hover:text-emerald-500 transition-colors">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-xs font-mono tracking-tighter uppercase font-black">{hack.date}</span>
          </div>
        </div>

        <div className="pt-5 border-t border-white/10 flex justify-between items-center relative overflow-hidden">
          <span className="text-[10px] text-zinc-700 uppercase font-black tracking-[0.4em] group-hover:glow-text-white transition-colors">Nexus_Pool</span>
          <span className="text-sm text-emerald-400 font-black group-hover:glow-text-white transition-all group-hover:scale-110 origin-right">
            {hack.prizes}
          </span>
        </div>
      </div>
    </div>
  );
};

interface NavCardProps {
  onClick: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
  label: string;
  themeColor: 'purple' | 'blue' | 'emerald';
}

const NavCard: React.FC<NavCardProps> = ({ onClick, title, description, icon, label, themeColor }) => {
  const cardRef = useRef<HTMLButtonElement>(null);

  const colors = {
    purple: {
      border: 'group-hover:border-purple-500/80',
      icon: 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-black',
      glow: 'rgba(168, 85, 247, 0.6)',
      secondaryGlow: 'rgba(236, 72, 153, 0.4)',
      text: 'text-purple-400',
      shadow: 'hover:shadow-[0_0_120px_-10px_rgba(168,85,247,0.5)]'
    },
    blue: {
      border: 'group-hover:border-blue-500/80',
      icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-black',
      glow: 'rgba(59, 130, 246, 0.6)',
      secondaryGlow: 'rgba(30, 64, 175, 0.4)',
      text: 'text-blue-400',
      shadow: 'hover:shadow-[0_0_120px_-10px_rgba(59,130,246,0.5)]'
    },
    emerald: {
      border: 'group-hover:border-emerald-500/80',
      icon: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black',
      glow: 'rgba(16, 185, 129, 0.6)',
      secondaryGlow: 'rgba(20, 184, 166, 0.4)',
      text: 'text-emerald-400',
      shadow: 'hover:shadow-[0_0_120px_-10px_rgba(16,185,129,0.5)]'
    }
  }[themeColor];

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <button 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative h-[450px] bg-black/40 border border-white/5 rounded-[4rem] overflow-hidden p-12 text-left transition-all duration-700 shadow-2xl glass-box active:scale-[0.98] ${colors.border} ${colors.shadow}`}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `
            radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${colors.glow}, transparent 70%),
            radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${colors.secondaryGlow}, transparent 55%),
            radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.25), transparent 45%)
          `
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between outfit">
        <div className="space-y-10">
          <div className={`w-24 h-24 ${colors.icon} rounded-[2rem] border flex items-center justify-center group-hover:scale-110 transition-all duration-700 relative overflow-hidden group-hover:shadow-[0_0_40px_currentColor]`}>
            <div className={`absolute inset-0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-current`} />
            <div className="relative z-10 group-hover:scale-125 transition-transform duration-500">
              {icon}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-4xl font-black text-white tracking-tighter leading-none group-hover:glow-text-white origin-left transition-all duration-700 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {title}
            </h3>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium group-hover:text-zinc-100 transition-colors duration-500 line-clamp-3">
              {description}
            </p>
          </div>
        </div>
        
        <div className={`flex items-center gap-6 text-[13px] font-black uppercase tracking-[0.5em] ${colors.text} group-hover:translate-x-6 transition-all duration-700 group-hover:drop-shadow-[0_0_10px_currentColor]`}>
          <div className="w-16 h-[3px] bg-current opacity-20 group-hover:w-32 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_20px_currentColor]" />
          {label}
          <ArrowRight className="w-6 h-6 group-hover:scale-125 group-hover:translate-x-3 transition-all" />
        </div>
      </div>
    </button>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-28 animate-in fade-in duration-1000 relative">
      {/* Live Feed Header Section */}
      <section className="space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-white/5 pb-16 relative group/header">
          <div className="absolute -left-32 -top-16 w-96 h-96 bg-emerald-500/20 blur-[150px] rounded-full opacity-0 group-hover/header:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="space-y-6 relative outfit">
            <div className="flex items-center gap-8">
              <div className="p-5 bg-red-500/10 border border-red-500/30 rounded-3xl relative z-10 shadow-2xl">
                <Radio className="w-10 h-10 text-red-500 animate-pulse" />
              </div>
              <h2 className="text-6xl font-black uppercase tracking-tighter text-white transition-all duration-700 cursor-default select-none group/registry relative overflow-hidden py-2">
                <span className="group-hover/header:glow-text-white transition-colors duration-700 block">Global Pulse</span>
              </h2>
              <span className="text-zinc-800 text-5xl font-extralight hidden lg:block">|</span>
              <span className="text-zinc-500 text-4xl tracking-normal normal-case font-medium group-hover/registry:glow-text-white transition-colors duration-700 hidden lg:block uppercase tracking-tighter font-black">Neural Stream Registry</span>
            </div>
            <div className="flex items-center gap-5 ml-28 group/status-text cursor-default">
              <Activity className="w-6 h-6 text-emerald-500 animate-[pulse_1.5s_infinite]" />
              <p className="text-[13px] font-mono text-zinc-600 uppercase tracking-[0.5em] font-bold group-hover/status-text:glow-text-white transition-colors">Synchronizing 142 Active Global Uplinks</p>
            </div>
          </div>
          
          <button 
            onClick={() => onNavigate('hackathon-list')}
            className="group relative flex items-center gap-6 px-16 py-7 bg-white/5 border-2 border-emerald-500/40 rounded-[3rem] text-[15px] font-black uppercase tracking-[0.4em] text-emerald-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-300 transition-all duration-700 shadow-2xl glass-box overflow-hidden"
          >
            <ListFilter className="w-6 h-6 transition-transform duration-700 relative z-10" />
            <span className="relative z-10 tracking-[0.5em] outfit font-black">Expand Registry</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PINNED_HACKATHONS.map((hack) => (
            <HackathonCard key={hack.id} hack={hack} />
          ))}
        </div>
      </section>

      {/* NEURAL BRIDGE - INTERSECTION SECTION */}
      <section className="relative py-28 group/bridge overflow-hidden">
        {/* Extreme background glow for intersection */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-blue-500/20 blur-[150px] opacity-10 group-hover/bridge:opacity-100 transition-opacity duration-1000" />
        
        <div className="max-w-5xl mx-auto space-y-20 text-center relative z-10">
          <div className="flex items-center justify-center gap-6 text-zinc-500 uppercase tracking-[0.9em] text-[12px] font-black group-hover/bridge:text-white transition-all duration-700">
            <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
            Neural Infrastructure Bridge
            <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-[7rem] font-black text-white tracking-tighter leading-none select-none uppercase transition-all duration-700 group-hover/bridge:scale-[1.08]">
             <span className="relative inline-block group-hover/bridge:text-transparent group-hover/bridge:bg-clip-text group-hover/bridge:bg-gradient-to-r group-hover/bridge:from-emerald-400 group-hover/bridge:via-white group-hover/bridge:to-purple-500 group-hover/bridge:drop-shadow-[0_0_100px_rgba(52,211,153,1)] transition-all duration-700 shimmer-title px-6 py-8">
               Main AI Tools for your Hackathon
             </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-10">
             {AI_TOOLS.map((tool, idx) => (
               <div 
                key={idx}
                className={`group/tool flex items-center gap-5 px-10 py-6 bg-black/60 border border-white/5 rounded-[2.5rem] hover:border-white/40 transition-all duration-500 cursor-default hover:scale-115 shadow-3xl relative overflow-hidden group-hover/bridge:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]`}
               >
                 {/* Internal vivid glow */}
                 <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover/tool:opacity-30 transition-opacity duration-500`} />
                 <div className={`absolute inset-0 opacity-0 group-hover/tool:opacity-20 blur-xl bg-gradient-to-r ${tool.color} transition-opacity duration-500`} />
                 
                 <div className={`p-4 bg-zinc-900 rounded-2xl group-hover/tool:bg-white group-hover/tool:text-black transition-all duration-500 shadow-2xl group-hover/tool:scale-110`}>
                   {tool.icon}
                 </div>
                 <span className={`text-2xl font-black text-white uppercase tracking-[0.2em] group-hover/tool:text-transparent group-hover/tool:bg-clip-text group-hover/tool:bg-gradient-to-r ${tool.color} group-hover/tool:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]`}>
                   {tool.name}
                 </span>
               </div>
             ))}
          </div>

          <div className="flex items-center justify-center gap-6 pt-16">
            <div className="h-[2px] w-32 bg-white/5 group-hover/bridge:bg-emerald-500 group-hover/bridge:w-64 transition-all duration-1000 shadow-[0_0_20px_emerald]" />
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-0 group-hover/bridge:opacity-100 animate-pulse" />
              <Activity className="w-10 h-10 text-emerald-500 group-hover/bridge:animate-[spin_4s_linear_infinite] relative z-10" />
            </div>
            <div className="h-[2px] w-32 bg-white/5 group-hover/bridge:bg-blue-500 group-hover/bridge:w-64 transition-all duration-1000 shadow-[0_0_20px_blue]" />
          </div>
        </div>

        {/* Floating animated particles within intersection */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full blur-[6px] animate-[ping_3s_infinite] opacity-0 group-hover/bridge:opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full blur-[6px] animate-[ping_4s_infinite] opacity-0 group-hover/bridge:opacity-60" />
      </section>

      {/* TOOL MODULES SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-20">
        <NavCard 
          onClick={() => onNavigate('idea-gen')}
          title="Idea Synthesis"
          description="Harness the raw power of the synthesis engine. Hallucinate high-impact concepts tuned to your unique technical stack and constraints."
          icon={<Zap className="w-12 h-12" />}
          label="Initialize Engine"
          themeColor="purple"
        />

        <NavCard 
          onClick={() => onNavigate('guidebook')}
          title="Winner's Codex"
          description="Master tactical deep-dives. Strategies for high-stakes competition, scope containment, and the psychology of domination."
          icon={<BookOpen className="w-12 h-12" />}
          label="Read Protocol"
          themeColor="blue"
        />

        <NavCard 
          onClick={() => onNavigate('audit')}
          title="HackJudge Audit"
          description="The flagship protocol. Submit your technical blueprint for a ruthless, high-stakes audit by the HackJudge core evaluator."
          icon={<ShieldCheck className="w-12 h-12" />}
          label="Execute Final Audit"
          themeColor="emerald"
        />
      </section>

      <div className="fixed bottom-0 right-0 w-[900px] h-[900px] bg-emerald-600/10 blur-[200px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="fixed top-1/3 left-0 w-[800px] h-[800px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none -z-10" />
    </div>
  );
};

export default Dashboard;
