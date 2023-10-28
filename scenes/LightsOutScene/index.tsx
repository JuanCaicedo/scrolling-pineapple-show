import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import Panel from "@/components/Panel";

import styles from "./index.module.css";
import { forwardRef, useRef } from "react";

function FadeOut({ name }: { name: string }) {
  const ref = useRef<HTMLImageElement>(null);
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
          start: 0,
          end: 20,
          target: ref,
          fromTo: [{ opacity: 1 }, { opacity: 0, ease: "linear" }],
        }}
      />
    </>
  );
}

export default function LightsOutScene() {
  const pineappleRef = useRef<HTMLImageElement>(null);

  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <Panel className={styles["party-background"]}>
          <FadeOut name="pineapple" />
          <FadeOut name="strawberry" />
          <FadeOut name="avocado" />
          <FadeOut name="orange" />
          <FadeOut name="pepper" />
        </Panel>
      </Pin>
    </Root>
  );
}
