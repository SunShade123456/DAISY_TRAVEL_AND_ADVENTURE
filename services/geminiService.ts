import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey });

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  groundingMetadata?: any;
}

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<ChatMessage> => {
  if (!apiKey) {
    return {
      role: 'model',
      text: "I'm sorry, I can't connect to the server right now. (Missing API Key)",
    };
  }

  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `You are a helpful, enthusiastic travel assistant for "Daisy Travel & Adventure". 
        You help users find tour packages in Nepal, give travel advice (trekking gear, altitude sickness tips), and suggest products from our shop.
        Our brand is professional, adventurous, and reliable. We are based in Nepal. 
        Our logo features a sun rising over the mountains, symbolizing new beginnings and adventure.
        Be concise and friendly. Use emojis occasionally.`,
        tools: [{ googleMaps: {} }],
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    
    // Extract text
    const responseText = result.text || "I didn't catch that. Could you try asking again?";
    
    // Extract grounding metadata if available (for maps)
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
      text: "I'm having a little trouble connecting to the travel database right now. Please try again in a moment.",
    };
  }
};