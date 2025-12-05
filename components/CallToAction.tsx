'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultLocale } from '@/i18n/request';

export default function CallToAction() {
  const t = useTranslations('cta');
  const tHome = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-500 to-gold-500 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto px-4 sm:px-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-5 sm:mb-6 md:mb-8 text-gold-100 px-2">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href={locale === defaultLocale ? '/contact' : `/${locale}/contact`}
              prefetch={true}
              className="bg-white text-gold-600 hover:bg-gold-50 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              {t('visit')}
            </Link>
            <Link
              href={locale === defaultLocale ? '/contact#donate' : `/${locale}/contact#donate`}
              prefetch={true}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold-600 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base"
            >
              {tHome('donate')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

