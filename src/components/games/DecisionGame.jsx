import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../../data/content';

export default function DecisionGame({ onComplete, isCompleted }) {
  const { game2 } = siteContent;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [gameFinished, setGameFinished] = useState(isCompleted);

  const currentSituation = game2.situations[currentIdx];

  const handleChoice = (choice) => {
    setSelectedFeedback(choice.feedback);
    setIsAnswerCorrect(choice.correct);

    if (choice.correct) {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.65 },
        colors: ['#f2a8b7', '#d85774'],
      });
    }
  };

  const handleNext = () => {
    setSelectedFeedback(null);
    setIsAnswerCorrect(false);

    if (currentIdx + 1 < game2.situations.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setGameFinished(true);
      onComplete();
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f2a8b7', '#d85774', '#fffdfa'],
      });
    }
  };

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge-tag">
            <HelpCircle size={13} />
            <span>{game2.tag}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              color: 'var(--cream-pure)',
              marginBottom: '0.6rem',
              fontStyle: 'italic',
            }}
          >
            "{game2.title}"
          </h2>
          <p style={{ color: 'var(--cream-muted)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            {game2.subtitle}
          </p>
        </div>

        {/* Game Box */}
        <div
          className="glass-card"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            background: 'rgba(38, 11, 20, 0.75)',
            padding: '2.2rem',
          }}
        >
          {!gameFinished ? (
            <div>
              {/* Situation counter */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.2rem',
                  fontSize: '0.82rem',
                  color: 'var(--rose-soft)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                <span>Situation {currentIdx + 1} of {game2.situations.length}</span>
                <span>{isAnswerCorrect ? 'Thoughtful choice ✓' : 'Choose wisely'}</span>
              </div>

              {/* Prompt situation */}
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.55rem)',
                  color: 'var(--cream-pure)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1.45,
                  marginBottom: '1.8rem',
                }}
              >
                "{currentSituation.situation}"
              </h3>

              {/* Choice options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {currentSituation.choices.map((choice, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleChoice(choice)}
                    style={{
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(242, 168, 183, 0.14)',
                      color: 'var(--cream-soft)',
                      fontSize: '0.98rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '1px solid var(--rose-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        color: 'var(--rose-soft)',
                        flexShrink: 0,
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{choice.text}</span>
                  </motion.button>
                ))}
              </div>

              {/* Feedback Alert */}
              <AnimatePresence>
                {selectedFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      marginTop: '1.5rem',
                      padding: '1.1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: isAnswerCorrect
                        ? 'rgba(216, 87, 116, 0.2)'
                        : 'rgba(50, 15, 25, 0.7)',
                      border: isAnswerCorrect
                        ? '1px solid var(--rose-accent)'
                        : '1px solid rgba(242, 168, 183, 0.25)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.94rem',
                        color: 'var(--cream-pure)',
                        lineHeight: 1.55,
                        margin: 0,
                        fontStyle: 'italic',
                      }}
                    >
                      {selectedFeedback}
                    </p>

                    {isAnswerCorrect && (
                      <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                        <button
                          onClick={handleNext}
                          className="btn-primary"
                          style={{
                            padding: '0.6rem 1.4rem',
                            fontSize: '0.88rem',
                            cursor: 'pointer',
                          }}
                        >
                          <span>Continue</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Game completed screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '1rem 0' }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(216, 87, 116, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--rose-soft)',
                  margin: '0 auto 1.2rem auto',
                }}
              >
                <Heart size={24} fill="currentColor" />
              </div>

              <h3
                style={{
                  fontSize: '1.6rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--cream-pure)',
                  marginBottom: '0.5rem',
                  fontStyle: 'italic',
                }}
              >
                "{game2.completion.lead}"
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--rose-soft)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                  marginBottom: '1.8rem',
                }}
              >
                {game2.completion.message}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(216, 87, 116, 0.25)',
                  padding: '0.55rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--cream-pure)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={16} color="var(--rose-soft)" />
                <span>{game2.completion.unlockText}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
