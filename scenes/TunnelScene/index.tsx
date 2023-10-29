"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, useTexture } from "@react-three/drei";
import * as React from "react";
import * as THREE from "three";
import styles from "./index.module.css";
import Image from "next/image";

import {
  Pin,
  Root,
  Animation,
  Waypoint,
  ImageSequenceCanvas,
} from "@bsmnt/scrollytelling";
import { useRef } from "react";
import Panel from "@/components/Panel";

import {
  ImageSequenceCanvasController,
  findClosestFrame,
} from "../../app/utils/ImageSequence";
import { getStaggeredTimeline } from "../../app/utils/getStaggeredTimeline";

const getPointsPath = () => {
  //Array of points
  var points = [
    [10, 89, 0],
    [50, 88, 10],
    [76, 139, 20],
    [126, 141, 12],
    [150, 112, 8],
    [157, 73, 0],
    [180, 44, 5],
  ];

  //Convert the array of points into vertices
  for (var i = 0; i < points.length; i++) {
    var x = points[i][0];
    var y = points[i][2];
    var z = points[i][1];
    // @ts-ignore
    points[i] = new THREE.Vector3(x, y, z);
  }
  //Create a path from the points
  // @ts-ignore
  var path = new THREE.CatmullRomCurve3(points);
  //path.curveType = 'catmullrom';
  path.tension = 0.5;

  return path;
};

var p1, p2;
const tubePath = getPointsPath();
const progress = { value: 0 };

const turnSrc = (frame: number) => {
  if (frame < 10) {
    return `/racoon-turn-${frame}.png`;
  }

  const remainder = frame - 10;
  return `/racoon-run-behind-${remainder}.png`;
};

const Tube = () => {
  const materialRef = React.useRef();
  const texture = useTexture("/texture.png");

  useFrame(() => {
    if (materialRef.current) {
      // @ts-ignore
      materialRef.current.uniforms.uTime.value += 0.01;
    }
  });

  return (
    <mesh>
      <tubeGeometry args={[tubePath, 300, 4, 64, false]} />

      <shaderMaterial
        side={THREE.BackSide}
        transparent
        uniforms={{
          uTexture: {
            value: texture,
          },
          uTime: {
            value: 0,
          },
        }}
        vertexShader={`
          varying vec2 vUv;

          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

            vUv = uv;
          }
        `}
        fragmentShader={`
          vec2 rotateUV(vec2 uv, vec2 pivot, float angle) {
            vec2 offset = uv - pivot;
            float s = sin(angle);
            float c = cos(angle);
            vec2 rotatedOffset = vec2(offset.x * c - offset.y * s, offset.x * s + offset.y * c);
            return rotatedOffset + pivot;
          }

          vec2 invertUV(vec2 uv, bool invertX, bool invertY) {
            if (invertX) {
              uv.x = 1.0 - uv.x;
            }
            if (invertY) {
              uv.y = 1.0 - uv.y;
            }
            return uv;
          }

          varying vec2 vUv;

          uniform sampler2D uTexture;
          uniform float uTime;

          void main() {
            vec4 color = vec4(1.0, 0.0, 0.0, 1.0);

            float time = uTime;
            vec2 uv = vUv;
            vec2 repeat = vec2(3.0, 128.0);

            uv = invertUV(uv, false, true);
            uv = rotateUV(uv, vec2(0.5, 0.5), radians(90.0));
            uv.x += sin((uv.y * 15.0) + time) * 0.15;
            uv = fract(uv * repeat);

            color = texture2D(uTexture, uv);


            gl_FragColor = color;
          }
        `}
        // @ts-ignore
        ref={materialRef}
      />
    </mesh>
  );
};

