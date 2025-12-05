import { Metadata } from 'next';
import BecomeMemberContent from '@/components/BecomeMemberContent';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Become a Member | Get Involved | International Anglican Revival Ministries',
    description: 'Join our church family and become an official member of International Anglican Revival Ministries.',
  };
}

export default function BecomeMemberPage() {
  return <BecomeMemberContent />;
}

