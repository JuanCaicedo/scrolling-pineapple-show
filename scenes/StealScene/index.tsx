"use client";
import {
  ImageSequenceCanvas,
  Animation,
  Pin,
  Root,
  Waypoint,
} from "@bsmnt/scrollytelling";
import {
  ImageSequenceCanvasController,
  findClosestFrame,
} from "@/app/utils/ImageSequence";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { getStaggeredTimeline } from "@/app/utils/getStaggeredTimeline";
import Panel from "@/components/Panel";

export default function IpodScene() {
  const ipodRef = useRef<HTMLImageElement>(null);
  const plugRef = useRef<HTMLImageElement>(null);
  const handRef = useRef<HTMLImageElement>(null);
  const togetherRef = useRef<HTMLDivElement>(null);

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={`3000vh`} top={0}>
        <Panel>
          <Animation
            tween={{
              target: handRef,
              start: 0,
              end: 40,
              fromTo: [
                {
                  right: "-50cqw",
                },
                {
                  right: "0cqw",
                },
              ],
            }}
          />
          <Animation
            tween={{
              target: togetherRef,
              start: 60,
              end: 80,
              fromTo: [
                {
                  right: "0cqw",
                },
                {
                  right: "-80cqw",
                },
              ],
            }}
          />
          <div ref={togetherRef} className={`image ${styles.together}`}>
            <img
              ref={handRef}
              src="/steal-hand.png"
              className={`image canvas ${styles.hand}`}
            />
            <img
              ref={ipodRef}
              src="/ipod-1.png"
              className={`image canvas ${styles.ipod}`}
            />
          </div>

          <Animation
            tween={{
              target: plugRef,
              start: 60,
              end: 80,
              fromTo: [
                {
                  transform: "rotate(0)",
                },
                {
                  transform: "rotate(-45deg)",
                },
              ],
            }}
          />
          <Animation
            tween={{
              target: plugRef,
              start: 80,
              end: 100,
              to: {
                keyframes: {
                  "0%": {
                    transform: "rotate(-45deg)",
                  },
                  "25%": {
                    transform: "rotate(20deg)",
                  },
                  "50%": {
                    transform: "rotate(10deg)",
                  },
                  "75%": {
                    transform: "rotate(-5deg)",
                  },
                  "100%": {
                    transform: "rotate(0deg)",
                  },
                },
              },
            }}
          />
          <img
            ref={plugRef}
            src={"/plug.png"}
            alt="Aux plug"
            className={`image ${styles.plug}`}
          />
        </Panel>
      </Pin>
    </Root>
  );
}
