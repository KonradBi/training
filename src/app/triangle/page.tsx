'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SuccessTrianglePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">{t('triangle.title')}</span>
          </h1>
          <Link href="/" className="text-sm text-white/70 hover:text-white">← Home</Link>
        </div>
        <p className="text-gray-300 mb-12">{t('triangle.subtitle')}</p>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-3xl aspect-square">
            <div className="absolute -inset-6 bg-red-600/10 blur-3xl rounded-full" aria-hidden="true"></div>
            <svg viewBox="0 0 100 100" className="relative w-full h-full drop-shadow-[0_10px_30px_rgba(239,68,68,0.35)]">
              <defs>
                <linearGradient id="tri" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ef4444"/>
                  <stop offset="100%" stopColor="#7f1d1d"/>
                </linearGradient>
              </defs>
              <polygon points="50,6 94,92 6,92" fill="url(#tri)" fillOpacity="0.08" stroke="#ef4444" strokeOpacity="0.8" strokeWidth="1.2" />

              <g>
                <circle cx="50" cy="8" r="2.6" className="fill-red-500" />
                <text x="50" y="3.6" textAnchor="middle" className="fill-white text-[3px] select-none">{t('triangle.tab.selfmastery')}</text>
              </g>
              <g>
                <circle cx="92" cy="90" r="2.6" className="fill-red-500" />
                <text x="92" y="95.2" textAnchor="end" className="fill-white text-[3px] select-none">{t('triangle.tab.communication')}</text>
              </g>
              <g>
                <circle cx="8" cy="90" r="2.6" className="fill-red-500" />
                <text x="8" y="95.2" textAnchor="start" className="fill-white text-[3px] select-none">{t('triangle.tab.observation')}</text>
              </g>
            </svg>
          </div>

          <div className="mt-10 grid gap-6 w-full md:grid-cols-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-black text-white mb-2">{t('triangle.tab.selfmastery')}</h2>
              <p className="text-gray-200">{t('triangle.selfmastery.text1')}</p>
              <p className="text-gray-300 mt-2">{t('triangle.selfmastery.text2')}</p>
              <p className="text-gray-300 mt-2">{t('triangle.selfmastery.text3')}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-black text-white mb-2">{t('triangle.tab.communication')}</h2>
              <p className="text-gray-200">{t('triangle.communication.text1')}</p>
              <p className="text-gray-200 italic mt-2">“{t('triangle.communication.quote')}”</p>
              <p className="text-gray-300 mt-2">{t('triangle.communication.text3')}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-black text-white mb-2">{t('triangle.tab.observation')}</h2>
              <p className="text-gray-200">{t('triangle.observation.text1')}</p>
              <p className="text-gray-300 mt-2">{t('triangle.observation.text2')}</p>
              <p className="text-gray-300 mt-2">{t('triangle.observation.text3')}</p>
              <p className="text-gray-300 mt-2">{t('triangle.observation.text4')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


