'use client'
import Image from 'next/image'
import { useLanguage } from '../../contexts/LanguageContext'

export default function About() {
  const { t, isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen py-20 ${isRTL ? 'rtl' : 'ltr'} bg-canvas-white/80`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-serif-art font-bold text-deep-brown mb-4 relative inline-block">
            <span className="relative z-10">{t('aboutArtist')}</span>
            <span className="art-underline absolute left-0 right-0 bottom-0 w-full h-3" />
          </h1>
          <div className="art-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Artist Photo */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-art-gold/30 shadow-xl">
              <div className="bg-gradient-to-br from-art-gold/80 to-deep-brown/90 w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-7xl mb-6">🎨</div>
                  <p className="text-xl font-serif-art mb-2">{t('artistPhoto')}</p>
                  <p className="text-base opacity-80 italic">{t('comingSoon')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-serif-art font-bold text-deep-brown mb-6">
                {t('lifetimePassion')}
              </h2>
              <p className={`text-lg text-soft-brown leading-relaxed mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('aboutText1')}
              </p>
              <p className={`text-lg text-soft-brown leading-relaxed mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('aboutText2')}
              </p>
              <p className={`text-lg text-soft-brown leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('aboutText3')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif-art font-bold text-deep-brown mb-4">
                {t('artisticPhilosophy')}
              </h3>
              <p className={`text-deep-brown/80 leading-relaxed italic ${isRTL ? 'text-right' : 'text-left'}`}>
                "{t('philosophyQuote')}"
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif-art font-bold text-deep-brown mb-4">
                {t('artisticJourney')}
              </h3>
              <ul className={`space-y-3 text-soft-brown ${isRTL ? 'text-right' : 'text-left'}`}>
                <li>• <strong>{isRTL ? 'השנים המוקדמות:' : 'Early Years:'}</strong> {t('earlyYears').replace('Early Years: ', '')}</li>
                <li>• <strong>{isRTL ? 'פיתוח מקצועי:' : 'Professional Development:'}</strong> {t('professionalDev').replace('Professional Development: ', '')}</li>
                <li>• <strong>{isRTL ? 'תקופת המאסטר:' : 'Master Period:'}</strong> {t('masterPeriod').replace('Master Period: ', '')}</li>
                <li>• <strong>{isRTL ? 'עבודה נוכחית:' : 'Current Work:'}</strong> {t('currentWork').replace('Current Work: ', '')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-8 rounded-lg card-shadow">
            <div className="text-3xl font-bold text-deep-brown mb-2">50+</div>
            <div className="text-soft-brown font-serif-art">{t('originalPaintings')}</div>
          </div>
          <div className="bg-white p-8 rounded-lg card-shadow">
            <div className="text-3xl font-bold text-deep-brown mb-2">40+</div>
            <div className="text-soft-brown font-serif-art">{t('yearsExperience')}</div>
          </div>
          <div className="bg-white p-8 rounded-lg card-shadow">
            <div className="text-3xl font-bold text-deep-brown mb-2">∞</div>
            <div className="text-soft-brown font-serif-art">{t('passionForArt')}</div>
          </div>
        </div>
      </div>
    </div>
  )
} 