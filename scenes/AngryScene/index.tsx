import Image from "next/image";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import PineappleRunThreeQuarter from "@/components/PineappleRunThreeQuarter";
import RacoonRunThreeQuarter from "@/components/RacoonRunThreeQuarter";
import Panel from "@/components/Panel";

import { useRef } from "react";
import styles from "./index.module.css";

export default function AngryScene() {
  const angryRef = useRef<HTMLImageElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  return (
    <Panel>
      <img
        src="/angry.png"
        alt="angry"
        ref={angryRef}
        className={`image ${styles["angry"]}`}
      />
      <Animation
        tween={{
          start: 0,
          end: 100,
          target: angryRef,
          fromTo: [{ transform: "scale(1)" }, { transform: "scale(1.2)" }],
        }}
      />
      <div className={`image ${styles["top-bar"]}`} ref={topBarRef} />
      <Animation
        tween={{
          start: 0,
          end: 100,
          target: topBarRef,
          fromTo: [
            { transform: "rotate(90deg)", top: "-78cqh" },
            { transform: "rotate(99deg)", top: "-45cqh" },
          ],
        }}
      />
      <div className={`image ${styles["bottom-bar"]}`} ref={bottomBarRef} />
      <Animation
        tween={{
          start: 0,
          end: 100,
          target: bottomBarRef,
          fromTo: [
            { transform: "rotate(90deg)", bottom: "-78cqh" },
            { transform: "rotate(92deg)", bottom: "-45cqh" },
          ],
        }}
      />
    </Panel>
  );
}
