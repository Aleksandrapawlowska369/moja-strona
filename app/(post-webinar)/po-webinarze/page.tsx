import { Features } from '@/components/sections/Features';
import { Rhythm } from '@/components/sections/Rhythm';
import { Testimonials } from '@/components/sections/Testimonials';
import { DailyRhythm } from '@/components/sections/DailyRhythm';
import { ProgramContents } from '@/components/sections/ProgramContents';
import { AfterProgram } from '@/components/sections/AfterProgram';
import { About } from '@/components/sections/About';
import { AudienceFit } from '@/components/sections/AudienceFit';
import { DayOneBridge } from '@/components/sections/DayOneBridge';
import { FAQ } from '@/components/sections/FAQ';

import { PostWebinarStatusBar } from '@/components/webinar/PostWebinarStatusBar';
import { PostWebinarHero } from '@/components/webinar/PostWebinarHero';
import { PostWebinarBridge } from '@/components/webinar/PostWebinarBridge';
import { PostWebinarStages } from '@/components/webinar/PostWebinarStages';
import { PostWebinarTopicMap } from '@/components/webinar/PostWebinarTopicMap';
import { PostWebinarSnapshot } from '@/components/webinar/PostWebinarSnapshot';

export default function PostWebinarPage() {
  return (
    <>
      <PostWebinarStatusBar />
      <PostWebinarHero />
      <PostWebinarBridge />

      <PostWebinarStages />
      <PostWebinarTopicMap />
      <PostWebinarSnapshot />
      
      <Features />
      <Rhythm />
      <Testimonials />
      <DailyRhythm />
      <ProgramContents />
      <AfterProgram />
      <About />
      <AudienceFit />
      <DayOneBridge />

      <div className="py-32 bg-[#0F172A] text-white flex flex-col items-center justify-center border-y border-slate-700">
        <h2 className="text-2xl font-bold tracking-widest text-slate-400">DEV PLACEHOLDER</h2>
        <p className="text-lg mt-2 font-medium text-white">PROMO PRICING + TIMER</p>
      </div>

      <FAQ />

      <div className="py-32 bg-[#1E293B] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold tracking-widest text-slate-400">DEV PLACEHOLDER</h2>
        <p className="text-lg mt-2 font-medium text-white">POST-WEBINAR FINAL CTA</p>
      </div>
    </>
  );
}
