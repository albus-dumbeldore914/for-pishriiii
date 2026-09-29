import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, CheckCircle2, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../../data/content';

export default function SentenceGame({ onComplete, isCompleted }) {
  const { game3 } = siteContent;
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState(() =>
    game3.sentences[0].scrambled.map((word, idx) => ({ word, id: `${word}-${idx}` }))
  );
  const [feedback, setFeedback] = useState(null);
  const [isGameDone, setIsGameDone] = useState(isCompleted);

  const currentSentence = game3.sentences[currentSentenceIdx];

  const handleWordClick = (wordObj) => {
    // Add to selected, remove from available
    const nextSelected = [...selectedWords, wordObj];
    const nextAvailable = availableWords.filter((w) => w.id !== wordObj.id);

    setSelectedWords(nextSelected);
    setAvailableWords(nextAvailable);
    setFeedback(null);

    // If all words placed, check correctness
    if (nextSelected.length === currentSentence.target.length) {
      const constructed = nextSelected.map((w) => w.word).join(' ');
      const targetStr = currentSentence.target.join(' ');

      if (constructed === targetStr) {
        setFeedback({ success: true, text: 'Beautifully put. Exactly right.' });
        confetti({
          particleCount: 20,
          spread: 45,
          origin: { y: 0.65 },
          colors: ['#f2a8b7', '#d85774'],
        });
      } else {
        setFeedback({
          success: false,
          text: 'Not quite in the right order... tap "Reset sentence" to try again 😭',
        });
      }
    }
  };

  const handleRemoveWord = (wordObj) => {
    // Remove from selected, return to available
    setSelectedWords((prev) => prev.filter((w) => w.id !== wordObj.id));
    setAvailableWords((prev) => [...prev, wordObj]);
    setFeedback(null);
  };

  const handleResetCurrent = () => {
    setSelectedWords([]);
    setAvailableWords(
      currentSentence.scrambled.map((word, idx) => ({ word, id: `${word}-${idx}` }))
    );
    setFeedback(null);
  };

  const handleNextSentence = () => {
    const nextIdx = currentSentenceIdx + 1;
    if (nextIdx < game3.sentences.length) {
      setCurrentSentenceIdx(nextIdx);
      setSelectedWords([]);
      setAvailableWords(
        game3.sentences[nextIdx].scrambled.map((word, idx) => ({ word, id: `${word}-${idx}` }))
      );
      setFeedback(null);
    } else {
      setIsGameDone(true);
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
            <MessageSquareText size={13} />
            <span>{game3.tag}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              color: 'var(--cream-pure)',
              marginBottom: '0.6rem',
              fontStyle: 'italic',
            }}
          >
            "{game3.title}"
          </h2>
          <p style={{ color: 'var(--cream-muted)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto' }}>
            {game3.subtitle}
          </p>
        </div>

        {/* Game Box */}
        <div
          className="glass-card"
          style={{
            maxWidth: '620px',
            margin: '0 auto',
            background: 'rgba(38, 11, 20, 0.75)',
            padding: '2.2rem',
          }}
        >
          {!isGameDone ? (
            <div>
              {/* Progress counter */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.4rem',
                  fontSize: '0.82rem',
                  color: 'var(--rose-soft)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                <span>Sentence {currentSentenceIdx + 1} of {game3.sentences.length}</span>
                <button
                  onClick={handleResetCurrent}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--rose-soft)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.8rem',
                  }}
                >
                  <RotateCcw size={12} />
                  <span>Reset words</span>
                </button>
              </div>

              {/* Target Drop Zone */}
              <div
                style={{
                  minHeight: '75px',
                  background: 'rgba(22, 5, 10, 0.65)',
                  border: '1.5px dashed rgba(242, 168, 183, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.9rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.8rem',
                }}
              >
                {selectedWords.length === 0 ? (
                  <span style={{ color: 'var(--text-faint)', fontSize: '0.92rem', fontStyle: 'italic' }}>
                    Tap the words below in order...
                  </span>
                ) : (
                  selectedWords.map((item) => (
                    <motion.button
                      key={item.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      onClick={() => handleRemoveWord(item)}
                      title="Tap to remove"
                      style={{
                        background: 'linear-gradient(135deg, #d85774 0%, #aa2748 100%)',
                        border: 'none',
                        color: '#fff',
                        padding: '0.45rem 0.95rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        fontWeight: 500,
                      }}
                    >
                      {item.word}
                    </motion.button>
                  ))
                )}
              </div>

              {/* Available Scrambled Words */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.65rem',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                {availableWords.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleWordClick(item)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(242, 168, 183, 0.2)',
                      color: 'var(--cream-soft)',
                      padding: '0.55rem 1.15rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                    }}
                  >
                    {item.word}
                  </motion.button>
                ))}
              </div>

              {/* Feedback and Continue */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      background: feedback.success
                        ? 'rgba(216, 87, 116, 0.2)'
                        : 'rgba(50, 15, 25, 0.7)',
                      border: feedback.success
                        ? '1px solid var(--rose-accent)'
                        : '1px solid rgba(242, 168, 183, 0.3)',
                      textAlign: 'center',
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        color: 'var(--cream-pure)',
                        fontStyle: 'italic',
                      }}
                    >
                      {feedback.text}
                    </p>

                    {feedback.success && (
                      <button
                        onClick={handleNextSentence}
                        className="btn-primary"
                        style={{
                          marginTop: '0.85rem',
                          padding: '0.55rem 1.4rem',
                          fontSize: '0.88rem',
                          cursor: 'pointer',
                        }}
                      >
                        <span>Next sentence</span>
                        <ArrowRight size={14} />
                      </button>
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
                <Sparkles size={24} />
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
                "{game3.completion.lead}"
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
                {game3.completion.message}
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
                <span>{game3.completion.unlockText}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
