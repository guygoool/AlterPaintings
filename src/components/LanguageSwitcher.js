'use client'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, switchLanguage, t } = useLanguage()

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => switchLanguage(e.target.value)}
        className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm text-deep-brown focus:ring-2 focus:ring-deep-brown focus:border-transparent cursor-pointer"
      >
        <option value="en">{t('english')}</option>
        <option value="he">{t('hebrew')}</option>
      </select>
    </div>
  )
} 