'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center ${isRTL ? 'ml-4' : 'mr-4'}`}> 
            <Link href="/" className="text-2xl font-bold text-deep-brown">
              {t('artistName')}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center ${isRTL ? 'flex-row-reverse gap-8' : 'gap-8'}`}
            style={isRTL ? { direction: 'rtl' } : {}}
          >
            <Link href="/" className="text-deep-brown hover:text-art-gold transition-colors">
              {t('home')}
            </Link>
            <Link href="/gallery" className="text-deep-brown hover:text-art-gold transition-colors">
              {t('gallery')}
            </Link>
            <Link href="/about" className="text-deep-brown hover:text-art-gold transition-colors">
              {t('about')}
            </Link>
            <Link href="/contact" className="text-deep-brown hover:text-art-gold transition-colors">
              {t('contact')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center ${isRTL ? 'flex-row-reverse gap-2' : 'gap-2'}`}>
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deep-brown hover:text-art-gold"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isRTL ? 'text-right' : ''}`}
              style={isRTL ? { direction: 'rtl' } : {}}
            >
              <Link href="/" className="block px-3 py-2 text-deep-brown hover:text-art-gold">
                {t('home')}
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-deep-brown hover:text-art-gold">
                {t('gallery')}
              </Link>
              <Link href="/about" className="block px-3 py-2 text-deep-brown hover:text-art-gold">
                {t('about')}
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-deep-brown hover:text-art-gold">
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 