"use client";

import { Table, TableColumn } from "@/components";
import { homeRoute } from "@/shared/constants";
import classNames from "clsx";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Role } from "../components";
import { projects } from "./controller";

const columns: TableColumn[] = [
  {
    key: "thumbnail",
    label: "Thumbnail",
    className: "w-[80px] min-w-[80px]",
    render: (value) =>
      value ? (
        <Image
          src={value}
          alt="thumb"
          width={70}
          height={70}
          className="rounded w-[70px] h-[50px] object-contain"
        />
      ) : (
        ""
      ),
  },
  {
    key: "year",
    label: "Year",
    className: "w-[70px]",
    rowClassName: "font-thin",
  },
  {
    key: "project",
    label: "Project",
    className: "min-w-[300px]",
    render: (value, row) =>
      row?.link ? (
        <Link
          href={row.link}
          target="_blank"
          className="text-primary-400 flex items-center group/link hover:text-primary-500"
        >
          {value}
          {
            <ArrowDown className="size-4 rotate-[225deg] transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" />
          }
        </Link>
      ) : (
        <p>{value}</p>
      ),
  },
  {
    key: "madeAt",
    label: "Made at",
    className: "w-[250px]",
    rowClassName: "font-thin",
  },
  {
    key: "role",
    label: "Role",
    className: "w-[50px]",
    render: (value) => <Role role={value} />,
  },
  {
    key: "builtWith",
    label: "Built with",
    className: "min-w-[400px]",
    render: (value) => (
      <div className="flex flex-wrap gap-2">
        {value.map((tech: string, i: number) => (
          <span
            key={i}
            className="text-xs px-3 py-1 bg-dark-200 rounded-full text-primary-default border border-primary-default"
          >
            {tech}
          </span>
        ))}
      </div>
    ),
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const ProjectsView = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white py-12 px-4">
      <motion.div className="lg:w-screen lg:max-w-6xl mx-auto">
        <Link
          href={`${homeRoute}/#portfolio`}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <motion.div className="group-hover:-translate-x-2 transition duration-200">
            <ArrowDown className="rotate-90 size-4 text-orange-default " />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.3 }}
            className="text-orange-default group-hover:underline"
          >
            Brilian Rachmad
          </motion.p>
        </Link>
        <motion.h1
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold mb-8 tracking-wider"
        >
          My Projects
        </motion.h1>
        <div className="flex justify-start gap-4 items-center flex-wrap">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <Role role="FS" />:
            <div className="text-base text-nowrap">Full Stack</div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <Role role="FE" />:<div className="text-base">Frontend</div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Role role="BE" />:<div className="text-base">Backend</div>
          </motion.div>
        </div>
        <div className="lg:block hidden">
          <Table
            stickyHeaderClassName="!px-36 md:block hidden"
            bodyClassName="text-gray-400"
            columns={columns}
            data={projects.sort((a, b) => b.year - a.year)}
          />
        </div>
        <div className="lg:hidden grid md:grid-cols-2 grid-cols-1 gap-2 mt-6 items-center">
          {projects
            ?.sort((a, b) => b.year - a.year)
            .map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={classNames(
                  "flex flex-col gap-2 rounded-xl border border-dark-700 transition-all duration-300 overflow-hidden bg-transparent h-full p-2 w-full",
                  "cursor-pointer"
                )}
              >
                <Image
                  src={project.thumbnail || "/images/api.png"}
                  alt={project.project}
                  className={classNames([
                    "object-contain",
                    "w-64 h-32 flex-shrink-0 rounded-lg mx-auto",
                  ])}
                  width={80}
                  height={80}
                />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {project.project}
                  </h3>
                  <p className="text-sm text-orange-default">{project.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.builtWith.map((tech) => (
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
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsView;
