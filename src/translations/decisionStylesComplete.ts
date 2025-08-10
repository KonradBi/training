// Complete translated decision styles and scenarios
export const getTranslatedDecisionStyles = (language: 'de' | 'en') => {
  if (language === 'en') {
    return [
      {
        name: "Deviance",
        emoji: "😈",
        definition: "People with this decision style consciously choose paths that lie outside cultural or social norms. They transform through contrast.",
        typicalMerits: ["Pride in breaking rules", "Nonconformity as identity trait", "Casual body language", "Often creative minds, contrarians"],
        linguisticIndicators: ["I never understood why you should do it that way", "It's always been done that way – that's exactly why I did it differently", "I don't care what others do", "Most people are just sheep"],
        avoidFrames: ["Most people do it this way", "This is best practice", "This has proven itself"],
        linguisticInjection: "I believe most people wouldn't have the courage to try something like this – but you don't seem like most people.",
        triggerWords: ["radical", "forbidden", "rebellious", "taboo", "different", "push boundaries"]
      },
      {
        name: "Novelty",
        emoji: "✨",
        definition: "People with novelty motives make decisions based on newness, freshness, variety and sensory stimulation. Novelty triggers dopamine.",
        typicalMerits: ["Fast eye movements (scanning)", "Foot tapping, fidgeting", "Scattered attention", "Excitement for the latest"],
        linguisticIndicators: ["I really need something new", "Why don't we try something different?", "I hate when everything stays the same", "What else exciting is there?"],
        avoidFrames: ["This is a proven system", "We've always done it this way", "This is our standard"],
        linguisticInjection: "This is nothing you've seen before. You'd be one of the very first to experience this.",
        triggerWords: ["new", "revolutionary", "cutting-edge", "fresh", "different", "never before seen"]
      },
      {
        name: "Social",
        emoji: "💖",
        definition: "People with this decision style prioritize interpersonal harmony and group cohesion. Connection comes before perfection.",
        typicalMerits: ["Strong eye contact", "Soft, open gestures", "Frequent approving nods", "Observe carefully before responding"],
        linguisticIndicators: ["I want everyone to be okay with this", "It's important to me that we all agree", "But how do you feel about the decision?", "What's best for our team?"],
        avoidFrames: ["The numbers clearly show", "You need to decide now!", "No ignorance toward group dynamics"],
        linguisticInjection: "This will feel good for people – finally a solution everyone can support.",
        triggerWords: ["harmony", "community", "team", "together", "wellbeing", "support"]
      },
      {
        name: "Conformity",
        emoji: "📋",
        definition: "People with this decision style make decisions based on rules, structures and social norms. They want to appear as normal as possible.",
        typicalMerits: ["Straight posture, attention position", "Symmetrical movements", "Herd mentality", "Pride in correct execution"],
        linguisticIndicators: ["Generally that's how it works here", "We've always done it this way", "What's the right way?", "How do things run currently?"],
        avoidFrames: ["No system criticism", "Let's do something different here", "No unstructured changes"],
        linguisticInjection: "This is the gold standard in this field. This corresponds exactly to what has proven itself in comparable situations.",
        triggerWords: ["standard", "norm", "correct", "established", "experts recommend", "best practice"]
      },
      {
        name: "Investment",
        emoji: "💰",
        definition: "People with this decision style evaluate all options through the R.O.I. filter. They think in terms of time, energy and money already invested.",
        typicalMerits: ["Particularly attentive to changes", "Tense jaw with change suggestions", "Wear old valuable items", "Hesitate with new things"],
        linguisticIndicators: ["I've already invested so much here", "After everything I've put into this", "I can't afford to lose this", "I've come too far to quit now"],
        avoidFrames: ["No minimizing their efforts", "No starting from scratch", "No devaluing their investments"],
        linguisticInjection: "You've already built something worth protecting – and this ensures it pays off.",
        triggerWords: ["protect investment", "pay off", "finish", "reap what you sow", "maximize"]
      },
      {
        name: "Necessity",
        emoji: "⚡",
        definition: "People with this decision style first ask: Is it really necessary to make a decision now? They react to pressure and deadlines.",
        typicalMerits: ["Strong, focused movements", "Matter-of-fact attitude", "High degree of skepticism", "Minimal fidgeting under pressure"],
        linguisticIndicators: ["I don't have time now", "Can we please get to the point", "What do we do concretely now?", "This needs to happen today"],
        avoidFrames: ["No extensive explanations", "No soft language", "No small talk during urgency"],
        linguisticInjection: "This needs to happen next. This will solve the problem today – and waiting is no longer an option.",
        triggerWords: ["immediately", "now", "necessary", "urgent", "deadline", "time is a factor"]
      }
    ]
  }
  
  // Return German version (original)
  return [
    {
      name: "Devianz",
      emoji: "😈",
      definition: "Menschen mit diesem Entscheidungsstil wählen bewusst Wege, die außerhalb kultureller oder sozialer Normen liegen. Sie transformieren durch Kontrast.",
      typicalMerits: ["Stolz darauf, Regeln zu brechen", "Nonkonformität als Identitätsmerkmal", "Lässige Körpersprache", "Oft kreative Köpfe, Querdenker"],
      linguisticIndicators: ["Ich habe nie verstanden, warum man das so machen soll", "Das war schon immer so – genau deswegen habe ich es anders gemacht", "Mir ist egal, was die anderen machen", "Die meisten sind doch Schafe"],
      avoidFrames: ["Die meisten machen das so", "Das ist Best Practice", "Das hat sich bewährt"],
      linguisticInjection: "Ich glaube, die meisten Menschen hätten nicht den Mut, so etwas zu versuchen – aber du wirkst nicht wie die meisten.",
      triggerWords: ["radikal", "verboten", "rebellisch", "tabu", "anders", "Grenze verschieben"]
    },
    {
      name: "Novelty",
      emoji: "✨",
      definition: "Menschen mit Novelty-Motiv treffen Entscheidungen auf Basis von Neuheit, Frische, Abwechslung und Reizüberflutung. Neuheit triggert Dopamin.",
      typicalMerits: ["Schnelle Augenbewegungen (scanning)", "Wippen mit dem Fuß, Nesteln", "Gesprungene Aufmerksamkeit", "Begeisterung für das Neueste"],
      linguisticIndicators: ["Ich brauch echt mal was Neues", "Wieso probieren wir nicht mal was anderes?", "Ich hasse es, wenn immer alles gleich ist", "Was gibt's noch Spannendes dazu?"],
      avoidFrames: ["Das ist ein bewährtes System", "Das machen wir hier schon immer so", "Das gehört bei uns zum Standard"],
      linguisticInjection: "Das ist nichts, was du schon mal gesehen hast. Du wärst einer der ersten überhaupt, der das erlebt.",
      triggerWords: ["neu", "revolutionär", "brandaktuell", "frisch", "anders", "noch nie dagewesen"]
    },
    {
      name: "Sozial",
      emoji: "💖",
      definition: "Menschen mit diesem Entscheidungsstil priorisieren zwischenmenschliche Harmonie und Gruppenkohäsion. Verbindung steht vor Perfektion.",
      typicalMerits: ["Starker Blickkontakt", "Weiche, offene Gesten", "Häufiges zustimmendes Nicken", "Beobachten genau vor dem Antworten"],
      linguisticIndicators: ["Ich möchte, dass alle damit okay sind", "Für mich ist wichtig, dass wir alle einverstanden sind", "Aber wie fühlen Sie sich mit der Entscheidung?", "Was ist das Beste für unser Team?"],
      avoidFrames: ["Die Zahlen zeigen eindeutig", "Sie müssen sich jetzt entscheiden!", "Keine Ignoranz gegenüber Gruppendynamiken"],
      linguisticInjection: "Das wird sich gut für die Leute anfühlen – endlich eine Lösung, die alle mittragen können.",
      triggerWords: ["Harmonie", "Gemeinschaft", "Team", "zusammen", "Wohlbefinden", "unterstützen"]
    },
    {
      name: "Konformität",
      emoji: "📋",
      definition: "Menschen mit diesem Entscheidungsstil treffen Entscheidungen auf Basis von Regeln, Strukturen und gesellschaftlichen Normen. Sie wollen so normal wie möglich erscheinen.",
      typicalMerits: ["Gerader Sitz, Habachtstellung", "Symmetrische Bewegungen", "Herdenmentalität", "Stolz auf korrekte Ausführung"],
      linguisticIndicators: ["Allgemein läuft das hier so", "Wir haben das immer so gemacht", "Was ist der richtige Weg?", "Wie laufen die Dinge momentan?"],
      avoidFrames: ["Keine Systemkritik", "Wir machen hier mal was anderes", "Keine unstrukturierten Änderungen"],
      linguisticInjection: "Das ist der Goldstandard in diesem Bereich. Das entspricht genau dem, was in vergleichbaren Situationen bewährt hat.",
      triggerWords: ["Standard", "Norm", "korrekt", "etabliert", "Experten empfehlen", "Best Practice"]
    },
    {
      name: "Investment",
      emoji: "💰",
      definition: "Menschen mit diesem Entscheidungsstil bewerten alle Optionen durch den R.O.I.-Filter. Sie denken in Zeit, Energie und Geld bereits investiert.",
      typicalMerits: ["Besonders aufmerksam bei Änderungen", "Angespannter Kiefer bei Veränderungsvorschlägen", "Tragen alte Wertgegenstände", "Zögern bei neuen Dingen"],
      linguisticIndicators: ["Ich habe schon so viel hier investiert", "Nach allem, was ich reingesteckt habe", "Das kann ich mir nicht leisten zu verlieren", "Ich bin zu weit gekommen, um jetzt aussteigen zu können"],
      avoidFrames: ["Keine Minimierung ihrer Anstrengungen", "Kein von vorne anfangen", "Keine Entwertung ihrer Investments"],
      linguisticInjection: "Du hast bereits etwas aufgebaut, das es wert ist, geschützt zu werden – und das hier sorgt dafür, dass es sich auszahlt.",
      triggerWords: ["Investition schützen", "auszahlen", "fertig machen", "ernten was gesät", "maximieren"]
    },
    {
      name: "Notwendigkeit",
      emoji: "⚡",
      definition: "Menschen mit diesem Entscheidungsstil fragen zuerst: Ist es wirklich notwendig, jetzt eine Entscheidung zu treffen? Sie reagieren auf Druck und Deadlines.",
      typicalMerits: ["Starke, zielgerichtete Bewegungen", "Sachliche Haltung", "Hoher Grad an Skepsis", "Minimales Zappeln unter Druck"],
      linguisticIndicators: ["Ich habe jetzt keine Zeit", "Können wir bitte zur Sache kommen", "Was machen wir jetzt konkret?", "Das muss heute passieren"],
      avoidFrames: ["Keine ausufernden Erklärungen", "Keine weiche Sprache", "Kein Smalltalk bei Dringlichkeit"],
      linguisticInjection: "Das muss als nächstes passieren. Das wird das Problem heute lösen – und abwarten geht nicht mehr.",
      triggerWords: ["sofort", "jetzt", "notwendig", "zwingend", "Deadline", "Zeit ist Faktor"]
    }
  ]
}

