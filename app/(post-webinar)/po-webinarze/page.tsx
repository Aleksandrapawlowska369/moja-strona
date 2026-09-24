import { DayOneBridge } from '@/components/sections/DayOneBridge';
import { FAQ } from '@/components/sections/FAQ';

import { PostWebinarStatusBar } from '@/components/webinar/PostWebinarStatusBar';
import { PostWebinarHero } from '@/components/webinar/PostWebinarHero';
import { PostWebinarBridge } from '@/components/webinar/PostWebinarBridge';
import { PostWebinarStages } from '@/components/webinar/PostWebinarStages';
import { PostWebinarTopicMap } from '@/components/webinar/PostWebinarTopicMap';
import { PostWebinarSnapshot } from '@/components/webinar/PostWebinarSnapshot';

import { PostWebinarRelationship } from '@/components/webinar/PostWebinarRelationship';
import { PostWebinarState } from '@/components/webinar/PostWebinarState';
import { PostWebinarProofs } from '@/components/webinar/PostWebinarProofs';
import { PostWebinarDailyRhythm } from '@/components/webinar/PostWebinarDailyRhythm';
import { PostWebinarProgramContents } from '@/components/webinar/PostWebinarProgramContents';
import { PostWebinarAfterProgram } from '@/components/webinar/PostWebinarAfterProgram';

import { PostWebinarAbout } from '@/components/webinar/PostWebinarAbout';
import { PostWebinarAudienceFit } from '@/components/webinar/PostWebinarAudienceFit';
import { PostWebinarOffer } from '@/components/webinar/PostWebinarOffer';

export default function PostWebinarPage() {
  return (
    <>
      <PostWebinarStatusBar />
      <PostWebinarHero />
      <PostWebinarBridge />

      <PostWebinarStages />
      <PostWebinarTopicMap />
      <PostWebinarSnapshot />
      
      <PostWebinarRelationship />
      <PostWebinarState />
      <PostWebinarProofs />
      <PostWebinarDailyRhythm />
      <PostWebinarProgramContents />
      <PostWebinarAfterProgram />
      
      <PostWebinarAbout />
      <PostWebinarAudienceFit />
      <DayOneBridge />
      <PostWebinarOffer />

      <FAQ />

      <div className="py-32 bg-[#1E293B] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold tracking-widest text-slate-400">DEV PLACEHOLDER</h2>
        <p className="text-lg mt-2 font-medium text-white">POST-WEBINAR FINAL CTA</p>
      </div>
    </>
  );
}
