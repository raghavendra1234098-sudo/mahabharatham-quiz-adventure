/**
 * Original Modern Indian Cinematic Flute Theme & Vedic Atmosphere Synthesizer.
 * Crafted for "Mahabharatham Quiz Adventure":
 *
 * THEME CHARACTER:
 * - Soulful, expressive Indian Bamboo Bansuri Lead with human microtonal bends (meend),
 *   breath turbulence, grace-note ornaments (gamakas/murkis), and delayed expressive vibrato.
 * - UNFORGETTABLE MAIN HOOK: Catchy, hummable, emotionally powerful melodic motif in D-Kiravani/Charukesi.
 * - MUSICAL PROGRESSION:
 *     1. INTRO (0s-12s): Soft mysterious flute over ancient Tanpura drone and distant heartbeat.
 *     2. MELODY (12s-24s): Beautiful, crystal-clear statement of the Catchy Main Flute Hook.
 *     3. BUILD-UP (24s-36s): Rhythmic mridangam/taiko pulse and warm cinematic strings swell.
 *     4. THRILL (36s-48s): High-energy South Indian cinematic flute phrases with soaring high notes.
 *     5. PEAK (48s-64s): Grand triumphant return of the Main Hook with epic cinematic power.
 *     6. LOOP TRANSITION (64s-72s): Serene spiritual resolution dissolving smoothly back into Intro.
 * - Seamless 72-second continuous lookahead scheduling loop in Web Audio API.
 */

interface FluteNote {
  t: number;          // Time offset in seconds from cycle start
  f: number;          // Target frequency in Hz
  d: number;          // Duration in seconds
  slideFrom?: number; // Starting pitch for portamento (meend)
  slideMs?: number;   // Portamento glide duration
  graceFreq?: number; // Quick 35ms ornamental grace note (gamaka)
  vibratoDelay?: number; // Seconds before vibrato begins (default 0.22s)
  vibratoDepth?: number; // Vibrato depth in Hz (default 4.5Hz)
  velocity?: number;  // Velocity scale 0.0 - 1.0 (default 0.8)
}

interface StringChord {
  t: number;
  d: number;
  freqs: number[];
  vel: number;
}

// 72-second full orchestral cinematic score at 80 BPM
const CYCLE_DURATION = 72.0;

