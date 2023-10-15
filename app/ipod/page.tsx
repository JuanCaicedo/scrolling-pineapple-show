"use client";
import { Animation, Pin, Root, Waypoint } from "@bsmnt/scrollytelling";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import { getStaggeredTimeline } from "../utils/getStaggeredTimeline";

const totalFrames = 17;
const totalHeight = 3600;

const frames = (frame: number): number => frame * (100 / totalFrames);

const ipodFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const spinSrc = (frame: number): string => {
  if (frame === 17) {
    return `/ipod-1.png`;
  }
  return `/ipod-${frame}.png`;
};

function SpinningIpod() {
  const [src, setSrc] = useState(spinSrc(ipodFrames[0]));
  const ref = useRef<HTMLImageElement>(null);
  const plugRef = useRef<HTMLImageElement>(null);

  const spinTimeline = getStaggeredTimeline({
    start: 0,
    end: 60,
    chunks: ipodFrames.length,
    overlap: 0,
  });
  const lastFrame = spinTimeline[spinTimeline.length - 1];

  return (
    <>
      {ipodFrames.map((f) => {
        const at = frames(f - 1);
        return (
          <Waypoint
            key={`ipod-frame-${f}`}
            at={at}
            onCall={() => {
              setSrc(spinSrc(f));
            }}
            onReverseCall={() => {
              setSrc(spinSrc(f));
            }}
            disabled={false}
          />
        );
      })}
      <Animation
        tween={{
          target: ref,
          start: 0,
          end: lastFrame.end,
          from: { top: "-100%" },
        }}
      />
      <div className={styles.container}>
        <Image
          ref={ref}
          src={src}
          alt="Spinning ipod"
          fill={true}
          className={`image ${styles.ipod}`}
          priority
        />
      </div>
      <Animation
        tween={{
          target: plugRef,
          start: lastFrame.end,
          end: 80,
          from: { top: "-100%" },
        }}
      />
      <img
        ref={plugRef}
        src={"/plug.png"}
        alt="Aux plug"
        className={`image ${styles.plug}`}
      />
    </>
  );
}

function PreloadImages() {
  return (
    <Head>
      {ipodFrames.map((f) => (
        <link rel="preload" href={spinSrc(f)} as="image" key={`preload-${f}`} />
      ))}
    </Head>
  );
}

export default function Home() {
  return (
    <main className="">
      <PreloadImages />
      <Root>
        <Pin
          childHeight={"100vh"}
          pinSpacerHeight={`${totalHeight / 2}vh`}
          top={0}
        >
          <SpinningIpod />
        </Pin>
      </Root>
    </main>
  );
}
