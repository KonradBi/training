'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { shuffleArray } from '@/utils/shuffleArray'
import { getTranslatedValues, getTranslatedValueScenarios } from '@/translations/valuesComplete'

type ValueItem = {
  name: string
  description: string
  keywords: string[]
  emoji?: string
  quote?: string
  quotes?: string[]
  injection?: string
  injections?: string[]
}

const coreValues = [
  {
    name: "Verbindung",
    description: "Das tiefe Bedürfnis, emotional sicher und verstanden zu sein",
    keywords: ["Nähe", "Verständnis", "Sicherheit", "Zugehörigkeit"],
    quote: "Ich brauche nicht viele Freunde, ich brauche wahre Freunde",
    injection: "Du bist derjenige mit dem man sich sicher fühlt"
  },
  {
    name: "Information", 
    description: "Das Bedürfnis nach Klarheit, Verständnis und mentaler Kontrolle",
    keywords: ["Wissen", "Klarheit", "Sicherheit", "Verständnis"],
    quote: "Ich möchte hier einfach sicher sein",
    injection: "Du bist jemand dem Wissen wichtiger ist als Hype"
  },
  {
    name: "Anerkennung",
    description: "Das tiefe Bedürfnis gesehen, gewertschätzt und anerkannt zu werden", 
    keywords: ["Wertschätzung", "Bedeutung", "Sichtbarkeit", "Wirkung"],
    quote: "Ich suche kein Lob – nur das Gefühl, dass es einen Unterschied macht",
    injection: "So eine Leistung wird nicht unbemerkt bleiben"
  },
  {
    name: "Erfahrungen",
    description: "Das Bedürfnis nach Lebendigkeit, Abwechslung und unvergesslichen Momenten",
    keywords: ["Lebendigkeit", "Abwechslung", "Erinnerungen", "Gefühle"],
    quote: "Ich möchte kein perfektes Leben sondern ein spannendes",
    injection: "Das ist das Ding hier woran du dich noch Jahre lang erinnern wirst"
  },
  {
    name: "Freiheit",
    description: "Das Bedürfnis nach Autonomie, Selbstbestimmung und emotionalem Raum",
    keywords: ["Autonomie", "Selbstbestimmung", "Flexibilität", "Raum"],
    quote: "Ich lebe das Leben nach meinen Regeln",
    injection: "Du bist jemand dem Freiheit wichtiger ist als Zustimmung"
  },
  {
    name: "Wachstum",
    description: "Das Bedürfnis sich ständig weiterzuentwickeln und zu wachsen",
    keywords: ["Entwicklung", "Potenzial", "Fortschritt", "Transformation"],
    quote: "Es ist wichtig mich zu verwirklichen",
    injection: "Das hier ist das nächste Level was die meisten nicht erreichen"
  }
]

