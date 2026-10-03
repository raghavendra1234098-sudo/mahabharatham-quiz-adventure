import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress, StoryPart, Level, CharacterReward, Achievement, Language } from '../types/game';
import { STORY_PARTS } from '../data/storyParts';
import { LEVELS_DATA } from '../data/levelsData';
import { CHARACTERS_DATA } from '../data/charactersData';
import { ACHIEVEMENTS_DATA } from '../data/achievementsData';
import { audioService } from '../services/audioService';

export type ScreenType =
  | 'splash'
  | 'home'
  | 'story_map'
  | 'story_reader'
  | 'quiz'
  | 'scholar_page'
  | 'wallpaper_gallery'
  | 'achievements'
  | 'profile'
  | 'settings';

interface GameContextType {
  screen: ScreenType;
  setScreen: (screen: ScreenType) => void;
  selectedPart: number;
  setSelectedPart: (part: number) => void;
  selectedLevel: number;
  setSelectedLevel: (level: number) => void;
  progress: UserProgress;
  language: Language;
  setLanguage: (lang: Language) => void;
  storyParts: StoryPart[];
  levels: Level[];
  characters: CharacterReward[];
  achievements: Achievement[];
  isFlutePlaying: boolean;
  toggleMusic: () => void;
  setMusicVolume: (vol: number) => void;
  startAdventure: () => void;
  openStoryPart: (partNum: number) => void;
  openLevel: (levelNum: number) => void;
  completeLevel: (levelNum: number, score: number, stars: number, earnedXP: number) => void;
  claimWallpaper: (characterId: string) => void;
  saveScholarCertificate: (name: string, date: string) => string;
  useHint: () => boolean;
  useSkip: () => boolean;
  addCoins: (amount: number) => void;
  resetProgress: () => void;
}

const STORAGE_KEY = 'mahabharatham_quiz_adventure_save_v2';