// === UNFORGETTABLE KRISHNA CINEMATIC FLUTE SCORE ===
const FLUTE_SCORE: FluteNote[] = [
  // ─── 1. INTRO (0.0s - 12.0s): Soft Mysterious Flute ───
  // Bar 3: Whispering entrance
  { t: 6.0,   f: 293.66, d: 1.2, slideFrom: 275.0,  velocity: 0.65, vibratoDelay: 0.4 }, // D4
  { t: 7.3,   f: 349.23, d: 0.9, slideFrom: 293.66, velocity: 0.70, vibratoDelay: 0.3 }, // F4
  { t: 8.3,   f: 440.00, d: 1.4, slideFrom: 392.00, velocity: 0.75, vibratoDelay: 0.3, vibratoDepth: 4.5 }, // A4
  // Bar 4: Mystical cascade
  { t: 9.9,   f: 587.33, d: 0.8, slideFrom: 440.00, velocity: 0.72, graceFreq: 523.25 }, // D5
  { t: 10.8,  f: 523.25, d: 0.4, velocity: 0.68 }, // C5
  { t: 11.25, f: 466.16, d: 0.45, velocity: 0.68 }, // Bb4
  { t: 11.75, f: 440.00, d: 1.4, slideFrom: 415.00, velocity: 0.70, vibratoDelay: 0.3 }, // A4

  // ─── 2. MELODY (12.0s - 24.0s): The Catchy Main Flute Hook ───
  // Bar 5: Signature Hook Phrase (Lyrical Call of Destiny)
  { t: 13.5,  f: 440.00, d: 0.55, velocity: 0.82 }, // A4
  { t: 14.1,  f: 587.33, d: 1.15, slideFrom: 440.00, velocity: 0.90, vibratoDelay: 0.25, vibratoDepth: 5.2 }, // D5 (THE CATCHY HOOK)
  { t: 15.3,  f: 523.25, d: 0.35, velocity: 0.82 }, // C5
  { t: 15.7,  f: 466.16, d: 0.35, velocity: 0.82 }, // Bb4
  { t: 16.1,  f: 440.00, d: 0.75, slideFrom: 466.16, velocity: 0.85, vibratoDelay: 0.2 }, // A4
  // Bar 6: Lyrical Response
  { t: 17.0,  f: 392.00, d: 0.35, velocity: 0.78 }, // G4
  { t: 17.4,  f: 440.00, d: 0.75, velocity: 0.82, vibratoDelay: 0.2 }, // A4
  { t: 18.25, f: 293.66, d: 0.35, velocity: 0.78 }, // D4
  { t: 18.65, f: 349.23, d: 0.35, velocity: 0.80 }, // F4
  { t: 19.05, f: 392.00, d: 0.35, velocity: 0.82 }, // G4
  { t: 19.45, f: 440.00, d: 0.85, slideFrom: 392.00, velocity: 0.85, vibratoDelay: 0.2 }, // A4
  // Bar 7: Heroic Ascent
  { t: 20.4,  f: 587.33, d: 0.75, slideFrom: 440.00, velocity: 0.88, graceFreq: 523.25 }, // D5
  { t: 21.2,  f: 554.37, d: 0.35, velocity: 0.85 }, // C#5
  { t: 21.6,  f: 587.33, d: 0.55, velocity: 0.88 }, // D5
  { t: 22.2,  f: 659.25, d: 0.55, slideFrom: 587.33, velocity: 0.90 }, // E5
  { t: 22.8,  f: 587.33, d: 1.15, velocity: 0.92, vibratoDelay: 0.25, vibratoDepth: 5.5 }, // D5
  // Bar 8: Emotional Cascade
  { t: 24.1,  f: 698.46, d: 0.55, slideFrom: 659.25, velocity: 0.90, graceFreq: 659.25 }, // F5
  { t: 24.7,  f: 659.25, d: 0.35, velocity: 0.85 }, // E5
  { t: 25.1,  f: 587.33, d: 0.35, velocity: 0.85 }, // D5
  { t: 25.5,  f: 523.25, d: 0.35, velocity: 0.82 }, // C5
  { t: 25.9,  f: 466.16, d: 0.35, velocity: 0.82 }, // Bb4
  { t: 26.3,  f: 440.00, d: 0.75, slideFrom: 466.16, velocity: 0.85 }, // A4
  { t: 27.1,  f: 392.00, d: 0.35, velocity: 0.80 }, // G4
  { t: 27.5,  f: 440.00, d: 0.95, velocity: 0.85, vibratoDelay: 0.2 }, // A4

  // ─── 3. BUILD-UP (28.0s - 40.0s): Rhythm and Cinematic Layers Increase ───
  // Bar 10: Soaring High Emotional Phrase
  { t: 28.7,  f: 587.33, d: 0.95, slideFrom: 440.00, velocity: 0.90 }, // D5
  { t: 29.7,  f: 659.25, d: 0.45, velocity: 0.88 }, // E5
  { t: 30.2,  f: 698.46, d: 1.25, slideFrom: 659.25, velocity: 0.94, vibratoDelay: 0.25, vibratoDepth: 6.0 }, // F5
  // Bar 11: Descending Dharma Cascade
  { t: 31.6,  f: 698.46, d: 0.35, velocity: 0.88 }, // F5
  { t: 32.0,  f: 659.25, d: 0.35, velocity: 0.88 }, // E5
  { t: 32.4,  f: 587.33, d: 0.55, velocity: 0.88 }, // D5
  { t: 33.0,  f: 523.25, d: 0.35, velocity: 0.85 }, // C5
  { t: 33.4,  f: 466.16, d: 0.55, velocity: 0.85 }, // Bb4
  { t: 34.0,  f: 440.00, d: 0.85, velocity: 0.88, vibratoDelay: 0.2 }, // A4
  // Bar 12: Resolution to Ground
  { t: 35.0,  f: 466.16, d: 0.45, velocity: 0.82 }, // Bb4
  { t: 35.5,  f: 440.00, d: 0.45, velocity: 0.82 }, // A4
  { t: 36.0,  f: 392.00, d: 0.45, velocity: 0.80 }, // G4
  { t: 36.5,  f: 349.23, d: 0.45, velocity: 0.80 }, // F4
  { t: 37.0,  f: 329.63, d: 0.45, velocity: 0.80 }, // E4
  { t: 37.5,  f: 293.66, d: 0.95, slideFrom: 329.63, velocity: 0.88, vibratoDelay: 0.3 }, // D4
  // Bar 13: Heroic Run Launching into Thrill
  { t: 38.6,  f: 293.66, d: 0.25, velocity: 0.82 }, // D4
  { t: 38.9,  f: 349.23, d: 0.25, velocity: 0.85 }, // F4
  { t: 39.2,  f: 392.00, d: 0.25, velocity: 0.88 }, // G4
  { t: 39.5,  f: 440.00, d: 0.35, velocity: 0.90 }, // A4
  { t: 39.9,  f: 523.25, d: 0.35, velocity: 0.92 }, // C5
  { t: 40.3,  f: 587.33, d: 0.75, slideFrom: 523.25, velocity: 0.94, vibratoDelay: 0.15 }, // D5

  // ─── 4. THRILL (41.0s - 53.0s): Energetic South-Indian Cinematic Flute ───
  // Bar 14: Driving Rhythmic Flute Staccatos & Ascents
  { t: 41.3,  f: 587.33, d: 0.30, velocity: 0.92, graceFreq: 523.25 }, // D5
  { t: 41.65, f: 587.33, d: 0.30, velocity: 0.92 }, // D5
  { t: 42.0,  f: 659.25, d: 0.30, velocity: 0.94 }, // E5
  { t: 42.35, f: 698.46, d: 0.55, slideFrom: 659.25, velocity: 0.96 }, // F5
  { t: 42.95, f: 880.00, d: 0.85, slideFrom: 783.99, velocity: 0.98, vibratoDelay: 0.2, vibratoDepth: 6.5 }, // A5 (Soaring Peak!)
  // Bar 15: Virtuosic South-Indian Gamakas
  { t: 43.9,  f: 880.00, d: 0.35, velocity: 0.94 }, // A5
  { t: 44.3,  f: 783.99, d: 0.25, velocity: 0.90 }, // G5
  { t: 44.6,  f: 698.46, d: 0.35, velocity: 0.90 }, // F5
  { t: 45.0,  f: 659.25, d: 0.35, velocity: 0.90 }, // E5
  { t: 45.4,  f: 587.33, d: 0.75, slideFrom: 659.25, velocity: 0.94, vibratoDelay: 0.15 }, // D5
  { t: 46.2,  f: 554.37, d: 0.35, velocity: 0.88 }, // C#5
  { t: 46.6,  f: 587.33, d: 0.60, velocity: 0.92 }, // D5
  // Bar 16: Rapid Jathi Syncopation
  { t: 47.3,  f: 587.33, d: 0.22, velocity: 0.92 }, // D5
  { t: 47.55, f: 659.25, d: 0.22, velocity: 0.92 }, // E5
  { t: 47.8,  f: 587.33, d: 0.22, velocity: 0.92 }, // D5
  { t: 48.05, f: 523.25, d: 0.22, velocity: 0.90 }, // C5
  { t: 48.3,  f: 466.16, d: 0.30, velocity: 0.90 }, // Bb4
  { t: 48.65, f: 440.00, d: 0.30, velocity: 0.90 }, // A4
  { t: 49.0,  f: 392.00, d: 0.30, velocity: 0.88 }, // G4
  { t: 49.35, f: 440.00, d: 0.55, velocity: 0.90, vibratoDelay: 0.15 }, // A4
  // Bar 17: Suspenseful Launch into Climax
  { t: 50.1,  f: 440.00, d: 0.30, velocity: 0.90 }, // A4
  { t: 50.5,  f: 587.33, d: 0.40, slideFrom: 440.00, velocity: 0.94 }, // D5
  { t: 51.0,  f: 659.25, d: 0.40, velocity: 0.95 }, // E5
  { t: 51.5,  f: 698.46, d: 0.65, slideFrom: 659.25, velocity: 0.98 }, // F5
  { t: 52.2,  f: 587.33, d: 0.95, slideFrom: 698.46, velocity: 1.0, vibratoDelay: 0.2 }, // D5

  // ─── 5. PEAK / CLIMAX (53.5s - 65.0s): Grand Unforgettable Hook Return ───
  // Full cinematic power with main hook
  { t: 53.6,  f: 440.00, d: 0.50, velocity: 0.95 }, // A4
  { t: 54.15, f: 587.33, d: 1.15, slideFrom: 440.00, velocity: 1.0, vibratoDelay: 0.2, vibratoDepth: 6.2 }, // D5 (THE GRAND HOOK)
  { t: 55.35, f: 523.25, d: 0.35, velocity: 0.92 }, // C5
  { t: 55.75, f: 466.16, d: 0.35, velocity: 0.92 }, // Bb4
  { t: 56.15, f: 440.00, d: 0.75, slideFrom: 466.16, velocity: 0.94, vibratoDelay: 0.15 }, // A4
  // Response
  { t: 57.0,  f: 392.00, d: 0.35, velocity: 0.88 }, // G4
  { t: 57.4,  f: 440.00, d: 0.75, velocity: 0.92, vibratoDelay: 0.15 }, // A4
  { t: 58.25, f: 293.66, d: 0.35, velocity: 0.88 }, // D4
  { t: 58.65, f: 349.23, d: 0.35, velocity: 0.90 }, // F4
  { t: 59.05, f: 392.00, d: 0.35, velocity: 0.92 }, // G4
  { t: 59.45, f: 440.00, d: 0.85, slideFrom: 392.00, velocity: 0.95, vibratoDelay: 0.15 }, // A4
  // Ultimate Heroic Ascent
  { t: 60.4,  f: 587.33, d: 0.70, slideFrom: 440.00, velocity: 0.96 }, // D5
  { t: 61.15, f: 659.25, d: 0.45, velocity: 0.96 }, // E5
  { t: 61.65, f: 698.46, d: 0.65, slideFrom: 659.25, velocity: 1.0 }, // F5
  { t: 62.35, f: 659.25, d: 0.40, velocity: 0.94 }, // E5
  { t: 62.8,  f: 587.33, d: 0.65, velocity: 0.96 }, // D5
  { t: 63.5,  f: 554.37, d: 0.45, velocity: 0.92 }, // C#5
  { t: 64.0,  f: 587.33, d: 1.60, slideFrom: 554.37, velocity: 1.0, vibratoDelay: 0.25, vibratoDepth: 6.5 }, // D5 (Triumphant hold)

  // ─── 6. LOOP TRANSITION (66.0s - 72.0s): Serene Spiritual Resolution ───
  { t: 66.0,  f: 698.46, d: 0.75, slideFrom: 587.33, velocity: 0.75, vibratoDelay: 0.2 }, // F5
  { t: 66.8,  f: 659.25, d: 0.55, velocity: 0.70 }, // E5
  { t: 67.4,  f: 587.33, d: 0.90, slideFrom: 659.25, velocity: 0.72, vibratoDelay: 0.2 }, // D5
  { t: 68.4,  f: 440.00, d: 0.75, velocity: 0.65 }, // A4
  { t: 69.2,  f: 392.00, d: 0.55, velocity: 0.60 }, // G4
  { t: 69.8,  f: 349.23, d: 0.65, velocity: 0.58 }, // F4
  { t: 70.5,  f: 293.66, d: 1.30, slideFrom: 349.23, velocity: 0.55, vibratoDelay: 0.3 }  // D4 (Fades gently to 72.0s)
];

