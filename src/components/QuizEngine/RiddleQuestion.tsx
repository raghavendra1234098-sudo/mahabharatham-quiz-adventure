import React, { useState } from 'react';
import { RiddleQuestion as RiddleType } from '../../types/game';
import { HelpCircle, Sparkles, Lightbulb } from 'lucide-react';

interface RiddleProps {
  question: RiddleType;
  selectedOption: string | null;
  isAnswered: boolean;
  onSelectOption: (ans: string) => void;
}

export const RiddleQuestion: React.FC<RiddleProps> = ({
  question,
  selectedOption,
  isAnswered,
  onSelectOption,
}) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="w-full space-y-4">
      {/* Mystical Riddle Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/70 via-purple-950/50 to-slate-900 border border-purple-500/30 shadow-xl space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-purple-300 text-xs font-royal font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Mahabharata Riddle • यक्ष प्रश्न रहस्य</span>
          </div>

          {!isAnswered && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 text-purple-300 text-[11px] font-semibold flex items-center space-x-1 transition-colors"
            >
              <Lightbulb className="w-3 h-3 text-yellow-400" />
              <span>{showHint ? 'Hide Clue' : 'Reveal Clue'}</span>
            </button>
          )}
        </div>

        <p className="text-base md:text-lg font-serif italic text-purple-100 leading-relaxed text-center py-2">
          "{question.prompt}"
        </p>

        {showHint && !isAnswered && (
          <div className="p-2.5 rounded-xl bg-yellow-950/30 border border-yellow-500/30 text-xs text-yellow-200/90 font-serif text-center animate-fadeIn">
            💡 Clue: {question.hint}
          </div>
        )}
      </div>

      {/* 4 Options to choose from */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        {question.options.map((opt, idx) => {
          let btnStyle = 'bg-[#121a32]/90 border-slate-700 text-slate-200 hover:border-amber-400 hover:bg-[#182344]';

          if (isAnswered) {
            if (opt.toLowerCase().trim() === question.answer.toLowerCase().trim()) {
              btnStyle = 'bg-emerald-900/80 border-emerald-400 text-white shadow-[0_0_15px_rgba(52,211,153,0.4)]';
            } else if (opt === selectedOption) {
              btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
            } else {
              btnStyle = 'bg-[#0e1426]/50 border-slate-800 text-slate-500 opacity-60';
            }
          } else if (selectedOption === opt) {
            btnStyle = 'bg-amber-500/20 border-amber-400 text-amber-200';
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => onSelectOption(opt)}
              className={`p-4 rounded-xl border text-center font-royal font-bold text-sm md:text-base transition-all duration-200 ${btnStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};
