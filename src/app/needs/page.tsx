'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { getCoreNeeds } from '@/utils/translationHelpers'
import { shuffleArray } from '@/utils/shuffleArray'
import { getTranslatedExercises } from '@/translations/needsExercisesComplete'

const coreNeeds = [
  {
    name: "Bedeutung",
    description: "Das Bedürfnis nach Bedeutung dreht sich ganz darum, aufzufallen, als wichtig wahrgenommen zu werden und insgesamt gesehen zu werden.",
    emoji: "⭐",
    visualIndicators: ["Designerklamotten mit großem Logo", "Luxusgegenstände mit sichtbarem Branding", "Stark kuratierte Outfits", "Dominantes Parfum", "Seltene Sneakers"],
    bodyLanguage: ["Kinn leicht nach oben", "Selbstbewusste Körperhaltung", "Spricht lauter als der Rest", "Dominiert Konversationen"],
    linguisticIndicators: ["Ich war damals der Erste, der XY gemacht hat", "Die Leute kommen immer zu mir", "Durchschnittlichkeit kann ich nicht ertragen", "Ich habe sehr hohe Standards"],
    psychologicalIndicators: ["Angst, unsichtbar zu sein", "Drang, bedeutender zu erscheinen", "Suchen nach dem Power-Sitz am Tisch"],
    superpower: "Haben die Fähigkeit, sich von Verurteilung durch andere zu lösen. Wenn man wirklich etwas verändern will, muss man das Urteil anderer aushalten können."
  },
  {
    name: "Akzeptanz",
    description: "Es geht um Dazugehören. Nicht ausgestoßen werden. Sicherheit entsteht durch Verbindung mit der Gruppe.",
    emoji: "🤝",
    visualIndicators: ["Trendbasierte Kleidung", "Unternehmens-T-Shirts, Vereinskleidung", "Vermeidung von Extremen", "Ziel: In der Masse aufgehen"],
    bodyLanguage: ["Unbewusstes Spiegeln der Körpersprache", "Lachen über Gruppenscherze", "Sucht Blickkontakt nach Aussagen", "Stehen nah bei Gruppenmitgliedern"],
    linguisticIndicators: ["Ich habe mich nicht als Teil der Gruppe gefühlt", "Sie haben mich ausgeschlossen", "Gemeinschaft ist mir total wichtig", "In unserer Gruppe haben wir das immer so gemacht"],
    psychologicalIndicators: ["Tiefste Angst: Ausgeschlossen zu sein", "Scannen permanent nach sozialem Feedback", "Harmonie > Dominanz"],
    superpower: "Können sich hervorragend einfügen in soziale Kontexte. Sie sind loyal gegenüber ihrem Stamm und gehen durchs Feuer für die Gruppe."
  },
  {
    name: "Zustimmung",
    description: "Menschen mit starkem Bedürfnis nach Zustimmung wollen gesehen, gemocht, gelobt und bestätigt werden.",
    emoji: "💖",
    visualIndicators: ["Leicht overdressed, aber nicht auffällig", "Kleine Accessoires die Freundlichkeit signalisieren", "Lächeln häufiger als nötig"],
    bodyLanguage: ["Übermäßiges Nicken", "Ständiges Zustimmen oder Entschuldigen", "Übertriebene Komplimente", "Vermeidung klarer Haltung"],
    linguisticIndicators: ["Ach Quatsch, das war doch nichts", "Ich will doch nur helfen", "Ist das okay für dich?", "Die Leute sagen, ich bin sehr umgänglich"],
    psychologicalIndicators: ["Stärkste Angst: Verurteilung, Ablehnung", "Wenn ich lieb und nett bin, werde ich gemocht", "Konflikt wird gemieden"],
    superpower: "Mehr Empathie als andere. Durch ihre eigene Wunde erkennen sie den gleichen Need in anderen schneller."
  },
  {
    name: "Intelligenz",
    description: "Es geht nicht nur darum, klug zu sein, sondern als intelligent wahrgenommen zu werden.",
    emoji: "🧠",
    visualIndicators: ["Kleidung meist klar, funktional, neutral", "Tech-Gadgets, ausgesuchte Notizbücher", "Trendunabhängig", "Schrullige Elemente die Intelligenz signalisieren"],
    bodyLanguage: ["Zusammengezogene Augenbrauen beim Denken", "Klassische Denkerpose", "Präzise Sprache, Selbstkorrekturen", "Subtile Distanz"],
    linguisticIndicators: ["Ehrlich gesagt", "Um genau zu sein", "Das verstehen die meisten nicht", "Technisch gesehen", "Faktisch ist es so"],
    psychologicalIndicators: ["Tiefste Angst: Dumm zu wirken", "Identität dreht sich um Fakten und Logik", "Analytischer Rückzug bei emotionalen Themen"],
    superpower: "Erklären die Welt für andere. Sie bringen Ruhe und Struktur in komplexe Themen und sind oft exzellente Lehrer."
  },
  {
    name: "Mitleid",
    description: "Opfermentalität. Die unausgesprochene Botschaft: 'Sieh, wie schwer mein Leben ist. Hab Mitgefühl. Erwarte nichts.'",
    emoji: "😢",
    visualIndicators: ["Kleidung locker, geschichtet, leicht unordentlich", "Stil oft gewöhnlich, farblich unstimmig", "Viele Pastelltöne", "Look kommuniziert: Das Leben ist zu viel"],
    bodyLanguage: ["Hängende Schultern", "Vorgeneigter Oberkörper", "Häufiges Seufzen", "Festklammern an Objekten", "Leises Sprechen"],
    linguisticIndicators: ["Es war echt hart für mich", "Niemand interessiert sich wirklich für mich", "Ich weiß nicht, wie lange ich das noch durchhalte", "Es ist schon okay, ich bin's gewohnt"],
    psychologicalIndicators: ["Tiefstes Bedürfnis: Gesehen werden in ihrem Schmerz", "Tiefste Angst: Allein sein, ungeliebt", "Bauen emotionale Verträge"],
    superpower: "Haben ebenfalls Empathie, aber oft stärker auf das eigene Leid gerichtet. Sie sind tief verbunden mit Schmerz."
  },
  {
    name: "Stärke",
    description: "Projektieren von Macht nach außen. Niemals schwach wirken. Niemals außer Kontrolle. Lieber hart als verletzlich.",
    emoji: "💪",
    visualIndicators: ["Materialien mit Toughness - Leder, taktische Kleidung", "Funktion vor Mode", "Enge Kleidung die Muskeln betont", "Symbole der Macht"],
    bodyLanguage: ["Brust raus, Kinn oben", "Breite, raumgreifende Haltung", "Minimale Mimik, seltenes Lächeln", "Präsenz dominiert den Raum"],
    linguisticIndicators: ["Ich habe schon Schlimmeres erlebt", "Ich brauche niemanden", "Schwäche ist keine Option", "Ich hab keine Zeit für Drama"],
    psychologicalIndicators: ["Tiefsitzende Angst, schwach zu wirken", "Kontrolle = Schutz", "Respekt ist wichtiger als Liebe", "Unabhängigkeit geht vor"],
    superpower: "Exzellent in Führung. Sie sind in der Lage, Angst loszulassen und trotzdem zu handeln. Zeigen Präsenz und übernehmen Verantwortung."
  }
]

