"use client";

import {
  Pin,
  Root,
  Animation,
  ImageSequenceCanvas,
  Waypoint,
} from "@bsmnt/scrollytelling";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { getStaggeredTimeline } from "../ipod/getStaggeredTimeline";

const runningFrames = [1, 2, 3, 4, 5, 6];
type ImageSequenceCanvasController = {
  preload: (frameStart: number, frameEnd: number) => Promise<void>;
  draw: (frame: number) => Promise<void>;
  canvas: HTMLCanvasElement | null;
};

const runSrc = (frame: number) => `/pineapple-run-${frame}.png`;

const firstFrame = runningFrames[0];
const lastFrame = runningFrames[runningFrames.length - 1];

export default function PineappleRun() {
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    controllerRef.current?.preload(firstFrame, lastFrame);
  }, [controllerRef, canvasRef, firstFrame, lastFrame]);

  const spinTimeline = getStaggeredTimeline({
    start: 0,
    end: 100,
    chunks: runningFrames.length,
    overlap: 0,
  });

  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        {spinTimeline.map(({ start }, idx) => {
          return (
            <Waypoint
              key={`pineapple-frame-${start}`}
              at={start}
              onCall={() => {
                controllerRef.current?.draw(idx + 1);
              }}
              onReverseCall={() => {
                controllerRef.current?.draw(idx + 1);
              }}
              disabled={false}
            />
          );
        })}
        <ImageSequenceCanvas
          controllerRef={controllerRef}
          ref={canvasRef}
          getFrameSrc={(frame) => {
            const src = runSrc(frame);
            return src;
          }}
          className={styles.canvas}
          width={2000}
          height={2000}
        />
      </Pin>
    </Root>
  );
}
