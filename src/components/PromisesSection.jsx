import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, HandMetal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/content';

export default function PromisesSection() {
  const { promises } = siteContent;
  const [sealed, setSealed] = useState(false);

  const handleSealPromise = (e) => {
    setSealed(true);
    // Subtle heart confetti burst
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { x, y },
      colors: ['#f2a8b7', '#d85774', '#fffdfa', '#e27488'],
      shapes: ['circle'],
      scalar: 1.1,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-tag">
            <ShieldCheck size={13} />
            <span>{promises.sectionTag}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.6rem)',
              marginBottom: '1rem',
              color: 'var(--cream-pure)',
            }}
          >
            {promises.title}
          </h2>
        </div>

        {/* Promise items revealed */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.1rem',
            marginBottom: '3rem',
          }}
        >
          {promises.list.map((promiseText, index) => {
            const isLast = index === promises.list.length - 1;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  gridColumn: isLast ? '1 / -1' : 'auto',
                  background: isLast
                    ? 'linear-gradient(135deg, rgba(72, 19, 35, 0.8) 0%, rgba(38, 11, 20, 0.9) 100%)'
                    : 'rgba(38, 11, 20, 0.6)',
                  border: isLast ? '1px solid rgba(242, 168, 183, 0.3)' : '1px solid rgba(242, 168, 183, 0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-card)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    color: 'var(--rose-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <p
                  style={{
                    fontSize: isLast ? '1.08rem' : '1rem',
                    color: isLast ? 'var(--cream-pure)' : 'var(--cream-soft)',
                    fontWeight: isLast ? 600 : 500,
                    margin: 0,
                  }}
                >
                  {promiseText}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Promise Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              marginBottom: '0.4rem',
            }}
          >
            "{promises.footerLead}"
          </p>
          <h3
            style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--rose-soft)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
            }}
          >
            "{promises.footerAccent}"
          </h3>
        </motion.div>

        {/* Interactive Promise Seal Button */}
        <div style={{ textAlign: 'center' }}>
          <AnimatePresence mode="wait">
            {!sealed ? (
              <motion.button
                key="unsealed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={handleSealPromise}
                className="btn-secondary"
                style={{
                  padding: '0.9rem 2rem',
                  fontSize: '1rem',
                  borderColor: 'rgba(242, 168, 183, 0.3)',
                  cursor: 'pointer',
                }}
              >
                <Heart size={18} color="var(--rose-soft)" />
                <span>{promises.interactivePrompt}</span>
              </motion.button>
            ) : (
              <motion.div
                key="sealed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(216, 87, 116, 0.2)',
                  border: '1px solid var(--rose-accent)',
                  color: 'var(--cream-pure)',
                  boxShadow: '0 0 25px rgba(216, 87, 116, 0.35)',
                }}
              >
                <Heart size={18} fill="var(--rose-soft)" color="var(--rose-soft)" />
                <span style={{ fontWeight: 500 }}>Promise officially sealed & remembered 🤍</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
