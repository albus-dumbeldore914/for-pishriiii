import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 999,
        background: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <div
        style={{
          height: '100%',
          width: scrollProgress,
          background: 'linear-gradient(90deg, #aa2748, #d85774, #f2a8b7)',
          boxShadow: '0 0 10px rgba(216, 87, 116, 0.6)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
}
