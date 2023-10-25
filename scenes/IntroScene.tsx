import { Pin, Animation, Root } from "@bsmnt/scrollytelling";
import styles from "./page.module.css";
import { useRef } from "react";

export default function IntroScene() {
  const sunglassesRef = useRef<HTMLImageElement>(null);
  const pineappleRef = useRef<HTMLImageElement>(null);

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <div className={styles.panel}>
          <Animation
            tween={{
              start: 0,
              end: 10,
              from: { top: "-120vh", right: 0, ease: "linear" },
            }}
          >
            <div className={`${styles.image} ${styles.spotlight}`} />
          </Animation>
          <Animation
            tween={{
              target: pineappleRef,
              start: 10,
              end: 40,
              from: { top: "110vh", ease: "linear" },
            }}
          />
          <img
            ref={pineappleRef}
            alt="Pinapple no sunglasses"
            src={"/no-sunglasses.png"}
            className={`${styles.image} ${styles.pineappleNoSunglasses}`}
          />

          <Animation
            tween={{
              target: sunglassesRef,
              start: 10,
              end: 40,
              from: { top: "110vh", ease: "linear" },
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
          <img
            ref={sunglassesRef}
            alt="Sunglasses"
            src={"/sunglasses.png"}
            className={`${styles.image} ${styles.sunglasses}`}
          />
        </div>
      </Pin>
    </Root>
  );
}
