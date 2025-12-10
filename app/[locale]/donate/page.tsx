import { Metadata } from 'next';
import DonateContent from '@/components/DonateContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://iarce.org/donate' : `https://iarce.org/${locale}/donate`;
  
  return {
    metadataBase: new URL('https://iarce.org'),
    title: 'Donate | International Anglican Revival Ministries',
    description:
      'Support the ministry of International Anglican Revival Ministries through your generous giving. Every contribution makes a difference in our community outreach, refugee support, and spiritual growth programs.',
    keywords: [
      'Donate to church Edmonton',
      'Church donations Edmonton',
      'Support ministry Edmonton',
      'Church giving Edmonton',
      'Online donations church',
      'Tithe church Edmonton',
      'Church offering Edmonton',
    ],
    openGraph: {
      title: 'Donate | International Anglican Revival Ministries',
      description:
        'Support the ministry of International Anglican Revival Ministries through your generous giving. Every contribution makes a difference.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function DonatePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const canonicalUrl = locale === 'en' ? 'https://iarce.org/donate' : `https://iarce.org/${locale}/donate`;
  
  return (
    <>
      <DonateContent />
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
                name: 'Donate',
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />
    </>
  );
}

