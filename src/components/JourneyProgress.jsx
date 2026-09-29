import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Lock, CheckCircle } from 'lucide-react';

export default function JourneyProgress({ unlockedCount, total = 4, onSecretClick }) {
  const isComplete = unlockedCount >= total;
  const progressPercent = Math.min((unlockedCount / total) * 100, 100);

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(22, 5, 10, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(242, 168, 183, 0.14)',
        padding: '0.65rem 1.25rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        {/* Left: Journey progress text & secret heart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={onSecretClick}
            title="A tiny heart... wonder what happens if you tap it?"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              color: isComplete ? 'var(--rose-accent)' : 'var(--rose-soft)',
              transition: 'transform 0.2s ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.85)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
          >
            <Heart size={18} fill="currentColor" />
          </button>

          <span
            style={{
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
              fontWeight: 600,
              color: isComplete ? 'var(--cream-pure)' : 'var(--rose-light)',
              letterSpacing: '0.01em',
            }}
          >
            {isComplete
              ? '4/4 — You made it ❤️'
              : `Our little journey — ${unlockedCount}/${total} unlocked ❤️`}
          </span>
        </div>

        {/* Right: Step indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          {[1, 2, 3, 4].map((step) => {
            const isStepDone = unlockedCount >= step;
            return (
              <div
                key={step}
                title={`Game ${step} ${isStepDone ? '(Completed)' : '(Locked)'}`}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: isStepDone ? 'rgba(216, 87, 116, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  border: isStepDone ? '1.5px solid var(--rose-accent)' : '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: isStepDone ? 'var(--rose-soft)' : 'var(--text-faint)',
                  transition: 'var(--transition-smooth)',
                }}
              >
                {isStepDone ? '✓' : step}
              </div>
            );
          })}
        </div>
      </div>

      {/* Thin animated progress bar along bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2.5px',
          width: `${progressPercent}%`,
          background: 'linear-gradient(90deg, #aa2748, #d85774, #f2a8b7)',
          boxShadow: '0 0 8px rgba(216, 87, 116, 0.8)',
          transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}
