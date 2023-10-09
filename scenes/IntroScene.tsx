import { Pin, Animation } from "@bsmnt/scrollytelling";
import Image from "next/image";
import styles from "./page.module.css";

const totalHeight = 3600;

export default function IntroScene() {
  return (
    <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`} top={100}>
      <Animation
        tween={{
          from: {
            top: 0,
          },
          to: {
            top: -40,
            ease: "linear",
          },

          start: 0,
          end: 100,
        }}
      >
        <Image
          alt="Pineapple"
          src={"/spin-1.png"}
          width={100}
          height={100}
          className={`${styles.image} ${styles.pineapple}`}
        />
      </Animation>
    </Pin>
  );
}
