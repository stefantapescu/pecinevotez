export const questions = [
  {
    question: "Ce faci într-o dimineață de weekend?",
    options: [
      { text: "Mă trezesc devreme și fac sport", scores: { traditional: 2, authoritarian: 1, economic_right: 1 } },
      { text: "Dorm până la prânz", scores: { traditional: -1, authoritarian: -1, economic_right: 0 } },
      { text: "Citesc știrile și beau cafea", scores: { traditional: 0, authoritarian: 0, economic_right: 1 } },
      { text: "Merg la piață să cumpăr produse locale", scores: { traditional: 1, authoritarian: 0, economic_right: -1 } }
    ]
  },
  {
    question: "Care este atitudinea ta față de tradițiile românești?",
    options: [
      { text: "Sunt esențiale pentru identitatea noastră", scores: { traditional: 3, authoritarian: 1, economic_right: 0 } },
      { text: "Unele sunt frumoase, altele depășite", scores: { traditional: 1, authoritarian: 0, economic_right: 0 } },
      { text: "Prefer să adopt obiceiuri moderne", scores: { traditional: -2, authoritarian: -1, economic_right: 1 } },
      { text: "Nu mă interesează prea mult", scores: { traditional: -1, authoritarian: 0, economic_right: 0 } }
    ]
  },
  {
    question: "Ce fel de muzică asculți cel mai des?",
    options: [
      { text: "Manele și muzică populară", scores: { traditional: 2, authoritarian: 0, economic_right: 0 } },
      { text: "Rock și metal", scores: { traditional: -1, authoritarian: -1, economic_right: 0 } },
      { text: "Hip-hop și trap", scores: { traditional: -1, authoritarian: 0, economic_right: 1 } },
      { text: "Clasică și jazz", scores: { traditional: 1, authoritarian: 0, economic_right: 1 } }
    ]
  },
  {
    question: "Cum te simți când vezi steagul României?",
    options: [
      { text: "Mândru și emoționat", scores: { traditional: 2, authoritarian: 1, economic_right: 0 } },
      { text: "Indiferent", scores: { traditional: -1, authoritarian: 0, economic_right: 0 } },
      { text: "Depinde de context", scores: { traditional: 0, authoritarian: -1, economic_right: 0 } },
      { text: "Mă gândesc la problemele țării", scores: { traditional: 0, authoritarian: 0, economic_right: -1 } }
    ]
  },
  {
    question: "Ce faci când vezi o știre politică controversată?",
    options: [
      { text: "Comentez imediat pe rețelele sociale", scores: { traditional: 0, authoritarian: 1, economic_right: 0 } },
      { text: "Verific mai multe surse înainte să-mi formez o opinie", scores: { traditional: 0, authoritarian: -1, economic_right: 0 } },
      { text: "Discut cu prietenii despre ea", scores: { traditional: 0, authoritarian: 0, economic_right: 0 } },
      { text: "Ignor știrile politice în general", scores: { traditional: 0, authoritarian: -1, economic_right: 1 } }
    ]
  },
  {
    question: "Ce crezi despre Uniunea Europeană?",
    options: [
      { text: "A adus multe beneficii României", scores: { traditional: -1, authoritarian: 0, economic_right: 0 } },
      { text: "Ne limitează suveranitatea", scores: { traditional: 2, authoritarian: 1, economic_right: 1 } },
      { text: "Are aspecte bune și rele", scores: { traditional: 0, authoritarian: 0, economic_right: 0 } },
      { text: "Nu am o opinie clară", scores: { traditional: 0, authoritarian: -1, economic_right: 0 } }
    ]
  },
  {
    question: "Care ar trebui să fie rolul statului în economie?",
    options: [
      { text: "Statul ar trebui să intervină minimal, piața liberă funcționează cel mai bine", scores: { traditional: 0, authoritarian: -2, economic_right: 4 } },
      { text: "Statul ar trebui să reglementeze dar să nu intervină prea mult", scores: { traditional: 0, authoritarian: 0, economic_right: 2 } },
      { text: "Statul ar trebui să intervină pentru a reduce inegalitățile", scores: { traditional: 0, authoritarian: 1, economic_right: -2 } },
      { text: "Statul ar trebui să controleze sectoarele economice strategice", scores: { traditional: 1, authoritarian: 3, economic_right: -4 } }
    ]
  },
  {
    question: "Ce crezi despre căsătoriile între persoane de același sex?",
    options: [
      { text: "Ar trebui legalizate complet, inclusiv dreptul la adopție", scores: { traditional: -4, authoritarian: -2, economic_right: 0 } },
      { text: "Accept parteneriatele civile, dar nu adopția", scores: { traditional: -2, authoritarian: 0, economic_right: 0 } },
      { text: "Nu ar trebui recunoscute legal", scores: { traditional: 3, authoritarian: 1, economic_right: 0 } },
      { text: "Promovarea acestora ar trebui restricționată", scores: { traditional: 4, authoritarian: 3, economic_right: 0 } }
    ]
  },
  {
    question: "Cum vezi relația României cu NATO?",
    options: [
      { text: "Este esențială pentru securitatea noastră", scores: { traditional: -1, authoritarian: 0, economic_right: 1 } },
      { text: "Este importantă, dar ar trebui să fim mai independenți", scores: { traditional: 1, authoritarian: 1, economic_right: 0 } },
      { text: "Ne limitează suveranitatea și ar trebui redusă", scores: { traditional: 3, authoritarian: 2, economic_right: -1 } },
      { text: "România ar trebui să iasă din NATO", scores: { traditional: 4, authoritarian: 3, economic_right: -2 } }
    ]
  },
  {
    question: "Ce părere ai despre imigrație în România?",
    options: [
      { text: "Ar trebui să primim mai mulți imigranți pentru a ajuta economia", scores: { traditional: -3, authoritarian: -2, economic_right: 2 } },
      { text: "Ar trebui să primim doar imigranți calificați", scores: { traditional: -1, authoritarian: 1, economic_right: 3 } },
      { text: "Ar trebui să reducem numărul de imigranți", scores: { traditional: 2, authoritarian: 2, economic_right: 0 } },
      { text: "Ar trebui să oprim complet imigrația", scores: { traditional: 4, authoritarian: 3, economic_right: -1 } }
    ]
  },
  {
    question: "Cum vezi educația sexuală în școli?",
    options: [
      { text: "Ar trebui să fie obligatorie și comprehensivă", scores: { traditional: -3, authoritarian: 1, economic_right: 0 } },
      { text: "Ar trebui predată, dar părinții să poată opta pentru excludere", scores: { traditional: -1, authoritarian: -1, economic_right: 0 } },
      { text: "Ar trebui să fie opțională și limitată", scores: { traditional: 2, authoritarian: 0, economic_right: 0 } },
      { text: "Nu ar trebui predată în școli, e responsabilitatea familiei", scores: { traditional: 4, authoritarian: -1, economic_right: 0 } }
    ]
  },
  {
    question: "Ce părere ai despre rolul Bisericii în societatea românească?",
    options: [
      { text: "Biserica ar trebui separată complet de stat", scores: { traditional: -3, authoritarian: -2, economic_right: 1 } },
      { text: "Biserica are un rol cultural, dar nu ar trebui să influențeze politica", scores: { traditional: -1, authoritarian: -1, economic_right: 0 } },
      { text: "Biserica are un rol important și ar trebui respectată", scores: { traditional: 2, authoritarian: 1, economic_right: 0 } },
      { text: "Biserica ar trebui să aibă un rol central în societate și educație", scores: { traditional: 4, authoritarian: 3, economic_right: -1 } }
    ]
  },
  {
    question: "Cum ar trebui gestionată problema corupției în România?",
    options: [
      { text: "Prin instituții independente cu putere extinsă de investigare", scores: { traditional: -1, authoritarian: 1, economic_right: 0 } },
      { text: "Prin transparență și educație civică pe termen lung", scores: { traditional: 0, authoritarian: -2, economic_right: 0 } },
      { text: "Prin pedepse mai severe și legi mai stricte", scores: { traditional: 1, authoritarian: 3, economic_right: 0 } },
      { text: "Prin descentralizare și reducerea influenței statului", scores: { traditional: 0, authoritarian: -3, economic_right: 3 } }
    ]
  },
  {
    question: "Ce părere ai despre energia nucleară în România?",
    options: [
      { text: "Ar trebui extinsă ca sursă principală de energie", scores: { traditional: 0, authoritarian: 1, economic_right: 2 } },
      { text: "Ar trebui menținută la nivelul actual, complementar energiilor regenerabile", scores: { traditional: 0, authoritarian: 0, economic_right: 0 } },
      { text: "Ar trebui redusă treptat în favoarea energiilor regenerabile", scores: { traditional: -1, authoritarian: 0, economic_right: -1 } },
      { text: "Ar trebui eliminată complet din mixul energetic", scores: { traditional: -2, authoritarian: -1, economic_right: -2 } }
    ]
  }
];

