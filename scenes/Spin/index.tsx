import {
  Pin,
  Root,
  Waypoint,
  ImageSequenceCanvas,
} from "@bsmnt/scrollytelling";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";
import Head from "next/head";
import { ImageSequenceCanvasController } from "@/app/utils/ImageSequence";
import Panel from "@/components/Panel";

const totalFrames = 9;

const frames = (frame: number): number => frame * (100 / totalFrames);

const pineappleFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const spinSrc = (frame: number) => `/spin-${frame}.png`;

export default function Spin() {
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firstFrame = pineappleFrames[0];
  const lastFrame = pineappleFrames[pineappleFrames.length - 1];

  useEffect(() => {
    controllerRef.current?.preload(firstFrame, lastFrame);
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerWidth;
    }
  }, [controllerRef, canvasRef, firstFrame, lastFrame]);

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`} top={0}>
        <Panel>
          {pineappleFrames.map((f) => {
            const at = frames(f - 1);
            return (
              <Waypoint
                key={`pineapple-frame-${f}`}
                at={at}
                onCall={() => {
                  controllerRef.current?.draw(f);
                }}
                onReverseCall={() => {
                  controllerRef.current?.draw(f);
                }}
                disabled={false}
              />
            );
          })}
          <div className={styles.container}>
            <ImageSequenceCanvas
              className={"image canvas"}
              controllerRef={controllerRef}
              ref={canvasRef}
              getFrameSrc={(frame) => spinSrc(frame)}
              width={2000}
              height={2000}
            />
          </div>
        </Panel>
      </Pin>
    </Root>
  );
}
