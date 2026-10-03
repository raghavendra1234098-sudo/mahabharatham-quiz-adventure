import React from 'react';
import { TrueFalseQuestion as TFType } from '../../types/game';
import { Check, X } from 'lucide-react';

interface TFProps {
  question: TFType;
  selectedAnswer: boolean | null;
  isAnswered: boolean;
  onSelectAnswer: (ans: boolean) => void;
}

export const TrueFalse: React.FC<TFProps> = ({
  question,
  selectedAnswer,
  isAnswered,
  onSelectAnswer,
}) => {
  const getStyle = (val: boolean) => {
    if (!isAnswered) {
      if (selectedAnswer === val) {
        return 'bg-amber-500/20 border-amber-400 text-amber-200';
      }
      return 'bg-[#121a32]/90 border-slate-700 text-slate-200 hover:border-amber-400 hover:bg-[#182344]';
    }

    if (val === question.correctAnswer) {
      return 'bg-emerald-900/80 border-emerald-400 text-white shadow-[0_0_15px_rgba(52,211,153,0.4)]';
    }

    if (selectedAnswer === val) {
      return 'bg-rose-950/80 border-rose-500 text-rose-200';
    }

    return 'bg-[#0e1426]/50 border-slate-800 text-slate-500 opacity-60';
  };

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <button
        disabled={isAnswered}
        onClick={() => onSelectAnswer(true)}
        className={`p-6 rounded-2xl border flex flex-col items-center justify-center space-y-2 font-royal font-bold text-lg md:text-xl transition-all ${getStyle(true)}`}
      >
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
          <Check className="w-6 h-6 text-emerald-400" />
        </div>
        <span>TRUE / सत्यम्</span>
      </button>

      <button
        disabled={isAnswered}
        onClick={() => onSelectAnswer(false)}
        className={`p-6 rounded-2xl border flex flex-col items-center justify-center space-y-2 font-royal font-bold text-lg md:text-xl transition-all ${getStyle(false)}`}
      >
        <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center">
          <X className="w-6 h-6 text-rose-400" />
        </div>
        <span>FALSE / असत्यम्</span>
      </button>
    </div>
  );
};
