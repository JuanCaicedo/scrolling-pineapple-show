import { Pin, Animation, Root } from "@bsmnt/scrollytelling";
import styles from "./page.module.css";

const totalHeight = 3600;

export default function IntroScene() {
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
              start: 10,
              end: 40,
              from: { top: "110vh", ease: "linear" },
            }}
          >
            <img
              alt="Pinapple no sunglasses"
              src={"/no-sunglasses.png"}
              className={`${styles.image} ${styles.pineappleNoSunglasses}`}
            />
          </Animation>

          <Animation
            tween={{
              start: 40,
              end: 100,
              from: { top: "45vh", ease: "linear" },
            }}
          >
            <img
              alt="Sunglasses"
              src={"/sunglasses.png"}
              className={`${styles.image} ${styles.sunglasses}`}
            />
          </Animation>
        </div>
      </Pin>
    </Root>
  );
}