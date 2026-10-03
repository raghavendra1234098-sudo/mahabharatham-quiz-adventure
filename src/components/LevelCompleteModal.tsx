import React from 'react';
import { Star, Trophy, Sparkles, Award, ArrowRight, Download } from 'lucide-react';
import { CHARACTERS_DATA } from '../data/charactersData';
import { useGame } from '../context/GameContext';

interface LevelCompleteProps {
  levelNumber: number;
  partNumber: number;
  stars: number;
  score: number;
  mistakes: number;
  onClose: () => void;
}

export const LevelCompleteModal: React.FC<LevelCompleteProps> = ({
  levelNumber,
  partNumber,
  stars,
  score,
  mistakes,
  onClose,
}) => {
  const { progress } = useGame();
  const isPartCompleted = levelNumber % 10 === 0;
  const isGameCompleted = levelNumber === 100;
  const character = CHARACTERS_DATA.find((c) => c.storyPart === partNumber);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/88 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-gradient-to-b from-[#131c38] to-[#0a0f20] border-2 border-amber-500/60 rounded-3xl p-6 md:p-7 shadow-[0_0_60px_rgba(212,175,55,0.4)] text-center space-y-5 relative overflow-hidden">
        
        {/* Glow Ring Behind Header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header Title */}
        <div className="space-y-1 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block font-royal">
            Level {levelNumber} of 100 Completed!
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-royal gold-gradient-text">
            {isGameCompleted ? 'महाभारत महाविद्वान् !' : 'विजयी भव • VICTORY!'}
          </h2>
        </div>

        {/* 3 Golden Stars */}
        <div className="flex items-center justify-center space-x-3 py-1">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`p-2.5 rounded-2xl border transition-all transform ${
                s <= stars
                  ? 'bg-amber-500/20 border-yellow-400 scale-110 shadow-[0_0_20px_rgba(250,204,21,0.6)]'
                  : 'bg-slate-900 border-slate-700 opacity-40'
              }`}
            >
              <Star
                className={`w-6 h-6 ${
                  s <= stars ? 'text-yellow-400 fill-yellow-400 animate-pulse' : 'text-slate-600'
                }`}
              />
            </div>
          ))}
        </div>

        {/* XP, Coins & Score Stats */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-900/80 border border-amber-500/20 text-center">
          <div>
            <span className="text-[10px] text-amber-400/80 block uppercase font-medium">Points</span>
            <span className="text-base sm:text-lg font-bold text-amber-100">+{score}</span>
          </div>
          <div>
            <span className="text-[10px] text-amber-400/80 block uppercase font-medium flex items-center justify-center gap-0.5">
              <Sparkles className="w-3 h-3 text-amber-400" /> XP
            </span>
            <span className="text-base sm:text-lg font-bold text-amber-300">
              +{mistakes === 0 ? '80' : '30'}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-amber-400/80 block uppercase font-medium">Coins</span>
            <span className="text-base sm:text-lg font-bold text-yellow-400">+50 🪙</span>
          </div>
        </div>

        {/* Special Chapter Poster Reward Preview */}
        {isPartCompleted && character && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/80 to-yellow-950/80 border border-yellow-500/50 flex items-center space-x-3 text-left animate-pulse">
            <div className="w-14 h-20 rounded-xl overflow-hidden border border-amber-400 shadow-md shrink-0">
              <img
                src={character.wallpaperPath}
                alt={character.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-0.5 flex-1">
              <span className="text-[10px] text-yellow-300 font-bold uppercase tracking-wider block font-royal">
                🎁 9:16 Cinematic Wallpaper Unlocked!
              </span>
              <h4 className="text-sm font-bold text-white font-royal">{character.name}</h4>
              <p className="text-[11px] text-amber-200/80 font-serif line-clamp-1">{character.title}</p>
            </div>
          </div>
        )}

        {/* Final Scholar Special Alert */}
        {isGameCompleted && (
          <div className="p-4 rounded-2xl bg-amber-500/20 border-2 border-yellow-400 space-y-1 text-center animate-bounce">
            <Award className="w-8 h-8 text-yellow-400 mx-auto" />
            <h4 className="text-sm md:text-base font-black text-yellow-200 font-royal">
              MAHABHARATA SCHOLAR STATUS EARNED!
            </h4>
            <p className="text-xs text-amber-100 font-serif">
              Click below to generate and print your Royal Scholar Certificate.
            </p>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-black font-royal text-sm md:text-base uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all hover:scale-105 active:scale-95 border border-yellow-200"
        >
          <span>
            {isGameCompleted
              ? 'Claim Scholar Certificate'
              : isPartCompleted
              ? 'View Unlocked Wallpaper'
              : 'Continue Adventure'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
