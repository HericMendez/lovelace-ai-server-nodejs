import { TogetherAI } from '@langchain/community/llms/togetherai';
import dotenv from "dotenv";

dotenv.config();

export const TOGETHER_AI_API_KEY = process.env.TOGETHER_AI_API_KEY;
export const TOGETHER_AI_API_URL= process.env.TOGETHER_AI_API_URL
export const TOGETHER_AI_MODEL = process.env.TOGETHER_AI_MODEL;
export const TEMP = 0.7;
export const MAX_TOKENS = 250;

export const chatModel = new TogetherAI({
  apiKey: process.env.TOGETHER_AI_API_KEY,
  model: process.env.TOGETHER_AI_MODEL,
  temperature: 0.7
});