const profileScenarios = [
  {
    id: 1,
    title: "Der einsame Überarbeiter",
    description: "Ein Kollege arbeitet ständig Überstunden, checkt aber immer wieder bei anderen ein und sucht Gespräche.",
    options: [
      { value: "Verbindung", reason: "Sucht emotionale Nähe und Sicherheit trotz Arbeitsbelastung" },
      { value: "Anerkennung", reason: "Will durch harte Arbeit gesehen und gewertschätzt werden" },
      { value: "Information", reason: "Braucht Klarheit über Arbeitsaufgaben und Erwartungen" }
    ],
    correctAnswer: 0,
    explanation: "Die Kombination aus harter Arbeit UND dem ständigen Suchen nach zwischenmenschlichem Kontakt deutet auf Verbindung als Kernwert hin.",
    injection: "Du bist derjenige mit dem man sich sicher fühlt"
  },
  {
    id: 2,
    title: "Die ewige Rechercheurin",
    description: "Eine Person fragt ständig nach Details, will alles verstehen und zögert Entscheidungen hinaus für 'noch eine Recherche'.",
    options: [
      { value: "Information", reason: "Wissen ist Sicherheit - braucht Klarheit vor Handlung" },
      { value: "Anerkennung", reason: "Will durch Perfektion anerkannt werden" },
      { value: "Freiheit", reason: "Vermeidet Entscheidungen um Autonomie zu bewahren" }
    ],
    correctAnswer: 0,
    explanation: "Das ständige Bedürfnis nach mehr Information und die Angst vor unklaren Situationen zeigt Information als Kernwert.",
    injection: "Du bist jemand dem Wissen wichtiger ist als Hype"
  },
  {
    id: 3,
    title: "Der subtile Selbstvermarkter",
    description: "Jemand bringt geschickt seine Leistungen ins Gespräch und wirkt frustriert, wenn Erfolge unbemerkt bleiben.",
    options: [
      { value: "Anerkennung", reason: "Braucht Sichtbarkeit und Wertschätzung für seine Leistung" },
      { value: "Wachstum", reason: "Will sich durch Erfolg weiterentwickeln" },
      { value: "Freiheit", reason: "Möchte unabhängig erfolgreich sein" }
    ],
    correctAnswer: 0,
    explanation: "Das Bedürfnis nach Sichtbarkeit und die Frustration bei fehlender Anerkennung zeigt Anerkennung als Kernwert.",
    injection: "So eine Leistung wird nicht unbemerkt bleiben"
  },
  {
    id: 4,
    title: "Der Erlebnissammler",
    description: "Person plant ständig Aktivitäten, reist viel und erzählt begeistert von Erfahrungen. Langweilt sich schnell bei Routine.",
    options: [
      { value: "Erfahrungen", reason: "Braucht Lebendigkeit und unvergessliche Momente" },
      { value: "Freiheit", reason: "Will frei von Einschränkungen leben" },
      { value: "Wachstum", reason: "Entwickelt sich durch neue Erfahrungen" }
    ],
    correctAnswer: 0,
    explanation: "Die Suche nach Abwechslung und die Betonung von Gefühlen und Erinnerungen zeigt Erfahrungen als Kernwert.",
    injection: "Das ist das Ding hier woran du dich noch Jahre lang erinnern wirst"
  },
  {
    id: 5,
    title: "Der Regel-Allergiker",
    description: "Reagiert stark auf Druck und Vorgaben, arbeitet aber sehr produktiv wenn selbstbestimmt. Verlässt Unternehmen wegen zu starrer Strukturen.",
    options: [
      { value: "Freiheit", reason: "Autonomie und Selbstbestimmung sind essentiell" },
      { value: "Wachstum", reason: "Entwicklung wird durch Regeln behindert" },
      { value: "Anerkennung", reason: "Will für Individualität geschätzt werden" }
    ],
    correctAnswer: 0,
    explanation: "Die Allergie gegen Kontrolle und das Aufblühen in selbstbestimmten Situationen zeigt Freiheit als Kernwert.",
    injection: "Du bist jemand dem Freiheit wichtiger ist als Zustimmung"
  },
  {
    id: 6,
    title: "Der ewige Lerner",
    description: "Nimmt ständig an Weiterbildungen teil, spricht über Ziele und Potenzial, verlässt Jobs wenn keine Entwicklung möglich ist.",
    options: [
      { value: "Wachstum", reason: "Entwicklung und Potenzialentfaltung sind zentral" },
      { value: "Information", reason: "Lernen verschafft Sicherheit durch Wissen" },
      { value: "Anerkennung", reason: "Will für Entwicklung anerkannt werden" }
    ],
    correctAnswer: 0,
    explanation: "Der Fokus auf Zukunftsvision und kontinuierliche Entwicklung zeigt Wachstum als Kernwert.",
    injection: "Das hier ist das nächste Level was die meisten nicht erreichen"
  }
]

