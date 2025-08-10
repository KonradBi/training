'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-6 right-6 z-50 bg-white rounded-xl shadow-lg border border-gray-200 p-2">
      <div className="flex space-x-1">
        <button
          onClick={() => setLanguage('de')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            language === 'de'
              ? 'bg-red-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            language === 'en'
              ? 'bg-red-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )
}