import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, HelpCircle } from 'lucide-react';
import { siteContent } from '../data/content';

export default function HonestSection() {
  const { honestPart } = siteContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="honest-section" className="section-spacing">
      <div className="container-narrow">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="glass-card"
          style={{
            background: 'linear-gradient(180deg, rgba(42, 11, 20, 0.8) 0%, rgba(22, 5, 10, 0.95) 100%)',
            border: '1px solid rgba(242, 168, 183, 0.16)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 25px rgba(216, 87, 116, 0.08)',
            textAlign: 'center',
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
          }}
        >
          {/* Section Tag */}
          <motion.div variants={itemVariants} className="badge-tag" style={{ margin: '0 auto 1.5rem auto' }}>
            <AlertCircle size={13} />
            <span>{honestPart.sectionTag}</span>
          </motion.div>

          {/* Heading: I'll admit it */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
              color: 'var(--cream-pure)',
              fontStyle: 'italic',
            }}
          >
            "{honestPart.title}"
          </motion.h2>

          {/* Lead: I haven't always understood you the way I should have */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.15rem, 2.8vw, 1.4rem)',
              color: 'var(--rose-soft)',
              fontWeight: 400,
              lineHeight: 1.5,
              marginBottom: '2.5rem',
              maxWidth: '560px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            {honestPart.lead}
          </motion.p>

          {/* List of Honest Admissions */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.1rem',
              maxWidth: '520px',
              margin: '0 auto 2.8rem auto',
              textAlign: 'left',
            }}
          >
            {honestPart.paragraphs.map((text, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(242, 168, 183, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span
                  style={{
                    color: 'var(--rose-accent)',
                    fontSize: '1.1rem',
                    lineHeight: '1.4',
                  }}
                >
                  •
                </span>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--cream-soft)',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Highlight & Punchline: And honestly... I acted like an idiot */}
          <motion.div
            variants={itemVariants}
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(242, 168, 183, 0.12)',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                marginBottom: '0.6rem',
                fontStyle: 'italic',
              }}
            >
              {honestPart.highlight}
            </p>
            <h3
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: 'var(--rose-soft)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                marginBottom: '1.25rem',
              }}
            >
              {honestPart.punchline}
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              {honestPart.reflection}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
