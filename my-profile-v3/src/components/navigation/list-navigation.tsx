"use client";

import {
  aboutID,
  contactID,
  experienceID,
  homeID,
  portfolioID,
  skillsID,
} from "@/shared/constants";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { FC } from "react";
import {
  ICAbout,
  ICExperience,
  ICGears,
  ICHome,
  ICMail,
  ICPortofolio,
} from "../../../public/images";
import { MenuItem } from "./menu-item";

const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const ListNavigation: FC<{ onChoose?: () => void }> = ({ onChoose }) => {
  const t = useTranslations("Home");

  const menus: Array<{ id: string; title: string; icon: React.ElementType }> = [
    {
      id: homeID,
      title: t("home"),
      icon: ICHome,
    },
    {
      id: aboutID,
      title: t("about"),
      icon: ICAbout,
    },
    {
      id: experienceID,
      title: t("experience"),
      icon: ICExperience,
    },
    {
      id: skillsID,
      title: t("skills"),
      icon: ICGears,
    },
    {
      id: portfolioID,
      title: t("portofolio"),
      icon: ICPortofolio,
    },
    {
      id: contactID,
      title: t("contact"),
      icon: ICMail,
    },
  ];

  return (
    <motion.ul
      variants={variants}
      className="flex flex-col gap-8 p-4 h-full mt-[40%] pl-8"
    >
      {menus.map((item, i) => (
        <MenuItem key={i} {...item} onChoose={onChoose} />
      ))}
    </motion.ul>
  );
};
