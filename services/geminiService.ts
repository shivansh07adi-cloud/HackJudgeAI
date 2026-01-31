
import { GoogleGenAI, Type } from "@google/genai";
import { JUDGING_SYSTEM_INSTRUCTION } from "../constants";
import { EvaluationResult, ProjectSubmission } from "../types";

// Fixed: Correctly initialize GoogleGenAI with named apiKey parameter as per guidelines.
// Always retrieve the API key from process.env.API_KEY.
export const evaluateProject = async (project: ProjectSubmission): Promise<EvaluationResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    Evaluate the following hackathon project:
    Project Name: ${project.name}
    Tech Stack: ${project.tools}
    Project Description: ${project.description}
    ${project.media ? "An image/video frame of the project is provided." : ""}
  `;

  // Define image part if media is present
  const imagePart = project.media ? {
    inlineData: {
      mimeType: project.mediaType || "image/png",
      data: project.media.split(',')[1]
    }
  } : null;

  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: imagePart 
      ? { parts: [imagePart, { text: prompt }] } 
      : { parts: [{ text: prompt }] },
    config: {
      systemInstruction: JUDGING_SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          projectName: { type: Type.STRING },
          overallScore: { type: Type.NUMBER },
          criteria: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                score: { type: Type.NUMBER },
                justification: { type: Type.STRING }
              },
              required: ["name", "score", "justification"]
            }
          },
          strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
          weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
          judgeRankingPrediction: { type: Type.STRING },
          suggestedImprovements: { type: Type.ARRAY, items: { type: Type.STRING } },
          criticalSummary: { type: Type.STRING }
        },
        required: [
          "projectName", "overallScore", "criteria", "strengths", 
          "weaknesses", "judgeRankingPrediction", "suggestedImprovements", "criticalSummary"
        ]
      }
    }
  });

  // Fixed: Use response.text property directly as per latest SDK rules.
  return JSON.parse(response.text || "{}");
};

export const generateHackathonIdea = async (skills: string, theme: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: {
      parts: [{
        text: `Act as a senior technical hackathon mentor. Generate one high-impact, original project idea based on:
          Skills: ${skills}
          Theme/Industry: ${theme}
          
          Format the output in Markdown with:
          1. Project Title
          2. The "Why" (Market gap)
          3. MVP Features (3 core features)
          4. Suggested Tech Stack
          5. "Judge's Tip" (How to make it stand out)`
      }]
    },
    config: {
      temperature: 0.8,
    }
  });

  // Fixed: Use response.text property directly.
  return response.text || "Failed to generate idea. Please try again.";
};
