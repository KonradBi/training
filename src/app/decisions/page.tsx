'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { shuffleArray } from '@/utils/shuffleArray'
import { getTranslatedDecisionStyles, getTranslatedDecisionScenarios } from '@/translations/decisionStylesComplete'

const decisionStyles = [
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

const profilingScenarios = [
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
  {
    id: 2,
    title: "Der Teufels-Advokat",
    scenario: "Person mit lässiger Körpersprache und Ironie sagt: 'Ich habe nie verstanden, warum man das so machen soll. Die meisten sind doch Schafe. Das war schon immer so – genau deswegen habe ich es anders gemacht.'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Devianz", "Novelty", "Sozial", "Konformität"],
    correctAnswer: 0,
    explanation: "Sarkasmus, bewusste Nonkonformität und die Abwertung der Masse als 'Schafe' sind typisch für deviante Entscheidungen.",
    indicators: ["Lässige Körpersprache", "Sarkasmus", "Ablehnung der Norm", "Individualismus als Identität"]
  },
  {
    id: 3,
    title: "Der Neuheits-Sucher",
    scenario: "Person nestelt nervös, wechselt häufig das Thema und sagt: 'Ich brauch echt mal was Neues. Was ist gerade der neueste Shit? Das ist so öde hier.'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Sozial", "Novelty", "Investment", "Notwendigkeit"],
    correctAnswer: 1,
    explanation: "Reizsuche, Langeweile-Vermeidung und ständige Suche nach Neuem sind typisch für den Novelty-Entscheidungsstil.",
    indicators: ["Nervose Bewegungen", "Gesprungene Aufmerksamkeit", "Sucht nach Neuem", "Langweile als Bedrohung"]
  },
  {
    id: 4,
    title: "Der Beta-Tester",
    scenario: "Person wirkt aufgeregt, bewegt sich viel und sagt: 'Willst du was komplett Abgefahrenes sehen? Das ist so neu, du wärst einer der ersten, der das erlebt. Noch nie dagewesen!'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Novelty", "Devianz", "Notwendigkeit", "Konformität"],
    correctAnswer: 0,
    explanation: "Begeisterung für Neuheit, Limited Access Appeal und Innovation-Fokus sind charakteristisch für Novelty-Entscheidungen.",
    indicators: ["Aufregung für Neues", "Limited Access Appeal", "Innovation-Fokus", "Erste-zu-sein Mentalität"]
  },
  {
    id: 5,
    title: "Der Langeweile-Allergiker",
    scenario: "Person wippt mit dem Fuß, rutscht auf dem Stuhl hin und her und sagt: 'Wieso probieren wir nicht mal was anderes? Ich hasse es, wenn immer alles gleich ist.'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Novelty", "Devianz", "Sozial", "Investment"],
    correctAnswer: 0,
    explanation: "Körperliche Unruhe, Themenwechsel und die Abneigung gegen Routine sind klassische Novelty-Indikatoren.",
    indicators: ["Körperliche Unruhe", "Scanning-Verhalten", "Abwechslung-suchend", "Dopamin-getrieben"]
  },
  {
    id: 6,
    title: "Der Harmonie-Wahrer",
    scenario: "Jemand nickt viel, hält starken Blickkontakt und sagt: 'Ich möchte, dass alle damit okay sind. Wie fühlen Sie sich mit der Entscheidung? Was ist das Beste für unser Team?'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Sozial", "Konformität", "Devianz", "Investment"],
    correctAnswer: 0,
    explanation: "Fokus auf Gruppenharmonie, Gefühlscheck und Teamwohlbefinden sind charakteristisch für sozial-harmonieorientierte Entscheidungen.",
    indicators: ["Starker Blickkontakt", "Zustimmendes Nicken", "Fokus auf Gruppengefühl", "Harmonie vor Perfektion"]
  },
  {
    id: 7,
    title: "Der Verbindungs-Sucher",
    scenario: "Person lehnt sich nach vorne, weiche Gesten und sagt: 'Ich möchte niemanden verletzen. Wir sollten das gemeinsam entscheiden. Du bist so eine warmherzige Person.'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Sozial", "Investment", "Konformität", "Novelty"],
    correctAnswer: 0,
    explanation: "Weiche Gesten, Konsens-Suche und Betonung zwischenmenschlicher Wärme zeigen sozial-orientierte Entscheidungen.",
    indicators: ["Weiche Gesten", "Lehnt sich nach vorne", "Konsens-Orientierung", "Empathische Grundhaltung"]
  },
  {
    id: 8,
    title: "Der Regel-Befolger",
    scenario: "Person sitzt gerade, hände nah am Körper und sagt: 'Allgemein läuft das hier so. Wir haben das immer so gemacht. Was ist der richtige Weg? Wie laufen die Dinge momentan?'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Konformität", "Sozial", "Notwendigkeit", "Devianz"],
    correctAnswer: 0,
    explanation: "Regel-Referenzierung, Suche nach korrekter Ausführung und Orientierung an Standards zeigen Konformitäts-Entscheidungen.",
    indicators: ["Gerade Haltung", "Regel-Referenzierung", "Sucht Struktur", "Korrektheit-Fokus"]
  },
  {
    id: 9,
    title: "Der Standard-Sucher",
    scenario: "Person in symmetrischer Haltung, angepasst an die Gruppe und sagt: 'Ich will hier nur das Richtige machen. Es ist nicht möglich, das zu ändern. Experten empfehlen...'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Konformität", "Sozial", "Investment", "Devianz"],
    correctAnswer: 0,
    explanation: "Symmetrische Bewegungen, Anpassung und Autoritäts-Referenzen sind typisch für Konformitäts-Entscheidungen.",
    indicators: ["Symmetrische Haltung", "Anpassung an Gruppe", "Autoritäts-Referenzen", "Stolz auf korrekte Ausführung"]
  },
  {
    id: 10,
    title: "Der ROI-Optimierer",
    scenario: "Jemand wird angespannt bei Änderungsvorschlägen und sagt: 'Ich habe schon so viel investiert. Nach allem, was ich reingesteckt habe... Das kann ich mir nicht leisten zu verlieren.'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Investment", "Notwendigkeit", "Konformität", "Sozial"],
    correctAnswer: 0,
    explanation: "Schutz bestehender Investitionen, Sunken Cost Thinking und ROI-Filter sind typisch für Investment-orientierte Entscheidungen.",
    indicators: ["Angespannt bei Änderungen", "Investment-Sprache", "Past Tense Dominanz", "Schutz-Mentalität"]
  },
  {
    id: 11,
    title: "Der Sunken-Cost Verteidiger",
    scenario: "Person trägt alte Wertgegenstände, verschränkte Arme und sagt: 'Ich bin zu weit gekommen, um jetzt aussteigen zu können. Das würde alles zunichte machen, was ich aufgebaut habe.'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Investment", "Konformität", "Sozial", "Notwendigkeit"],
    correctAnswer: 0,
    explanation: "Alte Wertgegenstände, Schutz-Haltung und Sunken Cost Fallacy sind klassische Investment-Indikatoren.",
    indicators: ["Trägt alte Wertgegenstände", "Verschränkte Arme", "Sunken Cost Fallacy", "Kontinuitäts-Frames"]
  },
  {
    id: 12,
    title: "Der Dringlichkeits-Fokussierte",
    scenario: "Person macht zielgerichtete Bewegungen und sagt: 'Ich habe jetzt keine Zeit. Können wir bitte zur Sache kommen? Was machen wir jetzt konkret? Das muss heute passieren.'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Notwendigkeit", "Investment", "Devianz", "Novelty"],
    correctAnswer: 0,
    explanation: "Zeitdruck-Sprache, Ergebnisorientierung und Fokus auf sofortige Notwendigkeit charakterisieren diesen Entscheidungsstil.",
    indicators: ["Zielgerichtete Bewegungen", "Zeitdruck-Sprache", "Ergebnis-Orientierung", "Effizienz-Fokus"]
  },
  {
    id: 13,
    title: "Der Deadline-Getriebene",
    scenario: "Person mit quadratischen Schultern, minimal zappelnd und sagt: 'Alles schön und gut, aber lass uns jetzt auf den Punkt kommen. Das kann nicht warten. Jede Minute kostet uns xyz.'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Notwendigkeit", "Investment", "Devianz", "Sozial"],
    correctAnswer: 0,
    explanation: "Sachliche Haltung, minimales Zappeln unter Druck und scharfe Effizienz-Sprache sind typisch für Notwendigkeits-Entscheidungen.",
    indicators: ["Sachliche Haltung", "Minimal zappelnd unter Druck", "Scharfer Ton", "Laser-Fokus auf Umsetzung"]
  },
  {
    id: 14,
    title: "Der System-Kritiker",
    scenario: "Jemand trägt ungewöhnliche Kleidung, spricht sarkastisch und sagt: 'Die Regeln waren so. Ich hab sie gebrochen. Das System ist eh kaputt – die Alternative wäre rebellisch.'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Devianz", "Novelty", "Sozial", "Investment"],
    correctAnswer: 0,
    explanation: "Sarkasmus, bewusstes Regelbrechen und System-Kritik sind starke Indikatoren für deviantes Entscheidungsverhalten.",
    indicators: ["Sarkasmus", "Bewusstes Regelbrechen", "System-Kritik", "Provokation"]
  },
  {
    id: 15,
    title: "Der Scanning-Typ",
    scenario: "Person mit schnellen Augenbewegungen, nestelt mit Objekten und sagt: 'Was gibt's noch Spannendes dazu? Das hier ist so öde. Wieso immer das Gleiche?'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Novelty", "Devianz", "Notwendigkeit", "Investment"],
    correctAnswer: 0,
    explanation: "Schnelle Augenbewegungen (Scanning), Nesteln und die Suche nach Spannung sind klassische Novelty-Indikatoren.",
    indicators: ["Schnelle Augenbewegungen", "Nestelt mit Objekten", "Sucht nach Spannung", "Begeisterung für das Neueste"]
  },
  {
    id: 16,
    title: "Der Warmherzige Vermittler",
    scenario: "Person spiegelt die Mimik des Gegenübers, beobachtet genau und sagt: 'Das wird sich gut für die Leute anfühlen. Ich denke, das wird die Menschen besser zusammenbringen.'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Sozial", "Konformität", "Devianz", "Investment"],
    correctAnswer: 0,
    explanation: "Mimik-Spiegeln, genaues Beobachten und Fokus auf positive Gruppeneffekte sind sozial-orientiert.",
    indicators: ["Spiegelt Mimik", "Beobachtet genau", "Fokus auf Gruppeneffekte", "Vermittlerrolle"]
  },
  {
    id: 17,
    title: "Der Goldstandard-Sucher",
    scenario: "Person in Habachtstellung, stolz auf korrekte Ausführung und sagt: 'Das ist der Goldstandard in diesem Bereich. Das entspricht genau dem, was bewährt hat. Es wird verlangt dass...'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Konformität", "Sozial", "Investment", "Notwendigkeit"],
    correctAnswer: 0,
    explanation: "Habachtstellung, Stolz auf Korrektheit und Referenzen auf bewährte Standards zeigen Konformitäts-Entscheidungen.",
    indicators: ["Habachtstellung", "Stolz auf Korrektheit", "Standard-Referenzen", "Herdenmentalität"]
  },
  {
    id: 18,
    title: "Der Herzblut-Investor",
    scenario: "Person zögert bei neuen Dingen, angespannter Kiefer und sagt: 'Ich habe zu viel Herzblut reingesteckt. Nach all den Opfern, die ich gebracht habe... Das muss sich auszahlen.'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Investment", "Notwendigkeit", "Sozial", "Konformität"],
    correctAnswer: 0,
    explanation: "Zögern bei Änderungen, Anspannung und emotionale Investment-Sprache sind typisch für Investment-Entscheidungen.",
    indicators: ["Zögert bei Neuem", "Angespannter Kiefer", "Emotional Buy-in", "Schutz-Sprache"]
  },
  {
    id: 19,
    title: "Der Konkrete-Schritte Forderer",
    scenario: "Person wirkt unruhig bei abdriftenden Gesprächen und sagt: 'Was machen wir jetzt konkret? Das Problem löst sich nicht von selbst – wir müssen jetzt handeln. Zeit ist der entscheidende Faktor.'",
    question: "Welcher Entscheidungsstil ist erkennbar?",
    options: ["Notwendigkeit", "Investment", "Devianz", "Novelty"],
    correctAnswer: 0,
    explanation: "Unruhe bei Abschweifungen, Fokus auf konkrete Schritte und Zeitdruck-Betonung sind Notwendigkeits-Indikatoren.",
    indicators: ["Unruhig bei Abschweifungen", "Forderung nach konkreten Schritten", "Zeitdruck-Betonung", "Direkte Sprache"]
  },
  {
    id: 20,
    title: "Der Mut-zur-Abweichung Typ",
    scenario: "Person mit provokanter Haltung, schwarzer Humor und sagt: 'Das ist definitiv nicht der normale Weg – aber der normale Weg ist auch selten der beste. Du siehst selbst, wie kaputt das System ist.'",
    question: "Welcher Entscheidungsstil zeigt sich?",
    options: ["Devianz", "Novelty", "Sozial", "Konformität"],
    correctAnswer: 0,
    explanation: "Provokante Haltung, schwarzer Humor und bewusste Kritik am 'normalen Weg' sind deviante Entscheidungsmerkmale.",
    indicators: ["Provokante Haltung", "Schwarzer Humor", "Status-Quo-Kritik", "Musterbruch als Identität"]
  }
]

