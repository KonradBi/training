// Complete translated values and scenarios
export const getTranslatedValues = (language: 'de' | 'en') => {
  if (language === 'en') {
    return [
      {
        name: 'Security',
        emoji: '🛡️',
        description: 'People with security values prioritize stability, certainty and protection from risks. They seek predictable environments.',
        keywords: ['stability', 'certainty', 'protection', 'safety', 'insurance', 'guarantee', 'secure', 'reliable'],
        quote: 'I want to be on the safe side',
        quotes: ['I want to be on the safe side', 'What if something goes wrong?', 'Is that reliable?'],
        injection: 'You create a sense of safety that people can rely on',
        injections: ['You create a sense of safety that people can rely on', 'This is the reliable, low-risk choice', 'Protected and covered if anything happens'],
      },
      {
        name: 'Adventure',
        emoji: '🏔️',
        description: 'People with adventure values seek excitement, new experiences and challenges. They thrive on uncertainty and risk.',
        keywords: ['excitement', 'thrill', 'challenge', 'exploration', 'risk', 'adrenaline', 'new', 'unknown'],
        quote: 'Life is too short to play it safe',
        quotes: ['Life is too short to play it safe', "Let's try something new", 'That sounds exciting'],
        injection: "This is the thing you'll remember for years",
        injections: ["This is the thing you'll remember for years", 'Let’s turn this into something unforgettable'],
      },
      {
        name: 'Recognition',
        emoji: '🏆',
        description: 'People with recognition values need acknowledgment, appreciation and validation from others. They want to be seen and valued.',
        keywords: ['acknowledgment', 'appreciation', 'praise', 'validation', 'status', 'respect', 'achievement', 'success'],
        quote: 'I want to make a difference',
        quotes: ['I want to make a difference', 'I want to be acknowledged for what I did here'],
        injection: "Work like this won't go unnoticed",
        injections: ["Work like this won't go unnoticed", "Let’s make sure your impact is visible"],
      },
      {
        name: 'Freedom',
        emoji: '🕊️',
        description: 'People with freedom values prioritize independence, autonomy and the ability to make their own choices without restrictions.',
        keywords: ['independence', 'autonomy', 'choice', 'flexibility', 'liberation', 'self-determination', 'unrestricted', 'open'],
        quote: 'I need my space',
        quotes: ['I need my space', "I don't like being told what to do", 'I want to keep my options open'],
        injection: 'You value freedom more than approval',
        injections: ['You value freedom more than approval', 'You decide, and you can say no anytime'],
      },
      {
        name: 'Connection',
        emoji: '❤️',
        description: 'People with connection values prioritize relationships, love and emotional bonds with others. They seek deep interpersonal connections.',
        keywords: ['love', 'relationship', 'connection', 'intimacy', 'bonding', 'togetherness', 'belonging', 'family'],
        quote: 'Relationships are everything',
        quotes: ['Relationships are everything', 'At the end of the day I want to feel close to people who actually get me'],
        injection: 'You are the one people feel safe with',
        injections: ['You are the one people feel safe with', 'This will bring people together and make them feel connected'],
      },
      {
        name: 'Growth',
        emoji: '🌱',
        description: 'People with growth values seek continuous improvement, learning and personal development. They want to evolve and become better.',
        keywords: ['improvement', 'learning', 'development', 'progress', 'evolution', 'advancement', 'betterment', 'growth'],
        quote: 'How can I get better?',
        quotes: ['How can I get better?', 'I want to develop my potential'],
        injection: "This is the next level most people never reach",
        injections: ["This is the next level most people never reach", 'We speak to your direction, not your status'],
      },
    ]
  }

  return [
    {
      name: 'Sicherheit',
      emoji: '🛡️',
      description: 'Menschen mit Sicherheits-Werten priorisieren Stabilität, Gewissheit und Schutz vor Risiken. Sie suchen vorhersagbare Umgebungen.',
      keywords: ['Stabilität', 'Gewissheit', 'Schutz', 'Sicherheit', 'Versicherung', 'Garantie', 'sicher', 'verlässlich'],
      quote: 'Ich will auf Nummer sicher gehen',
      quotes: ['Ich will auf Nummer sicher gehen', 'Was ist, wenn etwas schiefgeht?', 'Ist das verlässlich?'],
      injection: 'Du gibst Menschen ein verlässliches Sicherheitsgefühl',
      injections: ['Du gibst Menschen ein verlässliches Sicherheitsgefühl', 'Das ist die verlässliche, risikoarme Wahl', 'Geschützt und abgesichert, falls etwas passiert'],
    },
    {
      name: 'Abenteuer',
      emoji: '🏔️',
      description: 'Menschen mit Abenteuer-Werten suchen Aufregung, neue Erfahrungen und Herausforderungen. Sie gedeihen bei Unsicherheit und Risiko.',
      keywords: ['Aufregung', 'Nervenkitzel', 'Herausforderung', 'Erkundung', 'Risiko', 'Adrenalin', 'neu', 'unbekannt'],
      quote: 'Das klingt aufregend',
      quotes: ['Das klingt aufregend', 'Lass uns was Neues probieren', 'Ich möchte ein spannendes Leben, kein perfektes'],
      injection: 'Das ist das Ding hier woran du dich noch Jahre lang erinnern wirst',
      injections: ['Das ist das Ding hier woran du dich noch Jahre lang erinnern wirst', 'Lass uns das in etwas Unvergessliches verwandeln'],
    },
    {
      name: 'Anerkennung',
      emoji: '🏆',
      description: 'Menschen mit Anerkennungs-Werten brauchen Anerkennung, Wertschätzung und Bestätigung von anderen. Sie wollen gesehen und geschätzt werden.',
      keywords: ['Anerkennung', 'Wertschätzung', 'Lob', 'Bestätigung', 'Status', 'Respekt', 'Erfolg', 'Leistung'],
      quote: 'Ich will etwas bewirken',
      quotes: ['Ich will etwas bewirken', 'Ich möchte anerkannt werden für das, was ich hier geleistet habe'],
      injection: 'So eine Leistung wird nicht unbemerkt bleiben',
      injections: ['So eine Leistung wird nicht unbemerkt bleiben', 'Lass uns sicherstellen, dass deine Wirkung sichtbar wird'],
    },
    {
      name: 'Freiheit',
      emoji: '🕊️',
      description: 'Menschen mit Freiheits-Werten priorisieren Unabhängigkeit, Autonomie und die Fähigkeit, eigene Entscheidungen ohne Einschränkungen zu treffen.',
      keywords: ['Unabhängigkeit', 'Autonomie', 'Wahlfreiheit', 'Flexibilität', 'Befreiung', 'Selbstbestimmung', 'uneingeschränkt', 'offen'],
      quote: 'Ich brauche meinen Freiraum',
      quotes: ['Ich brauche meinen Freiraum', 'Ich lasse mir nicht gerne sagen, was ich tun soll', 'Ich will mir alle Optionen offenhalten'],
      injection: 'Du bist jemand dem Freiheit wichtiger ist als Zustimmung',
      injections: ['Du bist jemand dem Freiheit wichtiger ist als Zustimmung', 'Du entscheidest – und du kannst jederzeit Nein sagen'],
    },
    {
      name: 'Verbindung',
      emoji: '❤️',
      description: 'Menschen mit Verbindungs-Werten priorisieren Beziehungen, Liebe und emotionale Bindungen zu anderen. Sie suchen tiefe zwischenmenschliche Verbindungen.',
      keywords: ['Liebe', 'Beziehung', 'Verbindung', 'Intimität', 'Bindung', 'Zusammengehörigkeit', 'Zugehörigkeit', 'Familie'],
      quote: 'Beziehungen sind alles',
      quotes: ['Beziehungen sind alles', 'Am Ende des Tages möchte ich mich Menschen nah fühlen, die mich wirklich verstehen'],
      injection: 'Du bist derjenige mit dem man sich sicher fühlt',
      injections: ['Du bist derjenige mit dem man sich sicher fühlt', 'Das hier bringt Menschen zusammen und lässt sie sich verbunden fühlen'],
    },
    {
      name: 'Wachstum',
      emoji: '🌱',
      description: 'Menschen mit Wachstums-Werten suchen kontinuierliche Verbesserung, Lernen und persönliche Entwicklung. Sie wollen sich weiterentwickeln und besser werden.',
      keywords: ['Verbesserung', 'Lernen', 'Entwicklung', 'Fortschritt', 'Evolution', 'Weiterentwicklung', 'Verbesserung', 'Wachstum'],
      quote: 'Wie kann ich besser werden?',
      quotes: ['Wie kann ich besser werden?', 'Ich möchte mein Potenzial entwickeln'],
      injection: 'Das hier ist das nächste Level was die meisten nicht erreichen',
      injections: ['Das hier ist das nächste Level was die meisten nicht erreichen', 'Wir sprechen zu deiner Richtung, nicht zu deinem Status'],
    },
  ]
}

