"use client";

import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import Image from "next/image";
import PineappleRun from "@/components/PineappleRun";
import { useRef } from "react";
import styles from "./page.module.css";
import RacoonRun from "@/components/RacoonRun";

export default function PineappleRunPage() {
  const togetherRef = useRef<HTMLImageElement>(null);
  const mountainsRef = useRef<HTMLImageElement>(null);
  const treesRef = useRef<HTMLImageElement>(null);
  const flowersRef = useRef<HTMLImageElement>(null);

  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <div className={"panel"}>
          <div className={styles.background} />
          <Animation
            tween={{
              start: 0,
              end: 100,
              target: mountainsRef,
              to: { left: "-36vw" },
            }}
          />
          <img
            src="/background-mountains.png"
            className={styles.mountains}
            ref={mountainsRef}
          />
          <Animation
            tween={{
              start: 0,
              end: 100,
              target: treesRef,
              to: { left: "-103vw" },
            }}
          />
          <img
            src="/background-trees.png"
            className={styles.trees}
            ref={treesRef}
          />
          <Animation
            tween={{
              start: 0,
              end: 100,
              target: flowersRef,
              to: { left: "-207vw" },
            }}
          />
          <img
            src="/background-flowers.png"
            className={styles.flowers}
            ref={flowersRef}
          />
          <Animation
            tween={{
              start: 0,
              end: 100,
              target: togetherRef,
              from: { left: "-110vw" },
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
