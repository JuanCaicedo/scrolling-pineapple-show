import {
  ImageSequenceCanvas,
  Pin,
  Root,
  Animation,
} from "@bsmnt/scrollytelling";
import Panel from "@/components/Panel";

import styles from "./index.module.css";
import { useEffect, useRef } from "react";
import { ImageSequenceCanvasController } from "@/app/utils/ImageSequence";

function FadeOut({ name }: { name: string }) {
  const controllerRef = useRef<ImageSequenceCanvasController>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const darkControllerRef = useRef<ImageSequenceCanvasController>(null);
  const darkCanvasRef = useRef<HTMLCanvasElement>(null);

  const className = `dancing-${name}`;

  useEffect(() => {
    controllerRef.current?.preload(1, 2);
    controllerRef.current?.draw(1);
  }, [controllerRef, canvasRef]);

  useEffect(() => {
    darkControllerRef.current?.preload(1, 2);
    darkControllerRef.current?.draw(1);
  }, [darkControllerRef, darkCanvasRef]);

  return (
    <>
      <ImageSequenceCanvas
        controllerRef={controllerRef}
        ref={canvasRef}
        getFrameSrc={(frame) => {
          const src = `/dance-${name}.png`;
          return src;
        }}
        className={`${styles[className]} image ${styles["start-hidden"]} ${styles["color-highlight"]}`}
        width={2000}
        height={2000}
      />
      <ImageSequenceCanvas
        controllerRef={darkControllerRef}
        ref={darkCanvasRef}
        getFrameSrc={(frame) => {
          if (frame === 2) {
            return `/dark-${name}-reaction.png`;
          }
          return `/dark-${name}.png`;
        }}
        className={`${styles[className]} image`}
        width={2000}
        height={2000}
      />

      <Animation
        tween={{
          start: 25,
          end: 30,
          target: canvasRef,
          fromTo: [{ opacity: 1 }, { opacity: 0, ease: "linear" }],
        }}
      />
      <Animation
        tween={{
          target: darkCanvasRef,
          start: 0,
          end: 100,
          to: {
            onUpdate: function () {
              const point = this.progress() * 100;
              if (point > 60) {
                darkControllerRef.current?.draw(2);
                return;
              }
              darkControllerRef.current?.draw(1);
            },
          },
        }}
      />
    </>
  );
}

export default function LightsOutScene() {
  const pineappleRef = useRef<HTMLImageElement>(null);

  return (
    <Panel className={styles["party-background"]}>
      <FadeOut name="pineapple" />
      <FadeOut name="strawberry" />
      <FadeOut name="avocado" />
      <FadeOut name="orange" />
      <FadeOut name="pepper" />
    </Panel>
  );
}
