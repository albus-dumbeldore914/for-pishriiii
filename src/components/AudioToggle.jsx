import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { musicPlayer } from '../utils/audioSynthesizer';
import { siteContent } from '../data/content';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggle = () => {
    const newState = musicPlayer.toggle(siteContent.audio.customAudioUrl);
    setIsPlaying(newState);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '1.25rem',
        right: '1.25rem',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
      }}
    >
      {/* Gentle helper message on hover or initial hint */}
      {showTooltip && (
        <div
          style={{
            background: 'rgba(34, 9, 17, 0.92)',
            backdropFilter: 'blur(12px)',
            border: 'var(--border-subtle)',
            padding: '0.4rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            color: 'var(--rose-soft)',
            boxShadow: 'var(--shadow-soft)',
            animation: 'fadeIn 0.2s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {isPlaying ? 'Pause background melody' : 'Play soft emotional melody 🎵'}
        </div>
      )}

      <button
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: isPlaying ? 'rgba(216, 87, 116, 0.22)' : 'rgba(34, 9, 17, 0.8)',
          border: isPlaying ? '1px solid var(--rose-accent)' : 'var(--border-subtle)',
          color: isPlaying ? 'var(--rose-light)' : 'var(--cream-muted)',
          padding: '0.55rem 0.95rem',
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          backdropFilter: 'blur(16px)',
          transition: 'var(--transition-smooth)',
          boxShadow: isPlaying ? '0 0 20px rgba(216, 87, 116, 0.3)' : 'var(--shadow-soft)',
        }}
      >
        {isPlaying ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '14px' }}>
              <span className="eq-bar eq-bar-1" />
              <span className="eq-bar eq-bar-2" />
              <span className="eq-bar eq-bar-3" />
            </div>
            <Volume2 size={16} />
            <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Playing</span>
          </>
        ) : (
          <>
            <VolumeX size={16} />
            <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Music Off</span>
          </>
        )}
      </button>

      <style>{`
        .eq-bar {
          display: inline-block;
          width: 2.5px;
          background-color: var(--rose-soft);
          border-radius: 2px;
          animation: eqAnimation 1s ease-in-out infinite alternate;
        }
        .eq-bar-1 { height: 6px; animation-delay: 0.1s; }
        .eq-bar-2 { height: 13px; animation-delay: 0.3s; }
        .eq-bar-3 { height: 8px; animation-delay: 0.2s; }

        @keyframes eqAnimation {
          0% { height: 3px; }
          100% { height: 14px; }
        }
      `}</style>
    </div>
  );
}