export default function DecisionsTraining() {
  const { language, t } = useLanguage()
  const [phase, setPhase] = useState<'learn' | 'practice'>('learn')
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null)
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([])
  const [shuffledScenarios, setShuffledScenarios] = useState(profilingScenarios)
  const [targetTotal, setTargetTotal] = useState(profilingScenarios.length)
  const [userAnswers, setUserAnswers] = useState<{ title: string; selectedLabel: string; correctLabel: string; wasCorrect: boolean; explanation: string; indicators: string[] }[]>([])
  const [bilingualLearn, setBilingualLearn] = useState(false)

  // Get translated data based on current language
  const translatedDecisionStyles = getTranslatedDecisionStyles(language)
  const bonusByStyle: Record<string, { heading: string; bullets: string[] }> = {
    Deviance: {
      heading: language === 'de' ? 'Weitere Hinweise' : 'Additional hints',
      bullets: [
        language === 'de' ? 'Vermeide passives oder angepasstes Wording' : 'Avoid passive or conformist wording',
        language === 'de' ? 'Provokante Begriffe wie „radikal“, „tabu“ nutzen' : 'Use provocative words like “radical”, “taboo”',
        language === 'de' ? 'Gib das Gefühl, Grenzen zu verschieben' : 'Give a sense of pushing boundaries',
      ],
    },
    Novelty: {
      heading: language === 'de' ? 'Abgrenzung & Trigger' : 'Differentiation & triggers',
      bullets: [
        language === 'de' ? 'Novelty ≠ Devianz: Es geht um Neuheit, nicht Regelbruch' : 'Novelty ≠ Deviance: It’s about newness, not rule-breaking',
        language === 'de' ? 'Limited Access, Beta-Status, Unbox-Effekt wirken stark' : 'Limited access, beta status, unbox effects are strong',
        language === 'de' ? 'Wörter: neu, revolutionär, brandaktuell' : 'Words: new, revolutionary, cutting-edge',
      ],
    },
    Social: {
      heading: language === 'de' ? 'Sprache & Ton' : 'Language & tone',
      bullets: [
        language === 'de' ? 'Ruhiger, unterstützender Ton' : 'Calm, supportive tone',
        language === 'de' ? 'Harmonie, Zugehörigkeit und Wir-Frames betonen' : 'Emphasize harmony, belonging and we-frames',
        language === 'de' ? 'Keine kalte Logik oder Druck' : 'Avoid cold logic or pressure',
      ],
    },
    Conformity: {
      heading: language === 'de' ? 'Sprache & Belege' : 'Language & evidence',
      bullets: [
        language === 'de' ? 'Respektvolle, formelle Ansprache' : 'Respectful, formal address',
        language === 'de' ? 'Standards, Kontinuität und Autorität referenzieren' : 'Reference standards, continuity and authority',
        language === 'de' ? 'Bewährte Methoden statt Experimente' : 'Proven methods over experiments',
      ],
    },
    Investment: {
      heading: language === 'de' ? 'Framing' : 'Framing',
      bullets: [
        language === 'de' ? 'Bisherige Anstrengungen ehren, nicht minimieren' : 'Honor past efforts, never minimize',
        language === 'de' ? 'Schutz und Rendite der Investition betonen' : 'Emphasize protection and payoff of investment',
        language === 'de' ? 'Completion-Sprache: fertig machen, auszahlen' : 'Completion language: finish, pay off',
      ],
    },
    Necessity: {
      heading: language === 'de' ? 'Umsetzung' : 'Execution',
      bullets: [
        language === 'de' ? 'Kurz, klar, konkrete nächste Schritte' : 'Short, clear, concrete next steps',
        language === 'de' ? 'Konsequenzen des Nicht-Handelns' : 'Consequences of inaction',
        language === 'de' ? 'Zeit ist der kritische Faktor' : 'Time is the critical factor',
      ],
    },
  }

  // Update scenarios when language changes
  useEffect(() => {
    const translatedScenarios = getTranslatedDecisionScenarios(language)
    setShuffledScenarios(translatedScenarios)
    setTargetTotal(translatedScenarios.length)
  }, [language])

  const handleStyleSelection = (index: number) => {
    setSelectedStyle(index)
  }

  const startPractice = () => {
    const translatedScenarios = getTranslatedDecisionScenarios(language)
    setShuffledScenarios(shuffleArray(translatedScenarios))
    setTargetTotal(translatedScenarios.length)
    setCurrentScenario(0)
    setScore(0)
    setCompletedScenarios([])
    setUserAnswers([])
    setSelectedAnswer(null)
    setShowFeedback(false)
    setPhase('practice')
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowFeedback(true)
      const isCorrect = selectedAnswer === shuffledScenarios[currentScenario].correctAnswer
      if (isCorrect) setScore(score + 1)
      const selectedLabel = shuffledScenarios[currentScenario].options[selectedAnswer]
      const correctLabel = shuffledScenarios[currentScenario].options[shuffledScenarios[currentScenario].correctAnswer]
      setUserAnswers([
        ...userAnswers,
        {
          title: shuffledScenarios[currentScenario].title,
          selectedLabel,
          correctLabel,
          wasCorrect: isCorrect,
          explanation: shuffledScenarios[currentScenario].explanation,
          indicators: shuffledScenarios[currentScenario].indicators,
        },
      ])
      if (isCorrect) setCompletedScenarios([...completedScenarios, currentScenario])
    }
  }

  const handleNext = () => {
    const isCorrect = selectedAnswer === shuffledScenarios[currentScenario].correctAnswer
    if (!isCorrect) {
      const current = shuffledScenarios[currentScenario]
      const nextQueue = [...shuffledScenarios.filter((_, i) => i !== currentScenario), current]
      setShuffledScenarios(nextQueue)
    }
    if (currentScenario < shuffledScenarios.length - 1) setCurrentScenario(currentScenario + 1)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const resetTraining = () => {
    const translatedScenarios = getTranslatedDecisionScenarios(language)
    setShuffledScenarios(shuffleArray(translatedScenarios))
    setPhase('learn')
    setSelectedStyle(null)
    setCurrentScenario(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setCompletedScenarios([])
  }

  const isComplete = completedScenarios.length === targetTotal

  useEffect(() => {
    if (phase !== 'practice') return
    const onKey = (e: KeyboardEvent) => {
      if (showFeedback) {
        if (e.key.toLowerCase() === 'n' || e.key === 'Enter') handleNext()
        return
      }
      if (e.key >= '1' && e.key <= '9') {
        const idx = parseInt(e.key, 10) - 1
        if (idx >= 0 && idx < shuffledScenarios[currentScenario].options.length) setSelectedAnswer(idx)
      }
      if (e.key === 'Enter' && selectedAnswer !== null) handleSubmit()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, showFeedback, selectedAnswer, currentScenario, shuffledScenarios])

  if (phase === 'learn') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <Link href="/" className="text-red-400 hover:text-red-300 mb-6 inline-flex items-center font-medium text-lg transition-colors">
                ← {t('button.back')}
              </Link>
              <h1 className="text-6xl font-black text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  {t('home.decisions.title')}
                </span>
                <br />
                <span className="text-white">{t('home.subtitle')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light max-w-4xl">
                {t('home.decisions.description')}
              </p>
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-6 mb-12 backdrop-blur-sm flex items-center justify-between">
                <p className="text-red-200 font-medium text-lg">💡 {t('decisions.hint')}</p>
                <button onClick={() => setBilingualLearn(!bilingualLearn)} className="px-3 py-1 text-xs rounded-md border border-red-500/40 text-red-200 hover:bg-red-500/10">
                  {bilingualLearn ? (language === 'de' ? 'Bilingual aus' : 'Bilingual off') : (language === 'de' ? 'Bilingual an' : 'Bilingual on')}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {translatedDecisionStyles.map((style, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-red-500/20 hover:-translate-y-1 border border-gray-100">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-2">{style.name}</h3>
                      {bilingualLearn && (
                        <div className="text-sm text-gray-500">{language === 'de' ? (getTranslatedDecisionStyles('en')[index]?.name || '') : (getTranslatedDecisionStyles('de')[index]?.name || '')}</div>
                      )}
                      <p className="text-gray-700 text-lg leading-relaxed font-light">{style.definition}</p>
                    </div>
                    <div className="text-4xl bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-lg">{style.emoji}</div>
                  </div>

                  <div className="grid gap-4">
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700">
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">🧍 {t('decisions.label.merits')}</div>
                      <ul className="space-y-2">
                        {style.typicalMerits.map((merit, i) => (
                          <li key={i} className="text-gray-300 font-medium">• {merit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700">
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">🗣️ {t('decisions.label.indicators')}</div>
                      <ul className="space-y-2">
                        {style.linguisticIndicators.map((indicator, i) => (
                          <li key={i} className="text-gray-300 font-medium italic">• "{indicator}"</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl p-6 border border-gray-700">
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">🚫 {t('decisions.label.avoid')}</div>
                      <p className="text-white italic font-medium text-lg">"{style.avoidFrames[0]}"</p>
                    </div>

                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-red-500/30">
                      <div className="text-xs uppercase tracking-wider text-red-700 mb-2">✅ {t('decisions.label.injection')}</div>
                      <p className="text-red-600 italic font-medium leading-relaxed">"{style.linguisticInjection}"</p>
                      <div className="mt-4">
                        <span className="text-sm font-black text-red-700">{t('decisions.label.triggers')}: </span>
                        <span className="text-sm text-red-600 font-medium">{style.triggerWords.join(', ')}</span>
                      </div>
                    </div>

                    {bonusByStyle[style.name] && (
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                        <div className="text-xs uppercase tracking-wider text-gray-700 mb-2">🧠 {t('decisions.label.bonus')}</div>
                        <h5 className="font-bold text-gray-900 mb-3">{bonusByStyle[style.name].heading}</h5>
                        <ul className="list-disc ml-6 text-gray-700 space-y-1">
                          {bonusByStyle[style.name].bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 text-right">
                    <button onClick={() => handleStyleSelection(index)} className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 font-semibold shadow">
                      {language === 'de' ? 'Diesen Stil üben' : 'Practice this style'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={startPractice}
                className="px-12 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all text-xl font-black shadow-2xl hover:shadow-red-500/30 hover:scale-105"
              >
                {language === 'de' ? 'Entscheidungsstile erkennen üben →' : 'Practice Recognizing Decision Styles →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-red-400 hover:text-red-300 mb-6 inline-flex items-center font-medium text-lg transition-colors">
              ← {t('button.back')}
            </Link>
            <h1 className="text-5xl font-black text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                {t('home.decisions.title')}
              </span>
              <br />
              <span className="text-white">{t('home.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {t('home.decisions.description')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {!isComplete ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {language === 'de' ? `${t('training.scenario')} ${currentScenario + 1} ${t('progress.of')} ${shuffledScenarios.length}` : `${t('training.scenario')} ${currentScenario + 1} ${t('progress.of')} ${shuffledScenarios.length}`}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {t('training.score')}: {score}/{completedScenarios.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(completedScenarios.length / shuffledScenarios.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-8 mb-8 border border-gray-200">
                    <p className="text-gray-900 text-lg leading-relaxed font-semibold">
                      {shuffledScenarios[currentScenario].scenario}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-red-500/5 to-red-600/5 rounded-xl p-6 mb-8 border border-red-200/30">
                    <p className="text-xl font-black text-gray-900 leading-relaxed">
                      {shuffledScenarios[currentScenario].question}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 mb-10">
                  {shuffledScenarios[currentScenario].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showFeedback}
                      className={`w-full p-6 text-left rounded-xl border-2 transition-all duration-300 hover:scale-102 text-gray-900 ${
                        selectedAnswer === index
                          ? showFeedback
                            ? index === shuffledScenarios[currentScenario].correctAnswer
                              ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 text-red-900 shadow-lg transform scale-102'
                              : 'border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 shadow-md'
                            : 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-lg transform scale-102'
                          : showFeedback && index === shuffledScenarios[currentScenario].correctAnswer
                          ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 text-red-900 shadow-lg transform scale-102'
                          : 'border-gray-200 hover:border-red-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-black text-xl tracking-tight">{option}</div>
                        <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                          selectedAnswer === index
                            ? showFeedback && index === shuffledScenarios[currentScenario].correctAnswer
                              ? 'bg-red-500 border-red-500'
                              : selectedAnswer === index
                              ? 'bg-red-500 border-red-500'
                              : 'border-gray-300'
                            : showFeedback && index === shuffledScenarios[currentScenario].correctAnswer
                            ? 'bg-red-500 border-red-500'
                            : 'border-gray-300'
                        }`}>
                          {((selectedAnswer === index) || (showFeedback && index === shuffledScenarios[currentScenario].correctAnswer)) && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {showFeedback && (
                  <div className="mb-8">
                    <div className="p-6 bg-gradient-to-r from-gray-900 to-black rounded-xl mb-4 border border-gray-700">
                      <h4 className="font-black text-white mb-2">{t('training.explanation')}</h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {shuffledScenarios[currentScenario].explanation}
                      </p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl border border-red-500/30">
                      <h4 className="font-black text-red-700 mb-2">🔍 {t('training.indicatorsDetected')}</h4>
                      <ul className="space-y-1">
                        {shuffledScenarios[currentScenario].indicators.map((indicator, i) => (
                          <li key={i} className="text-red-600 text-sm font-medium">• {indicator}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={resetTraining}
                    className="px-8 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-semibold text-gray-700 hover:border-gray-400"
                  >
                    {t('button.start')}
                  </button>
                  
                  {!showFeedback ? (
                    <button
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                      className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 disabled:bg-gray-300 disabled:from-gray-300 disabled:to-gray-300 transition-all font-black text-lg shadow-lg hover:shadow-red-500/30 hover:scale-105"
                    >
                      {t('button.check')}
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-black text-lg shadow-lg hover:shadow-red-500/30 hover:scale-105"
                    >
                      {currentScenario < shuffledScenarios.length - 1 ? t('button.next') : t('button.finish')}
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('training.completed.title')}</h2>
                <p className="text-xl text-gray-600 mb-6">
                  {language === 'de' ? `Du hast ${score} von ${targetTotal} Szenarien richtig erkannt.` : `You correctly identified ${score} out of ${targetTotal} scenarios.`}
                </p>
                <div className="text-left mb-6">
                  <h3 className="font-black text-gray-800 mb-3">{language === 'de' ? 'Zusammenfassung' : 'Review Summary'}</h3>
                  <div className="space-y-3 max-h-80 overflow-auto pr-2">
                    {userAnswers.map((ua, i) => (
                      <div key={i} className={`p-3 rounded-lg border ${ua.wasCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                        <div className="text-sm font-semibold text-gray-800">{ua.title}</div>
                        <div className="text-sm text-gray-700">
                          {language === 'de' ? 'Deine Antwort' : 'Your answer'}: <span className="font-medium">{ua.selectedLabel}</span>
                          {' '}· {language === 'de' ? 'Korrekt' : 'Correct'}: <span className="font-medium">{ua.correctLabel}</span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{ua.explanation}</div>
                        <div className="text-xs text-red-700 mt-1">{t('training.indicators')}: {ua.indicators.join(', ')}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={() => {
                        const text = userAnswers.map((ua, i) => `${i + 1}. ${ua.title}\n${language === 'de' ? 'Deine Antwort' : 'Your answer'}: ${ua.selectedLabel}\n${language === 'de' ? 'Korrekte Antwort' : 'Correct answer'}: ${ua.correctLabel}\n${language === 'de' ? 'Erklärung' : 'Explanation'}: ${ua.explanation}\n${t('training.indicators')}: ${ua.indicators.join(', ')}`).join('\n\n')
                        navigator.clipboard.writeText(text)
                      }}
                      className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      {language === 'de' ? 'Zusammenfassung kopieren' : 'Copy summary'}
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 mb-6 border border-red-500/30">
                  <h3 className="font-black text-red-700 mb-4">{language === 'de' ? 'Was du gelernt hast:' : 'What you learned:'}</h3>
                  <ul className="text-left text-red-600 space-y-2">
                    <li className="font-medium">• {language === 'de' ? 'Die 6 verschiedenen Entscheidungsstile erkennen' : 'Recognize the 6 different decision styles'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Linguistische Indikatoren für jeden Stil identifizieren' : 'Identify linguistic indicators for each style'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Passende Injektionen und Trigger-Wörter anwenden' : 'Apply appropriate injections and trigger words'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Vermeidung von kontraproduktiven Frames' : 'Avoid counterproductive frames'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Menschen entsprechend ihrem Entscheidungsstil ansprechen' : 'Address people according to their decision style'}</li>
                  </ul>
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={resetTraining}
                    className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-semibold shadow-lg hover:shadow-red-500/30"
                  >
                    {t('button.practiceAgain')}
                  </button>
                  <Link href="/" className="px-8 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700">
                    {t('button.back')}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}