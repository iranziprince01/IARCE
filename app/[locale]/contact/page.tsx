import { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://iarce.org/contact' : `https://iarce.org/${locale}/contact`;
  
  return {
    metadataBase: new URL('https://iarce.org'),
    title: 'Contact Us | International Anglican Revival Ministries',
    description:
      'Get in touch with International Anglican Revival Ministries. Visit us at 6110 Fulton Road, Edmonton, AB T6A 3T3. Phone: +1 587-778-6406 or +1 825-461-7431. Sunday services at 10:00 AM.',
    keywords: [
      'Contact church Edmonton',
      'Church address Edmonton',
      'Church phone number Edmonton',
      'Visit church Edmonton',
      'Church location Edmonton',
      'Anglican church contact',
    ],
    openGraph: {
      title: 'Contact Us | International Anglican Revival Ministries',
      description:
        'Get in touch with International Anglican Revival Ministries. Visit us at 6110 Fulton Road, Edmonton, AB T6A 3T3.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const canonicalUrl = locale === 'en' ? 'https://iarce.org/contact' : `https://iarce.org/${locale}/contact`;
  
  return (
    <>
      <ContactContent />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: locale === 'en' ? 'https://iarce.org' : `https://iarce.org/${locale}`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact Us',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Us',
            description: 'Get in touch with International Anglican Revival Ministries',
            url: canonicalUrl,
            mainEntity: {
              '@type': 'PostalAddress',
              streetAddress: '6110 Fulton Road',
              addressLocality: 'Edmonton',
              addressRegion: 'AB',
              postalCode: 'T6A 3T3',
              addressCountry: 'CA',
            },
          }),
        }}
      />
    </>
  );
}

