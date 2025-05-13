"use client";

import styles from "@/shared/styles/packages/dashboard.module.css";
import classNames from "clsx";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Wrench } from "lucide-react";
import { FC } from "react";

import { SectionProps } from "../components";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const categorizedSkills = [
  {
    label: "Frontend",
    icon: <Code size={18} className="text-orange-default" />,
    items: [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "VueJS",
      "PWA",
      "Bootstrap",
      "Mantine Library",
      "jQuery",
      "VueX",
      "SPA",
      "Redux",
      "Apollo Client",
      "AdonisJS",
    ],
  },
  {
    label: "Backend",
    icon: <Server size={18} className="text-orange-default" />,
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "GraphQL",
      "Microservices",
      "AdonisJS",
      "Go",
      "PostgreSQL",
      "Sequelize",
      "MongoDB",
      "Redis",
      "OracleDB",
      "SQLite",
      "RabbitMQ",
      "MySQL",
      "PL/SQL",
      "Prisma",
    ],
  },
  {
    label: "Mobile",
    icon: <Smartphone size={18} className="text-orange-default" />,
    items: [
      "React Native CLI / Expo",
      "Flutter",
      "Android Studio (Java Native)",
      "SwiftUI",
    ],
  },
  {
    label: "Tools & Other",
    icon: <Wrench size={18} className="text-orange-default" />,
    items: [
      "Git",
      "Typescript",
      "CI/CD",
      "Firebase",
      "Agile Methodologies",
      "Heroku",
      "Vercel",
      "PL/SQL Oracle",
      "Dart",
      "Figma",
      "Jira",
      "ClickUp",
    ],
  },
];

export const Skill: FC<SectionProps> = ({ ...props }) => {
  return (
    <div
      {...props}
      className={classNames(
        "py-24 px-4 w-full flex flex-col items-center justify-center bg-dark-950",
        props.className,
        styles.skills
      )}
    >
      <motion.p
        {...fadeUp}
        className="uppercase text-3xl font-bold text-center text-gray-300"
      >
        My{" "}
        <span className="relative text-orange-default inline-block before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-default before:rounded-md before:content-['']">
          Skills
        </span>
      </motion.p>
      <div className="w-full max-w-6xl grid sm:grid-cols-1 md:grid-cols-2 items-start my-auto gap-14">
        {categorizedSkills.map((group, index) => (
          <motion.div
            key={group.label}
            {...fadeUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              {group.icon}
              <h1 className="text-lg tracking-wide text-gray-300 font-semibold uppercase">
                {group.label}
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-mono px-3 py-1 bg-dark-700 text-gray-300 rounded-md hover:bg-orange-default hover:text-white transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
