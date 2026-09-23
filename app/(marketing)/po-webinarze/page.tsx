import { Stages } from '@/components/sections/Stages';
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

export default function PostWebinarPage() {
  return (
    <>
      <div className="py-32 bg-[#0F172A] text-white flex flex-col items-center justify-center border-b border-slate-700">
        <h1 className="text-3xl font-bold tracking-widest text-slate-400">DEV PLACEHOLDER</h1>
        <p className="text-xl mt-4 font-medium text-white">POST-WEBINAR HERO</p>
      </div>
      
      <div className="py-24 bg-[#1E293B] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold tracking-widest text-slate-400">DEV PLACEHOLDER</h2>
        <p className="text-lg mt-2 font-medium text-white">POST-WEBINAR BRIDGE</p>
      </div>

      <Stages />
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
