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
    <div className={`min-h-screen py-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-brown mb-6">
            {t('artGallery')}
          </h1>
          <p className={`text-lg text-gray-700 max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('galleryDescription')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className={`flex space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg capitalize transition-colors ${
                  filter === category
                    ? 'bg-deep-brown text-white'
                    : 'bg-white text-deep-brown hover:bg-gray-100'
                }`}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Paintings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaintings.map((painting) => (
            <PaintingCard key={painting.id} painting={painting} />
          ))}
        </div>

        {filteredPaintings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              {t('noPaintingsFound')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 