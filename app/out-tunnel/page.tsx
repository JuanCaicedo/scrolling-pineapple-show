"use client";

import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import PineappleRunThreeQuarter from "@/components/PineappleRunThreeQuarter";
import { useRef } from "react";
import styles from "./page.module.css";

export default function PineappleRunPage() {
  const togetherRef = useRef<HTMLImageElement>(null);
  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <div className={"panel"}>
          <Animation
            tween={{
              start: 0,
              end: 100,
              target: togetherRef,
              from: { left: "0%", transform: "scale(0.2)", top: "0%" },
            }}
          />
          <div className={styles["run-container"]} ref={togetherRef}>
            <div className={styles["together-container"]}>
              <PineappleRunThreeQuarter className={styles.pineapple} />
            </div>
          </div>
        </div>
      </Pin>
    </Root>
  );
}
