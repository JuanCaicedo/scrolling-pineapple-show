"use client";
import { useRef } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import "./styles.css";

export default function AnimationDemo() {
  const ref = useRef(null);
  return (
    <Root>
      <Pin childHeight="100vh" pinSpacerHeight="800vh">
        <div className="absolute-container" ref={ref}>
          <div className="relative-container">
            <img src="/pineapple-run-1.png" className="small-image pineapple" />
            <img src="/racoon-run-1.png" className="small-image racoon" />
          </div>
        </div>
      </Pin>
    </Root>
  );
}
