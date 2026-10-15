import React, { useEffect, useRef, useState } from 'react';
import { IllustratedStoryPage } from '../../types/game';
import { audioService } from '../../services/audioService';
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  Lightbulb,
  MessageSquareQuote,
  Sparkles,
  ChevronDown,
  Settings
} from 'lucide-react';

interface IllustratedPageReaderProps {
  pages: IllustratedStoryPage[];
  currentPageIndex: number;
  onPageChange: (index: number) => void;
  onFinishPages: () => void;
  onBackToIntro?: () => void;
  language: 'en' | 'te' | 'hi';
  onLanguageChange: (lang: 'en' | 'te' | 'hi') => void;
  partNumber: number;
  partTitle?: string;
}

export const IllustratedPageReader: React.FC<IllustratedPageReaderProps> = ({
  pages,
  currentPageIndex,
  onPageChange,
  onFinishPages,
  onBackToIntro,
  language,
  onLanguageChange,
  partNumber,
  partTitle
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const page = pages[currentPageIndex] || pages[0];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;

  // Stop speech when page changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  }, [currentPageIndex, language]);

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

  const getMoralLesson = () => {
    if (language === 'te' && page.moralLesson_te) return page.moralLesson_te;
    if (language === 'hi' && page.moralLesson_hi) return page.moralLesson_hi;
    if (page.moralLesson) return page.moralLesson;

    // Default universal moral reflection if page lacks dedicated field
    if (language === 'te') {
      return 'సత్యం, ధర్మం మరియు కర్తవ్య పాలనలే మానవ జీవితానికి శాశ్వత విజయ మార్గాలు.';
    }
    if (language === 'hi') {
      return 'सत्य, धर्म और कर्तव्यनिष्ठा ही जीवन में शाश्वत विजय का मार्ग प्रशस्त करते हैं।';
    }
    return 'True strength lies in self-mastery, upholding righteous duty (Dharma), and choosing virtue even in times of trial.';
  };

  const getHeaderPartTitle = () => {
    if (page.partTitle) {
      if (language === 'te' && page.partTitle_te) return page.partTitle_te;
      if (language === 'hi' && page.partTitle_hi) return page.partTitle_hi;
      return page.partTitle;
    }
    if (partTitle) return partTitle;
    if (language === 'te') return 'ఆది పర్వం - ఆరంభం';
    if (language === 'hi') return 'आदि पर्व - उत्पत्ति';
    return 'The Origins';
  };

  // Text to speech narration
  const handleToggleNarrate = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const paras = getParagraphs().join(' ');
    const moral = getMoralLesson();
    const fullText = `${getPageTitle()}. ${paras}. ${moral}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    if (language === 'te') utterance.lang = 'te-IN';
    else if (language === 'hi') utterance.lang = 'hi-IN';
    else utterance.lang = 'en-US';

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const paragraphs = getParagraphs();
  const dialogueQuote = getDialogueQuote();
  const speaker = getSpeaker();
  const moralLesson = getMoralLesson();

  return (
    <div
      className="w-full max-w-2xl md:max-w-3xl mx-auto flex flex-col space-y-3 select-text"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ======================================================== */}
      {/* 1. TOP BAR — Exactly matching Reference 3 design         */}
      {/* ======================================================== */}
      <header className="flex items-center justify-between px-2 sm:px-4 py-2.5 bg-[#070d1d] border-b border-amber-500/30 rounded-2xl shadow-md">
        {/* Left: Circular Gold-Bordered Back Button */}
        <button
          onClick={() => {
            audioService.playClick();
            if (onBackToIntro) onBackToIntro();
          }}
          className="w-10 h-10 rounded-full border border-amber-400/80 bg-[#0c142c] flex items-center justify-center text-amber-300 hover:text-amber-100 hover:bg-amber-500/20 active:scale-95 transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]"
          title={language === 'te' ? 'వెనుకకు' : language === 'hi' ? 'पीछे' : 'Back'}
        >
          <ArrowLeft className="w-5 h-5 text-amber-400" />
        </button>

        {/* Center: Two-line Title (Part label + Chapter/Scene title) */}
        <div className="flex-1 text-center px-3 min-w-0">
          <div className="text-[11px] sm:text-xs font-serif font-medium text-amber-400 tracking-wider uppercase truncate">
            {language === 'te'
              ? `భాగం ${partNumber} — ${getHeaderPartTitle()}`
              : language === 'hi'
              ? `पर्व ${partNumber} — ${getHeaderPartTitle()}`
              : `Part ${partNumber} — ${getHeaderPartTitle()}`}
          </div>
          <h1 className="text-xs sm:text-sm md:text-base font-royal font-bold text-amber-100 truncate tracking-wide">
            {page.chapterNumber || currentPageIndex + 1}. {getPageTitle()}
          </h1>
        </div>

        {/* Right: Language Dropdown Pill & Audio/Settings Button */}
        <div className="flex items-center space-x-2 relative">
          {/* Language Selector Pill */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-amber-400/70 bg-[#0c142c] hover:bg-slate-800 text-amber-300 text-xs font-bold transition-all shadow-sm"
              title="Change Language"
            >
              <span>{language.toUpperCase()}</span>
              <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-[#0c142c] border border-amber-400/50 rounded-xl shadow-xl overflow-hidden z-50">
                {(['en', 'te', 'hi'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      audioService.playClick();
                      onLanguageChange(lang);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-serif flex items-center justify-between transition-colors ${
                      language === lang
                        ? 'bg-amber-500/25 text-amber-300 font-bold'
                        : 'text-amber-100/80 hover:bg-amber-500/10'
                    }`}
                  >
                    <span>{lang === 'en' ? 'English' : lang === 'te' ? 'తెలుగు' : 'हिन्दी'}</span>
                    {language === lang && <span className="text-amber-400">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Audio Narration / Listen Button */}
          <button
            onClick={handleToggleNarrate}
            className={`w-10 h-10 rounded-full border border-amber-400/80 bg-[#0c142c] flex items-center justify-center transition-all shadow-md active:scale-95 ${
              isPlayingAudio
                ? 'bg-amber-500/30 text-amber-300 animate-pulse border-amber-300'
                : 'text-amber-300 hover:text-amber-100 hover:bg-amber-500/20'
            }`}
            title={isPlayingAudio ? 'Stop Narration' : 'Listen to story'}
          >
            {isPlayingAudio ? (
              <VolumeX className="w-4 h-4 text-amber-300" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-400" />
            )}
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. HERO ILLUSTRATION — Generous ~40% Upper Screen Art    */}
      {/* ======================================================== */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border-2 border-amber-500/40 shadow-2xl">
        <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden bg-slate-900 flex items-center justify-center">
          <img
            src={page.imageUrl}
            alt={getPageTitle()}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/storybook/vishwamitra-menaka.jpg';
            }}
          />

          {/* Scene Tag Badge if available */}
          {getSceneTag() && (
            <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-amber-400/60 text-amber-300 text-xs font-royal shadow-lg">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{getSceneTag()}</span>
            </div>
          )}

          {/* Bottom vignette gradient */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. STORY CARD — Warm Cream/Parchment Storybook Paper     */}
      {/* ======================================================== */}
      <article className="relative bg-[#fdfbf6] text-slate-800 rounded-3xl border-2 border-[#e6d5a7] shadow-[0_12px_45px_rgba(0,0,0,0.5)] p-5 sm:p-8 pt-7 sm:pt-9 space-y-5">
        
        {/* Ornamental Golden Cartouche Header Badge */}
        <div className="flex justify-center -mt-11 sm:-mt-13 mb-3">
          <div className="relative px-6 sm:px-9 py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#fae8b6] via-[#fef3c7] to-[#fae8b6] border-2 border-amber-500/80 shadow-md flex items-center justify-center text-center">
            <span className="text-amber-800/60 text-xs sm:text-sm mr-2 select-none">✦</span>
            <h2 className="text-base sm:text-lg md:text-xl font-bold font-serif text-[#1e293b] tracking-wide">
              {getPageTitle()}
            </h2>
            <span className="text-amber-800/60 text-xs sm:text-sm ml-2 select-none">✦</span>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 font-serif text-slate-800 text-sm sm:text-base leading-relaxed tracking-normal">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-royal first-letter:font-bold first-letter:text-amber-700 first-letter:float-left first-letter:mr-2.5 first-letter:leading-none'
                  : ''
              }
            >
              {para}
            </p>
          ))}
        </div>

        {/* Optional Dialogue Quote Callout */}
        {dialogueQuote && (
          <div className="relative mt-4 p-4 rounded-xl bg-amber-50/80 border-l-4 border-amber-600 border-y border-r border-amber-200 shadow-xs">
            <MessageSquareQuote className="w-5 h-5 text-amber-500 absolute top-3 right-3 opacity-40" />
            <blockquote className="font-serif italic text-amber-950 text-sm sm:text-base leading-relaxed pr-6">
              "{dialogueQuote}"
            </blockquote>
            {speaker && (
              <div className="mt-2 text-right text-xs text-amber-800 font-bold font-serif">
                — {speaker}
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* Moral / Lesson Callout Box — Exactly matching Ref 3     */}
        {/* ======================================================== */}
        <div className="mt-5 rounded-2xl bg-[#fef9c3] border border-amber-300/90 p-4 sm:p-5 shadow-sm flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-full bg-amber-200/90 border border-amber-400 flex items-center justify-center flex-shrink-0 text-amber-800 shadow-inner mt-0.5">
            <Lightbulb className="w-5 h-5 text-amber-600 fill-amber-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-bold font-royal text-amber-950 tracking-wide uppercase">
              {language === 'te' ? 'నీతి / సందేశం' : language === 'hi' ? 'नैतिक सीख' : 'Moral / Lesson'}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-amber-950/90 leading-relaxed font-normal">
              {moralLesson}
            </p>
          </div>
        </div>
      </article>

      {/* ======================================================== */}
      {/* 4. BOTTOM BAR — Sleek Dark Nav matching Ref 3             */}
      {/* ======================================================== */}
      <footer className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#070d1d] rounded-2xl border border-amber-500/40 shadow-xl">
        {/* Previous Button */}
        <button
          onClick={() => {
            audioService.playClick();
            onPageChange(currentPageIndex - 1);
          }}
          disabled={isFirstPage}
          className={`px-4 sm:px-5 py-2 rounded-full border flex items-center space-x-2 text-xs sm:text-sm font-serif font-semibold transition-all shadow-sm ${
            isFirstPage
              ? 'opacity-30 border-slate-700 bg-slate-900/60 text-slate-500 cursor-not-allowed'
              : 'border-amber-400/70 bg-[#0c142c] hover:bg-amber-500/20 active:scale-95 text-amber-200'
          }`}
        >
          <ArrowLeft className="w-4 h-4 text-amber-400" />
          <span>{language === 'te' ? 'మునుపటిది' : language === 'hi' ? 'पिछला' : 'Previous'}</span>
        </button>

        {/* Center Page Pill Badge e.g. "1 / 8" */}
        <div className="px-4 py-1.5 rounded-full bg-[#030712] border border-amber-500/50 text-amber-300 font-bold font-royal text-xs sm:text-sm tracking-widest shadow-inner">
          {currentPageIndex + 1} / {pages.length}
        </div>

        {/* Next / Finish Button */}
        {!isLastPage ? (
          <button
            onClick={() => {
              audioService.playClick();
              onPageChange(currentPageIndex + 1);
            }}
            className="px-4 sm:px-5 py-2 rounded-full border border-amber-400/70 bg-[#0c142c] hover:bg-amber-500/20 active:scale-95 text-amber-200 text-xs sm:text-sm font-serif font-semibold flex items-center space-x-2 transition-all shadow-sm"
          >
            <span>{language === 'te' ? 'తరువాతిది' : language === 'hi' ? 'अगला' : 'Next'}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        ) : (
          <button
            onClick={() => {
              audioService.playClick();
              onFinishPages();
            }}
            className="px-5 sm:px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 active:scale-95 text-slate-950 text-xs sm:text-sm font-royal font-bold flex items-center space-x-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
          >
            <span>{language === 'te' ? 'సారాంశం' : language === 'hi' ? 'सारांश' : 'Summary'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </footer>
    </div>
  );
};
