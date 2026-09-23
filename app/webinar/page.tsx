import { WebinarHero } from '@/components/webinar/WebinarHero';
import { WebinarRecognition } from '@/components/webinar/WebinarRecognition';
import { WebinarRegistration } from '@/components/webinar/WebinarRegistration';
import { WebinarTension } from '@/components/webinar/WebinarTension';
import { WebinarExperience } from '@/components/webinar/WebinarExperience';
import { WebinarCommitment } from '@/components/webinar/WebinarCommitment';
import { WebinarAbout } from '@/components/webinar/WebinarAbout';
import { WebinarFinalInvitation } from '@/components/webinar/WebinarFinalInvitation';
import { WebinarFaq } from '@/components/webinar/WebinarFaq';
import { WebinarFooter } from '@/components/webinar/WebinarFooter';

export const metadata = {
  title: 'Webinar - Przeistoczenie',
};

export default function WebinarPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <WebinarHero />
      <WebinarRecognition />
      <WebinarRegistration />
      <WebinarTension />
      <WebinarExperience />
      <WebinarCommitment />
      <WebinarAbout />
      <WebinarFinalInvitation />
      <WebinarFaq />
      <WebinarFooter />
    </main>
  );
}
