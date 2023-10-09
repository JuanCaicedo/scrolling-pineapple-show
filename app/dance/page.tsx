"use client";

import { Pin, Root } from "@bsmnt/scrollytelling";
import Image from "next/image";
import styles from "./page.module.css";

export default function Dance() {
    return (
        <Root start="top top" end="bottom bottom" scrub={2}>
            <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
                <img
                    src="/dance-pineapple.png"
                    alt="Dancing pineapple"
                    className={`${styles["dancing-pineapple"]} image-fixed`}
                />
                <img
                    src="/dance-strawberry.png"
                    alt="Dancing strawberry"
                    className={`${styles["dancing-strawberry"]} image-fixed`}
                />
                <img
                    src="/dance-avocado.png"
                    alt="Dancing avocado"
                    className={`${styles["dancing-avocado"]} image-fixed`}
                />
                <img
                    src="/dance-orange.png"
                    alt="Dancing orange"
                    className={`${styles["dancing-orange"]} image-fixed`}
                />
                <img
                    src="/dance-pepper.png"
                    alt="Dancing pepper"
                    className={`${styles["dancing-pepper"]} image-fixed`}
                />
                <img
                    src="/dance-avocado.png"
                    alt="Dancing avocado"
                    className={`${styles["dancing-avocado"]} image-fixed`}
                />
            </Pin>
        </Root>
    );
}
