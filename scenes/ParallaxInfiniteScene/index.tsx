"use client";

import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import Image from "next/image";
import PineappleRun from "@/components/PineappleRun";
import { useRef } from "react";
import Panel from "@/components/Panel";
import styles from "./index.module.css";
import RacoonRun from "@/components/RacoonRun";

export default function Parallax() {
  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <Panel>
          <div className={styles.background} />
          <div className={styles.mountains} />
          <div className={styles.trees} />
          <div className={styles.flowers} />
          <div className={styles["run-container"]}>
            <div className={styles["together-container"]}>
              <img className={styles.pineapple} src="/pineapple-running.gif" />
              <img className={styles.racoon} src="/racoon-running.gif" />
            </div>
          </div>
        </Panel>
      </Pin>
    </Root>
  );
}