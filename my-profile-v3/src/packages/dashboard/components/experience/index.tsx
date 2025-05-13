"use client";

import styles from "@/shared/styles/packages/dashboard.module.css";
import classNames from "clsx";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import { SectionProps } from "../components";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.6 },
};

const experiences = [
  {
    role: "Frontend Engineer",
    company: "PT Karsa Inti Tuju Askara",
    duration: "Jan 2023 - Now",
    period: "2 Years+",
    description:
      "Contributed to the continuous development of GoApotik's customer and merchant platforms across web and mobile, focusing on user experience and performance.",
    stack: [
      "Next.js",
      "VueJS",
      "Flutter",
      "TypeScript",
      "AdonisJS",
      "MySQL",
      "Redis",
      "OracleDB",
      "Express.js",
      "Golang",
      "RabbitMQ",
    ],
    url: "https://www.goapotik.com",
  },
  {
    role: "Full-Stack Developer",
    company: "Aido Health",
    duration: "Jul 2022 - Feb 2023",
    period: "8 Months",
    description:
      "Worked on Aido's healthcare platform, primarily developing patient record management systems for clinics and hospitals, and implementing doctor appointment bookings, including BPJS integration.",
    stack: ["Express.js", "React", "iOS", "MySQL", "Sequelize", "Bootstrap"],
    url: "https://aido.id",
  },
  {
    role: "Full-Stack Developer",
    company: "PT Technova Optima Prima",
    duration: "Dec 2021 - Dec 2024",
    period: "3 Years+",
    description:
      "Led full-stack development for Sportirena, a sports venue booking platform (tennis, futsal, etc.), and built a CMS for venue management. Also contributed minor fixes to Jibi, a dashboard product, including login and password recovery pages. Both projects were for Technova’s clients.",
    stack: [
      "Next.js",
      "React",
      "React Native",
      "Express.js",
      "MySQL",
      "Sequelize",
    ],
    url: "https://technova.co.id/",
  },
  {
    role: "Frontend Developer",
    company: "PT Mediatechindo",
    duration: "Apr 2022 - Jul 2022",
    period: "4 Months",
    description:
      "Developed frontend features for an internal supply management system used by Yummy Corp, with a focus on inventory and purchasing workflows. The project was delivered through Mediatechindo.",
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    url: "https://www.yummycorp.com/",
  },
];

export const Experience: FC<SectionProps> = ({ ...props }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      {...props}
      className={classNames([props.className, styles.experience])}
    >
      <div className="w-screen max-w-6xl mx-auto flex gap-2 items-center justify-center min-h-screen flex-col lg:px-0 px-2">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-md font-medium lg:text-left text-center text-white w-screen max-w-6xl uppercase"
        >
          My{" "}
          <span className="text-orange-default font-semibold">Experiences</span>
        </motion.p>

        {/* Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {experiences.map((exp, index) => {
            const isHovered = hoveredIndex !== null;
            const isActive = hoveredIndex === index;

            return (
              <motion.a
                key={index}
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                {...fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={classNames(
                  "rounded-2xl bg-gradient-to-br p-6 border border-dark-950 shadow-lg transition-all duration-300 block",
                  "bg-dark-950 hover:border-dark-400 cursor-pointer",
                  {
                    "scale-[1.03] z-10 shadow-xl": isActive,
                    "opacity-40 blur-[1px] grayscale": isHovered && !isActive,
                  }
                )}
              >
                <div className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <Calendar size={16} />
                  <p>{exp.duration}</p>
                </div>
                <h3 className="text-lg font-semibold text-orange-default">
                  {exp.role} · {exp.company}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-dark-200 rounded-full text-primary-default border border-primary-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Button to view all */}
        <div className="w-full text-center z-[2] pt-4">
          <Link
            href="/experience"
            className="inline-block mt-4 px-6 py-2 z-[2] rounded-full border border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-gray-200 hover:font-bold transition"
          >
            View Full Experience
          </Link>
        </div>
      </div>
    </div>
  );
};
