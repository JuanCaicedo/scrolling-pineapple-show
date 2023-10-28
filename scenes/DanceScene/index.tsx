import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import Panel from "@/components/Panel";

import styles from "./index.module.css";
import { forwardRef, useRef } from "react";

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
        className={`${styles[className]} image-fixed ${styles["start-hidden"]} ${styles["color-highlight"]}`}
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
          to: { opacity: 1, ease: "linear" },
        }}
      />
      <Animation
        tween={{
          start: startFrame2,
          end: endFrame2,
          target: ref,
          to: { opacity: 0, ease: "linear" },
        }}
      />
    </>
  );
}

export default function DanceScene() {
  const pineappleRef = useRef<HTMLImageElement>(null);

  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <Panel className={styles["party-background"]}>
          <img
            ref={pineappleRef}
            src="/dance-pineapple.png"
            alt="Dancing pineapple"
            className={`${styles["dancing-pineapple"]} image-fixed`}
          />
          <FadeInAndOut name="strawberry" start={0} end={15} />
          <FadeInAndOut name="avocado" start={15} end={30} />
          <FadeInAndOut name="orange" start={30} end={45} />
          <FadeInAndOut name="pepper" start={45} end={60} />
        </Panel>
      </Pin>
    </Root>
  );
}
