"use client";
import { useRef } from "react";
import { Pin, Root, Animation } from "@bsmnt/scrollytelling";
import "./styles.css";

export default function Position() {
  return (
    <div className="relative-container">
      <img src="/pineapple-run-1.png" className="small-image pineapple" />
      <img src="/racoon-run-1.png" className="small-image racoon" />
    </div>
  );
}
