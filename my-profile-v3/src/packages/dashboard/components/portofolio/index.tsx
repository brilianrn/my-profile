"use client";

import { projectRoute } from "@/shared/constants";
import styles from "@/shared/styles/packages/dashboard.module.css";
import classNames from "clsx";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code2, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import {
  PTGoaPwa,
  PTGoaWeb,
  PTGposone,
  PTSportirenaOwner,
} from "../../../../../public/images";
import { SectionProps } from "../components";

const projects = [
  {
    title: "GoApotik PWA",
    role: "Frontend Engineer",
    description:
      "A mobile-first Progressive Web App designed for a seamless healthcare e-commerce experience with offline support.",
    tech: ["NextJS", "Mantine", "TailwindCSS", "ESLint", "Prettier"],
    link: "https://stgpwa.goapotik.com/",
    thumbnail: PTGoaPwa,
    isMobile: true,
  },
  {
    title: "GoApotik WEB",
    role: "Frontend Engineer",
    description:
      "The main GoApotik website, integrating backend AdonisJS with VueJS on the frontend for responsive and scalable architecture.",
    tech: ["AdonisJS", "VueJS", "Bootstrap", "Git"],
    link: "https://store.goapotik.com/",
    thumbnail: PTGoaWeb,
  },
  {
    title: "GPOS One",
    role: "Frontend Engineer",
    description:
      "A Point-of-Sale platform tailored for GoApotik partners, built as a PWA for fast and reliable user experience.",
    tech: ["NextJS", "Mantine", "TailwindCSS", "PWA", "EsLint", "Prettier"],
    link: "https://account.gpos.id/",
    thumbnail: PTGposone,
  },
  {
    title: "Sportirena Owner",
    role: "Frontend Developer",
    description:
      "A web-based sports event management system with state management via Redux and dynamic routing.",
    tech: ["ReactJS", "Redux", "React-Router-DOM", "TailwindCSS", "Git"],
    link: "https://sportirena.com:3137/",
    thumbnail: PTSportirenaOwner,
  },
];

export const Portfolio: FC<SectionProps> = ({ ...props }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const startDate = new Date(2021, 0, 1);
  const endDate = new Date();
  const difference = endDate.getTime() - startDate.getTime();
  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 30 * 12));

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <div
      {...props}
      className={classNames(
        "px-4 lg:pt-20 lg:pb-8 w-full flex justify-center bg-dark-950",
        props.className,
        styles.portfolio
      )}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start text-left w-full md:w-1/3">
          <motion.h2 {...fadeUp} className="text-4xl font-bold text-white mb-6">
            Selected Projects
          </motion.h2>
          <ul className="text-sm text-gray-400 space-y-3">
            <motion.li
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              className="flex items-center gap-2"
            >
              <Briefcase className="text-orange-default" size={16} />{" "}
              <span>{years}+ Years Experience</span>
            </motion.li>
            <motion.li
              {...fadeUp}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              className="flex items-center gap-2"
            >
              <Code2 className="text-orange-default" size={16} />{" "}
              <span>40+ Projects</span>
            </motion.li>
            <motion.li
              {...fadeUp}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              className="flex items-center gap-2"
            >
              <Users className="text-orange-default" size={16} />{" "}
              <span>15+ Clients</span>
            </motion.li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-4/5 flex flex-col gap-2 h-full">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={classNames(
                "flex items-center rounded-xl border border-dark-700 transition-all duration-300 overflow-hidden bg-transparent backdrop-blur-md h-full p-2",
                hoveredIndex === null
                  ? "opacity-100"
                  : hoveredIndex === index
                  ? "bg-dark-700 blur-0"
                  : "blur-sm opacity-80",
                "cursor-pointer"
              )}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                className={classNames([
                  project?.isMobile ? "object-contain" : "object-cover",
                  "w-64 h-32 mr-4 flex-shrink-0 rounded-lg",
                ])}
                width={80}
                height={80}
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-orange-default">{project.role}</p>
                <p className="text-sm text-gray-400 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-dark-700 text-gray-300 text-xs px-2 py-1 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

          {/* View All Link */}
          <Link
            href={projectRoute.index}
            className="inline-flex items-center gap-1 text-sm text-orange-default hover:underline transition-all group text-left"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
