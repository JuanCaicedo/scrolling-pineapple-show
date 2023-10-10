"use client";
import { Pin, Root, Waypoint } from "@bsmnt/scrollytelling";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Head from "next/head";

const totalFrames = 16;
const totalHeight = 3600;

const frames = (frame: number): number => frame * (100 / totalFrames);

const ipodFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const ipodFrames = [1,2]

const spinSrc = (frame: number) => `/ipod-${frame}.png`;

function SpinningIpod() {
  const [src, setSrc] = useState(spinSrc(ipodFrames[0]));

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
      <div className={styles.container}>
        <Image
          src={src}
          alt="Spinning ipod"
          fill={true}
          className={"image"}
          priority
        />
      </div>
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
