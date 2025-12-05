'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MusicalNoteIcon,
  UserGroupIcon,
  UserIcon,
  HeartIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { defaultLocale } from '@/i18n/request';

export default function MinistriesPreview() {
  const t = useTranslations('ministries');
  const locale = useLocale();

  const ministries = [
    { key: 'worship', Icon: MusicalNoteIcon },
    { key: 'youth', Icon: UserGroupIcon },
    { key: 'children', Icon: UserIcon },
    { key: 'women', Icon: HeartIcon },
    { key: 'men', Icon: BriefcaseIcon },
    { key: 'missions', Icon: GlobeAltIcon },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gold-50 via-white to-gold-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
        >
          <h2 className="heading-secondary">{t('title')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">
                <ministry.Icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {t(`${ministry.key}`)}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {t(`${ministry.key}Desc`)}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center px-4 sm:px-6">
          <Link 
            href={locale === defaultLocale ? '/ministries' : `/${locale}/ministries`}
            prefetch={true}
            className="btn-primary"
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}

