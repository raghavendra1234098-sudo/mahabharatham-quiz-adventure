import React, { useState, useEffect } from 'react';
import { MatchQuestion, MatchPair } from '../../types/game';
import { Check, ArrowRight } from 'lucide-react';

interface MatchProps {
  question: MatchQuestion;
  isAnswered: boolean;
  onComplete: (isCorrect: boolean) => void;
}

export const MatchPairs: React.FC<MatchProps> = ({
  question,
  isAnswered,
  onComplete,
}) => {
  // Scrambled right side
  const [shuffledRights, setShuffledRights] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({}); // left -> right

  useEffect(() => {
    const rights = question.pairs.map((p) => p.right);
    // Fisher-Yates shuffle
    const shuffled = [...rights];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledRights(shuffled);
    setMatchedPairs({});
    setSelectedLeft(null);
  }, [question]);

  const handleSelectLeft = (left: string) => {
    if (isAnswered) return;
    setSelectedLeft(left);
  };

  const handleSelectRight = (right: string) => {
    if (isAnswered || !selectedLeft) return;

    const newMatches = { ...matchedPairs, [selectedLeft]: right };
    setMatchedPairs(newMatches);
    setSelectedLeft(null);

    // If all pairs are matched
    if (Object.keys(newMatches).length === question.pairs.length) {
      // Check correctness
      let allCorrect = true;
      question.pairs.forEach((p) => {
        if (newMatches[p.left] !== p.right) {
          allCorrect = false;
        }
      });
      onComplete(allCorrect);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="text-xs text-amber-300/80 font-serif italic text-center">
        {!isAnswered
          ? selectedLeft
            ? 'Now tap matching item on the right'
            : 'Tap an item on the left, then tap its match on the right'
          : 'Matching results shown below'}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-2.5">
          {question.pairs.map((pair) => {
            const isMatched = !!matchedPairs[pair.left];
            const isSelected = selectedLeft === pair.left;
            const isCorrect = isAnswered && matchedPairs[pair.left] === pair.right;

            let borderStyle = 'border-slate-700 bg-[#121a32] text-slate-200';
            if (isSelected) {
              borderStyle = 'border-amber-400 bg-amber-500/20 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.4)]';
            } else if (isAnswered) {
              borderStyle = isCorrect
                ? 'border-emerald-500 bg-emerald-950/60 text-emerald-200'
                : 'border-rose-500 bg-rose-950/60 text-rose-200';
            } else if (isMatched) {
              borderStyle = 'border-amber-500/40 bg-amber-950/30 text-amber-300';
            }

            return (
              <button
                key={pair.id}
                disabled={isAnswered}
                onClick={() => handleSelectLeft(pair.left)}
                className={`w-full p-3.5 rounded-xl border text-left font-medium text-xs md:text-sm flex items-center justify-between transition-all ${borderStyle}`}
              >
                <span>{pair.left}</span>
                {isMatched && (
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-2.5">
          {shuffledRights.map((rightText, idx) => {
            // Find if this right is matched to any left
            const matchedLeft = Object.keys(matchedPairs).find((l) => matchedPairs[l] === rightText);
            const isMatched = !!matchedLeft;

            let borderStyle = 'border-slate-700 bg-[#121a32] text-slate-200 hover:border-amber-400/60';
            if (isAnswered && matchedLeft) {
              const pairObj = question.pairs.find((p) => p.left === matchedLeft);
              const isCorrect = pairObj?.right === rightText;
              borderStyle = isCorrect
                ? 'border-emerald-500 bg-emerald-950/60 text-emerald-200'
                : 'border-rose-500 bg-rose-950/60 text-rose-200';
            } else if (isMatched) {
              borderStyle = 'border-amber-500/40 bg-amber-950/30 text-amber-300';
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectRight(rightText)}
                className={`w-full p-3.5 rounded-xl border text-left font-medium text-xs md:text-sm flex items-center justify-between transition-all ${borderStyle}`}
              >
                <span>{rightText}</span>
                {isMatched && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
