import { DayOneBridge } from '@/components/sections/DayOneBridge';
import { PostWebinarProofAfterOffer } from '@/components/webinar/PostWebinarProofAfterOffer';
import { PostWebinarFAQ } from '@/components/webinar/PostWebinarFAQ';
import { PostWebinarFinalCTA } from '@/components/webinar/PostWebinarFinalCTA';

import { PostWebinarStatusBar } from '@/components/webinar/PostWebinarStatusBar';
import { PostWebinarHero } from '@/components/webinar/PostWebinarHero';
import { PostWebinarBridge } from '@/components/webinar/PostWebinarBridge';
import { PostWebinarVideoTestimonials } from '@/components/webinar/PostWebinarVideoTestimonials';
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
      <PostWebinarVideoTestimonials />

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

      <PostWebinarProofAfterOffer />
      <PostWebinarFAQ />
      <PostWebinarFinalCTA />
    </>
  );
}
