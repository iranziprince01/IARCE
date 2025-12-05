import { Metadata } from 'next';
import DonateContent from '@/components/DonateContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Donate | International Anglican Revival Ministries',
    description:
      'Support the ministry of International Anglican Revival Ministries through your generous giving. Every contribution makes a difference.',
  };
}

export default function DonatePage() {
  return <DonateContent />;
}

