import { useRef, useEffect, useState } from "react";

import styles from "./index.module.css";

export default function Panel({ children }: { children?: ReactNode }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [widthUnit, setWidthUnit] = useState(1);
  const [heightUnit, setHeightUnit] = useState(1);

  useEffect(() => {
    if (!panelRef || !panelRef.current) {
      return;
    }
    const _widthUnit = panelRef.current.clientWidth / 100;
    setWidthUnit(_widthUnit);

    const _heightUnit = panelRef.current.clientHeight / 100;
    setHeightUnit(_heightUnit);
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          --width-unit: ${widthUnit};
          --height-unit: ${heightUnit};
        }
      `}</style>

      <div className={styles["panel-container"]} ref={panelRef}>
        <div className={styles["panel"]}>{children}</div>
      </div>
    </>
  );
}
