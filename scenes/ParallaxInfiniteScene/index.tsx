"use client";

import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import Image from "next/image";
import { useRef } from "react";
import Panel from "@/components/Panel";

import styles from "./index.module.css";

export default function Parallax() {
  return (
    <Panel pinSpacerHeight="500vh">
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
  );
}
