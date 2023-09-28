// @ts-nocheck
"use client";
import { Animation, Pin, Root, Waypoint } from "@bsmnt/scrollytelling";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Head from "next/head";

const totalFrames = 9;
const totalHeight = 3600;

const frames = (frame: number): number => frame * (100 / totalFrames);

const pineappleFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const spinSrc = (frame: number) => `/spin-${frame}.png`;

function SpinningPineapple({ startFrame }: { startFrame: number }) {
  const [src, setSrc] = useState(spinSrc(pineappleFrames[0]));

  return (
    <>
      {pineappleFrames.map((f) => {
        const at = frames(f - 1);
        return (
          <Waypoint
            key={`pineapple-frame-${f}`}
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
      <div className={styles.container}>
        <Image
          src={src}
          alt="Spinning pineapple"
          fill={true}
          className={styles.image}
          priority
        />
      </div>
    </>
  );
}

function PreloadImages() {
  return (
    <Head>
      {pineappleFrames.map((f) => (
        <link rel="preload" href={spinSrc(f)} as="image" key={
          `preload-${f}`
        } />
      ))
      }
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
          <div className={styles.frame1}>
            <SpinningPineapple startFrame={0} />
          </div>
        </Pin>
      </Root>
      <Root>
        <Pin
          childHeight={"100vh"}
          pinSpacerHeight={`${totalHeight / 2}vh`}
          top={0}
        >
          <div className={styles.frame2}>
            <SpinningPineapple />
          </div>
        </Pin>
      </Root>
    </main>
  );
}
