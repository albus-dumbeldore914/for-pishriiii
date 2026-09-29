import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../../data/content';

export default function LetGoGame({ onComplete, isCompleted }) {
  const { game4 } = siteContent;
  const [remainingItems, setRemainingItems] = useState(game4.floatingItems);
  const [latestMessage, setLatestMessage] = useState(null);
  const [clearedCount, setClearedCount] = useState(0);
  const [allCleared, setAllCleared] = useState(isCompleted);

  const handleWordClick = (item, e) => {
    // Burst stardust
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 22,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: ['#f2a8b7', '#d85774', '#fffdfa'],
      scalar: 0.9,
    });

    const nextRemaining = remainingItems.filter((i) => i.id !== item.id);
    setRemainingItems(nextRemaining);
    setLatestMessage(item.message);
    const nextCount = clearedCount + 1;
    setClearedCount(nextCount);

    if (nextRemaining.length === 0) {
      setTimeout(() => {
        setAllCleared(true);
        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#f2a8b7', '#d85774', '#fffdfa'],
        });
      }, 600);
    }
  };

  const handleReadyToListen = () => {
    onComplete();
  };

  return (
    <section
      className="section-spacing"
      style={{
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 50%, #200710 0%, #0d0206 100%)',
        borderTop: '1px solid rgba(242, 168, 183, 0.1)',
        borderBottom: '1px solid rgba(242, 168, 183, 0.1)',
        overflow: 'hidden',
      }}
    >
      <div className="container-narrow" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge-tag">
            <Moon size={13} />
            <span>{game4.tag}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.4rem)',
              color: 'var(--cream-pure)',
              marginBottom: '0.6rem',
              fontStyle: 'italic',
            }}
          >
            "{game4.title}"
          </h2>
          <p style={{ color: 'var(--cream-muted)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto' }}>
            {game4.subtitle}
          </p>
        </div>

        {/* Night sky interactive area */}
        <div
          className="glass-card"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            minHeight: '340px',
            background: 'rgba(15, 3, 7, 0.85)',
            border: '1px solid rgba(242, 168, 183, 0.16)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.5rem 1.8rem',
          }}
        >
          {!allCleared ? (
            <>
              {/* Counter */}
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '0.82rem',
                  color: 'var(--rose-soft)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1.5rem',
                }}
              >
                <span>Tap to release: {remainingItems.length} remaining</span>
              </div>

              {/* Floating Cloud Words */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.9rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '160px',
                  padding: '1rem 0',
                }}
              >
                <AnimatePresence>
                  {remainingItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        y: [0, index % 2 === 0 ? -6 : 6, 0],
                      }}
                      exit={{
                        scale: 0.2,
                        opacity: 0,
                        filter: 'blur(8px)',
                        transition: { duration: 0.4 },
                      }}
                      transition={{
                        y: { duration: 3 + (index % 3), repeat: Infinity, ease: 'easeInOut' },
                      }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleWordClick(item, e)}
                      style={{
                        padding: '0.75rem 1.4rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'linear-gradient(135deg, rgba(65, 20, 36, 0.8) 0%, rgba(35, 10, 18, 0.9) 100%)',
                        border: '1px solid rgba(242, 168, 183, 0.28)',
                        color: 'var(--cream-pure)',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        fontStyle: 'italic',
                        cursor: 'pointer',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                      }}
                    >
                      {item.word} ✕
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              {/* Latest reflection message */}
              <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '1.5rem' }}>
                <AnimatePresence mode="wait">
                  {latestMessage && (
                    <motion.p
                      key={latestMessage}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        fontSize: '1.02rem',
                        color: 'var(--rose-soft)',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        margin: 0,
                      }}
                    >
                      "{latestMessage}"
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </>
          ) : (
            /* All cleared emotional message */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', padding: '1.5rem 0' }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(216, 87, 116, 0.2)',
                  border: '1px solid var(--rose-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--rose-soft)',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 0 25px rgba(216, 87, 116, 0.35)',
                }}
              >
                <Heart size={26} fill="var(--rose-soft)" />
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--cream-pure)',
                  fontStyle: 'italic',
                  marginBottom: '0.6rem',
                }}
              >
                "{game4.completion.lead}"
              </h3>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--rose-soft)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                  marginBottom: '2.2rem',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {game4.completion.message}
              </p>

              <button
                onClick={handleReadyToListen}
                className="btn-primary"
                style={{
                  padding: '1.05rem 2.8rem',
                  fontSize: '1.15rem',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px rgba(216, 87, 116, 0.5)',
                }}
              >
                <Sparkles size={18} />
                <span>{game4.completion.buttonText}</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
