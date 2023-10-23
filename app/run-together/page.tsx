"use client";

import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import PineappleRun from "@/components/PineappleRun";
import { useRef } from "react";
import styles from "./page.module.css";
import RacoonRun from "@/components/RacoonRun";

export default function PineappleRunPage() {
  const togetherRef = useRef<HTMLImageElement>(null);
  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <div className={"panel"}>
          <div className={styles.background} />
          <Animation
            tween={{
              start: 0,
              end: 100,
              target: togetherRef,
              from: { left: "-110%" },
            }}
          />
          <div className={styles["run-container"]} ref={togetherRef}>
            <div className={styles["together-container"]}>
              <PineappleRun className={styles.pineapple} />
              <RacoonRun className={styles.racoon} />
            </div>
          </div>
        </div>
      </Pin>
    </Root>
  );
}
