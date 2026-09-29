import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/content';

export default function EnvelopeUnlock({ onOpenEnvelope, isOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f2a8b7', '#d85774', '#fffdfa', '#aa2748'],
      scalar: 1.2,
    });
    setTimeout(() => {
      onOpenEnvelope();
    }, 900);
  };

  return (
    <section
      id="envelope-section"
      className="section-spacing"
      style={{
        position: 'relative',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(45, 12, 23, 0.95) 0%, #0d0206 100%)',
      }}
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="badge-tag" style={{ margin: '0 auto 1.5rem auto' }}>
            <Sparkles size={13} />
            <span>Final Unlock</span>
          </div>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              marginBottom: '0.4rem',
            }}
          >
            Okay...
          </p>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
              color: 'var(--cream-pure)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              marginBottom: '3rem',
            }}
          >
            "You've unlocked what I actually wanted to say."
          </h2>

          {/* Interactive Envelope Graphic */}
          <div
            style={{
              maxWidth: '380px',
              margin: '0 auto 3rem auto',
              position: 'relative',
            }}
          >
            <motion.div
              animate={opening ? { scale: [1, 1.05, 0.95], y: -15 } : { y: [0, -6, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' },
                scale: { duration: 0.8 },
              }}
              style={{
                width: '100%',
                aspectRatio: '1.4',
                background: 'linear-gradient(145deg, #f7efe4 0%, #ecdcc8 100%)',
                borderRadius: '16px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(216, 87, 116, 0.25)',
                border: '1px solid #dfcfbc',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                overflow: 'hidden',
              }}
            >
              {/* Envelope flap visual */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  borderBottom: '2px solid rgba(160, 130, 100, 0.25)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background: 'linear-gradient(180deg, #ecdcc8 0%, #e2ceb8 100%)',
                  transformOrigin: 'top',
                  transform: opening ? 'rotateX(180deg)' : 'none',
                  transition: 'transform 0.8s ease',
                  zIndex: 4,
                }}
              />

              {/* Addressed To */}
              <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#8c6b65',
                    display: 'block',
                    marginBottom: '0.2rem',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Personal & Confidential
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-handwriting)',
                    fontSize: '2.4rem',
                    color: '#341a20',
                    fontWeight: 700,
                    margin: '0 0 0.8rem 0',
                    lineHeight: 1.1,
                  }}
                >
                  For {siteContent.recipientName} ❤️
                </p>

                {/* Wax seal */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, #c82d49 0%, #7d152a 80%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f8d2db',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Heart size={22} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Button: Open it */}
          {!isOpen && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="btn-primary"
              style={{
                padding: '1.15rem 3.2rem',
                fontSize: '1.25rem',
                cursor: 'pointer',
                boxShadow: '0 0 35px rgba(216, 87, 116, 0.6)',
              }}
            >
              <Mail size={20} />
              <span>Open it.</span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
