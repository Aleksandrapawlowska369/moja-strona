import { WebinarHero } from '@/components/webinar/WebinarHero';
import { WebinarTension } from '@/components/webinar/WebinarTension';

export const metadata = {
  title: 'Webinar - Przeistoczenie',
};

export default function WebinarPage() {
  return (
    <main className="min-h-screen bg-background">
      <WebinarHero />
      <WebinarTension />
    </main>
  );
}
