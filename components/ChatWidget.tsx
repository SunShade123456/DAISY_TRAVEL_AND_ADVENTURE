import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, MapPin, Sparkles, Mountain } from 'lucide-react';
import { sendMessageToGemini, ChatMessage } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
<<<<<<< HEAD
    { role: 'model', text: 'Namaste! 🙏 I am your Daisy Travel Assistant. Ask me about trekking routes, our expert guides, best times to visit, or our packages!' }
=======
    { role: 'model', text: 'Namaste! 🙏 Welcome to Daisy Travel & Adventure. How can I help you plan your Himalayan journey today?' }
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

<<<<<<< HEAD
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
=======
    try {
      const response = await sendMessageToGemini(messages, inputValue);
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
<<<<<<< HEAD
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
=======
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-gray-100 pointer-events-auto flex flex-col max-h-[600px] transition-all duration-300 ease-in-out transform origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-accent-500 p-1.5 rounded-full">
                <Mountain size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold font-serif">Daisy Assistant</h3>
                <p className="text-xs text-brand-200 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 min-h-[300px] max-h-[400px]">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  
                  {/* Grounding / Source Chips (for Maps) */}
                  {msg.groundingMetadata?.groundingChunks && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {msg.groundingMetadata.groundingChunks.map((chunk: any, i: number) => {
                         if (chunk.web?.uri) {
                           return (
                             <a 
                               key={i} 
                               href={chunk.web.uri} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded hover:bg-blue-100"
                             >
                               <Sparkles size={10} /> {chunk.web.title || 'Source'}
                             </a>
                           );
                         }
                         return null;
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
<<<<<<< HEAD
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-200 p-3 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
=======
               <div className="flex justify-start">
                 <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-3 shadow-sm">
                   <div className="flex space-x-1">
                     <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                     <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                     <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                 </div>
               </div>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
            )}
            <div ref={messagesEndRef} />
          </div>

<<<<<<< HEAD
          {/* Input */}
          <div className="p-3 bg-white border-t border-neutral-100">
            <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2">
=======
          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
<<<<<<< HEAD
                placeholder="Ask about trips, guides, or maps..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-neutral-700 placeholder-neutral-400"
=======
                placeholder="Ask about treks..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                disabled={isLoading}
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
              />
              <button
                onClick={handleSend}
<<<<<<< HEAD
                disabled={isLoading || !inputValue.trim()}
                className={`p-2 rounded-full transition-all ${inputValue.trim() ? 'bg-brand-500 text-white hover:bg-brand-600' : 'text-neutral-400'}`}
=======
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
              >
                <Send size={16} />
              </button>
            </div>
<<<<<<< HEAD
            <div className="text-[10px] text-center text-neutral-400 mt-2">
              AI can make mistakes. Check important info.
=======
            <div className="mt-2 flex justify-center">
              <span className="text-[10px] text-gray-400 flex items-center gap-1">
                <Sparkles size={10} /> Powered by Gemini
              </span>
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button - Orange gradient */}
      <button
        onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
        className="bg-brand-gradient hover:shadow-xl hover:shadow-brand-500/30 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center"
=======
        className={`pointer-events-auto p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-gray-200 text-gray-600 rotate-90' : 'bg-gradient-to-r from-brand-600 to-brand-800 text-white'
        }`}
>>>>>>> e0a0ddfca7e0bcfce586b25d937bd8b29e285cc2
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} fill="currentColor" />}
      </button>
    </div>
  );
};

export default ChatWidget;
