'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  return (
    <nav className="bg-white/80 backdrop-blur border-b border-art-gold/20 shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className={`flex justify-between items-center h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center ${isRTL ? 'ml-4' : 'mr-4'}`}> 
            <Link href="/" className="text-3xl font-serif-art font-bold text-deep-brown relative group">
              <span className="relative z-10">{t('artistName')}</span>
              <span className="art-underline absolute left-0 right-0 bottom-0 w-full h-2 group-hover:opacity-60 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center ${isRTL ? 'flex-row-reverse gap-10' : 'gap-10'}`}
            style={isRTL ? { direction: 'rtl' } : {}}
          >
            <Link href="/" className="text-lg font-serif-art text-deep-brown px-2 py-1 rounded hover:bg-art-gold/20 hover:text-art-gold transition-all duration-200">
              {t('home')}
            </Link>
            <Link href="/gallery" className="text-lg font-serif-art text-deep-brown px-2 py-1 rounded hover:bg-art-gold/20 hover:text-art-gold transition-all duration-200">
              {t('gallery')}
            </Link>
            <Link href="/about" className="text-lg font-serif-art text-deep-brown px-2 py-1 rounded hover:bg-art-gold/20 hover:text-art-gold transition-all duration-200">
              {t('about')}
            </Link>
            <Link href="/contact" className="text-lg font-serif-art text-deep-brown px-2 py-1 rounded hover:bg-art-gold/20 hover:text-art-gold transition-all duration-200">
              {t('contact')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center ${isRTL ? 'flex-row-reverse gap-2' : 'gap-2'}`}>
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deep-brown hover:text-art-gold p-2 rounded-full border border-art-gold/30 bg-white/70 shadow-sm"
              aria-label="Open menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-warm-beige/95 backdrop-blur flex flex-col items-center justify-center space-y-8 transition-all duration-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-deep-brown hover:text-art-gold p-2 rounded-full border border-art-gold/30 bg-white/70 shadow-sm"
              aria-label="Close menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/" className="text-2xl font-serif-art text-deep-brown hover:text-art-gold transition-all duration-200" onClick={() => setIsOpen(false)}>
              {t('home')}
            </Link>
            <Link href="/gallery" className="text-2xl font-serif-art text-deep-brown hover:text-art-gold transition-all duration-200" onClick={() => setIsOpen(false)}>
              {t('gallery')}
            </Link>
            <Link href="/about" className="text-2xl font-serif-art text-deep-brown hover:text-art-gold transition-all duration-200" onClick={() => setIsOpen(false)}>
              {t('about')}
            </Link>
            <Link href="/contact" className="text-2xl font-serif-art text-deep-brown hover:text-art-gold transition-all duration-200" onClick={() => setIsOpen(false)}>
              {t('contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 