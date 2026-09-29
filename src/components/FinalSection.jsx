import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Moon } from 'lucide-react';
import { siteContent } from '../data/content';

export default function FinalSection() {
  const { finalMessage } = siteContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
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
        background: 'linear-gradient(180deg, rgba(20, 5, 10, 0.9) 0%, #0d0206 100%)',
        borderTop: '1px solid rgba(242, 168, 183, 0.1)',
        paddingTop: '6rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Deep atmospheric glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(700px, 95vw)',
          height: 'min(500px, 95vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216, 87, 116, 0.16) 0%, rgba(13, 2, 6, 0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="badge-tag"
          style={{ margin: '0 auto 1.5rem auto' }}
        >
          <Moon size={13} />
          <span>{finalMessage.sectionTag}</span>
        </motion.div>

        {/* Heading: One Last Thing... */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 4.4rem)',
            color: 'var(--cream-pure)',
            marginBottom: '3rem',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 30px rgba(216, 87, 116, 0.25)',
          }}
        >
          "{finalMessage.heading}"
        </motion.h2>

        {/* Main message lines */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            maxWidth: '580px',
            margin: '0 auto 3.5rem auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {finalMessage.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                color: idx === finalMessage.paragraphs.length - 1 ? 'var(--cream-pure)' : 'var(--cream-muted)',
                fontWeight: idx === finalMessage.paragraphs.length - 1 ? 600 : 400,
                lineHeight: 1.6,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* Climax Highlight: Because you're my best friend. And you're worth the effort. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            padding: '2.5rem 2rem',
            background: 'rgba(38, 11, 20, 0.7)',
            border: '1px solid rgba(242, 168, 183, 0.22)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(216, 87, 116, 0.15)',
            marginBottom: '3.5rem',
            backdropFilter: 'blur(16px)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              color: 'var(--cream-soft)',
              fontFamily: 'var(--font-serif)',
              marginBottom: '0.4rem',
              fontStyle: 'italic',
            }}
          >
            "{finalMessage.highlightLead}"
          </p>
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
              color: 'var(--rose-soft)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              marginBottom: '1.25rem',
            }}
          >
            {finalMessage.highlightAccent}
          </h3>

          <div
            style={{
              height: '1px',
              width: '80px',
              background: 'linear-gradient(90deg, transparent, var(--rose-accent), transparent)',
              margin: '0 auto 1.5rem auto',
            }}
          />

          <p
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
              color: 'var(--cream-pure)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              margin: '0 0 1.5rem 0',
            }}
          >
            {finalMessage.gratitude}
          </p>

          {/* Ultimate Closing Promise */}
          <div
            style={{
              marginTop: '1.8rem',
              paddingTop: '1.6rem',
              borderTop: '1px dashed rgba(242, 168, 183, 0.25)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.15rem, 2.8vw, 1.35rem)',
                color: 'var(--rose-soft)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                lineHeight: 1.7,
                whiteSpace: 'pre-line',
                margin: 0,
              }}
            >
              {finalMessage.ultimateClosing}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
