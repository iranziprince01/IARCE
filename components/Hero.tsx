'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BibleVerse from './BibleVerse';
import { defaultLocale } from '@/i18n/request';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Worship and Praise"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-gold-600/70"></div>
      </div>
      
      <div className="container-custom relative z-10 w-full px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full flex flex-col justify-center space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-none px-2 drop-shadow-2xl"
          >
            {(() => {
              const title = t('title');
              // Split "Welcome to International Anglican Revival Ministries" into 3 lines
              if (title.includes('Welcome to International Anglican Revival Ministries')) {
                return (
                  <>
                    Welcome to<br />International Anglican<br />Revival Ministries
                  </>
                );
              }
              // Handle Kinyarwanda version
              if (title.includes('International Anglican')) {
                const parts = title.split('International Anglican');
                return (
                  <>
                    {parts[0]}International Anglican<br />Revival Ministries
                  </>
                );
              }
              return title;
            })()}
          </motion.h1>
          
          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <a 
              href="https://www.youtube.com/@InternationalAnglicanRevivalMi"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-xl hover:shadow-gold-500/50 transform hover:-translate-y-1 text-sm sm:text-base md:text-lg"
            >
              {t('worshipWithUs')}
            </a>
            <Link
              href={locale === defaultLocale ? '/donate' : `/${locale}/donate`}
              prefetch={true}
              className="group w-full sm:w-auto px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white font-semibold rounded-lg border-2 border-white/40 hover:border-white/60 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base md:text-lg"
            >
              {t('donate')}
            </Link>
          </motion.div>
          
          {/* Bible Verse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto"
          >
            <div className="bg-white/15 backdrop-blur-lg rounded-xl p-4 sm:p-5 md:p-6 border border-white/30 shadow-xl">
              <p className="text-sm sm:text-base md:text-lg text-white italic text-center leading-tight px-2 drop-shadow-md line-clamp-2">
                &ldquo;{t('bibleVerse')}&rdquo; <span className="text-gold-200 not-italic font-semibold">{t('bibleVerseRef')}</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

