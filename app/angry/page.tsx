"use client";

import Image from "next/image";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import PineappleRunThreeQuarter from "@/components/PineappleRunThreeQuarter";
import RacoonRunThreeQuarter from "@/components/RacoonRunThreeQuarter";
import { useRef } from "react";
import styles from "./page.module.css";

export default function ExitTunnel() {
  const angryRef = useRef<HTMLImageElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

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
                fromTo: [
                  { transform: "scale(1)" },
                  { transform: "scale(1.2)" },
                ],
              }}
            />
            <div className={`image ${styles["top-bar"]}`} ref={topBarRef} />
            <Animation
              tween={{
                start: 0,
                end: 100,
                target: topBarRef,
                fromTo: [
                  { transform: "rotate(90deg)", top: "-78vh" },
                  { transform: "rotate(99deg)", top: "-45vh" },
                ],
              }}
            />
            <div
              className={`image ${styles["bottom-bar"]}`}
              ref={bottomBarRef}
            />
            <Animation
              tween={{
                start: 0,
                end: 100,
                target: bottomBarRef,
                fromTo: [
                  { transform: "rotate(90deg)", bottom: "-78vh" },
                  { transform: "rotate(92deg)", bottom: "-45vh" },
                ],
              }}
            />
          </div>
        </Pin>
      </Root>
    </>
  );
}
