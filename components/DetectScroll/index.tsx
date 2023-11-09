import { useEffect, useState } from "react";

export default function DetectScroll() {
  const [speed, setSpeed] = useState(0.2);
  let lastPos;

  const measureSpeed = () => {
    const newPos = window.scrollY;
    if (lastPos != null) {
      // && newPos < maxScroll
      const delta = newPos - lastPos;
      const _speed = Math.abs(delta / window.innerHeight);
      setSpeed(_speed);
    }
    lastPos = newPos;
  };

  useEffect(() => {
    setInterval(measureSpeed, 100);
    /* window.onscroll = onScroll; */
  }, []);

  const widthRaw = speed * 200;
  const width = `${widthRaw}vw`;
  const color = speed > 0.2 ? "red" : "green";

  return (
    <div className={"speed"}>
      <style jsx>{`
        .speed {
          position: fixed;
          height: 40px;
          width: ${width};
          background-color: ${color};
          z-index: 1;
          top: 0;
          transform: translateX(-50%);
          left: 50%;
        }
      `}</style>
    </div>
  );
}
