import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, MapPin, Sparkles } from 'lucide-react';
import { sendMessageToGemini, ChatMessage } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! 🙏 I am your Daisy Travel Assistant. Ask me about trekking routes, our expert guides, best times to visit, or our packages!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const response = await sendMessageToGemini(messages, inputValue);

    setMessages(prev => [...prev, response]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  // Helper to render grounding chunks (Maps)
  const renderGrounding = (metadata: any) => {
    if (!metadata || !metadata.groundingChunks) return null;

    const chunks = metadata.groundingChunks.filter((c: any) => c.web?.uri || c.maps?.uri);

    if (chunks.length === 0) return null;

    return (
      <div className="mt-2 flex flex-wrap gap-2">
        {chunks.map((chunk: any, idx: number) => {
           const uri = chunk.web?.uri || chunk.maps?.uri;
           const title = chunk.web?.title || chunk.maps?.title || "View Map Location";

           if (!uri) return null;

           return (
             <a
               key={idx}
               href={uri}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center text-xs bg-brand-100 text-brand-700 px-2 py-1 rounded-full hover:bg-brand-200 transition-colors"
             >
               <MapPin size={12} className="mr-1" />
               {title}
             </a>
           );
        })}
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col h-[500px] transition-all duration-300">
          {/* Header - Orange gradient */}
          <div className="bg-brand-gradient p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Daisy Assistant</h3>
                <p className="text-xs text-white/70">Ask me anything</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-50 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-500 text-white rounded-br-sm'
                      : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-sm shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  {msg.role === 'model' && renderGrounding(msg.groundingMetadata)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-neutral-100">
            <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about trips, guides, or maps..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-neutral-700 placeholder-neutral-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className={`p-2 rounded-full transition-all ${inputValue.trim() ? 'bg-brand-500 text-white hover:bg-brand-600' : 'text-neutral-400'}`}
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-[10px] text-center text-neutral-400 mt-2">
              AI can make mistakes. Check important info.
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button - Orange gradient */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-gradient hover:shadow-xl hover:shadow-brand-500/30 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;
