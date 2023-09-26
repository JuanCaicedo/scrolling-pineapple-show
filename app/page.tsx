"use client";
import { Animation, Pin, Root, Waypoint } from "@bsmnt/scrollytelling";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const totalFrames = 8;

const frames = (frame: number): number => frame * (100 / totalFrames);

function SpinningPineapple({
  startFrame,
  endFrame,
  image,
  startShowing = false,
}: {
  startFrame: number;
  endFrame: number;
  image: number;
  startShowing: boolean;
}) {
  const [show, setShow] = useState(startShowing);

  return (
    <>
      <Waypoint
        at={frames(startFrame)}
        onCall={() => {
          setShow(true);
        }}
        disabled={false}
      />
      {show && (
        <Image
          src={`/spin-${image}.png`}
          alt="Spinning pineapple"
          width={300}
          height={240}
          priority
        />
      )}
      <Waypoint
        at={frames(endFrame)}
        onCall={() => setShow(false)}
        disabled={false}
      />
    </>
  );
}

export default function Home() {
  return (
    <main className="">
      <Root>
        <div>
          <Pin childHeight={"100vh"} pinSpacerHeight={"300vh"} top={0}>
            <div className={styles.frame1}>
              <SpinningPineapple
                startFrame={0}
                endFrame={1}
                image={1}
                startShowing
              />
              <SpinningPineapple startFrame={1} endFrame={2} image={2} />
              <SpinningPineapple startFrame={2} endFrame={3} image={3} />
              <SpinningPineapple startFrame={3} endFrame={4} image={4} />
              <SpinningPineapple startFrame={4} endFrame={5} image={5} />
              <SpinningPineapple startFrame={5} endFrame={6} image={6} />
              <SpinningPineapple startFrame={6} endFrame={7} image={7} />
              <SpinningPineapple startFrame={7} endFrame={8} image={8} />
            </div>
          </Pin>
          <Pin childHeight={10} pinSpacerHeight={"100vh"} top={0}>
            <div className={styles.frame2}>
              <SpinningPineapple startFrame={0} endFrame={1} image={1} />
              <SpinningPineapple startFrame={1} endFrame={2} image={2} />
              <SpinningPineapple startFrame={2} endFrame={3} image={3} />
              <SpinningPineapple startFrame={3} endFrame={4} image={4} />
              <SpinningPineapple startFrame={4} endFrame={5} image={5} />
              <SpinningPineapple startFrame={5} endFrame={6} image={6} />
              <SpinningPineapple startFrame={6} endFrame={7} image={7} />
              <SpinningPineapple startFrame={7} endFrame={8} image={8} />
            </div>
          </Pin>
        </div>
      </Root>
    </main>
  );
}