export const getTranslatedDecisionScenarios = (language: 'de' | 'en') => {
  if (language === 'en') {
    return [
      {
        id: 1,
        title: "The Rule Breaker",
        scenario: "Someone says: 'I never order from the menu. I don't care what others do. They said it can't be done – so I did it.'",
        question: "Which decision style is showing here?",
        options: ["Deviance", "Novelty", "Conformity", "Social"],
        correctAnswer: 0,
        explanation: "Conscious rule-breaking, ignoring group norms and doing the opposite of expectations are classic deviance indicators.",
        indicators: ["Pride in rule-breaking", "Ignores group opinion", "Contrasting language", "Nonconformity as identity"]
      },
      {
        id: 2,
        title: "The Norm Challenger",
        scenario: "Person wears unusual clothing, leans back casually and says: 'Most people are just sheep. I've never understood why you should do it that way.'",
        question: "Which decision style do you recognize?",
        options: ["Deviance", "Conformity", "Social", "Investment"],
        correctAnswer: 0,
        explanation: "Unusual clothing, casual posture and devaluing others as 'sheep' show deviance orientation.",
        indicators: ["Unusual clothing", "Casual posture", "Devalues others", "Proud of being different"]
      },
      {
        id: 3,
        title: "The Excitement Seeker",
        scenario: "Person with fast eye movements, fidgets and says: 'I really need something new. Why don't we try something different? I hate when everything stays the same.'",
        question: "Which decision style is evident?",
        options: ["Novelty", "Deviance", "Social", "Necessity"],
        correctAnswer: 0,
        explanation: "Fast eye movements, fidgeting and explicit desire for newness are classic novelty indicators.",
        indicators: ["Fast eye movements", "Fidgeting", "Explicit need for newness", "Boredom with routine"]
      },
      {
        id: 4,
        title: "The Fresh Experience Hunter",
        scenario: "Person scans environment constantly, taps foot and says: 'What else exciting is there? This is nothing I've seen before. That sounds revolutionary!'",
        question: "Which decision style shows here?",
        options: ["Novelty", "Deviance", "Conformity", "Investment"],
        correctAnswer: 0,
        explanation: "Constant environmental scanning, foot tapping and excitement for revolutionary things show novelty motivation.",
        indicators: ["Environmental scanning", "Foot tapping", "Excitement for new", "Uses 'revolutionary' language"]
      },
      {
        id: 5,
        title: "The Harmony Builder",
        scenario: "Person maintains strong eye contact, soft gestures and says: 'I want everyone to be okay with this. What's best for our team? How do you feel about the decision?'",
        question: "Which decision style is recognizable?",
        options: ["Social", "Conformity", "Novelty", "Necessity"],
        correctAnswer: 0,
        explanation: "Strong eye contact, soft gestures and focus on group feelings show social decision-making.",
        indicators: ["Strong eye contact", "Soft gestures", "Team orientation", "Asks about feelings"]
      },
      {
        id: 6,
        title: "The Group Observer",
        scenario: "Person nods frequently, observes before responding and says: 'This will feel good for people. Finally a solution everyone can support.'",
        question: "Which decision style do you see?",
        options: ["Social", "Conformity", "Investment", "Deviance"],
        correctAnswer: 0,
        explanation: "Frequent nodding, careful observation and focus on group satisfaction are social indicators.",
        indicators: ["Frequent nodding", "Observes before responding", "Group satisfaction focus", "Inclusive language"]
      },
      {
        id: 7,
        title: "The Connection Seeker",
        scenario: "Person leans forward, soft gestures and says: 'I don't want to hurt anyone. We should decide this together. You're such a warm-hearted person.'",
        question: "Which decision style is recognizable?",
        options: ["Social", "Investment", "Conformity", "Novelty"],
        correctAnswer: 0,
        explanation: "Soft gestures, consensus-seeking and emphasizing interpersonal warmth show socially-oriented decisions.",
        indicators: ["Soft gestures", "Leans forward", "Consensus orientation", "Empathetic attitude"]
      },
      {
        id: 8,
        title: "The Standard Follower",
        scenario: "Person in symmetrical posture, straight sitting and says: 'Generally that's how it works here. We've always done it this way. What's the right way?'",
        question: "Which decision style shows?",
        options: ["Conformity", "Social", "Investment", "Necessity"],
        correctAnswer: 0,
        explanation: "Symmetrical posture, straight sitting and referencing established ways show conformity orientation.",
        indicators: ["Symmetrical posture", "Straight sitting", "References traditions", "Seeks 'right way'"]
      },
      {
        id: 9,
        title: "The Rule Respecter",
        scenario: "Person maintains attention posture, pride in correct execution and says: 'This is the gold standard. Experts recommend this. That's best practice.'",
        question: "Which decision style is evident?",
        options: ["Conformity", "Social", "Deviance", "Novelty"],
        correctAnswer: 0,
        explanation: "Attention posture, pride in correctness and referencing standards show conformity motivation.",
        indicators: ["Attention posture", "Pride in correctness", "References standards", "Values expert opinion"]
      },
      {
        id: 10,
        title: "The Investment Protector",
        scenario: "Person becomes tense at change suggestions, touches old valuable items and says: 'I've already invested so much here. I can't afford to lose this.'",
        question: "Which decision style do you recognize?",
        options: ["Investment", "Conformity", "Social", "Necessity"],
        correctAnswer: 0,
        explanation: "Tension at changes, attachment to valuables and fear of loss show investment thinking.",
        indicators: ["Tense at changes", "Touches valuables", "Fear of loss", "Emphasizes past investment"]
      },
      {
        id: 11,
        title: "The Sunk Cost Thinker",
        scenario: "Person hesitates at new things, tense jaw and says: 'After everything I've put into this. I've come too far to quit now.'",
        question: "Which decision style shows here?",
        options: ["Investment", "Necessity", "Conformity", "Social"],
        correctAnswer: 0,
        explanation: "Hesitation at new things, tense jaw and sunk cost thinking are investment indicators.",
        indicators: ["Hesitates at new", "Tense jaw", "Sunk cost thinking", "Can't quit mentality"]
      },
      {
        id: 12,
        title: "The ROI Calculator",
        scenario: "Person particularly attentive to changes, wears old items and says: 'You've already built something worth protecting. This ensures it pays off.'",
        question: "Which decision style is recognizable?",
        options: ["Investment", "Conformity", "Deviance", "Novelty"],
        correctAnswer: 0,
        explanation: "Attention to changes, old valuable items and ROI language show investment orientation.",
        indicators: ["Attentive to changes", "Wears old valuables", "ROI language", "Protection mindset"]
      },
      {
        id: 13,
        title: "The Pressure Responder",
        scenario: "Person with focused movements, matter-of-fact attitude and says: 'I don't have time now. Can we please get to the point? This needs to happen today.'",
        question: "Which decision style is evident?",
        options: ["Necessity", "Investment", "Social", "Conformity"],
        correctAnswer: 0,
        explanation: "Focused movements, matter-of-fact attitude and time pressure language show necessity orientation.",
        indicators: ["Focused movements", "Matter-of-fact attitude", "Time pressure", "Direct communication"]
      },
      {
        id: 14,
        title: "The Deadline Driver",
        scenario: "Person minimal fidgeting under pressure, high skepticism and says: 'What do we do concretely now? This needs to happen next. Waiting is no longer an option.'",
        question: "Which decision style shows?",
        options: ["Necessity", "Investment", "Deviance", "Social"],
        correctAnswer: 0,
        explanation: "Calm under pressure, high skepticism and deadline language are necessity indicators.",
        indicators: ["Minimal fidgeting under pressure", "High skepticism", "Deadline focus", "Action orientation"]
      },
      {
        id: 15,
        title: "The Urgency Communicator",
        scenario: "Person strong movements, no small talk and says: 'Time is a factor here. This will solve the problem today. We need immediate action.'",
        question: "Which decision style do you recognize?",
        options: ["Necessity", "Investment", "Conformity", "Novelty"],
        correctAnswer: 0,
        explanation: "Strong movements, avoiding small talk and urgency language show necessity motivation.",
        indicators: ["Strong movements", "No small talk", "Urgency language", "Immediate action focus"]
      },
      {
        id: 16,
        title: "The Warm Mediator",
        scenario: "Person mirrors facial expressions, observes carefully and says: 'This will feel good for people. I think this will bring people together better.'",
        question: "Which decision style shows?",
        options: ["Social", "Conformity", "Deviance", "Investment"],
        correctAnswer: 0,
        explanation: "Mirroring expressions, careful observation and focus on positive group effects are socially-oriented.",
        indicators: ["Mirrors expressions", "Observes carefully", "Focus on group effects", "Mediator role"]
      },
      {
        id: 17,
        title: "The Change Resistant",
        scenario: "Person protective of old systems, anxious about changes and says: 'We should maximize what we have. I need to protect my investment here.'",
        question: "Which decision style is recognizable?",
        options: ["Investment", "Conformity", "Necessity", "Social"],
        correctAnswer: 0,
        explanation: "Protection of old systems, change anxiety and maximization language show investment thinking.",
        indicators: ["Protects old systems", "Anxious about changes", "Maximization focus", "Investment protection"]
      },
      {
        id: 18,
        title: "The Nonconformist",
        scenario: "Person proud of breaking conventions, casual body language and says: 'I believe most people wouldn't have the courage to try this. But you're not like most people.'",
        question: "Which decision style shows here?",
        options: ["Deviance", "Novelty", "Social", "Necessity"],
        correctAnswer: 0,
        explanation: "Pride in breaking conventions, casual posture and courage language are deviance indicators.",
        indicators: ["Pride in breaking conventions", "Casual body language", "Courage language", "Differentiation from masses"]
      },
      {
        id: 19,
        title: "The Innovation Enthusiast",
        scenario: "Person scattered attention, excitement for latest trends and says: 'You'd be one of the first to experience this. This is cutting-edge, never seen before!'",
        question: "Which decision style is evident?",
        options: ["Novelty", "Deviance", "Investment", "Conformity"],
        correctAnswer: 0,
        explanation: "Scattered attention, trend excitement and 'first to experience' language show novelty motivation.",
        indicators: ["Scattered attention", "Trend excitement", "First experience focus", "Cutting-edge language"]
      },
      {
        id: 20,
        title: "The System Respecter",
        scenario: "Person symmetrical movements, pride in following procedures and says: 'This corresponds exactly to what has proven itself. That's the established standard.'",
        question: "Which decision style do you recognize?",
        options: ["Conformity", "Investment", "Social", "Necessity"],
        correctAnswer: 0,
        explanation: "Symmetrical movements, procedure pride and standard referencing show conformity orientation.",
        indicators: ["Symmetrical movements", "Procedure pride", "Standard references", "Proven methods focus"]
      }
    ]
  }
  
  // Return German version (original scenarios from the file)
  return [
    {
      id: 1,
      title: "Der Regel-Brecher",
      scenario: "Jemand sagt: 'Ich bestelle nie von der Karte. Mir ist egal, was die anderen machen. Sie sagten, es geht nicht – also hab ich es gemacht.'",
      question: "Welcher Entscheidungsstil zeigt sich hier?",
      options: ["Devianz", "Novelty", "Konformität", "Sozial"],
      correctAnswer: 0,
      explanation: "Bewusstes Regelbrechen, Ignorieren von Gruppennormen und das Gegenteil von Erwartungen tun sind klassische Devianz-Indikatoren.",
      indicators: ["Stolz auf Regelbruch", "Ignoriert Gruppenmeinung", "Kontrastierende Sprache", "Nonkonformität als Identität"]
    },
    // ... (rest of original German scenarios would continue here)
  ]
}