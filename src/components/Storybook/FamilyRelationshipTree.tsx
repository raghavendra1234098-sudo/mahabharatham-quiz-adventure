import React, { useState } from 'react';
import { FamilyTreeData, FamilyTreeNode, FamilyTreeLink } from '../../types/game';
import { audioService } from '../../services/audioService';
import { GitBranch, Heart, ArrowRight, Shield, Award, Users, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

interface FamilyRelationshipTreeProps {
  treeData: FamilyTreeData;
  language: 'en' | 'te' | 'hi';
  onContinueToStory: () => void;
  onBackToCharacters: () => void;
}

export const FamilyRelationshipTree: React.FC<FamilyRelationshipTreeProps> = ({
  treeData,
  language,
  onContinueToStory,
  onBackToCharacters
}) => {
  const [selectedClan, setSelectedClan] = useState<string>('All');
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const getTreeTitle = () => {
    if (language === 'te' && treeData.title_te) return treeData.title_te;
    if (language === 'hi' && treeData.title_hi) return treeData.title_hi;
    return treeData.title;
  };

  const getTreeDescription = () => {
    if (language === 'te' && treeData.description_te) return treeData.description_te;
    if (language === 'hi' && treeData.description_hi) return treeData.description_hi;
    return treeData.description;
  };

  const getNodeName = (node: FamilyTreeNode) => {
    if (language === 'te' && node.name_te) return node.name_te;
    if (language === 'hi' && node.name_hi) return node.name_hi;
    return node.name;
  };

  const getNodeRole = (node: FamilyTreeNode) => {
    if (language === 'te' && node.role_te) return node.role_te;
    if (language === 'hi' && node.role_hi) return node.role_hi;
    return node.role || '';
  };

  const getClanBadgeColor = (clan?: string) => {
    switch (clan) {
      case 'Pandava':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Kaurava':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 'Kuru':
      case 'Lunar Dynasty':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Yadava':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'Panchala':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'Matsya':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'Sage / Celestial':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/40';
    }
  };

  const getRelationshipPill = (rel: FamilyTreeLink['relationship']) => {
    switch (rel) {
      case 'parent_of':
        return { label: language === 'te' ? 'తల్లి/తండ్రి' : language === 'hi' ? 'माता/पिता' : 'Parent of', color: 'text-amber-300 border-amber-500/30 bg-amber-500/10' };
      case 'married_to':
        return { label: language === 'te' ? 'వివాహం' : language === 'hi' ? 'विवाह' : 'Married to', color: 'text-pink-300 border-pink-500/30 bg-pink-500/10' };
      case 'brother_of':
        return { label: language === 'te' ? 'సోదరులు' : language === 'hi' ? 'सहोदर' : 'Brother / Sibling', color: 'text-blue-300 border-blue-500/30 bg-blue-500/10' };
      case 'alliance':
        return { label: language === 'te' ? 'మైత్రి / సంబంధం' : language === 'hi' ? 'मैत्री / गठबंधन' : 'Alliance / Bond', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' };
      case 'mentor_of':
        return { label: language === 'te' ? 'గురువు' : language === 'hi' ? 'गुरु / शिष्य' : 'Mentor of', color: 'text-purple-300 border-purple-500/30 bg-purple-500/10' };
      case 'rivalry':
        return { label: language === 'te' ? 'వైరం / శత్రుత్వం' : language === 'hi' ? 'प्रतिद्वंद्विता' : 'Rivalry / Enmity', color: 'text-red-300 border-red-500/30 bg-red-500/10' };
      default:
        return { label: 'Related', color: 'text-slate-300 border-slate-500/30 bg-slate-500/10' };
    }
  };

  // Unique clans for filter
  const allClans = ['All', ...Array.from(new Set(treeData.nodes.map((n) => n.clan).filter(Boolean))) as string[]];

  const filteredNodes = selectedClan === 'All'
    ? treeData.nodes
    : treeData.nodes.filter((n) => n.clan === selectedClan);

  // Group by generation
  const generations = Array.from(new Set(filteredNodes.map((n) => n.generation))).sort((a, b) => a - b);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Title Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif">
          <GitBranch className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {language === 'te' ? 'వంశ వృక్షం & సంబంధ బాంధవ్యాలు' : language === 'hi' ? 'वंश-वृक्ष एवं संबंध-मानचित्र' : 'Genealogy & Alliance Map'}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-royal font-bold text-amber-100">
          {getTreeTitle()}
        </h2>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-serif">
          {getTreeDescription()}
        </p>
      </div>

      {/* Clan Filter Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {allClans.map((clan) => (
          <button
            key={clan}
            onClick={() => {
              audioService.playClick();
              setSelectedClan(clan);
            }}
            className={`px-3 py-1 rounded-full text-xs font-serif transition-all ${
              selectedClan === clan
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            {clan}
          </button>
        ))}
      </div>

      {/* Tree Visual Flow (Generation Tiers) */}
      <div className="space-y-6 bg-[#0a1124]/90 backdrop-blur-md rounded-3xl border border-amber-500/30 p-5 md:p-7 shadow-xl">
        {generations.map((gen) => {
          const genNodes = filteredNodes.filter((n) => n.generation === gen);
          return (
            <div key={gen} className="space-y-3">
              {/* Generation Tag */}
              <div className="flex items-center space-x-3">
                <span className="text-[11px] font-royal font-bold text-amber-400 uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30">
                  {language === 'te' ? `${gen}వ తరం` : language === 'hi' ? `पीढ़ी ${gen}` : `Generation ${gen}`}
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-500/30 via-amber-500/10 to-transparent" />
              </div>

              {/* Node Cards in this generation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {genNodes.map((node) => {
                  const isSelected = activeNodeId === node.id;
                  const relevantLinks = treeData.links.filter(
                    (l) => l.from === node.id || l.to === node.id
                  );

                  return (
                    <div
                      key={node.id}
                      onClick={() => {
                        audioService.playClick();
                        setActiveNodeId(isSelected ? null : node.id);
                      }}
                      className={`cursor-pointer rounded-2xl p-3.5 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1e2a4d] border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] scale-[1.02]'
                          : 'bg-[#0f1830]/90 hover:bg-[#162345] border-amber-500/30 hover:border-amber-400/60'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {/* Avatar / Portrait */}
                        {node.avatarUrl ? (
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-400/60 flex-shrink-0 bg-slate-900">
                            <img
                              src={node.avatarUrl}
                              alt={node.name}
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-300 font-royal font-bold text-sm">
                            {node.name.slice(0, 2)}
                          </div>
                        )}

                        {/* Name & Clan */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            {node.clan && (
                              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${getClanBadgeColor(node.clan)}`}>
                                {node.clan}
                              </span>
                            )}
                            {node.isKeyCharacter && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 flex items-center space-x-0.5">
                                <Sparkles className="w-2.5 h-2.5 fill-slate-950" />
                                <span>KEY</span>
                              </span>
                            )}
                          </div>

                          <h4 className="font-royal font-bold text-amber-100 text-sm truncate">
                            {getNodeName(node)}
                          </h4>
                          <p className="text-[11px] text-slate-300/80 font-serif truncate">
                            {getNodeRole(node)}
                          </p>
                        </div>
                      </div>

                      {/* Tap to inspect connected links */}
                      {relevantLinks.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-amber-500/15 flex items-center justify-between text-[10px] text-amber-300/80">
                          <span>{relevantLinks.length} {language === 'te' ? 'సంబంధాలు' : language === 'hi' ? 'संबंध' : 'connections'}</span>
                          <span className="text-amber-400 font-medium">
                            {isSelected ? '▲ Hide' : '▼ Details'}
                          </span>
                        </div>
                      )}

                      {/* Expanded Connections for this card */}
                      {isSelected && relevantLinks.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-amber-400/40 space-y-1.5 bg-black/30 p-2.5 rounded-xl animate-in fade-in duration-150">
                          <span className="text-[10px] font-semibold text-amber-300 block uppercase tracking-wider">
                            {language === 'te' ? 'కనెక్ట్ అయిన సంబంధాలు:' : language === 'hi' ? 'जुड़े हुए संबंध:' : 'Direct Connections:'}
                          </span>
                          {relevantLinks.map((link, idx) => {
                            const otherNodeId = link.from === node.id ? link.to : link.from;
                            const otherNode = treeData.nodes.find((n) => n.id === otherNodeId);
                            const pill = getRelationshipPill(link.relationship);
                            return (
                              <div key={idx} className="flex items-center justify-between text-[11px] font-serif text-slate-200 py-0.5">
                                <span className={`px-1.5 py-0.5 rounded border text-[9px] ${pill.color}`}>
                                  {pill.label}
                                </span>
                                <span className="font-semibold text-amber-200">
                                  {otherNode ? getNodeName(otherNode) : otherNodeId}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Relationship Glossary / Key Connections Section */}
      <div className="bg-[#0e162d]/90 rounded-2xl border border-amber-500/25 p-5 space-y-3">
        <h4 className="font-royal font-bold text-amber-200 text-sm flex items-center space-x-2">
          <Heart className="w-4 h-4 text-pink-400" />
          <span>
            {language === 'te' ? 'ముఖ్యమైన సంబంధాలు & బంధాలు' : language === 'hi' ? 'प्रमुख संबंध एवं गठजोड़' : 'Key Relationships & Alliances in this Chapter'}
          </span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {treeData.links.map((link, idx) => {
            const fromNode = treeData.nodes.find((n) => n.id === link.from);
            const toNode = treeData.nodes.find((n) => n.id === link.to);
            const pill = getRelationshipPill(link.relationship);

            return (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-serif"
              >
                <span className="font-royal font-semibold text-amber-200 truncate max-w-[35%]">
                  {fromNode ? getNodeName(fromNode) : link.from}
                </span>

                <div className="flex flex-col items-center px-2 flex-shrink-0">
                  <span className={`px-2 py-0.5 rounded-full border text-[9px] font-medium ${pill.color}`}>
                    {pill.label}
                  </span>
                  <span className="text-[10px] text-amber-400/80 font-serif italic mt-0.5">
                    {link.label || '↔'}
                  </span>
                </div>

                <span className="font-royal font-semibold text-amber-100 truncate max-w-[35%] text-right">
                  {toNode ? getNodeName(toNode) : link.to}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-500/20">
        <button
          onClick={() => {
            audioService.playClick();
            onBackToCharacters();
          }}
          className="px-4 py-2.5 rounded-xl border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-amber-200 text-xs font-royal transition-colors"
        >
          ← {language === 'te' ? 'పాత్రల జాబితా' : language === 'hi' ? 'पात्र सूची' : 'Back to Characters'}
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
  );
};
