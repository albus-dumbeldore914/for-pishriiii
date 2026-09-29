import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ear, HeartHandshake, Scale, Eye, Sparkles, ChevronRight } from 'lucide-react';
import { siteContent } from '../data/content';

const iconMap = {
  Ear: Ear,
  HeartHandshake: HeartHandshake,
  Scale: Scale,
  Eye: Eye,
};

export default function RealizationsSection() {
  const { realizations } = siteContent;
  const [activeCard, setActiveCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>{realizations.sectionTag}</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              marginBottom: '0.8rem',
              color: 'var(--cream-pure)',
            }}
          >
            {realizations.title}
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--cream-muted)',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            {realizations.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {realizations.cards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Sparkles;
            const isExpanded = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => setActiveCard(isExpanded ? null : card.id)}
                className="glass-card"
                style={{
                  cursor: 'pointer',
                  padding: '2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: isExpanded
                    ? 'linear-gradient(145deg, rgba(65, 20, 36, 0.85) 0%, rgba(35, 10, 18, 0.9) 100%)'
                    : 'rgba(38, 11, 20, 0.65)',
                  border: isExpanded
                    ? '1px solid var(--rose-accent)'
                    : '1px solid rgba(242, 168, 183, 0.12)',
                  boxShadow: isExpanded
                    ? '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(216, 87, 116, 0.2)'
                    : 'var(--shadow-card)',
                }}
              >
                <div>
                  {/* Card Icon & Index */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.4rem',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(216, 87, 116, 0.15)',
                        border: '1px solid rgba(242, 168, 183, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--rose-soft)',
                      }}
                    >
                      <IconComponent size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.4rem',
                        fontStyle: 'italic',
                        color: 'var(--rose-soft)',
                        opacity: 0.5,
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      marginBottom: '0.8rem',
                      color: 'var(--cream-pure)',
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    "{card.title}"
                  </h3>

                  {/* Card Quote */}
                  <p
                    style={{
                      fontSize: '0.98rem',
                      color: 'var(--cream-soft)',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {card.quote}
                  </p>
                </div>

                {/* Additional reflective detail */}
                <div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        style={{
                          overflow: 'hidden',
                          borderTop: '1px solid rgba(242, 168, 183, 0.12)',
                          paddingTop: '1rem',
                          marginTop: '0.5rem',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '0.9rem',
                            color: 'var(--rose-soft)',
                            lineHeight: 1.55,
                          }}
                        >
                          {card.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      color: 'var(--rose-soft)',
                      opacity: 0.85,
                      marginTop: '1rem',
                    }}
                  >
                    <span>{isExpanded ? 'Tap to close' : 'Tap to read reflection'}</span>
                    <ChevronRight
                      size={14}
                      style={{
                        transform: isExpanded ? 'rotate(90deg)' : 'none',
                        transition: 'transform 0.25s ease',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
