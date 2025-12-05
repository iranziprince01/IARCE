import { Metadata } from 'next';
import MinistriesContent from '@/components/MinistriesContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Our Ministries | International Anglican Revival Ministries',
    description:
      'Explore our ministries at International Anglican Revival Ministries including Worship & Music, Youth, Children, Women, Men, and Missions & Outreach programs.',
  };
}

export default function MinistriesPage() {
  return <MinistriesContent />;
}

