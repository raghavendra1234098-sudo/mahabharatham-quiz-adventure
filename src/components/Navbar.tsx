import React from 'react';
import { useGame, ScreenType } from '../context/GameContext';
import { Volume2, VolumeX, Sparkles, Map, User, Trophy, Settings, Home, Award } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { screen, setScreen, progress, isFlutePlaying, toggleMusic } = useGame();

  if (screen === 'splash') return null;

  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-[#141c30]/98 via-[#0d1324]/98 to-[#080c18]/98 backdrop-blur-md border-b border-[#a67c2e]/70 shadow-[0_4px_25px_rgba(0,0,0,0.85),0_0_15px_rgba(212,175,55,0.2)] px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: App Icon & Title */}
        <button
          onClick={() => setScreen('home')}
          className="flex items-center space-x-3 text-left group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:scale-105 transition-all">
            <img
              src="/assets/app-icon.jpg"
              alt="Mahabharatham Quiz Adventure Icon"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-amber-400 font-bold block font-royal drop-shadow-sm">
              महाभारतम्
            </span>
            <span className="text-sm md:text-base font-black font-royal text-amber-100 group-hover:text-amber-300 transition-colors drop-shadow-md">
              Quiz Adventure
            </span>
          </div>
        </button>

        {/* Center: Royal XP & Level Medallion */}
        <div className="hidden sm:flex items-center space-x-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1f170b]/95 via-[#30220e]/95 to-[#1f170b]/95 border border-[#d4af37]/70 shadow-[inset_0_1px_2px_rgba(255,235,175,0.3),0_0_15px_rgba(212,175,55,0.25)]">
          <div className="flex items-center space-x-1.5 text-xs text-amber-300 font-royal">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="font-extrabold text-amber-200">{progress.totalXP}</span>
            <span className="text-amber-400/80 text-[10px] font-bold">XP</span>
          </div>
          <div className="w-px h-3.5 bg-amber-500/40" />
          <div className="text-xs text-amber-200 font-royal">
            <span className="text-amber-400/80 text-[10px] font-bold">Level </span>
            <span className="font-extrabold text-white">{progress.currentLevel}/50</span>
          </div>
        </div>

        {/* Right Action Icons: Music Toggle, Map, Wallpapers, Scholar, Profile */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Background Music Toggle */}
          <button
            onClick={toggleMusic}
            title={isFlutePlaying ? 'Background Music (Playing)' : 'Start Background Music'}
            className={`p-2 rounded-xl border transition-all flex items-center space-x-1.5 text-xs font-bold font-royal cursor-pointer ${
              isFlutePlaying
                ? 'bg-gradient-to-b from-[#f59e0b]/30 to-[#b45309]/30 text-amber-200 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.6)]'
                : 'bg-[#12182b]/90 text-slate-400 border-slate-700 hover:text-amber-200 hover:border-amber-500/50'
            }`}
          >
            {isFlutePlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-400 animate-bounce" />
                <span className="hidden md:inline">Music On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden md:inline">Music Off</span>
              </>
            )}
          </button>

          {/* Home button if not on home */}
          {screen !== 'home' && (
            <button
              onClick={() => setScreen('home')}
              className="p-2 rounded-xl bg-[#12182b]/90 text-amber-200 border border-slate-700 hover:border-amber-400 hover:text-amber-300 transition-all shadow-sm cursor-pointer hover:scale-105"
              title="Home"
            >
              <Home className="w-4 h-4" />
            </button>
          )}

          {/* Story Map */}
          <button
            onClick={() => setScreen('story_map')}
            className={`p-2 rounded-xl border transition-all shadow-sm cursor-pointer hover:scale-105 ${
              screen === 'story_map'
                ? 'bg-amber-500/25 text-amber-200 border-amber-400 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                : 'bg-[#12182b]/90 text-slate-300 border-slate-700 hover:text-amber-200 hover:border-amber-500/50'
            }`}
            title="Story Map"
          >
            <Map className="w-4 h-4" />
          </button>

          {/* Wallpapers / Rewards */}
          <button
            onClick={() => setScreen('wallpaper_gallery')}
            className={`p-2 rounded-xl border transition-all shadow-sm cursor-pointer hover:scale-105 ${
              screen === 'wallpaper_gallery'
                ? 'bg-amber-500/25 text-amber-200 border-amber-400 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                : 'bg-[#12182b]/90 text-slate-300 border-slate-700 hover:text-amber-200 hover:border-amber-500/50'
            }`}
            title="Character Wallpapers"
          >
            <Trophy className="w-4 h-4" />
          </button>

          {/* Scholar Certificate Shortcut */}
          <button
            onClick={() => setScreen('scholar_page')}
            className={`p-2 rounded-xl border transition-all shadow-sm cursor-pointer hover:scale-105 ${
              screen === 'scholar_page'
                ? 'bg-amber-500/25 text-amber-200 border-amber-400 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                : 'bg-[#12182b]/90 text-amber-300 border-amber-500/40 hover:border-amber-400'
            }`}
            title="Scholar Certificate"
          >
            <Award className="w-4 h-4" />
          </button>

          {/* Profile */}
          <button
            onClick={() => setScreen('profile')}
            className={`p-2 rounded-xl border transition-all shadow-sm cursor-pointer hover:scale-105 ${
              screen === 'profile'
                ? 'bg-amber-500/25 text-amber-200 border-amber-400 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                : 'bg-[#12182b]/90 text-slate-300 border-slate-700 hover:text-amber-200 hover:border-amber-500/50'
            }`}
            title="Scholar Profile"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Settings */}
          <button
            onClick={() => setScreen('settings')}
            className={`p-2 rounded-xl border transition-all shadow-sm cursor-pointer hover:scale-105 ${
              screen === 'settings'
                ? 'bg-amber-500/25 text-amber-200 border-amber-400 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                : 'bg-[#12182b]/90 text-slate-300 border-slate-700 hover:text-amber-200 hover:border-amber-500/50'
            }`}
            title="Settings & Audio"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
