"use client";

import classNames from "clsx";
import { motion, SVGMotionProps } from "framer-motion";

interface PathProps extends SVGMotionProps<SVGPathElement> {}

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
  className?: string;
  isOpen?: boolean;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({
  toggle,
  className,
  isOpen = false,
}) => (
  <button className={className} onClick={toggle}>
    <div
      className={classNames([
        isOpen ? "left-[53%]" : "left-[52%]",
        "absolute top-[53%] transform -translate-x-1/2 -translate-y-1/2",
      ])}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </div>
  </button>
);
