"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import {
  ICEmail,
  ICGithub,
  ICInstagram,
  ICLinkedin,
  ICWhatsapp,
} from "../../../../../public/images";
import { SectionProps } from "../components";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const About: FC<SectionProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center h-screen">
        <div className="space-y-4">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <motion.p className="text-sm text-gray-400 uppercase">
              About{" "}
              <span className="text-orange-default font-semibold">Me</span>
            </motion.p>
            <motion.h1
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white"
            >
              Brilian Rachmad Nurwachidin
            </motion.h1>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-orange-default font-medium"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-sm"
          >
            I build seamless digital experiences — from intuitive UI to
            high-performance backend systems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-12 flex justify-start gap-4 items-center"
          >
            <Link
              href="https://mail.google.com/mail/?view=cm&to=brilian.rachmad13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white transition-all duration-200"
            >
              <ICEmail className="size-8 cursor-pointer transition hover:scale-125 duration-200 hover:text-red-500" />
            </Link>

            <Link
              href="https://github.com/brilianrn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ICGithub className="size-8 cursor-pointer transition hover:scale-125 duration-200" />
            </Link>

            <Link
              href="https://linkedin.com/in/brilian-rachmad-nurwachidin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white transition-all duration-200"
            >
              <ICLinkedin className="size-8 cursor-pointer transition hover:scale-125 duration-200 hover:text-blue-500" />
            </Link>

            <Link
              href="https://instagram.com/brilianrn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white transition-all duration-200 group"
            >
              <ICInstagram className="size-8 cursor-pointer transition hover:scale-125 duration-200 hover:text-[#E1306C] hover:text-gradient-to-br hover:to-purple-600 hover:via-pink-500 from-yellow-400 p-0" />
            </Link>

            <Link
              href="https://wa.me/6281230818789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ICWhatsapp className="size-8 cursor-pointer transition hover:scale-125 duration-200 hover:text-green-500 hover:stroke-white hover:stroke-[2.5px]" />
            </Link>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="space-y-6 text-[16px] leading-relaxed text-gray-400">
          {[
            <>
              I’m a{" "}
              <span className="text-white font-medium">
                Full Stack Developer
              </span>{" "}
              with over 4 years of experience, building and maintaining scalable
              applications across web, mobile, and backend platforms. I’m
              passionate about creating seamless digital experiences — from
              crafting responsive, accessible UIs to developing robust
              server-side logic and APIs.
            </>,
            <>
              My work spans technologies like{" "}
              <span className="text-white">
                Next.js, React, Vue, and React Native
              </span>{" "}
              on the frontend, and{" "}
              <span className="text-white">Node.js, NestJS, and AdonisJS</span>{" "}
              on the backend. I’ve also worked with{" "}
              <span className="text-white">
                PostgreSQL, MySQL, OracleDB, and MongoDB
              </span>
              , following best practices in code quality, version control, and
              testing.
            </>,
            <>
              Whether I’m working on a web dashboard, a mobile app, or a backend
              service, I focus on delivering high-quality, maintainable code.
              I’m driven by curiosity and a strong desire to learn — constantly
              exploring new technologies and better ways to solve problems.
            </>,
            <>
              In past roles, I’ve contributed to projects in{" "}
              <span className="text-white">
                startups, digital agencies, and enterprise environments
              </span>
              . I value clear communication, time management, and collaborative
              teamwork to drive success across every stage of development.
            </>,
            <>
              Outside of work, I enjoy exploring new technologies, reading
              non-fiction books, and writing small experiments to sharpen my
              skills.
            </>,
          ].map((content, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              {content}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};
