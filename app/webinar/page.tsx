import { WebinarHero } from '@/components/webinar/WebinarHero';
import { WebinarRecognition } from '@/components/webinar/WebinarRecognition';
import { WebinarRegistration } from '@/components/webinar/WebinarRegistration';
import { WebinarTension } from '@/components/webinar/WebinarTension';

export const metadata = {
  title: 'Webinar - Przeistoczenie',
};

export default function WebinarPage() {
  return (
    <main className="min-h-screen bg-background">
      <WebinarHero />
      <WebinarRecognition />
      <WebinarRegistration />
      <WebinarTension />
    </main>
  );
}
