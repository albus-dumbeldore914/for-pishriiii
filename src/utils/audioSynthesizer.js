/**
 * Soft Ambient Piano & Rhodes Synthesizer
 * Uses Web Audio API to create a gentle, heartfelt background melody.
 * Zero external audio dependencies needed!
 */

class EmotionalMusicPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.gainNode = null;
    this.customAudio = null;
    this.chordIndex = 0;

    // Heartfelt chord progression (frequencies in Hz): Fmaj9 -> Cmaj7 -> Dm9 -> Bbmaj7
    // Gives that bittersweet, warm, sincere acoustic vibe
    this.chords = [
      [174.61, 261.63, 329.63, 392.00, 523.25], // F3, C4, E4, G4, C5 (Fmaj9)
      [130.81, 196.00, 246.94, 329.63, 392.00], // C3, G3, B3, E4, G4 (Cmaj7)
      [146.83, 220.00, 261.63, 329.63, 440.00], // D3, A3, C4, E4, A4 (Dm9)
      [116.54, 174.61, 233.08, 293.66, 349.23], // Bb2, F3, Bb3, D4, F4 (Bbmaj7)
    ];
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, time, duration = 3.5, velocity = 0.08) {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Soft warm tone (combination of sine & gentle warm harmonic)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      // Low pass filter for soft felt-piano warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(700, time);
      filter.frequency.exponentialRampToValueAtTime(350, time + duration);

      // Delicate envelope
      noteGain.gain.setValueAtTime(0.0001, time);
      noteGain.gain.linearRampToValueAtTime(velocity, time + 0.12);
      noteGain.gain.exponentialRampToValueAtTime(velocity * 0.4, time + 0.8);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(time);
      osc.stop(time + duration);
    } catch {
      // Audio node cleanup handling
    }
  }

  scheduleNextChord() {
    if (!this.isPlaying || !this.ctx) return;

    const chord = this.chords[this.chordIndex];
    this.chordIndex = (this.chordIndex + 1) % this.chords.length;

    const now = this.ctx.currentTime;
    
    // Play root bass note gently
    this.playTone(chord[0], now, 4.0, 0.06);

    // Arpeggiate remaining notes with human-like delicate pauses
    chord.slice(1).forEach((freq, idx) => {
      const delay = (idx + 1) * 0.45 + (Math.random() * 0.08);
      this.playTone(freq, now + delay, 3.2, 0.045);
    });

    // Occasional gentle high sparkle note
    if (Math.random() > 0.4) {
      const sparkleFreq = chord[chord.length - 1] * 1.5;
      this.playTone(sparkleFreq, now + 2.4, 2.5, 0.025);
    }

    // Schedule next chord every ~3.6 seconds
    this.timerId = setTimeout(() => {
      this.scheduleNextChord();
    }, 3600);
  }

  play(customUrl = null) {
    if (this.isPlaying) return;
    this.isPlaying = true;

    if (customUrl) {
      if (!this.customAudio) {
        this.customAudio = new Audio(customUrl);
        this.customAudio.loop = true;
      }
      this.customAudio.volume = 0.5;
      this.customAudio.play().catch(() => {
        // Fallback to synth if custom audio fails or blocked
        this.startSynthesizer();
      });
      return;
    }

    this.startSynthesizer();
  }

  startSynthesizer() {
    this.initContext();
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      // Smooth fade in
      this.gainNode.gain.linearRampToValueAtTime(0.4, this.ctx.currentTime + 1.5);
    }
    this.scheduleNextChord();
  }

  pause() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (this.customAudio) {
      this.customAudio.pause();
    }

    if (this.gainNode && this.ctx) {
      this.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
      // Smooth fade out
      this.gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
    }
  }

  toggle(customUrl = null) {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play(customUrl);
      return true;
    }
  }
}

export const musicPlayer = new EmotionalMusicPlayer();
