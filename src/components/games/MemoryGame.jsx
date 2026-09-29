import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../../data/content';

export default function MemoryGame({ onComplete, isCompleted }) {
  const { game1 } = siteContent;

  // 6 pairs = 12 cards (Heart, Late nights, Laughing, Memories, Trust, Comfort)
  const initializeCards = () => {
    const rawPairs = [...game1.cards, ...game1.cards];
    return rawPairs
      .map((item, index) => ({
        uniqueId: `${item.id}-${index}`,
        id: item.id,
        symbol: item.symbol,
        label: item.label,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(initializeCards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showCompletion, setShowCompletion] = useState(isCompleted);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched || flippedCards.length === 2) return;

    const newCards = cards.map((c) =>
      c.uniqueId === card.uniqueId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      if (newFlipped[0].id === newFlipped[1].id) {
        // Matched!
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (c.id === newFlipped[0].id ? { ...c, isMatched: true } : c))
          );
          setFlippedCards([]);
          const nextMatches = matchedPairs + 1;
          setMatchedPairs(nextMatches);

          // Subtle heart burst on match
          confetti({
            particleCount: 15,
            spread: 40,
            origin: { y: 0.6 },
            colors: ['#f2a8b7', '#d85774', '#ffffff'],
          });

          if (nextMatches === game1.cards.length) {
            // Completed Game 1!
            setShowCompletion(true);
            onComplete();
            confetti({
              particleCount: 50,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#f2a8b7', '#d85774', '#fffdfa'],
            });
          }
        }, 500);
      } else {
        // No match, flip back
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.uniqueId === newFlipped[0].uniqueId || c.uniqueId === newFlipped[1].uniqueId
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 900);
      }
    }
  };

  const handleReset = () => {
    setCards(initializeCards());
    setFlippedCards([]);
    setMatchedPairs(0);
    setShowCompletion(false);
  };

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>{game1.tag}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              color: 'var(--cream-pure)',
              marginBottom: '0.6rem',
              fontStyle: 'italic',
            }}
          >
            "{game1.title}"
          </h2>
          <p style={{ color: 'var(--cream-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            {game1.subtitle}
          </p>
        </div>

        {/* Card Grid */}
        <div
          className="glass-card"
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            padding: '1.8rem',
            background: 'rgba(38, 11, 20, 0.75)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.85rem',
            }}
          >
            {cards.map((card) => {
              const isOpen = card.isFlipped || card.isMatched;

              return (
                <motion.button
                  key={card.uniqueId}
                  onClick={() => handleCardClick(card)}
                  whileHover={{ scale: card.isMatched ? 1 : 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '12px',
                    border: card.isMatched
                      ? '1px solid var(--rose-accent)'
                      : isOpen
                      ? '1px solid rgba(242, 168, 183, 0.4)'
                      : '1px solid rgba(242, 168, 183, 0.12)',
                    background: card.isMatched
                      ? 'rgba(216, 87, 116, 0.22)'
                      : isOpen
                      ? 'rgba(65, 20, 36, 0.85)'
                      : 'rgba(22, 5, 10, 0.7)',
                    cursor: card.isMatched ? 'default' : 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.2rem',
                    transition: 'background 0.3s ease, border 0.3s ease',
                    boxShadow: isOpen ? '0 8px 16px rgba(0,0,0,0.3)' : 'none',
                    padding: '0.4rem',
                  }}
                  aria-label={isOpen ? card.label : 'Hidden card'}
                >
                  {isOpen ? (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ textAlign: 'center' }}
                    >
                      <span style={{ fontSize: '1.7rem', display: 'block', lineHeight: 1.1 }}>
                        {card.symbol}
                      </span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          color: 'var(--cream-soft)',
                          fontWeight: 500,
                          display: 'block',
                          marginTop: '2px',
                        }}
                      >
                        {card.label}
                      </span>
                    </motion.div>
                  ) : (
                    <Heart size={20} color="var(--rose-soft)" opacity={0.4} />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Quick status bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1.4rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(242, 168, 183, 0.12)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>
              Pairs found: <strong>{matchedPairs}</strong> / {game1.cards.length}
            </span>
            <button
              onClick={handleReset}
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
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Completion Message Box */}
        <AnimatePresence>
          {showCompletion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                marginTop: '2.5rem',
                textAlign: 'center',
                background: 'linear-gradient(145deg, rgba(65, 20, 36, 0.85) 0%, rgba(35, 10, 18, 0.9) 100%)',
                border: '1px solid var(--rose-accent)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.8rem',
                boxShadow: 'var(--shadow-glow)',
                maxWidth: '560px',
                margin: '2.5rem auto 0 auto',
              }}
            >
              <p
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--cream-pure)',
                  marginBottom: '0.4rem',
                }}
              >
                {game1.completion.lead}
              </p>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--rose-soft)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                  marginBottom: '1.4rem',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {game1.completion.message}
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
                <span>{game1.completion.unlockText}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
