import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Bot, Send, X, Sparkles, User, Lightbulb } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AIGuideModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { progress, selectedLevel, levels } = useGame();
  const currentLvl = levels.find((l) => l.levelNumber === selectedLevel);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: `प्रणाम! I am Sage Vyasa, author of the Mahabharata. Welcome to your spiritual learning journey. You are currently on Level ${progress.currentLevel} of 50. How may I guide you through the ancient lore, characters, or riddles of Dharma?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const quickPrompts = [
    'Who was Arjuna’s teacher?',
    'What is the core message of the Bhagavad Gita?',
    'Why did Bhishma take his terrible vow?',
    `Give me a hint for Level ${progress.currentLevel}`,
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Answer generation using Mahabharata Knowledge base
    setTimeout(() => {
      let reply = '';
      const lower = query.toLowerCase();

      if (lower.includes('arjuna') && lower.includes('teacher')) {
        reply = 'Guru Dronacharya was the royal preceptor who instructed Arjuna and the Kuru princes in archery and warfare at Hastinapur.';
      } else if (lower.includes('gita') || lower.includes('bhagavad')) {
        reply = 'The central teaching of the Bhagavad Gita is Nishkama Karma: perform your righteous duty (Swadharma) selflessly without being attached to the fruits of your actions ("Karmanye Vadhikaraste Ma Phaleshu Kadachana").';
      } else if (lower.includes('bhishma') && lower.includes('vow')) {
        reply = 'Devavrata took his fierce vow of lifelong celibacy and renounced the throne so his father King Shantanu could marry Satyavati, earning the divine name Bhishma.';
      } else if (lower.includes('hint') || lower.includes('level')) {
        if (currentLvl) {
          reply = `Here is divine wisdom for Level ${currentLvl.levelNumber} ("${currentLvl.title}"): Remember the teachings of Part ${currentLvl.partNumber} and read the questions calmly. Look into the reflections of truth!`;
        } else {
          reply = 'Trust in your knowledge of Dharma, and pay close attention to each riddle’s subtle hints!';
        }
      } else if (lower.includes('karna')) {
        reply = 'Karna was the son of Surya and Kunti, raised by Adhiratha and Radha. He was celebrated for his limitless charity (Danaveerata) and unmatched loyalty to his friend Duryodhana.';
      } else if (lower.includes('draupadi')) {
        reply = 'Queen Draupadi was born from the sacred sacrificial altar of King Drupada of Panchala. Her unwavering devotion to Lord Krishna saved her honor in the Kuru assembly.';
      } else if (lower.includes('dharma')) {
        reply = '"Yato Dharmas Tato Jayah" — Where there is Dharma, there is Victory! Dharma is the cosmic principle of righteousness, duty, and truth that sustains the universe.';
      } else {
        reply = `Knowledgeable seeker, every episode of the Mahabharata holds profound moral guidance. Continue your quiz adventure, unlock the 10 character wallpapers, and you shall soon attain the status of a Mahabharata Scholar!`;
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-gradient-to-b from-[#101730] to-[#0a0f20] border-2 border-amber-500/50 rounded-3xl shadow-2xl flex flex-col h-[600px] max-h-[90vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-amber-500/30 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-xl shadow-[0_0_12px_rgba(245,158,11,0.4)]">
              🪷
            </div>
            <div>
              <h3 className="font-royal font-bold text-sm md:text-base text-amber-100 flex items-center gap-1.5">
                <span>Sage Vyasa AI Guide</span>
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
              </h3>
              <p className="text-[11px] text-amber-300/70 font-serif">
                Mahabharatham Lore & Quiz Companion
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                  m.sender === 'user'
                    ? 'bg-amber-600 text-white'
                    : 'bg-indigo-900 text-yellow-300 border border-amber-400/40'
                }`}
              >
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] p-3 rounded-2xl text-xs md:text-sm font-serif leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-amber-600 text-white rounded-tr-none'
                    : 'bg-[#152142] border border-amber-500/30 text-amber-100 rounded-tl-none'
                }`}
              >
                {m.text}
                <span className="block text-[9px] text-slate-400 text-right mt-1 font-sans">
                  {m.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Quick Prompts */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <Lightbulb className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-200 text-[11px] whitespace-nowrap transition-colors"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-amber-500/30 bg-slate-900/80 flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about Mahabharatham or a level hint..."
            className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs md:text-sm focus:outline-none focus:border-amber-400 font-medium"
          />
          <button
            onClick={() => handleSend()}
            className="p-2.5 rounded-xl bg-amber-500 hover:bg-yellow-400 text-slate-950 font-bold transition-colors shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
