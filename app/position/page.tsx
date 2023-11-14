"use client";
import { useRef } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import "./styles.css";

export default function Position() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={"800vh"} top="0">
        <Animation
          tween={{
            target: containerRef,
            start: 0,
            end: 100,
            fromTo: [
              {
                left: "0px",
              },
              { left: "600px" },
            ],
          }}
        />
        <div className="absolute-container" ref={containerRef}>
          <div className="relative-container">
            <img src="/pineapple-run-1.png" className="demo-image pineapple" />
            <img src="/racoon-run-1.png" className="demo-image racoon" />
          </div>
        </div>
      </Pin>
    </Root>
  );
}