export const spectrumDefinitions = {
  traditional: {
    name: "Tradiționalism vs. Progresism",
    left: "Progresist",
    right: "Tradiționalist",
    emoji_left: "🌈",
    emoji_right: "⛪",
    description: "Măsoară cât de mult valorizezi tradițiile și valorile conservatoare față de schimbările sociale."
  },
  authoritarian: {
    name: "Libertarian vs. Autoritar",
    left: "Libertarian",
    right: "Autoritar",
    emoji_left: "🕊️",
    emoji_right: "👑",
    description: "Măsoară cât de mult crezi în libertatea individuală față de autoritatea statului și ordinea socială."
  },
  economic_right: {
    name: "Stânga vs. Dreapta Economică",
    left: "Stânga",
    right: "Dreapta",
    emoji_left: "🔄",
    emoji_right: "💰",
    description: "Măsoară cât de mult susții intervenția statului în economie față de piața liberă."
  }
};

export const romanianParties = [
  {
    name: "PSD (Partidul Social Democrat)",
    logo: "🌹",
    description: "Partid de centru-stânga, cu tendințe social-democrate și economie de stat.",
    scores: { traditional: 1, authoritarian: 3, economic_right: -5 }
  },
  {
    name: "PNL (Partidul Național Liberal)",
    logo: "🏛️",
    description: "Partid de centru-dreapta, cu valori liberale și economie de piață.",
    scores: { traditional: 2, authoritarian: 0, economic_right: 5 }
  },
  {
    name: "USR (Uniunea Salvați România)",
    logo: "🔍",
    description: "Partid progresist, anti-corupție, cu valori liberale și reformiste.",
    scores: { traditional: -4, authoritarian: -3, economic_right: 2 }
  }
];

export const romanianPoliticians = [
  {
    name: "Marcel Ciolacu",
    party: "PSD",
    description: "Actual prim-ministru, reprezentant al social-democrației tradiționale.",
    scores: { traditional: 2, authoritarian: 4, economic_right: -4 }
  },
  {
    name: "Nicolae Ciucă",
    party: "PNL",
    description: "Fost militar și prim-ministru, reprezentant al valorilor conservatoare și liberale.",
    scores: { traditional: 5, authoritarian: 3, economic_right: 4 }
  },
  {
    name: "Dacian Cioloș",
    party: "REPER",
    description: "Fost prim-ministru și comisar european, promotor al valorilor pro-europene.",
    scores: { traditional: -4, authoritarian: -3, economic_right: 3 }
  }
]; 