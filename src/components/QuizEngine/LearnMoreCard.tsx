import React from 'react';
import { BookOpen, CheckCircle, XCircle, ArrowRight, Sparkles } from 'lucide-react';

interface LearnMoreCardProps {
  isCorrect: boolean;
  correctAnswerText: string;
  explanation: string;
  earnedXP: number;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const LearnMoreCard: React.FC<LearnMoreCardProps> = ({
  isCorrect,
  correctAnswerText,
  explanation,
  earnedXP,
  onNext,
  isLastQuestion,
}) => {
  return (
    <div
      className={`w-full mt-6 p-5 md:p-6 rounded-2xl border transition-all animate-fadeIn ${
        isCorrect
          ? 'bg-emerald-950/80 border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.2)]'
          : 'bg-rose-950/80 border-rose-500/50 shadow-[0_0_25px_rgba(244,63,94,0.2)]'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2.5">
          {isCorrect ? (
            <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
          ) : (
            <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
          )}
          <div>
            <h3 className="font-royal font-bold text-base md:text-lg text-white">
              {isCorrect ? 'Correct Answer! साधु साधु' : 'Incorrect Answer'}
            </h3>
            {!isCorrect && (
              <p className="text-xs text-rose-200 mt-0.5 font-medium">
                Correct Answer: <span className="font-bold text-white">{correctAnswerText}</span>
              </p>
            )}
          </div>
        </div>

        {isCorrect && (
          <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>+{earnedXP} XP</span>
          </div>
        )}
      </div>

      {/* Educational Insight Box (Specification Section 8: Learn More) */}
      <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
        <div className="flex items-center space-x-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>Learn More (महाभारत रहस्य)</span>
        </div>
        <p className="text-slate-200 text-xs md:text-sm font-serif leading-relaxed italic">
          "{explanation}"
        </p>
      </div>

      {/* Next Button */}
      <div className="mt-5 flex justify-end">
        <button
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-yellow-400 text-slate-950 font-bold font-royal text-xs md:text-sm flex items-center space-x-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <span>{isLastQuestion ? 'Complete Level' : 'Next Question'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
