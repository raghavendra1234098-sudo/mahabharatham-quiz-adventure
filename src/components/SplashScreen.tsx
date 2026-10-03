import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { Play, Sparkles, BookOpen, HelpCircle, Puzzle, Award, Image as ImageIcon } from 'lucide-react';

export const SplashScreen: React.FC = () => {
  const { startAdventure, progress } = useGame();
  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setReady(true);
          return 100;
        }
        return prev + 20;
      });
    }, 180);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070a13]">
      {/* Background Graphic: User's Authentic Splash Screen Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/splash-screen.jpg"
          alt="Mahabharatham Quiz Adventure Splash"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Soft Vignette Overlay for Royal Immersion */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-[#070a13]/60" />
      </div>

      {/* Interactive Controls Overlay at bottom */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-8 flex flex-col items-center justify-end min-h-screen">
        <div className="w-full bg-[#0a0f1e]/85 backdrop-blur-md p-6 rounded-3xl border border-amber-500/40 shadow-2xl flex flex-col items-center text-center space-y-4 mb-4">
          
          {/* Quick Highlight Pills */}
          <div className="grid grid-cols-5 gap-2 w-full text-[11px] text-amber-200/90 font-medium">
            <div className="flex flex-col items-center p-2 rounded-xl bg-amber-950/40 border border-amber-500/20">
              <BookOpen className="w-4 h-4 text-amber-400 mb-1" />
              <span>Stories</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-amber-950/40 border border-amber-500/20">
              <HelpCircle className="w-4 h-4 text-amber-400 mb-1" />
              <span>50 Levels</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-amber-950/40 border border-amber-500/20">
              <Puzzle className="w-4 h-4 text-amber-400 mb-1" />
              <span>Riddles</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-amber-950/40 border border-amber-500/20">
              <Award className="w-4 h-4 text-amber-400 mb-1" />
              <span>Scholar</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-amber-950/40 border border-amber-500/20">
              <ImageIcon className="w-4 h-4 text-amber-400 mb-1" />
              <span>Wallpapers</span>
            </div>
          </div>

          {/* Loading Bar & Launch Button */}
          {!ready ? (
            <div className="w-full space-y-2 pt-2">
              <div className="flex justify-between text-xs text-amber-300 font-semibold uppercase tracking-wider">
                <span>Loading your epic journey...</span>
                <span>{loadProgress}%</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-amber-500/30 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <button
              onClick={startAdventure}
              className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 font-black text-lg md:text-xl uppercase tracking-widest flex items-center justify-center space-x-3 shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-yellow-200"
            >
              <Play className="w-6 h-6 fill-slate-950" />
              <span>{progress.completedLevels.length > 0 ? 'Continue Journey' : 'Begin Epic Journey'}</span>
              <Sparkles className="w-5 h-5 text-slate-900 animate-spin-slow" />
            </button>
          )}

          {/* Subtext info */}
          <p className="text-[12px] text-amber-300/80 italic font-serif">
            "Learn the Mahabharatham through Story, Play and Discovery"
          </p>
        </div>
      </div>
    </div>
  );
};