export const getTranslatedValueScenarios = (language: 'de' | 'en') => {
  if (language === 'en') {
    return [
      {
        id: 1,
        title: 'The Safety Checker',
        description:
          'Person compares options thoroughly, clarifies responsibilities and failure modes, and prefers predictable processes with few surprises.',
        options: [
          { value: 'Security', reason: 'Emphasizes reliability, safeguards and clear constraints' },
          { value: 'Adventure', reason: 'Guided by speed and novelty' },
          { value: 'Freedom', reason: 'Avoids tight commitments and constraints' },
        ],
        correctAnswer: 0,
        explanation:
          "Multiple safety questions, insurance checking and 'what if' thinking are classic security value indicators.",
        injection: 'You create a sense of safety that people can rely on',
      },
      {
        id: 2,
        title: 'The Thrill Seeker',
        description:
          'Person proposes unusual routes, reacts vividly to changing stimuli and often chooses paths with open outcomes.',
        options: [
          { value: 'Adventure', reason: 'Drawn to the pull of the unknown and variety' },
          { value: 'Security', reason: 'Values steadiness and clear commitments' },
          { value: 'Growth', reason: 'Orients around structured development' },
        ],
        correctAnswer: 0,
        explanation:
          'Energetic movements, challenge-seeking and anti-safety language show adventure values.',
        injection: "This is the thing you'll remember for years",
      },
      {
        id: 3,
        title: 'The Validation Seeker',
        description:
          'Person takes visible tasks, notices who is in the room and frames results so that impact is legible.',
        options: [
          { value: 'Recognition', reason: 'Centers communication on visibility and impact' },
          { value: 'Connection', reason: 'Emphasizes closeness and shared experience' },
          { value: 'Freedom', reason: 'Prioritizes independence in execution' },
        ],
        correctAnswer: 0,
        explanation:
          'Seeking eye contact, presenting achievements and needing validation show recognition values.',
        injection: "Work like this won't go unnoticed",
      },
      {
        id: 4,
        title: 'The Independence Advocate',
        description:
          'Person negotiates room to maneuver, avoids tight cadences and opts for structures that allow flexible choices.',
        options: [
          { value: 'Freedom', reason: 'Seeks latitude without close control' },
          { value: 'Security', reason: 'Wants dependable routines' },
          { value: 'Recognition', reason: 'Aims for public visibility' },
        ],
        correctAnswer: 0,
        explanation:
          'Strong focus on autonomy and option-keeping points to freedom values.',
        injection: 'You decide the path; this keeps your options open',
      },
      {
        id: 5,
        title: 'The Heart Connector',
        description:
          'Person initiates regular check-ins, ensures no one is left out and creates spaces for honest exchange.',
        options: [
          { value: 'Connection', reason: 'Centers warmth, belonging and togetherness' },
          { value: 'Recognition', reason: 'Highlights individual visibility' },
          { value: 'Security', reason: 'Focuses on stable conditions' },
        ],
        correctAnswer: 0,
        explanation:
          'Emphasis on togetherness and closeness indicates connection values.',
        injection: 'This brings people together and feels good for everyone',
      },
      {
        id: 6,
        title: 'The Growth Minded',
        description:
          'Person plans development goals, actively seeks feedback and visibly iterates on approaches.',
        options: [
          { value: 'Growth', reason: 'Structures progress and uses feedback for the next step' },
          { value: 'Recognition', reason: 'Puts external impact upfront' },
          { value: 'Adventure', reason: 'Seeks variety and intensity' },
        ],
        correctAnswer: 0,
        explanation:
          'Continuous improvement language signals growth values.',
        injection: 'This is the next level most people never reach',
      },
      {
        id: 7,
        title: 'The Risk Manager',
        description:
          'Person reviews liability details, favors robust agreements and compares safeguards before committing.',
        options: [
          { value: 'Security', reason: 'Weights protections and predictability highly' },
          { value: 'Freedom', reason: 'Wants to keep options open' },
          { value: 'Adventure', reason: 'Prefers pace over safeguards' },
        ],
        correctAnswer: 0,
        explanation:
          'Guarantee-seeking and reliability preference show security values.',
        injection: 'This is the reliable, low-risk choice',
      },
      {
        id: 8,
        title: 'The Explorer',
        description:
          'Person leaves beaten paths, proposes experiments and actively searches for options beyond the usual.',
        options: [
          { value: 'Adventure', reason: 'Puts novelty and variety first' },
          { value: 'Security', reason: 'Prefers dependable routines' },
          { value: 'Connection', reason: 'Prioritizes shared feeling' },
        ],
        correctAnswer: 0,
        explanation:
          'Explicit desire for novelty indicates adventure values.',
        injection: "You'd be one of the first to experience this",
      },
      {
        id: 9,
        title: 'The Appreciation Craver',
        description:
          'Person chooses audience-facing formats, documents contributions and ensures accountability is visible.',
        options: [
          { value: 'Recognition', reason: 'Connects motivation to visibility and resonance' },
          { value: 'Growth', reason: 'Emphasizes learning curve and development' },
          { value: 'Security', reason: 'Highlights steady continuity' },
        ],
        correctAnswer: 0,
        explanation:
          'Visibility and appreciation language show recognition values.',
        injection: 'Outstanding work like this gets recognized',
      },
      {
        id: 10,
        title: 'The Independence Seeker',
        description:
          'Person prioritizes reversible choices, prefers flexible arrangements and avoids rigid commitments.',
        options: [
          { value: 'Freedom', reason: 'Keeps options open and reduces lock-in' },
          { value: 'Security', reason: 'Optimizes for reliability and predictability' },
          { value: 'Recognition', reason: 'Seeks public acknowledgment' },
        ],
        correctAnswer: 0,
        explanation:
          'Flexibility preference and freedom language indicate freedom values.',
        injection: 'Stay flexible and in control of your choices',
      },
      {
        id: 11,
        title: 'The Relationship Builder',
        description:
          'Person facilitates exchange forums, connects people ahead of meetings and fosters an atmosphere where everyone contributes.',
        options: [
          { value: 'Connection', reason: 'Creates settings for belonging and mutual support' },
          { value: 'Recognition', reason: 'Seeks personal visibility' },
          { value: 'Growth', reason: 'Highlights skill building' },
        ],
        correctAnswer: 0,
        explanation:
          'Focus on bonding points to connection values.',
        injection: 'This helps people feel closer and supported',
      },
      {
        id: 12,
        title: 'The Self Improver',
        description:
          'Person defines measurable learning steps, deliberately trials new methods and regularly reflects on progress.',
        options: [
          { value: 'Growth', reason: 'Structures development and evaluates outcomes' },
          { value: 'Recognition', reason: 'Optimizes for positive external perception' },
          { value: 'Adventure', reason: 'Chooses intensity over predictability' },
        ],
        correctAnswer: 0,
        explanation:
          'Learning plans and mentorship seeking indicate growth values.',
        injection: 'This accelerates your development to the next level',
      },
      {
        id: 13,
        title: 'The Stability Seeker',
        description:
          'Person prefers long-running arrangements, values fail-safety and plans buffers against disruptions.',
        options: [
          { value: 'Security', reason: 'Puts stability and predictability first' },
          { value: 'Freedom', reason: 'Keeps alternatives open' },
          { value: 'Adventure', reason: 'Optimizes for novelty' },
        ],
        correctAnswer: 0,
        explanation:
          'Stability language directly maps to security values.',
        injection: 'This is a solid, reliable choice you can count on',
      },
      {
        id: 14,
        title: 'The Challenge Accepter',
        description:
          'Person chooses high-demand tasks, responds well to pace and accepts ambiguity in the process.',
        options: [
          { value: 'Adventure', reason: 'Seeks intensity and variable situations' },
          { value: 'Growth', reason: 'Pursues deliberate skill gains' },
          { value: 'Recognition', reason: 'Focuses on visibility' },
        ],
        correctAnswer: 0,
        explanation:
          'Excitement for demanding tasks indicates adventure values.',
        injection: 'This will be unlike anything you’ve done before',
      },
      {
        id: 15,
        title: 'The Mentor Seeker',
        description:
          'Person requests ambitious targets, seeks structured feedback and reflects implementation in regular reviews.',
        options: [
          { value: 'Growth', reason: 'Links goals to concrete learning progress' },
          { value: 'Recognition', reason: 'Seeks public acknowledgment' },
          { value: 'Connection', reason: 'Emphasizes the relational layer' },
        ],
        correctAnswer: 0,
        explanation:
          'Learning path requests signal growth values.',
        injection: 'This path will compound your progress',
      },
      {
        id: 16,
        title: 'The Visible Contributor',
        description:
          'Person proposes visibility formats, asks for mentions in reports and prioritizes presentation opportunities.',
        options: [
          { value: 'Recognition', reason: 'Ties success to external perception' },
          { value: 'Connection', reason: 'Highlights togetherness' },
          { value: 'Security', reason: 'Emphasizes dependable standards' },
        ],
        correctAnswer: 0,
        explanation:
          'Public credit request is a recognition signal.',
        injection: 'Let’s showcase your impact so it’s properly recognized',
      },
      {
        id: 17,
        title: 'The Flexible Planner',
        description:
          'Person plans with escape routes, decides late and values models with low binding strength.',
        options: [
          { value: 'Freedom', reason: 'Avoids lock-in and keeps alternatives open' },
          { value: 'Security', reason: 'Wants stability and predictability' },
          { value: 'Adventure', reason: 'Puts experience ahead of safeguards' },
        ],
        correctAnswer: 0,
        explanation:
          'Avoiding constraints maps to freedom values.',
        injection: 'Keep your options open and decide when it suits you',
      },
      {
        id: 18,
        title: 'The Community Builder',
        description:
          'Person creates mutual-support formats, distributes attention in groups and builds rituals of togetherness.',
        options: [
          { value: 'Connection', reason: 'Fosters belonging and reciprocal support' },
          { value: 'Recognition', reason: 'Highlights personal role' },
          { value: 'Security', reason: 'Focuses on protection mechanisms' },
        ],
        correctAnswer: 0,
        explanation:
          'Creating support networks is a connection value marker.',
        injection: 'This helps everyone feel seen and supported',
      },
      {
        id: 19,
        title: 'The Low-Risk Optimizer',
        description:
          'Person prioritizes offers with service levels, backups and clear escalation paths over cheaper alternatives.',
        options: [
          { value: 'Security', reason: 'Weights redundancy and safeguards above pace' },
          { value: 'Growth', reason: 'Optimizes for learning curve and performance' },
          { value: 'Freedom', reason: 'Seeks variable options' },
        ],
        correctAnswer: 0,
        explanation:
          'Warranty selection is a classic security indicator.',
        injection: 'Protected, reliable and covered if anything happens',
      },
      {
        id: 20,
        title: 'The New-Experience Hunter',
        description:
          'Person favors first releases, beta features or pilot projects and accepts fuzziness in outcomes.',
        options: [
          { value: 'Adventure', reason: 'Puts novelty and intensity ahead of maturity' },
          { value: 'Connection', reason: 'Emphasizes togetherness' },
          { value: 'Recognition', reason: 'Focuses attention on external perception' },
        ],
        correctAnswer: 0,
        explanation:
          'Preference for unfamiliar and exciting choices indicates adventure values.',
        injection: "This is cutting-edge and unlike anything you've tried",
      },
    ]
  }

  return [
    {
      id: 1,
      title: 'Der Sicherheits-Prüfer',
      description:
        'Person vergleicht Angebote gründlich, klärt Zuständigkeiten und Ausfallrisiken und bevorzugt planbare Abläufe ohne Überraschungen.',
      options: [
        { value: 'Sicherheit', reason: 'Betont Verlässlichkeit, Absicherung und klare Rahmen' },
        { value: 'Abenteuer', reason: 'Lässt sich von Tempo und Neuem leiten' },
        { value: 'Freiheit', reason: 'Meidet Bindungen und enge Vorgaben' },
      ],
      correctAnswer: 0,
      explanation:
        "Mehrfache Sicherheitsfragen, Versicherungs-Fokus und 'Was-wäre-wenn'-Denken sind klassische Sicherheits-Indikatoren.",
      injection: 'Du gibst Menschen ein verlässliches Sicherheitsgefühl',
    },
    {
      id: 2,
      title: 'Die Abenteuer-Sucherin',
      description:
        'Person schlägt ungewohnte Wege vor, reagiert lebhaft auf wechselnde Reize und entscheidet sich oft für Varianten mit offenem Ausgang.',
      options: [
        { value: 'Abenteuer', reason: 'Zieht Ungeplantes und Reiz des Unbekannten an' },
        { value: 'Sicherheit', reason: 'Schätzt Beständigkeit und klare Zusagen' },
        { value: 'Wachstum', reason: 'Orientiert sich an Entwicklungspfaden' },
      ],
      correctAnswer: 0,
      explanation:
        'Energische Bewegungen, Herausforderungssuche und Anti-Sicherheits-Sprache zeigen Abenteuer-Werte.',
      injection: 'Das ist das Ding hier, woran du dich noch Jahre erinnern wirst',
    },
    {
      id: 3,
      title: 'Die Anerkennungs-Suchende',
      description:
        'Person übernimmt sichtbare Aufgaben, achtet darauf, wer anwesend ist, und stellt Ergebnisse so dar, dass Wirkung erkennbar wird.',
      options: [
        { value: 'Anerkennung', reason: 'Richtet Kommunikation auf Sichtbarkeit und Wirkung' },
        { value: 'Verbindung', reason: 'Betont Nähe und gemeinsames Erleben' },
        { value: 'Freiheit', reason: 'Priorisiert Unabhängigkeit in der Umsetzung' },
      ],
      correctAnswer: 0,
      explanation:
        'Blickkontakt suchen, Erfolge präsentieren und Bestätigung brauchen zeigen Anerkennungs-Werte.',
      injection: 'So eine Leistung wird nicht unbemerkt bleiben',
    },
    {
      id: 4,
      title: 'Der Unabhängigkeits-Verfechter',
      description:
        'Person verhandelt Spielräume, meidet enge Taktungen und wählt Strukturen, die flexible Entscheidungen ermöglichen.',
      options: [
        { value: 'Freiheit', reason: 'Sucht Handlungsspielraum ohne enge Kontrolle' },
        { value: 'Sicherheit', reason: 'Legt Wert auf verlässliche Abläufe' },
        { value: 'Anerkennung', reason: 'Zielt auf öffentliche Sichtbarkeit' },
      ],
      correctAnswer: 0,
      explanation:
        'Starker Fokus auf Autonomie deutet auf Freiheits-Werte hin.',
      injection: 'Du behältst alle Optionen und entscheidest selbst',
    },
    {
      id: 5,
      title: 'Der Herz-Verbinder',
      description:
        'Person initiiert regelmäßige Check-ins, achtet darauf, dass niemand außen vor bleibt, und schafft Räume für Austausch.',
      options: [
        { value: 'Verbindung', reason: 'Stellt Wärme, Zugehörigkeit und Miteinander in den Mittelpunkt' },
        { value: 'Anerkennung', reason: 'Betont individuelle Sichtbarkeit' },
        { value: 'Sicherheit', reason: 'Fokussiert auf stabile Rahmenbedingungen' },
      ],
      correctAnswer: 0,
      explanation:
        'Betonung von Zusammengehörigkeit zeigt Verbindungs-Werte.',
      injection: 'Das bringt Menschen zusammen und fühlt sich gut an',
    },
    {
      id: 6,
      title: 'Der Wachstums-Mensch',
      description:
        'Person plant Entwicklungsziele, holt gezielt Rückmeldungen ein und iteriert spürbar an Vorgehensweisen.',
      options: [
        { value: 'Wachstum', reason: 'Strukturiert Fortschritt und sucht Feedback für den nächsten Schritt' },
        { value: 'Anerkennung', reason: 'Stellt Wirkung in den Vordergrund' },
        { value: 'Abenteuer', reason: 'Sucht Abwechslung und Intensität' },
      ],
      correctAnswer: 0,
      explanation:
        'Kontinuierliche Verbesserung signalisiert Wachstums-Werte.',
      injection: 'Das ist das nächste Level, das die meisten nie erreichen',
    },
    {
      id: 7,
      title: 'Der Risiko-Manager',
      description:
        'Person prüft Details zu Verbindlichkeiten, bevorzugt belastbare Absprachen und vergleicht Absicherungen vor einer Zusage.',
      options: [
        { value: 'Sicherheit', reason: 'Gewichtet Ausfallschutz und Planbarkeit hoch' },
        { value: 'Freiheit', reason: 'Möchte Optionen offenhalten' },
        { value: 'Abenteuer', reason: 'Bevorzugt Tempo vor Absicherung' },
      ],
      correctAnswer: 0,
      explanation:
        'Garantien und Verlässlichkeit deuten auf Sicherheits-Werte hin.',
      injection: 'Das ist die verlässliche, risikoarme Wahl',
    },
    {
      id: 8,
      title: 'Der Entdecker',
      description:
        'Person wechselt gern ausgetretene Pfade, schlägt Experimente vor und sucht aktiv nach Varianten jenseits des Gewohnten.',
      options: [
        { value: 'Abenteuer', reason: 'Legt Fokus auf Neuheit und Vielfalt' },
        { value: 'Sicherheit', reason: 'Bevorzugt verlässliche Routinen' },
        { value: 'Verbindung', reason: 'Stellt das Wir-Gefühl voran' },
      ],
      correctAnswer: 0,
      explanation:
        'Expliziter Wunsch nach Neuem zeigt Abenteuer-Werte.',
      injection: 'Du wärst einer der ersten, die das erleben',
    },
    {
      id: 9,
      title: 'Der Wertschätzungs-Sucher',
      description:
        'Person wählt Formate mit Publikum, dokumentiert Beiträge und achtet darauf, dass Verantwortlichkeiten erkennbar sind.',
      options: [
        { value: 'Anerkennung', reason: 'Koppelt Motivation an Sichtbarkeit und Resonanz' },
        { value: 'Wachstum', reason: 'Betont Lernkurve und Entwicklung' },
        { value: 'Sicherheit', reason: 'Hebt kontinuierliche Stabilität hervor' },
      ],
      correctAnswer: 0,
      explanation:
        'Sprache über Sichtbarkeit und Würdigung zeigt Anerkennungs-Werte.',
      injection: 'Herausragende Arbeit wird hier sichtbar gewürdigt',
    },
    {
      id: 10,
      title: 'Der Unabhängigkeits-Sucher',
      description:
        'Person priorisiert reversible Entscheidungen, bevorzugt flexible Vereinbarungen und vermeidet starre Bindungen.',
      options: [
        { value: 'Freiheit', reason: 'Hält Optionen offen und reduziert Verpflichtungen' },
        { value: 'Sicherheit', reason: 'Zielt auf Verlässlichkeit und Planbarkeit' },
        { value: 'Anerkennung', reason: 'Strebt nach öffentlicher Würdigung' },
      ],
      correctAnswer: 0,
      explanation:
        'Flexibilitätspräferenz und Freiheits-Sprache deuten auf Freiheits-Werte hin.',
      injection: 'Bleib flexibel und behalte die Kontrolle über deine Optionen',
    },
    {
      id: 11,
      title: 'Der Beziehungs-Stifter',
      description:
        'Person fördert Austauschformate, stellt vor Treffen Verbindungen her und achtet auf eine Atmosphäre, in der alle zu Wort kommen.',
      options: [
        { value: 'Verbindung', reason: 'Schafft Rahmen für Zugehörigkeit und gegenseitige Unterstützung' },
        { value: 'Anerkennung', reason: 'Sucht persönliche Sichtbarkeit' },
        { value: 'Wachstum', reason: 'Betont Kompetenzaufbau' },
      ],
      correctAnswer: 0,
      explanation:
        'Fokus auf Verbundenheit deutet auf Verbindungs-Werte hin.',
      injection: 'Das lässt Menschen sich gesehen und unterstützt fühlen',
    },
    {
      id: 12,
      title: 'Der Selbst-Verbesserer',
      description:
        'Person definiert messbare Lernschritte, probiert bewusst neue Methoden aus und reflektiert regelmäßig Fortschritt.',
      options: [
        { value: 'Wachstum', reason: 'Strukturiert Entwicklung und evaluiert Ergebnisse' },
        { value: 'Anerkennung', reason: 'Zielt auf positive Außenwirkung' },
        { value: 'Abenteuer', reason: 'Sucht Intensität statt Planbarkeit' },
      ],
      correctAnswer: 0,
      explanation:
        'Lernpläne und Mentoring-Suche signalisieren Wachstums-Werte.',
      injection: 'Das beschleunigt deine Entwicklung aufs nächste Level',
    },
    {
      id: 13,
      title: 'Der Stabilitäts-Sucher',
      description:
        'Person bevorzugt lang laufende Regelungen, gewichtet Ausfallsicherheit und plant Puffer gegen Störungen ein.',
      options: [
        { value: 'Sicherheit', reason: 'Stellt Stabilität und Planbarkeit voran' },
        { value: 'Freiheit', reason: 'Hält Alternativen offen' },
        { value: 'Abenteuer', reason: 'Zielt auf Neuheitswert' },
      ],
      correctAnswer: 0,
      explanation:
        'Stabilitäts-Sprache zeigt Sicherheits-Werte.',
      injection: 'Das ist eine solide, verlässliche Wahl',
    },
    {
      id: 14,
      title: 'Der Herausforderungen-Annehmer',
      description:
        'Person wählt Aufgaben mit hohem Anspruchsgrad, reagiert positiv auf Tempo und akzeptiert Unklarheit im Prozess.',
      options: [
        { value: 'Abenteuer', reason: 'Sucht Intensität und variable Situationen' },
        { value: 'Wachstum', reason: 'Verfolgt gezielt Kompetenzzuwachs' },
        { value: 'Anerkennung', reason: 'Fokussiert auf Sichtbarkeit' },
      ],
      correctAnswer: 0,
      explanation:
        'Freude an fordernden Aufgaben deutet auf Abenteuer-Werte hin.',
      injection: 'Das ist anders als alles, was du bisher gemacht hast',
    },
    {
      id: 15,
      title: 'Der Mentor-Sucher',
      description:
        'Person bittet um anspruchsvolle Ziele, sucht strukturiertes Feedback und spiegelt die Umsetzung in regelmäßigen Reviews.',
      options: [
        { value: 'Wachstum', reason: 'Koppelt Ziele an konkreten Lernfortschritt' },
        { value: 'Anerkennung', reason: 'Sucht öffentliche Würdigung' },
        { value: 'Verbindung', reason: 'Betont Beziehungsebene' },
      ],
      correctAnswer: 0,
      explanation:
        'Bitte um Lernpfad ist ein Wachstums-Signal.',
      injection: 'Dieser Pfad multipliziert deinen Fortschritt',
    },
    {
      id: 16,
      title: 'Der Sichtbare Beitragende',
      description:
        'Person schlägt Formate zur Sichtbarmachung vor, bittet um Nennung in Berichten und priorisiert Präsentationsmöglichkeiten.',
      options: [
        { value: 'Anerkennung', reason: 'Verbindet Erfolg mit externer Wahrnehmung' },
        { value: 'Verbindung', reason: 'Hebt Wir-Gefühl hervor' },
        { value: 'Sicherheit', reason: 'Betont verlässliche Standards' },
      ],
      correctAnswer: 0,
      explanation:
        'Wunsch nach öffentlicher Anerkennung ist ein Anerkennungs-Signal.',
      injection: 'Wir stellen deine Wirkung sichtbar heraus',
    },
    {
      id: 17,
      title: 'Der Flexible Planer',
      description:
        'Person plant mit Ausweichrouten, entscheidet spät und legt Wert auf Modelle mit geringem Bindungsgrad.',
      options: [
        { value: 'Freiheit', reason: 'Vermeidet Lock-in und hält Alternativen offen' },
        { value: 'Sicherheit', reason: 'Sucht Stabilität und Planbarkeit' },
        { value: 'Abenteuer', reason: 'Stellt Erlebnis vor Absicherung' },
      ],
      correctAnswer: 0,
      explanation:
        'Vermeiden von Einschränkungen weist auf Freiheits-Werte hin.',
      injection: 'Du bleibst frei und kannst jederzeit entscheiden',
    },
    {
      id: 18,
      title: 'Der Community-Builder',
      description:
        'Person initiiert gegenseitige Hilfeformate, verteilt Aufmerksamkeit in Gruppen und etabliert Rituale des Miteinanders.',
      options: [
        { value: 'Verbindung', reason: 'Fördert Zugehörigkeit und wechselseitige Unterstützung' },
        { value: 'Anerkennung', reason: 'Stellt die eigene Rolle heraus' },
        { value: 'Sicherheit', reason: 'Fokussiert auf Schutzmechanismen' },
      ],
      correctAnswer: 0,
      explanation:
        'Support-Netzwerke schaffen ist ein Verbindungs-Marker.',
      injection: 'Das lässt alle sich gesehen und getragen fühlen',
    },
    {
      id: 19,
      title: 'Der Niedrig-Risiko Optimierer',
      description:
        'Person priorisiert Angebote mit Service-Leveln, Backups und klaren Eskalationswegen vor kostengünstigeren Alternativen.',
      options: [
        { value: 'Sicherheit', reason: 'Gewichtet Redundanz und Absicherung höher als Tempo' },
        { value: 'Wachstum', reason: 'Optimiert auf Lernkurve und Performance' },
        { value: 'Freiheit', reason: 'Sucht variable Optionen' },
      ],
      correctAnswer: 0,
      explanation:
        'Garantie-Wahl ist ein klassischer Sicherheits-Indikator.',
      injection: 'Geschützt, verlässlich und abgesichert, falls etwas passiert',
    },
    {
      id: 20,
      title: 'Der Neu-Erlebnis Jäger',
      description:
        'Person wählt bevorzugt Erstauflagen, Beta-Features oder Pilotprojekte und akzeptiert dafür Unschärfe im Ergebnis.',
      options: [
        { value: 'Abenteuer', reason: 'Stellt Neuheit und Intensität über Reifegrad' },
        { value: 'Verbindung', reason: 'Betont Miteinander' },
        { value: 'Anerkennung', reason: 'Richtet Aufmerksamkeit auf Außenwirkung' },
      ],
      correctAnswer: 0,
      explanation:
        'Vorliebe für Unbekanntes und Spannendes zeigt Abenteuer-Werte.',
      injection: 'Das ist state-of-the-art und anders als alles bisher',
    },
  ]
}