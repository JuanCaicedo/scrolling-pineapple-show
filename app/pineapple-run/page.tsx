"use client";

import { Pin, Root } from "@bsmnt/scrollytelling";
import PineappleRun from "@/components/PineappleRun";

export default function PineappleRunPage() {
  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <PineappleRun />
      </Pin>
    </Root>
  );
}
