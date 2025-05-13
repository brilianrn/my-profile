"use client";

import { AppLayout, Topbar } from "@/components";
import styles from "@/shared/styles/packages/dashboard.module.css";
import classNames from "clsx";
import { useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import {
  ICAbout,
  ICExperience,
  ICGears,
  ICHome,
  ICPortofolio,
  ICStars,
} from "../../../../public/images";
import { About, Experience, Home, Portfolio, Skill } from "../components";

const DashboardView = () => {
  const t = useTranslations("Home");

  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const homeRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const portfolioRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
  const sklillsRef = useRef<HTMLDivElement>(null!);
  const experienceRef = useRef<HTMLDivElement>(null!);

  const homeID = "home";
  const aboutID = "about";
  const portfolioID = "portfolio";
  const contactID = "contact";
  const skillsID = "skills";
  const experienceID = "experience";

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="main-bg">
      <AppLayout
        className={classNames([
          "overflow-x-hidden overflow-y-auto h-full w-full relative scroll-container",
        ])}
      >
        {/* <motion.div
          id="scroll-indicator"
          className="bg-gradient-to-r from-orange-default via-dark-950 to-orange-default rounded-full h-2 fixed bottom-0 left-0 right-0 origin-top"
          style={{
            scaleX: y,
          }}
        /> */}
        <Topbar
          sections={[
            {
              headerID: homeID,
              headerTitle: t("home"),
              headerRef: homeRef,
              headerIcon: ICHome,
            },
            {
              headerID: aboutID,
              headerTitle: t("about"),
              headerRef: aboutRef,
              headerIcon: ICAbout,
            },
            {
              headerID: experienceID,
              headerTitle: t("experience"),
              headerRef: experienceRef,
              headerIcon: ICExperience,
            },
            {
              headerID: skillsID,
              headerTitle: t("skills"),
              headerRef: sklillsRef,
              headerIcon: ICGears,
            },
            {
              headerID: portfolioID,
              headerTitle: t("portofolio"),
              headerRef: portfolioRef,
              headerIcon: ICPortofolio,
            },
            // {
            //   headerID: contactID,
            //   headerTitle: t("contact"),
            //   headerRef: contactRef,
            //   headerIcon: ICMail,
            // },
          ]}
        />
        <Home
          ref={homeRef}
          id={homeID}
          className={classNames([styles.section, styles.home])}
          y={y}
        />
        <About
          ref={aboutRef}
          id={aboutID}
          className={classNames([styles.section, styles.about])}
          y={y}
        />
        <div className="relative">
          <Experience
            ref={experienceRef}
            id={experienceID}
            className={classNames([styles.section])}
            y={y}
          />
          <Image
            priority
            src={ICStars}
            alt="brilianrn icon stars"
            width={100}
            height={100}
            className="absolute bottom-[-270px] right-0 z-0 w-screen h-[25em] object-cover opacity-10"
          />
        </div>
        <Skill
          ref={sklillsRef}
          id={skillsID}
          className={classNames([styles.section])}
          y={y}
        />
        <Portfolio
          ref={portfolioRef}
          id={portfolioID}
          className={classNames([styles.section])}
          y={y}
        />
        {/* <Contact
          ref={contactRef}
          id={contactID}
          className={classNames([styles.section])}
          y={y}
        /> */}
      </AppLayout>
    </div>
  );
};

export default DashboardView;
