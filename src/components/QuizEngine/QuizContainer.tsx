import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { LearnMoreCard } from './LearnMoreCard';
import { LevelCompleteModal } from '../LevelCompleteModal';
import { audioService } from '../../services/audioService';
import {
  getQuestionPrompt,
  getQuestionOptions,
  getQuestionHint,
  getQuestionLearnMore,
  getTrueFalseLabels
} from '../../services/questionTranslator';
import { Pause, Play, Music, VolumeX, Sparkles, Star, Lightbulb, SkipForward, ArrowLeft, X, Languages } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizContainer: React.FC = () => {
  const {
    selectedLevel,
    setScreen,
    levels,
    completeLevel,
    progress,
    language,
    setLanguage,
    useHint,
    useSkip,
    addCoins,
    isFlutePlaying,
    toggleMusic
  } = useGame();

  const level = levels.find((l) => l.levelNumber === selectedLevel) || levels[0];

  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isPaused, setIsPaused] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]); // 50:50 eliminated indices
  const [hintType, setHintType] = useState<'eliminated' | 'riddle' | 'general' | null>(null);

  // Level statistics
  const [levelScore, setLevelScore] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showLevelComplete, setShowLevelComplete] = useState(false);
  const [finalStars, setFinalStars] = useState(3);

  const question = level.questions[questionIdx];
  const isLastQuestion = questionIdx === level.questions.length - 1;

  // Countdown timer effect
  useEffect(() => {
    if (isAnswered || isPaused || showLevelComplete) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          // Time expired
          clearInterval(interval);
          handleTimeExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [questionIdx, isAnswered, isPaused, showLevelComplete]);

  const handleTimeExpired = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    setIsCorrect(false);
    audioService.playIncorrectSound();
    setMistakes((prev) => prev + 1);
    setStreak(0);
  };

  // Handle MCQ selection
  const handleSelectMCQ = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const correct = index === (question as any).correctIndex;
    setIsCorrect(correct);

    if (correct) {
      audioService.playCorrectSound();
      setLevelScore((prev) => prev + 100);
      setEarnedXP((prev) => prev + question.xpReward);
      addCoins(15);
      setStreak((prev) => prev + 1);
    } else {
      audioService.playIncorrectSound();
      setMistakes((prev) => prev + 1);
      setStreak(0);
    }
  };

  // Handle True / False selection
  const handleSelectTF = (ans: boolean) => {
    if (isAnswered) return;
    setSelectedOption(ans);
    setIsAnswered(true);

    const correct = ans === (question as any).correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      audioService.playCorrectSound();
      setLevelScore((prev) => prev + 100);
      setEarnedXP((prev) => prev + question.xpReward);
      addCoins(15);
      setStreak((prev) => prev + 1);
    } else {
      audioService.playIncorrectSound();
      setMistakes((prev) => prev + 1);
      setStreak(0);
    }
  };

  // Handle Riddle selection by index (language-safe)
  const handleSelectRiddle = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const correctIdx = (question as any).options.findIndex(
      (opt: string) => opt.toLowerCase().trim() === (question as any).answer.toLowerCase().trim()
    );
    const correct = idx === correctIdx;
    setIsCorrect(correct);

    if (correct) {
      audioService.playCorrectSound();
      setLevelScore((prev) => prev + 200);
      setEarnedXP((prev) => prev + question.xpReward);
      addCoins(25);
      setStreak((prev) => prev + 1);
    } else {
      audioService.playIncorrectSound();
      setMistakes((prev) => prev + 1);
      setStreak(0);
    }
  };

  // Handle Hint trigger (eliminates 2 wrong options or gives clue)
  const handleTriggerHint = () => {
    if (isAnswered || hiddenOptions.length > 0) return;

    const used = useHint();
    if (!used) return;

    if (question.type === 'mcq' || question.type === 'image_guess') {
      const correctIdx = (question as any).correctIndex;
      const wrongIndices = [0, 1, 2, 3].filter((i) => i !== correctIdx);
      // Pick 2 random wrong options to hide (50:50)
      const toHide = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);
      setHiddenOptions(toHide);
      setHintType('eliminated');
    } else if (question.type === 'riddle') {
      setHintType('riddle');
    } else {
      setHintType('general');
    }
  };

  // Dynamic localized hint message
  const getHintMessage = (): string | null => {
    if (!hintType) return null;
    if (hintType === 'eliminated') {
      if (language === 'te') return '💡 రెండు తప్పు సమాధానాలు తొలగించబడ్డాయి!';
      if (language === 'hi') return '💡 दो गलत उत्तर हटा दिए गए हैं!';
      return '💡 Two incorrect answers have been eliminated!';
    }
    if (hintType === 'riddle') {
      const clue = getQuestionHint(question, language);
      if (language === 'te') return `💡 ఆధార సూచన: ${clue}`;
      if (language === 'hi') return `💡 संकेत: ${clue}`;
      return `💡 Clue: ${clue}`;
    }
    if (language === 'te') return '💡 పెద్దల ఉపదేశాలను స్మరించుకోండి!';
    if (language === 'hi') return '💡 बड़ों की सीख और धर्म का स्मरण करें!';
    return '💡 Reflect upon the teachings of the elders!';
  };

  // Handle Skip trigger
  const handleTriggerSkip = () => {
    if (isAnswered) return;
    const used = useSkip();
    if (!used) return;

    handleNextQuestion();
  };

  // Proceed to next question or complete level
  const handleNextQuestion = () => {
    audioService.playClick();
    if (!isLastQuestion) {
      setQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setHiddenOptions([]);
      setHintType(null);
      setTimer(30);
    } else {
      let stars = 3;
      if (mistakes === 1) stars = 2;
      else if (mistakes > 1) stars = 1;

      let totalLevelXP = earnedXP;
      if (mistakes === 0) totalLevelXP += 50;
      if (level.levelNumber % 5 === 0) totalLevelXP += 100;

      setFinalStars(stars);
      setShowLevelComplete(true);
      completeLevel(level.levelNumber, levelScore, stars, totalLevelXP);

      audioService.playVictoryFanfare();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#f59e0b', '#10b981', '#3b82f6', '#e11d48']
      });
    }
  };

  // Localized correct answer text formatting for LearnMore card
  const getCorrectAnswerText = (): string => {
    if (question.type === 'mcq' || question.type === 'image_guess') {
      const opts = getQuestionOptions(question, language);
      return opts[(question as any).correctIndex] || (question as any).options[(question as any).correctIndex];
    }
    if (question.type === 'true_false') {
      const tf = getTrueFalseLabels(language);
      return (question as any).correctAnswer ? tf.trueText : tf.falseText;
    }
    if (question.type === 'riddle') {
      const correctIdx = (question as any).options.findIndex(
        (opt: string) => opt.toLowerCase().trim() === (question as any).answer.toLowerCase().trim()
      );
      const opts = getQuestionOptions(question, language);
      return opts[correctIdx] || (question as any).answer;
    }
    return '';
  };

  const letters = ['A.', 'B.', 'C.', 'D.'];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden font-sans select-none">
      
      {/* 1. Realistic Cinematic Historical Background (Kurukshetra Sunset / War Camp) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/assets/quiz-bg-kurukshetra.jpg"
          alt="Mahabharatam Battlefield Background"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.1]"
        />
        {/* Cinematic Vignette & Atmospheric Contrast Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-black/40 to-[#060810]/70" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />

        {/* Floating Ember Particles */}
        <div className="ember-particle w-2 h-2 left-[15%] bottom-[10%]" style={{ animationDelay: '0s' }} />
        <div className="ember-particle w-1.5 h-1.5 left-[35%] bottom-[15%]" style={{ animationDelay: '1.2s' }} />
        <div className="ember-particle w-2.5 h-2.5 left-[60%] bottom-[8%]" style={{ animationDelay: '0.6s' }} />
        <div className="ember-particle w-1.5 h-1.5 left-[85%] bottom-[12%]" style={{ animationDelay: '2.1s' }} />
        <div className="ember-particle w-2 h-2 left-[48%] bottom-[5%]" style={{ animationDelay: '1.7s' }} />
      </div>

      {/* 2. Top Header Bar (Matching Reference Image) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 pt-3 pb-2 flex items-center justify-between">
        
        {/* Left: Level Laurel Medal & Blue XP Bar */}
        <div className="flex items-center space-x-2">
          {/* Level Circle Medal */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#2a1b0a] via-[#452d11] to-[#1a1005] border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.6)] flex flex-col items-center justify-center text-center shrink-0">
            <span className="text-[10px] text-[#f6e05e] font-bold uppercase tracking-wider font-royal leading-none">
              Lv.
            </span>
            <span className="text-base font-extrabold text-white font-royal leading-none mt-0.5">
              {level.levelNumber}
            </span>
          </div>

          {/* Jewel-Blue XP Progress Bar Frame */}
          <div className="relative w-36 sm:w-48 h-6 rounded-full bg-[#0d152a] border-2 border-[#a67c2e] p-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_0_10px_rgba(212,175,55,0.2)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#1d4ed8] via-[#38bdf8] to-[#60a5fa] shadow-[0_0_8px_rgba(56,189,248,0.7)] transition-all duration-300"
              style={{ width: `${Math.min(100, (progress.totalXP % 1000) / 10)}%` }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white tracking-wider drop-shadow-md">
              {progress.totalXP % 1000} / 1000 XP
            </span>
          </div>
        </div>

        {/* Right: Coins, Hints, Pause, Music */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Coins Badge */}
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1c1409]/90 border border-[#d4af37]/80 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
            <span className="text-sm">🪙</span>
            <span className="text-xs sm:text-sm font-bold text-amber-200 font-royal">{progress.coins}</span>
            <span className="text-[11px] text-amber-400/80 font-bold">+</span>
          </div>

          {/* Hint Count Badge */}
          <button
            onClick={handleTriggerHint}
            disabled={isAnswered}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-[#181a28]/90 border border-amber-500/50 text-amber-300 hover:border-amber-400 transition-colors shadow-sm"
            title="Use Hint"
          >
            <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs font-bold font-royal">{progress.hintsRemaining}</span>
          </button>

          {/* Pause Button */}
          <button
            onClick={() => setIsPaused(true)}
            className="w-8 h-8 rounded-full bg-[#161d30]/90 border border-[#a67c2e] flex items-center justify-center text-amber-300 hover:border-amber-300 transition-colors shadow-sm"
            title="Pause Game"
          >
            <Pause className="w-4 h-4" />
          </button>

          {/* Mysterious Flute Music Button */}
          <button
            onClick={toggleMusic}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
              isFlutePlaying
                ? 'bg-amber-500/30 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                : 'bg-[#161d30]/90 border-slate-700 text-slate-400 hover:text-amber-300'
            }`}
            title={isFlutePlaying ? 'Mute Flute Music' : 'Play Cinematic Flute'}
          >
            <Music className={`w-4 h-4 ${isFlutePlaying ? 'animate-pulse text-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* 3. Sub-Header Row: Chapter Ribbon, Sunburst Timer, Question Counter (Matching Reference) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 py-2 grid grid-cols-3 items-center">
        
        {/* Left Scroll Ribbon: Chapter Name */}
        <div className="justify-self-start">
          <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#21190f]/95 via-[#332515]/90 to-[#21190f]/95 border border-[#d4af37]/60 shadow-lg text-left">
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block font-royal">
              Chapter {level.partNumber}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-amber-100 font-royal line-clamp-1">
              {level.subtitle || level.title}
            </span>
          </div>
        </div>

        {/* Center: Sunburst Countdown Timer */}
        <div className="justify-self-center">
          <div className="relative flex flex-col items-center">
            {/* Sunburst Filigree Medallion */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3b2308] via-[#1a1005] to-[#0a0602] border-2 border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.6)] flex flex-col items-center justify-center text-center">
              <span className="text-[9px] text-amber-400 leading-none">⌛</span>
              <span className="text-sm sm:text-base font-black text-amber-200 font-royal leading-none mt-0.5">
                {timer}
              </span>
            </div>
          </div>
        </div>

        {/* Right Scroll Ribbon: Question Counter & Diamond Indicators */}
        <div className="justify-self-end">
          <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#21190f]/95 via-[#332515]/90 to-[#21190f]/95 border border-[#d4af37]/60 shadow-lg text-right">
            <span className="text-xs sm:text-sm font-extrabold text-amber-100 font-royal block">
              Question {questionIdx + 1} / {level.questions.length}
            </span>
            {/* Diamond Progress Icons */}
            <div className="flex items-center justify-end space-x-1 mt-0.5">
              {level.questions.map((_, qIndex) => (
                <span
                  key={qIndex}
                  className={`text-[11px] ${
                    qIndex <= questionIdx
                      ? 'text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]'
                      : 'text-slate-600'
                  }`}
                >
                  ♦
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Language Selector Pill Bar: Real-time Telugu, English, Hindi Switcher */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-4 pt-1 pb-1 flex justify-center">
        <div className="flex items-center space-x-1 sm:space-x-2 p-1 rounded-2xl bg-gradient-to-r from-[#181108]/95 via-[#271a0b]/95 to-[#181108]/95 border border-[#d4af37]/70 shadow-[0_0_15px_rgba(212,175,55,0.35)]">
          <div className="flex items-center px-2 py-0.5 text-amber-400/90 text-xs font-bold font-royal">
            <Languages className="w-3.5 h-3.5 mr-1 text-amber-400" />
            <span className="hidden sm:inline uppercase tracking-wider text-[10px]">Language:</span>
          </div>
          {(
            [
              { code: 'te', label: 'తెలుగు' },
              { code: 'en', label: 'English' },
              { code: 'hi', label: 'हिन्दी' }
            ] as const
          ).map((item) => {
            const isActive = language === item.code;
            return (
              <button
                key={item.code}
                onClick={() => {
                  audioService.playClick();
                  setLanguage(item.code);
                }}
                className={`px-3 sm:px-4 py-1 rounded-xl text-xs sm:text-sm font-bold font-royal transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-[#f59e0b] to-[#b45309] text-slate-950 font-black shadow-[0_0_12px_rgba(245,158,11,0.6)] border border-amber-200 scale-105'
                    : 'text-amber-200/80 hover:text-amber-100 hover:bg-amber-950/50 border border-transparent'
                }`}
                title={`Switch question language to ${item.label}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Center Question Plaque & Beveled Answer Cartridges (Matching Reference) */}
      <div className="relative z-20 max-w-2xl mx-auto w-full px-4 my-auto py-2 flex flex-col items-center space-y-4">
        
        {/* Antique Bronze / Stone Question Card */}
        <div className="w-full relative antique-stone-card rounded-2xl p-6 md:p-8 text-center space-y-3">
          
          {/* Top Golden Lotus & Filigree Crest */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-2 px-4 py-1 rounded-full bg-[#1b1509] border border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            <span className="text-amber-400 text-sm">🪷</span>
            <span className="text-[10px] text-amber-300 font-bold font-royal uppercase tracking-widest">
              Dharma Query
            </span>
            <span className="text-amber-400 text-sm">🪷</span>
          </div>

          {/* Question Text in Ivory-Gold Serif */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-royal text-amber-100 leading-relaxed pt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {getQuestionPrompt(question, language)}
          </h2>

          {/* Hint Message Banner if used */}
          {getHintMessage() && (
            <div className="p-2.5 rounded-xl bg-amber-950/70 border border-amber-500/50 text-xs sm:text-sm text-amber-200 font-serif animate-fadeIn shadow-md">
              {getHintMessage()}
            </div>
          )}
        </div>

        {/* Answer Options: Elongated Hexagonal Cartridges */}
        <div className="w-full space-y-2.5 max-w-xl">
          {question.type === 'mcq' || question.type === 'image_guess' ? (
            getQuestionOptions(question, language).map((opt: string, idx: number) => {
              const isHidden = hiddenOptions.includes(idx);
              const isCorrectOpt = idx === (question as any).correctIndex;
              const isSelected = selectedOption === idx;

              let cartridgeClass = 'answer-cartridge';
              if (isAnswered) {
                if (isCorrectOpt) {
                  cartridgeClass = 'answer-cartridge answer-cartridge-correct';
                } else if (isSelected) {
                  cartridgeClass = 'answer-cartridge answer-cartridge-wrong';
                } else {
                  cartridgeClass = 'answer-cartridge opacity-40';
                }
              }

              if (isHidden && !isAnswered) {
                return (
                  <div
                    key={idx}
                    className="w-full py-3.5 px-6 rounded-xl border border-slate-800 bg-black/40 text-slate-600 text-center text-xs italic font-serif"
                  >
                    ✦ Option Eliminated by Divine Hint ✦
                  </div>
                );
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectMCQ(idx)}
                  className={`w-full py-3.5 px-6 text-left flex items-center space-x-4 transition-all duration-200 cursor-pointer ${cartridgeClass}`}
                >
                  {/* Circular Golden Medal Badge for Letter (A, B, C, D) */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#382610] to-[#181105] border border-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.4)] flex items-center justify-center font-royal font-black text-xs text-amber-200 shrink-0">
                    {letters[idx]}
                  </div>

                  {/* Option Text */}
                  <span className="text-sm sm:text-base font-bold font-royal text-amber-100 drop-shadow-sm flex-1">
                    {opt}
                  </span>
                </button>
              );
            })
          ) : question.type === 'true_false' ? (
            <div className="grid grid-cols-2 gap-3">
              {[true, false].map((val) => {
                const isSelected = selectedOption === val;
                const isCorrectVal = val === (question as any).correctAnswer;
                const tfLabels = getTrueFalseLabels(language);

                let btnClass = 'answer-cartridge';
                if (isAnswered) {
                  if (isCorrectVal) btnClass = 'answer-cartridge answer-cartridge-correct';
                  else if (isSelected) btnClass = 'answer-cartridge answer-cartridge-wrong';
                  else btnClass = 'answer-cartridge opacity-40';
                }

                return (
                  <button
                    key={val ? 'true' : 'false'}
                    disabled={isAnswered}
                    onClick={() => handleSelectTF(val)}
                    className={`py-4 px-6 flex items-center justify-center space-x-2 ${btnClass}`}
                  >
                    <span className="font-royal font-black text-base sm:text-lg text-amber-200">
                      {val ? tfLabels.trueText : tfLabels.falseText}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : question.type === 'riddle' ? (
            <div className="space-y-2.5">
              {getQuestionOptions(question, language).map((opt: string, idx: number) => {
                const correctIdx = (question as any).options.findIndex(
                  (o: string) => o.toLowerCase().trim() === (question as any).answer.toLowerCase().trim()
                );
                const isCorrectRiddle = idx === correctIdx;
                const isSelected = selectedOption === idx;

                let btnClass = 'answer-cartridge';
                if (isAnswered) {
                  if (isCorrectRiddle) btnClass = 'answer-cartridge answer-cartridge-correct';
                  else if (isSelected) btnClass = 'answer-cartridge answer-cartridge-wrong';
                  else btnClass = 'answer-cartridge opacity-40';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectRiddle(idx)}
                    className={`w-full py-3.5 px-6 text-left flex items-center space-x-4 transition-all duration-200 ${btnClass}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#382610] to-[#181105] border border-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.4)] flex items-center justify-center font-royal font-black text-xs text-amber-200 shrink-0">
                      {letters[idx]}
                    </div>
                    <span className="text-sm sm:text-base font-bold font-royal text-amber-100">
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        {/* 6. Educational Insight Card (Section 8: Learn More) */}
        {isAnswered && (
          <div className="w-full max-w-xl">
            <LearnMoreCard
              isCorrect={isCorrect}
              correctAnswerText={getCorrectAnswerText()}
              explanation={getQuestionLearnMore(question, language)}
              earnedXP={isCorrect ? question.xpReward : 0}
              onNext={handleNextQuestion}
              isLastQuestion={isLastQuestion}
            />
          </div>
        )}
      </div>

      {/* 7. Bottom Action Controls Bar (Matching Reference Image) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 pt-2 pb-5 flex items-center justify-between">
        
        {/* Left Circular SKIP Button */}
        <button
          onClick={handleTriggerSkip}
          disabled={isAnswered || progress.coins < 5}
          className="flex flex-col items-center space-y-1 group"
          title="Skip Question (Costs 5 Coins)"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#24190c] via-[#3a2712] to-[#140e06] border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center text-center group-hover:scale-105 active:scale-95 transition-all">
            <SkipForward className="w-4 h-4 text-amber-300" />
            <span className="text-[9px] font-black text-amber-200 font-royal uppercase tracking-wider">
              SKIP
            </span>
          </div>
          <span className="text-[10px] text-amber-300 font-bold font-royal px-2 py-0.5 rounded-full bg-black/60 border border-amber-500/40">
            🪙 5
          </span>
        </button>

        {/* Center Plaque: "Every answer brings you closer to the truth..." */}
        <div className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#1d160c]/90 via-[#2d2110]/95 to-[#1d160c]/90 border border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-center max-w-xs sm:max-w-md mx-2">
          <p className="text-xs sm:text-sm font-serif italic text-amber-200 drop-shadow-md">
            "Every answer brings you closer to the truth..."
          </p>
          <div className="flex items-center justify-center space-x-1.5 text-[10px] text-amber-400/80 font-serif mt-0.5">
            <span>✦</span>
            <span>यतो धर्मस्ततो जयः</span>
            <span>✦</span>
          </div>
        </div>

        {/* Right Circular HINT Button */}
        <button
          onClick={handleTriggerHint}
          disabled={isAnswered || hiddenOptions.length > 0}
          className="flex flex-col items-center space-y-1 group"
          title="Use Hint (Costs 10 Coins or 1 Free Hint)"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#24190c] via-[#3a2712] to-[#140e06] border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center text-center group-hover:scale-105 active:scale-95 transition-all">
            <Lightbulb className="w-4 h-4 text-yellow-300" />
            <span className="text-[9px] font-black text-amber-200 font-royal uppercase tracking-wider">
              HINT
            </span>
          </div>
          <span className="text-[10px] text-amber-300 font-bold font-royal px-2 py-0.5 rounded-full bg-black/60 border border-amber-500/40">
            🪙 10
          </span>
        </button>
      </div>

      {/* Pause Modal */}
      {isPaused && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-sm bg-[#10172e] border-2 border-amber-500/60 rounded-3xl p-6 text-center space-y-4 shadow-2xl">
            <h3 className="text-xl font-black font-royal gold-gradient-text">GAME PAUSED</h3>
            <p className="text-xs text-slate-300 font-serif">Contemplate upon Dharma before resuming your trial.</p>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => setIsPaused(false)}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-yellow-400 text-slate-950 font-black font-royal text-sm uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Resume Journey</span>
              </button>

              <button
                onClick={toggleMusic}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-200 font-bold text-xs flex items-center justify-center space-x-2"
              >
                <Music className="w-4 h-4 text-amber-400" />
                <span>Flute Music: {isFlutePlaying ? 'ON' : 'OFF'}</span>
              </button>

              <button
                onClick={() => {
                  setIsPaused(false);
                  setScreen('story_map');
                }}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Exit to Story Map</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Level Completion Modal */}
      {showLevelComplete && (
        <LevelCompleteModal
          levelNumber={level.levelNumber}
          partNumber={level.partNumber}
          stars={finalStars}
          score={levelScore}
          mistakes={mistakes}
          onClose={() => {
            setShowLevelComplete(false);
            if (level.levelNumber === 50) {
              setScreen('scholar_page');
            } else if (level.levelNumber % 5 === 0) {
              setScreen('wallpaper_gallery');
            } else {
              setScreen('story_map');
            }
          }}
        />
      )}
    </div>
  );
};
