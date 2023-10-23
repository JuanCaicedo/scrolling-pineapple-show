"use client";

import Image from "next/image";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import PineappleRunThreeQuarter from "@/components/PineappleRunThreeQuarter";
import RacoonRunThreeQuarter from "@/components/RacoonRunThreeQuarter";
import { useRef } from "react";
import styles from "./page.module.css";

export default function ExitTunnel() {
  const togetherRef = useRef<HTMLImageElement>(null);
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #513320;
        }
      `}</style>

      <Root start="top top" end="bottom bottom" scrub={2}>
        <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
          <div className={"panel"}>
            <img
              src="/outside-tunnel.png"
              alt="outside-tunnel"
              className={`image ${styles["tunnel-exit"]}`}
            />
            <Animation
              tween={{
                start: 0,
                end: 100,
                target: togetherRef,
                from: { left: "10%", transform: "scale(0.2)", top: "10%" },
              }}
            />
            <div className={styles["run-container"]} ref={togetherRef}>
              <div className={styles["together-container"]}>
                <PineappleRunThreeQuarter className={styles.pineapple} />
                <RacoonRunThreeQuarter className={styles.racoon} />
              </div>
            </div>
          </div>
        </Pin>
      </Root>
    </>
  );
}
