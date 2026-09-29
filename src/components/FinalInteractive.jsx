import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MessageCircleHeart, Smile, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/content';

export default function FinalInteractive() {
  const { finalInteractive } = siteContent;
  const [step, setStep] = useState(0); // 0: initial, 1: revealed step 1, 2: revealed step 2
  const [friendFeedback, setFriendFeedback] = useState(null);

  const handleStep1 = (e) => {
    setStep(1);
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 25,
      spread: 50,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: ['#f2a8b7', '#d85774'],
    });
  };

  const handleStep2 = (e) => {
    setStep(2);
    // Emotional warm confetti shower
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#f2a8b7', '#d85774', '#fffdfa', '#fce7ec', '#bb3356'],
      scalar: 1.2,
    });
  };

  const handleFeedback = (response) => {
    setFriendFeedback(response);
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f2a8b7', '#fffdfa', '#d85774'],
    });
  };

  return (
    <section
      className="section-spacing"
      style={{
        position: 'relative',
        paddingTop: '3rem',
        paddingBottom: '8rem',
        textAlign: 'center',
        background: '#0d0206',
      }}
    >
      <div className="container-narrow">
        <div
          className="glass-card"
          style={{
            background: 'linear-gradient(180deg, rgba(35, 9, 18, 0.75) 0%, rgba(20, 5, 10, 0.95) 100%)',
            border: '1px solid rgba(242, 168, 183, 0.18)',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            maxWidth: '650px',
            margin: '0 auto',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(216, 87, 116, 0.1)',
          }}
        >
          {/* Step 0: Initial Button */}
          {step === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={handleStep1}
                className="btn-primary"
                style={{
                  padding: '1.1rem 2.8rem',
                  fontSize: '1.15rem',
                  cursor: 'pointer',
                }}
              >
                <Sparkles size={18} />
                <span>{finalInteractive.step1Button}</span>
              </button>
            </motion.div>
          )}

          {/* Step 1: Reveal Step 1 Content */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.55rem)',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--cream-pure)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '2.5rem',
                }}
              >
                "{finalInteractive.step1Reveal}"
              </p>

              <button
                onClick={handleStep2}
                className="btn-primary"
                style={{
                  padding: '1rem 2.4rem',
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #481323 0%, #7d1c37 100%)',
                  border: '1px solid rgba(242, 168, 183, 0.3)',
                }}
              >
                <span>{finalInteractive.step2Button}</span>
              </button>
            </motion.div>
          )}

          {/* Step 2: Final Apology Reveal */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(216, 87, 116, 0.2)',
                  border: '1px solid var(--rose-accent)',
                  color: 'var(--rose-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 0 25px rgba(216, 87, 116, 0.4)',
                }}
              >
                <Heart size={26} fill="var(--rose-soft)" />
              </div>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  marginBottom: '0.6rem',
                }}
              >
                {finalInteractive.step2Lead}
              </p>

              <h3
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                  color: 'var(--rose-soft)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  marginBottom: '2.5rem',
                  textShadow: '0 2px 20px rgba(216, 87, 116, 0.3)',
                }}
              >
                {finalInteractive.step2Apology}
              </h3>

              {/* Gentle friend response options */}
              <div
                style={{
                  paddingTop: '2rem',
                  borderTop: '1px solid rgba(242, 168, 183, 0.15)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--cream-soft)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {finalInteractive.forgivePrompt}
                </p>

                {!friendFeedback ? (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.85rem',
                      justifyContent: 'center',
                    }}
                  >
                    {finalInteractive.forgiveButtons.map((btn, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleFeedback(btn.response)}
                        className="btn-secondary"
                        style={{
                          fontSize: '0.9rem',
                          padding: '0.75rem 1.4rem',
                          cursor: 'pointer',
                        }}
                      >
                        {btn.text}
                      </button>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      background: 'rgba(216, 87, 116, 0.15)',
                      border: '1px solid var(--border-glow)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.2rem 1.6rem',
                      color: 'var(--cream-pure)',
                      fontSize: '1.05rem',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    <p style={{ margin: 0, color: 'var(--cream-pure)' }}>{friendFeedback}</p>
                    <button
                      onClick={() => setFriendFeedback(null)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--rose-soft)',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        marginTop: '0.8rem',
                        textDecoration: 'underline',
                      }}
                    >
                      Change answer
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer info */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-faint)',
              letterSpacing: '0.04em',
            }}
          >
            Made with genuine care, vulnerability, and love for my best friend.
          </p>
        </div>
      </div>
    </section>
  );
}
