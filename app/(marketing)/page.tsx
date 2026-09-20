import { Hero } from '@/components/sections/Hero';
import { Bridge } from '@/components/sections/Bridge';
import { PainPoints } from '@/components/sections/PainPoints';
import { Solution } from '@/components/sections/Solution';
import { Stages } from '@/components/sections/Stages';
import { Features } from '@/components/sections/Features';
import { Rhythm } from '@/components/sections/Rhythm';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { About } from '@/components/sections/About';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

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
      <Pricing />
      <About />
      <FAQ />
      <FinalCTA />
    </>
  );
}


