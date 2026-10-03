import React, { useState } from 'react';
import { PartCharacter } from '../../types/game';
import { audioService } from '../../services/audioService';
import { Users, Info, X, Shield, Sparkles, ChevronRight, BookOpen, GitBranch } from 'lucide-react';

interface CharacterRosterViewProps {
  characters: PartCharacter[];
  language: 'en' | 'te' | 'hi';
  onContinueToTree: () => void;
  onContinueToStory: () => void;
  onBackToIntro: () => void;
}

export const CharacterRosterView: React.FC<CharacterRosterViewProps> = ({
  characters,
  language,
  onContinueToTree,
  onContinueToStory,
  onBackToIntro
}) => {
  const [selectedChar, setSelectedChar] = useState<PartCharacter | null>(null);

  const getCharName = (c: PartCharacter) => {
    if (language === 'te' && c.name_te) return c.name_te;
    if (language === 'hi' && c.name_hi) return c.name_hi;
    return c.name;
  };

  const getCharTitle = (c: PartCharacter) => {
    if (language === 'te' && c.title_te) return c.title_te;
    if (language === 'hi' && c.title_hi) return c.title_hi;
    return c.title;
  };

  const getCharRelationship = (c: PartCharacter) => {
    if (language === 'te' && c.relationship_te) return c.relationship_te;
    if (language === 'hi' && c.relationship_hi) return c.relationship_hi;
    return c.relationship;
  };

  const getCharIntro = (c: PartCharacter) => {
    if (language === 'te' && c.intro_te) return c.intro_te;
    if (language === 'hi' && c.intro_hi) return c.intro_hi;
    return c.intro;
  };

  const getRoleBadge = (role: PartCharacter['role']) => {
    switch (role) {
      case 'hero':
        return { label: language === 'te' ? 'వీరుడు' : language === 'hi' ? 'महावीर' : 'Hero', color: 'from-amber-500/20 to-yellow-500/20 text-yellow-300 border-yellow-500/40' };
      case 'elder':
        return { label: language === 'te' ? 'వృద్ధ పూజ్యుడు' : language === 'hi' ? 'ज्येष्ठ' : 'Elder', color: 'from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/40' };
      case 'mentor':
        return { label: language === 'te' ? 'గురువు' : language === 'hi' ? 'गुरु' : 'Guru / Mentor', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/40' };
      case 'queen':
        return { label: language === 'te' ? 'రాణి' : language === 'hi' ? 'सम्राज्ञी' : 'Queen / Empress', color: 'from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/40' };
      case 'celestial':
        return { label: language === 'te' ? 'దైవ స్వరూపం' : language === 'hi' ? 'दिव्य' : 'Celestial', color: 'from-cyan-500/20 to-sky-500/20 text-cyan-300 border-cyan-500/40' };
      case 'adversary':
        return { label: language === 'te' ? 'ప్రతిద్వంద్వి' : language === 'hi' ? 'प्रतिद्वंद्वी' : 'Adversary', color: 'from-red-500/20 to-rose-500/20 text-red-300 border-red-500/40' };
      default:
        return { label: 'Legend', color: 'from-slate-500/20 to-slate-700/20 text-slate-300 border-slate-500/40' };
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Title Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif">
          <Users className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {language === 'te' ? 'ఈ భాగంలోని ముఖ్య పాత్రలు' : language === 'hi' ? 'इस पर्व के प्रमुख पात्र' : 'Dramatis Personae: Key Figures'}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-royal font-bold text-amber-100">
          {language === 'te' ? 'పాత్రల పరిచయం' : language === 'hi' ? 'प्रमुख पात्रों का परिचय' : 'Characters in this Chapter'}
        </h2>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-serif">
          {language === 'te'
            ? 'ఈ భాగంలోని కీలక వ్యక్తులు, వారి పాత్రలు మరియు సంబంధాలను తెలుసుకోండి. వివరాల కోసం కార్డును తాకండి.'
            : language === 'hi'
            ? 'इस पर्व के प्रमुख चरित्रों, उनके संबंधों और भूमिकाओं को समझें। विस्तृत परिचय के लिए कार्ड छुएं।'
            : 'Explore the architects of destiny in this chapter. Tap any character to read their full profile.'}
        </p>
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((char) => {
          const badge = getRoleBadge(char.role);
          return (
            <div
              key={char.id}
              onClick={() => {
                audioService.playClick();
                setSelectedChar(char);
              }}
              className="group cursor-pointer bg-gradient-to-b from-[#131d38]/90 to-[#0a1124]/90 hover:from-[#1b294f] hover:to-[#0f1b39] border border-amber-500/30 hover:border-amber-400 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.2)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Gold Corner Flare */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/15 via-transparent to-transparent pointer-events-none" />

              <div className="flex items-start space-x-3.5">
                {/* Character Portrait */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-lg flex-shrink-0 bg-slate-900">
                  <img
                    src={char.avatarUrl}
                    alt={char.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Name & Title */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-gradient-to-r ${badge.color}`}>
                      {badge.label}
                    </span>
                    <Info className="w-3.5 h-3.5 text-amber-400/60 group-hover:text-amber-300 transition-colors" />
                  </div>

                  <h3 className="font-royal font-bold text-amber-200 text-sm md:text-base truncate group-hover:text-amber-100">
                    {getCharName(char)}
                  </h3>
                  <p className="text-[11px] text-amber-300/70 font-serif truncate">
                    {getCharTitle(char)}
                  </p>
                </div>
              </div>

              {/* Relationship snippet */}
              <div className="mt-3 pt-3 border-t border-amber-500/20 text-[11px] text-slate-300 font-serif leading-relaxed line-clamp-2">
                <span className="text-amber-400 font-semibold">
                  {language === 'te' ? 'సంబంధం: ' : language === 'hi' ? 'संबंध: ' : 'Relation: '}
                </span>
                {getCharRelationship(char)}
              </div>

              {/* Tap to View Details Cue */}
              <div className="mt-2.5 flex items-center justify-end text-[10px] text-amber-400 font-medium group-hover:text-amber-300">
                <span>{language === 'te' ? 'వివరాలు చూడండి' : language === 'hi' ? 'विवरण देखें' : 'View Bio'}</span>
                <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-500/20">
        <button
          onClick={() => {
            audioService.playClick();
            onBackToIntro();
          }}
          className="px-4 py-2.5 rounded-xl border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-amber-200 text-xs font-royal transition-colors"
        >
          ← {language === 'te' ? 'ప్రవేశిక' : language === 'hi' ? 'प्रस्तावना' : 'Overview'}
        </button>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              audioService.playClick();
              onContinueToTree();
            }}
            className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 text-xs font-royal flex items-center space-x-1.5 transition-colors shadow-md"
          >
            <GitBranch className="w-4 h-4 text-amber-400" />
            <span>{language === 'te' ? 'వంశ వృక్షం చూడండి' : language === 'hi' ? 'संबंध-वृक्ष देखें' : 'View Family Tree'}</span>
          </button>

          <button
            onClick={() => {
              audioService.playClick();
              onContinueToStory();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-black text-xs md:text-sm font-royal tracking-wider flex items-center space-x-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all hover:scale-105"
          >
            <BookOpen className="w-4 h-4 fill-slate-950" />
            <span>{language === 'te' ? 'కథ చదవడం ప్రారంభించండి' : language === 'hi' ? 'कथा पठन आरंभ करें' : 'Start Reading Story'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal Character Detail Dialog */}
      {selectedChar && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedChar(null)}
        >
          <div
            className="bg-[#0e162d] border-2 border-amber-400/80 rounded-3xl max-w-lg w-full p-6 text-amber-50 shadow-[0_0_50px_rgba(245,158,11,0.3)] relative overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => {
                audioService.playClick();
                setSelectedChar(null);
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Avatar */}
            <div className="flex items-center space-x-4 pb-4 border-b border-amber-500/30">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl flex-shrink-0 bg-slate-900">
                <img
                  src={selectedChar.avatarUrl}
                  alt={selectedChar.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex-1 min-w-0 pr-6">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-gradient-to-r ${getRoleBadge(selectedChar.role).color} inline-block mb-1`}>
                  {getRoleBadge(selectedChar.role).label}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-royal text-amber-100">
                  {getCharName(selectedChar)}
                </h3>
                <p className="text-xs text-amber-300/80 font-serif">
                  {getCharTitle(selectedChar)}
                </p>
              </div>
            </div>

            {/* Details Content */}
            <div className="mt-4 space-y-4 text-xs md:text-sm">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <span className="text-amber-400 font-semibold block text-[11px] uppercase tracking-wider mb-1">
                  {language === 'te' ? 'బంధుత్వం & పాత్ర' : language === 'hi' ? 'संबंध एवं भूमिका' : 'Role & Kinship'}
                </span>
                <p className="text-slate-200 font-serif leading-relaxed">
                  {getCharRelationship(selectedChar)}
                </p>
              </div>

              <div>
                <span className="text-amber-400 font-semibold block text-[11px] uppercase tracking-wider mb-1">
                  {language === 'te' ? 'సంక్షిప్త పరిచయం' : language === 'hi' ? 'संक्षिप्त परिचय' : 'Key Significance'}
                </span>
                <p className="text-slate-300 font-serif leading-relaxed text-xs md:text-sm">
                  {getCharIntro(selectedChar)}
                </p>
              </div>
            </div>

            {/* Dismiss CTA */}
            <div className="mt-6 pt-4 border-t border-amber-500/20 flex justify-end">
              <button
                onClick={() => {
                  audioService.playClick();
                  setSelectedChar(null);
                }}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-royal font-bold text-xs shadow-md"
              >
                {language === 'te' ? 'మూసివేయి' : language === 'hi' ? 'बंद करें' : 'Close Profile'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