export default function ValuesTraining() {
  const { language, t } = useLanguage()
  const [phase, setPhase] = useState<'learn' | 'practice'>('learn')
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([])
  const [shuffledScenarios, setShuffledScenarios] = useState(profileScenarios)
  const [targetTotal, setTargetTotal] = useState(profileScenarios.length)
  const [userAnswers, setUserAnswers] = useState<{ title: string; selectedLabel: string; correctLabel: string; wasCorrect: boolean; explanation: string; injection: string }[]>([])
  const [bilingualLearn, setBilingualLearn] = useState(false)

  // Get translated data based on current language
  const translatedValues = getTranslatedValues(language) as ValueItem[]

  // Update scenarios when language changes
  useEffect(() => {
    const translatedScenarios = getTranslatedValueScenarios(language)
    setShuffledScenarios(translatedScenarios)
    setTargetTotal(translatedScenarios.length)
  }, [language])

  const handleValueSelection = (index: number) => {
    setSelectedValue(index)
  }

  const startPractice = () => {
    const translatedScenarios = getTranslatedValueScenarios(language)
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
      const selectedLabel = shuffledScenarios[currentScenario].options[selectedAnswer].value
      const correctLabel = shuffledScenarios[currentScenario].options[shuffledScenarios[currentScenario].correctAnswer].value
      setUserAnswers([
        ...userAnswers,
        {
          title: shuffledScenarios[currentScenario].title,
          selectedLabel,
          correctLabel,
          wasCorrect: isCorrect,
          explanation: shuffledScenarios[currentScenario].explanation,
          injection: shuffledScenarios[currentScenario].injection,
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
    if (currentScenario < shuffledScenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
    }
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const resetTraining = () => {
    const translatedScenarios = getTranslatedValueScenarios(language)
    setShuffledScenarios(shuffleArray(translatedScenarios))
    setPhase('learn')
    setSelectedValue(null)
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
  }, [phase, showFeedback, selectedAnswer, currentScenario, shuffledScenarios, handleNext, handleSubmit])

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
                  {t('home.values.title')}
                </span>
                <br />
                <span className="text-white">{t('home.subtitle')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light max-w-4xl">
                {t('home.values.description')}
              </p>
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-6 mb-12 backdrop-blur-sm flex items-center justify-between">
                <p className="text-red-200 font-medium text-lg">💡 {t('values.hint')}</p>
                <button onClick={() => setBilingualLearn(!bilingualLearn)} className="px-3 py-1 text-xs rounded-md border border-red-500/40 text-red-200 hover:bg-red-500/10">
                  {bilingualLearn ? (language === 'de' ? 'Bilingual aus' : 'Bilingual off') : (language === 'de' ? 'Bilingual an' : 'Bilingual on')}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {translatedValues.map((value, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-red-500/20 hover:-translate-y-1 border border-gray-100`}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-2">{value.name}</h3>
                      {bilingualLearn && (
                        <div className="text-sm text-gray-500">{language === 'de' ? (getTranslatedValues('en')[index]?.name || '') : (getTranslatedValues('de')[index]?.name || '')}</div>
                      )}
                      <p className="text-gray-700 text-lg leading-relaxed font-light">{value.description}</p>
                    </div>
                    <div className="text-4xl bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-lg">{value.emoji ?? '💎'}</div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {value.keywords.map((keyword, i) => (
                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-gray-900 to-black text-white rounded-full text-sm font-medium border border-gray-700">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl p-6 border border-gray-700">
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">{t('values.label.examples')}</div>
                      {Array.isArray(value.quotes) && value.quotes.length ? (
                        <ul className="text-gray-300 space-y-1">
                          {value.quotes.map((q, i) => (
                            <li key={i} className="text-sm">• {q}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white italic font-medium text-lg">{value.quote}</p>
                      )}
                    </div>
                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-red-500/30">
                      <div className="text-xs uppercase tracking-wider text-red-700 mb-2">{t('values.label.injection')}</div>
                      {Array.isArray(value.injections) && value.injections.length ? (
                        <ul className="text-red-700 space-y-1">
                          {value.injections.map((inj, i) => (
                            <li key={i} className="text-sm">• {inj}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-red-600 font-medium leading-relaxed">{value.injection}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 text-right">
                    <button onClick={() => handleValueSelection(index)} className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 font-semibold shadow">
                      {language === 'de' ? 'Diesen Wert üben' : 'Practice this value'}
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
                {language === 'de' ? 'Werte-Profiling üben →' : 'Practice Values Profiling →'}
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
                {t('home.values.title')}
              </span>
              <br />
              <span className="text-white">{t('home.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {t('home.values.description')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {!isComplete ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {`${t('training.scenario')} ${currentScenario + 1} ${t('progress.of')} ${shuffledScenarios.length}`}
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
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700">
                      {shuffledScenarios[currentScenario].description}
                    </p>
                  </div>
                  <p className="text-lg text-gray-800 mb-6">
                    {language === 'de' ? 'Welcher Kernwert steht hinter diesem Verhalten?' : 'Which core value is showing?'}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {shuffledScenarios[currentScenario].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showFeedback}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all text-gray-900 ${
                        selectedAnswer === index
                          ? showFeedback
                            ? index === shuffledScenarios[currentScenario].correctAnswer
                              ? 'border-green-500 bg-green-50 text-green-800'
                              : 'border-red-500 bg-red-50 text-red-800'
                            : 'border-red-500 bg-red-50'
                          : showFeedback && index === shuffledScenarios[currentScenario].correctAnswer
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-semibold mb-1">{option.value}</div>
                      <div className="text-sm text-gray-600">{option.reason}</div>
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
                      <h4 className="font-black text-red-700 mb-2">{t('values.label.injection') + ':'}</h4>
                      <p className="text-red-600 italic font-medium leading-relaxed">
                        {shuffledScenarios[currentScenario].injection}
                      </p>
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
                  {language === 'de' ? `Du hast ${score} von ${shuffledScenarios.length} Szenarien richtig erkannt.` : `You correctly identified ${score} out of ${shuffledScenarios.length} scenarios.`}
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
                        <div className="text-xs text-red-700 mt-1">{t('values.label.injection')}: {ua.injection}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={() => {
                        const text = userAnswers.map((ua, i) => `${i + 1}. ${ua.title}\n${language === 'de' ? 'Deine Antwort' : 'Your answer'}: ${ua.selectedLabel}\n${language === 'de' ? 'Korrekte Antwort' : 'Correct answer'}: ${ua.correctLabel}\n${language === 'de' ? 'Erklärung' : 'Explanation'}: ${ua.explanation}\n${t('values.label.injection')}: ${ua.injection}`).join('\n\n')
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
                    <li className="font-medium">• {language === 'de' ? 'Werte entstehen aus Kindheitserfahrungen' : 'Values arise from childhood experiences'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Verhalten zeigt die dahinterliegenden Werte' : 'Behavior shows underlying values'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Linguistische Injektionen sprechen Werte direkt an' : 'Linguistic injections directly address values'}</li>
                    <li className="font-medium">• {language === 'de' ? 'Menschen reagieren auf ihre Werte, nicht auf Druck' : 'People respond to their values, not pressure'}</li>
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