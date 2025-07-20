'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import paintingsData from '../data/paintings.json'

export default function Home() {
  const { t, isRTL } = useLanguage()
  const featuredPaintings = paintingsData.paintings.slice(0, 3)

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-deep-brown to-soft-brown">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {t('artistName')}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              1927 - 1989
            </p>
            <Link href="/gallery" className="btn-primary text-lg">
              {t('viewGallery')}
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-deep-brown mb-6">
            {t('welcomeTitle')}
          </h2>
          <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('welcomeText')}
          </p>
        </div>
      </section>

      {/* Featured Paintings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-brown mb-12">
            {t('featuredWorks')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPaintings.map((painting) => (
              <div key={painting.id} className="text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden card-shadow">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-deep-brown mb-2">
                  {painting.title}
                </h3>
                <p className="text-gray-600">
                  {painting.medium} • {painting.year}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary">
              {t('viewAllPaintings')}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-art-gold to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('commissionTitle')}
          </h2>
          <p className="text-xl text-white mb-8">
            {t('commissionText')}
          </p>
          <Link href="/contact" className="bg-white text-deep-brown px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('getInTouch')}
          </Link>
        </div>
      </section>
    </div>
  )
} 