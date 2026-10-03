import React from 'react';
import { useGame } from '../context/GameContext';
import { ArrowLeft, CheckCircle2, Lock, Trophy } from 'lucide-react';

export const AchievementsModal: React.FC = () => {
  const { setScreen, achievements, progress } = useGame();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#070a13] via-[#0d1428] to-[#070a13] p-4 md:p-8 text-amber-50">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
          <button
            onClick={() => setScreen('home')}
            className="flex items-center space-x-2 text-amber-300 hover:text-amber-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-royal font-semibold text-sm">Return Home</span>
          </button>

          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-black font-royal gold-gradient-text tracking-wider">
              EPIC ACHIEVEMENTS
            </h1>
            <p className="text-xs text-amber-300/70 font-serif">
              Trophies & Milestones of the Mahabharatam Journey
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-amber-400 font-semibold block">Unlocked</span>
            <span className="text-sm md:text-base font-bold text-amber-200">
              {progress.achievements.length}/{achievements.length} Badges
            </span>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((ach) => {
            const isUnlocked = progress.achievements.includes(ach.id);
            const currentCount = Math.min(progress.completedLevels.length, ach.requiredLevels);
            const percent = Math.min(100, Math.round((currentCount / ach.requiredLevels) * 100));

            return (
              <div
                key={ach.id}
                className={`p-5 rounded-2xl border transition-all flex items-start space-x-4 ${
                  isUnlocked
                    ? 'bg-[#10172e] border-amber-500/50 shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                    : 'bg-slate-950/60 border-slate-800 opacity-70'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-3xl shrink-0 ${
                    isUnlocked
                      ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-slate-900 border-slate-700'
                  }`}
                >
                  {ach.icon}
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold font-royal text-base text-amber-100">
                      {ach.title}
                    </h3>
                    {isUnlocked ? (
                      <span className="flex items-center space-x-1 text-emerald-400 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Completed</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1 text-slate-500 text-xs font-medium">
                        <Lock className="w-3.5 h-3.5" />
                        <span>{percent}%</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 font-serif leading-relaxed">
                    {ach.description}
                  </p>

                  {/* Progress bar */}
                  {!isUnlocked && (
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 mt-2">
                      <div
                        className="h-full bg-amber-500 rounded-full transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
