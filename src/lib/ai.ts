import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface SafetyResult {
  score: number;
  threatLevel: "Low" | "Medium" | "High" | "Critical";
  vulnerabilities: string[];
  mitigation: string;
}

export interface PromptMutation {
  original: string;
  mutated: string;
  strategy: string;
  successProbability: number;
}

export interface ThinkingStep {
  id: string;
  status: "thinking" | "completed" | "analyzing" | "ready";
  content: string;
  timestamp: string;
}
