"use client";

import { Pin, Root } from "@bsmnt/scrollytelling";
import { useRef } from "react";
import PineappleRun from "@/components/PineappleRun";

export default function PineappleRunPage() {
  const pineappleRef = useRef<HTMLImageElement>(null);
  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <PineappleRun ref={pineappleRef} />
      </Pin>
    </Root>
  );
}
