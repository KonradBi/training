'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { needsTranslations } from '@/translations/needsTranslations'

type Language = 'de' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'de' || saved === 'en')) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const getStr = (lang: Language, k: string): string | undefined => {
    const v = (translations as Record<Language, Record<string, unknown>>)[lang]?.[k]
    return typeof v === 'string' ? v : undefined
  }
  const t = (key: string): string => getStr(language, key) ?? getStr('de', key) ?? key

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations: Record<Language, Record<string, unknown>> = {
  de: {
    // Navigation & Layout
    'app.title': 'NCI Skills Training',
    'nav.home': 'Home',
    'nav.needs': 'Needs',
    'nav.decisions': 'Decisions', 
    'nav.values': 'Values',
    
    // Needs specific
    ...needsTranslations.de,
    
    // Home Page
    'home.title': 'NCI Skills',
    'home.subtitle': 'Training',
    'home.description': 'Meistere die drei essentiellen Bereiche der zwischenmenschlichen Kommunikation mit professionellen Profiling-Techniken',
    'home.needs.title': 'Needs',
    'home.needs.description': 'Erkenne die 6 Kern-Bedürfnisse und lerne Menschen durch ihre tiefsten Motivationen zu verstehen',
    'home.decisions.title': 'Decisions',
    'home.decisions.description': 'Meistere die 6 Entscheidungsstile und lerne Menschen entsprechend zu beeinflussen',
    'home.values.title': 'Values',
    'home.values.description': 'Verstehe Werte-Profile und nutze linguistische Injektionen für maximale Wirkung',
    'home.cta': 'Training starten',
    'home.section.title': 'Professionelles Profiling',
    'home.section.description': 'Jedes Modul enthält authentische NCI-Inhalte, praktische Profiling-Übungen und interaktive Szenarien für sofort anwendbare Kommunikations-Skills.',
    'home.feature.scenarios': '20+ Profiling-Szenarien',
    'home.feature.content': 'Echte NCI-Inhalte',
    'home.feature.applicable': 'Sofort anwendbar',
    // Success Triangle
    'triangle.title': 'Das Erfolg Dreieck',
    'triangle.subtitle': 'Wenn einer der drei nicht sauber aufgestellt ist, bekommt das System Risse',
    'triangle.tab.selfmastery': 'Selfmastery',
    'triangle.tab.communication': 'Kommunikation',
    'triangle.tab.observation': 'Observation',
    'triangle.selfmastery.text1': 'Selbstbewusstsein. Disziplin. Emotionale Kontrolle. Timing.',
    'triangle.selfmastery.text2': 'Sagen und Handeln müssen übereinstimmen – sonst geht Autorität verloren.',
    'triangle.selfmastery.text3': 'Wer über Gewichtsabnahme spricht und selbst nicht handelt, wirkt unglaubwürdig.',
    'triangle.communication.text1': 'Was du sagst vs. was der andere fühlt. Das Richtige zur falschen Person oder Zeit bleibt wirkungslos.',
    'triangle.communication.text2': 'Die besten Kommunikatoren sprechen nicht, um zu beeindrucken, sondern',
    'triangle.communication.quote': 'Die besten Kommunikatoren sprechen nicht, um zu beeindrucken – sie sprechen, um die Gehirnchemie zu verändern.',
    'triangle.communication.text3': 'Es geht um Klarheit und Einverständnis.',
    'triangle.observation.text1': 'Gesichter lesen, Anspannung erkennen, Mikroverhalten und unbewusste Muster deuten. Körpersprache entschlüsseln.',
    'triangle.observation.text2': 'Ohne Beobachtung übersiehst du Desinteresse – oder drückst zu stark.',
    'triangle.observation.text3': 'Mit Beobachtungskompetenz kannst du fein kalibrieren.',
    'triangle.observation.text4': 'Top-Psychologen und Sektenscouts haben dieses System gemeistert.',
    
    // Hints
    'needs.hint': 'Jedes Need hat eine Superpower - erkenne sie und nutze sie für bessere Kommunikation!',
    'needs.label.visual': 'Visuelle Indikatoren',
    'needs.label.body': 'Körpersprache',
    'needs.label.linguistic': 'Typische Aussagen',
    'needs.label.psychological': 'Psychologische Indikatoren',
    'needs.label.guidance': 'Weitere Hinweise',
    'decisions.hint': 'Menschen treffen Entscheidungen auf verschiedene Weise - erkenne ihren Stil und passe deine Kommunikation an!',
    'decisions.label.definition': 'Definition',
    'decisions.label.merits': 'Typische Merkmale',
    'decisions.label.indicators': 'Linguistische Indikatoren',
    'decisions.label.avoid': 'Vermeiden',
    'decisions.label.injection': 'Linguistische Injektion',
    'decisions.label.triggers': 'Trigger-Wörter',
    'decisions.label.bonus': 'Weitere sprachliche Hinweise',
    'values.hint': 'Werte entstehen aus Kindheitserfahrungen und prägen unser Leben',
    'values.label.overview': 'Überblick',
    'values.label.examples': 'Sprachbeispiele',
    'values.label.injection': 'Linguistische Injektion',
    'values.label.principles': 'Worauf sie reagieren',

    // Common UI
    'button.start': 'Neu starten',
    'button.check': 'Antwort prüfen',
    'button.next': 'Weiter →',
    'button.finish': 'Abschließen',
    'button.back': 'Zurück zur Übersicht',
    'button.practiceAgain': 'Erneut üben',
    'progress.of': 'von',
    
    // Training Common
    'training.correct': 'Richtig!',
    'training.incorrect': 'Nicht ganz richtig.',
    'training.explanation': 'Erklärung:',
    'training.indicators': 'Indikatoren:',
    'training.indicatorsDetected': 'Erkannte Indikatoren:',
    'training.scenario': 'Szenario',
    'training.score': 'Score',
    'training.completed.title': 'Training abgeschlossen!',
    'training.completed.subtitle': 'Glückwunsch! Du hast alle Szenarien erfolgreich bearbeitet.',
    'training.completed.summary': 'Deine Ergebnisse:'
  },
  en: {
    // Navigation & Layout
    'app.title': 'NCI Skills Training',
    'nav.home': 'Home',
    'nav.needs': 'Needs',
    'nav.decisions': 'Decisions',
    'nav.values': 'Values',
    
    // Needs specific
    ...needsTranslations.en,
    
    // Home Page
    'home.title': 'NCI Skills',
    'home.subtitle': 'Training',
    'home.description': 'Master the three essential areas of interpersonal communication with professional profiling techniques',
    'home.needs.title': 'Needs',
    'home.needs.description': 'Recognize the 6 core needs and learn to understand people through their deepest motivations',
    'home.decisions.title': 'Decisions',
    'home.decisions.description': 'Master the 6 decision styles and learn to influence people accordingly',
    'home.values.title': 'Values',
    'home.values.description': 'Understand value profiles and use linguistic injections for maximum impact',
    'home.cta': 'Start Training',
    'home.section.title': 'Professional Profiling',
    'home.section.description': 'Each module contains authentic NCI content, practical profiling exercises and interactive scenarios for immediately applicable communication skills.',
    'home.feature.scenarios': '20+ Profiling Scenarios',
    'home.feature.content': 'Authentic NCI Content',
    'home.feature.applicable': 'Immediately Applicable',
    // Success Triangle
    'triangle.title': 'The Success Triangle',
    'triangle.subtitle': 'If any of the three isn\'t set up cleanly, the system develops cracks',
    'triangle.tab.selfmastery': 'Selfmastery',
    'triangle.tab.communication': 'Communication',
    'triangle.tab.observation': 'Observation',
    'triangle.selfmastery.text1': 'Self-awareness. Discipline. Emotional control. Timing.',
    'triangle.selfmastery.text2': 'Words and actions must align – otherwise authority evaporates.',
    'triangle.selfmastery.text3': 'Preaching weight loss while not acting is credibility loss.',
    'triangle.communication.text1': 'What you say vs. what the other person feels. The right message to the wrong person or time falls flat.',
    'triangle.communication.text2': 'The best communicators don\'t speak to impress, but',
    'triangle.communication.quote': 'The best communicators don\'t speak to impress – they speak to change brain chemistry.',
    'triangle.communication.text3': 'It\'s about clarity and consent.',
    'triangle.observation.text1': 'Reading the face, tension. Micro-behavior and unconscious patterns. Decoding body language.',
    'triangle.observation.text2': 'Without observation you miss disinterest – or you push too hard.',
    'triangle.observation.text3': 'With observation skills you can finely calibrate.',
    'triangle.observation.text4': 'Top psychologists and cult recruiters have mastered this system.',
    
    // Hints
    'needs.hint': 'Every need has a superpower - recognize it and use it for better communication!',
    'needs.label.visual': 'Visual Indicators',
    'needs.label.body': 'Body Language',
    'needs.label.linguistic': 'Typical Statements',
    'needs.label.psychological': 'Psychological Indicators',
    'needs.label.guidance': 'Additional Guidance',
    'decisions.hint': 'People make decisions in different ways - recognize their style and adapt your communication!',
    'decisions.label.definition': 'Definition',
    'decisions.label.merits': 'Typical Merits',
    'decisions.label.indicators': 'Linguistic Indicators',
    'decisions.label.avoid': 'Avoid',
    'decisions.label.injection': 'Linguistic Injection',
    'decisions.label.triggers': 'Trigger Words',
    'decisions.label.bonus': 'Additional Language Hints',
    'values.hint': 'Values arise from childhood experiences and shape our lives',
    'values.label.overview': 'Overview',
    'values.label.examples': 'Linguistic examples',
    'values.label.injection': 'Linguistic Injection',
    'values.label.principles': 'What resonates',

    // Common UI
    'button.start': 'Restart',
    'button.check': 'Check Answer',
    'button.next': 'Next →',
    'button.finish': 'Finish',
    'button.back': 'Back to Overview',
    'button.practiceAgain': 'Practice Again',
    'progress.of': 'of',
    
    // Training Common
    'training.correct': 'Correct!',
    'training.incorrect': 'Not quite right.',
    'training.explanation': 'Explanation:',
    'training.indicators': 'Indicators:',
    'training.indicatorsDetected': 'Detected Indicators:',
    'training.scenario': 'Scenario',
    'training.score': 'Score',
    'training.completed.title': 'Training Completed!',
    'training.completed.subtitle': 'Congratulations! You have successfully completed all scenarios.',
    'training.completed.summary': 'Your Results:'
  }
}