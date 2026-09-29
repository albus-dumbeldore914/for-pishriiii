import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/content';

export default function EasterEggModal({ isOpen, onClose }) {
  const { easterEgg } = siteContent;

  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#f2a8b7', '#d85774', '#fffdfa'],
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(15, 3, 7, 0.88)',
          backdropFilter: 'blur(16px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card"
          style={{
            maxWidth: '520px',
            width: '100%',
            background: 'linear-gradient(145deg, rgba(65, 20, 36, 0.95) 0%, rgba(35, 10, 18, 0.98) 100%)',
            border: '1.5px solid var(--rose-accent)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(216, 87, 116, 0.3)',
            textAlign: 'center',
            padding: '2.5rem 2rem',
            position: 'relative',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cream-soft)',
              cursor: 'pointer',
            }}
          >
            <X size={16} />
          </button>

          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(216, 87, 116, 0.25)',
              border: '1px solid var(--rose-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--rose-soft)',
              margin: '0 auto 1.25rem auto',
            }}
          >
            <Sparkles size={24} />
          </div>

          <h3
            style={{
              fontSize: '1.35rem',
              color: 'var(--rose-soft)',
              marginBottom: '1.25rem',
            }}
          >
            {easterEgg.title}
          </h3>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--cream-soft)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              marginBottom: '0.6rem',
            }}
          >
            "{easterEgg.line1}"
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--cream-muted)',
              marginBottom: '1.2rem',
              lineHeight: 1.6,
            }}
          >
            {easterEgg.line2}
          </p>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              color: 'var(--rose-soft)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              textShadow: '0 2px 20px rgba(216, 87, 116, 0.4)',
            }}
          >
            "{easterEgg.highlight}"
          </h2>

          <div
            style={{
              padding: '0.8rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px dashed rgba(242, 168, 183, 0.25)',
              display: 'inline-block',
            }}
          >
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-faint)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              {easterEgg.footer}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