const profilingExercises = [
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
    title: "Der Seufzende",
    scenario: "Person mit hängenden Schultern, unordentlicher Kleidung seufzt und sagt: 'Es war echt hart für mich. Niemand versteht wirklich, was ich durchmache.'",
    question: "Welches Bedürfnis erkennen Sie?",
    options: ["Mitleid", "Zustimmung", "Akzeptanz", "Stärke"],
    correctAnswer: 0,
    explanation: "Hängende Körperhaltung, Seufzen und das Betonen von persönlichem Leid sind Indikatoren für das Mitleid-Bedürfnis.",
    indicators: ["Hängende Schultern", "Seufzen", "Betont persönliches Leid", "Sucht Mitgefühl"]
  },
  {
    id: 10,
    title: "Die Überforderte",
    scenario: "Person klammert sich an ihre Kaffeetasse, trägt Pastellfarben und sagt leise: 'Ich weiß nicht, wie lange ich das noch durchhalte. Es ist schon okay, ich bin's gewohnt.'",
    question: "Welches Bedürfnis steht dahinter?",
    options: ["Mitleid", "Zustimmung", "Akzeptanz", "Intelligenz"],
    correctAnswer: 0,
    explanation: "Festklammern an Objekten, melancholische Kleidung und das Betonen von Überforderung sind klassische Mitleid-Indikatoren.",
    indicators: ["Klammert sich an Objekte", "Pastellfarben", "Leise Sprache", "Betont Überforderung"]
  },
  {
    id: 11,
    title: "Der Unnahbare",
    scenario: "Person in Lederkleidung, breite Haltung, sagt knapp: 'Ich brauche niemanden. Schwäche ist keine Option. Ich hab schon Schlimmeres erlebt.'",
    question: "Welches Bedürfnis steht dahinter?",
    options: ["Stärke", "Bedeutung", "Intelligenz", "Mitleid"],
    correctAnswer: 0,
    explanation: "Lederkleidung, dominante Körperhaltung und das Betonen von Unabhängigkeit zeigen das Stärke-Bedürfnis.",
    indicators: ["Leder/taktische Kleidung", "Breite Haltung", "Betont Unabhängigkeit", "Vermeidet Schwäche"]
  },
  {
    id: 12,
    title: "Der Raum-Dominierer",
    scenario: "Person steht breitbeinig, Brust raus, minimale Mimik und sagt: 'Andere jammern, ich zieh durch. Gefühle bringen dich nicht weiter.'",
    question: "Welches Bedürfnis erkennen Sie?",
    options: ["Stärke", "Bedeutung", "Intelligenz", "Akzeptanz"],
    correctAnswer: 0,
    explanation: "Raumgreifende Haltung, emotionale Kontrolle und das Ablehnen von 'Schwäche' sind typisch für das Stärke-Bedürfnis.",
    indicators: ["Raumgreifende Haltung", "Minimale Mimik", "Ablehnung von Emotionen", "Dominiert den Raum"]
  },
  {
    id: 13,
    title: "Die Perfektionistin",
    scenario: "Jemand mit penibel gestyltem Outfit erwähnt: 'Die meisten verstehen das nicht, aber ich bin schon ein bisschen Perfektionist. Durchschnittlichkeit kann ich nicht ertragen.'",
    question: "Welches Bedürfnis erkennen Sie?",
    options: ["Bedeutung", "Intelligenz", "Stärke", "Zustimmung"],
    correctAnswer: 0,
    explanation: "Penible Detailverliebtheit und die Abgrenzung von Durchschnittlichkeit zeigen das Bedeutungs-Bedürfnis.",
    indicators: ["Penible Detailverliebtheit", "Abgrenzung von Durchschnitt", "Betont Perfektion"]
  },
  {
    id: 14,
    title: "Der Erste-Erwähner",
    scenario: "Person mit dominantem Parfum posiert selbstbewusst und sagt: 'Ich war damals der Erste, der das erkannt hat. Ich habe sehr hohe Standards.'",
    question: "Welches Bedürfnis zeigt sich?",
    options: ["Bedeutung", "Intelligenz", "Stärke", "Akzeptanz"],
    correctAnswer: 0,
    explanation: "Starkes Parfum zum Auffallen, Posen und das Betonen der Vorreiterrolle sind klassische Bedeutungs-Indikatoren.",
    indicators: ["Dominantes Parfum", "Selbstbewusste Posen", "Betont Vorreiterrolle", "Hohe Standards"]
  },
  {
    id: 15,
    title: "Der Wir-Sprecher",
    scenario: "Person trägt Vereinsjacke, nickt bei allem zustimmend und sagt: 'Gemeinschaft ist mir total wichtig. Man macht das so. Unsere Gruppe denkt...'",
    question: "Welches Bedürfnis erkennen Sie?",
    options: ["Akzeptanz", "Zustimmung", "Bedeutung", "Mitleid"],
    correctAnswer: 0,
    explanation: "Vereinskleidung, zustimmendes Verhalten und ständige 'Wir'-Referenzen zeigen das Akzeptanz-Bedürfnis.",
    indicators: ["Vereinskleidung", "Zustimmendes Nicken", "Wir-Sprache", "Soziale Referenzierung"]
  },
  {
    id: 16,
    title: "Der Selbstkorrekteur",
    scenario: "Person mit ausgesuchtem Notizbuch, präzise Sprache und sagt: 'Um genau zu sein... besser gesagt... Man muss da unterscheiden zwischen...'",
    question: "Welches Bedürfnis steht dahinter?",
    options: ["Intelligenz", "Bedeutung", "Zustimmung", "Stärke"],
    correctAnswer: 0,
    explanation: "Präzise Selbstkorrekturen, gewählte Accessoires und analytische Sprache zeigen das Intelligenz-Bedürfnis.",
    indicators: ["Präzise Selbstkorrekturen", "Ausgesuchte Accessoires", "Analytische Sprache", "Subtile Distanz"]
  },
  {
    id: 17,
    title: "Die Geschichten-Erzählerin",
    scenario: "Person nestelt nervös, vorgeneigter Oberkörper und erzählt: 'Ich kümmere mich um alles - aber wenn's drauf ankommt, bin ich allein. Niemand interessiert sich wirklich für mich.'",
    question: "Welches Bedürfnis erkennen Sie?",
    options: ["Mitleid", "Zustimmung", "Akzeptanz", "Bedeutung"],
    correctAnswer: 0,
    explanation: "Nervöse Bewegungen, vorgeneigte Haltung und Geschichten über Verlassenwerden sind typisch für das Mitleid-Bedürfnis.",
    indicators: ["Nervöse Bewegungen", "Vorgeneigte Haltung", "Geschichten über Verletzung", "Baut emotionale Verträge"]
  },
  {
    id: 18,
    title: "Der Keine-Zeit-für-Drama Typ",
    scenario: "Person sitzt mit quadratischen Schultern, dunkle taktische Kleidung und sagt fest: 'Ich hab gelernt, mich auf niemanden zu verlassen. Ich hab keine Zeit für Drama.'",
    question: "Welches Bedürfnis zeigt sich?",
    options: ["Stärke", "Intelligenz", "Bedeutung", "Mitleid"],
    correctAnswer: 0,
    explanation: "Sachliche Haltung, taktische Kleidung und das Ablehnen von Emotionen sind klassische Stärke-Indikatoren.",
    indicators: ["Sachliche Haltung", "Taktische Kleidung", "Ablehnt Emotionen", "Betont Unabhängigkeit"]
  },
  {
    id: 19,
    title: "Der Rückversicherungs-Sucher",
    scenario: "Person schweift im Gespräch ab, übertriebene Komplimente und sagt: 'Ich versuche hier nur mein Bestes. Die meisten kommen gut mit mir klar. Hoffe, das macht Sinn...'",
    question: "Welches Bedürfnis erkennen Sie?",
    options: ["Zustimmung", "Akzeptanz", "Mitleid", "Intelligenz"],
    correctAnswer: 0,
    explanation: "Abschweifen, übertriebene Komplimente und ständige Rückversicherung sind typisch für das Zustimmungs-Bedürfnis.",
    indicators: ["Schweift ab", "Übertriebene Komplimente", "Sucht Rückversicherung", "Vermeidet klare Haltung"]
  },
  {
    id: 20,
    title: "Der Tech-Gadget Träger",
    scenario: "Person mit funktionaler Kleidung, Tech-Gadgets sichtbar platziert und sagt: 'Streng genommen... In Wirklichkeit ist es frustrierend, ständig von Leuten umgeben zu sein, die das nicht verstehen.'",
    question: "Welches Bedürfnis steht dahinter?",
    options: ["Intelligenz", "Bedeutung", "Stärke", "Akzeptanz"],
    correctAnswer: 0,
    explanation: "Funktionale Kleidung, strategisch platzierte Tech-Gadgets und die Abwertung anderer als unwissend zeigen das Intelligenz-Bedürfnis.",
    indicators: ["Funktionale Kleidung", "Tech-Gadgets", "Präzise Formulierungen", "Sieht andere als unwissend"]
  }
]

