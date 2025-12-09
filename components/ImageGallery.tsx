'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  showTitle?: boolean;
  className?: string;
}

export default function ImageGallery({
  images,
  title,
  subtitle,
  columns = 4,
  showTitle = true,
  className = '',
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <>
      <section className={`section-padding bg-gray-100 ${className}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {showTitle && (title || subtitle) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
              >
                {title && (
                  <h2 className="heading-secondary text-gray-900 mb-3 sm:mb-4">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                    {subtitle}
                  </p>
                )}
              </motion.div>
            )}

            <div className={`grid ${gridCols[columns]} gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-4 sm:px-6`}>
              {images.map((image, index) => {
                // Images 007 (index 6) and 009 (index 8) need special positioning to show faces
                const imageNumber = parseInt(image.split('/').pop()?.replace('.jpg', '') || '0');
                const isPersonImage = imageNumber === 7 || imageNumber === 9;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative aspect-square rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      style={isPersonImage ? { objectPosition: 'center 30%' } : undefined}
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold-500 transition-colors text-2xl font-bold"
            >
              ×
            </button>
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                className="object-contain"
                quality={95}
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

