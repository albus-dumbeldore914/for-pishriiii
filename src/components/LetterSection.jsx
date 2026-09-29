import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Edit3, Type, Stamp } from 'lucide-react';
import { siteContent } from '../data/content';

export default function LetterSection() {
  const { letter } = siteContent;
  const [useHandwriting, setUseHandwriting] = useState(true);

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge-tag">
            <Mail size={13} />
            <span>{letter.sectionTag}</span>
          </div>

          {/* Toggle between handwriting & print font for accessibility */}
          <div style={{ marginTop: '0.5rem' }}>
            <button
              onClick={() => setUseHandwriting(!useHandwriting)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(242, 168, 183, 0.15)',
                borderRadius: 'var(--radius-full)',
                padding: '0.4rem 0.9rem',
                fontSize: '0.8rem',
                color: 'var(--rose-soft)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'var(--transition-smooth)',
              }}
            >
              <Type size={14} />
              <span>{useHandwriting ? 'Switch to print font' : 'Switch to handwriting font'}</span>
            </button>
          </div>
        </div>

        {/* Vintage Parchment Letter Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'var(--parchment-bg)',
            color: 'var(--ink-color)',
            borderRadius: '12px',
            padding: 'clamp(2rem, 6vw, 4rem) clamp(1.8rem, 5vw, 3.5rem)',
            position: 'relative',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), inset 0 0 80px rgba(180, 140, 100, 0.12)',
            border: '1px solid var(--parchment-border)',
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(245, 235, 218, 0.4) 100%)`,
          }}
        >
          {/* Subtle Washi Tape on Top Center */}
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%) rotate(-1deg)',
              width: '120px',
              height: '26px',
              background: 'rgba(216, 87, 116, 0.35)',
              border: '1px dashed rgba(216, 87, 116, 0.4)',
              backdropFilter: 'blur(2px)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          />

          {/* Letter Salutation */}
          <h3
            style={{
              fontFamily: useHandwriting ? 'var(--font-handwriting)' : 'var(--font-serif)',
              fontSize: useHandwriting ? 'clamp(2.4rem, 5vw, 3.2rem)' : 'clamp(2rem, 4vw, 2.6rem)',
              color: 'var(--ink-color)',
              marginBottom: '1.8rem',
              fontWeight: 700,
            }}
          >
            {letter.salutation}
          </h3>

          {/* Letter Paragraphs */}
          <div
            style={{
              fontFamily: useHandwriting ? 'var(--font-handwriting)' : 'var(--font-sans)',
              fontSize: useHandwriting ? 'clamp(1.35rem, 3vw, 1.6rem)' : 'clamp(1rem, 2.5vw, 1.12rem)',
              lineHeight: useHandwriting ? 1.6 : 1.75,
              color: 'var(--ink-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {letter.paragraphs.map((para, idx) => (
              <p key={idx} style={{ color: 'var(--ink-color)', margin: 0 }}>
                {para}
              </p>
            ))}

            {/* Customizable Personal Space Callout */}
            <div
              style={{
                margin: '1.2rem 0',
                padding: '1.2rem 1.4rem',
                background: 'rgba(180, 50, 80, 0.05)',
                borderLeft: '3px solid var(--rose-accent)',
                borderRadius: '0 8px 8px 0',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--burgundy-bright)',
                  marginBottom: '0.4rem',
                }}
              >
                <Edit3 size={13} />
                <span>{letter.personalNote.heading}</span>
              </div>
              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--ink-muted)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                "{letter.personalNote.content}"
              </p>
            </div>
          </div>

          {/* Letter Sign-off and Wax Seal */}
          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.8rem',
              borderTop: '1px dashed rgba(160, 130, 110, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: useHandwriting ? 'var(--font-handwriting)' : 'var(--font-serif)',
                  fontSize: useHandwriting ? '1.35rem' : '1.05rem',
                  color: 'var(--ink-muted)',
                  margin: 0,
                }}
              >
                {letter.signOff}
              </p>
              <h4
                style={{
                  fontFamily: useHandwriting ? 'var(--font-handwriting)' : 'var(--font-serif)',
                  fontSize: useHandwriting ? '2.4rem' : '1.6rem',
                  color: 'var(--burgundy-bright)',
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                {letter.signature}
              </h4>
            </div>

            {/* Decorative Wax Seal */}
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #bf2642 0%, #700f21 80%)',
                boxShadow: '0 4px 14px rgba(112, 15, 33, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f9d2dc',
                transform: 'rotate(12deg)',
                border: '2px solid rgba(255, 255, 255, 0.15)',
              }}
              title="Sealed with sincerity"
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  fontWeight: 700,
                }}
              >
                ❤️
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
