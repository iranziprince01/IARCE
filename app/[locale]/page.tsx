import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import WelcomeMessage from '@/components/WelcomeMessage';
import AboutPreview from '@/components/AboutPreview';
import MinistriesPreview from '@/components/MinistriesPreview';
import ServiceTimes from '@/components/ServiceTimes';
import CallToAction from '@/components/CallToAction';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  const canonicalUrl = locale === 'en' ? 'https://iarce.org' : `https://iarce.org/${locale}`;
  const ogImage = 'https://iarce.org/og-image.jpg';

  return {
    metadataBase: new URL('https://iarce.org'),
    title: {
      default: 'International Anglican Revival Ministries | IARCE',
      template: '%s | International Anglican Revival Ministries',
    },
    description:
      'A vibrant Christian community in Edmonton, Alberta, dedicated to spiritual growth, compassion, and service. Multilingual worship services in English and Kinyarwanda. Join us for Sunday worship, community outreach, and refugee support programs.',
    keywords: [
      'Anglican church Edmonton',
      'International Anglican Revival Ministries',
      'IARCE',
      'Pentecostal Anglican church',
      'Multilingual church Edmonton',
      'African churches in Edmonton',
      'Refugee support ministry Canada',
      'Edmonton Christian community',
      'Worship services Edmonton',
      'Church in Edmonton Alberta',
      'Anglican church Canada',
      'Christian church Edmonton',
      'Edmonton worship',
      'Church services Edmonton',
      'Community church Edmonton',
      'Multicultural church Edmonton',
      'Kinyarwanda church Edmonton',
      'Rwandan church Canada',
      'East African church Edmonton',
      '6110 Fulton Road Edmonton',
      'Edmonton church services',
      'Anglican Pentecostal church',
      'Edmonton religious community',
      'Christian ministry Edmonton',
      'Sunday worship Edmonton',
      'Bible study Edmonton',
      'Prayer ministry Edmonton',
      'Youth ministry Edmonton',
      'Refugee ministry Edmonton',
    ],
    authors: [{ name: 'International Anglican Revival Ministries' }],
    creator: 'International Anglican Revival Ministries',
    publisher: 'International Anglican Revival Ministries',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: 'International Anglican Revival Ministries | IARCE',
      description:
        'A vibrant Christian community in Edmonton, Alberta, dedicated to spiritual growth, compassion, and service. Multilingual worship services in English and Kinyarwanda. Join us for Sunday worship, community outreach, and refugee support programs.',
      url: canonicalUrl,
      siteName: 'International Anglican Revival Ministries',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'International Anglican Revival Ministries - A vibrant Christian community in Edmonton',
        },
      ],
      locale: locale === 'en' ? 'en_CA' : locale,
      type: 'website',
      countryName: 'Canada',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'International Anglican Revival Ministries | IARCE',
      description:
        'A vibrant Christian community in Edmonton, Alberta, dedicated to spiritual growth, compassion, and service. Multilingual worship services in English and Kinyarwanda.',
      images: [ogImage],
      site: '@iarministries',
      creator: '@iarministries',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-CA': 'https://iarce.org',
        'en': 'https://iarce.org/en',
        'rw': 'https://iarce.org/rw',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification when available
      // google: 'your-google-verification-code',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeMessage />
      <AboutPreview />
      <MinistriesPreview />
      <ServiceTimes />
      <CallToAction />
      {/* Additional Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'International Anglican Revival Ministries',
            alternateName: 'IARCE',
            url: 'https://iarce.org',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://iarce.org/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  );
}

