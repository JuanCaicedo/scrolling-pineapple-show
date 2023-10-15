"use client";

import {
  Pin,
  Root,
  Animation,
  ImageSequenceCanvas,
} from "@bsmnt/scrollytelling";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { getStaggeredTimeline } from "../utils/getStaggeredTimeline";
import { ImageSequenceCanvasController, findClosestFrame } from "../utils/ImageSequence";

const runningFrames = [1, 2, 3, 4, 5, 6];

const runSrc = (frame: number) => `/pineapple-run-${frame}.png`;

const firstFrame = runningFrames[0];
const lastFrame = runningFrames[runningFrames.length - 1];


export default function PineappleRun() {
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    controllerRef.current?.preload(firstFrame, lastFrame);
  }, [controllerRef, canvasRef, firstFrame, lastFrame]);

  const runTimeline = getStaggeredTimeline({
    start: 0,
    end: 100,
    chunks: runningFrames.length,
    overlap: 0,
  });
  const firstTimeline = runTimeline[0];
  const lastTimeline = runTimeline[runTimeline.length - 1];

  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <Animation
          tween={{
            target: canvasRef,
            start: firstTimeline.start,
            end: lastTimeline.end,
            to: {
              onUpdate: function () {
                const closest = findClosestFrame(runTimeline, this.time());
                controllerRef.current?.draw(closest + 1);
              },
            },
          }}
        />
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