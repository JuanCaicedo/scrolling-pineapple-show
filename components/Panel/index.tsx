import { useRef, useEffect, useState, ReactNode } from "react";

import styles from "./index.module.css";

export default function Panel({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={styles["panel-container"]}>
      <div className={`${className} ${styles["panel"]}`}>{children}</div>
    </div>
  );
}
