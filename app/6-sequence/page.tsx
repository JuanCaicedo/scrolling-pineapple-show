"use client";
import { useRef, useState } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import "./styles.css";

export default function AnimationDemo() {
  const [src, setSrc] = useState("/pineapple-run-1.png");

  const imgRef = useRef<HTMLImageElement>(null);

  function chooseSrc(progress: number): string {
    if (progress < 0.1) {
      return "/pineapple-run-1.png";
    }
    if (progress < 0.2) {
      return "/pineapple-run-2.png";
    }
    if (progress < 0.3) {
      return "/pineapple-run-3.png";
    }
    if (progress < 0.4) {
      return "/pineapple-run-4.png";
    }
    if (progress < 0.5) {
      return "/pineapple-run-5.png";
    }
    if (progress < 0.6) {
      return "/pineapple-run-6.png";
    }
    return "/pineapple-run-1.png";
  }

  return (
    <Root>
      <Pin childHeight={"100vh"} pinSpacerHeight={"800vh"} top="0">
        <div className="demo-panel-container">
          <div className="demo-panel">
            <img ref={imgRef} src={src} className="demo-image" />
            <Animation
              tween={{
                target: imgRef,
                start: 0,
                end: 100,
                to: {
                  onUpdate: function () {
                    const progress = this.progress();
                    const newSrc = chooseSrc(progress);
                    if (newSrc !== src) {
                      setSrc(newSrc);
                    }
                  },
                },
              }}
            />

            <Animation
              tween={{
                target: imgRef,
                start: 0,
                end: 100,
                fromTo: [
                  {
                    left: "0cqw",
                  },
                  { left: "100cqw" },
                ],
              }}
            />
          </div>
        </div>
      </Pin>
    </Root>
  );
}
