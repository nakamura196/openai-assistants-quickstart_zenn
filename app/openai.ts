import { AzureOpenAI } from "openai";

export const openai = new AzureOpenAI({
  endpoint: process.env.OPENAI_ENDPOINT,
  apiKey: process.env.OPENAI_API_KEY,
  deployment: "gpt-4o",
  apiVersion: "2024-10-01-preview",
});
