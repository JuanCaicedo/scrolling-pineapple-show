import { Animation, ImageSequenceCanvas } from "@bsmnt/scrollytelling";
import styles from "./index.module.css";
import React, { useEffect, useRef } from "react";
import {
  ImageSequenceCanvasController,
  findClosestFrame,
} from "@/app/utils/ImageSequence";
import { getStaggeredTimeline } from "@/app/utils/getStaggeredTimeline";
import { mergeRefs } from "react-merge-refs";

const runningFrames = [1, 2, 3, 4, 5, 6];

const runSrc = (frame: number) => `/racoon-run-three-quarter-${frame}.png`;

const firstFrame = runningFrames[0];
const lastFrame = runningFrames[runningFrames.length - 1];

const RacoonRunThreeQuarter = React.forwardRef(function RacoonRunThreeQuarter(
  { className = "" }: { className?: string },
  ref
) {
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mainRef = mergeRefs([ref, canvasRef]);

  useEffect(() => {
    controllerRef.current?.preload(firstFrame, lastFrame);
    controllerRef.current?.draw(1);
  }, [controllerRef, canvasRef]);

  const runTimeline = getStaggeredTimeline({
    start: 0,
    end: 100,
    chunks: runningFrames.length,
    overlap: 0,
  });
  const firstTimeline = runTimeline[0];
  const lastTimeline = runTimeline[runTimeline.length - 1];
  return (
    <>
      <Animation
        tween={{
          target: mainRef,
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
        ref={mainRef}
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
export default RacoonRunThreeQuarter;
