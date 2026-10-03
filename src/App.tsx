import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { Navbar } from './components/Navbar';
import { SplashScreen } from './components/SplashScreen';
import { HomeScreen } from './components/HomeScreen';
import { StoryMap } from './components/StoryMap';
import { StoryReader } from './components/StoryReader';
import { QuizContainer } from './components/QuizEngine/QuizContainer';
import { WallpaperGallery } from './components/WallpaperGallery';
import { ScholarPage } from './components/ScholarPage';
import { AchievementsModal } from './components/AchievementsModal';
import { ProfileModal } from './components/ProfileModal';
import { SettingsModal } from './components/SettingsModal';

const AppContent: React.FC = () => {
  const { screen } = useGame();

  return (
    <div className="min-h-screen bg-[#070a13] text-amber-50 font-sans flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <main className="flex-1 w-full">
        {screen === 'splash' && <SplashScreen />}
        {screen === 'home' && <HomeScreen />}
        {screen === 'story_map' && <StoryMap />}
        {screen === 'story_reader' && <StoryReader />}
        {screen === 'quiz' && <QuizContainer />}
        {screen === 'wallpaper_gallery' && <WallpaperGallery />}
        {screen === 'scholar_page' && <ScholarPage />}
        {screen === 'achievements' && <AchievementsModal />}
        {screen === 'profile' && <ProfileModal />}
        {screen === 'settings' && <SettingsModal />}
      </main>
    </div>
  );
};

export function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
