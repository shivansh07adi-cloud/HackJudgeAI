
import React, { useState } from 'react';
// Added 'Activity' to the lucide-react imports to fix the "Cannot find name 'Activity'" error.
import { Upload, X, Terminal, ArrowRight, ChevronLeft, Sparkles, Binary, Cpu, FileText, Layout, Activity } from 'lucide-react';
import { ProjectSubmission } from '../types';

interface ProjectInputProps {
  onSubmit: (project: ProjectSubmission) => void;
  isLoading: boolean;
  onBack: () => void;
}

const ProjectInput: React.FC<ProjectInputProps> = ({ onSubmit, isLoading, onBack }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tools, setTools] = useState('');
  const [media, setMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMedia(reader.result as string);
        setMediaType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return;
    onSubmit({
      name,
      description,
      tools,
      media: media || undefined,
      mediaType: mediaType || undefined
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 inter relative">
      {/* Enhanced Return Navigation */}
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

      {/* Hero Header Section */}
      <div className="mb-24 space-y-10 cursor-default group/header relative">
        <div className="absolute -inset-24 bg-emerald-500/10 blur-[150px] rounded-full opacity-0 group-hover/header:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        <div className="flex items-center gap-4 text-emerald-400 text-[11px] font-black uppercase tracking-[0.7em] glow-text-white opacity-40 group-hover/header:opacity-100 transition-all duration-500">
          <div className="h-px w-10 bg-emerald-500/50" />
          <Sparkles className="w-6 h-6 animate-pulse" />
          Submission Protocol Active
        </div>

        <h2 className="text-[6rem] md:text-[8rem] font-black text-white tracking-tighter leading-[0.8] select-none transition-all duration-700">
          <span className="relative inline-block group-hover/header:text-transparent group-hover/header:bg-clip-text group-hover/header:bg-gradient-to-r group-hover/header:from-emerald-400 group-hover/header:via-white group-hover/header:to-blue-500 group-hover/header:drop-shadow-[0_0_80px_rgba(52,211,153,1)] transition-all duration-700 shimmer-title px-2 py-4 uppercase">
            Audit Your Project.
          </span>
        </h2>

        <div className="relative pl-12 border-l-[4px] border-white/5 group-hover/header:border-emerald-500/50 transition-all duration-700">
          <p className="text-zinc-500 text-3xl md:text-5xl font-light leading-[1.15] max-w-3xl group-hover/header:text-zinc-100 transition-colors duration-700">
            Submit your technical blueprint for a <span className="text-white font-bold group-hover/header:text-emerald-400 transition-colors duration-500 underline underline-offset-8 decoration-emerald-500/30">ruthless, unbiased evaluation</span> by the HackJudge Core engine.
          </p>
          
          <div className="mt-8 flex items-center gap-4 opacity-0 group-hover/header:opacity-60 transition-all duration-1000 translate-x-[-10px] group-hover/header:translate-x-0">
            <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-[0.5em] text-zinc-400">Analysis buffer ready for input signal synchronization</span>
          </div>
        </div>
      </div>

      {/* Main Submission Form */}
      <form onSubmit={handleSubmit} className="space-y-12 bg-zinc-950/40 border border-white/5 p-14 rounded-[5rem] glass-box relative overflow-hidden group/form shadow-[0_0_100px_-20px_rgba(0,0,0,1)]">
        <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none group-focus-within/form:opacity-[0.1] transition-opacity duration-1000">
          <Binary className="w-96 h-96 text-emerald-500" />
        </div>
        <div className="absolute bottom-0 left-0 p-16 opacity-[0.02] pointer-events-none group-focus-within/form:opacity-[0.1] transition-opacity duration-1000">
          <Cpu className="w-96 h-96 text-blue-500" />
        </div>

        {/* Dynamic Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
           {/* Project Name */}
           <div className="space-y-5 group/input-box cursor-default">
            <label className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-600 ml-4 group-hover/input-box:text-emerald-400 group-focus-within/input-box:text-emerald-400 transition-all duration-500 glow-text-white">Project_Descriptor</label>
            <div className="relative group/field">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. HyperGrid Protocol"
                className="w-full bg-zinc-950/90 border-2 border-white/5 rounded-[2.75rem] px-10 py-8 text-2xl text-white focus:outline-none focus:border-emerald-500/60 transition-all duration-500 placeholder:text-zinc-800 font-bold shadow-2xl group-hover/input-box:shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)] group-hover/input-box:border-emerald-500/30 group-focus-within/input-box:shadow-[0_0_60px_-5px_rgba(16,185,129,0.4)]"
              />
              <div className="absolute right-10 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-zinc-900 border border-white/5 group-focus-within/field:bg-emerald-500 group-focus-within/field:text-black transition-all shadow-xl">
                <FileText className="w-6 h-6 opacity-40 group-focus-within/field:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Neural Stack */}
          <div className="space-y-5 group/input-box cursor-default">
            <label className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-600 ml-4 group-hover/input-box:text-blue-400 group-focus-within/input-box:text-blue-400 transition-all duration-500 glow-text-white">Neural_Stack</label>
            <div className="relative group/field">
              <input
                required
                type="text"
                value={tools}
                onChange={(e) => setTools(e.target.value)}
                placeholder="e.g. Next.js, Rust, AWS"
                className="w-full bg-zinc-950/90 border-2 border-white/5 rounded-[2.75rem] px-10 py-8 text-2xl text-white focus:outline-none focus:border-blue-500/60 transition-all duration-500 placeholder:text-zinc-800 font-bold shadow-2xl group-hover/input-box:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] group-hover/input-box:border-blue-500/30 group-focus-within/input-box:shadow-[0_0_60px_-5px_rgba(59,130,246,0.4)]"
              />
              <div className="absolute right-10 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-zinc-900 border border-white/5 group-focus-within/field:bg-blue-500 group-focus-within/field:text-black transition-all shadow-xl">
                <Cpu className="w-6 h-6 opacity-40 group-focus-within/field:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Pitch */}
        <div className="space-y-5 group/input-box relative z-10 cursor-default">
          <label className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-600 ml-4 group-hover/input-box:text-white group-focus-within/input-box:text-white transition-all duration-500 glow-text-white">Technical_Pitch_Module</label>
          <div className="relative">
            <textarea
              required
              rows={7}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deep-dive into the architecture, user flow, and the critical problem this protocol solves."
              className="w-full bg-zinc-950/90 border-2 border-white/5 rounded-[4rem] px-12 py-12 text-xl text-white focus:outline-none focus:border-white/30 transition-all duration-500 placeholder:text-zinc-800 resize-none font-medium leading-relaxed shadow-2xl group-hover/input-box:shadow-[0_0_70px_-20px_rgba(255,255,255,0.15)] group-hover/input-box:border-white/20 group-focus-within/input-box:shadow-[0_0_100px_-10px_rgba(255,255,255,0.2)]"
            />
            <div className="absolute bottom-10 right-10 p-4 rounded-3xl bg-zinc-900 border border-white/5 group-focus-within/input-box:border-white/40 transition-all opacity-20 group-hover/input-box:opacity-100 shadow-2xl">
               <Binary className="w-8 h-8 text-zinc-400 group-hover/input-box:text-white" />
            </div>
          </div>
        </div>

        {/* Visual Telemetry */}
        <div className="space-y-5 group/input-box relative z-10 cursor-default">
          <label className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-600 ml-4 group-hover/input-box:text-emerald-400 transition-all duration-500 glow-text-white">Evidence_Visuals</label>
          <div className="relative group/upload-container">
            {!media ? (
              <label className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-white/10 rounded-[4.5rem] bg-zinc-950/40 backdrop-blur-md cursor-pointer hover:bg-zinc-900/60 hover:border-emerald-500/50 transition-all duration-700 group/upload shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/upload:opacity-100 transition-opacity duration-1000" />
                <div className="flex flex-col items-center justify-center p-14 text-center relative z-10">
                  <div className="w-28 h-28 rounded-[2.5rem] bg-zinc-900 border border-white/10 flex items-center justify-center mb-10 group-hover/upload:scale-110 group-hover/upload:bg-emerald-500 group-hover/upload:text-black transition-all duration-500 group-hover/upload:shadow-[0_0_60px_emerald]">
                    <Upload className="w-12 h-12 transition-transform" />
                  </div>
                  <p className="text-3xl text-zinc-400 font-black group-hover/upload:text-white transition-all duration-500 glow-text-white uppercase tracking-widest">Establish Telemetry Link</p>
                  <p className="text-[12px] text-zinc-700 mt-5 uppercase tracking-[0.7em] font-black group-hover/upload:text-emerald-600 transition-colors">PNG / JPG / MP4 • MAX 50MB</p>
                </div>
                <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileChange} />
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover/upload:opacity-100 animate-[scan-project_4s_linear_infinite]" />
              </label>
            ) : (
              <div className="relative h-[550px] w-full bg-black rounded-[4.5rem] border-2 border-white/10 overflow-hidden group/preview shadow-[0_0_120px_-30px_rgba(0,0,0,1)] group-hover/upload-container:border-emerald-500/40 transition-all duration-700">
                {mediaType?.startsWith('video') ? (
                  <video src={media} className="w-full h-full object-contain" controls />
                ) : (
                  <img src={media} alt="Preview" className="w-full h-full object-contain" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-700" />
                <button
                  type="button"
                  onClick={() => { setMedia(null); setMediaType(null); }}
                  className="absolute top-12 right-12 p-6 bg-black/60 backdrop-blur-2xl rounded-full text-white hover:bg-red-500 transition-all opacity-0 group-hover/preview:opacity-100 shadow-3xl translate-y-6 group-hover/preview:translate-y-0 duration-500 border border-white/10"
                >
                  <X className="w-10 h-10" />
                </button>
                <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-0 group-hover/preview:opacity-100 transition-all duration-700 translate-y-6 group-hover/preview:translate-y-0">
                  <div className="p-4 bg-emerald-500 rounded-3xl text-black shadow-[0_0_30px_emerald]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-black uppercase tracking-[0.3em] text-lg glow-text-white">Captured Telemetry</span>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Handshake Verified v2.1</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Final Audit Button */}
        <div className="relative group/btn-wrap pt-14">
          <div className="absolute -inset-10 bg-gradient-to-r from-emerald-600 via-white to-blue-500 rounded-[4rem] blur-[60px] opacity-0 group-hover/btn-wrap:opacity-50 transition-opacity duration-1000 animate-pulse" />
          
          <button
            type="submit"
            disabled={isLoading || !name || !description}
            className={`group/btn relative w-full overflow-hidden flex items-center justify-center gap-10 py-14 rounded-[4.5rem] font-black uppercase tracking-[0.7em] text-3xl transition-all duration-700 shadow-4xl ${
              isLoading 
                ? 'bg-zinc-900 text-zinc-600 cursor-not-allowed border-2 border-white/10' 
                : 'bg-white text-black hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_100px_rgba(52,211,153,0.7)] active:scale-[0.96]'
            }`}
          >
            {isLoading ? (
              <>
                <Terminal className="w-12 h-12 animate-spin" />
                Auditing Data...
              </>
            ) : (
              <>
                Execute Neural Audit
                <ArrowRight className="w-12 h-12 group-hover:translate-x-6 transition-transform duration-700" />
              </>
            )}
            <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover/btn:animate-[shimmer-edge_1.5s_infinite] pointer-events-none" />
          </button>
        </div>
      </form>

      {/* Extreme Ambiance Glows */}
      <div className="fixed -bottom-[300px] -left-[300px] w-[1000px] h-[1000px] bg-emerald-500/10 blur-[350px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="fixed top-1/2 -right-[300px] w-[1000px] h-[1000px] bg-blue-500/10 blur-[350px] rounded-full pointer-events-none -z-10 animate-pulse" />

      <style>{`
        @keyframes scan-project {
          0% { transform: translateY(0); }
          100% { transform: translateY(320px); }
        }
        @keyframes shimmer-edge {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ProjectInput;
