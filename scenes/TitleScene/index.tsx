import Panel from "@/components/Panel";
import styles from "./index.module.css";
import { useRef } from "react";
import { getStaggeredTimeline } from "../../app/utils/getStaggeredTimeline";
import { Animation } from "@bsmnt/scrollytelling";

export default function TitleScene() {
  const theRef = useRef<HTMLDivElement>(null);
  const scrollingBlockRef = useRef<HTMLDivElement>(null);
  const pineappleRef = useRef<HTMLDivElement>(null);

  const showSRef = useRef<HTMLSpanElement>(null);
  const showHRef = useRef<HTMLSpanElement>(null);
  const showORef = useRef<HTMLSpanElement>(null);
  const showWRef = useRef<HTMLSpanElement>(null);
  const showRefs = [showSRef, showHRef, showORef, showWRef];

  const timeline = getStaggeredTimeline({
    start: 0,
    end: 40,
    chunks: 4,
  });
  const showTimeline = getStaggeredTimeline({
    start: timeline[3].start,
    end: 60,
    chunks: 4,
  });

  return (
    <Panel>
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
        <div className={styles["show"]}>
          <span className={styles["show-container"]}>
            <span className={styles["see-through"]}>S</span>
            <span className={styles["show-absolute"]} ref={showSRef}>
              S
            </span>
          </span>
          <span className={styles["show-container"]}>
            <span className={styles["see-through"]}>h</span>
            <span className={styles["show-absolute"]} ref={showHRef}>
              h
            </span>
          </span>
          <span className={styles["show-container"]}>
            <span className={styles["see-through"]}>o</span>
            <span className={styles["show-absolute"]} ref={showORef}>
              o
            </span>
          </span>
          <span className={styles["show-container"]}>
            <span className={styles["see-through"]}>w</span>
            <span className={styles["show-absolute"]} ref={showWRef}>
              w
            </span>
          </span>
        </div>
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
      {showTimeline.map((timeline, index) => {
        return (
          <>
            <Animation
              key={`show-${index}`}
              tween={{
                start: timeline.start,
                end: timeline.end,
                target: showRefs[index],
                fromTo: [
                  {
                    opacity: 0,
                  },
                  {
                    opacity: 1,
                    ease: "none",
                  },
                ],
              }}
            />
            <Animation
              key={`show-${index}-2`}
              tween={{
                start: timeline.start,
                end: timeline.end,
                target: showRefs[index],
                to: {
                  keyframes: {
                    "0%": {
                      transform: "translateY(0)",
                    },
                    "30%": {
                      transform: "translateY(-3cqh)",
                    },
                    "60%": {
                      transform: "translateY(0)",
                    },
                    "100%": {
                      transform: "translateY(0)",
                    },
                  },
                },
              }}
            />
          </>
        );
      })}
    </Panel>
  );
}
