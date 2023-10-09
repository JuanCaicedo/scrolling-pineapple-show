// @ts-nocheck
"use client";
import {
  Pin,
  Animation,
  Parallax,
  Root,
  Waypoint,
  ImageSequenceCanvas,
} from "@bsmnt/scrollytelling";
import Image from "next/image";
import { useEffect, useState, useRef, ReactNode } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import IntroScene from "@/scenes/IntroScene";

const totalFrames = 9;
const totalHeight = 3600;

const frames = (frame: number): number => frame * (100 / totalFrames);

const pineappleFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const spinSrc = (frame: number) => `/spin-${frame}.png`;

function PreloadImages() {
  return (
    <Head>
      {[].map((f) => (
        <link rel="preload" href={spinSrc(f)} as="image" key={`preload-${f}`} />
      ))}
    </Head>
  );
}

export default function Home() {
  return (
    <main className="">
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
    </main>
  );
}
