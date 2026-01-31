
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { AlertCircle, CheckCircle2, Trophy, Hammer, RefreshCcw, Layout, Zap, ChevronLeft, Sparkles } from 'lucide-react';
import { EvaluationResult } from '../types';

interface EvaluationDisplayProps {
  result: EvaluationResult;
  onReset: () => void;
}

const EvaluationDisplay: React.FC<EvaluationDisplayProps> = ({ result, onReset }) => {
  const chartData = result.criteria.map(c => ({
    subject: c.name,
    A: c.score,
    fullMark: 10,
  }));

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-emerald-500';
    if (score >= 6) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 space-y-20 animate-in fade-in duration-1000 inter">
      <button 
        onClick={onReset}
        className="flex items-center gap-6 text-zinc-500 hover:text-white transition-all group mb-12"
      >
        <div className="w-14 h-14 rounded-[1.75rem] bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] group-hover:scale-110">
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="text-base font-black uppercase tracking-[0.6em] text-zinc-600 group-hover:text-emerald-400 transition-colors glow-text-white select-none">
          Return_to_Hub
        </span>
      </button>

      {/* Header Scoring */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 bg-zinc-950/40 border-2 border-white/5 rounded-[3.5rem] p-12 flex flex-col justify-between shadow-3xl glass-box group/header-box hover:border-emerald-500/40 transition-all duration-700">
          <div className="space-y-6">
            <h2 className="text-[4rem] font-black text-white tracking-tighter leading-tight shimmer-title group-hover/header-box:drop-shadow-[0_0_30px_white] transition-all duration-700">{result.projectName}</h2>
            <div className="relative">
              <p className="text-zinc-400 leading-relaxed italic border-l-[6px] border-emerald-500 pl-8 text-2xl font-medium transition-colors group-hover/header-box:text-zinc-200">
                "{result.criticalSummary}"
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-8 group/rank cursor-default">
             <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover/rank:bg-emerald-500 group-hover/rank:text-black transition-all duration-500 group-hover/rank:shadow-[0_0_20px_emerald] group-hover/rank:scale-110">
                <Trophy className="w-8 h-8" />
             </div>
             <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase text-zinc-600 tracking-[0.5em] group-hover/rank:text-emerald-400 transition-colors">Global Ranking Prediction</span>
                <span className="text-3xl font-black text-emerald-400 tracking-tight glow-text-emerald transition-all duration-500">{result.judgeRankingPrediction}</span>
             </div>
          </div>
        </div>

        <div className="bg-zinc-950 border-2 border-white/5 rounded-[3.5rem] p-12 flex flex-col items-center justify-center text-center shadow-[0_0_100px_-20px_rgba(0,0,0,1)] relative overflow-hidden group/score-box hover:border-emerald-500/40 transition-all duration-700">
          <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full opacity-0 group-hover/score-box:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <svg className="w-56 h-56 transform -rotate-90">
              <circle
                className="text-zinc-900"
                strokeWidth="14"
                stroke="currentColor"
                fill="transparent"
                r="100"
                cx="112"
                cy="112"
              />
              <circle
                className="text-emerald-500 transition-all duration-1000 ease-out group-hover/score-box:drop-shadow-[0_0_25px_emerald]"
                strokeWidth="14"
                strokeDasharray={628.3}
                strokeDashoffset={628.3 - (628.3 * result.overallScore) / 10}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="100"
                cx="112"
                cy="112"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-7xl font-black text-white glow-text-white transition-all duration-700 group-hover/score-box:scale-110">{result.overallScore}</span>
              <span className="text-[11px] font-black text-zinc-600 uppercase tracking-widest mt-2 group-hover/score-box:text-emerald-400 transition-colors">Grade / 10</span>
            </div>
          </div>
          <p className="mt-10 text-[12px] font-black uppercase tracking-[0.6em] text-zinc-500 group-hover/score-box:text-white transition-colors">Neural Final Audit</p>
        </div>
      </div>

      {/* Radar Chart & Criteria Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="bg-zinc-950 border-2 border-white/5 rounded-[4rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden shadow-3xl group/chart hover:border-emerald-500/30 transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none opacity-0 group-hover/chart:opacity-100 transition-opacity duration-1000" />
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
              <PolarGrid stroke="#222" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 13, fontWeight: 'bold' }} />
              <PolarRadiusAxis angle={30} domain={[0, 10]} axisLine={false} tick={false} />
              <Radar
                name="Score"
                dataKey="A"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-8">
          <h3 className="text-4xl font-black text-white flex items-center gap-6 uppercase tracking-tighter italic shimmer-title select-none">
            <Hammer className="w-10 h-10 text-emerald-400 group-hover:rotate-12 transition-transform duration-500" />
            Vulnerability Audit
          </h3>
          {result.criteria.map((item, idx) => (
            <div key={idx} className="group/item bg-zinc-900/40 border-2 border-white/5 p-10 rounded-[3rem] space-y-5 hover:border-emerald-500/50 hover:bg-white/5 transition-all duration-700 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-zinc-950 border border-white/10 rounded-2xl group-hover/item:bg-emerald-500 group-hover/item:text-black transition-all duration-500 group-hover/item:shadow-[0_0_15px_emerald]">
                    {item.name === 'Clarity' && <Layout className="w-6 h-6" />}
                    {item.name === 'Originality' && <Zap className="w-6 h-6" />}
                    {item.name === 'Feasibility' && <Hammer className="w-6 h-6" />}
                  </div>
                  <span className="font-black text-[14px] uppercase tracking-[0.4em] text-zinc-500 group-hover/item:text-white transition-colors">{item.name}</span>
                </div>
                <span className={`text-4xl font-black transition-all duration-700 group-hover/item:scale-125 group-hover/item:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${getScoreColor(item.score)}`}>{item.score}</span>
              </div>
              <p className="text-[17px] text-zinc-500 leading-relaxed font-medium group-hover/item:text-zinc-200 transition-colors duration-500 relative z-10 select-none">{item.justification}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10 group/list">
          <h4 className="text-[13px] font-black uppercase tracking-[0.6em] text-emerald-500 flex items-center gap-5 glow-text-emerald transition-all">
            <CheckCircle2 className="w-7 h-7" />
            Competitive Differentiators
          </h4>
          <ul className="space-y-6">
            {result.strengths.map((s, i) => (
              <li key={i} className="text-zinc-400 text-[16px] flex gap-6 p-8 bg-emerald-500/5 border-2 border-emerald-500/10 rounded-[3rem] leading-relaxed shadow-xl group/li hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-700 cursor-default select-none">
                <span className="text-emerald-500 font-black text-xl group-hover/li:scale-150 group-hover/li:glow-text-emerald transition-all duration-500">0{i+1}</span>
                <span className="group-hover/li:text-white group-hover/li:glow-text-white transition-colors duration-500">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-10 group/list">
          <h4 className="text-[13px] font-black uppercase tracking-[0.6em] text-red-500 flex items-center gap-5 glow-text-white transition-all">
            <AlertCircle className="w-7 h-7" />
            Terminal Vulnerabilities
          </h4>
          <ul className="space-y-6">
            {result.weaknesses.map((w, i) => (
              <li key={i} className="text-zinc-400 text-[16px] flex gap-6 p-8 bg-red-500/5 border-2 border-red-500/10 rounded-[3rem] leading-relaxed shadow-xl group/li hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-700 cursor-default select-none">
                <span className="text-red-500 font-black text-xl group-hover/li:scale-150 group-hover/li:glow-text-white transition-all duration-500">!</span>
                <span className="group-hover/li:text-white group-hover/li:glow-text-white transition-colors duration-500">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suggested Improvements with high glow */}
      <div className="space-y-10">
        <h4 className="text-[13px] font-black uppercase tracking-[0.6em] text-blue-400 flex items-center gap-5 shimmer-title">
          <Sparkles className="w-7 h-7" />
          Neural Refinement Protocol
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {result.suggestedImprovements.map((imp, idx) => (
            <div key={idx} className="p-8 bg-blue-500/5 border-2 border-blue-500/10 rounded-[2.5rem] group/imp hover:border-blue-500/50 transition-all duration-700 hover:bg-blue-500/10 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 flex items-center justify-center mb-6 border border-white/5 group-hover/imp:bg-blue-500 group-hover/imp:text-black group-hover/imp:shadow-[0_0_20px_blue] transition-all">
                <Zap className="w-5 h-5" />
              </div>
              <p className="text-zinc-400 font-medium leading-relaxed group-hover:text-white group-hover:glow-text-white transition-colors duration-500">{imp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Action */}
      <div className="flex justify-center pt-24 pb-12">
        <div className="relative group/reset-btn">
          <div className="absolute -inset-6 bg-gradient-to-r from-emerald-600 via-white to-blue-500 rounded-[3rem] blur-3xl opacity-0 group-hover/reset-btn:opacity-40 transition-opacity duration-1000 animate-pulse" />
          
          <button
            onClick={onReset}
            className="group relative flex items-center gap-6 px-16 py-8 bg-white text-black font-black rounded-[3rem] transition-all duration-700 uppercase tracking-[0.4em] text-base hover:bg-emerald-400 hover:shadow-[0_0_80px_rgba(52,211,153,0.7)] active:scale-95 shadow-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            <RefreshCcw className="w-7 h-7 group-hover:rotate-180 transition-transform duration-1000 relative z-10" />
            <span className="relative z-10">Initialize New Audit Cycle</span>
          </button>
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed -bottom-64 -left-64 w-[900px] h-[900px] bg-emerald-600/10 blur-[250px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="fixed top-1/2 -right-64 w-[900px] h-[900px] bg-blue-600/10 blur-[250px] rounded-full pointer-events-none -z-10 animate-pulse" />
    </div>
  );
};

export default EvaluationDisplay;
