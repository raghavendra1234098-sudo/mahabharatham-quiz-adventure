import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { audioService } from '../../services/audioService';
import { CharacterRosterView } from './CharacterRosterView';
import { FamilyRelationshipTree } from './FamilyRelationshipTree';
import { IllustratedPageReader } from './IllustratedPageReader';
import { StorySummaryView } from './StorySummaryView';
import { ArrowLeft, BookOpen, Users, GitBranch, Award, Sparkles, ChevronRight, Play } from 'lucide-react';

export type StorybookStep = 'intro' | 'characters' | 'family_tree' | 'reading' | 'summary';

export const StorybookContainer: React.FC = () => {
  const { selectedPart, setScreen, openLevel, storyParts, language, setLanguage } = useGame();
  
  // Find current story part
  const part = storyParts.find((p) => p.partNumber === selectedPart) || storyParts[0];

  // Internal state
  const [currentStep, setCurrentStep] = useState<StorybookStep>('intro');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  // Helper for localized Part Title
  const getPartTitle = () => {
    if (language === 'te' && part.title_te) return part.title_te;
    if (language === 'hi' && part.title_hi) return part.title_hi;
    return part.title;
  };

  // Helper for localized Part Summary/Prologue
  const getPartSummaryText = () => {
    if (language === 'te' && part.summary_te) return part.summary_te;
    if (language === 'hi' && part.summary_hi) return part.summary_hi;
    return part.summary;
  };

  const firstLevelNumber = (part.partNumber - 1) * 10 + 1;

  const handleStepChange = (step: StorybookStep) => {
    audioService.playClick();
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBeginLevels = () => {
    audioService.playClick();
    openLevel(firstLevelNumber);
  };

  // Fallback data if part missing rich fields
  const characters = part.charactersInPart || [];
  const familyTree = part.familyTree;
  const illustratedPages = part.illustratedPages || [];
  const partSummary = part.partSummary;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#050814] via-[#0b1226] to-[#050814] p-3 sm:p-5 md:p-8 flex flex-col justify-between text-amber-50">
      
      {/* Top Main Navigation Bar */}
      <div className="max-w-5xl mx-auto w-full pb-4 border-b border-amber-500/30 space-y-3">
        <div className="flex items-center justify-between gap-3">
          {/* Back to Story Map */}
          <button
            onClick={() => {
              audioService.playClick();
              setScreen('story_map');
            }}
            className="flex items-center space-x-2 text-amber-300 hover:text-amber-100 transition-colors py-1 px-2 rounded-lg hover:bg-slate-800/60"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-royal text-xs md:text-sm font-semibold">
              {language === 'te' ? 'కథ పటం' : language === 'hi' ? 'कथा-मानचित्र' : 'Story Map'}
            </span>
          </button>

          {/* Center Titles */}
          <div className="text-center flex-1 min-w-0 px-2">
            <span className="text-[10px] sm:text-xs text-amber-400 font-bold uppercase tracking-wider block truncate">
              {language === 'te'
                ? `మహాభారతం • ${part.partNumber}వ భాగం / 10`
                : language === 'hi'
                ? `महाभारत • पर्व ${part.partNumber} / 10`
                : `Mahabharata • Chapter ${part.partNumber} of 10`}
            </span>
            <h1 className="text-base sm:text-xl md:text-2xl font-bold font-royal gold-gradient-text truncate">
              {getPartTitle()}
            </h1>
            <span className="text-[11px] text-amber-300/70 font-serif hidden sm:inline-block">
              {part.sanskritTitle}
            </span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-[#0e162d] p-1 rounded-xl border border-amber-500/30 flex-shrink-0">
            {(['en', 'te', 'hi'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  audioService.playClick();
                  setLanguage(lang);
                }}
                className={`px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
                  language === lang
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'text-amber-200/70 hover:text-amber-100 hover:bg-slate-800'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'te' ? 'తెలుగు' : 'हिन्दी'}
              </button>
            ))}
          </div>
        </div>

        {/* Step Navigation Tabs */}
        <div className="flex items-center justify-center overflow-x-auto py-1 scrollbar-none gap-1 sm:gap-2">
          {/* Tab 1: Overview */}
          <button
            onClick={() => handleStepChange('intro')}
            className={`px-3 py-1.5 rounded-xl text-xs font-royal flex items-center space-x-1.5 transition-all flex-shrink-0 ${
              currentStep === 'intro'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md scale-105'
                : 'text-amber-200/70 hover:text-amber-100 hover:bg-slate-800/80 border border-transparent'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'te' ? 'పరిచయం' : language === 'hi' ? 'प्रस्तावना' : '1. Overview'}</span>
          </button>

          {/* Tab 2: Characters */}
          {characters.length > 0 && (
            <button
              onClick={() => handleStepChange('characters')}
              className={`px-3 py-1.5 rounded-xl text-xs font-royal flex items-center space-x-1.5 transition-all flex-shrink-0 ${
                currentStep === 'characters'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md scale-105'
                  : 'text-amber-200/70 hover:text-amber-100 hover:bg-slate-800/80 border border-transparent'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{language === 'te' ? 'పాత్రలు' : language === 'hi' ? 'पात्र' : '2. Characters'}</span>
            </button>
          )}

          {/* Tab 3: Family Tree */}
          {familyTree && (
            <button
              onClick={() => handleStepChange('family_tree')}
              className={`px-3 py-1.5 rounded-xl text-xs font-royal flex items-center space-x-1.5 transition-all flex-shrink-0 ${
                currentStep === 'family_tree'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md scale-105'
                  : 'text-amber-200/70 hover:text-amber-100 hover:bg-slate-800/80 border border-transparent'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>{language === 'te' ? 'వంశ వృక్షం' : language === 'hi' ? 'संबंध-वृक्ष' : '3. Family Tree'}</span>
            </button>
          )}

          {/* Tab 4: Story Pages */}
          {illustratedPages.length > 0 && (
            <button
              onClick={() => handleStepChange('reading')}
              className={`px-3 py-1.5 rounded-xl text-xs font-royal flex items-center space-x-1.5 transition-all flex-shrink-0 ${
                currentStep === 'reading'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md scale-105'
                  : 'text-amber-200/70 hover:text-amber-100 hover:bg-slate-800/80 border border-transparent'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>
                {language === 'te'
                  ? `కథ (${currentPageIndex + 1}/${illustratedPages.length})`
                  : language === 'hi'
                  ? `कथा (${currentPageIndex + 1}/${illustratedPages.length})`
                  : `4. Story (${currentPageIndex + 1}/${illustratedPages.length})`}
              </span>
            </button>
          )}

          {/* Tab 5: Summary */}
          {partSummary && (
            <button
              onClick={() => handleStepChange('summary')}
              className={`px-3 py-1.5 rounded-xl text-xs font-royal flex items-center space-x-1.5 transition-all flex-shrink-0 ${
                currentStep === 'summary'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md scale-105'
                  : 'text-amber-200/70 hover:text-amber-100 hover:bg-slate-800/80 border border-transparent'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{language === 'te' ? 'సారాంశం' : language === 'hi' ? 'सारांश' : '5. Summary'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main View Area */}
      <div className="flex-1 my-6 flex flex-col justify-center">
        {/* STEP 1: PART INTRODUCTION */}
        {currentStep === 'intro' && (
          <div className="w-full max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
            {/* Hero Prologue Card */}
            <div className="bg-gradient-to-b from-[#0f172a] via-[#0d162f] to-[#070b18] rounded-3xl border-2 border-amber-500/40 p-6 md:p-10 shadow-[0_0_50px_rgba(245,158,11,0.2)] text-center space-y-6 relative overflow-hidden">
              
              {/* Gold Ornament Badges */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-serif">
                <span>✦</span>
                <span className="font-royal font-bold uppercase tracking-widest">
                  {language === 'te' ? `మహాభారత కావ్యం • ${part.partNumber}వ అధ్యాయం` : language === 'hi' ? `महाभारत महाकाव्य • पर्व ${part.partNumber}` : `Mahabharata Epic • Chapter ${part.partNumber}`}
                </span>
                <span>✦</span>
              </div>

              {/* Grand Title */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-royal font-bold gold-gradient-text tracking-wide leading-tight">
                  {getPartTitle()}
                </h1>
                <p className="text-sm md:text-base font-serif text-amber-300/80 italic">
                  {part.sanskritTitle}
                </p>
              </div>

              {/* Rich Narrative Prologue */}
              <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-slate-200 font-serif leading-relaxed text-sm md:text-base">
                <p>{getPartSummaryText()}</p>
              </div>

              {/* Action Buttons to Explore Characters or Read Story */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                {characters.length > 0 && (
                  <button
                    onClick={() => handleStepChange('characters')}
                    className="px-6 py-3 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 font-royal font-bold text-xs md:text-sm flex items-center space-x-2 transition-all hover:scale-105 shadow-md"
                  >
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>{language === 'te' ? 'పాత్రలను చూడండి' : language === 'hi' ? 'पात्रों का परिचय' : 'Explore Characters'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}

                {familyTree && (
                  <button
                    onClick={() => handleStepChange('family_tree')}
                    className="px-6 py-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-royal font-bold text-xs md:text-sm flex items-center space-x-2 transition-all hover:scale-105 shadow-md"
                  >
                    <GitBranch className="w-4 h-4 text-amber-400" />
                    <span>{language === 'te' ? 'వంశ వృక్షం' : language === 'hi' ? 'संबंध-वृक्ष' : 'Family Tree'}</span>
                  </button>
                )}

                <button
                  onClick={() => handleStepChange('reading')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs md:text-sm font-royal tracking-wider flex items-center space-x-2.5 shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all hover:scale-105"
                >
                  <BookOpen className="w-4 h-4 fill-slate-950" />
                  <span>{language === 'te' ? 'కథ చదవడం ప్రారంభించండి' : language === 'hi' ? 'कथा पठन आरंभ करें' : 'Start Reading Story'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quiz Teaser */}
              <div className="pt-2 text-xs text-amber-400/60 font-serif">
                {language === 'te'
                  ? `ఈ కథ పూర్తయిన తర్వాత ${firstLevelNumber} నుండి ${part.partNumber * 10} వరకు 10 క్విజ్ స్థాయిలు ప్రారంభమవుతాయి.`
                  : language === 'hi'
                  ? `इस कथा के उपरांत स्तर ${firstLevelNumber} से ${part.partNumber * 10} तक 10 प्रश्नोत्तरी स्तर आरंभ होंगे।`
                  : `10 Quiz Levels (${firstLevelNumber}–${part.partNumber * 10}) follow upon completing this story.`}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: CHARACTERS IN THIS PART */}
        {currentStep === 'characters' && (
          <CharacterRosterView
            characters={characters}
            language={language}
            onContinueToTree={() => handleStepChange('family_tree')}
            onContinueToStory={() => handleStepChange('reading')}
            onBackToIntro={() => handleStepChange('intro')}
          />
        )}

        {/* STEP 3: FAMILY TREE IN THIS PART */}
        {currentStep === 'family_tree' && familyTree && (
          <FamilyRelationshipTree
            treeData={familyTree}
            language={language}
            onContinueToStory={() => handleStepChange('reading')}
            onBackToCharacters={() => handleStepChange('characters')}
          />
        )}

        {/* STEP 4: ILLUSTRATED STORY PAGES */}
        {currentStep === 'reading' && (
          <IllustratedPageReader
            pages={illustratedPages}
            currentPageIndex={currentPageIndex}
            onPageChange={(idx) => setCurrentPageIndex(idx)}
            onFinishPages={() => handleStepChange('summary')}
            language={language}
            onLanguageChange={(lang) => setLanguage(lang)}
            partNumber={part.partNumber}
          />
        )}

        {/* STEP 5: STORY SUMMARY ("WHAT YOU LEARNED") */}
        {currentStep === 'summary' && partSummary && (
          <StorySummaryView
            summary={partSummary}
            partNumber={part.partNumber}
            partTitle={getPartTitle()}
            language={language}
            onReviewStory={() => {
              setCurrentPageIndex(0);
              handleStepChange('reading');
            }}
            onBeginLevels={handleBeginLevels}
          />
        )}
      </div>

      {/* Global Storybook Footer Quote */}
      <div className="max-w-4xl mx-auto w-full text-center text-[11px] text-amber-400/60 font-serif pt-2 border-t border-amber-500/10">
        "Yato Dharmas Tato Jayah — Where there is Dharma, there is Victory"
      </div>
    </div>
  );
};
