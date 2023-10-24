import styles from "./index.module.css";
import React, { useEffect, useRef } from "react";
import { Animation, ImageSequenceCanvas } from "@bsmnt/scrollytelling";
import {
  ImageSequenceCanvasController,
  findClosestFrame,
} from "@/app/utils/ImageSequence";
import { getStaggeredTimeline } from "@/app/utils/getStaggeredTimeline";
import { mergeRefs } from "react-merge-refs";

const runningFrames = [1, 2, 3, 4, 5, 6, 7];

const runSrc = (frame: number) => `/racoon-run-${frame}.png`;

const firstFrame = runningFrames[0];
const lastFrame = runningFrames[runningFrames.length - 1];

const RacoonRun = React.forwardRef(function RacoonRun(
  { className = "" }: { className?: string },
  ref
) {
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //TODO use main ref
  const mainRef = mergeRefs([ref, canvasRef]);

  useEffect(() => {
    controllerRef.current?.preload(firstFrame, lastFrame);
    controllerRef.current?.draw(1);
  }, [controllerRef, canvasRef]);

  const runTimeline = getStaggeredTimeline({
    start: 0,
    end: 100,
    chunks: 40,
    overlap: 0,
  });
  const firstTimeline = runTimeline[0];
  const lastTimeline = runTimeline[runTimeline.length - 1];

  return (
    <>
      <Animation
        tween={{
          target: canvasRef,
          start: firstTimeline.start,
          end: lastTimeline.end,
          to: {
            onUpdate: function () {
              const point = this.progress() * 100;
              const closest = findClosestFrame(runTimeline, point);
              const frame = (closest % 7) + 1;
              controllerRef.current?.draw(frame);
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
        className={`${styles.canvas} ${className}`}
        width={2000}
        height={2000}
      />
    </>
  );
});

export default RacoonRun;
