import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Play, Map, Trophy, User, Settings, Bot, Sparkles, Star, ChevronRight, Award } from 'lucide-react';
import { AIGuideModal } from './AIGuideModal';

export const HomeScreen: React.FC = () => {
  const { setScreen, openLevel, openStoryPart, progress } = useGame();
  const [showAIGuide, setShowAIGuide] = useState(false);

  // Resume at current highest unlocked level
  const handleStartOrContinue = () => {
    // If user hasn't played story part 1 yet, open story reader first
    const partNum = Math.ceil(progress.currentLevel / 5);
    const completedInPart = progress.completedLevels.filter(l => Math.ceil(l / 5) === partNum);
    if (completedInPart.length === 0) {
      openStoryPart(partNum);
    } else {
      openLevel(progress.currentLevel);
    }
  };

  const totalStars = Object.values(progress.levelStars).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-[calc(100vh-65px)] w-full relative flex flex-col justify-between p-4 md:p-8 overflow-hidden bg-[#05070e]">
      {/* Cinematic Historical Kurukshetra Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/quiz-bg-kurukshetra.jpg"
          alt="Historical Background"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity filter contrast-125 scale-105"
        />
        {/* Deep Vignette & Royal Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070e] via-[#070b16]/75 to-[#05070e]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-[#05070e]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,_rgba(245,158,11,0.14)_0%,_transparent_65%)]" />
      </div>

      {/* Decorative Rotating Mandala Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full border-[14px] border-amber-400 border-dashed animate-spin-slow" />
      </div>

      {/* Subtle Floating Embers */}
      <div className="ember-particle w-1.5 h-1.5 top-[75%] left-[18%] [animation-delay:0s]" />
      <div className="ember-particle w-2 h-2 top-[82%] left-[45%] [animation-delay:1.5s]" />
      <div className="ember-particle w-1.5 h-1.5 top-[78%] left-[72%] [animation-delay:0.8s]" />
      <div className="ember-particle w-2.5 h-2.5 top-[85%] left-[86%] [animation-delay:2.3s]" />
      <div className="ember-particle w-1 h-1 top-[70%] left-[28%] [animation-delay:2.8s]" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center space-y-6 md:space-y-8 my-auto">
        
        {/* Sacred Shloka Badge - Sculpted Filigree Cartridge */}
        <div className="inline-flex items-center space-x-2.5 px-5 py-1.5 rounded-full royal-stone-panel border-[#c29637]/70 text-amber-200 text-xs md:text-sm font-serif shadow-[0_0_20px_rgba(212,175,55,0.25)]">
          <span className="text-amber-400 text-xs">✦</span>
          <span className="tracking-widest font-semibold">यतो धर्मस्ततो जयः</span>
          <span className="text-amber-400/60">•</span>
          <span className="text-amber-300/90 tracking-wide font-normal">Where there is Dharma, there is Victory</span>
          <span className="text-amber-400 text-xs">✦</span>
        </div>

        {/* Title & Tagline with 3D Embossed Gold Styling */}
        <div className="space-y-2">
          <div className="text-[10px] md:text-xs font-royal tracking-[0.35em] text-amber-400/90 uppercase font-bold drop-shadow-md">
            THE SACRED CIVILIZATIONAL EPIC
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-royal tracking-wider gold-gradient-text drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            MAHABHARATHAM
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-[0.22em] text-amber-100 uppercase font-royal drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
            Quiz Adventure
          </h2>
          <div className="flex items-center justify-center space-x-3 text-xs md:text-sm text-amber-300/80 font-serif tracking-widest pt-1">
            <span className="text-amber-500/60">❖</span>
            <span className="italic">"Learn • Play • Discover"</span>
            <span className="text-amber-500/60">❖</span>
          </div>
        </div>

        {/* Player Progress Snapshot Tablet */}
        <div className="w-full max-w-md royal-stone-panel p-3.5 sm:p-4 rounded-2xl border-[#c29637]/80 shadow-[0_10px_35px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,235,175,0.35)] grid grid-cols-3 gap-2.5 sm:gap-3 text-center">
          
          {/* Level Medallion */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-[#1c150b]/90 to-[#100c06]/95 border border-[#a67c2e]/60 shadow-[inset_0_1px_1px_rgba(255,235,175,0.2)] flex flex-col items-center justify-center">
            <span className="text-[10px] sm:text-[11px] font-royal font-bold text-amber-400/90 uppercase tracking-wider block">
              Level
            </span>
            <div className="text-lg sm:text-xl font-black text-amber-100 font-royal drop-shadow-sm flex items-baseline">
              <span>{progress.currentLevel}</span>
              <span className="text-xs text-amber-400/60 ml-0.5">/100</span>
            </div>
          </div>

          {/* XP Medallion */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-[#1c150b]/90 to-[#100c06]/95 border border-[#a67c2e]/60 shadow-[inset_0_1px_1px_rgba(255,235,175,0.2)] flex flex-col items-center justify-center">
            <span className="text-[10px] sm:text-[11px] font-royal font-bold text-amber-400/90 uppercase tracking-wider flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" /> XP
            </span>
            <span className="text-lg sm:text-xl font-black text-amber-300 font-royal drop-shadow-sm">
              {progress.totalXP}
            </span>
          </div>

          {/* Stars Medallion */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-[#1c150b]/90 to-[#100c06]/95 border border-[#a67c2e]/60 shadow-[inset_0_1px_1px_rgba(255,235,175,0.2)] flex flex-col items-center justify-center">
            <span className="text-[10px] sm:text-[11px] font-royal font-bold text-amber-400/90 uppercase tracking-wider flex items-center justify-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> Stars
            </span>
            <span className="text-lg sm:text-xl font-black text-yellow-300 font-royal drop-shadow-sm">
              {totalStars}
            </span>
          </div>
        </div>

        {/* Primary Action: START / CONTINUE JOURNEY */}
        <div className="w-full max-w-md space-y-3.5">
          <button
            onClick={handleStartOrContinue}
            className="w-full py-4 px-6 rounded-2xl royal-action-btn text-slate-950 font-black text-lg md:text-xl tracking-widest uppercase flex items-center justify-center space-x-3 cursor-pointer group"
          >
            <Play className="w-6 h-6 fill-slate-950 group-hover:translate-x-1 transition-transform" />
            <span className="font-royal">
              {progress.completedLevels.length === 0 ? '▶ START ADVENTURE' : '▶ CONTINUE JOURNEY'}
            </span>
          </button>

          {/* Navigation Menu Cartridges with Deep Tactile Polish */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            
            {/* Story Map */}
            <button
              onClick={() => setScreen('story_map')}
              className="p-3 rounded-xl royal-cartridge-btn flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#33220c]/80 border border-[#a67c2e]/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Map className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-bold font-royal text-amber-100 group-hover:text-amber-300 transition-colors block leading-tight">
                    Story Map
                  </span>
                  <span className="text-[10px] text-amber-400/60 font-serif">50 Levels</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-400/60 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Rewards / Wallpapers */}
            <button
              onClick={() => setScreen('wallpaper_gallery')}
              className="p-3 rounded-xl royal-cartridge-btn flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#33220c]/80 border border-[#a67c2e]/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Trophy className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-bold font-royal text-amber-100 group-hover:text-amber-300 transition-colors block leading-tight">
                    Rewards
                  </span>
                  <span className="text-[10px] text-amber-400/60 font-serif">Wallpapers</span>
                </div>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#2d1e0c] text-amber-300 border border-[#a67c2e]/70 shadow-sm">
                {progress.unlockedCharacters.length}/10
              </span>
            </button>

            {/* Scholar Certificate */}
            <button
              onClick={() => setScreen('scholar_page')}
              className="p-3 rounded-xl royal-cartridge-btn flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#33220c]/80 border border-[#a67c2e]/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-bold font-royal text-amber-100 group-hover:text-amber-300 transition-colors block leading-tight">
                    Scholar
                  </span>
                  <span className="text-[10px] text-amber-400/60 font-serif">Certificate</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-400/60 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Profile */}
            <button
              onClick={() => setScreen('profile')}
              className="p-3 rounded-xl royal-cartridge-btn flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#33220c]/80 border border-[#a67c2e]/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <User className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-bold font-royal text-amber-100 group-hover:text-amber-300 transition-colors block leading-tight">
                    Profile
                  </span>
                  <span className="text-[10px] text-amber-400/60 font-serif">Player Stats</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-400/60 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Achievements */}
            <button
              onClick={() => setScreen('achievements')}
              className="p-3 rounded-xl royal-cartridge-btn flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#33220c]/80 border border-[#a67c2e]/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-sm">👑</span>
                </div>
                <div className="text-left">
                  <span className="text-sm font-bold font-royal text-amber-100 group-hover:text-amber-300 transition-colors block leading-tight">
                    Honors
                  </span>
                  <span className="text-[10px] text-amber-400/60 font-serif">Badges</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-400/60 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Settings */}
            <button
              onClick={() => setScreen('settings')}
              className="p-3 rounded-xl royal-cartridge-btn flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#33220c]/80 border border-[#a67c2e]/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Settings className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-bold font-royal text-amber-100 group-hover:text-amber-300 transition-colors block leading-tight">
                    Settings
                  </span>
                  <span className="text-[10px] text-amber-400/60 font-serif">Options</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-400/60 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* AI Mahabharatham Guide Button - Lapis Lazuli & Antique Gold Seal */}
          <button
            onClick={() => setShowAIGuide(true)}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#121936]/95 via-[#1c224a]/95 to-[#121936]/95 hover:from-[#19234d] hover:to-[#19234d] border border-[#6366f1]/60 text-indigo-100 font-semibold flex items-center justify-center space-x-2.5 shadow-[0_4px_20px_rgba(20,20,60,0.6)] transition-all cursor-pointer group"
          >
            <Bot className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base font-royal font-bold tracking-wide text-cyan-100 group-hover:text-cyan-200">
              Ask Sage Vyasa AI Guide
            </span>
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          </button>
        </div>
      </div>

      {/* Footer Cultural Quote */}
      <footer className="relative z-10 text-center text-xs text-amber-400/60 py-2 font-serif flex items-center justify-center space-x-2">
        <span className="text-amber-500/40">✦</span>
        <span>Ancient Indian Civilizational Epic & Cultural Heritage • Learn • Play • Discover</span>
        <span className="text-amber-500/40">✦</span>
      </footer>

      {/* AI Guide Modal */}
      {showAIGuide && <AIGuideModal onClose={() => setShowAIGuide(false)} />}
    </div>
  );
};
