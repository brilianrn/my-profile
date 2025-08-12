"use client";

import sxNavigation from "@/shared/styles/packages/navigation.module.css";
import { nearestIndex } from "@/shared/utils";
import classNames from "clsx";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Brilianrn } from "../../../public/images";
import { ListNavigation } from "./list-navigation";
import { MenuToggle } from "./menu-toggle";
import { TopbarProps } from "./navigation";

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 48px 44px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Topbar: FC<TopbarProps> = ({ sections, toggleMenu, isOpen }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    const handleScroll = () => {
      const scrollTop = scrollContainer?.scrollTop || 0;

      const index = nearestIndex(scrollTop, sections, 0, sections.length - 1);
      setActiveIndex(index);
    };

    scrollContainer?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={classNames([sxNavigation.topbar, "z-0"])}
    >
      <motion.div
        variants={sidebar}
        className="md:scale-0 scale-100 bg-white -top-2 left-0 h-screen absolute w-9/12 mt-2"
      >
        <div className="relative bg-red-300">
          <Image
            src={Brilianrn}
            alt="Brilian Rachmad Nurwachidin"
            height={40}
            width={40}
            className="group-hover:scale-100 transition-all duration-500 cursor-pointer absolute top-6 left-7"
          />
        </div>
        <ListNavigation onChoose={() => toggleMenu?.()} />
      </motion.div>
      <div className="relative bg-red-200 size-0 md:scale-0 scale-100" />
      <div
        className={classNames([
          sxNavigation["topbar-menu"],
          "shadow-lg group-hover:shadow-none gap-12 group-hover:gap-4",
        ])}
      >
        {sections.map(({ headerIcon: HeaderIcon, ...header }, index) => (
          <a
            key={index + header.headerID}
            className={classNames([
              activeIndex === index
                ? "font-bold !text-orange-400"
                : "hover:underline",
              "text-sm text-primary-default transition-all duration-300 ease-in-out uppercase flex justify-center gap-2 items-end",
            ])}
            href={`#${header.headerID}`}
          >
            <HeaderIcon className="size-6" />
            <p className="scale-0 group-hover:scale-100 transition-all duration-200 group-hover:relative absolute">
              {header.headerTitle}
            </p>
          </a>
        ))}
      </div>
      <MenuToggle
        isOpen={isOpen}
        toggle={toggleMenu ?? (() => {})}
        className="md:scale-0 scale-100 bg-white relative h-14 w-14 rounded-full mt-2"
      />
    </motion.div>
  );
};
