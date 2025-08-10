// Complete translated exercises for needs training
export const getTranslatedExercises = (language: 'de' | 'en') => {
  if (language === 'en') {
    return [
      {
        id: 1,
        title: "The Status Displayer",
        scenario: "A person wears an expensive watch, speaks louder than others and casually mentions: 'When I was the first to recognize this concept back then...'",
        question: "Which need is showing here?",
        options: ["Significance", "Acceptance", "Intelligence", "Strength"],
        correctAnswer: 0,
        explanation: "Luxury items, loud speaking and emphasizing one's pioneer role are classic indicators of the significance need.",
        indicators: ["Status objects", "Dominates conversation", "Emphasizes own uniqueness"]
      },
      {
        id: 2,
        title: "The Power-Position Seeker",
        scenario: "Person walks purposefully to the head of the conference table, wears designer clothes with large logos and says: 'People always come to me when they don't understand something.'",
        question: "Which need do you recognize?",
        options: ["Significance", "Strength", "Intelligence", "Acceptance"],
        correctAnswer: 0,
        explanation: "Seeking the 'power seat', designer clothing with visible branding and emphasizing one's own importance are typical for significance.",
        indicators: ["Seeks power position", "Status clothing", "Emphasizes own importance", "Wants to be perceived as important"]
      },
      {
        id: 3,
        title: "The Club Member",
        scenario: "Someone wears the company t-shirt, laughs excessively at group jokes and says: 'In our department we always do it this way. I really feel like I belong there.'",
        question: "Which need is behind this?",
        options: ["Approval", "Acceptance", "Sympathy", "Significance"],
        correctAnswer: 1,
        explanation: "Club clothing, exaggerated laughter and emphasizing group belonging show the acceptance need.",
        indicators: ["Club clothing", "Group jokes", "Language contains 'we'", "Emphasizes belonging"]
      },
      {
        id: 4,
        title: "The Mirror Copier",
        scenario: "Person unconsciously mirrors others' body language, stands excessively close to friends and says: 'I didn't really feel like part of the group there. They excluded me.'",
        question: "Which need is showing?",
        options: ["Acceptance", "Approval", "Sympathy", "Significance"],
        correctAnswer: 0,
        explanation: "Unconscious mirroring, seeking proximity and fear of exclusion are classic acceptance indicators.",
        indicators: ["Mirrors body language", "Stands close to others", "Fear of exclusion", "Belonging more important than standing out"]
      },
      {
        id: 5,
        title: "The Compliment Deflector",
        scenario: "Person nods constantly, says 'Oh nonsense, that was nothing' to compliments and asks repeatedly: 'Is that okay for you? I just want to help.'",
        question: "Which need do you recognize?",
        options: ["Sympathy", "Approval", "Acceptance", "Intelligence"],
        correctAnswer: 1,
        explanation: "Excessive nodding, deflecting compliments and constantly asking for approval are typical for the approval need.",
        indicators: ["Excessive nodding", "Deflects compliments", "Excessive asking", "Wants to be liked"]
      },
      {
        id: 6,
        title: "The Harmless One",
        scenario: "Person smiles excessively, constantly apologizes and says: 'People say I'm very approachable. I probably shouldn't say this, but...'",
        question: "Which need is behind this?",
        options: ["Approval", "Acceptance", "Sympathy", "Intelligence"],
        correctAnswer: 0,
        explanation: "Excessive smiling, constant apologies and trying to appear harmless show the approval need.",
        indicators: ["Excessive smiling", "Constant apologies", "Wants to be liked", "Makes themselves harmless"]
      },
      {
        id: 7,
        title: "The Fact Checker",
        scenario: "Someone corrects others with 'Technically speaking, it's like this...', wears functional clothing and says: 'Most people don't understand this, but factually...'",
        question: "Which need is showing?",
        options: ["Intelligence", "Significance", "Strength", "Approval"],
        correctAnswer: 0,
        explanation: "Precise corrections, functional clothing and emphasizing cognitive superiority show the intelligence need.",
        indicators: ["Corrections with 'technically speaking'", "Functional clothing", "Emphasizes knowledge advantage"]
      },
      {
        id: 8,
        title: "The Thinker Pose",
        scenario: "Person sits with hand on chin, furrowed brows, wears colored glasses and says: 'Honestly, it's frustrating to constantly be surrounded by idiots.'",
        question: "Which need do you recognize?",
        options: ["Intelligence", "Significance", "Strength", "Sympathy"],
        correctAnswer: 0,
        explanation: "Classic thinker pose, quirky accessories and devaluing others as 'idiots' show the intelligence need.",
        indicators: ["Thinker pose", "Quirky elements", "Sees others as less intelligent", "Real-time fact checking"]
      },
      {
        id: 9,
        title: "The Overwhelmed One",
        scenario: "Person in loose, layered clothing, drooping shoulders and says quietly: 'It was really hard for me. I don't know how much longer I can handle this.'",
        question: "Which need is showing?",
        options: ["Sympathy", "Approval", "Acceptance", "Intelligence"],
        correctAnswer: 0,
        explanation: "Loose clothing, drooping shoulders and expressing being overwhelmed are classic sympathy indicators.",
        indicators: ["Loose layered clothing", "Drooping shoulders", "Expresses being overwhelmed", "Quiet speaking"]
      },
      {
        id: 10,
        title: "The Pain Bearer",
        scenario: "Person clings to objects, frequent sighing and says: 'Nobody really cares about me. It's okay, I'm used to it.'",
        question: "Which need do you recognize?",
        options: ["Sympathy", "Acceptance", "Approval", "Strength"],
        correctAnswer: 0,
        explanation: "Clinging to objects, sighing and expressing emotional pain show the sympathy need.",
        indicators: ["Clings to objects", "Frequent sighing", "Expresses emotional pain", "Victim mentality"]
      },
      {
        id: 11,
        title: "The Tough One",
        scenario: "Person in leather jacket, chest out, minimal facial expressions and says: 'I've experienced worse. I don't need anyone. Weakness is not an option.'",
        question: "Which need is behind this?",
        options: ["Strength", "Significance", "Intelligence", "Sympathy"],
        correctAnswer: 0,
        explanation: "Leather clothing, dominant posture and rejecting weakness are classic strength indicators.",
        indicators: ["Tough clothing", "Dominant posture", "Rejects weakness", "Shows independence"]
      },
      {
        id: 12,
        title: "The Space Dominator",
        scenario: "Person takes up space, rarely smiles, strong handshake and says: 'I don't have time for drama. Respect is more important than love.'",
        question: "Which need is showing?",
        options: ["Strength", "Significance", "Intelligence", "Approval"],
        correctAnswer: 0,
        explanation: "Space-taking posture, minimal emotions and prioritizing respect show the strength need.",
        indicators: ["Takes up space", "Minimal emotions", "Prioritizes respect", "Direct communication"]
      },
      {
        id: 13,
        title: "The Self-Corrector",
        scenario: "Person with selected notebook, precise language and says: 'To be precise... better said... One must distinguish between...'",
        question: "Which need is behind this?",
        options: ["Intelligence", "Significance", "Approval", "Acceptance"],
        correctAnswer: 0,
        explanation: "Precise self-corrections, selected accessories and analytical language show the intelligence need.",
        indicators: ["Precise self-corrections", "Selected accessories", "Analytical language", "Subtle distance"]
      },
      {
        id: 14,
        title: "The Story Teller",
        scenario: "Person gestures widely, seeks eye contact and says: 'Let me tell you what happened to me. People always come to me with their problems because I understand them.'",
        question: "Which need do you recognize?",
        options: ["Sympathy", "Approval", "Acceptance", "Significance"],
        correctAnswer: 1,
        explanation: "Wide gestures, seeking attention and helping others show the approval need.",
        indicators: ["Wide gestures", "Seeks attention", "Emphasizes helping", "Wants to be needed"]
      },
      {
        id: 15,
        title: "The Tech Gadget Carrier",
        scenario: "Person with latest smartphone, smartwatch, takes notes precisely and says: 'Statistically speaking, the data shows that most people make emotional decisions.'",
        question: "Which need is showing?",
        options: ["Intelligence", "Significance", "Strength", "Approval"],
        correctAnswer: 0,
        explanation: "Functional clothing, strategically placed tech gadgets and devaluing others as unknowing show the intelligence need.",
        indicators: ["Functional clothing", "Tech gadgets", "Precise formulations", "Sees others as unknowing"]
      },
      {
        id: 16,
        title: "The We-Speaker",
        scenario: "Person nods along with group opinions, wears trend-appropriate clothing and says: 'We in our team always work like this. Community is really important to me.'",
        question: "Which need is behind this?",
        options: ["Acceptance", "Approval", "Sympathy", "Significance"],
        correctAnswer: 0,
        explanation: "Group conformity, trend clothing and emphasizing community show the acceptance need.",
        indicators: ["Group conformity", "Trend clothing", "Emphasizes community", "Uses 'we' language"]
      },
      {
        id: 17,
        title: "The First Mentioner",
        scenario: "Person seeks attention through clothing, speaks louder and says: 'I was the first to do XY. People can't stand mediocrity. I have very high standards.'",
        question: "Which need do you recognize?",
        options: ["Significance", "Strength", "Intelligence", "Approval"],
        correctAnswer: 0,
        explanation: "Attention-seeking, being first and high standards are classic significance indicators.",
        indicators: ["Seeks attention", "Emphasizes being first", "High standards", "Can't stand mediocrity"]
      },
      {
        id: 18,
        title: "The Room Dominator",
        scenario: "Person walks confidently into the room, takes the central seat and says: 'Let me explain how this really works. The average person doesn't understand this.'",
        question: "Which need is showing?",
        options: ["Significance", "Intelligence", "Strength", "Approval"],
        correctAnswer: 0,
        explanation: "Confident entry, central positioning and teaching others show the significance need.",
        indicators: ["Confident entry", "Central positioning", "Teaches others", "Superior attitude"]
      },
      {
        id: 19,
        title: "The Aggressive When Challenged",
        scenario: "Person becomes tense when contradicted, defensive posture and says: 'That's completely wrong! I know what I'm talking about. This is exactly how it is.'",
        question: "Which need is behind this?",
        options: ["Intelligence", "Strength", "Significance", "Sympathy"],
        correctAnswer: 0,
        explanation: "Becoming aggressive when challenged and insisting on being right show the intelligence need.",
        indicators: ["Aggressive when challenged", "Defensive posture", "Insists on being right", "Fears appearing stupid"]
      },
      {
        id: 20,
        title: "The Subtle Distance Keeper",
        scenario: "Person maintains physical distance, speaks in technical terms and says: 'From a logical perspective, emotions are irrelevant here. The facts speak for themselves.'",
        question: "Which need do you recognize?",
        options: ["Intelligence", "Strength", "Significance", "Approval"],
        correctAnswer: 0,
        explanation: "Keeping distance, technical language and devaluing emotions show the intelligence need.",
        indicators: ["Keeps distance", "Technical language", "Devalues emotions", "Logic over feeling"]
      }
    ]
  }
  
  // Return German version (original)
  return [
    {
      id: 1,
      title: "Der Statuszeiger",
      scenario: "Eine Person trägt eine teure Uhr, spricht lauter als andere und erwähnt beiläufig: 'Als ich damals der Erste war, der dieses Konzept erkannt hat...'",
      question: "Welches Bedürfnis zeigt sich hier?",
      options: ["Bedeutung", "Akzeptanz", "Intelligenz", "Stärke"],
      correctAnswer: 0,
      explanation: "Luxusgegenstände, lautes Sprechen und das Betonen der eigenen Vorreiterrolle sind klassische Indikatoren für das Bedeutungs-Bedürfnis.",
      indicators: ["Statusobjekte", "Dominiert Konversation", "Betont eigene Einzigartigkeit"]
    },
    {
      id: 2,
      title: "Der Power-Position Sucher",
      scenario: "Person läuft zielstrebig zum Kopfende des Konferenztisches, trägt Designerklamotten mit großem Logo und sagt: 'Die Leute kommen immer zu mir, wenn sie was nicht verstehen.'",
      question: "Welches Bedürfnis erkennen Sie?",
      options: ["Bedeutung", "Stärke", "Intelligenz", "Akzeptanz"],
      correctAnswer: 0,
      explanation: "Das Suchen nach dem 'Power-Sitz', Designerkleidung mit sichtbarem Branding und das Betonen der eigenen Wichtigkeit sind typisch für Bedeutung.",
      indicators: ["Sucht Power-Position", "Statuskleidung", "Betont eigene Wichtigkeit", "Will als wichtig wahrgenommen werden"]
    },
    {
      id: 3,
      title: "Der Vereinszugehörige",
      scenario: "Jemand trägt das Firmen-T-Shirt, lacht übertrieben bei Gruppenwitzen und sagt: 'In unserer Abteilung machen wir das immer so. Ich fühle mich da richtig zugehörig.'",
      question: "Welches Bedürfnis steht dahinter?",
      options: ["Zustimmung", "Akzeptanz", "Mitleid", "Bedeutung"],
      correctAnswer: 1,
      explanation: "Vereinskleidung, übertriebenes Lachen und die Betonung von Gruppenzugehörigkeit zeigen das Akzeptanz-Bedürfnis.",
      indicators: ["Vereinskleidung", "Gruppenscherze", "Sprache enthält 'wir'", "Betont Zugehörigkeit"]
    },
    {
      id: 4,
      title: "Der Spiegel-Kopierer",
      scenario: "Person spiegelt unbewusst die Körpersprache anderer, steht übertrieben nah bei Freunden und sagt: 'Ich habe mich da nicht wirklich als Teil der Gruppe gefühlt. Sie haben mich ausgeschlossen.'",
      question: "Welches Bedürfnis zeigt sich?",
      options: ["Akzeptanz", "Zustimmung", "Mitleid", "Bedeutung"],
      correctAnswer: 0,
      explanation: "Unbewusstes Spiegeln, Nähe-Suche und die Angst vor Ausschluss sind klassische Akzeptanz-Indikatoren.",
      indicators: ["Spiegelt Körpersprache", "Steht nah bei anderen", "Angst vor Ausschluss", "Dazugehören wichtiger als auffallen"]
    },
    {
      id: 5,
      title: "Der Komplimente-Abwehrer",
      scenario: "Person nickt ständig, sagt 'Ach Quatsch, das war doch nichts' auf Komplimente und fragt mehrfach: 'Ist das okay für dich? Ich will nur helfen.'",
      question: "Welches Bedürfnis erkennen Sie?",
      options: ["Mitleid", "Zustimmung", "Akzeptanz", "Intelligenz"],
      correctAnswer: 1,
      explanation: "Übermäßiges Nicken, Komplimente abwehren und ständiges Nachfragen nach Zustimmung sind typisch für das Zustimmungs-Bedürfnis.",
      indicators: ["Übermäßiges Nicken", "Komplimente abwehren", "Übermäßiges Nachfragen", "Will gemocht werden"]
    },
    {
      id: 6,
      title: "Die Harmlos-Macherin",
      scenario: "Person lächelt übermäßig, entschuldigt sich ständig und sagt: 'Die Leute sagen, ich bin sehr umgänglich. Ich sollte das vielleicht nicht sagen, aber...'",
      question: "Welches Bedürfnis steht dahinter?",
      options: ["Zustimmung", "Akzeptanz", "Mitleid", "Intelligenz"],
      correctAnswer: 0,
      explanation: "Übermäßiges Lächeln, ständige Entschuldigungen und der Versuch sich harmlos zu machen zeigen das Zustimmungs-Bedürfnis.",
      indicators: ["Übermäßiges Lächeln", "Ständige Entschuldigungen", "Will gemocht werden", "Macht sich harmlos"]
    },
    {
      id: 7,
      title: "Der Faktenchecker",
      scenario: "Jemand korrigiert andere mit 'Technisch gesehen ist das so...', trägt funktionale Kleidung und sagt: 'Das verstehen die meisten nicht, aber faktisch...'",
      question: "Welches Bedürfnis zeigt sich?",
      options: ["Intelligenz", "Bedeutung", "Stärke", "Zustimmung"],
      correctAnswer: 0,
      explanation: "Präzise Korrekturen, funktionale Kleidung und die Betonung kognitiver Überlegenheit zeigen das Intelligenz-Bedürfnis.",
      indicators: ["Korrekturen mit 'technisch gesehen'", "Funktionale Kleidung", "Betont Verständnisvorsprung"]
    },
    {
      id: 8,
      title: "Der Denkerpose-Einnehmer",
      scenario: "Person sitzt mit Hand am Kinn, zusammengezogenen Augenbrauen, trägt farbige Brillengläser und sagt: 'Ehrlich gesagt ist es frustrierend, ständig von Idioten umgeben zu sein.'",
      question: "Welches Bedürfnis erkennen Sie?",
      options: ["Intelligenz", "Bedeutung", "Stärke", "Mitleid"],
      correctAnswer: 0,
      explanation: "Klassische Denkerpose, schrullige Accessoires und die Abwertung anderer als 'Idioten' zeigen das Intelligenz-Bedürfnis.",
      indicators: ["Denkerpose", "Schrullige Elemente", "Sieht andere als weniger intelligent", "Factchecking in Echtzeit"]
    },
    {
      id: 9,
      title: "Die Überforderte",
      scenario: "Person in lockerer, geschichteter Kleidung, hängende Schultern und sagt leise: 'Es war echt hart für mich. Ich weiß nicht, wie lange ich das noch durchhalte.'",
      question: "Welches Bedürfnis zeigt sich?",
      options: ["Mitleid", "Zustimmung", "Akzeptanz", "Intelligenz"],
      correctAnswer: 0,
      explanation: "Lockere Kleidung, hängende Schultern und das Ausdrücken von Überforderung sind klassische Mitleid-Indikatoren.",
      indicators: ["Lockere geschichtete Kleidung", "Hängende Schultern", "Drückt Überforderung aus", "Leises Sprechen"]
    },
    {
      id: 10,
      title: "Die Schmerz-Trägerin",
      scenario: "Person klammert sich an Gegenstände, seufzt häufig und sagt: 'Niemand interessiert sich wirklich für mich. Es ist schon okay, ich bin's gewohnt.'",
      question: "Welches Bedürfnis erkennen Sie?",
      options: ["Mitleid", "Akzeptanz", "Zustimmung", "Stärke"],
      correctAnswer: 0,
      explanation: "Festklammern an Objekten, Seufzen und emotionalen Schmerz ausdrücken zeigen das Mitleid-Bedürfnis.",
      indicators: ["Klammert sich an Objekte", "Häufiges Seufzen", "Drückt emotionalen Schmerz aus", "Opfermentalität"]
    },
    {
      id: 11,
      title: "Der Harte",
      scenario: "Person in Lederjacke, Brust raus, minimale Mimik und sagt: 'Ich habe schon Schlimmeres erlebt. Ich brauche niemanden. Schwäche ist keine Option.'",
      question: "Welches Bedürfnis steht dahinter?",
      options: ["Stärke", "Bedeutung", "Intelligenz", "Mitleid"],
      correctAnswer: 0,
      explanation: "Lederkleidung, dominante Haltung und das Ablehnen von Schwäche sind klassische Stärke-Indikatoren.",
      indicators: ["Harte Kleidung", "Dominante Haltung", "Lehnt Schwäche ab", "Zeigt Unabhängigkeit"]
    },
    {
      id: 12,
      title: "Der Raum-Dominierer",
      scenario: "Person nimmt Raum ein, lächelt selten, fester Händedruck und sagt: 'Ich hab keine Zeit für Drama. Respekt ist wichtiger als Liebe.'",
      question: "Welches Bedürfnis zeigt sich?",
      options: ["Stärke", "Bedeutung", "Intelligenz", "Zustimmung"],
      correctAnswer: 0,
      explanation: "Raumgreifende Haltung, minimale Emotionen und Respekt priorisieren zeigen das Stärke-Bedürfnis.",
      indicators: ["Nimmt Raum ein", "Minimale Emotionen", "Priorisiert Respekt", "Direkte Kommunikation"]
    },
    {
      id: 13,
      title: "Der Selbstkorrekteur",
      scenario: "Person mit ausgesuchtem Notizbuch, präzise Sprache und sagt: 'Um genau zu sein... besser gesagt... Man muss da unterscheiden zwischen...'",
      question: "Welches Bedürfnis steht dahinter?",
      options: ["Intelligenz", "Bedeutung", "Zustimmung", "Akzeptanz"],
      correctAnswer: 0,
      explanation: "Präzise Selbstkorrekturen, gewählte Accessoires und analytische Sprache zeigen das Intelligenz-Bedürfnis.",
      indicators: ["Präzise Selbstkorrekturen", "Ausgesuchte Accessoires", "Analytische Sprache", "Subtile Distanz"]
    },
    {
      id: 14,
      title: "Die Geschichten-Erzählerin",
      scenario: "Person gestikuliert viel, sucht Blickkontakt und sagt: 'Lass mich dir erzählen, was mir passiert ist. Die Leute kommen immer zu mir mit ihren Problemen, weil ich sie verstehe.'",
      question: "Welches Bedürfnis erkennen Sie?",
      options: ["Mitleid", "Zustimmung", "Akzeptanz", "Bedeutung"],
      correctAnswer: 1,
      explanation: "Viel Gestik, Aufmerksamkeit suchen und anderen helfen zeigen das Zustimmungs-Bedürfnis.",
      indicators: ["Viel Gestik", "Sucht Aufmerksamkeit", "Betont Helfen", "Will gebraucht werden"]
    },
    {
      id: 15,
      title: "Der Tech-Gadget Träger",
      scenario: "Person mit neuestem Smartphone, Smartwatch, macht präzise Notizen und sagt: 'Statistisch gesehen zeigen die Daten, dass die meisten Menschen emotional entscheiden.'",
      question: "Welches Bedürfnis zeigt sich?",
      options: ["Intelligenz", "Bedeutung", "Stärke", "Zustimmung"],
      correctAnswer: 0,
      explanation: "Funktionale Kleidung, strategisch platzierte Tech-Gadgets und die Abwertung anderer als unwissend zeigen das Intelligenz-Bedürfnis.",
      indicators: ["Funktionale Kleidung", "Tech-Gadgets", "Präzise Formulierungen", "Sieht andere als unwissend"]
    },
    {
      id: 16,
      title: "Der Wir-Sprecher",
      scenario: "Person nickt bei Gruppenmeinungen mit, trägt trendgerechte Kleidung und sagt: 'Wir in unserem Team arbeiten immer so. Gemeinschaft ist mir total wichtig.'",
      question: "Welches Bedürfnis steht dahinter?",
      options: ["Akzeptanz", "Zustimmung", "Mitleid", "Bedeutung"],
      correctAnswer: 0,
      explanation: "Gruppenkonformität, Trendkleidung und Betonung von Gemeinschaft zeigen das Akzeptanz-Bedürfnis.",
      indicators: ["Gruppenkonformität", "Trendkleidung", "Betont Gemeinschaft", "Verwendet 'wir'-Sprache"]
    },
    {
      id: 17,
      title: "Der Erste-Erwähner",
      scenario: "Person sucht durch Kleidung Aufmerksamkeit, spricht lauter und sagt: 'Ich war der Erste, der XY gemacht hat. Durchschnittlichkeit können die Leute nicht ertragen. Ich habe sehr hohe Standards.'",
      question: "Welches Bedürfnis erkennen Sie?",
      options: ["Bedeutung", "Stärke", "Intelligenz", "Zustimmung"],
      correctAnswer: 0,
      explanation: "Aufmerksamkeit suchen, der Erste sein und hohe Standards sind klassische Bedeutung-Indikatoren.",
      indicators: ["Sucht Aufmerksamkeit", "Betont der Erste zu sein", "Hohe Standards", "Kann Durchschnittlichkeit nicht ertragen"]
    },
    {
      id: 18,
      title: "Der Raum-Beherrscher",
      scenario: "Person betritt selbstbewusst den Raum, nimmt den zentralen Platz ein und sagt: 'Lass mich erklären, wie das wirklich funktioniert. Der Durchschnittsmensch versteht das nicht.'",
      question: "Welches Bedürfnis zeigt sich?",
      options: ["Bedeutung", "Intelligenz", "Stärke", "Zustimmung"],
      correctAnswer: 0,
      explanation: "Selbstbewusster Auftritt, zentrale Positionierung und andere belehren zeigen das Bedeutungs-Bedürfnis.",
      indicators: ["Selbstbewusster Auftritt", "Zentrale Positionierung", "Belehrt andere", "Überlegenheitsgefühl"]
    },
    {
      id: 19,
      title: "Der Aggressiv-bei-Herausforderung",
      scenario: "Person wird angespannt bei Widerspruch, Abwehrhaltung und sagt: 'Das ist völlig falsch! Ich weiß, wovon ich rede. So ist das und nicht anders.'",
      question: "Welches Bedürfnis steht dahinter?",
      options: ["Intelligenz", "Stärke", "Bedeutung", "Mitleid"],
      correctAnswer: 0,
      explanation: "Aggressiv werden bei Herausforderung und auf Recht bestehen zeigen das Intelligenz-Bedürfnis.",
      indicators: ["Aggressiv bei Herausforderung", "Abwehrhaltung", "Besteht auf Recht haben", "Angst dumm zu wirken"]
    },
    {
      id: 20,
      title: "Der Subtile-Distanz-Halter",
      scenario: "Person hält körperliche Distanz, spricht in Fachbegriffen und sagt: 'Aus logischer Sicht sind Emotionen hier irrelevant. Die Fakten sprechen für sich.'",
      question: "Welches Bedürfnis erkennen Sie?",
      options: ["Intelligenz", "Stärke", "Bedeutung", "Zustimmung"],
      correctAnswer: 0,
      explanation: "Distanz halten, Fachsprache und Emotionen abwerten zeigen das Intelligenz-Bedürfnis.",
      indicators: ["Hält Distanz", "Fachsprache", "Wertet Emotionen ab", "Logik über Gefühl"]
    }
  ]
}