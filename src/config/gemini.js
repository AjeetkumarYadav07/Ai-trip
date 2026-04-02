import { GoogleGenerativeAI } from "@google/generative-ai";

const MODEL_NAME = "gemini-3.1-flash-lite-preview";
const API_KEY = process.env.VITE_GOOGLE_GEMINI_AI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: MODEL_NAME });

const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
  responseMimeType: "application/json", // ✅ fixed typo from "apllication"
};

const chatSession = model.startChat({
  generationConfig,
  history: [],
});

export default chatSession;
