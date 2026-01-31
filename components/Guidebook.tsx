
import React, { useState } from 'react';
import { ChevronLeft, Book, Brain, Trophy, ShieldAlert, Heart, Sparkles, Target, Zap, Clock, Code, Lightbulb, CheckCircle2, AlertTriangle } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const ARTICLES: Article[] = [
  {
    id: 'what-is',
    title: 'What is a Hackathon?',
    icon: <Book className="w-5 h-5" />,
    content: (
      <div className="space-y-10 outfit">
        <div className="relative p-8 bg-white/5 border border-white/10 rounded-[2.5rem] glass-box overflow-hidden group/intro cursor-default hover:border-white/30 transition-all duration-500">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/intro:opacity-40 group-hover/intro:scale-125 transition-all duration-700">
            <Target className="w-24 h-24 text-white drop-shadow-[0_0_20px_white]" />
          </div>
          <p className="text-2xl font-light leading-relaxed text-zinc-200 glow-text-white relative z-10 select-none">
            A hackathon is a social coding event where programmers, designers, and enthusiasts collaborate intensively on software projects. It's a <span className="text-emerald-400 font-bold glow-text-emerald">pressure cooker</span> for high-speed innovation.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 group/h4">
            <h4 className="font-black text-white uppercase tracking-tighter text-3xl glow-text-emerald shimmer-title">
              The Anatomy of a Hack
            </h4>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent group-hover/h4:from-emerald-400 group-hover/h4:shadow-[0_0_15px_emerald] transition-all" />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'Time-bound', desc: 'Usually 24–48 hours of uninterrupted synchronization.', icon: <Clock className="w-5 h-5" /> },
              { label: 'Thematic focus', desc: 'AI, Web3, Sustainability, or Industry Disruption.', icon: <Zap className="w-5 h-5" /> },
              { label: 'Solution-oriented', desc: 'Build a functional MVP, not a theoretical business.', icon: <Lightbulb className="w-5 h-5" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-7 bg-zinc-900/50 border border-white/5 rounded-3xl group/item hover:bg-white/5 hover:border-emerald-500/40 hover:scale-[1.02] transition-all duration-500">
                <div className="mt-1 p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl group-hover/item:bg-emerald-500 group-hover/item:text-black group-hover/item:shadow-[0_0_25px_emerald] group-hover/item:scale-110 transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <div className="text-lg font-black text-white uppercase tracking-widest mb-1 glow-text-white transition-all">{item.label}</div>
                  <div className="text-zinc-400 font-medium group-hover/item:text-zinc-100 transition-colors duration-500 select-none">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'strategy',
    title: 'The Winner\'s Strategy',
    icon: <Trophy className="w-5 h-5" />,
    content: (
      <div className="space-y-10 outfit">
        <div className="p-8 border-l-8 border-emerald-500 bg-emerald-500/5 rounded-r-[3rem] group/strat cursor-default hover:bg-emerald-500/10 transition-all duration-500">
           <p className="text-2xl font-light leading-relaxed text-zinc-300 glow-text-white select-none">
            Winning isn't just about the best code; it's about the best <span className="text-emerald-400 font-black glow-text-emerald">execution</span> of a specific high-impact idea.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 group/h4">
            <h4 className="font-black text-white uppercase tracking-tighter text-3xl glow-text-white shimmer-title">
              Core Tactics
            </h4>
            <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent group-hover/h4:from-white group-hover/h4:shadow-[0_0_15px_white] transition-all" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { title: 'Scope Down Early', desc: 'You cannot build Google in a weekend. Identify and build the single "Magic Moment" of your app first.', color: 'emerald' },
              { title: 'Focus on UI/UX', desc: 'Judges eat with their eyes. A polished interface often outweighs technical complexity in short rounds.', color: 'blue' },
              { title: 'The Pitch is Everything', desc: 'You have 3 minutes to sell your soul. Devote 25% of time to the narrative and presentation.', color: 'purple' }
            ].map((item, i) => (
              <div key={i} className="relative p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 hover:border-white/30 hover:bg-white/5 hover:scale-[1.02] transition-all duration-700 group/tactic cursor-default overflow-hidden">
                {/* Number indicator with glow */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center font-black text-white text-base group-hover/tactic:border-emerald-500 group-hover/tactic:shadow-[0_0_15px_emerald] transition-all">
                  0{i+1}
                </div>
                <h5 className="text-2xl font-black text-white mb-4 glow-text-white uppercase tracking-wider shimmer-title">{item.title}</h5>
                <p className="text-zinc-400 leading-relaxed font-medium text-lg group-hover/tactic:text-zinc-200 transition-colors duration-500">{item.desc}</p>
                {/* Internal sparkle decor */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover/tactic:opacity-20 transition-opacity duration-700 scale-150 rotate-12">
                   <Sparkles className="w-12 h-12 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'mindset',
    title: 'Mindset & Staying Calm',
    icon: <Brain className="w-5 h-5" />,
    content: (
      <div className="space-y-10 outfit">
        <div className="relative p-10 overflow-hidden rounded-[3.5rem] bg-purple-500/5 border border-purple-500/20 shadow-2xl group/mind cursor-default hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-700">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/mind:opacity-40 group-hover/mind:scale-125 transition-all duration-1000">
            <Brain className="w-40 h-40 text-purple-400 drop-shadow-[0_0_20px_purple]" />
          </div>
          <p className="text-2xl font-light leading-relaxed text-zinc-200 glow-text-white relative z-10 select-none">
            At 3:00 AM, everything will break. This is the <span className="text-purple-400 font-bold glow-text-purple">inflection point</span> where champions are forged.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4 group/h4">
            <h4 className="font-black text-white uppercase tracking-tighter text-3xl glow-text-purple shimmer-title">
              Resilience Protocol
            </h4>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent group-hover/h4:from-purple-400 group-hover/h4:shadow-[0_0_15px_purple] transition-all" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'The 90/10 Rule', desc: '90% of complex bugs are solved by a walk or hydration.', icon: <CheckCircle2 className="w-8 h-8" /> },
              { title: 'Isolate Panic', desc: 'When bugs hit, isolate the component. Pivot early.', icon: <AlertTriangle className="w-8 h-8" /> },
              { title: 'Rest is a Tool', desc: 'A 2-hour nap beats 6 hours of hallucinated debugging.', icon: <Clock className="w-8 h-8" /> }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-950 border border-white/5 flex flex-col gap-5 group/res hover:border-purple-500/60 hover:bg-white/5 hover:scale-105 transition-all duration-700 text-center shadow-2xl">
                <div className="mx-auto p-5 bg-purple-500/10 rounded-[2rem] text-purple-400 group-hover/res:bg-purple-500 group-hover/res:text-black group-hover/res:shadow-[0_0_30px_purple] group-hover/res:scale-110 transition-all duration-500">
                  {item.icon}
                </div>
                <h5 className="font-black text-white uppercase tracking-widest text-base glow-text-white">{item.title}</h5>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium group-hover/res:text-zinc-200 transition-colors duration-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'dos-donts',
    title: 'The Dos & Don\'ts',
    icon: <ShieldAlert className="w-5 h-5" />,
    content: (
      <div className="space-y-12 pt-6 outfit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-emerald-500/5 p-12 rounded-[3.5rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden group/card glass-box hover:scale-[1.03] hover:border-emerald-500/50 transition-all duration-700 cursor-default">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-5 mb-10 group/h5">
               <div className="p-4 bg-emerald-500 rounded-[1.75rem] text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover/card:shadow-[0_0_30px_emerald] group-hover/card:scale-110 transition-all duration-500">
                  <CheckCircle2 className="w-7 h-7" />
               </div>
               <h5 className="font-black text-emerald-400 uppercase tracking-[0.5em] text-2xl glow-text-emerald shimmer-title">Standard_DO</h5>
            </div>
            <ul className="space-y-8 relative z-10">
              {[
                'Use pre-built UI components.',
                'Document APIs immediately.',
                'Record a backup demo video.',
                'Check in with mentors hourly.'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-5 text-zinc-300 glow-text-white transition-all cursor-default text-xl font-medium select-none group/li">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)] group-hover/li:scale-150 transition-transform" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-500/5 p-12 rounded-[3.5rem] border border-red-500/20 shadow-2xl relative overflow-hidden group/card glass-box hover:scale-[1.03] hover:border-red-500/50 transition-all duration-700 cursor-default">
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-5 mb-10 group/h5">
               <div className="p-4 bg-red-500 rounded-[1.75rem] text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] group-hover/card:shadow-[0_0_30px_red] group-hover/card:scale-110 transition-all duration-500">
                  <ShieldAlert className="w-7 h-7" />
               </div>
               <h5 className="font-black text-red-400 uppercase tracking-[0.4em] text-xl glow-text-white shimmer-title">Standard_DONT</h5>
            </div>
            <ul className="space-y-8 relative z-10">
              {[
                'Over-engineer login logic.',
                'Write unit tests (skip it).',
                'Ignore specific judging criteria.',
                'Refactor clean code on Sunday.'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-5 text-zinc-300 glow-text-white transition-all cursor-default text-xl font-medium select-none group/li">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] group-hover/li:scale-150 transition-transform" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
];

interface GuidebookProps {
  onBack: () => void;
}

const Guidebook: React.FC<GuidebookProps> = ({ onBack }) => {
  const [activeArticle, setActiveArticle] = useState(ARTICLES[0].id);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 animate-in fade-in duration-1000 relative">
      {/* Return to Hub Section */}
      <button 
        onClick={onBack}
        className="flex items-center gap-6 text-zinc-500 hover:text-white transition-all group mb-16"
      >
        <div className="w-14 h-14 rounded-[1.75rem] bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] group-hover:scale-110">
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="text-base font-black uppercase tracking-[0.6em] text-zinc-600 group-hover:text-emerald-400 transition-colors glow-text-white select-none">
          Return_to_Hub
        </span>
      </button>

      <div className="flex flex-col lg:flex-row gap-20">
        {/* Sidebar */}
        <aside className="w-full lg:w-96 space-y-8">
          <div className="mb-10 px-6 group/kb cursor-default select-none">
             <h3 className="text-sm font-black uppercase tracking-[0.8em] text-zinc-600 mb-4 glow-text-white transition-all duration-500">
               Knowledge Base
             </h3>
             <div className="h-1.5 w-16 bg-zinc-800 rounded-full group-hover/kb:w-48 group-hover/kb:bg-white transition-all duration-700 shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
          </div>
          <div className="space-y-6">
            {ARTICLES.map((art) => (
              <button
                key={art.id}
                onClick={() => setActiveArticle(art.id)}
                className={`w-full flex items-center gap-6 px-8 py-8 rounded-[3rem] text-left transition-all duration-700 border glass-box group/nav ${
                  activeArticle === art.id 
                    ? 'bg-white/10 border-white/60 text-white shadow-[0_0_60px_rgba(255,255,255,0.2)] scale-[1.05]' 
                    : 'bg-white/5 border-white/5 text-zinc-500 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]'
                }`}
              >
                <div className={`p-4 rounded-[1.5rem] transition-all duration-500 ${activeArticle === art.id ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,1)] scale-110' : 'bg-zinc-900 group-hover/nav:bg-zinc-800 group-hover/nav:scale-110'}`}>
                  {art.icon}
                </div>
                <span className={`text-2xl font-bold tracking-tight outfit transition-all duration-500 ${activeArticle === art.id ? 'glow-text-white scale-105 shimmer-title uppercase' : 'group-hover/nav:glow-text-white group-hover/nav:scale-105 uppercase'}`}>
                  {art.title}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-black/10 border border-white/10 rounded-[5rem] p-16 min-h-[850px] relative overflow-hidden glass-box shadow-[0_0_150px_-30px_rgba(0,0,0,1)]">
          {/* Decorative Sparkles showing through */}
          <div className="absolute -top-10 -right-10 p-24 opacity-[0.08] rotate-12 pointer-events-none group-hover:scale-110 group-hover:rotate-45 transition-all duration-[2000ms]">
            <Sparkles className="w-[30rem] h-[30rem] text-white blur-[2px]" />
          </div>
          
          {ARTICLES.map((art) => (
            art.id === activeArticle && (
              <div key={art.id} className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-20 relative z-10">
                <div className="space-y-8">
                  <div className="flex items-center gap-6 text-emerald-400 text-[12px] font-black uppercase tracking-[0.5em] glow-text-white cursor-default group/shiv">
                    <Sparkles className="w-6 h-6 animate-pulse group-hover/shiv:scale-150 transition-transform group-hover/shiv:text-emerald-300" />
                    <span className="outfit transition-all duration-500 group-hover/shiv:tracking-[0.6em]">Knowledge shared by Developer Shiv for you guys</span>
                  </div>
                  <h2 className="text-[5.5rem] font-black text-white flex items-center gap-10 tracking-tighter outfit glow-text-white leading-[0.85] select-none shimmer-title uppercase">
                    {art.title}
                  </h2>
                </div>
                <div className="text-zinc-300 leading-relaxed font-normal outfit">
                  {art.content}
                </div>
              </div>
            )
          ))}

          {/* Bottom Floor Decor with subtle glow */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
        </main>
      </div>

      {/* Extreme Floating Glows for Ambiance */}
      <div className="fixed -bottom-64 -left-64 w-[800px] h-[800px] bg-emerald-500/10 blur-[250px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="fixed top-1/2 -right-64 w-[800px] h-[800px] bg-blue-500/10 blur-[250px] rounded-full pointer-events-none -z-10 animate-pulse" />
    </div>
  );
};

export default Guidebook;
