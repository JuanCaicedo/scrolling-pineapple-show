"use client";
import { useRef } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import "./styles.css";

export default function Panel() {
  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={"800vh"} top="0">
        <div className="demo-panel-container">
          <div className="demo-panel">
            <img src="/pineapple-run-1.png" className="demo-image pineapple" />
            <img src="/racoon-run-1.png" className="demo-image racoon" />
          </div>
        </div>
      </Pin>
    </Root>
  );
}
