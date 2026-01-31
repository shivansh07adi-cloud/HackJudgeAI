
import React, { useState, useEffect } from 'react';
import { Power, ShieldX } from 'lucide-react';
import Header from './components/Header';
import ProjectInput from './components/ProjectInput';
import EvaluationDisplay from './components/EvaluationDisplay';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Guidebook from './components/Guidebook';
import IdeaGenerator from './components/IdeaGenerator';
import HackathonList from './components/HackathonList';
import { evaluateProject } from './services/geminiService';
import { EvaluationResult, ProjectSubmission, ViewState } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('hackjudge_session');
    if (session) setIsAuthenticated(true);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('hackjudge_session', 'true');
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('hackjudge_session');
    setEvaluation(null);
    setCurrentView('dashboard');
  };

  const handleSubmit = async (project: ProjectSubmission) => {
    setLoading(true);
    setError(null);
    try {
      const result = await evaluateProject(project);
      setEvaluation(result);
      setCurrentView('evaluation');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'The evaluation protocol failed. Ensure your API key is valid and try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetAudit = () => {
    setEvaluation(null);
    setError(null);
    setCurrentView('dashboard');
  };

  const renderView = () => {
    if (loading) return <Loader />;
    
    if (error) return (
      <div className="max-w-2xl mx-auto mt-20 p-10 bg-red-950/20 border border-red-900/50 rounded-[2.5rem] text-center relative z-20">
        <h3 className="text-red-500 text-2xl font-black mb-4 uppercase tracking-tighter">Protocol Failure</h3>
        <p className="text-zinc-400 mb-8">{error}</p>
        <button 
          onClick={() => setError(null)}
          className="px-8 py-3 bg-white text-black font-black rounded-xl hover:bg-zinc-200 transition-colors uppercase text-xs tracking-widest"
        >
          Re-initialize Session
        </button>
      </div>
    );

    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={(view) => setCurrentView(view)} />;
      case 'guidebook':
        return <Guidebook onBack={() => setCurrentView('dashboard')} />;
      case 'idea-gen':
        return <IdeaGenerator onBack={() => setCurrentView('dashboard')} />;
      case 'hackathon-list':
        return <HackathonList onBack={() => setCurrentView('dashboard')} />;
      case 'audit':
        return <ProjectInput onSubmit={handleSubmit} isLoading={loading} onBack={() => setCurrentView('dashboard')} />;
      case 'evaluation':
        return evaluation ? <EvaluationDisplay result={evaluation} onReset={resetAudit} /> : <Dashboard onNavigate={setCurrentView} />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-zinc-200 relative overflow-x-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow flex flex-col">
          {!isAuthenticated ? (
            <LoginPage onLogin={handleLogin} />
          ) : (
            <div className="flex-grow flex flex-col">
              {/* Toolbar for Authenticated Users */}
              {currentView === 'dashboard' && (
                <div className="max-w-7xl mx-auto w-full px-6 pt-8 flex justify-end">
                   <button 
                    onClick={handleLogout}
                    className="group relative flex items-center gap-3 px-6 py-2.5 bg-black border border-red-900/30 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-red-500/60 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300 shadow-[0_0_10px_rgba(153,27,27,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                  >
                    <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
                    <Power className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span className="relative z-10">Kill Session Protocol</span>
                    <ShieldX className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                  </button>
                </div>
              )}
              
              {renderView()}
            </div>
          )}
        </main>

        <footer className="py-8 border-t border-zinc-900/50 text-center bg-black/40 backdrop-blur-md">
          <p className="text-[10px] text-zinc-700 uppercase tracking-widest font-bold hover:text-white transition-colors cursor-default">
            Powered by Pika Elite (AI Website Company) • For Internal Use Only • Unbiased Judging Protocol
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
