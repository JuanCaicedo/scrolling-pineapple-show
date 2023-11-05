import Panel from "@/components/Panel";
import styles from "./index.module.css";
import { useRef } from "react";
import { getStaggeredTimeline } from "../../app/utils/getStaggeredTimeline";
import { Animation } from "@bsmnt/scrollytelling";

export default function TitleScene() {
  const theRef = useRef<HTMLDivElement>(null);
  const scrollingBlockRef = useRef<HTMLDivElement>(null);
  const pineappleRef = useRef<HTMLDivElement>(null);

  const timeline = getStaggeredTimeline({
    start: 0,
    end: 40,
    chunks: 4,
  });

  return (
    <Panel skipSpacer>
      <div className={styles["title-text"]}>
        <div className={styles["container"]}>
          <div className={styles["the"]} ref={theRef}>
            The
          </div>
          <div className={styles["see-through"]}>The</div>
        </div>
        <div className={styles["scrolling-container"]}>
          <div className={styles["scrolling"]}>Scrolling</div>
          <div className={styles["scrolling-block"]} ref={scrollingBlockRef} />
        </div>
        <div className={styles["pineapple"]} ref={pineappleRef}>
          Pineapple
        </div>
        <div className={styles["show"]}>Show</div>
      </div>
      <Animation
        tween={{
          start: timeline[0].start,
          end: timeline[0].end,
          target: theRef,
          fromTo: [
            {
              left: "-65cqw",
            },
            {
              left: "auto",
              ease: "elastic.out(1,0.7)",
            },
          ],
        }}
      />
      <Animation
        tween={{
          start: timeline[1].start,
          end: timeline[1].end,
          target: scrollingBlockRef,
          fromTo: [
            {
              height: "100%",
            },
            {
              height: "0%",
              ease: "none",
            },
          ],
        }}
      />
      <Animation
        tween={{
          start: timeline[2].start,
          end: timeline[2].end,
          target: pineappleRef,
          fromTo: [
            {
              opacity: 0,
            },
            {
              opacity: 1,
            },
          ],
        }}
      />
    </Panel>
  );
}
