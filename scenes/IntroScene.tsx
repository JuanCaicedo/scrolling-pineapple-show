import { Animation } from "@bsmnt/scrollytelling";
import styles from "./page.module.css";
import Panel from "@/components/Panel";

import { useRef } from "react";

export default function IntroScene() {
  const sunglassesRef = useRef<HTMLImageElement>(null);
  const pineappleRef = useRef<HTMLImageElement>(null);
  const movementRef = useRef<HTMLDivElement>(null);

  return (
    <Panel>
      <Animation
        tween={{
          start: 0,
          end: 10,
          fromTo: [{ top: "-120cqh" }, { top: "-30cqh", ease: "linear" }],
        }}
      >
        <div className={`${styles.image} ${styles.spotlight}`} />
      </Animation>
      <Animation
        tween={{
          target: movementRef,
          start: 10,
          end: 40,
          fromTo: [{ top: "120cqh" }, { top: "35cqh" }],
        }}
      />
      <Animation
        tween={{
          target: sunglassesRef,
          start: 40,
          end: 100,
          fromTo: [
            { transform: "rotate(-90deg)" },
            {
              keyframes: {
                "100%": { transform: "rotate(0deg)" },
              },
            },
          ],
        }}
      />
      <div
        className={`${styles.image} ${styles["movement-container"]}`}
        ref={movementRef}
      >
        <img
          ref={pineappleRef}
          alt="Pinapple no sunglasses"
          src={"/no-sunglasses.png"}
          className={`${styles.image} ${styles.pineappleNoSunglasses}`}
        />
        <img
          ref={sunglassesRef}
          alt="Sunglasses"
          src={"/sunglasses.png"}
          className={`${styles.image} ${styles.sunglasses}`}
        />
      </div>
    </Panel>
  );
}
