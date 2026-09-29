import React, { useState } from 'react';
import AmbientParticles from './components/AmbientParticles';
import CustomCursor from './components/CustomCursor';
import AudioToggle from './components/AudioToggle';
import JourneyProgress from './components/JourneyProgress';
import HeroSection from './components/HeroSection';

// 4 Emotional Mini-Games
import MemoryGame from './components/games/MemoryGame';
import DecisionGame from './components/games/DecisionGame';
import SentenceGame from './components/games/SentenceGame';
import LetGoGame from './components/games/LetGoGame';

// Unlocked Content Sections
import HonestSection from './components/HonestSection';
import RealizationsSection from './components/RealizationsSection';
import WantYouToKnowSection from './components/WantYouToKnowSection';
import EnvelopeUnlock from './components/EnvelopeUnlock';
import LetterSection from './components/LetterSection';
import ApologySection from './components/ApologySection';
import PromisesSection from './components/PromisesSection';
import FinalSection from './components/FinalSection';
import FinalInteractive from './components/FinalInteractive';
import EasterEggModal from './components/EasterEggModal';

export default function App() {
  const [isHeroOpened, setIsHeroOpened] = useState(false);
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  // Easter egg heart clicks
  const [heartClickCount, setHeartClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleHeroOpen = () => {
    setIsHeroOpened(true);
  };

  const handleCompleteGame1 = () => {
    if (unlockedCount < 1) setUnlockedCount(1);
    setTimeout(() => {
      const el = document.getElementById('honest-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const handleCompleteGame2 = () => {
    if (unlockedCount < 2) setUnlockedCount(2);
    setTimeout(() => {
      const el = document.getElementById('realizations-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const handleCompleteGame3 = () => {
    if (unlockedCount < 3) setUnlockedCount(3);
    setTimeout(() => {
      const el = document.getElementById('want-you-to-know-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const handleCompleteGame4 = () => {
    if (unlockedCount < 4) setUnlockedCount(4);
    setTimeout(() => {
      const el = document.getElementById('envelope-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      const el = document.getElementById('letter-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  };

  const handleSecretHeartClick = () => {
    const nextCount = heartClickCount + 1;
    setHeartClickCount(nextCount);
    if (nextCount >= 5) {
      setShowEasterEgg(true);
      setHeartClickCount(0);
    }
  };

  return (
    <div className="site-wrapper">
      {/* Background ambient floating particles & hearts */}
      <AmbientParticles />

      {/* Desktop subtle aura cursor */}
      <CustomCursor />

      {/* Floating gentle music player toggle */}
      <AudioToggle />

      {/* Sticky Journey Progress Bar */}
      <JourneyProgress
        unlockedCount={unlockedCount}
        total={4}
        onSecretClick={handleSecretHeartClick}
      />

      <main>
        {/* Landing Hero Screen */}
        <HeroSection onOpen={handleHeroOpen} isOpened={isHeroOpened} />

        {/* Journey Start Container */}
        <div id="journey-start">
          {/* ============================================================ */}
          {/* STAGE 1: GAME 1 — "Do You Remember?"                        */}
          {/* ============================================================ */}
          <div id="game1-section">
            <MemoryGame
              onComplete={handleCompleteGame1}
              isCompleted={unlockedCount >= 1}
            />
          </div>

          {/* UNLOCKED PART 1: The Honest Part */}
          {unlockedCount >= 1 && (
            <div id="honest-section">
              <HonestSection />
            </div>
          )}

          {/* ============================================================ */}
          {/* STAGE 2: GAME 2 — "What Would You Choose?"                  */}
          {/* ============================================================ */}
          {unlockedCount >= 1 && (
            <div id="game2-section">
              <DecisionGame
                onComplete={handleCompleteGame2}
                isCompleted={unlockedCount >= 2}
              />
            </div>
          )}

          {/* UNLOCKED PART 2: Things I Realized */}
          {unlockedCount >= 2 && (
            <div id="realizations-section">
              <RealizationsSection />
            </div>
          )}

          {/* ============================================================ */}
          {/* STAGE 3: GAME 3 — "The Things I Should Have Said"           */}
          {/* ============================================================ */}
          {unlockedCount >= 2 && (
            <div id="game3-section">
              <SentenceGame
                onComplete={handleCompleteGame3}
                isCompleted={unlockedCount >= 3}
              />
            </div>
          )}

          {/* UNLOCKED PART 3: What I Want You To Know */}
          {unlockedCount >= 3 && (
            <div id="want-you-to-know-section">
              <WantYouToKnowSection />
            </div>
          )}

          {/* ============================================================ */}
          {/* STAGE 4: GAME 4 — "Leave The Past Behind"                   */}
          {/* ============================================================ */}
          {unlockedCount >= 3 && (
            <div id="game4-section">
              <LetGoGame
                onComplete={handleCompleteGame4}
                isCompleted={unlockedCount >= 4}
              />
            </div>
          )}

          {/* ============================================================ */}
          {/* FINAL UNLOCK SCREEN: WAX-SEALED ENVELOPE (4/4 COMPLETE)      */}
          {/* ============================================================ */}
          {unlockedCount >= 4 && (
            <div id="envelope-section">
              <EnvelopeUnlock
                onOpenEnvelope={handleOpenEnvelope}
                isOpen={isEnvelopeOpen}
              />
            </div>
          )}

          {/* ============================================================ */}
          {/* FULL UNLOCKED APOLOGY NARRATIVE                             */}
          {/* ============================================================ */}
          {isEnvelopeOpen && (
            <div id="letter-section">
              {/* Handwritten Personal Letter */}
              <LetterSection />

              {/* Emotional Centerpiece Apology */}
              <ApologySection />

              {/* The Commitments & Pinky Promise */}
              <PromisesSection />

              {/* Final Emotional Climax */}
              <FinalSection />

              {/* Interactive micro-interactions & feedback */}
              <FinalInteractive />
            </div>
          )}
        </div>
      </main>

      {/* Secret Easter Egg Modal */}
      <EasterEggModal
        isOpen={showEasterEgg}
        onClose={() => setShowEasterEgg(false)}
      />
    </div>
  );
}
