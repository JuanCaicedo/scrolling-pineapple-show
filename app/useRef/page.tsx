"use client";
import { useEffect, useRef } from "react";

export default function UseRef() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;
    console.log("imgRef.current.width", imgRef.current.width);
    console.log("imgRef.current.height", imgRef.current.height);
  }, []);

  return <img ref={imgRef} src="/pineapple-run-1.png" className="demo-image" />;
}
