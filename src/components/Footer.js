'use client'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t, isRTL } = useLanguage()
  
  return (
    <footer className={`bg-deep-brown text-white py-8 mt-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            {t('artistName')}
          </p>
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} {t('copyright')}
          </p>
          <p className="text-sm opacity-75 mt-2">
            {t('inquiriesText')}
          </p>
        </div>
      </div>
    </footer>
  )
} 