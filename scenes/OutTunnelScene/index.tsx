"use client";

import Image from "next/image";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import PineappleRunThreeQuarter from "@/components/PineappleRunThreeQuarter";
import RacoonRunThreeQuarter from "@/components/RacoonRunThreeQuarter";
import { useRef } from "react";
import Panel from "@/components/Panel";

import styles from "./index.module.css";

export default function OutTunnelScene() {
  const togetherRef = useRef<HTMLImageElement>(null);
  return (
    <Panel>
      <img
        src="/outside-cave-background.png"
        alt="outside-cave-background"
        className={`${styles["tunnel-exit"]}`}
      />
      <Animation
        tween={{
          start: 0,
          end: 100,
          target: togetherRef,
          fromTo: [
            { left: "-40cqw", transform: "scale(0.05)", top: "55cqh" },
            {
              left: "200cqw",
              transform: "scale(2)",
              top: "-9%cwh",
              ease: "circ.in",
            },
          ],
        }}
      />
      <div className={styles["run-container"]} ref={togetherRef}>
        <div className={styles["together-container"]}>
          <PineappleRunThreeQuarter className={styles.pineapple} />
          <RacoonRunThreeQuarter className={styles.racoon} />
        </div>
      </div>
    </Panel>
  );
}
