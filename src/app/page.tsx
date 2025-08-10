'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex justify-center">
            <Link href="/triangle" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition-colors">
              <span>⭐</span>
              <span>{t('triangle.title')}</span>
            </Link>
          </div>
        </div>
        <div className="text-center mb-20">
          <h1 className="text-7xl font-black text-white mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {t('home.title')}
            </span>
            <br />
            <span className="text-white">{t('home.subtitle')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t('home.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <Link href="/needs" className="group">
            <div className="bg-white rounded-2xl shadow-2xl p-10 hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-6 text-center tracking-tight">{t('home.needs.title')}</h2>
              <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
                {t('home.needs.description')}
              </p>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl group-hover:from-red-600 group-hover:to-red-700 transition-all font-semibold text-lg shadow-lg">
                  {t('home.cta')}
                </span>
              </div>
            </div>
          </Link>

          <Link href="/decisions" className="group">
            <div className="bg-white rounded-2xl shadow-2xl p-10 hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <span className="text-3xl">⚖️</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-6 text-center tracking-tight">{t('home.decisions.title')}</h2>
              <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
                {t('home.decisions.description')}
              </p>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-gray-800 to-black text-white px-8 py-4 rounded-xl group-hover:from-black group-hover:to-gray-900 transition-all font-semibold text-lg shadow-lg">
                  {t('home.cta')}
                </span>
              </div>
            </div>
          </Link>

          <Link href="/values" className="group">
            <div className="bg-white rounded-2xl shadow-2xl p-10 hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <span className="text-3xl">💎</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-6 text-center tracking-tight">{t('home.values.title')}</h2>
              <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
                {t('home.values.description')}
              </p>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-xl group-hover:from-red-700 group-hover:to-red-900 transition-all font-semibold text-lg shadow-lg">
                  {t('home.cta')}
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">
              {t('home.section.title').split(' ')[0]} <span className="text-red-600">{t('home.section.title').split(' ')[1]}</span>
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed font-light">
              {t('home.section.description')}
            </p>
            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                {t('home.feature.scenarios')}
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
                {t('home.feature.content')}
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                {t('home.feature.applicable')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
