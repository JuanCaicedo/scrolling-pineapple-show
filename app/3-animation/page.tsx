"use client";
import { useRef } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import "./styles.css";

export default function AnimationDemo() {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={"800vh"} top="0">
        <div className="absolute-container" ref={imgRef}>
          <div className="relative-container">
            <img src="/pineapple-run-1.png" className="small-image pineapple" />
            <img src="/racoon-run-1.png" className="small-image racoon" />
          </div>
        </div>
        <Animation
          tween={{
            target: imgRef,
            start: 0,
            end: 100,
            fromTo: [
              {
                left: "100px",
              },
              { left: "600px" },
            ],
          }}
        />
      </Pin>
    </Root>
  );
}
