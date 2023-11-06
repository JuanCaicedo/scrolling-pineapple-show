"use client";
import {
  Pin,
  Root,
  Waypoint,
  ImageSequenceCanvas,
} from "@bsmnt/scrollytelling";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import TitleScene from "@/scenes/TitleScene";
import IntroScene from "@/scenes/IntroScene";
import IpodScene from "@/scenes/IpodScene";
import Spin from "@/scenes/Spin";
import DanceScene from "@/scenes/DanceScene";
import StealScene from "@/scenes/StealScene";
import AfterStealScene from "@/scenes/AfterStealScene";
import LightsOutScene from "@/scenes/LightsOutScene";
import AngryScene from "@/scenes/AngryScene";
import TunnelScene from "@/scenes/TunnelScene";
import OutTunnelScene from "@/scenes/OutTunnelScene";
import ParallaxInfiniteScene from "@/scenes/ParallaxInfiniteScene";

function DetectScroll() {
  let lastPos,
    newPos,
    timer,
    delta,
    delay = 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  useEffect(() => {
    window.onscroll = () => {
      newPos = window.scrollY;
      if (lastPos != null) {
        // && newPos < maxScroll
        delta = newPos - lastPos;
      }

      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
    };
  }, []);

  // listen to "scroll" event
}

export default function Home() {
  return (
    <main className="">
      <DetectScroll />
      <TitleScene />
      <IntroScene />
      <IpodScene />
      <Spin />
      <DanceScene />
      <StealScene />
      <LightsOutScene />
      <AfterStealScene />
      <AngryScene />
      <TunnelScene />
      <OutTunnelScene />
      <ParallaxInfiniteScene />
    </main>
  );
}
