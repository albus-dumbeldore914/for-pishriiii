import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/content';

export default function WantYouToKnowSection() {
  const { wantYouToKnow } = siteContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-tag">
            <Compass size={13} />
            <span>{wantYouToKnow.sectionTag}</span>
          </div>

          {/* Statement Top */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
              color: 'var(--cream-muted)',
              fontWeight: 400,
              fontStyle: 'italic',
              marginBottom: '0.4rem',
            }}
          >
            "{wantYouToKnow.statementTop}"
          </motion.h3>

          {/* Statement Accent */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              color: 'var(--rose-soft)',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}
          >
            "{wantYouToKnow.statementAccent}"
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontSize: '1.05rem',
              color: 'var(--cream-soft)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {wantYouToKnow.subtext}
          </motion.p>
        </div>

        {/* Action Points / Commitments */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '560px',
            margin: '0 auto',
          }}
        >
          {wantYouToKnow.actionPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.1rem',
                background: 'rgba(38, 11, 20, 0.65)',
                border: '1px solid rgba(242, 168, 183, 0.12)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.4rem',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(216, 87, 116, 0.15)',
                  border: '1px solid rgba(242, 168, 183, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--rose-soft)',
                }}
              >
                <CheckCircle2 size={18} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--cream-pure)',
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
