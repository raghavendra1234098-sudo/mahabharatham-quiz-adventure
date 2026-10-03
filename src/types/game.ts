export type Language = 'te' | 'en' | 'hi';

export type QuestionType = 'mcq' | 'true_false' | 'image_guess' | 'match' | 'arrange' | 'riddle';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  prompt_te?: string;
  prompt_hi?: string;
  learnMore: string;
  learnMore_te?: string;
  learnMore_hi?: string;
  xpReward: number;
  hint?: string;
  hint_te?: string;
  hint_hi?: string;
}

export interface MCQQuestion extends BaseQuestion {
  type: 'mcq' | 'image_guess';
  options: string[];
  options_te?: string[];
  options_hi?: string[];
  correctIndex: number;
  imageUrl?: string;
  imageAlt?: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true_false';
  correctAnswer: boolean;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
  left_te?: string;
  right_te?: string;
  left_hi?: string;
  right_hi?: string;
}

export interface MatchQuestion extends BaseQuestion {
  type: 'match';
  pairs: MatchPair[];
}

export interface EventItem {
  id: string;
  text: string;
  text_te?: string;
  text_hi?: string;
  order: number;
}

export interface ArrangeQuestion extends BaseQuestion {
  type: 'arrange';
  events: EventItem[];
}

export interface RiddleQuestion extends BaseQuestion {
  type: 'riddle';
  hint: string;
  hint_te?: string;
  hint_hi?: string;
  answer: string;
  answer_te?: string;
  answer_hi?: string;
  options: string[];
  options_te?: string[];
  options_hi?: string[];
}

export type Question = MCQQuestion | TrueFalseQuestion | MatchQuestion | ArrangeQuestion | RiddleQuestion;

export interface Level {
  levelNumber: number;
  partNumber: number;
  title: string;
  title_te?: string;
  title_hi?: string;
  subtitle: string;
  subtitle_te?: string;
  subtitle_hi?: string;
  questions: Question[];
}

export interface StorySlide {
  title: string;
  title_te?: string;
  title_hi?: string;
  content: string;
  content_te?: string;
  content_hi?: string;
  slideNumber?: number;
  narrationQuote?: string;
  imagePrompt?: string;
  visualTheme?: string;
  moralLesson?: string;
  moralLesson_te?: string;
  moralLesson_hi?: string;
}

export interface PartCharacter {
  id: string;
  name: string;
  name_te?: string;
  name_hi?: string;
  title: string;
  title_te?: string;
  title_hi?: string;
  relationship: string;
  relationship_te?: string;
  relationship_hi?: string;
  intro: string;
  intro_te?: string;
  intro_hi?: string;
  avatarUrl: string;
  role: 'hero' | 'elder' | 'mentor' | 'adversary' | 'celestial' | 'queen';
}

export interface FamilyTreeNode {
  id: string;
  name: string;
  name_te?: string;
  name_hi?: string;
  role?: string;
  role_te?: string;
  role_hi?: string;
  clan?: 'Lunar Dynasty' | 'Kuru' | 'Pandava' | 'Kaurava' | 'Panchala' | 'Yadava' | 'Matsya' | 'Sage / Celestial';
  generation: number;
  isKeyCharacter?: boolean;
  notes?: string;
  notes_te?: string;
  notes_hi?: string;
  avatarUrl?: string;
}

export interface FamilyTreeLink {
  from: string;
  to: string;
  relationship: 'parent_of' | 'married_to' | 'brother_of' | 'alliance' | 'mentor_of' | 'rivalry';
  label?: string;
  label_te?: string;
  label_hi?: string;
}

export interface FamilyTreeData {
  title: string;
  title_te?: string;
  title_hi?: string;
  description: string;
  description_te?: string;
  description_hi?: string;
  nodes: FamilyTreeNode[];
  links: FamilyTreeLink[];
}

export interface IllustratedStoryPage {
  pageNumber: number;
  title: string;
  title_te?: string;
  title_hi?: string;
  sceneTag: string;
  sceneTag_te?: string;
  sceneTag_hi?: string;
  hookLine: string;
  hookLine_te?: string;
  hookLine_hi?: string;
  paragraphs: string[];
  paragraphs_te?: string[];
  paragraphs_hi?: string[];
  dialogueQuote?: string;
  dialogueQuote_te?: string;
  dialogueQuote_hi?: string;
  speaker?: string;
  speaker_te?: string;
  speaker_hi?: string;
  imageUrl: string;
  imageCaption: string;
  imageCaption_te?: string;
  imageCaption_hi?: string;
}

export interface PartSummary {
  majorEvents: string[];
  majorEvents_te?: string[];
  majorEvents_hi?: string[];
  importantCharacters: string[];
  importantCharacters_te?: string[];
  importantCharacters_hi?: string[];
  importantRelationships: string[];
  importantRelationships_te?: string[];
  importantRelationships_hi?: string[];
  majorDecisions: string[];
  majorDecisions_te?: string[];
  majorDecisions_hi?: string[];
  consequences: string[];
  consequences_te?: string[];
  consequences_hi?: string[];
}

export interface StoryPart {
  partNumber: number;
  title: string;
  title_te?: string;
  title_hi?: string;
  sanskritTitle: string;
  summary: string;
  summary_te?: string;
  summary_hi?: string;
  characterRewardId: string;
  charactersInPart?: PartCharacter[];
  familyTree?: FamilyTreeData;
  illustratedPages?: IllustratedStoryPage[];
  partSummary?: PartSummary;
  slides: StorySlide[];
}

export interface CharacterReward {
  id: string;
  name: string;
  sanskritName: string;
  title: string;
  storyPart: number;
  bio: string;
  quote: string;
  weaponOrSymbol: string;
  themeColor: string;
  gradient: string;
  silhouetteIcon: string;
  wallpaperPath: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredLevels: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface UserProgress {
  currentLevel: number;
  currentStoryPart: number;
  completedLevels: number[];
  levelStars: Record<number, number>;
  levelScores: Record<number, number>;
  totalXP: number;
  totalScore: number;
  coins: number;
  hintsRemaining: number;
  unlockedCharacters: string[];
  downloadedWallpapers: string[];
  achievements: string[];
  language: Language;
  soundEnabled: boolean;
  fluteMusicEnabled: boolean;
  volume: number;
  scholarDetails?: {
    fullName: string;
    completionDate: string;
    certificateId: string;
  };
}
