'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface GalleryPhoto {
  src: string;
  caption: string;
  span?: 'wide' | 'tall' | 'normal';
}

const PHOTOS: GalleryPhoto[] = [
  {
    src: '/images/gallery/gallery-01-orange-howo-factory.jpg',
    caption: 'Industrial Facility Delivery — Heavy Haulage Semi-Trailer',
    span: 'tall',
  },
  {
    src: '/images/gallery/gallery-02-iveco-insulated-cargo.jpg',
    caption: 'Over-height & Out-of-Gauge Cargo Transport',
    span: 'wide',
  },
  {
    src: '/images/gallery/gallery-03-green-crushing-plant.jpg',
    caption: 'Heavy Machinery & Mobile Screening Plant',
    span: 'wide',
  },
  {
    src: '/images/gallery/gallery-04-iveco-wheel-loader.jpg',
    caption: 'Earthmoving Fleet Mobilization — Double Plant Lowbed',
    span: 'normal',
  },
  {
    src: '/images/gallery/gallery-05-yellow-crane-transport.jpg',
    caption: 'Mobile Hydraulic Crane — Specialized Haulage',
    span: 'wide',
  },
  {
    src: '/images/gallery/gallery-06-convoy-mountain-route.jpg',
    caption: 'Fleet Dispatch & Mountain Corridor Transit',
    span: 'wide',
  },
  {
    src: '/images/gallery/gallery-07-vessel-port-transit.jpg',
    caption: 'Freight Forwarding — Port & Project Cargo Operations',
    span: 'tall',
  },
];

export const GallerySection: React.FC = () => {
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  return (
    <section className="bg-neutral-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              Operations Gallery
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-white">
            SAT in Action.
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Real operations — freight forwarding, special cargo, fleet dispatch across the Horn of Africa.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer bg-neutral-900"
              onClick={() => setLightbox(photo)}
            >
              <div className={`relative w-full overflow-hidden ${photo.span === 'wide' ? 'aspect-video' : photo.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Caption strip (only visible on hover) */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-mono leading-snug">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={lightbox.src}
                  alt={lightbox.caption}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-black/75 backdrop-blur-sm px-6 py-4">
                <p className="text-white text-sm font-mono">{lightbox.caption}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-black/60 hover:bg-[#841618] text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
