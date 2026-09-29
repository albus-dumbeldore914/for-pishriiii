import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteContent } from '../data/content';

export default function ApologySection() {
  const { apology } = siteContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="section-spacing"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(55, 14, 28, 0.95) 0%, rgba(20, 5, 10, 0.98) 100%)',
        borderTop: '1px solid rgba(242, 168, 183, 0.1)',
        borderBottom: '1px solid rgba(242, 168, 183, 0.1)',
      }}
    >
      {/* Center glowing heart watermark / aura */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(600px, 90vw)',
          height: 'min(600px, 90vw)',
          background: 'radial-gradient(circle, rgba(216, 87, 116, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Subtle decorative heart badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(216, 87, 116, 0.15)',
            border: '1px solid rgba(242, 168, 183, 0.3)',
            color: 'var(--rose-soft)',
            marginBottom: '1.2rem',
            boxShadow: '0 0 20px rgba(216, 87, 116, 0.25)',
          }}
        >
          <Heart size={22} fill="currentColor" />
        </motion.div>

        {/* Section tag */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--rose-soft)',
            marginBottom: '1rem',
          }}
        >
          {apology.sectionTag}
        </motion.p>

        {/* Emotional Main Heading: I'm Sorry. */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            color: 'var(--cream-pure)',
            letterSpacing: '-0.02em',
            marginBottom: '2.8rem',
            textShadow: '0 4px 30px rgba(216, 87, 116, 0.3)',
            fontStyle: 'italic',
          }}
        >
          {apology.mainHeading}
        </motion.h2>

        {/* Apology Lines */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.6rem',
            maxWidth: '620px',
            margin: '0 auto 3rem auto',
          }}
        >
          {apology.lines.map((line, index) => {
            const isSpecial = index === apology.lines.length - 1;
            return (
              <motion.div
                key={index}
                variants={lineVariants}
                style={{
                  padding: isSpecial ? '1.2rem 1.6rem' : '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: isSpecial ? 'rgba(216, 87, 116, 0.12)' : 'transparent',
                  border: isSpecial ? '1px solid rgba(242, 168, 183, 0.22)' : 'none',
                  backdropFilter: isSpecial ? 'blur(10px)' : 'none',
                }}
              >
                <p
                  style={{
                    fontSize: isSpecial ? 'clamp(1.1rem, 2.5vw, 1.28rem)' : 'clamp(1.05rem, 2.3vw, 1.2rem)',
                    color: isSpecial ? 'var(--cream-pure)' : 'var(--cream-soft)',
                    fontWeight: isSpecial ? 500 : 400,
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  "{line}"
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing Note: You deserved better from me. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'inline-block',
            borderTop: '1px solid rgba(242, 168, 183, 0.2)',
            paddingTop: '1.8rem',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.55rem)',
              color: 'var(--rose-soft)',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.02em',
              fontWeight: 600,
            }}
          >
            {apology.closingNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
