import { useRef, useEffect, useState, ReactNode } from "react";
import { Pin, Root } from "@bsmnt/scrollytelling";

import styles from "./index.module.css";

export default function Panel({
  children,
  className = "",
  pinSpacerHeight = `1000vh`,
  skipSpacer,
}: {
  children?: ReactNode;
  className?: string;
  pinSpacerHeight?: string;
  skipSpacer?: boolean;
}) {
  return (
    <>
      {!skipSpacer && <div className={styles["spacer"]} />}
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