export default function TunnelScene() {
  const camRef = React.useRef();

  // @ts-ignore
  const update = React.useCallback((p) => {
    if (!camRef.current) return;

    const lookAtOffset = 0.01;

    const progress = THREE.MathUtils.mapLinear(p, 0, 1, 0, 1 - lookAtOffset);

    p1 = tubePath.getPointAt(progress);
    p2 = tubePath.getPointAt(progress + lookAtOffset);

    // @ts-ignore
    camRef.current.position.copy(p1);
    // @ts-ignore
    camRef.current.lookAt(p2);
  }, []);

  const racoonRef = useRef<HTMLCanvasElement>(null);
  const controllerRef = useRef<ImageSequenceCanvasController>(null);

  React.useEffect(() => {
    controllerRef.current?.preload(1, 3);
    controllerRef.current?.draw(1);
  }, [controllerRef, racoonRef]);

  const turnTimeline = getStaggeredTimeline({
    start: 0,
    end: 30,
    chunks: 3,
    overlap: 0,
  });
  const runTimeline = getStaggeredTimeline({
    start: 0,
    end: 100,
    chunks: 30,
    overlap: 0,
  });
  const inTunnelRef = useRef<HTMLImageElement>(null);
  const outTunnelRef = useRef<HTMLImageElement>(null);

  return (
    <Root start="top top" end="bottom bottom" scrub={2}>
      <Pin childHeight={"100vh"} pinSpacerHeight={`800vh`}>
        <Panel>
          <div className={`${styles.container} test-juan`}>
            <Animation
              tween={{
                start: turnTimeline[turnTimeline.length - 1].start,
                end: 50,
                target: inTunnelRef,
                to: {
                  transform: "scale(10)",
                  ease: "linear",
                },
              }}
            />
            <Image
              ref={inTunnelRef}
              src="/tunnel-inside.png"
              fill={true}
              alt="inside tunnel"
              className={`${styles["tunnel-inside"]}`}
            />
            <Canvas>
              <Animation
                tween={{
                  start: turnTimeline[turnTimeline.length - 1].start,
                  end: 100,
                  target: progress,
                  to: {
                    value: 1,
                    onUpdate: (s) => update(progress.value),
                  },
                }}
              />

              <PerspectiveCamera
                position={[0, 0, 20]}
                makeDefault
                ref={(ref) => {
                  if (!ref) return;

                  // @ts-ignore
                  camRef.current = ref;
                  update(0);
                }}
              />

              <Tube />
            </Canvas>

            <Animation
              tween={{
                start: 30,
                end: 100,
                target: racoonRef,
                to: {
                  top: "40%",
                  left: "0%",
                  transform: "scale(0.50)",
                  onUpdate: function () {
                    const point = this.progress() * 100;
                    const closest = findClosestFrame(runTimeline, point);
                    const frame = (closest % 3) + 1;
                    const offset = frame + 10;
                    controllerRef.current?.draw(offset);
                  },
                },
              }}
            />
            <Animation
              tween={{
                start: 0,
                end: 30,
                target: racoonRef,
                to: {
                  left: "0%",
                  top: "50%",
                  onUpdate: function () {
                    const closest = findClosestFrame(turnTimeline, this.time());
                    controllerRef.current?.draw(closest + 1);
                  },
                },
              }}
            />

            <ImageSequenceCanvas
              className={`${styles["canvas"]} ${styles["racoon"]} image`}
              controllerRef={controllerRef}
              ref={racoonRef}
              getFrameSrc={(frame) => {
                const src = turnSrc(frame);
                return src;
              }}
              width={2000}
              height={2000}
            />

            <Animation
              tween={{
                start: 70,
                end: 100,
                target: outTunnelRef,
                from: {
                  transform: "scale(0.25)",
                  ease: "linear",
                },
              }}
            />
            <Image
              ref={outTunnelRef}
              src="/outside-tunnel.png"
              fill={true}
              alt="outside tunnel"
              className={`${styles["tunnel-outside"]}`}
            />
            <div className={styles.background} />
          </div>
        </Panel>
      </Pin>
    </Root>
  );
}