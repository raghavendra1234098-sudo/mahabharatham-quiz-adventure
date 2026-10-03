import React from 'react';
import { PartSummary } from '../../types/game';
import { audioService } from '../../services/audioService';
import { Award, CheckCircle2, RotateCcw, Play, Users, GitFork, AlertCircle, Compass } from 'lucide-react';

interface StorySummaryViewProps {
  summary: PartSummary;
  partNumber: number;
  partTitle: string;
  language: 'en' | 'te' | 'hi';
  onReviewStory: () => void;
  onBeginLevels: () => void;
}

export const StorySummaryView: React.FC<StorySummaryViewProps> = ({
  summary,
  partNumber,
  partTitle,
  language,
  onReviewStory,
  onBeginLevels
}) => {
  const firstLevelNumber = (partNumber - 1) * 10 + 1;
  const lastLevelNumber = partNumber * 10;

  const getMajorEvents = () => {
    if (language === 'te' && summary.majorEvents_te && summary.majorEvents_te.length > 0) return summary.majorEvents_te;
    if (language === 'hi' && summary.majorEvents_hi && summary.majorEvents_hi.length > 0) return summary.majorEvents_hi;
    return summary.majorEvents;
  };

  const getImportantCharacters = () => {
    if (language === 'te' && summary.importantCharacters_te && summary.importantCharacters_te.length > 0) return summary.importantCharacters_te;
    if (language === 'hi' && summary.importantCharacters_hi && summary.importantCharacters_hi.length > 0) return summary.importantCharacters_hi;
    return summary.importantCharacters;
  };

  const getImportantRelationships = () => {
    if (language === 'te' && summary.importantRelationships_te && summary.importantRelationships_te.length > 0) return summary.importantRelationships_te;
    if (language === 'hi' && summary.importantRelationships_hi && summary.importantRelationships_hi.length > 0) return summary.importantRelationships_hi;
    return summary.importantRelationships;
  };

  const getMajorDecisions = () => {
    if (language === 'te' && summary.majorDecisions_te && summary.majorDecisions_te.length > 0) return summary.majorDecisions_te;
    if (language === 'hi' && summary.majorDecisions_hi && summary.majorDecisions_hi.length > 0) return summary.majorDecisions_hi;
    return summary.majorDecisions;
  };

  const getConsequences = () => {
    if (language === 'te' && summary.consequences_te && summary.consequences_te.length > 0) return summary.consequences_te;
    if (language === 'hi' && summary.consequences_hi && summary.consequences_hi.length > 0) return summary.consequences_hi;
    return summary.consequences;
  };

  const majorEvents = getMajorEvents();
  const importantCharacters = getImportantCharacters();
  const importantRelationships = getImportantRelationships();
  const majorDecisions = getMajorDecisions();
  const consequences = getConsequences();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Title Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-serif">
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            {language === 'te' ? 'కథ ముగింపు సమాలోచన' : language === 'hi' ? 'कथा सारांश एवं बोध' : 'Story Mastery & Review'}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-royal font-bold text-amber-100">
          {language === 'te'
            ? `${partNumber}వ భాగంలో మీరు నేర్చుకున్న ముఖ్య విషయాలు`
            : language === 'hi'
            ? `पर्व ${partNumber} में आपने क्या सीखा?`
            : `What You Learned in Chapter ${partNumber}`}
        </h2>
        <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto font-serif">
          {partTitle}
        </p>
      </div>

      {/* Main Grid: Major Events & Key Characters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Major Events Card */}
        <div className="bg-[#0e162d]/90 rounded-2xl border border-amber-500/30 p-5 space-y-3.5 shadow-lg">
          <h3 className="font-royal font-bold text-amber-200 text-sm md:text-base flex items-center space-x-2 border-b border-amber-500/20 pb-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>
              {language === 'te' ? 'ప్రధాన ఘట్టాలు' : language === 'hi' ? 'प्रमुख घटनाएं' : 'Major Epic Milestones'}
            </span>
          </h3>

          <ul className="space-y-2.5 text-xs md:text-sm text-slate-200 font-serif leading-relaxed">
            {majorEvents.map((event, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-amber-400 font-bold text-xs mt-0.5">•</span>
                <span>{event}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Characters Card */}
        <div className="bg-[#0e162d]/90 rounded-2xl border border-amber-500/30 p-5 space-y-3.5 shadow-lg">
          <h3 className="font-royal font-bold text-amber-200 text-sm md:text-base flex items-center space-x-2 border-b border-amber-500/20 pb-2.5">
            <Users className="w-4 h-4 text-blue-400" />
            <span>
              {language === 'te' ? 'ముఖ్య పాత్రలు & వారి పాత్ర' : language === 'hi' ? 'प्रमुख पात्र एवं भूमिकाएं' : 'Pivotal Characters'}
            </span>
          </h3>

          <ul className="space-y-2.5 text-xs md:text-sm text-slate-200 font-serif leading-relaxed">
            {importantCharacters.map((charText, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold text-xs mt-0.5">✦</span>
                <span>{charText}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Relationships */}
        <div className="bg-[#0e162d]/90 rounded-2xl border border-amber-500/30 p-5 space-y-3.5 shadow-lg">
          <h3 className="font-royal font-bold text-amber-200 text-sm md:text-base flex items-center space-x-2 border-b border-amber-500/20 pb-2.5">
            <GitFork className="w-4 h-4 text-purple-400" />
            <span>
              {language === 'te' ? 'సంబంధాలు & బంధాలు' : language === 'hi' ? 'प्रमुख संबंध एवं गठजोड़' : 'Key Relationships & Dynamics'}
            </span>
          </h3>

          <ul className="space-y-2.5 text-xs md:text-sm text-slate-200 font-serif leading-relaxed">
            {importantRelationships.map((rel, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-purple-400 font-bold text-xs mt-0.5">♦</span>
                <span>{rel}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decisions & Consequences */}
        <div className="bg-[#0e162d]/90 rounded-2xl border border-amber-500/30 p-5 space-y-3.5 shadow-lg">
          <h3 className="font-royal font-bold text-amber-200 text-sm md:text-base flex items-center space-x-2 border-b border-amber-500/20 pb-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>
              {language === 'te' ? 'కీలక నిర్ణయాలు & పర్యవసానాలు' : language === 'hi' ? 'निर्णय एवं उनके परिणाम' : 'Major Decisions & Consequences'}
            </span>
          </h3>

          <div className="space-y-3 text-xs md:text-sm text-slate-200 font-serif leading-relaxed">
            <div>
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                {language === 'te' ? 'నిర్ణయాలు:' : language === 'hi' ? 'निर्णय:' : 'Decisions:'}
              </span>
              <ul className="space-y-1 pl-2">
                {majorDecisions.map((dec, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-amber-400">•</span>
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-amber-500/15">
              <span className="text-[11px] font-semibold text-rose-300 uppercase tracking-wider block mb-1">
                {language === 'te' ? 'పర్యవసానాలు:' : language === 'hi' ? 'परिणाम:' : 'Consequences:'}
              </span>
              <ul className="space-y-1 pl-2">
                {consequences.map((con, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-rose-400">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Launch Box */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/40 via-yellow-950/30 to-amber-950/40 border-2 border-amber-400/60 text-center space-y-4 shadow-[0_0_40px_rgba(245,158,11,0.25)]">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-royal font-bold">
          <Compass className="w-3.5 h-3.5" />
          <span>
            {language === 'te'
              ? `స్థాయిలు ${firstLevelNumber} – ${lastLevelNumber} (మొత్తం 10 క్విజ్ స్థాయిలు)`
              : language === 'hi'
              ? `स्तर ${firstLevelNumber} – ${lastLevelNumber} (कुल 10 प्रश्नोत्तरी स्तर)`
              : `Levels ${firstLevelNumber} – ${lastLevelNumber} (10 Quiz Levels for Part ${partNumber})`}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-royal font-bold text-amber-100">
          {language === 'te' ? 'మీరు సవాలుకు సిద్ధంగా ఉన్నారా?' : language === 'hi' ? 'क्या आप चुनौती के लिए तैयार हैं?' : 'Ready for the 10-Level Challenge?'}
        </h3>

        <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto font-serif">
          {language === 'te'
            ? `మీరు ఇప్పుడే చదివిన ${partNumber}వ భాగం కథ ఆధారంగా 10 క్విజ్ ప్రశ్నలు రూపొందించబడ్డాయి. ప్రారంభించండి!`
            : language === 'hi'
            ? `इस कथा से जुड़े 10 ज्ञानवर्धक स्तर आपकी प्रतीक्षा कर रहे हैं। अपनी विद्वता सिद्ध कीजिए!`
            : `The upcoming 10 quiz levels test your mastery over the events, characters, and wisdom of this chapter.`}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              audioService.playClick();
              onReviewStory();
            }}
            className="px-5 py-3 rounded-xl border border-amber-500/40 hover:bg-amber-500/15 text-amber-200 text-xs md:text-sm font-royal font-semibold flex items-center space-x-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>{language === 'te' ? 'కథను మళ్ళీ చదవండి' : language === 'hi' ? 'कथा पुनः पढ़ें' : 'Review Story'}</span>
          </button>

          <button
            onClick={() => {
              audioService.playClick();
              onBeginLevels();
            }}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm md:text-base font-royal tracking-wider flex items-center space-x-2.5 shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all hover:scale-105 active:scale-95"
          >
            <Play className="w-5 h-5 fill-slate-950" />
            <span>
              {language === 'te'
                ? `లెవల్ ${firstLevelNumber} ప్రారంభించండి`
                : language === 'hi'
                ? `स्तर ${firstLevelNumber} आरंभ करें`
                : `BEGIN LEVEL ${firstLevelNumber}`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
