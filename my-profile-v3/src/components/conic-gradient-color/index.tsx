"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const ConicGradientPointer = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 40 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    setMounted(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        position: "fixed",
        width: 900,
        height: 900,
        left: -450,
        top: -450,
        pointerEvents: "none",
        background: `
          conic-gradient(
            from 180deg at 50% 50%,
            #6d6d6d,
            #5d5d5d,
            #4f4f4f,
            #454545
          )
        `,
        borderRadius: "50%",
        opacity: 0.25,
        filter: "blur(120px)",
        zIndex: 50,
      }}
    />
  );
};
