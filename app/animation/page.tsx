"use client";
import { useRef } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";

export default function AnimationDemo() {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={"800vh"} top="0">
        <img ref={imgRef} src="/pineapple-run-1.png" className="demo-image" />
        <Animation
          tween={{
            target: imgRef,
            start: 0,
            end: 100,
            fromTo: [
              {
                width: "0px",
              },
              { width: "600px" },
            ],
          }}
        />
      </Pin>
    </Root>
  );
}
