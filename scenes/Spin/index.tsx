import {
  Pin,
  Root,
  ImageSequenceCanvas,
  Animation,
} from "@bsmnt/scrollytelling";
import { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";
import {
  ImageSequenceCanvasController,
  findClosestFrame,
} from "@/app/utils/ImageSequence";
import Panel from "@/components/Panel";
import { getStaggeredTimeline } from "@/app/utils/getStaggeredTimeline";

const pineappleFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const spinSrc = (frame: number) => `/spin-${frame}.png`;

const firstFrame = pineappleFrames[0];
const lastFrame = pineappleFrames[pineappleFrames.length - 1];

export default function Spin() {
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const spinTimeline = getStaggeredTimeline({
    start: 0,
    end: 100,
    chunks: pineappleFrames.length,
    overlap: 0,
  });

  useEffect(() => {
    controllerRef.current?.preload(firstFrame, lastFrame);
    controllerRef.current?.draw(1);
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerWidth;
    }
  }, [controllerRef, canvasRef, firstFrame, lastFrame]);

  const firstTimeline = spinTimeline[0];
  const lastTimeline = spinTimeline[spinTimeline.length - 1];

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={`3200vh`} top={0}>
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
                  controllerRef.current?.draw(closest + 1);
                },
              },
            }}
          />
          <ImageSequenceCanvas
            className={`image canvas ${styles.container}`}
            controllerRef={controllerRef}
            ref={canvasRef}
            getFrameSrc={(frame) => spinSrc(frame)}
            width={2000}
            height={2000}
          />
        </Panel>
      </Pin>
    </Root>
  );
}
