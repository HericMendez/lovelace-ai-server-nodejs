import { TogetherAI } from '@langchain/community/llms/togetherai';
import dotenv from "dotenv";

dotenv.config();

export const TOGETHER_AI_API_KEY =
  "eea5c1bb98c851b2bfa31bb8830252eca75ca7d957581c0d662be6989bbd00bc";
//this api key is only here for testing purposes, i will store it somewhere else later
export const TOGETHER_AI_API_URL = "https://api.together.xyz/v1/completions";
export const TOGETHER_AI_MODEL = "deepseek-ai/DeepSeek-V3"; //this is the least buggy model i found
export const TEMP = 0.7; //this value control the randomness level of the AI's responses
export const MAX_TOKENS = 250;
export const AI_MODEL_INSTRUCTIONS =
  "Apresente-se como Ada, você será minha tutora de matemática, e responderá apenas a perguntas de matemática. Perguntas não relacionadas com matemática devem receber uma devolutiva negativa. Responda apenas em português do Brasil.";

export const chatModel = new TogetherAI({
  apiKey: process.env.TOGETHER_AI_API_KEY,
  model: process.env.TOGETHER_AI_MODEL,
  temperature: TEMP,
});
