'use client'
import Image from 'next/image'
import { useLanguage } from '../../contexts/LanguageContext'

export default function About() {
  const { t, isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen py-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-brown mb-6">
            {t('aboutArtist')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Artist Photo */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden card-shadow">
              <div className="bg-gradient-to-br from-art-gold to-deep-brown w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-lg">{t('artistPhoto')}</p>
                  <p className="text-sm opacity-75">{t('comingSoon')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-deep-brown mb-4">
                {t('lifetimePassion')}
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('aboutText1')}
              </p>
              <p className={`text-lg text-gray-700 leading-relaxed mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('aboutText2')}
              </p>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('aboutText3')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-deep-brown mb-3">
                {t('artisticPhilosophy')}
              </h3>
              <p className={`text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                "{t('philosophyQuote')}"
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-deep-brown mb-3">
                {t('artisticJourney')}
              </h3>
              <ul className={`space-y-2 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                <li>• <strong>{isRTL ? 'השנים המוקדמות:' : 'Early Years:'}</strong> {t('earlyYears').replace('Early Years: ', '')}</li>
                <li>• <strong>{isRTL ? 'פיתוח מקצועי:' : 'Professional Development:'}</strong> {t('professionalDev').replace('Professional Development: ', '')}</li>
                <li>• <strong>{isRTL ? 'תקופת המאסטר:' : 'Master Period:'}</strong> {t('masterPeriod').replace('Master Period: ', '')}</li>
                <li>• <strong>{isRTL ? 'עבודה נוכחית:' : 'Current Work:'}</strong> {t('currentWork').replace('Current Work: ', '')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg card-shadow">
            <div className="text-3xl font-bold text-deep-brown mb-2">50+</div>
            <div className="text-gray-600">{t('originalPaintings')}</div>
          </div>
          <div className="bg-white p-6 rounded-lg card-shadow">
            <div className="text-3xl font-bold text-deep-brown mb-2">40+</div>
            <div className="text-gray-600">{t('yearsExperience')}</div>
          </div>
          <div className="bg-white p-6 rounded-lg card-shadow">
            <div className="text-3xl font-bold text-deep-brown mb-2">∞</div>
            <div className="text-gray-600">{t('passionForArt')}</div>
          </div>
        </div>
      </div>
    </div>
  )
} 