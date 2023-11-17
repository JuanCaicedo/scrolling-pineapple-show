"use client";
import { useEffect, useRef } from "react";

export default function UseRef() {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    console.log("ref.current.width", ref?.current?.width);
    console.log("ref.current.height", ref?.current?.height);
  }, []);

  return <img src="/pineapple-run-1.png" className="demo-image" ref={ref} />;
}
