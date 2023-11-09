import { useEffect, useState } from "react";

export default function DetectScroll() {
  const [speed, setSpeed] = useState(0);
  let lastPos;

  const measureSpeed = () => {
    const newPos = window.scrollY;
    if (lastPos != null) {
      // && newPos < maxScroll
      const delta = newPos - lastPos;
      const ratio = delta / window.innerHeight;
      const percent = ratio * 100;
      setSpeed(percent);
    }
    lastPos = newPos;
  };

  useEffect(() => {
    setInterval(measureSpeed, 100);
    /* window.onscroll = onScroll; */
  }, []);

  return (
    <div className={"speed"}>
      <style jsx>{`
        .speed {
          position: fixed;
          color: cyan;
          z-index: 1;
          top: 50%;
          left: 50%;
        }
      `}</style>
      <div>{speed}</div>
    </div>
  );
}
