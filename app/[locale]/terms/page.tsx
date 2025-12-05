import { Metadata } from 'next';
import TermsContent from '@/components/TermsContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title:
      'Terms & Conditions | International Anglican Revival Ministries',
    description:
      'Terms and Conditions for International Anglican Revival Ministries. Read our terms of use and service agreement.',
    openGraph: {
      title:
        'Terms & Conditions | International Anglican Revival Ministries',
      description:
        'Terms and Conditions for International Anglican Revival Ministries.',
      type: 'website',
    },
  };
}

export default function TermsPage() {
  return <TermsContent />;
}

