"use client";
import { Animation, Pin, Root } from "@bsmnt/scrollytelling";
import { useRef } from "react";
import styles from "./index.module.css";
import Panel from "@/components/Panel";

export default function AfterStealScene() {
  const racoonRef = useRef<HTMLImageElement>(null);

  return (
    <Panel>
      <Animation
        tween={{
          target: racoonRef,
          start: 0,
          end: 80,
          fromTo: [
            {
              left: "122cqw",
            },
            {
              left: "50cqw",
              ease: "none",
            },
          ],
        }}
      />
      <img
        ref={racoonRef}
        src="/racoon-after-steal.png"
        className={`image canvas ${styles.racoon}`}
      />
    </Panel>
  );
}
