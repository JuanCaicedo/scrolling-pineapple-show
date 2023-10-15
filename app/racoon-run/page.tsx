"use client";

import RacoonRun from "@/components/RacoonRun";
import { Pin, Root } from "@bsmnt/scrollytelling";

export default function RacoonPage() {
  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <RacoonRun />
      </Pin>
    </Root>
  );
}
