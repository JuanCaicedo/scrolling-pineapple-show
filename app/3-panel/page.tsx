"use client";
import { useRef } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import "./styles.css";

export default function Panel() {
  const ref = useRef(null);

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={"800vh"} top="0">
        <div className="demo-panel-container">
          <div className="demo-panel">
            <div className="absolute-container" ref={ref}>
              <div className="relative-container">
                <img
                  src="/pineapple-run-1.png"
                  className="demo-image pineapple"
                />
                <img src="/racoon-run-1.png" className="demo-image racoon" />
              </div>
            </div>
          </div>
        </div>

        <Animation
          tween={{
            target: ref,
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
      </Pin>
    </Root>
  );
}
