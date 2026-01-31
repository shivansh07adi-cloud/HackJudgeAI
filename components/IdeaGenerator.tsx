
import React, { useState } from 'react';
import { ChevronLeft, Zap, Sparkles, Terminal, Rocket, Cpu, Binary, Target, Layout, Code, ShieldCheck, RefreshCw } from 'lucide-react';
import { generateHackathonIdea } from '../services/geminiService';

interface IdeaGeneratorProps {
  onBack: () => void;
}

const IdeaGenerator: React.FC<IdeaGeneratorProps> = ({ onBack }) => {
  const [skills, setSkills] = useState('');
  const [theme, setTheme] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [idea, setIdea] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await generateHackathonIdea(skills, theme);
      setIdea(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStructuredIdea = (content: string) => {
    const sections = content.split(/(?=#{1,4}|(?:\d\.)\s)/g);
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 inter relative z-10">
        {sections.map((section, idx) => {
          const lines = section.trim().split('\n');
          const title = lines[0].replace(/#{1,4}|\d\.|\*/g, '').trim();
          const body = lines.slice(1).join('\n').trim();

          if (!title) return null;

          const getIcon = (t: string) => {
            if (t.toLowerCase().includes('title')) return <Rocket className="w-6 h-6" />;
            if (t.toLowerCase().includes('why') || t.toLowerCase().includes('gap')) return <Target className="w-6 h-6" />;
            if (t.toLowerCase().includes('mvp') || t.toLowerCase().includes('feature')) return <Layout className="w-6 h-6" />;
            if (t.toLowerCase().includes('tech') || t.toLowerCase().includes('stack')) return <Code className="w-6 h-6" />;
            if (t.toLowerCase().includes('judge') || t.toLowerCase().includes('tip')) return <ShieldCheck className="w-6 h-6" />;
            return <Sparkles className="w-6 h-6" />;
          };

          const isTitle = idx === 0 || title.toLowerCase().includes('title');

          return (
            <div 
              key={idx} 
              className={`${isTitle ? 'md:col-span-2' : ''} group/section p-10 rounded-[3.5rem] bg-zinc-900/40 border border-white/5 hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-700 glass-box hover:shadow-[0_0_100px_-20px_rgba(168,85,247,0.45)] cursor-default overflow-hidden relative`}
            >
              {/* Internal subtle glow pulse */}
              <div className="absolute inset-0 bg-purple-500/0 group-hover/section:bg-purple-500/[0.03] transition-colors duration-700" />
              
              <div className="flex items-center gap-6 mb-8 group/h4 relative z-10">
                <div className={`p-4 rounded-2xl transition-all duration-500 ${isTitle ? 'bg-purple-500 text-black shadow-[0_0_25px_rgba(168,85,247,0.8)] group-hover/section:scale-110' : 'bg-white/5 text-purple-400 group-hover/section:bg-purple-500 group-hover/section:text-black group-hover/section:shadow-[0_0_20px_purple]'}`}>
                  {getIcon(title)}
                </div>
                <h4 className={`font-black uppercase tracking-widest transition-all duration-500 ${isTitle ? 'text-4xl text-white shimmer-title' : 'text-base text-zinc-400 group-hover/section:text-purple-400 group-hover/section:glow-text-white'}`}>
                  {title}
                </h4>
              </div>
              <div className={`text-zinc-300 whitespace-pre-wrap leading-relaxed transition-all duration-500 group-hover/section:text-white group-hover/section:glow-text-white relative z-10 ${isTitle ? 'text-3xl font-light tracking-tight' : 'text-lg font-normal'} prose prose-invert max-w-none select-none`}>
                {body}
              </div>
              
              {/* Decorative accent for each box */}
              <div className="absolute bottom-6 right-8 opacity-0 group-hover/section:opacity-30 transition-all duration-700 translate-y-4 group-hover/section:translate-y-0 relative z-10">
                <Sparkles className="w-10 h-10 text-white drop-shadow-[0_0_10px_white]" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 animate-in fade-in duration-1000">
      {/* Return Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-6 text-zinc-500 hover:text-white transition-all group mb-16"
      >
        <div className="w-14 h-14 rounded-[1.75rem] bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] group-hover:scale-110">
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="text-base font-black uppercase tracking-[0.6em] text-zinc-600 group-hover:text-purple-400 transition-colors glow-text-white select-none">
          Return_to_Nexus
        </span>
      </button>

      <div className="space-y-24">
        {/* Header Section */}
        <header className="space-y-10 inter">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="relative group/zap">
              <div className="absolute -inset-8 bg-purple-500/30 blur-[60px] rounded-full opacity-0 group-hover/zap:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative p-7 bg-purple-500/10 border-2 border-purple-500/40 rounded-[2.5rem] shadow-[0_0_50px_rgba(168,85,247,0.2)] group-hover/zap:scale-110 group-hover/zap:bg-purple-500/20 transition-all duration-700">
                <Zap className="w-14 h-14 text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,1)] animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-black text-white tracking-tighter uppercase select-none group/title cursor-default">
              Idea <span className="relative inline-block transition-all duration-700 group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-purple-400 group-hover/title:via-white group-hover/title:to-blue-400 group-hover/title:drop-shadow-[0_0_80px_rgba(168,85,247,1)]">
                Synthesis
                <div className="absolute -bottom-4 left-0 w-0 h-2 bg-gradient-to-r from-purple-500 via-white to-blue-500 rounded-full group-hover/title:w-full transition-all duration-1000 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
              </span>
            </h2>
          </div>
          
          <div className="relative group/desc max-w-3xl">
            <p className="text-zinc-500 text-3xl font-medium leading-relaxed border-l-[12px] border-purple-500/20 pl-12 ml-4 transition-all duration-700 group-hover/desc:text-white group-hover/desc:border-purple-500 group-hover/desc:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-default select-none">
              Input your technical coordinates to <span className="text-purple-400 font-bold">hallucinate</span> high-impact project concepts via the neural engine.
            </p>
          </div>
        </header>

        {!idea ? (
          <form onSubmit={handleGenerate} className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-16 space-y-16 shadow-[0_0_100px_-30px_rgba(0,0,0,1)] relative overflow-hidden group/form glass-box inter">
            <div className="absolute top-0 right-0 p-16 opacity-[0.05] pointer-events-none group-focus-within/form:opacity-[0.15] transition-opacity duration-1000">
              <Binary className="w-64 h-64 text-purple-500" />
            </div>
            <div className="absolute bottom-0 left-0 p-16 opacity-[0.05] pointer-events-none group-focus-within/form:opacity-[0.15] transition-opacity duration-1000">
              <Cpu className="w-64 h-64 text-blue-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-5 group/input-box">
                <label className="text-[12px] font-black uppercase tracking-[0.6em] text-zinc-600 ml-4 group-focus-within/input-box:text-purple-400 group-hover/input-box:glow-text-white transition-all">Neural_Stack</label>
                <div className="relative">
                  <input 
                    required
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="e.g. React, Python, Solidity"
                    className="w-full bg-zinc-950/50 border-2 border-white/5 rounded-[2.5rem] px-10 py-8 text-2xl text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-zinc-800 font-medium shadow-2xl focus:shadow-[0_0_50px_rgba(168,85,247,0.1)]"
                  />
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500/20 group-focus-within/input-box:bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,1)]" />
                </div>
              </div>
              
              <div className="space-y-5 group/input-box">
                <label className="text-[12px] font-black uppercase tracking-[0.6em] text-zinc-600 ml-4 group-focus-within/input-box:text-blue-400 group-hover/input-box:glow-text-white transition-all">Target_Vertical</label>
                <div className="relative">
                  <input 
                    required
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    placeholder="e.g. AI for Health, Web3 Finance"
                    className="w-full bg-zinc-950/50 border-2 border-white/5 rounded-[2.5rem] px-10 py-8 text-2xl text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-800 font-medium shadow-2xl focus:shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                  />
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500/20 group-focus-within/input-box:bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
                </div>
              </div>
            </div>

            <div className="relative group/btn-container">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-white to-emerald-500 rounded-[3rem] blur-2xl opacity-0 group-hover/btn-container:opacity-50 transition-all duration-700 animate-pulse" />
              
              <button
                type="submit"
                disabled={isLoading}
                className={`group/btn relative w-full overflow-hidden py-10 rounded-[3rem] font-black uppercase tracking-[0.6em] text-2xl transition-all duration-700 active:scale-[0.97] border-2 shadow-2xl flex items-center justify-center gap-6 ${
                  isLoading 
                    ? 'bg-zinc-900 border-white/5 text-zinc-600 cursor-not-allowed' 
                    : 'bg-black border-white/10 text-white hover:border-transparent hover:text-black'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-white to-emerald-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-white/40 group-hover/btn:bg-black/20 animate-[shimmer-edge_3s_infinite]" />
                
                <span className="relative z-10 flex items-center gap-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  {isLoading ? (
                    <>
                      <Terminal className="w-10 h-10 animate-spin" />
                      Hallucinating Concepts...
                    </>
                  ) : (
                    <>
                      Generate Master Concept
                      <Sparkles className="w-10 h-10 group-hover/btn:rotate-[120deg] transition-transform duration-1000" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/30 opacity-0 group-hover/btn:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            {/* Structured Result Section */}
            <div className="space-y-16">
               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
                  <div className="flex items-center gap-6 text-purple-400 text-sm font-black uppercase tracking-[0.6em] bg-purple-500/10 px-10 py-4 rounded-full border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.4)] glow-text-white transition-all cursor-default select-none inter">
                    <Rocket className="w-7 h-7 animate-bounce" />
                    Neural_Spec_Sheet v2.0
                  </div>
                  <button 
                    onClick={() => setIdea(null)} 
                    className="group/reset flex items-center gap-5 text-base text-zinc-400 hover:text-white uppercase font-black transition-all tracking-[0.4em] glow-text-white bg-white/5 hover:bg-white/10 px-10 py-5 rounded-3xl border border-white/10 hover:border-purple-500/50 shadow-xl inter"
                  >
                    <RefreshCw className="w-6 h-6 group-hover/reset:rotate-[180deg] transition-transform duration-700 text-purple-500" />
                    Recalibrate_Engine
                  </button>
               </div>

               {renderStructuredIdea(idea)}
            </div>

            <div className="bg-purple-500/5 border border-purple-500/20 p-10 rounded-[3rem] flex items-center justify-center gap-8 group/footer cursor-default transition-all duration-700 hover:bg-purple-500/10 hover:border-purple-500/50 glass-box inter">
              <ShieldCheck className="w-10 h-10 text-purple-400 animate-pulse drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
              <p className="text-zinc-500 font-bold tracking-tight group-hover:text-white transition-colors text-xl glow-text-white select-none">
                This project idea is synthesized based on current market gaps and high-frequency innovation trends.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Ambient Background elements */}
      <div className="fixed -bottom-64 -left-64 w-[700px] h-[700px] bg-purple-600/10 blur-[250px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="fixed top-1/2 -right-64 w-[700px] h-[700px] bg-blue-600/10 blur-[250px] rounded-full pointer-events-none -z-10" />
      
      <style>{`
        @keyframes shimmer-edge {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default IdeaGenerator;
