import { Hero } from '@/components/sections/Hero';
import { Bridge } from '@/components/sections/Bridge';
import { PainPoints } from '@/components/sections/PainPoints';
import { Solution } from '@/components/sections/Solution';
import { Stages } from '@/components/sections/Stages';
import { Features } from '@/components/sections/Features';
import { Rhythm } from '@/components/sections/Rhythm';
import { Testimonials } from '@/components/sections/Testimonials';
import { PostWebinarVideoTestimonials } from '@/components/webinar/PostWebinarVideoTestimonials';
import { DailyRhythm } from '@/components/sections/DailyRhythm';
import { ProgramContents } from '@/components/sections/ProgramContents';
import { AfterProgram } from '@/components/sections/AfterProgram';
import { About } from '@/components/sections/About';
import { AudienceFit } from '@/components/sections/AudienceFit';
import { DayOneBridge } from '@/components/sections/DayOneBridge';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { WebinarFallback } from '@/components/sections/WebinarFallback';

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <Bridge />
      <PainPoints />
      <Solution />
      <Stages />
      <Features />
      <Rhythm />
      <Testimonials />
      <PostWebinarVideoTestimonials />
      <DailyRhythm />
      <ProgramContents />
      <AfterProgram />
      <About />
      <AudienceFit />
      <DayOneBridge />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <WebinarFallback />
    </>
  );
}


