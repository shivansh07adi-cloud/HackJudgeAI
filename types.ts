
export interface EvaluationCriteria {
  name: string;
  score: number;
  justification: string;
}

export interface EvaluationResult {
  projectName: string;
  overallScore: number;
  criteria: EvaluationCriteria[];
  strengths: string[];
  weaknesses: string[];
  judgeRankingPrediction: string;
  suggestedImprovements: string[];
  criticalSummary: string;
}

export interface ProjectSubmission {
  name: string;
  description: string;
  tools: string;
  media?: string; // base64
  mediaType?: string;
}

export type ViewState = 'dashboard' | 'audit' | 'guidebook' | 'idea-gen' | 'evaluation' | 'hackathon-list';

export interface HackathonUpdate {
  id: string;
  name: string;
  location: string;
  date: string;
  status: 'live' | 'upcoming';
  prizes: string;
  description?: string;
  link?: string;
}
