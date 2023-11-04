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

const totalFrames = 17;

const frames = (frame: number): number => frame * (100 / totalFrames);

const ipodFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const spinSrc = (frame: number): string => `/ipod-${frame}.png`;

const firstFrame = ipodFrames[0];
const lastFrame = ipodFrames[ipodFrames.length - 1];

export default function IpodScene() {
  const plugRef = useRef<HTMLImageElement>(null);
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const spinTimeline = getStaggeredTimeline({
    start: 0,
    end: 60,
    chunks: ipodFrames.length * 2,
    overlap: 0,
  });

  useEffect(() => {
    controllerRef.current?.preload(firstFrame, lastFrame);
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerWidth;
    }
  }, [controllerRef, canvasRef, firstFrame, lastFrame]);

  const firstTimeline = spinTimeline[0];
  const lastTimeline = spinTimeline[spinTimeline.length - 1];

  return (
    <Panel>
      <Animation
        tween={{
          target: canvasRef,
          start: firstTimeline.start,
          end: lastTimeline.end,
          to: {
            onUpdate: function () {
              const point = this.progress() * 100;
              const closest = findClosestFrame(spinTimeline, point);
              const frame = (closest % ipodFrames.length) + 1;
              controllerRef.current?.draw(frame);
            },
          },
        }}
      />
      <Animation
        tween={{
          target: canvasRef,
          start: 0,
          end: lastTimeline.end,
          fromTo: [{ top: "-20cqh" }, { top: "55cqh" }],
        }}
      />
      <div className={styles.container}>
        <ImageSequenceCanvas
          ref={canvasRef}
          controllerRef={controllerRef}
          getFrameSrc={(frame) => {
            const src = spinSrc(frame);
            return src;
          }}
          className={`image canvas ${styles.ipod}`}
          width={2000}
          height={2000}
        />
      </div>
      <Animation
        tween={{
          target: plugRef,
          start: lastTimeline.end,
          end: 80,
          fromTo: [{ top: "-45cqh" }, { top: "-3cqh" }],
        }}
      />
      <img
        ref={plugRef}
        src={"/plug.png"}
        alt="Aux plug"
        className={`image ${styles.plug}`}
      />
    </Panel>
  );
}
