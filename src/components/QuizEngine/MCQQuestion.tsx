import React from 'react';
import { MCQQuestion as MCQType } from '../../types/game';

interface MCQProps {
  question: MCQType;
  selectedOption: number | null;
  isAnswered: boolean;
  onSelectOption: (index: number) => void;
}

export const MCQQuestion: React.FC<MCQProps> = ({
  question,
  selectedOption,
  isAnswered,
  onSelectOption,
}) => {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full space-y-4">
      {/* Optional Image for Image-Based Questions */}
      {question.type === 'image_guess' && question.imageUrl && (
        <div className="w-full max-w-sm mx-auto mb-4 p-2 rounded-2xl bg-amber-950/30 border border-amber-500/30 overflow-hidden shadow-lg">
          <img
            src={question.imageUrl}
            alt={question.imageAlt || 'Mahabharatham image'}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
      )}

      {/* 4 Multi-Choice Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((opt, idx) => {
          let btnStyle = 'bg-[#121a32]/90 border-slate-700 text-slate-200 hover:border-amber-400/80 hover:bg-[#182344]';

          if (isAnswered) {
            if (idx === question.correctIndex) {
              btnStyle = 'bg-emerald-900/80 border-emerald-400 text-white shadow-[0_0_15px_rgba(52,211,153,0.4)]';
            } else if (idx === selectedOption) {
              btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
            } else {
              btnStyle = 'bg-[#0e1426]/50 border-slate-800 text-slate-500 opacity-60';
            }
          } else if (selectedOption === idx) {
            btnStyle = 'bg-amber-500/20 border-amber-400 text-amber-200';
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => onSelectOption(idx)}
              className={`p-4 rounded-xl border text-left flex items-center space-x-3 transition-all duration-200 font-medium ${btnStyle}`}
            >
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                  isAnswered && idx === question.correctIndex
                    ? 'bg-emerald-400 text-slate-950'
                    : isAnswered && idx === selectedOption
                    ? 'bg-rose-500 text-white'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}
              >
                {letters[idx]}
              </span>
              <span className="text-sm md:text-base leading-snug">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
