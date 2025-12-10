import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const canonicalUrl = locale === 'en' ? 'https://iarce.org/services' : `https://iarce.org/${locale}/services`;
  
  return {
    metadataBase: new URL('https://iarce.org'),
    title: 'Services | International Anglican Revival Ministries',
    description:
      'Join us for worship services, prayer meetings, and Bible study at International Anglican Revival Ministries. Sunday services at 10:00 AM, Wednesday and Thursday evening services.',
    keywords: [
      'Church services Edmonton',
      'Worship services Edmonton',
      'Sunday service Edmonton',
      'Prayer meeting Edmonton',
      'Bible study Edmonton',
      'Church service times',
      'Anglican services Edmonton',
    ],
    openGraph: {
      title: 'Services | International Anglican Revival Ministries',
      description:
        'Join us for worship services, prayer meetings, and Bible study. Sunday services at 10:00 AM.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : locale,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
