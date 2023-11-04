"use client";
import { Animation, Pin, Root } from "@bsmnt/scrollytelling";
import { useRef } from "react";
import styles from "./index.module.css";
import Panel from "@/components/Panel";

export default function AfterStealScene() {
  const racoonRef = useRef<HTMLImageElement>(null);

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={`3000vh`} top={0}>
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
      </Pin>
    </Root>
  );
}
