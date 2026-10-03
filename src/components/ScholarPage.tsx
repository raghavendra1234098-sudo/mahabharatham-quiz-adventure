import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { ScholarCertificate } from './ScholarCertificate';
import {
  ArrowLeft,
  Download,
  Printer,
  Share2,
  Award,
  Sparkles,
  Lock,
  Play,
  Edit3,
  CheckCircle2,
  Check,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioService } from '../services/audioService';

export const ScholarPage: React.FC = () => {
  const { setScreen, progress, saveScholarCertificate, openLevel } = useGame();

  // Strict Unlock Condition: All 100 levels must be completed (Requirement 1 & 7)
  const isUnlocked = progress.completedLevels.length >= 100;

  // Ceremony viewed tracker
  const [showCeremony, setShowCeremony] = useState<boolean>(() => {
    if (progress.completedLevels.length < 100) return false;
    return !localStorage.getItem('mahabharata_scholar_ceremony_viewed');
  });

  const [name, setName] = useState(progress.scholarDetails?.fullName || '');
  const [date, setDate] = useState(
    progress.scholarDetails?.completionDate ||
      new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
  );
  const [certId, setCertId] = useState(
    progress.scholarDetails?.certificateId || 'MQA-SCHOLAR-VEDIC-2026'
  );

  const [isNameConfirmed, setIsNameConfirmed] = useState(
    Boolean(progress.scholarDetails?.fullName && progress.scholarDetails.fullName.trim().length > 0)
  );

  const [isDownloading, setIsDownloading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Play fanfare on initial ceremony unlock
  useEffect(() => {
    if (isUnlocked && showCeremony) {
      audioService.playVictoryFanfare();
    }
  }, [isUnlocked, showCeremony]);

  // Handle Name Confirmation / Generation
  const handleGenerateCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const id = saveScholarCertificate(name.trim(), date);
    setCertId(id);
    setIsNameConfirmed(true);

    audioService.playShankhaSound();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#ffd700', '#f59e0b', '#3b82f6', '#10b981', '#ffffff'],
    });
  };

  // Generate 2048x1364 Ultra-HD Canvas of the Approved Certificate
  const generateCertificateCanvas = async (): Promise<HTMLCanvasElement | null> => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1364; // Exact 3:2 aspect ratio of approved 1024x682 design
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const baseImg = new Image();
    baseImg.crossOrigin = 'anonymous';
    baseImg.src = '/assets/certificates/scholar-certificate-clean.jpg';

    await new Promise<void>((resolve, reject) => {
      baseImg.onload = () => resolve();
      baseImg.onerror = () => reject(new Error('Failed to load certificate template'));
    });

    // Draw approved certificate base
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

    // Dynamic User Name
    const certificateUserName = (name || progress.scholarDetails?.fullName || 'Noble Scholar').trim();

    // Scale font size dynamically based on length
    let fontSize = 88;
    if (certificateUserName.length > 26) fontSize = 56;
    else if (certificateUserName.length > 18) fontSize = 68;
    else if (certificateUserName.length > 12) fontSize = 78;

    ctx.font = `italic 700 ${fontSize}px "Playfair Display", "Cormorant Garamond", "Alex Brush", Georgia, serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Subtle paper ink shadow for authentic realism
    ctx.shadowColor = 'rgba(13, 30, 61, 0.35)';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    ctx.fillStyle = '#0d1e3d'; // Approved deep royal navy ink

    // Exact center coordinates scaled to 2048x1364 (44.0% vertical center where Raghavendra appeared)
    const targetX = canvas.width * 0.5;
    const targetY = canvas.height * 0.440;

    ctx.fillText(certificateUserName, targetX, targetY);

    return canvas;
  };

  // High-Resolution PNG Download (Requirement 4)
  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const canvas = await generateCertificateCanvas();
      if (!canvas) {
        showToast('Failed to generate certificate.');
        return;
      }

      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      const safeName = (name.trim() || 'Scholar').replace(/\s+/g, '_');
      link.download = `Mahabharata_Scholar_Certificate_${safeName}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('Certificate successfully downloaded to your device!');
    } catch (err) {
      console.error('Download error:', err);
      showToast('Error generating certificate image.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Print Certificate (Requirement 3 & 4)
  const handlePrint = () => {
    window.print();
  };

  // Web Share Integration (Requirement 5)
  const handleShare = async () => {
    try {
      const canvas = await generateCertificateCanvas();
      if (!canvas) return;

      const safeName = (name.trim() || 'Scholar').replace(/\s+/g, '_');

      canvas.toBlob(async (blob) => {
        if (!blob) {
          handleDownload();
          return;
        }

        const file = new File([blob], `Mahabharata_Scholar_Certificate_${safeName}.png`, {
          type: 'image/png',
        });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: 'Mahabharata Scholar Certificate',
              text: `I have completed all 50 levels of the Mahabharatham Quiz Adventure and earned the prestigious title of Mahabharata Scholar! 📜🪷`,
              files: [file],
            });
            showToast('Certificate shared successfully!');
          } catch (err: any) {
            if (err?.name !== 'AbortError') {
              handleDownload();
            }
          }
        } else if (navigator.share) {
          try {
            await navigator.share({
              title: 'Mahabharata Scholar Certificate',
              text: `I have completed all 50 levels of the Mahabharatham Quiz Adventure and earned the prestigious title of Mahabharata Scholar! 📜🪷`,
            });
            showToast('Achievement shared!');
          } catch (err) {}
        } else {
          handleDownload();
          showToast('Sharing not supported on this browser. Certificate downloaded!');
        }
      }, 'image/png');
    } catch (e) {
      handleDownload();
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // 1. LOCKED VIEW (Requirement 7: Must NOT be accessible before 50 levels)
  // ═══════════════════════════════════════════════════════════════
  if (!isUnlocked) {
    return (
      <div className="min-h-screen w-full relative bg-[#05070e] p-4 md:p-8 text-amber-50 overflow-hidden flex flex-col justify-between">
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <img
            src="/assets/quiz-bg-kurukshetra.jpg"
            alt="Historical Background"
            className="w-full h-full object-cover opacity-20 filter contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070e] via-[#070b16]/85 to-[#05070e]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto w-full my-auto space-y-6 text-center">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#a67c2e]/40">
            <button
              onClick={() => setScreen('home')}
              className="px-4 py-2 rounded-xl bg-[#140e05] border border-[#a67c2e]/70 text-amber-200 hover:text-amber-100 flex items-center space-x-2 font-royal font-bold text-xs uppercase tracking-wider transition-all cursor-pointer hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Return Home</span>
            </button>
            <div className="text-right">
              <span className="text-xs text-amber-400 font-royal font-bold block uppercase">
                Milestone Status
              </span>
              <span className="text-sm font-bold text-amber-200">
                {progress.completedLevels.length}/100 Levels
              </span>
            </div>
          </div>

          {/* Locked Medallion Card */}
          <div className="royal-stone-panel p-6 sm:p-8 rounded-3xl border-2 border-[#a67c2e]/70 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.2)] space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-b from-[#2a1d0d] to-[#120c04] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              <Lock className="w-8 h-8 text-amber-400" />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400/90 font-royal block">
                The Supreme Honor of Aryavarta
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-royal gold-gradient-text tracking-wider">
                MAHABHARATA SCHOLAR CERTIFICATE
              </h1>
              <p className="text-xs sm:text-sm text-amber-200/80 max-w-xl mx-auto font-serif leading-relaxed pt-1">
                This prestigious royal certificate is awarded exclusively to seekers who conquer all <strong>100 levels</strong> and explore all <strong>10 story chapters</strong> of the Mahabharatham.
              </p>
            </div>

            {/* Live Progress Bar Tablet */}
            <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#140e05]/90 border border-[#a67c2e]/60 space-y-3">
              <div className="flex items-center justify-between text-xs font-royal font-bold">
                <span className="text-amber-300">Conquest Progress</span>
                <span className="text-amber-100">{progress.completedLevels.length} / 100 Levels</span>
              </div>
              <div className="w-full h-3 rounded-full bg-[#1e2538] border border-amber-500/30 overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-500 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                  style={{ width: `${(progress.completedLevels.length / 100) * 100}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-amber-400/70 font-serif">
                <span>Story Parts: {progress.currentStoryPart} / 10 Explored</span>
                <span>{100 - progress.completedLevels.length} Levels Remaining</span>
              </div>
            </div>

            {/* Frosted Preview of Approved Artwork */}
            <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden border border-[#a67c2e]/50 shadow-inner group">
              <img
                src="/assets/certificates/scholar-certificate-clean.jpg"
                alt="Certificate Locked Preview"
                className="w-full h-auto filter blur-[2px] brightness-50 contrast-125"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
                <div className="w-12 h-12 rounded-full bg-amber-950/90 border border-amber-400/80 flex items-center justify-center shadow-lg mb-2">
                  <Lock className="w-6 h-6 text-amber-300" />
                </div>
                <span className="text-xs font-royal font-black uppercase tracking-wider text-amber-200">
                  Complete Level 100 to Unlock
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => openLevel(progress.currentLevel)}
                className="w-full sm:w-auto py-3 px-8 rounded-xl royal-action-btn text-slate-950 font-black font-royal text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg cursor-pointer hover:scale-105 active:scale-95"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Continue Journey • Play Level {progress.currentLevel}</span>
              </button>
              <button
                onClick={() => setScreen('story_map')}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#1a140b] hover:bg-[#251a0d] border border-[#a67c2e]/70 text-amber-200 font-royal font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                View Story Map
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // 2. CINEMATIC COMPLETION MOMENT (Requirement 9)
  // ═══════════════════════════════════════════════════════════════
  if (showCeremony) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070e]/95 backdrop-blur-xl animate-fadeIn overflow-hidden">
        {/* Background Light Rays */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.35)_0%,_transparent_70%)] animate-pulse" />
        </div>

        {/* Floating Embers */}
        <div className="ember-particle w-2 h-2 top-[30%] left-[20%]" />
        <div className="ember-particle w-2.5 h-2.5 top-[60%] left-[80%]" />
        <div className="ember-particle w-1.5 h-1.5 top-[80%] left-[30%]" />

        <div className="relative z-10 max-w-xl mx-auto w-full text-center space-y-6 p-8 rounded-3xl royal-stone-panel border-2 border-[#d4af37] shadow-[0_0_60px_rgba(212,175,55,0.4)]">
          {/* Sacred Lotus */}
          <div className="w-16 h-16 mx-auto rounded-full bg-[#3d2a13] border-2 border-[#d4af37] flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(212,175,55,0.5)]">
            🪷
          </div>

          {/* Sequential Cinematic Text */}
          <div className="space-y-3">
            <span className="text-xs md:text-sm font-royal font-bold tracking-[0.35em] text-amber-400 uppercase block">
              100 LEVELS COMPLETE
            </span>
            <span className="text-xs md:text-sm font-royal font-bold tracking-[0.3em] text-amber-300 uppercase block">
              10 STORY PARTS COMPLETE
            </span>
            <div className="py-1">
              <span className="text-xs md:text-sm text-amber-200/80 font-serif italic tracking-wider block">
                — You Have Become A —
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-royal gold-gradient-text tracking-wider drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              MAHABHARATA SCHOLAR
            </h1>
            <p className="text-xs md:text-sm text-amber-200/90 font-serif max-w-md mx-auto pt-1">
              "यतो धर्मस्ततो जयः • Where there is Dharma, there is Victory"
            </p>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={() => {
              localStorage.setItem('mahabharata_scholar_ceremony_viewed', 'true');
              setShowCeremony(false);
            }}
            className="w-full py-4 px-8 rounded-2xl royal-action-btn text-slate-950 font-black font-royal text-sm md:text-base uppercase tracking-widest flex items-center justify-center space-x-2 shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all"
          >
            <Award className="w-5 h-5 text-slate-950" />
            <span>VIEW YOUR CERTIFICATE</span>
          </button>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // 3. NAME ENTRY / PERSONALIZATION (Requirement 2)
  // ═══════════════════════════════════════════════════════════════
  if (!isNameConfirmed) {
    return (
      <div className="min-h-screen w-full relative bg-[#05070e] p-4 md:p-8 text-amber-50 overflow-hidden flex flex-col justify-between">
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none">
          <img
            src="/assets/quiz-bg-kurukshetra.jpg"
            alt="Historical Background"
            className="w-full h-full object-cover opacity-20 filter contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070e] via-[#070b16]/85 to-[#05070e]" />
        </div>

        <div className="relative z-10 max-w-xl mx-auto w-full my-auto space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#a67c2e]/40">
            <button
              onClick={() => setScreen('home')}
              className="px-4 py-2 rounded-xl bg-[#140e05] border border-[#a67c2e]/70 text-amber-200 hover:text-amber-100 flex items-center space-x-2 font-royal font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Return Home</span>
            </button>
            <span className="text-xs font-royal font-bold text-amber-400 uppercase">
              Step 1 of 2 • Name Entry
            </span>
          </div>

          <div className="royal-stone-panel p-6 sm:p-8 rounded-3xl border-2 border-[#d4af37] shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.25)] space-y-5 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#3d2a13] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)]">
              <Award className="w-8 h-8 text-yellow-300" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black font-royal text-amber-100">
                Congratulations!
              </h2>
              <p className="text-xs sm:text-sm text-amber-300/90 font-serif">
                You have completed the Mahabharata Quiz Adventure.
              </p>
              <p className="text-xs text-slate-300 font-serif pt-1">
                Enter your name for your official Mahabharata Scholar Certificate:
              </p>
            </div>

            <form onSubmit={handleGenerateCertificate} className="space-y-4 text-left pt-2">
              <div>
                <label className="text-xs font-royal font-bold text-amber-300 block mb-1.5 uppercase tracking-wider">
                  Recipient Full Name *
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name (e.g. Arjuna Sharma)"
                  className="w-full px-4 py-3 rounded-xl bg-[#10172e] border-2 border-amber-500/50 text-amber-100 placeholder-amber-400/40 focus:border-amber-400 focus:outline-none text-base font-royal font-bold shadow-inner"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-royal font-bold text-amber-400/80 block mb-1 uppercase">
                    Completion Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#10172e]/80 border border-slate-700 text-slate-200 text-xs font-serif"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-royal font-bold text-amber-400/80 block mb-1 uppercase">
                    Credential ID
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={certId}
                    className="w-full px-3 py-2 rounded-xl bg-[#0c1224] border border-slate-800 text-slate-400 text-xs font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl royal-action-btn text-slate-950 font-black font-royal text-sm uppercase tracking-widest flex items-center justify-center space-x-2 shadow-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Award className="w-5 h-5 text-slate-950" />
                <span>GENERATE CERTIFICATE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════
  // 4. PREMIUM FULL-SCREEN CERTIFICATE VIEWER (Requirement 3, 4, 5, 8)
  // ═══════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen w-full relative bg-[#05070e] p-3 sm:p-6 md:p-8 text-amber-50 overflow-x-hidden flex flex-col justify-between">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <img
          src="/assets/quiz-bg-kurukshetra.jpg"
          alt="Historical Background"
          className="w-full h-full object-cover opacity-20 filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070e] via-[#070b16]/85 to-[#05070e]" />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-amber-500 text-slate-950 font-royal font-bold text-xs uppercase tracking-wider shadow-2xl animate-bounce flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-slate-950" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6">
        
        {/* Navigation & Action Header */}
        <div className="p-3 sm:p-4 rounded-2xl royal-stone-panel border-[#a67c2e]/70 flex items-center justify-between shadow-xl">
          <button
            onClick={() => setScreen('home')}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-b from-[#24180a] to-[#120c04] border border-[#a67c2e]/70 hover:border-amber-400 text-amber-200 hover:text-amber-100 flex items-center space-x-2 font-royal font-bold text-xs uppercase tracking-wider transition-all cursor-pointer hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Back</span>
          </button>

          <div className="text-center">
            <h1 className="text-sm sm:text-base md:text-xl font-black font-royal gold-gradient-text tracking-wider">
              MAHABHARATA SCHOLAR CERTIFICATE
            </h1>
            <span className="text-[10px] text-amber-400/80 font-serif hidden sm:inline-block">
              Official Award of Civilizational Excellence • Verified by Dharma Council
            </span>
          </div>

          <button
            onClick={() => setIsNameConfirmed(false)}
            className="px-3 py-1.5 rounded-xl bg-[#140e05] hover:bg-[#251a0d] border border-[#a67c2e]/70 text-amber-300 text-xs font-royal font-semibold flex items-center space-x-1.5 transition-all cursor-pointer"
            title="Edit Name on Certificate"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Edit Name</span>
          </button>
        </div>

        {/* The Approved High-Resolution Certificate Viewer */}
        <div className="w-full flex justify-center py-2">
          <ScholarCertificate
            certificateUserName={name}
            fullName={name}
            completionDate={date}
            certificateId={certId}
          />
        </div>

        {/* Action Controls Toolbar (Requirement 3, 4, 5) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          {/* Download Certificate */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="py-3 px-6 sm:px-8 rounded-xl royal-action-btn text-slate-950 font-black font-royal text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-2 shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>{isDownloading ? 'Generating HD Image...' : '⬇ DOWNLOAD CERTIFICATE'}</span>
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="py-3 px-6 rounded-xl bg-gradient-to-b from-[#24180a] to-[#120c04] hover:bg-[#2c1d0d] border border-[#d4af37]/80 text-amber-200 font-bold font-royal text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-2 shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>🖨 PRINT</span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="py-3 px-6 rounded-xl bg-gradient-to-b from-[#24180a] to-[#120c04] hover:bg-[#2c1d0d] border border-[#d4af37]/80 text-amber-200 font-bold font-royal text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-2 shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
          >
            <Share2 className="w-4 h-4 text-amber-400" />
            <span>↗ SHARE</span>
          </button>

          {/* Replay Ceremony */}
          <button
            onClick={() => setShowCeremony(true)}
            className="py-3 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-amber-300 font-serif text-xs flex items-center space-x-1.5 transition-all cursor-pointer"
            title="Replay Cinematic Milestone Ceremony"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Replay Ceremony</span>
          </button>
        </div>

        {/* Verification & Permanent Storage Subtext (Requirement 8) */}
        <p className="text-center text-[11px] text-amber-400/60 font-serif">
          ✦ Permanently tied to your player profile • You can return to view, download, or reprint anytime. ✦
        </p>
      </div>
    </div>
  );
};
