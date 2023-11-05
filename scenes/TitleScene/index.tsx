import Panel from "@/components/Panel";
import styles from "./index.module.css";

export default function TitleScene() {
  return (
    <Panel skipSpacer>
      <div className={styles["title-text"]}>
        <div className={styles["the"]}>The</div>
        <div className={styles["scrolling"]}>Scrolling</div>
        <div className={styles["pineapple"]}>Pineapple</div>
        <div className={styles["show"]}>Show</div>
      </div>
    </Panel>
  );
}
