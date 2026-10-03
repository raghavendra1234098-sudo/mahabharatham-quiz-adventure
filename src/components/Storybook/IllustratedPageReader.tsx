import React, { useEffect, useRef } from 'react';
import { IllustratedStoryPage } from '../../types/game';
import { audioService } from '../../services/audioService';
import { ChevronLeft, ChevronRight, Volume2, BookOpen, MessageSquareQuote, Sparkles, Award } from 'lucide-react';

interface IllustratedPageReaderProps {
  pages: IllustratedStoryPage[];
  currentPageIndex: number;
  onPageChange: (index: number) => void;
  onFinishPages: () => void;
  language: 'en' | 'te' | 'hi';
  onLanguageChange: (lang: 'en' | 'te' | 'hi') => void;
  partNumber: number;
}

export const IllustratedPageReader: React.FC<IllustratedPageReaderProps> = ({
  pages,
  currentPageIndex,
  onPageChange,
  onFinishPages,
  language,
  onLanguageChange,
  partNumber
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const page = pages[currentPageIndex] || pages[0];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (!isLastPage) {
          audioService.playClick();
          onPageChange(currentPageIndex + 1);
        } else {
          audioService.playClick();
          onFinishPages();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (!isFirstPage) {
          audioService.playClick();
          onPageChange(currentPageIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex, isFirstPage, isLastPage, onPageChange, onFinishPages]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      if (!isLastPage) {
        audioService.playClick();
        onPageChange(currentPageIndex + 1);
      } else {
        audioService.playClick();
        onFinishPages();
      }
    } else if (isRightSwipe && !isFirstPage) {
      audioService.playClick();
      onPageChange(currentPageIndex - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Localized text getters
  const getPageTitle = () => {
    if (language === 'te' && page.title_te) return page.title_te;
    if (language === 'hi' && page.title_hi) return page.title_hi;
    return page.title;
  };

  const getSceneTag = () => {
    if (language === 'te' && page.sceneTag_te) return page.sceneTag_te;
    if (language === 'hi' && page.sceneTag_hi) return page.sceneTag_hi;
    return page.sceneTag;
  };

  const getHookLine = () => {
    if (language === 'te' && page.hookLine_te) return page.hookLine_te;
    if (language === 'hi' && page.hookLine_hi) return page.hookLine_hi;
    return page.hookLine;
  };

  const getParagraphs = () => {
    if (language === 'te' && page.paragraphs_te && page.paragraphs_te.length > 0) return page.paragraphs_te;
    if (language === 'hi' && page.paragraphs_hi && page.paragraphs_hi.length > 0) return page.paragraphs_hi;
    return page.paragraphs;
  };

  const getDialogueQuote = () => {
    if (language === 'te' && page.dialogueQuote_te) return page.dialogueQuote_te;
    if (language === 'hi' && page.dialogueQuote_hi) return page.dialogueQuote_hi;
    return page.dialogueQuote;
  };

  const getSpeaker = () => {
    if (language === 'te' && page.speaker_te) return page.speaker_te;
    if (language === 'hi' && page.speaker_hi) return page.speaker_hi;
    return page.speaker;
  };

  const getImageCaption = () => {
    if (language === 'te' && page.imageCaption_te) return page.imageCaption_te;
    if (language === 'hi' && page.imageCaption_hi) return page.imageCaption_hi;
    return page.imageCaption;
  };

  // Text to speech narration
  const handleNarrate = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const paras = getParagraphs().join(' ');
      const utterance = new SpeechSynthesisUtterance(paras);
      utterance.rate = 0.92;
      utterance.pitch = 1.0;
      if (language === 'te') utterance.lang = 'te-IN';
      else if (language === 'hi') utterance.lang = 'hi-IN';
      else utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const paragraphs = getParagraphs();
  const dialogueQuote = getDialogueQuote();
  const speaker = getSpeaker();

  return (
    <div
      className="w-full max-w-4xl mx-auto space-y-4 select-text"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Utility Bar: Language Selector & Audio Narration */}
      <div className="flex items-center justify-between px-2 text-xs">
        {/* Page progress indicator */}
        <div className="flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span className="font-royal font-bold text-amber-200">
            {language === 'te'
              ? `పుట ${currentPageIndex + 1} / ${pages.length}`
              : language === 'hi'
              ? `पृष्ठ ${currentPageIndex + 1} / ${pages.length}`
              : `Page ${currentPageIndex + 1} of ${pages.length}`}
          </span>
        </div>

        {/* Center: Language Switcher directly on page */}
        <div className="flex items-center bg-[#0a1124] p-1 rounded-xl border border-amber-500/30">
          {(['en', 'te', 'hi'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                audioService.playClick();
                onLanguageChange(lang);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                language === lang
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-amber-200/70 hover:text-amber-100 hover:bg-slate-800'
              }`}
            >
              {lang === 'en' ? 'EN' : lang === 'te' ? 'తెలుగు' : 'हिन्दी'}
            </button>
          ))}
        </div>

        {/* Read aloud button */}
        <button
          onClick={handleNarrate}
          className="p-1.5 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 transition-colors flex items-center space-x-1.5 text-xs font-serif"
          title="Listen to story"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">
            {language === 'te' ? 'వినండి' : language === 'hi' ? 'सुनिए' : 'Listen'}
          </span>
        </button>
      </div>

      {/* Main Illustrated Book Page Card */}
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0d152c] to-[#070b18] rounded-3xl border-2 border-amber-500/40 shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden relative">
        
        {/* Ornate Gold Border Flares */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-500/20 via-transparent to-transparent pointer-events-none" />

        {/* Cinematic Illustration Header */}
        <div className="relative w-full h-56 sm:h-72 md:h-84 overflow-hidden bg-slate-950 border-b border-amber-500/30">
          <img
            src={page.imageUrl}
            alt={getPageTitle()}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              // fallback image if path error
              (e.target as HTMLImageElement).src = '/assets/wallpapers/sanatana-dharma.jpg';
            }}
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/40" />

          {/* Scene Tag Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/50 text-amber-300 text-xs font-royal shadow-lg">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{getSceneTag()}</span>
          </div>

          {/* Image Caption at bottom right */}
          <div className="absolute bottom-3 right-4 left-4 text-right z-10 pointer-events-none">
            <span className="inline-block px-3 py-1 rounded-lg bg-black/75 backdrop-blur-sm border border-amber-500/30 text-[11px] text-amber-200/90 font-serif italic">
              {getImageCaption()}
            </span>
          </div>
        </div>

        {/* Story Body Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Page Title & Hook Line */}
          <div className="space-y-2 border-b border-amber-500/20 pb-4">
            <div className="text-[11px] font-royal font-bold uppercase tracking-widest text-amber-400/80">
              {language === 'te' ? `అధ్యాయం ${partNumber} • భాగం ${currentPageIndex + 1}` : language === 'hi' ? `पर्व ${partNumber} • दृश्य ${currentPageIndex + 1}` : `Episode ${currentPageIndex + 1} of ${pages.length}`}
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-royal font-bold text-amber-100 tracking-wide leading-tight">
              {getPageTitle()}
            </h1>

            {/* Hook Quote Line */}
            {getHookLine() && (
              <p className="text-xs sm:text-sm md:text-base font-serif italic text-amber-300/90 pt-1">
                "{getHookLine()}"
              </p>
            )}
          </div>

          {/* Multi-paragraph Story Narration */}
          <div className="space-y-4 text-slate-200 font-serif leading-relaxed text-sm sm:text-base md:text-[17px]">
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-4xl first-letter:font-royal first-letter:font-bold first-letter:text-amber-400 first-letter:float-left first-letter:mr-2.5 first-letter:leading-none'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* Highlighted Dialogue Quote Box */}
          {dialogueQuote && (
            <div className="relative mt-6 p-4 md:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 border-l-4 border-amber-400 border-y border-r border-amber-500/20 shadow-md">
              <MessageSquareQuote className="w-5 h-5 text-amber-400 absolute top-3 right-4 opacity-40" />

              <blockquote className="font-serif italic text-amber-100 text-sm md:text-base leading-relaxed pr-6">
                {dialogueQuote}
              </blockquote>

              {speaker && (
                <div className="mt-2.5 flex items-center justify-end text-xs text-amber-400 font-royal font-semibold">
                  <span>— {speaker}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Page Slider / Jump Dots */}
        <div className="px-6 md:px-8 py-3 bg-black/40 border-t border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center space-x-1.5 flex-wrap">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  audioService.playClick();
                  onPageChange(idx);
                }}
                className={`transition-all rounded-full ${
                  idx === currentPageIndex
                    ? 'w-6 h-2.5 bg-gradient-to-r from-amber-400 to-yellow-300'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Jump to Page ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-[11px] text-amber-300/60 font-serif">
            {language === 'te' ? 'స్వైప్ లేదా కీబోర్డ్ బాణాలతో పేజీ మార్చండి' : language === 'hi' ? 'स्वाइप या तीर की दबाकर पढ़ें' : 'Swipe or use arrow keys to turn page'}
          </span>
        </div>
      </div>

      {/* Navigation Footer Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => {
            audioService.playClick();
            onPageChange(currentPageIndex - 1);
          }}
          disabled={isFirstPage}
          className={`px-4 py-2.5 rounded-xl border flex items-center space-x-1.5 text-xs font-royal transition-all ${
            isFirstPage
              ? 'opacity-30 border-slate-800 text-slate-600 cursor-not-allowed'
              : 'border-amber-500/40 text-amber-200 hover:bg-amber-500/20'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{language === 'te' ? 'మునుపటి పేజీ' : language === 'hi' ? 'पिछला पृष्ठ' : 'Previous Page'}</span>
        </button>

        {!isLastPage ? (
          <button
            onClick={() => {
              audioService.playClick();
              onPageChange(currentPageIndex + 1);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-black text-xs md:text-sm font-royal tracking-wider flex items-center space-x-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all hover:scale-105"
          >
            <span>{language === 'te' ? 'తరువాతి పేజీ' : language === 'hi' ? 'अगला पृष्ठ' : 'Next Page'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => {
              audioService.playClick();
              onFinishPages();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-black text-xs md:text-sm font-royal tracking-wider flex items-center space-x-2 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-105 animate-pulse"
          >
            <Award className="w-4 h-4 fill-slate-950" />
            <span>{language === 'te' ? 'సారాంశం చూడండి' : language === 'hi' ? 'कथा सारांश देखें' : 'View Part Summary'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
