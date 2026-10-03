import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { ArrowLeft, Volume2, VolumeX, RotateCcw, ShieldAlert, Sparkles, Check, Globe } from 'lucide-react';

export const SettingsModal: React.FC = () => {
  const { setScreen, isFlutePlaying, toggleMusic, setMusicVolume, progress, resetProgress, language, setLanguage } = useGame();
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#070a13] via-[#0d1428] to-[#070a13] p-4 md:p-8 text-amber-50">
      <div className="max-w-2xl mx-auto space-y-6">
        
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
            SETTINGS & AUDIO
          </h1>

          <div className="w-16" />
        </div>

        {/* Language Selection Card */}
        <div className="bg-[#0f1730]/90 backdrop-blur-md p-6 rounded-3xl border border-amber-500/40 shadow-xl space-y-4">
          <div className="space-y-1">
            <h2 className="text-base md:text-lg font-bold font-royal text-amber-100 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-amber-400" />
              <span>Language Preference / భాష / भाषा</span>
            </h2>
            <p className="text-xs text-slate-300 font-serif">
              Select default language for questions, options, hints, and explanations. (You can also toggle anytime during a quiz!)
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-amber-500/20">
            {[
              { code: 'te', label: 'తెలుగు', sub: 'Telugu' },
              { code: 'en', label: 'English', sub: 'Standard' },
              { code: 'hi', label: 'हिन्दी', sub: 'Hindi' },
            ].map((item) => {
              const isSelected = language === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => setLanguage(item.code as any)}
                  className={`p-3 rounded-2xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#2a1d0d] to-[#452d11] border-amber-400 text-amber-100 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-amber-500/50 hover:text-amber-200'
                  }`}
                >
                  <span className="font-royal font-bold text-sm sm:text-base">{item.label}</span>
                  <span className="text-[10px] text-amber-400/80 mt-0.5">{item.sub}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Audio & Controls Card (Specification Section 17) */}
        <div className="bg-[#0f1730]/90 backdrop-blur-md p-6 rounded-3xl border border-amber-500/40 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="text-base md:text-lg font-bold font-royal text-amber-100">
              Background Music Settings
            </h2>
            <p className="text-xs text-slate-300 font-serif">
              Epic cinematic soundtrack and flute melodies of ancient Kurukshetra.
            </p>
          </div>

          <div className="space-y-4 pt-2 border-t border-amber-500/20">
            {/* Music Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400">
                  {isFlutePlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-100 block">Background Music</span>
                  <span className="text-xs text-slate-400 font-serif">
                    {isFlutePlaying ? 'Currently Playing soundtrack' : 'Paused'}
                  </span>
                </div>
              </div>

              <button
                onClick={toggleMusic}
                className={`px-4 py-2 rounded-xl font-royal font-bold text-xs uppercase tracking-wider transition-all ${
                  isFlutePlaying
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {isFlutePlaying ? 'ON' : 'OFF'}
              </button>
            </div>

            {/* Volume Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Music Volume</span>
                <span className="font-mono text-amber-400">{Math.round(progress.volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={progress.volume}
                onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer h-2"
              />
            </div>
          </div>
        </div>

        {/* Reset Progress Section */}
        <div className="bg-[#0f1730]/90 backdrop-blur-md p-6 rounded-3xl border border-rose-500/30 shadow-xl space-y-4">
          <div className="space-y-1">
            <h2 className="text-base font-bold font-royal text-rose-300 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <span>Reset Game Progress</span>
            </h2>
            <p className="text-xs text-slate-300 font-serif">
              Clear your completed levels, XP, and unlocked wallpapers to start the journey anew.
            </p>
          </div>

          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="py-2.5 px-4 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 border border-rose-500/40 text-rose-200 text-xs font-semibold flex items-center space-x-2 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Progress</span>
            </button>
          ) : (
            <div className="p-4 rounded-2xl bg-rose-950/90 border border-rose-500 space-y-3">
              <p className="text-xs text-rose-200 font-semibold">
                Are you sure? This will delete all 50 level scores and reset you to Level 1.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={resetProgress}
                  className="px-4 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs"
                >
                  Yes, Reset Everything
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* About App Info */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400 space-y-1 font-serif">
          <p className="font-semibold text-amber-400">Mahabharatham Quiz Adventure</p>
          <p>Learn the Mahabharatham through Story, Play and Discovery</p>
        </div>
      </div>
    </div>
  );
};
