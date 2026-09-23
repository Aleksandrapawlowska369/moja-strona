import { WebinarHero } from '@/components/webinar/WebinarHero';

export const metadata = {
  title: 'Webinar - Przeistoczenie',
};

export default function WebinarPage() {
  return (
    <main className="min-h-screen bg-background">
      <WebinarHero />
    </main>
  );
}
