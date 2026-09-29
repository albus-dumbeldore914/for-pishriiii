/**
 * ============================================================================
 * CENTRAL CONTENT FILE FOR PISHRIIII & UR PISHRIAAA
 * ============================================================================
 */

export const siteContent = {
  // Personal names
  recipientName: "Pishriiii",
  senderName: "ur pishriaaa",

  // Audio configuration
  audio: {
    title: "Soft Piano & Ambient Lo-Fi",
    customAudioUrl: null, // Built-in gentle synthesizer used if null
  },

  // Opening Screen / Landing
  hero: {
    preTitle: "A quiet note just for you",
    title: "Hey Pishriiii...",
    subtitle: "I owe you an apology.",
    disclaimer: "Not the casual 'sorry' that people say and move on from.\nA real one.",
    buttonText: "Start our little journey ❤️",
  },

  // Game 1: "Do You Remember?" (Memory Match)
  game1: {
    title: "Do You Remember?",
    subtitle: "Flip and match the things that matter most in our friendship.",
    tag: "Game 1 of 4 • Remembering the good things",
    cards: [
      { id: 'heart', symbol: '❤️', label: 'Heart' },
      { id: 'night', symbol: '🌙', label: 'Late nights' },
      { id: 'laugh', symbol: '😂', label: 'Laughing' },
      { id: 'camera', symbol: '📸', label: 'Memories' },
      { id: 'trust', symbol: '🤝', label: 'Trust' },
      { id: 'comfort', symbol: '🫂', label: 'Comfort' },
    ],
    completion: {
      lead: "See?",
      message: "Some things are worth remembering.\nAnd our friendship is one of them.",
      unlockText: "Unlocked: Part 1 — The Honest Truth 🔓",
    }
  },

  // Game 2: "What Would You Choose?" (Emotional Decision Game)
  game2: {
    title: "What Would You Choose?",
    subtitle: "What should someone who truly cares actually do?",
    tag: "Game 2 of 4 • Understanding feelings",
    situations: [
      {
        id: 1,
        situation: "Pishriiii suddenly becomes quiet.",
        choices: [
          { text: "Assume she's angry at you", correct: false, feedback: "Not quite... jumping to conclusions was where I messed up 😭" },
          { text: "Get angry back", correct: false, feedback: "Definitely not... getting defensive never solved anything 😭" },
          { text: "Ask if she's okay & give her gentle space ❤️", correct: true, feedback: "Exactly. Sometimes people don't need pressure. They just need someone who gently cares." },
        ],
      },
      {
        id: 2,
        situation: "You don't understand why she's upset.",
        choices: [
          { text: "Argue about it", correct: false, feedback: "Nope... turning confusion into an argument is my classic stupid mistake 😭" },
          { text: "Ignore it and act like nothing happened", correct: false, feedback: "Ignoring feelings only hurts more 😭" },
          { text: "Try to understand her side without judging ❤️", correct: true, feedback: "Exactly. Not every mood needed an argument. Understanding is always worth the patience." },
        ],
      },
      {
        id: 3,
        situation: "You realize you said something that hurt her.",
        choices: [
          { text: "Make an excuse or defend it", correct: false, feedback: "Excuses never heal hurt feelings... 😭" },
          { text: "Blame the situation or mood", correct: false, feedback: "Shifting blame is coward behavior 😭" },
          { text: "Admit you were wrong and genuinely apologize ❤️", correct: true, feedback: "Exactly. Real friendship means putting pride aside and caring more about her feelings than winning." },
        ],
      },
    ],
    completion: {
      lead: "That's what I should have done too.",
      message: "Sometimes people don't need a debate or an excuse.\nThey just need someone to truly understand them.",
      unlockText: "Unlocked: Part 2 — Things I Realized 🔓",
    }
  },

  // Game 3: "The Things I Should Have Said" (Sentence Unscramble)
  game3: {
    title: "The Things I Should Have Said",
    subtitle: "Tap the words in the right order to rebuild what I should have known all along.",
    tag: "Game 3 of 4 • Realizing my mistakes",
    sentences: [
      {
        id: 1,
        target: ["I", "should", "have", "listened", "more."],
        scrambled: ["listened", "I", "have", "more.", "should"],
      },
      {
        id: 2,
        target: ["I", "should", "have", "reacted", "less."],
        scrambled: ["reacted", "should", "less.", "I", "have"],
      },
      {
        id: 3,
        target: ["I", "should", "have", "understood", "you", "better."],
        scrambled: ["understood", "you", "should", "better.", "have", "I"],
      },
      {
        id: 4,
        target: ["Your", "feelings", "mattered", "too."],
        scrambled: ["mattered", "feelings", "Your", "too."],
      },
      {
        id: 5,
        target: ["I", "should", "have", "thought", "before", "speaking."],
        scrambled: ["thought", "speaking.", "I", "before", "should", "have"],
      },
    ],
    completion: {
      lead: "Funny...",
      message: "Those are exactly the things I wish I had understood earlier.\nEvery single one of them.",
      unlockText: "Unlocked: Part 3 — What I Want You To Know 🔓",
    }
  },

  // Game 4: "Leave The Past Behind" (Emotional Letting Go)
  game4: {
    title: "Leave The Past Behind",
    subtitle: "Tap on each floating cloud of past regret to clear the air.",
    tag: "Game 4 of 4 • Leaving the mistakes behind",
    floatingItems: [
      { id: 'anger', word: 'Anger', message: 'I should have taken a breath before reacting.' },
      { id: 'misunderstanding', word: 'Misunderstanding', message: 'I should have asked instead of assuming.' },
      { id: 'arguments', word: 'Stupid arguments', message: 'Not everything needed to become an argument.' },
      { id: 'overthinking', word: 'Overthinking', message: 'I should have trusted you and not let fears take over.' },
      { id: 'assumptions', word: 'Assumptions', message: 'Assuming what you were thinking was unfair to you.' },
      { id: 'words', word: 'Things I said', message: 'Some words can\'t be taken back, but I can regret them deeply.' },
      { id: 'silence', word: 'Things I should\'ve understood', message: 'You just needed patience and warmth from me.' },
    ],
    completion: {
      lead: "Some things can't be undone.",
      message: "But they can be learned from.\nAnd I'm ready to be the best friend you actually deserve.",
      buttonText: "I'm ready to listen ❤️",
    }
  },

  // Section 1 — The Honest Part (Unlocked after Game 1)
  honestPart: {
    sectionTag: "Unlocked with Game 1 • Vulnerable & Honest",
    title: "I'll admit it.",
    lead: "I haven't always understood you the way I should have, Pishriiii.",
    paragraphs: [
      "Sometimes I didn't understand your mood.",
      "Sometimes I misunderstood what you were feeling.",
      "Sometimes I reacted before actually trying to understand you.",
    ],
    highlight: "And honestly...",
    punchline: "I acted like a complete idiot.",
    reflection: "Instead of being someone who made you feel safe, heard, and at ease, there were times I let my own frustration and stupid misunderstandings get in the way. That's entirely on me."
  },

  // Section 2 — Things I Realized (Unlocked after Game 2)
  realizations: {
    sectionTag: "Unlocked with Game 2 • Hindsight & Lessons",
    title: "Things I Realized",
    subtitle: "It took stepping back and thinking about us to see where I went wrong.",
    cards: [
      {
        id: "listen",
        icon: "Ear",
        title: "I should have listened.",
        quote: "Instead of immediately reacting, I should have actually listened to what you were trying to say.",
        detail: "You weren't trying to give me a hard time. You were just sharing your world with me, and I should have met that with gentleness, not defensiveness."
      },
      {
        id: "understand",
        icon: "HeartHandshake",
        title: "I should have understood.",
        quote: "Not every mood needed an argument. Not every situation needed a reaction.",
        detail: "You have days when things feel heavy or confusing. I should have recognized that and given you warmth instead of taking it personally."
      },
      {
        id: "stupid-things",
        icon: "Scale",
        title: "I shouldn't have made stupid things bigger.",
        quote: "Some things were honestly not worth making you sad or angry over.",
        detail: "Looking back at what sparked friction... they were so silly and tiny compared to what our friendship means to me. Blowing them up was senseless."
      },
      {
        id: "feelings",
        icon: "Eye",
        title: "I should have thought about your feelings too.",
        quote: "I was so focused on how I felt that sometimes I forgot to think about how my actions were making you feel.",
        detail: "Our bond isn't about who is right or winning an argument. It's about looking after you, and I lost sight of that when it mattered most."
      }
    ]
  },

  // Section 4 — Something I Want You To Know (Unlocked after Game 3)
  wantYouToKnow: {
    sectionTag: "Unlocked with Game 3 • Looking Forward",
    statementTop: "I can't change the things I've already done.",
    statementAccent: "But I can change what I do next.",
    subtext: "I don't want this apology to just be words on a screen. I want to actually become better at understanding you, Pishriiii.",
    actionPoints: [
      {
        title: "Listen first",
        text: "I'll try to listen before reacting."
      },
      {
        title: "Understand first",
        text: "I'll try to understand before assuming."
      },
      {
        title: "Feel first",
        text: "I'll try to think about your feelings before saying something stupid."
      },
      {
        title: "Accountability",
        text: "And when I mess up, I'll own it instead of making excuses."
      }
    ]
  },

  // Section 6 — The Personal Letter (Revealed after Envelope Unlock)
  letter: {
    sectionTag: "A Letter To Pishriiii",
    salutation: "To My Best Friend, Pishriiii,",
    paragraphs: [
      "I know saying sorry doesn't magically erase everything. And I'm not expecting it to.",
      "I just wanted you to know that I've thought about the things I've done, and I genuinely regret the moments where I made you sad, angry, or disappointed.",
      "You're someone I genuinely care about, and I don't want my stupidity to become the reason you feel hurt.",
      "I might not always understand everything you're feeling right away. But I promise I'll try harder to understand.",
      "I'll listen more. I'll react less. And I'll never intentionally take your feelings for granted.",
      "I'm sorry, Pishriiii. For real."
    ],
    personalNote: {
      heading: "A personal note just for you:",
      content: "Even when things get messy or we don't see eye to eye, having you as my best friend has made life so much brighter. I never want to jeopardize that over foolish pride or momentary misunderstandings.",
    },
    signOff: "With genuine love & regret,",
    signature: "ur pishriaaa"
  },

  // Section 3 — The Apology Centerpiece
  apology: {
    sectionTag: "From the bottom of my heart",
    mainHeading: "I'm Sorry, Pishriiii.",
    lines: [
      "I'm sorry for the times I misunderstood you.",
      "I'm sorry for the stupid arguments.",
      "I'm sorry for getting upset over things that didn't deserve that kind of reaction.",
      "I'm sorry for making you feel bad when I should have been someone who made things better.",
      "And I'm especially sorry for the times I made you feel like your feelings weren't understood."
    ],
    closingNote: "You deserved so much better from me."
  },

  // Section 5 — The Promise
  promises: {
    sectionTag: "My Commitment To You",
    title: "So here's my promise...",
    list: [
      "I'll listen.",
      "I'll try to understand.",
      "I'll stop turning stupid things into stupid fights.",
      "I'll think before I react.",
      "I'll respect your feelings.",
      "And I'll try my best not to repeat the same mistakes."
    ],
    footerLead: "Not because I have to...",
    footerAccent: "Because you're important to me.",
    interactivePrompt: "Click to seal this pinky promise 🤝"
  },

  // Section 8 — Final Message
  finalMessage: {
    sectionTag: "The bottom line",
    heading: "One Last Thing...",
    paragraphs: [
      "I'm not asking you to forget everything.",
      "I'm not asking you to forgive me immediately.",
      "I just want you to know that I'm sorry.",
      "And I'll do better."
    ],
    highlightLead: "Because you're my best friend, Pishriiii.",
    highlightAccent: "And you're worth every bit of effort.",
    gratitude: "Thank you for still being here. ❤️",
    // Exact requested final line:
    ultimateClosing: "I can't promise I'll never mess up again...\nBut I can promise I'll try harder to understand you.\nAnd I'll never stop caring about you. ❤️"
  },

  // Final Interactive Element (Micro-interactions)
  finalInteractive: {
    step1Button: "One More Thing...",
    step1Reveal: "I'll probably still be stupid sometimes... But I'll try my absolute best to never make you feel like your feelings don't matter.",
    step2Button: "Okay... I'm done embarrassing myself 😭",
    step2Lead: "Just remember...",
    step2Apology: "I'm really, really sorry, Pishriiii. ❤️",
    forgivePrompt: "Are we okay? (Take all the time you need, no pressure at all)",
    forgiveButtons: [
      { text: "I still need some time 💭", response: "Totally understood, Pishriiii. Take all the time you need. I'm right here whenever you're ready. ❤️" },
      { text: "You're still an idiot, but I forgive you 🫂", response: "Thank you so much, Pishriiii! I promise to be a better friend to you every single day. 🤍" }
    ]
  },

  // Secret Easter Egg (5 clicks on secret heart)
  easterEgg: {
    title: "Shhh... You Found The Secret! 🤫",
    line1: "Okay fine...",
    line2: "I made this entire website because I didn't know how else to say:",
    highlight: "I'm really sorry.",
    footer: "Don't tell anyone how embarrassing this is. 😭"
  }
};
