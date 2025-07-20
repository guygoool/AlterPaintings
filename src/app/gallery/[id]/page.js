'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../../contexts/LanguageContext'
import paintingsData from '../../../data/paintings.json'

export default function PaintingDetail({ params }) {
  const { t, isRTL } = useLanguage()
  const painting = paintingsData.paintings.find(p => p.id === parseInt(params.id))

  if (!painting) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-deep-brown mb-4">{t('paintingNotFound')}</h1>
          <Link href="/gallery" className="btn-primary">
            {t('backToGallery')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen py-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/gallery" className="text-deep-brown hover:text-art-gold transition-colors">
            {t('backToGallery')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image with natural aspect ratio */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-lg overflow-hidden card-shadow max-w-full max-h-[600px]">
              <Image
                src={painting.image}
                alt={painting.title}
                width={600}
                height={800}
                className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-deep-brown mb-4">
                {painting.title}
              </h1>
              <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {painting.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={`font-semibold text-deep-brown w-24 ${isRTL ? 'text-right' : ''}`}>{t('medium')}:</span>
                <span className="text-gray-700">{painting.medium}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={`font-semibold text-deep-brown w-24 ${isRTL ? 'text-right' : ''}`}>{t('size')}:</span>
                <span className="text-gray-700">{painting.dimensions}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={`font-semibold text-deep-brown w-24 ${isRTL ? 'text-right' : ''}`}>{t('year')}:</span>
                <span className="text-gray-700">{painting.year}</span>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-600 mb-4">
                {t('interestedText')}
              </p>
              <Link href="/contact" className="btn-primary">
                {t('contactArtist')}
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation to other paintings */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-deep-brown mb-8 text-center">
            {t('morePaintings')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paintingsData.paintings
              .filter(p => p.id !== painting.id)
              .slice(0, 3)
              .map((otherPainting) => (
                <Link key={otherPainting.id} href={`/gallery/${otherPainting.id}`}>
                  <div className="relative h-48 rounded-lg overflow-hidden card-shadow cursor-pointer group">
                    <Image
                      src={otherPainting.image}
                      alt={otherPainting.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h4 className="text-white font-semibold">{otherPainting.title}</h4>
                      <p className="text-gray-300 text-sm">{otherPainting.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
} 