'use client'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t, isRTL } = useLanguage()
  
  return (
    <footer className={`bg-white/80 border-t border-art-gold/20 text-deep-brown py-12 mt-24 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="art-divider" />
          <p className="text-2xl font-serif-art font-bold mb-2 tracking-wide">
            {t('artistName')}
          </p>
          <p className="text-base opacity-80">
            © {new Date().getFullYear()} {t('copyright')}
          </p>
          <p className="text-base opacity-80 mt-2">
            {t('inquiriesText')}
          </p>
        </div>
      </div>
    </footer>
  )
} 