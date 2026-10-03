import React from 'react';
import { useGame } from '../context/GameContext';
import { Lock, CheckCircle2, Star, Trophy, BookOpen, Play, Award, ArrowLeft } from 'lucide-react';
import { CHARACTERS_DATA } from '../data/charactersData';

export const StoryMap: React.FC = () => {
  const { setScreen, openLevel, openStoryPart, progress, storyParts } = useGame();

  return (
    <div className="min-h-screen w-full relative bg-[#05070e] p-4 md:p-8 text-amber-50 overflow-hidden">
      {/* Cinematic Historical Kurukshetra Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <img
          src="/assets/quiz-bg-kurukshetra.jpg"
          alt="Historical Background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070e] via-[#070b16]/85 to-[#05070e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.12)_0%,_transparent_65%)]" />
      </div>

      {/* Floating Embers on Map */}
      <div className="ember-particle w-1.5 h-1.5 top-[25%] left-[12%] [animation-delay:0s]" />
      <div className="ember-particle w-2 h-2 top-[45%] left-[88%] [animation-delay:1.2s]" />
      <div className="ember-particle w-1.5 h-1.5 top-[65%] left-[8%] [animation-delay:2.1s]" />
      <div className="ember-particle w-2 h-2 top-[85%] left-[80%] [animation-delay:0.5s]" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Header Navigation - Sculpted Stone Panel */}
        <div className="p-4 md:p-5 rounded-2xl royal-stone-panel border-[#a67c2e]/70 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <button
            onClick={() => setScreen('home')}
            className="px-4 py-2 rounded-xl bg-gradient-to-b from-[#24180a] to-[#120c04] border border-[#a67c2e]/70 hover:border-amber-400 text-amber-200 hover:text-amber-100 flex items-center space-x-2 font-royal font-bold text-xs uppercase tracking-wider transition-all shadow-md group cursor-pointer hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span>Return Home</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-black font-royal gold-gradient-text tracking-wider drop-shadow-md">
              MAHABHARATHAM JOURNEY MAP
            </h1>
            <p className="text-xs text-amber-300/80 font-serif tracking-wide pt-0.5">
              100 Progressive Levels Across 10 Epic Chapters • Adhyayas of Dharma
            </p>
          </div>

          <div className="text-center md:text-right px-3 py-1.5 rounded-xl bg-[#140e05]/80 border border-[#a67c2e]/50">
            <div className="flex items-center justify-center md:justify-end space-x-1 text-xs text-amber-400 font-royal font-bold uppercase">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Conquered</span>
            </div>
            <span className="text-sm md:text-base font-black text-amber-100 font-royal block">
              {progress.completedLevels.length} <span className="text-xs text-amber-400/70">/ 100 Levels</span>
            </span>
            {/* Mini Progress Track */}
            <div className="w-28 h-1.5 rounded-full bg-[#1e2538] border border-amber-500/30 overflow-hidden mt-1 mx-auto md:ml-auto">
              <div
                className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-500 transition-all duration-500"
                style={{ width: `${(progress.completedLevels.length / 100) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* The 10 Story Parts Timeline with Golden Dharma Road */}
        <div className="relative space-y-10 before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-translate-x-1/2 before:w-2 md:before:w-2.5 before:rounded-full before:royal-dharma-road before:border before:border-amber-300/40">
          {storyParts.map((part) => {
            const partLevels = Array.from({ length: 10 }, (_, i) => (part.partNumber - 1) * 10 + i + 1);
            const isPartUnlocked = progress.currentStoryPart >= part.partNumber;
            const isPartCompleted = partLevels.every(l => progress.completedLevels.includes(l));
            const charReward = CHARACTERS_DATA.find(c => c.storyPart === part.partNumber);
            const isCharUnlocked = charReward && progress.unlockedCharacters.includes(charReward.id);

            return (
              <div
                key={part.partNumber}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                  part.partNumber % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node on Dharma Road */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center font-black text-sm md:text-base shadow-2xl transition-all duration-300 ${
                      isPartCompleted
                        ? 'bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 border-yellow-100 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.8)] ring-4 ring-amber-500/30'
                        : isPartUnlocked
                        ? 'bg-gradient-to-br from-[#3d260f] via-[#5e3810] to-[#261608] border-[#fbbf24] text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.85)] animate-pulse ring-4 ring-amber-400/40'
                        : 'bg-gradient-to-b from-[#131929] to-[#0a0e18] border-slate-700 text-slate-600 shadow-md'
                    }`}
                  >
                    {isPartCompleted ? (
                      <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-slate-950" />
                    ) : isPartUnlocked ? (
                      <div className="flex flex-col items-center leading-none">
                        <span className="text-[9px] uppercase font-bold text-amber-300">PART</span>
                        <span className="font-royal text-base md:text-lg font-black">{part.partNumber}</span>
                      </div>
                    ) : (
                      <Lock className="w-5 h-5 text-slate-600" />
                    )}
                  </div>
                </div>

                {/* Chapter Card - Sculpted Royal Stone Panel */}
                <div className="w-full md:w-[calc(50%-2.5rem)] ml-14 md:ml-0">
                  <div
                    className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                      isPartUnlocked
                        ? 'royal-stone-panel border-[#a67c2e]/70 shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.15)] hover:border-amber-400'
                        : 'bg-[#0a0f1d]/75 border-slate-800 opacity-60'
                    }`}
                  >
                    {/* Chapter Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#2d1e0c] border border-[#a67c2e]/70 text-[10px] md:text-[11px] font-bold font-royal text-amber-300 uppercase tracking-widest mb-1.5 shadow-sm">
                          Story Part {part.partNumber} of 10
                        </div>
                        <h2 className="text-base md:text-lg font-black font-royal text-amber-100 drop-shadow-sm leading-snug">
                          {part.title}
                        </h2>
                        <span className="text-xs font-serif text-amber-300/80 italic block pt-0.5">
                          {part.sanskritTitle}
                        </span>
                      </div>

                      {/* Read Story Button */}
                      {isPartUnlocked && (
                        <button
                          onClick={() => openStoryPart(part.partNumber)}
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#2c1d0c] to-[#452b10] hover:from-[#3d2811] hover:to-[#573714] border border-[#d4af37]/80 text-amber-200 text-xs font-royal font-bold flex items-center space-x-1.5 shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 shrink-0 ml-2"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                          <span>Story</span>
                        </button>
                      )}
                    </div>

                    <p className="text-xs md:text-[13px] text-slate-300/90 leading-relaxed line-clamp-2 mb-4 font-serif">
                      "{part.summary}"
                    </p>

                    {/* 10 Level Nodes for this Story Part */}
                    <div className="space-y-2 pt-3 border-t border-[#a67c2e]/30">
                      <span className="text-[11px] font-royal font-bold text-amber-400/90 uppercase tracking-wider block">
                        Levels {partLevels[0]} – {partLevels[partLevels.length - 1]}
                      </span>
                      
                      <div className="grid grid-cols-5 gap-2">
                        {partLevels.map((lvlNum) => {
                          const isDone = progress.completedLevels.includes(lvlNum);
                          const isCurrent = progress.currentLevel === lvlNum;
                          const isLocked = lvlNum > progress.currentLevel;
                          const stars = progress.levelStars[lvlNum] || 0;

                          return (
                            <button
                              key={lvlNum}
                              disabled={isLocked}
                              onClick={() => openLevel(lvlNum)}
                              className={`p-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                                isDone
                                  ? 'bg-gradient-to-b from-[#261a0b]/90 to-[#150e05]/95 border-[#a67c2e]/70 text-amber-100 shadow-[inset_0_1px_1px_rgba(255,235,175,0.2)] hover:border-amber-400 hover:scale-105 cursor-pointer'
                                  : isCurrent
                                  ? 'royal-action-btn text-slate-950 font-black shadow-[0_0_18px_rgba(245,158,11,0.85)] animate-pulse scale-105 cursor-pointer'
                                  : 'bg-[#0b101c]/80 border-slate-800 text-slate-600 cursor-not-allowed'
                              }`}
                            >
                              <span className="text-xs font-royal font-bold">{lvlNum}</span>
                              {isDone ? (
                                <div className="flex items-center space-x-0.5 mt-0.5">
                                  {[1, 2, 3].map((s) => (
                                    <Star
                                      key={s}
                                      className={`w-2.5 h-2.5 ${
                                        s <= stars
                                          ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.6)]'
                                          : 'text-amber-900/60'
                                      }`}
                                    />
                                  ))}
                                </div>
                              ) : isCurrent ? (
                                <div className="flex items-center space-x-0.5 mt-0.5">
                                  <Play className="w-2.5 h-2.5 fill-slate-950" />
                                  <span className="text-[9px] font-black uppercase font-royal">GO</span>
                                </div>
                              ) : (
                                <Lock className="w-2.5 h-2.5 text-slate-700 mt-0.5" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Character Reward Card on Level 10 completion */}
                    {charReward && (
                      <div className="mt-4 pt-3 border-t border-[#a67c2e]/30 flex items-center justify-between bg-gradient-to-r from-[#171208]/90 via-[#261b0c]/80 to-[#171208]/90 p-3 rounded-xl border border-[#a67c2e]/60 shadow-[inset_0_1px_1px_rgba(255,235,175,0.15)]">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-9 h-9 rounded-full bg-[#3d2a13] border-2 border-[#d4af37] flex items-center justify-center text-lg shadow-[0_0_10px_rgba(212,175,55,0.3)] shrink-0">
                            {charReward.silhouetteIcon}
                          </div>
                          <div>
                            <span className="text-[10px] text-amber-400 uppercase font-royal font-bold block">
                              {part.partNumber === 10 ? '👑 Ultimate Milestone' : '🎁 Character Reward'}
                            </span>
                            <span className="text-xs font-black font-royal text-amber-100">
                              {charReward.name}
                            </span>
                          </div>
                        </div>

                        {isCharUnlocked ? (
                          <button
                            onClick={() => setScreen('wallpaper_gallery')}
                            className="royal-action-btn px-3 py-1.5 rounded-lg text-slate-950 font-royal font-black text-xs shadow-md flex items-center space-x-1 cursor-pointer hover:scale-105 active:scale-95"
                          >
                            <Trophy className="w-3 h-3 text-slate-950" />
                            <span>Claim</span>
                          </button>
                        ) : (
                          <span className="text-[11px] text-amber-400/60 font-serif italic">
                            Complete Level {partLevels[partLevels.length - 1]}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Scholar Page Banner - Sculpted Royal Decree Scroll */}
        <div className="mt-10 p-6 md:p-8 rounded-3xl royal-stone-panel border-2 border-[#d4af37] text-center space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.25)] relative overflow-hidden">
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-b from-[#3d2a13] to-[#1a1005] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)]">
            <Award className="w-8 h-8 text-yellow-300" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-black font-royal gold-gradient-text tracking-wider">
              MAHABHARATA SCHOLAR ACHIEVEMENT
            </h2>
            <p className="text-xs md:text-sm text-amber-200/90 max-w-xl mx-auto font-serif leading-relaxed">
              Upon conquering all 100 levels, unlock the prestigious Mahabharata Scholar Certificate, enter your details, and print or download your royal award.
            </p>
          </div>
          <button
            onClick={() => setScreen('scholar_page')}
            className="royal-action-btn py-3 px-8 rounded-xl text-slate-950 font-black font-royal text-xs md:text-sm uppercase tracking-widest shadow-xl cursor-pointer hover:scale-105 active:scale-95"
          >
            Preview Scholar Certificate Form
          </button>
        </div>
      </div>
    </div>
  );
};
