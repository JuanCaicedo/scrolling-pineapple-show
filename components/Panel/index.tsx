import { useRef, useEffect, useState, ReactNode } from "react";
import { Pin, Root } from "@bsmnt/scrollytelling";

import styles from "./index.module.css";

export default function Panel({
  children,
  className = "",
  pinSpacerHeight = `3200vh`,
}: {
  children?: ReactNode;
  className?: string;
  pinSpacerHeight?: string;
}) {
  return (
    <>
      <div className={styles["spacer"]} />
      <Root>
        <Pin childHeight={"100vh"} pinSpacerHeight={pinSpacerHeight} top="0">
          <div className={styles["panel-container"]}>
            <div className={`${className} ${styles["panel"]}`}>{children}</div>
          </div>
        </Pin>
      </Root>
    </>
  );
}
