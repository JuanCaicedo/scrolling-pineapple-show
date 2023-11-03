import {
  Pin,
  Root,
  Animation,
  ImageSequenceCanvas,
} from "@bsmnt/scrollytelling";
import Panel from "@/components/Panel";

import styles from "./index.module.css";
import { forwardRef, useEffect, useRef } from "react";
import {
  ImageSequenceCanvasController,
  findClosestFrame,
} from "@/app/utils/ImageSequence";
import { getStaggeredTimeline } from "@/app/utils/getStaggeredTimeline";

const Character = forwardRef<HTMLImageElement, { name: string }>(
  function Character({ name }, ref) {
    const className = `dancing-${name}`;
    return (
      <>
        <img
          ref={ref}
          src={`/dance-${name}.png`}
          alt={`Dancing ${name}`}
          className={`${styles[className]} image ${styles["color-highlight"]} ${styles["start-hidden"]}`}
        />
        <img
          src={`/dark-${name}.png`}
          alt={`Dark dancing ${name}`}
          className={`${styles[className]} image`}
        />
      </>
    );
  }
);

const pineappleSrc = (frame: number) => `/dance-pineapple-${frame}.png`;
const danceFrames = 3;

function DancePineapple() {
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const danceTimeline = getStaggeredTimeline({
    start: 0,
    end: 100,
    chunks: 20,
    overlap: 0,
  });

  const firstTimeline = danceTimeline[0];
  const lastTimeline = danceTimeline[danceTimeline.length - 1];

  useEffect(() => {
    controllerRef.current?.preload(1, danceFrames);
    controllerRef.current?.draw(1);
  }, [controllerRef, canvasRef]);

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
              const closest = findClosestFrame(danceTimeline, point);
              const frame = (closest % danceFrames) + 1;
              controllerRef.current?.draw(frame);
            },
          },
        }}
      />
      <ImageSequenceCanvas
        controllerRef={controllerRef}
        ref={canvasRef}
        getFrameSrc={(frame) => {
          const src = pineappleSrc(frame);
          return src;
        }}
        className={`${styles["dancing-pineapple"]} image`}
        width={2000}
        height={2000}
      />
    </>
  );
}

const characters = ["avocado", "strawberry", "orange", "pepper"];

export default function DanceScene() {
  const fadeTimeline = getStaggeredTimeline({
    start: 0,
    end: 100,
    chunks: 20,
    overlap: 0.4,
  });
  const avocadoRef = useRef<HTMLImageElement>(null);
  const strawberryRef = useRef<HTMLImageElement>(null);
  const orangeRef = useRef<HTMLImageElement>(null);
  const pepperRef = useRef<HTMLImageElement>(null);

  const refs = [avocadoRef, strawberryRef, orangeRef, pepperRef];

  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`3200vh`}>
        <Panel className={styles["party-background"]}>
          <DancePineapple />
          {fadeTimeline.map(({ start, end }, idx) => {
            const remainder = idx % characters.length;
            const ref = refs[remainder];
            return (
              <Animation
                key={`animation-${idx}`}
                tween={{
                  target: ref,
                  start,
                  end,
                  fromTo: [
                    {
                      opacity: 0,
                    },
                    {
                      keyframes: {
                        "0%": { opacity: 0 },
                        "50%": { opacity: 1 },
                        "100%": { opacity: 0 },
                      },
                    },
                  ],
                }}
              />
            );
          })}
          {characters.map((name, idx) => {
            return (
              <Character key={`${name}-${idx}`} name={name} ref={refs[idx]} />
            );
          })}
        </Panel>
      </Pin>
    </Root>
  );
}
