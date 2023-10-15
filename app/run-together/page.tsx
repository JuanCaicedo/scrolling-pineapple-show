"use client";

import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import PineappleRun from "@/components/PineappleRun";
import { useRef } from "react";
import styles from "./page.module.css";

export default function PineappleRunPage() {
  const pineappleRef = useRef<HTMLImageElement>(null);
  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <div className={"panel"}>
          <Animation
            tween={{
              start: 0,
              end: 100,
              target: pineappleRef,
              from: { left: "-100%" },
            }}
          />
          <PineappleRun ref={pineappleRef} className={styles.pineapple} />
        </div>
      </Pin>
    </Root>
  );
}