// === CINEMATIC STRINGS CHORDS ===
const STRING_CHORDS: StringChord[] = [
  // Intro (0s - 12s) - Soft ethereal Dm
  { t: 0.0,  d: 6.0,  freqs: [146.83, 220.00, 349.23], vel: 0.40 },
  { t: 6.0,  d: 6.0,  freqs: [146.83, 220.00, 293.66], vel: 0.50 },

  // Melody (12s - 24s) - The Main Hook progression
  { t: 12.0, d: 3.0,  freqs: [146.83, 220.00, 349.23], vel: 0.65 }, // Dm
  { t: 15.0, d: 3.0,  freqs: [98.00, 146.83, 233.08],  vel: 0.65 }, // Gm
  { t: 18.0, d: 3.0,  freqs: [116.54, 174.61, 293.66], vel: 0.70 }, // Bb
  { t: 21.0, d: 3.0,  freqs: [110.00, 164.81, 277.18], vel: 0.70 }, // A

  // Build-Up (24s - 36s) - Cinematic harmonic movement
  { t: 24.0, d: 3.0,  freqs: [146.83, 220.00, 349.23], vel: 0.75 }, // Dm
  { t: 27.0, d: 3.0,  freqs: [130.81, 196.00, 329.63], vel: 0.75 }, // C
  { t: 30.0, d: 3.0,  freqs: [116.54, 174.61, 293.66], vel: 0.80 }, // Bb
  { t: 33.0, d: 3.0,  freqs: [110.00, 164.81, 277.18], vel: 0.85 }, // A

  // Thrill (36s - 48s) - Driving cinematic chords
  { t: 36.0, d: 3.0,  freqs: [73.42, 146.83, 220.00, 349.23], vel: 0.85 }, // Dm deep
  { t: 39.0, d: 3.0,  freqs: [98.00, 146.83, 233.08, 392.00], vel: 0.88 }, // Gm
  { t: 42.0, d: 3.0,  freqs: [116.54, 174.61, 293.66, 349.23], vel: 0.90 }, // Bb
  { t: 45.0, d: 3.0,  freqs: [110.00, 164.81, 277.18, 440.00], vel: 0.92 }, // A7

  // Peak / Climax (48s - 64s) - Maximum majesty
  { t: 48.0, d: 6.0,  freqs: [73.42, 146.83, 220.00, 293.66, 349.23], vel: 0.95 }, // Full Dm
  { t: 54.0, d: 3.0,  freqs: [116.54, 174.61, 233.08, 293.66], vel: 0.92 }, // Bb
  { t: 57.0, d: 3.0,  freqs: [130.81, 196.00, 261.63, 329.63], vel: 0.92 }, // C
  { t: 60.0, d: 4.0,  freqs: [73.42, 146.83, 220.00, 293.66, 349.23], vel: 0.95 }, // Dm Grand

  // Outro / Loop (64s - 72s) - Softening back to intro
  { t: 64.0, d: 4.0,  freqs: [146.83, 220.00, 349.23], vel: 0.65 },
  { t: 68.0, d: 4.0,  freqs: [146.83, 220.00, 293.66], vel: 0.45 },
];

