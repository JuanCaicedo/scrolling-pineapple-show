"use client";
import { useRef, useState } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import "./styles.css";

export default function AnimationDemo() {
  const [src, setSrc] = useState("/pineapple-run-1.png");

  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={"800vh"} top="0">
        <div className="demo-panel-container">
          <div className="demo-panel">
            <img ref={imgRef} src={src} className="demo-image" />
            <Animation
              tween={{
                target: imgRef,
                start: 0,
                end: 100,
                to: {},
              }}
            />

            <Animation
              tween={{
                target: imgRef,
                start: 0,
                end: 100,
                fromTo: [
                  {
                    left: "0cqw",
                  },
                  { left: "100cqw" },
                ],
              }}
            />
          </div>
        </div>
      </Pin>
    </Root>
  );
}
