"use client";

import { motion, Variants } from "framer-motion";

const variantsDetail: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  title,
  icon: Icon,
  id,
  onChoose,
}: {
  title: string;
  icon: React.ElementType;
  id: string;
  onChoose?: () => void;
}) => {
  return (
    <motion.li
      variants={variantsDetail}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-start"
    >
      <Icon className="w-6 h-6 text-primary-default" />
      <a
        href={`#${id}`}
        onClick={onChoose}
        className="ml-4 text-lg font-semibold text-primary-default"
      >
        {title}
      </a>
    </motion.li>
  );
};
