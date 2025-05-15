"use client";

import { useAnimationFrame } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import {
  ICAdonisJs,
  ICMongoDB,
  ICNextJs,
  ICNodeJs,
  ICPostgreSQL,
  ICReactJs,
} from "../../../../../public/images";

export const Rubix = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 300;
    const y = (1 + Math.sin(t / 1000)) * -200;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div style={{ perspective: "1000px" }} className="w-[200px] h-[200px] z-10">
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full"
        ref={ref}
      >
        <div
          className="absolute w-full h-full bg-orange-default"
          style={{ transform: "rotateY(0deg) translateZ(100px)" }}
        >
          <Image
            priority
            alt="brilianrn icon nextjs"
            src={ICNextJs}
            height={200}
            width={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute w-full h-full bg-primary-default p-8"
          style={{ transform: "rotateY(90deg) translateZ(100px)" }}
        >
          <Image
            priority
            alt="brilianrn icon nodejs"
            src={ICNodeJs}
            height={200}
            width={200}
            className="w-fit h-fit object-cover"
          />
        </div>
        <div
          className="absolute w-full h-full bg-red-500 p-8"
          style={{ transform: "rotateY(180deg) translateZ(100px)" }}
        >
          <Image
            priority
            alt="brilianrn icon reactjs"
            src={ICReactJs}
            height={200}
            width={200}
            className="w-fit h-fit object-cover"
          />
        </div>
        <div
          className="absolute w-full h-full bg-green-500 p-8"
          style={{ transform: "rotateY(-90deg) translateZ(100px)" }}
        >
          <ICAdonisJs className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute w-full h-full bg-yellow-500 p-8"
          style={{ transform: "rotateX(90deg) translateZ(100px)" }}
        >
          <Image
            priority
            alt="brilianrn icon postgresql"
            src={ICPostgreSQL}
            height={200}
            width={200}
            className="w-fit h-fit object-cover"
          />
        </div>
        <div
          className="absolute w-full h-full bg-white"
          style={{ transform: "rotateX(-90deg) translateZ(100px)" }}
        >
          <Image
            priority
            alt="brilianrn icon mongodb"
            src={ICMongoDB}
            height={200}
            width={200}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
    // <div style={{ perspective: "200px" }} className="w-[200px] h-[200px]">
    //   <div
    //     className="size-20 transform-3d"
    //     ref={ref}
    //     style={{ transformStyle: "preserve-3d" }}
    //   >
    //     <div className="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
    //     <div className="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
    //     <div className="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
    //     <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
    //     <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
    //     <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
    //   </div>
    // </div>
  );
};
