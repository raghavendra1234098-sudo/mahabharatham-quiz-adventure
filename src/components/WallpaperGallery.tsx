import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CharacterReward } from '../types/game';
import { ArrowLeft, Download, Eye, Lock, Trophy, Sparkles, X, Check } from 'lucide-react';

export const WallpaperGallery: React.FC = () => {
  const { setScreen, characters, progress, claimWallpaper } = useGame();
  const [previewChar, setPreviewChar] = useState<CharacterReward | null>(null);

  const handleDownload = async (char: CharacterReward) => {
    try {
      const response = await fetch(char.wallpaperPath);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `Mahabharatam_${char.name.replace(/\s+/g, '_')}_Poster_Wallpaper.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (e) {
      // Fallback
      const link = document.createElement('a');
      link.href = char.wallpaperPath;
      link.download = `Mahabharatam_${char.name.replace(/\s+/g, '_')}_Wallpaper.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    claimWallpaper(char.id);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#060810] via-[#0d1428] to-[#060810] p-4 md:p-8 text-amber-50">
      <div className="max-w-6xl mx-auto space-y-6">
        
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
              CINEMATIC CHARACTER POSTERS & WALLPAPERS
            </h1>
            <p className="text-xs text-amber-300/70 font-serif">
              Photorealistic 9:16 Mobile Wallpapers • Unlocked every 5 levels
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-amber-400 font-semibold block">Collection</span>
            <span className="text-sm md:text-base font-bold text-amber-200">
              {progress.unlockedCharacters.length}/10 Wallpapers
            </span>
          </div>
        </div>

        {/* Wallpaper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {characters.map((char) => {
            const isUnlocked = progress.unlockedCharacters.includes(char.id);

            return (
              <div
                key={char.id}
                className={`group relative rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-[#10172e] border-amber-500/40 shadow-[0_4px_25px_rgba(212,175,55,0.2)] hover:border-amber-400 hover:scale-[1.02]'
                    : 'bg-slate-950/70 border-slate-800 opacity-60'
                }`}
              >
                {/* 9:16 Poster Card Image */}
                <div className="relative w-full h-80 overflow-hidden bg-black cursor-pointer" onClick={() => isUnlocked && setPreviewChar(char)}>
                  <img
                    src={char.wallpaperPath}
                    alt={char.name}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                      isUnlocked ? 'group-hover:scale-105 filter brightness-[0.95] contrast-[1.05]' : 'filter grayscale brightness-[0.4]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10172e] via-transparent to-black/30" />

                  {/* Character Name Ribbon on image */}
                  <div className="absolute bottom-2 left-3 right-3 text-left">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-royal block">
                      Part {char.storyPart} Reward
                    </span>
                    <h3 className="text-base font-black font-royal text-white drop-shadow-md">
                      {char.name}
                    </h3>
                    <span className="text-xs text-amber-200/90 font-serif drop-shadow-sm">
                      {char.sanskritName}
                    </span>
                  </div>

                  {!isUnlocked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60">
                      <div className="w-12 h-12 rounded-full bg-slate-900/90 border border-slate-700 flex items-center justify-center text-slate-400 mb-2">
                        <Lock className="w-6 h-6 text-slate-500" />
                      </div>
                      <span className="text-xs font-royal font-bold text-amber-300">LOCKED</span>
                      <span className="text-[11px] text-slate-400 font-serif mt-0.5">
                        Complete Level {char.storyPart * 5}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info & Download Actions */}
                <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between bg-[#0e1428]">
                  <p className="text-[11px] text-amber-200/80 font-serif italic line-clamp-2 text-center">
                    "{char.quote}"
                  </p>

                  {isUnlocked ? (
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-amber-500/20">
                      <button
                        onClick={() => setPreviewChar(char)}
                        className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-200 text-xs font-semibold flex items-center justify-center space-x-1 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>Preview</span>
                      </button>

                      <button
                        onClick={() => handleDownload(char)}
                        className="py-2 px-2.5 rounded-xl bg-amber-500 hover:bg-yellow-400 text-slate-950 text-xs font-bold flex items-center justify-center space-x-1 shadow-md transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </div>
                  ) : (
                    <div className="py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 text-xs text-center font-medium">
                      🔒 Complete Chapter {char.storyPart}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Movie Poster Wallpaper Preview Modal */}
      {previewChar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-sm w-full bg-[#0d1428] rounded-3xl border border-amber-500/60 p-4 shadow-[0_0_50px_rgba(212,175,55,0.3)] flex flex-col items-center space-y-3 max-h-[92vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setPreviewChar(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-0.5">
              <span className="text-[10px] font-royal font-bold text-amber-400 uppercase tracking-widest">
                Part {previewChar.storyPart} Reward • 9:16 Mobile Poster
              </span>
              <h2 className="text-base font-black font-royal text-white">
                {previewChar.name}
              </h2>
            </div>

            {/* Poster Image */}
            <div className="w-full flex-1 rounded-2xl overflow-hidden border border-amber-500/30 shadow-inner flex items-center justify-center bg-black max-h-[520px]">
              <img
                src={previewChar.wallpaperPath}
                alt={previewChar.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Instant Download Button */}
            <button
              onClick={() => handleDownload(previewChar)}
              className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-black font-royal text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all hover:scale-105 active:scale-95 border border-yellow-200"
            >
              <Download className="w-4 h-4" />
              <span>Download 9:16 HD Wallpaper</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
