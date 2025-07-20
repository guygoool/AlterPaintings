'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function PaintingCard({ painting }) {
  return (
    <Link href={`/gallery/${painting.id}`}>
      <div className="bg-white/90 rounded-2xl card-shadow overflow-hidden cursor-pointer group border-2 border-art-gold/20 hover:border-art-gold transition-all duration-300">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={painting.image}
            alt={painting.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={painting.id === 1}
          />
        </div>
        <div className="p-6 flex flex-col gap-1">
          <h3 className="text-2xl font-serif-art font-bold text-deep-brown mb-1 group-hover:text-art-gold transition-colors duration-200">
            {painting.title}
          </h3>
          <p className="text-base text-soft-brown italic mb-1">
            {painting.medium} <span className="mx-2">·</span> {painting.year}
          </p>
          <p className="text-sm text-deep-brown/70 mb-1">
            {painting.dimensions}
          </p>
          <p className="text-sm text-deep-brown/60 line-clamp-2">
            {painting.description}
          </p>
        </div>
      </div>
    </Link>
  )
} 