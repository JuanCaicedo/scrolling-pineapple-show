// @ts-nocheck
"use client";
import { Animation, Parallax, Root, Pin } from "@bsmnt/scrollytelling";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

function PreloadImages() {
  return (
    <Head>
      <link rel="preload" href={"/tree-far.png"} as="image" />
    </Head>
  );
}

export default function Trees() {
  return (
    <main className="">
      <PreloadImages />
      <Root start="top bottom">
        <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
          <Animation
            tween={{
              start: 0,
              end: 100,
              from: { top: "100vh", right: "100vh" },
              to: { top: 0, right: 0, rotation: 800, ease: "linear" },
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
          <Parallax
            tween={{
              start: 0,
              end: 100,
              movementX: { value: -100, unit: "px" },
            }}
          >
            <Image
              alt="Trees far"
              src={"/tree-far.png"}
              width={100}
              height={100}
              className={`${styles.image} ${styles.treeFar}`}
            />
          </Parallax>
          <Parallax
            tween={{
              start: 0,
              end: 100,
              movementX: { value: -200, unit: "px" },
            }}
          >
            <Image
              alt="Trees far"
              src={"/tree-far.png"}
              width={200}
              height={200}
              className={`${styles.image} ${styles.treeMid}`}
            />
          </Parallax>
          <Parallax
            tween={{
              start: 0,
              end: 100,
              movementX: { value: -300, unit: "px" },
            }}
          >
            <Image
              alt="Trees far"
              src={"/tree-far.png"}
              width={300}
              height={300}
              className={`${styles.image} ${styles.treeClose}`}
            />
          </Parallax>
        </Pin>
      </Root>
    </main>
  );
}
