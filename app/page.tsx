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
import Spin from "@/scenes/Spin";

export default function Home() {
  return (
    <main className="">
      <IntroScene />
      <Spin />
    </main>
  );
}
