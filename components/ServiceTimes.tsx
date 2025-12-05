'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultLocale } from '@/i18n/request';

export default function ServiceTimes() {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    {
      key: 'sunday',
      time: t('sundayTime'),
      desc: t('sundayDesc'),
    },
    {
      key: 'prayer',
      time: t('prayerTime'),
      desc: t('prayerDesc'),
    },
    {
      key: 'bible',
      time: t('bibleTime'),
      desc: t('bibleDesc'),
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6"
        >
          <h2 className="heading-secondary text-center mb-8 sm:mb-10 md:mb-12">
            {t('title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-gold-50 to-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gold-600 mb-2">
                  {t(service.key)}
                </h3>
                <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {service.time}
                </p>
                <p className="text-sm sm:text-base text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link 
              href={locale === defaultLocale ? '/services-sermons' : `/${locale}/services-sermons`}
              prefetch={true}
              className="btn-primary"
            >
              {t('title')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