const DEFAULT_PROGRESS: UserProgress = {
  currentLevel: 1,
  currentStoryPart: 1,
  completedLevels: [],
  levelStars: {},
  levelScores: {},
  totalXP: 0,
  totalScore: 0,
  coins: 250,
  hintsRemaining: 3,
  unlockedCharacters: [],
  downloadedWallpapers: [],
  achievements: [],
  language: 'en',
  soundEnabled: true,
  fluteMusicEnabled: false,
  volume: 0.45,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screen, setScreen] = useState<ScreenType>('splash');
  const [selectedPart, setSelectedPart] = useState<number>(1);
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [isFlutePlaying, setIsFlutePlaying] = useState<boolean>(false);

  // Load progress from LocalStorage
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_PROGRESS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load saved progress:', e);
    }
    return DEFAULT_PROGRESS;
  });

  const [language, setLanguageState] = useState<Language>(() => {
    return progress.language || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setProgress(prev => ({ ...prev, language: lang }));
  };

  // Save to LocalStorage whenever progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }, [progress]);

  const toggleMusic = () => {
    const playing = audioService.toggleFluteMusic();
    setIsFlutePlaying(playing);
    setProgress(prev => ({ ...prev, fluteMusicEnabled: playing }));
  };

  const setMusicVolume = (vol: number) => {
    audioService.setVolume(vol);
    setProgress(prev => ({ ...prev, volume: vol }));
  };

  const startAdventure = () => {
    audioService.playShankhaSound();
    audioService.startBackgroundMusic();
    setIsFlutePlaying(true);
    setProgress(prev => ({ ...prev, fluteMusicEnabled: true }));
    setScreen('home');
  };

  const openStoryPart = (partNum: number) => {
    audioService.playClick();
    setSelectedPart(partNum);
    setScreen('story_reader');
  };

  const openLevel = (levelNum: number) => {
    audioService.playClick();
    setSelectedLevel(levelNum);
    setSelectedPart(Math.ceil(levelNum / 10));
    setScreen('quiz');
  };

  const addCoins = (amount: number) => {
    setProgress(prev => ({ ...prev, coins: prev.coins + amount }));
  };

  const useHint = (): boolean => {
    if (progress.hintsRemaining > 0) {
      audioService.playHintSound();
      setProgress(prev => ({ ...prev, hintsRemaining: prev.hintsRemaining - 1 }));
      return true;
    }
    if (progress.coins >= 10) {
      audioService.playHintSound();
      setProgress(prev => ({ ...prev, coins: prev.coins - 10 }));
      return true;
    }
    return false;
  };

  const useSkip = (): boolean => {
    if (progress.coins >= 5) {
      audioService.playSkipSound();
      setProgress(prev => ({ ...prev, coins: prev.coins - 5 }));
      return true;
    }
    return false;
  };

  const completeLevel = (levelNum: number, score: number, stars: number, earnedXP: number) => {
    setProgress(prev => {
      const completed = Array.from(new Set([...prev.completedLevels, levelNum]));
      const nextLevel = Math.max(prev.currentLevel, levelNum < 100 ? levelNum + 1 : 100);
      const nextPart = Math.ceil(nextLevel / 10);

      // Check if 10 levels of a story part are completed
      const partNumber = Math.ceil(levelNum / 10);
      const partLevels = Array.from({ length: 10 }, (_, i) => (partNumber - 1) * 10 + i + 1);
      const allPartLevelsDone = partLevels.every(l => completed.includes(l));

      const newUnlockedChars = [...prev.unlockedCharacters];
      if (allPartLevelsDone) {
        const charReward = CHARACTERS_DATA.find(c => c.storyPart === partNumber);
        if (charReward && !newUnlockedChars.includes(charReward.id)) {
          newUnlockedChars.push(charReward.id);
        }
      }

      // Check achievements
      const updatedAchievements = [...prev.achievements];
      ACHIEVEMENTS_DATA.forEach(ach => {
        if (!updatedAchievements.includes(ach.id) && completed.length >= ach.requiredLevels) {
          updatedAchievements.push(ach.id);
        }
      });

      // Award +50 coins on level completion
      const newCoins = prev.coins + 50;

      return {
        ...prev,
        completedLevels: completed,
        currentLevel: nextLevel,
        currentStoryPart: Math.max(prev.currentStoryPart, nextPart),
        totalXP: prev.totalXP + earnedXP,
        totalScore: prev.totalScore + score,
        coins: newCoins,
        levelStars: {
          ...prev.levelStars,
          [levelNum]: Math.max(prev.levelStars[levelNum] || 0, stars)
        },
        levelScores: {
          ...prev.levelScores,
          [levelNum]: Math.max(prev.levelScores[levelNum] || 0, score)
        },
        unlockedCharacters: newUnlockedChars,
        achievements: updatedAchievements,
      };
    });
  };

  const claimWallpaper = (characterId: string) => {
    setProgress(prev => {
      if (!prev.downloadedWallpapers.includes(characterId)) {
        return {
          ...prev,
          downloadedWallpapers: [...prev.downloadedWallpapers, characterId]
        };
      }
      return prev;
    });
  };

  const saveScholarCertificate = (name: string, date: string): string => {
    const certId = `MQA-SCHOLAR-${Math.random().toString(36).substring(2, 8).toUpperCase()}-2026`;
    setProgress(prev => ({
      ...prev,
      scholarDetails: {
        fullName: name,
        completionDate: date,
        certificateId: certId,
      }
    }));
    return certId;
  };

  const resetProgress = () => {
    audioService.stopFluteMusic();
    setIsFlutePlaying(false);
    setProgress(DEFAULT_PROGRESS);
    localStorage.removeItem(STORAGE_KEY);
    setScreen('splash');
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        setScreen,
        selectedPart,
        setSelectedPart,
        selectedLevel,
        setSelectedLevel,
        progress,
        language,
        setLanguage,
        storyParts: STORY_PARTS,
        levels: LEVELS_DATA,
        characters: CHARACTERS_DATA,
        achievements: ACHIEVEMENTS_DATA,
        isFlutePlaying,
        toggleMusic,
        setMusicVolume,
        startAdventure,
        openStoryPart,
        openLevel,
        completeLevel,
        claimWallpaper,
        saveScholarCertificate,
        useHint,
        useSkip,
        addCoins,
        resetProgress,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
