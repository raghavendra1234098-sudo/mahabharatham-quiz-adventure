import React, { useState, useEffect } from 'react';
import { ArrangeQuestion, EventItem } from '../../types/game';
import { ArrowUp, ArrowDown, Check, GripVertical } from 'lucide-react';

interface ArrangeProps {
  question: ArrangeQuestion;
  isAnswered: boolean;
  onComplete: (isCorrect: boolean) => void;
}

export const ArrangeEvents: React.FC<ArrangeProps> = ({
  question,
  isAnswered,
  onComplete,
}) => {
  const [items, setItems] = useState<EventItem[]>([]);

  useEffect(() => {
    // Scramble the events initially
    const scrambled = [...question.events].sort(() => Math.random() - 0.5);
    setItems(scrambled);
  }, [question]);

  const moveUp = (index: number) => {
    if (isAnswered || index === 0) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;
    setItems(newItems);
  };

  const moveDown = (index: number) => {
    if (isAnswered || index === items.length - 1) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;
    setItems(newItems);
  };

  const handleConfirm = () => {
    let isCorrect = true;
    for (let i = 0; i < items.length; i++) {
      if (items[i].order !== i + 1) {
        isCorrect = false;
        break;
      }
    }
    onComplete(isCorrect);
  };

  return (
    <div className="w-full space-y-4">
      <div className="text-xs text-amber-300/80 font-serif italic text-center">
        {!isAnswered
          ? 'Use the ▲ and ▼ buttons to order events from first to last, then confirm'
          : 'Chronological sequence verified'}
      </div>

      <div className="space-y-2.5">
        {items.map((item, idx) => {
          const isItemCorrect = isAnswered && item.order === idx + 1;

          let cardStyle = 'border-slate-700 bg-[#121a32] text-slate-200';
          if (isAnswered) {
            cardStyle = isItemCorrect
              ? 'border-emerald-500 bg-emerald-950/60 text-emerald-200'
              : 'border-rose-500 bg-rose-950/60 text-rose-200';
          }

          return (
            <div
              key={item.id}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${cardStyle}`}
            >
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs md:text-sm font-medium">{item.text}</span>
              </div>

              {!isAnswered && (
                <div className="flex items-center space-x-1 shrink-0 ml-2">
                  <button
                    disabled={idx === 0}
                    onClick={() => moveUp(idx)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    title="Move earlier"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    disabled={idx === items.length - 1}
                    onClick={() => moveDown(idx)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    title="Move later"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!isAnswered && (
        <div className="pt-2 flex justify-center">
          <button
            onClick={handleConfirm}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-yellow-400 text-slate-950 font-bold font-royal text-xs md:text-sm flex items-center space-x-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Check className="w-4 h-4" />
            <span>Confirm Chronological Sequence</span>
          </button>
        </div>
      )}
    </div>
  );
};
