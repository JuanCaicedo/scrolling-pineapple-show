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
import IntroScene from "@/scenes/IntroScene";
import IpodScene from "@/scenes/IpodScene";
import Spin from "@/scenes/Spin";
import DanceScene from "@/scenes/DanceScene";
import StealScene from "@/scenes/StealScene";
import LightsOutScene from "@/scenes/LightsOutScene";
import AngryScene from "@/scenes/AngryScene";
import TunnelScene from "@/scenes/TunnelScene";
import OutTunnelScene from "@/scenes/OutTunnelScene";

export default function Home() {
  return (
    <main className="">
      <IntroScene />
      <IpodScene />
      <Spin />
      <DanceScene />
      <StealScene />
      <LightsOutScene />
      <AngryScene />
      <TunnelScene />
      <OutTunnelScene />
    </main>
  );
}
