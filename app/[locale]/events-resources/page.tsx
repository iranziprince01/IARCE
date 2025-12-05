import { Metadata } from 'next';
import EventsResourcesContent from '@/components/EventsResourcesContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Events and Resources | International Anglican Revival Ministries',
    description:
      'Stay connected with upcoming events, activities, and helpful resources at International Anglican Revival Ministries.',
  };
}

export default function EventsResourcesPage() {
  return <EventsResourcesContent />;
}

