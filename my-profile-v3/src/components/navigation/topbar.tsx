"use client";

import sxNavigation from "@/shared/styles/packages/navigation.module.css";
import { nearestIndex } from "@/shared/utils";
import classNames from "clsx";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Brilianrn, ICThreeLines } from "../../../public/images";
import { TopbarProps } from "./navigation";

export const Topbar: FC<TopbarProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const index = nearestIndex(
        window.scrollY,
        sections,
        0,
        sections.length - 1
      );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classNames([sxNavigation.topbar, "z-0"])}>
      <div className="absolute h-full w-full top-0 left-0 group-hover:scale-100 md:scale-0 scale-100 transition-all duration-300 bg-gray-300 shadow-lg z-0" />
      <Image
        src={Brilianrn}
        alt="Brilian Rachmad Nurwachidin"
        height={50}
        width={50}
        className="md:scale-0 scale-100 group-hover:scale-100 transition-all duration-500 cursor-pointer"
      />
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
      <ICThreeLines className="w-6 h-6 md:scale-0 scale-100 group-hover:scale-100 transition-all duration-500 cursor-pointer text-primary-default" />
    </div>
  );
};
