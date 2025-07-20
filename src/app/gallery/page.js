'use client'
import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import PaintingCard from '../../components/PaintingCard'
import paintingsData from '../../data/paintings.json'

export default function Gallery() {
  const { t, isRTL } = useLanguage()
  const [filter, setFilter] = useState('all')
  
  const categories = ['all', 'portraits', 'landscapes']
  
  const filteredPaintings = filter === 'all' 
    ? paintingsData.paintings 
    : paintingsData.paintings.filter(painting => painting.category === filter)

  return (
    <div className={`min-h-screen py-20 ${isRTL ? 'rtl' : 'ltr'} bg-canvas-white/80`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-serif-art font-bold text-deep-brown mb-4 relative inline-block">
            <span className="relative z-10">{t('artGallery')}</span>
            <span className="art-underline absolute left-0 right-0 bottom-0 w-full h-3" />
          </h1>
          <div className="art-divider" />
          <p className={`text-xl text-soft-brown max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('galleryDescription')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-14">
          <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-7 py-2 rounded-full capitalize font-serif-art text-lg shadow-sm border border-art-gold/30 transition-all duration-200 tracking-wide
                  ${filter === category
                    ? 'bg-art-gold text-deep-brown shadow-md scale-105'
                    : 'bg-white text-art-gold hover:bg-art-gold/20 hover:text-deep-brown'}
                `}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Paintings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPaintings.map((painting) => (
            <PaintingCard key={painting.id} painting={painting} />
          ))}
        </div>

        {filteredPaintings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-soft-brown font-serif-art">
              {t('noPaintingsFound')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 