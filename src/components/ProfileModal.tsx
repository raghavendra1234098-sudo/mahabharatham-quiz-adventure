import React from 'react';
import { useGame } from '../context/GameContext';
import { ArrowLeft, Sparkles, Star, Trophy, Award, BookOpen, Shield } from 'lucide-react';

export const ProfileModal: React.FC = () => {
  const { setScreen, progress } = useGame();

  const totalStars = Object.values(progress.levelStars).reduce((a, b) => a + b, 0);

  // Determine Title / Rank based on progress
  let rankTitle = 'Novice Pilgrim (हस्तिनापुर पथिक)';
  if (progress.completedLevels.length >= 100) {
    rankTitle = '👑 Mahabharata Supreme Scholar (महाभारत महाविद्वान्)';
  } else if (progress.completedLevels.length >= 75) {
    rankTitle = '🔥 Kurukshetra Veteran (कुरुक्षेत्र महारथी)';
  } else if (progress.completedLevels.length >= 50) {
    rankTitle = '🪷 Dharma Seeker (धर्म साधక)';
  } else if (progress.completedLevels.length >= 20) {
    rankTitle = '🏹 Dedicated Archer (एकनिष्ठ धनुर्धर)';
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#070a13] via-[#0d1428] to-[#070a13] p-4 md:p-8 text-amber-50">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
          <button
            onClick={() => setScreen('home')}
            className="flex items-center space-x-2 text-amber-300 hover:text-amber-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-royal font-semibold text-sm">Return Home</span>
          </button>

          <h1 className="text-xl md:text-3xl font-black font-royal gold-gradient-text tracking-wider">
            WARRIOR & SCHOLAR PROFILE
          </h1>

          <div className="w-16" />
        </div>

        {/* Hero Card */}
        <div className="bg-[#0f1730]/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-amber-500/40 shadow-2xl flex flex-col items-center text-center space-y-4 relative overflow-hidden">
          
          <div className="w-24 h-24 rounded-full border-4 border-amber-400 p-1 bg-gradient-to-tr from-amber-600 to-yellow-300 shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center justify-center">
            <span className="text-5xl">🏹</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-royal">
              {rankTitle}
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-royal text-white">
              {progress.scholarDetails?.fullName || 'Seeker of Dharma'}
            </h2>
            <p className="text-xs text-amber-200/80 font-serif">
              "Learn the Mahabharatham through Story, Play and Discovery"
            </p>
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4">
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-amber-500/20 text-center">
              <span className="text-[10px] text-amber-400/80 uppercase font-semibold block">Total XP</span>
              <span className="text-lg md:text-xl font-bold text-amber-300 flex items-center justify-center gap-1">
                <Sparkles className="w-4 h-4 text-amber-400" /> {progress.totalXP}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-amber-500/20 text-center">
              <span className="text-[10px] text-amber-400/80 uppercase font-semibold block">Levels Won</span>
              <span className="text-lg md:text-xl font-bold text-amber-100">
                {progress.completedLevels.length}/100
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-amber-500/20 text-center">
              <span className="text-[10px] text-amber-400/80 uppercase font-semibold block">Total Stars</span>
              <span className="text-lg md:text-xl font-bold text-yellow-300 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> {totalStars}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-amber-500/20 text-center">
              <span className="text-[10px] text-amber-400/80 uppercase font-semibold block">Wallpapers</span>
              <span className="text-lg md:text-xl font-bold text-amber-100 flex items-center justify-center gap-1">
                <Trophy className="w-4 h-4 text-amber-400" /> {progress.unlockedCharacters.length}/10
              </span>
            </div>
          </div>

          {/* Scholar Certificate Link if completed */}
          <div className="w-full pt-4 border-t border-amber-500/20">
            <button
              onClick={() => setScreen('scholar_page')}
              className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-black font-royal text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Award className="w-5 h-5 text-slate-950" />
              <span>
                {progress.completedLevels.length >= 50
                  ? 'Access Official Scholar Certificate'
                  : 'Preview Scholar Certificate'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