class AudioService {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicGainNode: GainNode | null = null;
  private sfxGainNode: GainNode | null = null;

  // Drone & active nodes
  private droneGain: GainNode | null = null;
  private droneOscs: OscillatorNode[] = [];
  private activeNodes: (OscillatorNode | AudioBufferSourceNode)[] = [];
  private pinkNoiseBuffer: AudioBuffer | null = null;

  private isMusicPlaying: boolean = false;
  private loopTimer: any = null;
  private nextCycleStartTime: number = 0;

  // Authentic User-Uploaded Background Music Player
  private bgmAudio: HTMLAudioElement | null = null;
  private bgmFadeTimer: any = null;

  private musicVolume: number = 0.45;
  private sfxVolume: number = 0.55;
  private isMuted: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.musicGainNode = this.ctx.createGain();
        this.sfxGainNode = this.ctx.createGain();

        this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
        this.musicGainNode.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
        this.sfxGainNode.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);

        this.musicGainNode.connect(this.masterGain);
        this.sfxGainNode.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);

        this.pinkNoiseBuffer = this.createPinkNoiseBuffer();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Generate Paul Kellet 1/f Pink Noise for authentic flute breath air
  private createPinkNoiseBuffer(): AudioBuffer | null {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * 3; // 3 seconds loop
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.07;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  // ─── AUTHENTIC BANSURI FLUTE NOTE SYNTHESIZER ───
  private scheduleFluteNote(note: FluteNote, cycleStart: number) {
    if (!this.ctx || !this.musicGainNode) return;
    const noteStart = cycleStart + note.t;
    const noteEnd = noteStart + note.d;
    const now = this.ctx.currentTime;
    if (noteEnd < now) return;

    const osc1 = this.ctx.createOscillator(); // Sine fundamental
    const osc2 = this.ctx.createOscillator(); // Triangle (warm wood body)
    const osc3 = this.ctx.createOscillator(); // Soft harmonic overtone

    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc3.type = 'sine';

    const freq = note.f;
    const slideFrom = note.slideFrom;
    const slideMs = note.slideMs || 0.14;

    // Microtonal pitch glide (meend) & grace notes
    if (note.graceFreq) {
      osc1.frequency.setValueAtTime(note.graceFreq, noteStart);
      osc1.frequency.setValueAtTime(freq, noteStart + 0.035);
      osc2.frequency.setValueAtTime(note.graceFreq * 2, noteStart);
      osc2.frequency.setValueAtTime(freq * 2, noteStart + 0.035);
      osc3.frequency.setValueAtTime(freq * 3, noteStart + 0.035);
    } else if (slideFrom) {
      osc1.frequency.setValueAtTime(slideFrom, noteStart);
      osc1.frequency.exponentialRampToValueAtTime(freq, noteStart + slideMs);
      osc2.frequency.setValueAtTime(slideFrom * 2, noteStart);
      osc2.frequency.exponentialRampToValueAtTime(freq * 2, noteStart + slideMs);
      osc3.frequency.setValueAtTime(slideFrom * 3, noteStart);
      osc3.frequency.exponentialRampToValueAtTime(freq * 3, noteStart + slideMs);
    } else {
      // Natural breath onset micro-glide
      osc1.frequency.setValueAtTime(freq * 0.984, noteStart);
      osc1.frequency.exponentialRampToValueAtTime(freq, noteStart + 0.04);
      osc2.frequency.setValueAtTime(freq * 1.968, noteStart);
      osc2.frequency.exponentialRampToValueAtTime(freq * 2, noteStart + 0.04);
      osc3.frequency.setValueAtTime(freq * 3, noteStart);
    }

    // Bamboo acoustic formant filtering
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1680, noteStart);
    filter.Q.setValueAtTime(1.9, noteStart);

    // Expressive delayed breath vibrato (gamaka flutter)
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.1, noteStart);

    const vibDelay = note.vibratoDelay || 0.25;
    const vibDepth = note.vibratoDepth || 4.2;
    vibratoGain.gain.setValueAtTime(0.0001, noteStart);
    vibratoGain.gain.setValueAtTime(0.0001, noteStart + vibDelay);
    vibratoGain.gain.linearRampToValueAtTime(vibDepth, noteStart + vibDelay + 0.25);

    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc1.frequency);
    vibratoGain.connect(osc2.frequency);

    // Velocity & envelope dynamics
    const vel = (note.velocity || 0.8) * 0.25;
    const attack = Math.min(0.14, note.d * 0.25);
    const release = Math.min(0.22, note.d * 0.35);

    noteGain.gain.setValueAtTime(0.0001, noteStart);
    noteGain.gain.linearRampToValueAtTime(vel, noteStart + attack);
    noteGain.gain.exponentialRampToValueAtTime(vel * 0.75, noteStart + note.d - release);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);

    // Relative voice gains
    const g1 = this.ctx.createGain();
    const g2 = this.ctx.createGain();
    const g3 = this.ctx.createGain();
    g1.gain.setValueAtTime(0.68, noteStart);
    g2.gain.setValueAtTime(0.24, noteStart);
    g3.gain.setValueAtTime(0.08, noteStart);

    osc1.connect(g1);
    osc2.connect(g2);
    osc3.connect(g3);
    g1.connect(noteGain);
    g2.connect(noteGain);
    g3.connect(noteGain);

    // Breath noise layer
    if (this.pinkNoiseBuffer) {
      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = this.pinkNoiseBuffer;
      noiseSource.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(2100, noteStart);
      noiseFilter.Q.setValueAtTime(2.2, noteStart);

      const noiseGain = this.ctx.createGain();
      const noiseVel = vel * 0.26;
      noiseGain.gain.setValueAtTime(0.0001, noteStart);
      noiseGain.gain.linearRampToValueAtTime(noiseVel, noteStart + 0.05);
      noiseGain.gain.exponentialRampToValueAtTime(noiseVel * 0.4, noteStart + note.d * 0.6);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(filter);

      noiseSource.start(noteStart);
      noiseSource.stop(noteEnd + 0.05);
      this.activeNodes.push(noiseSource);
    }

    noteGain.connect(filter);
    filter.connect(this.musicGainNode);

    vibrato.start(noteStart);
    osc1.start(noteStart);
    osc2.start(noteStart);
    osc3.start(noteStart);

    vibrato.stop(noteEnd + 0.05);
    osc1.stop(noteEnd + 0.05);
    osc2.stop(noteEnd + 0.05);
    osc3.stop(noteEnd + 0.05);

    this.activeNodes.push(osc1, osc2, osc3, vibrato);
  }

  // ─── CINEMATIC STRINGS PAD ───
  private scheduleStringChord(chord: StringChord, cycleStart: number) {
    if (!this.ctx || !this.musicGainNode) return;
    const start = cycleStart + chord.t;
    const end = start + chord.d;
    const now = this.ctx.currentTime;
    if (end < now) return;

    const chordGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(750, start);
    filter.Q.setValueAtTime(1.2, start);

    const targetVol = chord.vel * 0.085;
    const attack = 0.7;
    const release = 0.9;

    chordGain.gain.setValueAtTime(0.0001, start);
    chordGain.gain.linearRampToValueAtTime(targetVol, start + attack);
    chordGain.gain.setValueAtTime(targetVol, end - release);
    chordGain.gain.exponentialRampToValueAtTime(0.0001, end);

    chord.freqs.forEach((freq) => {
      [-5, 5].forEach((detune) => {
        const osc = this.ctx!.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, start);
        osc.detune.setValueAtTime(detune, start);

        const oscGain = this.ctx!.createGain();
        oscGain.gain.setValueAtTime(0.5 / chord.freqs.length, start);

        osc.connect(oscGain);
        oscGain.connect(filter);

        osc.start(start);
        osc.stop(end + 0.1);
        this.activeNodes.push(osc);
      });
    });

    filter.connect(chordGain);
    chordGain.connect(this.musicGainNode);
  }

  // ─── MRIDANGAM / INDIAN CINEMATIC PERCUSSION ───
  // Mridangam Bass (Gumki bend)
  private playMridangamBass(time: number, vel: number = 0.6) {
    if (!this.ctx || !this.musicGainNode) return;
    const now = this.ctx.currentTime;
    if (time < now) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(92, time);
    osc.frequency.exponentialRampToValueAtTime(44, time + 0.22);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, time);

    const vol = vel * 0.15;
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.38);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGainNode);

    osc.start(time);
    osc.stop(time + 0.4);
    this.activeNodes.push(osc);
  }

  // Crisp Percussion Rim Slap / Chapa
  private playPercussionSlap(time: number, vel: number = 0.5) {
    if (!this.ctx || !this.musicGainNode) return;
    const now = this.ctx.currentTime;
    if (time < now) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, time);
    osc.frequency.exponentialRampToValueAtTime(110, time + 0.08);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1250, time);
    filter.Q.setValueAtTime(3.5, time);

    const vol = vel * 0.10;
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.1);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGainNode);

    osc.start(time);
    osc.stop(time + 0.12);
    this.activeNodes.push(osc);
  }

  // Cinematic Taiko / War Drum Impact
  private playTaikoImpact(time: number, vel: number = 0.8) {
    if (!this.ctx || !this.musicGainNode) return;
    const now = this.ctx.currentTime;
    if (time < now) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(65, time);
    osc.frequency.exponentialRampToValueAtTime(36, time + 0.35);

    const vol = vel * 0.20;
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.85);

    osc.connect(gain);
    gain.connect(this.musicGainNode);

    osc.start(time);
    osc.stop(time + 0.9);
    this.activeNodes.push(osc);
  }

  // Shimmering Temple Chime
  private playTempleChime(time: number, vel: number = 0.5) {
    if (!this.ctx || !this.musicGainNode) return;
    const now = this.ctx.currentTime;
    if (time < now) return;

    const partials = [1864.66, 2349.32, 2793.83, 3729.31];
    partials.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      const partialVol = (vel * 0.038) / (idx + 1);
      gain.gain.setValueAtTime(partialVol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.6);

      osc.connect(gain);
      gain.connect(this.musicGainNode!);

      osc.start(time);
      osc.stop(time + 1.7);
      this.activeNodes.push(osc);
    });
  }

  // ─── PERCUSSION ARRANGEMENT ───
  private schedulePercussionTrack(cycleStart: number) {
    // 1. INTRO (0s - 12s): Distant heartbeat
    this.playTaikoImpact(cycleStart + 3.0, 0.35);
    this.playTaikoImpact(cycleStart + 6.0, 0.40);
    this.playTaikoImpact(cycleStart + 9.0, 0.45);
    this.playTempleChime(cycleStart + 11.5, 0.60);

    // 2. MELODY (12s - 24s): 4/4 subtle mridangam groove
    for (let bar = 0; bar < 4; bar++) {
      const barStart = cycleStart + 12.0 + bar * 3.0;
      this.playMridangamBass(barStart + 0.0, 0.55);
      this.playPercussionSlap(barStart + 0.75, 0.35);
      this.playMridangamBass(barStart + 1.5, 0.50);
      this.playPercussionSlap(barStart + 2.25, 0.40);
    }

    // 3. BUILD-UP (24s - 36s): Syncopated rhythm swells
    for (let bar = 0; bar < 3; bar++) {
      const barStart = cycleStart + 24.0 + bar * 3.0;
      this.playTaikoImpact(barStart + 0.0, 0.70);
      this.playMridangamBass(barStart + 0.0, 0.65);
      this.playPercussionSlap(barStart + 0.75, 0.50);
      this.playPercussionSlap(barStart + 1.125, 0.40);
      this.playMridangamBass(barStart + 1.5, 0.60);
      this.playPercussionSlap(barStart + 2.25, 0.50);
    }
    // Bar 12 (33s - 36s): Build-up roll and transition
    const b12 = cycleStart + 33.0;
    this.playTaikoImpact(b12 + 0.0, 0.75);
    this.playMridangamBass(b12 + 0.0, 0.70);
    this.playPercussionSlap(b12 + 0.75, 0.55);
    this.playTaikoImpact(b12 + 1.5, 0.70);
    this.playPercussionSlap(b12 + 1.875, 0.60);
    this.playPercussionSlap(b12 + 2.25, 0.65);
    this.playPercussionSlap(b12 + 2.625, 0.70);
    this.playTempleChime(b12 + 2.85, 0.70);

    // 4. THRILL (36s - 48s): Driving South-Indian Cinematic Groove
    for (let bar = 0; bar < 4; bar++) {
      const barStart = cycleStart + 36.0 + bar * 3.0;
      this.playTaikoImpact(barStart + 0.0, 0.80);
      this.playMridangamBass(barStart + 0.0, 0.75);
      this.playPercussionSlap(barStart + 0.375, 0.45);
      this.playPercussionSlap(barStart + 0.75, 0.55);
      this.playMridangamBass(barStart + 1.125, 0.65);
      this.playMridangamBass(barStart + 1.5, 0.75);
      this.playPercussionSlap(barStart + 1.875, 0.55);
      this.playPercussionSlap(barStart + 2.25, 0.60);
      this.playPercussionSlap(barStart + 2.625, 0.65);
    }

    // 5. PEAK / CLIMAX (48s - 64s): Maximum Cinematic Impact
    this.playTempleChime(cycleStart + 48.0, 0.85);
    for (let bar = 0; bar < 5; bar++) {
      const barStart = cycleStart + 48.0 + bar * 3.0;
      this.playTaikoImpact(barStart + 0.0, 0.90);
      this.playMridangamBass(barStart + 0.0, 0.80);
      this.playPercussionSlap(barStart + 0.75, 0.65);
      this.playMridangamBass(barStart + 1.5, 0.75);
      this.playPercussionSlap(barStart + 2.25, 0.70);
    }
    this.playTempleChime(cycleStart + 54.0, 0.80);
    this.playTempleChime(cycleStart + 60.0, 0.85);

    // 6. OUTRO / LOOP (64s - 72s): Halftime fadeout
    this.playTaikoImpact(cycleStart + 64.0, 0.50);
    this.playMridangamBass(cycleStart + 64.0, 0.45);
    this.playPercussionSlap(cycleStart + 65.5, 0.30);
    this.playTaikoImpact(cycleStart + 67.0, 0.35);
    this.playMridangamBass(cycleStart + 68.5, 0.25);
  }

  // ─── CONTINUOUS TANPURA & SUB-DRONE ───
  private startTanpuraDrone() {
    if (!this.ctx || !this.musicGainNode) return;
    this.stopTanpuraDrone();

    const now = this.ctx.currentTime;
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.0001, now);
    this.droneGain.gain.linearRampToValueAtTime(0.14, now + 3.0);

    const dronePitches = [
      { f: 73.42,  type: 'sawtooth', filterFreq: 160 }, // D2 Kharja Sa
      { f: 110.00, type: 'triangle', filterFreq: 320 }, // A2 Panchama
      { f: 146.83, type: 'sawtooth', filterFreq: 240 }, // D3 Madhya Sa
      { f: 174.61, type: 'sine',     filterFreq: 380 }, // F3 Gandhara
    ];

    dronePitches.forEach((p, idx) => {
      const osc = this.ctx!.createOscillator();
      const filter = this.ctx!.createBiquadFilter();
      const voiceGain = this.ctx!.createGain();

      osc.type = p.type as OscillatorType;
      osc.frequency.setValueAtTime(p.f, now);

      const detune = (idx - 1.5) * 1.8;
      osc.detune.setValueAtTime(detune, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(p.filterFreq, now);

      voiceGain.gain.setValueAtTime(0.25, now);

      osc.connect(filter);
      filter.connect(voiceGain);
      voiceGain.connect(this.droneGain!);

      osc.start(now);
      this.droneOscs.push(osc);
    });

    this.droneGain.connect(this.musicGainNode);
  }

  private stopTanpuraDrone() {
    if (this.droneOscs.length > 0 && this.ctx) {
      this.droneOscs.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      this.droneOscs = [];
    }
    if (this.droneGain) {
      try {
        this.droneGain.disconnect();
      } catch (e) {}
      this.droneGain = null;
    }
  }

  // ─── SCORE SCHEDULING CYCLE ───
  private scheduleScoreCycle(cycleStart: number) {
    // 1. Schedule all Flute notes
    FLUTE_SCORE.forEach((note) => this.scheduleFluteNote(note, cycleStart));

    // 2. Schedule Strings Chords
    STRING_CHORDS.forEach((chord) => this.scheduleStringChord(chord, cycleStart));

    // 3. Schedule Percussion track
    this.schedulePercussionTrack(cycleStart);
  }

  private initBgmAudio() {
    if (!this.bgmAudio && typeof Audio !== 'undefined') {
      this.bgmAudio = new Audio('/assets/audio/bgm.wav');
      this.bgmAudio.loop = true;
      this.bgmAudio.preload = 'auto';
      this.bgmAudio.volume = this.musicVolume;
    }
  }

  // ─── AUTHENTIC USER-UPLOADED BACKGROUND MUSIC PLAYER ───
  public startBackgroundMusic() {
    this.initContext();
    this.initBgmAudio();
    if (!this.bgmAudio) return;

    if (this.bgmFadeTimer) {
      clearInterval(this.bgmFadeTimer);
      this.bgmFadeTimer = null;
    }

    this.isMusicPlaying = true;
    this.bgmAudio.volume = this.musicVolume;

    const playPromise = this.bgmAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Autoplay prevented by browser, waiting for user interaction:', err);
      });
    }
  }

  public stopBackgroundMusic() {
    this.isMusicPlaying = false;
    if (this.bgmFadeTimer) {
      clearInterval(this.bgmFadeTimer);
      this.bgmFadeTimer = null;
    }

    if (this.bgmAudio) {
      const startVol = this.bgmAudio.volume;
      const steps = 15;
      const stepDuration = 20; // 300ms total
      let currentStep = 0;

      this.bgmFadeTimer = setInterval(() => {
        currentStep++;
        if (this.bgmAudio && currentStep < steps) {
          const ratio = (steps - currentStep) / steps;
          this.bgmAudio.volume = Math.max(0, startVol * ratio);
        } else {
          if (this.bgmFadeTimer) clearInterval(this.bgmFadeTimer);
          this.bgmFadeTimer = null;
          if (this.bgmAudio) {
            this.bgmAudio.pause();
            this.bgmAudio.volume = this.musicVolume;
          }
        }
      }, stepDuration);
    }
  }

  public toggleBackgroundMusic(): boolean {
    if (this.isMusicPlaying) {
      this.stopBackgroundMusic();
      return false;
    } else {
      this.startBackgroundMusic();
      return true;
    }
  }

  // Aliases for seamless compatibility with existing components
  public startFluteMusic() {
    this.startBackgroundMusic();
  }

  public stopFluteMusic() {
    this.stopBackgroundMusic();
  }

  public toggleFluteMusic(): boolean {
    return this.toggleBackgroundMusic();
  }

  public setVolume(vol: number) {
    this.musicVolume = Math.max(0, Math.min(1, vol));
    if (this.bgmAudio) {
      this.bgmAudio.volume = this.musicVolume;
    }
    if (this.musicGainNode && this.ctx) {
      this.musicGainNode.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
    }
  }

  // --- SOUND EFFECTS ---

  // Golden Temple Bell on Correct Answer
  public playCorrectSound() {
    this.initContext();
    if (!this.ctx || !this.sfxGainNode || this.isMuted) return;

    const now = this.ctx.currentTime;
    const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51];

    chords.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.035);

      gain.gain.setValueAtTime(0.14, now + idx * 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.sfxGainNode!);

      osc.start(now + idx * 0.035);
      osc.stop(now + 1.3);
    });
  }

  // Deep War Drum Thud on Wrong Answer
  public playIncorrectSound() {
    this.initContext();
    if (!this.ctx || !this.sfxGainNode || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.4);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, now);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGainNode);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  // Mystical Shimmer when using Hint
  public playHintSound() {
    this.initContext();
    if (!this.ctx || !this.sfxGainNode || this.isMuted) return;

    const now = this.ctx.currentTime;
    const notes = [659.25, 783.99, 987.77, 1174.66];
    notes.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.12, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      osc.connect(gain);
      gain.connect(this.sfxGainNode!);

      osc.start(now + i * 0.06);
      osc.stop(now + 0.9);
    });
  }

  // Swift Golden Arrow Swoosh on Skip
  public playSkipSound() {
    this.initContext();
    if (!this.ctx || !this.sfxGainNode || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.2);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.sfxGainNode);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  // Sacred War Conch (Shankha) on Starting Journey & Milestone Levels
  public playShankhaSound() {
    this.initContext();
    if (!this.ctx || !this.sfxGainNode || this.isMuted) return;

    const now = this.ctx.currentTime;
    const dur = 2.8;

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(210, now);
    osc.frequency.exponentialRampToValueAtTime(370, now + 0.6);
    osc.frequency.linearRampToValueAtTime(330, now + dur);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(580, now);
    filter.Q.setValueAtTime(4.2, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.2, now + dur * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGainNode);

    osc.start(now);
    osc.stop(now + dur);
  }

  // Royal Fanfare on Level & Story Part Complete
  public playVictoryFanfare() {
    this.initContext();
    if (!this.ctx || !this.sfxGainNode || this.isMuted) return;

    const now = this.ctx.currentTime;
    const notes = [
      { f: 392.00, t: 0.0, d: 0.2 },
      { f: 523.25, t: 0.22, d: 0.2 },
      { f: 659.25, t: 0.44, d: 0.25 },
      { f: 783.99, t: 0.72, d: 0.75 }
    ];

    notes.forEach(n => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, now + n.t);

      gain.gain.setValueAtTime(0.22, now + n.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);

      osc.connect(gain);
      gain.connect(this.sfxGainNode!);

      osc.start(now + n.t);
      osc.stop(now + n.t + n.d + 0.1);
    });
  }

  public playClick() {
    this.initContext();
    if (!this.ctx || !this.sfxGainNode || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(850, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.sfxGainNode);

    osc.start(now);
    osc.stop(now + 0.04);
  }
}

export const audioService = new AudioService();