export default function NeedsTraining() {
  const { language, t } = useLanguage()
  const [phase, setPhase] = useState<'learn' | 'practice'>('learn')
  const [selectedNeed, setSelectedNeed] = useState<number | null>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completedExercises, setCompletedExercises] = useState<number[]>([])
  const [shuffledExercises, setShuffledExercises] = useState(profilingExercises)
  const [targetTotal, setTargetTotal] = useState(profilingExercises.length)
  const [userAnswers, setUserAnswers] = useState<{ title: string; selectedLabel: string; correctLabel: string; wasCorrect: boolean; explanation: string; indicators: string[] }[]>([])
  const [bilingualLearn, setBilingualLearn] = useState(false)
  
  // Get translated data based on current language
  const translatedCoreNeeds = getCoreNeeds(language)
  const guidanceByNeed: Record<string, string[]> = language === 'de'
    ? {
        Bedeutung: [
          'Sprich über Wirkung und Sichtbarkeit',
          'Erkenne hohe Standards und Vorreiterrolle an',
          'Gib Bühne statt Kleinklein',
        ],
        Akzeptanz: [
          'Betone Zugehörigkeit und Sicherheit in der Gruppe',
          'Zeige klare, freundliche Orientierung an „wir“',
          'Reduziere Ausschluss-Risiko durch Einbindung',
        ],
        Zustimmung: [
          'Gib ehrliche, kurze Bestätigung ohne Übertreibung',
          'Formuliere klar und freundlich, setze weiche Grenzen',
          'Reduziere Bewertungsangst, vermeide harsche Korrekturen',
        ],
        Intelligenz: [
          'Kommuniziere präzise, mit Substanz und Logik',
          'Liefere Daten und klare Differenzierungen',
          'Vermeide Hype; respektiere kognitive Autorität',
        ],
        Mitleid: [
          'Zeige Empathie ohne zu retten',
          'Spiegele schonend, biete Klarheit und kleine Schritte',
          'Setze sanfte Grenzen statt Probleme zu lösen',
        ],
        Stärke: [
          'Sei klar, direkt und lösungsorientiert',
          'Vermittle Kontrolle, Handlung und Respekt',
          'Kein weiches Wording, kein Smalltalk bei Entscheidungen',
        ],
      }
    : {
        Significance: [
          'Speak to impact and visibility',
          'Acknowledge high standards and being first',
          'Offer a stage, not minutiae',
        ],
        Acceptance: [
          'Emphasize belonging and group safety',
          'Use inclusive we-frames and gentle orientation',
          'Reduce exclusion risk through inclusion',
        ],
        Approval: [
          'Give brief, sincere affirmation without overdoing it',
          'Be clear and kind; set soft boundaries',
          'Reduce fear of judgment; avoid harsh corrections',
        ],
        Intelligence: [
          'Communicate precisely with substance and logic',
          'Provide data and clear distinctions',
          'Avoid hype; respect cognitive authority',
        ],
        Sympathy: [
          'Show empathy without rescuing',
          'Gently mirror, offer clarity and small steps',
          'Set soft boundaries instead of solving the problem',
        ],
        Strength: [
          'Be clear, direct and action-oriented',
          'Convey control, execution and respect',
          'No soft wording or small talk when deciding',
        ],
      }

  // Update exercises when language changes
  useEffect(() => {
    const translatedExercises = getTranslatedExercises(language)
    setShuffledExercises(translatedExercises)
    setTargetTotal(translatedExercises.length)
  }, [language])

  const handleNeedSelection = (index: number) => {
    setSelectedNeed(index)
  }

  const startPractice = () => {
    const translatedExercises = getTranslatedExercises(language)
    setShuffledExercises(shuffleArray(translatedExercises))
    setTargetTotal(translatedExercises.length)
    setCurrentExercise(0)
    setScore(0)
    setCompletedExercises([])
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
      const isCorrect = selectedAnswer === shuffledExercises[currentExercise].correctAnswer
      if (isCorrect) setScore(score + 1)
      const selectedLabel = shuffledExercises[currentExercise].options[selectedAnswer]
      const correctLabel = shuffledExercises[currentExercise].options[shuffledExercises[currentExercise].correctAnswer]
      setUserAnswers([
        ...userAnswers,
        {
          title: shuffledExercises[currentExercise].title,
          selectedLabel,
          correctLabel,
          wasCorrect: isCorrect,
          explanation: shuffledExercises[currentExercise].explanation,
          indicators: shuffledExercises[currentExercise].indicators,
        },
      ])
      if (isCorrect) setCompletedExercises([...completedExercises, currentExercise])
    }
  }

  const handleNext = () => {
    const isCorrect = selectedAnswer === shuffledExercises[currentExercise].correctAnswer
    if (!isCorrect) {
      const current = shuffledExercises[currentExercise]
      const nextQueue = [...shuffledExercises.filter((_, i) => i !== currentExercise), current]
      setShuffledExercises(nextQueue)
    }
    if (currentExercise < shuffledExercises.length - 1) setCurrentExercise(currentExercise + 1)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const resetTraining = () => {
    const translatedExercises = getTranslatedExercises(language)
    setShuffledExercises(shuffleArray(translatedExercises))
    setPhase('learn')
    setSelectedNeed(null)
    setCurrentExercise(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setCompletedExercises([])
  }

  const isComplete = completedExercises.length === targetTotal

  useEffect(() => {
    if (phase !== 'practice') return
    const onKey = (e: KeyboardEvent) => {
      if (showFeedback) {
        if (e.key.toLowerCase() === 'n' || e.key === 'Enter') handleNext()
        return
      }
      if (e.key >= '1' && e.key <= '9') {
        const idx = parseInt(e.key, 10) - 1
        if (idx >= 0 && idx < shuffledExercises[currentExercise].options.length) setSelectedAnswer(idx)
      }
      if (e.key === 'Enter' && selectedAnswer !== null) handleSubmit()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, showFeedback, selectedAnswer, currentExercise, shuffledExercises])

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
                  {t('home.needs.title')}
                </span>
                <br />
                <span className="text-white">{t('home.subtitle')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light max-w-4xl">
                {t('needs.subtitle')}
              </p>
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-6 mb-12 backdrop-blur-sm flex items-center justify-between">
                <p className="text-red-200 font-medium text-lg">💡 {t('needs.hint')}</p>
                <button onClick={() => setBilingualLearn(!bilingualLearn)} className="px-3 py-1 text-xs rounded-md border border-red-500/40 text-red-200 hover:bg-red-500/10">
                  {bilingualLearn ? (language === 'de' ? 'Bilingual aus' : 'Bilingual off') : (language === 'de' ? 'Bilingual an' : 'Bilingual on')}
                </button>
              </div>
            </div>

            <div className="grid gap-8 mb-12">
              {translatedCoreNeeds.map((need, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500 cursor-pointer hover:shadow-red-500/20 hover:scale-102 border border-gray-100 ${
                    selectedNeed === index ? 'ring-2 ring-red-500 bg-red-50/50' : ''
                  }`}
                  onClick={() => handleNeedSelection(index)}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">{need.name}</h3>
                    {bilingualLearn && (
                      <div className="text-sm text-gray-500">{language === 'de' ? (getCoreNeeds('en')[index]?.name || '') : (getCoreNeeds('de')[index]?.name || '')}</div>
                    )}
                    <div className="text-4xl bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-lg">
                      {need.emoji}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed font-light">{need.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700">
                      <h4 className="font-black text-white mb-4 text-lg">👁️ {t('needs.label.visual')}</h4>
                      <ul className="space-y-2">
                        {need.visualIndicators.map((indicator, i) => (
                          <li key={i} className="text-gray-300 font-medium">• {indicator}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700">
                      <h4 className="font-black text-white mb-4 text-lg">🧍 {t('needs.label.body')}</h4>
                      <ul className="space-y-2">
                        {need.bodyLanguage.map((language, i) => (
                          <li key={i} className="text-gray-300 font-medium">• {language}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-black text-gray-900 mb-4 text-lg">🗣️ {t('needs.label.linguistic')}</h4>
                    <div className="space-y-3">
                      {need.linguisticIndicators.slice(0, 8).map((line, i) => (
                        <div key={i} className="bg-gradient-to-r from-black to-gray-900 rounded-xl p-4 border border-gray-700">
                          <p className="text-white italic font-medium">“{line}”</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-red-500/30">
                      <h4 className="font-black text-red-700 mb-3 text-lg">💪 Superpower</h4>
                      <p className="text-red-600 font-medium leading-relaxed">{need.superpower}</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                      <h4 className="font-black text-gray-900 mb-3 text-lg">🧠 {t('needs.label.psychological')}</h4>
                      <ul className="list-disc ml-6 text-gray-700 space-y-1">
                        {need.psychologicalIndicators?.slice(0, 4).map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {guidanceByNeed[need.name] && (
                    <div className="mt-6 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                      <h4 className="font-black text-gray-900 mb-3 text-lg">🧩 {t('needs.label.guidance')}</h4>
                      <ul className="list-disc ml-6 text-gray-700 space-y-1">
                        {guidanceByNeed[need.name].map((g, i) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={startPractice}
                className="px-12 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all text-xl font-black shadow-2xl hover:shadow-red-500/30 hover:scale-105"
              >
                {language === 'de' ? 'Profiling üben →' : 'Practice Profiling →'}
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
                {t('home.needs.title')}
              </span>
              <br />
              <span className="text-white">{t('home.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {t('needs.description')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {!isComplete ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {language === 'de' ? `${t('training.scenario')} ${currentExercise + 1} ${t('progress.of')} ${shuffledExercises.length}` : `${t('training.scenario')} ${currentExercise + 1} ${t('progress.of')} ${shuffledExercises.length}`}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {t('training.score')}: {score}/{completedExercises.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(completedExercises.length / shuffledExercises.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-8 mb-8 border border-gray-200">
                    <p className="text-gray-800 text-lg leading-relaxed font-medium">
                      {shuffledExercises[currentExercise].scenario}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-red-500/5 to-red-600/5 rounded-xl p-6 mb-8 border border-red-200/30">
                    <p className="text-xl font-black text-gray-900 leading-relaxed">
                      {shuffledExercises[currentExercise].question}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 mb-10">
                  {shuffledExercises[currentExercise].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showFeedback}
                      className={`w-full p-6 text-left rounded-xl border-2 transition-all duration-300 hover:scale-102 text-gray-900 ${
                        selectedAnswer === index
                          ? showFeedback
                            ? index === shuffledExercises[currentExercise].correctAnswer
                              ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 text-red-900 shadow-lg transform scale-102'
                              : 'border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 shadow-md'
                            : 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-lg transform scale-102'
                          : showFeedback && index === shuffledExercises[currentExercise].correctAnswer
                          ? 'border-red-500 bg-gradient-to-r from-red-50 to-red-100 text-red-900 shadow-lg transform scale-102'
                          : 'border-gray-200 hover:border-red-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-black text-xl tracking-tight">{option}</div>
                        <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                          selectedAnswer === index
                            ? showFeedback && index === shuffledExercises[currentExercise].correctAnswer
                              ? 'bg-red-500 border-red-500'
                              : selectedAnswer === index
                              ? 'bg-red-500 border-red-500'
                              : 'border-gray-300'
                            : showFeedback && index === shuffledExercises[currentExercise].correctAnswer
                            ? 'bg-red-500 border-red-500'
                            : 'border-gray-300'
                        }`}>
                          {((selectedAnswer === index) || (showFeedback && index === shuffledExercises[currentExercise].correctAnswer)) && (
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
                        {shuffledExercises[currentExercise].explanation}
                      </p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl border border-red-500/30">
                      <h4 className="font-black text-red-700 mb-2">🔍 {t('training.indicatorsDetected')}</h4>
                      <ul className="space-y-1">
                        {shuffledExercises[currentExercise].indicators.map((indicator, i) => (
                          <li key={i} className="text-red-600 text-sm font-medium">• {indicator}</li>
                        ))}
                      </ul>
                      <div className="text-xs text-red-700 mt-3">
                        {language === 'de' ? 'Korrekte Antwort' : 'Correct answer'}: <span className="font-semibold">{shuffledExercises[currentExercise].options[shuffledExercises[currentExercise].correctAnswer]}</span>
                      </div>
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
                      {currentExercise < shuffledExercises.length - 1 ? t('button.next') : t('button.finish')}
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
                    <li className="font-medium">• {language === 'de' ? 'Visuelle Indikatoren für jedes Bedürfnis erkennen' : 'Recognize visual indicators for each need'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Körpersprache richtig interpretieren' : 'Correctly interpret body language'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Linguistische Muster identifizieren' : 'Identify linguistic patterns'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Die Superpower jedes Bedürfnisses verstehen' : 'Understand the superpower of each need'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Menschen effektiver ansprechen und beeinflussen' : 'Address and influence people more effectively'}</li>
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