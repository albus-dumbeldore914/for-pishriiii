import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';

export default function HeroSection({ onOpen, isOpened }) {
  const { hero } = siteContent;

  const handleOpenClick = () => {
    onOpen();
    // Smooth scroll down to first section
    setTimeout(() => {
      const firstSection = document.getElementById('game1-section') || document.getElementById('journey-start');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216, 87, 116, 0.18) 0%, rgba(34, 9, 17, 0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '650px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Subtle pre-title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="badge-tag"
          style={{ margin: '0 auto 1.8rem auto' }}
        >
          <Sparkles size={13} />
          <span>{hero.preTitle}</span>
        </motion.div>

        {/* Hey You */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 4.8rem)',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            marginBottom: '0.8rem',
            color: 'var(--cream-pure)',
            textShadow: '0 4px 25px rgba(216, 87, 116, 0.25)',
          }}
        >
          {hero.title}
        </motion.h1>

        {/* I owe you an apology */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            fontWeight: 400,
            color: 'var(--rose-soft)',
            marginBottom: '1.8rem',
            fontFamily: 'var(--font-serif)',
          }}
        >
          {hero.subtitle}
        </motion.h2>

        {/* Disclaimer / sincere note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            background: 'rgba(34, 9, 17, 0.45)',
            border: '1px solid rgba(242, 168, 183, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.6rem',
            marginBottom: '2.5rem',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              color: 'var(--cream-muted)',
              lineHeight: 1.65,
              whiteSpace: 'pre-line',
              fontStyle: 'italic',
            }}
          >
            "{hero.disclaimer}"
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.15, duration: 0.7 }}
        >
          <button
            onClick={handleOpenClick}
            className="btn-primary"
            style={{
              padding: '1.05rem 2.6rem',
              fontSize: '1.15rem',
              cursor: 'pointer',
            }}
          >
            <Heart size={20} fill="#fff" />
            <span>{hero.buttonText}</span>
          </button>
        </motion.div>

        {/* Subtle scroll nudge if already opened */}
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: '3.5rem',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>Scroll gently to read</span>
            <ChevronDown size={18} className="bounce-arrow" />
          </motion.div>
        )}
      </motion.div>

      <style>{`
        .bounce-arrow {
          animation: bounceArrow 1.8s infinite ease-in-out;
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
