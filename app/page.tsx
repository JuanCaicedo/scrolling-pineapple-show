"use client";
import { Animation, Pin, Root, Waypoint } from "@bsmnt/scrollytelling";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const totalFrames = 9;

const frames = (frame: number): number => frame * (100 / totalFrames);

const pineappleFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const spinSrc = (frame: number) => `/spin-${frame}.png`;

function SpinningPineapple({ startFrame }: { startFrame: number }) {
  const [src, setSrc] = useState(spinSrc(pineappleFrames[0]));

  return (
    <>
      {pineappleFrames.map((f) => (
        <Waypoint
          key={`pineapple-frame-${f}`}
          at={frames(f)}
          onCall={() => {
            setSrc(spinSrc(f));
          }}
          onReverseCall={() => {
            setSrc(spinSrc(f));
          }}
          disabled={false}
        />
      ))}
      <Image
        src={src}
        alt="Spinning pineapple"
        width={300}
        height={240}
        priority
      />
    </>
  );
}

export default function Home() {
  return (
    <main className="">
      <Root>
        <div>
          <Pin childHeight={"0vh"} pinSpacerHeight={"2200vh"} top={0}>
            <div className={styles.frame1}>
              <SpinningPineapple startFrame={0} />
            </div>
          </Pin>
          <Pin childHeight={"100vh"} pinSpacerHeight={"100vh"} top={0}>
            <div className={styles.frame2}>
              <SpinningPineapple startFrame={9} />
            </div>
          </Pin>
        </div>
      </Root>
    </main>
  );
}
