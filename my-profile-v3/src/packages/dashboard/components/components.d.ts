import { MotionValue } from "framer-motion";
import { RefObject } from "react";

export interface SectionProps {
  className?: string;
  ref: RefObject<HTMLDivElement>;
  id: string;
  y: MotionValue<string>;
}
