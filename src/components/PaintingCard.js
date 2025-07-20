'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function PaintingCard({ painting }) {
  return (
    <Link href={`/gallery/${painting.id}`}>
      <div className="bg-white rounded-lg card-shadow overflow-hidden cursor-pointer group">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={painting.image}
            alt={painting.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-deep-brown mb-2">
            {painting.title}
          </h3>
          <p className="text-sm text-soft-brown mb-1">
            {painting.medium}
          </p>
          <p className="text-sm text-soft-brown">
            {painting.year}
          </p>
        </div>
      </div>
    </Link>
  )
} 