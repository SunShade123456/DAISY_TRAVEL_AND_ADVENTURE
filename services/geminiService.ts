import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

// Lazy initialization - only create client when actually needed
let ai: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI | null => {
  if (!apiKey) return null;
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  groundingMetadata?: any;
}

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<ChatMessage> => {
  const client = getAiClient();

  if (!client) {
    return {
      role: 'model',
      text: "I'm sorry, the AI assistant is currently unavailable. Please contact us directly for travel inquiries! 📧",
    };
  }

  try {
    const model = 'gemini-2.5-flash';

    const chat = client.chats.create({
      model: model,
      config: {
        systemInstruction: `You are a helpful, enthusiastic travel assistant for "Daisy Travel & Adventure".
        You help users find tour packages in Nepal, connect them with our expert local guides (Sabal for Everest Region treks, Cherub for Langtang & Manaslu Region, Gaurav for Annapurna Region, Divya for Langtang & Dhaulagiri, Sumina for PanchPokhari), give travel advice, and suggest gear from our shop.
        Be concise and friendly. Use emojis occasionally.`,
        tools: [{ googleMaps: {} }],
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });

    const responseText = result.text || "I didn't catch that. Could you try asking again?";
    const groundingMetadata = result.candidates?.[0]?.groundingMetadata;

    return {
      role: 'model',
      text: responseText,
      groundingMetadata
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      role: 'model',
      text: "I'm having a little trouble connecting right now. Please try again in a moment.",
    };
  }
};