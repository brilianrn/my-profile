"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BrilianrnHome } from "../../../../../public/images";
import { SectionProps } from "../components";
import { Rubix } from "./rubix";

const ConicGradientPointer = dynamic(
  () => import("@/components/conic-gradient-color"),
  { ssr: false }
);

export const Home: FC<SectionProps> = ({ ...props }) => {
  const t = useTranslations("Home");

  const startDate = new Date(2021, 0, 1);
  const endDate = new Date();
  const difference = endDate.getTime() - startDate.getTime();
  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 30 * 12));

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div {...props}>
      <ConicGradientPointer />

      <motion.div
        className="flex flex-col gap-4 mt-12"
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <motion.p className="uppercase text-white tracking-widest text-xl">
          {t("hi")}
        </motion.p>
        <motion.p className="text-white tracking-wider font-semibold text-4xl">
          {t("desc")
            .split(/(Full Stack Developer)/g)
            .map((part, index) =>
              part === "Full Stack Developer" ? (
                <React.Fragment key={index}>
                  <br />
                  <span className="text-orange-400 font-extrabold leading-10">
                    {part}
                  </span>
                </React.Fragment>
              ) : (
                part
              )
            )}
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6 }}
      >
        <Link
          href={"#contact"}
          className="text-white group/link flex items-center justify-center w-fit mx-auto tracking-wider bg-primary-default rounded-md px-2 py-1"
        >
          <motion.p className="group-hover/link:tracking-[5px] transition-all duration-200">
            Let` s Collaborate
          </motion.p>
          <ArrowDown className="size-4 rotate-[225deg] transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <Image
          src={BrilianrnHome}
          alt="Brilian Rachmad Nurwachidin, A.Md.T"
          width={250}
          height={250}
          priority
          className="rounded-full "
        />
      </motion.div>

      <motion.div
        className="text-white absolute lg:bottom-4 bottom-0 lg:!right-5 lg:left-auto left-0 lg:w-fit w-full flex flex-col gap-2 bg-gradient-to-b from-transparent to-dark-950"
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="block border-b border-primary-400 pb-2 lg:px-0 px-4">
          <div className="text-5xl flex justify-normal items-center text-left w-full gap-2">
            <p className="font-bold text-orange-default">{years}</p>
            <div className="flex flex-col gap-1">
              <p className="text-2xl leading-[12px] text-primary-400">+</p>
              <p className="text-xs leading-[12px]">years of experience</p>
            </div>
          </div>
          <p className="text-left text-sm leading-3">
            in Fulltime & Freelance Work
          </p>
        </div>
        <p className="uppercase max-w-72 lg:px-0 px-4 lg:pb-0 pb-4 font-semibold text-orange-default text-left tracking-wider">
          Building scalable & efficient applications
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-0 z-0 lg:block hidden"
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Rubix />
      </motion.div>
    </div>
  );
};
