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

function FadeInAndOut({
  start,
  end,
  name,
}: {
  start: number;
  end: number;
  name: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const startFrame1 = start;
  const third = (end - start) / 3;
  const endFrame1 = startFrame1 + third;
  const startFrame2 = endFrame1 + 1;
  const endFrame2 = end;
  const className = `dancing-${name}`;
  return (
    <>
      <img
        ref={ref}
        src={`/dance-${name}.png`}
        alt={`Dancing ${name}`}
        className={`${styles[className]} image-fixed ${styles["color-highlight"]}`}
      />
      <img
        src={`/dark-${name}.png`}
        alt={`Dark dancing ${name}`}
        className={`${styles[className]} image-fixed`}
      />

      <Animation
        tween={{
          start: startFrame1,
          end: endFrame1,
          target: ref,
          fromTo: [{ opacity: 0 }, { opacity: 1, ease: "none" }],
        }}
      />
      <Animation
        tween={{
          start: startFrame2,
          end: endFrame2,
          target: ref,
          fromTo: [{ opacity: 1 }, { opacity: 0, ease: "none" }],
        }}
      />
    </>
  );
}

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

export default function DanceScene() {
  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <Panel className={styles["party-background"]}>
          <DancePineapple />
          <FadeInAndOut name="strawberry" start={0} end={15} />
          <FadeInAndOut name="avocado" start={15} end={30} />
          <FadeInAndOut name="orange" start={30} end={45} />
          <FadeInAndOut name="pepper" start={45} end={60} />
        </Panel>
      </Pin>
    </Root>
  );
}
