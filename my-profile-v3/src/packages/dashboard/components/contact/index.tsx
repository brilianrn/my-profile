"use client";

import { Maps } from "@/components";
import classNames from "clsx";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import { SectionProps } from "../components";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const Contact: FC<SectionProps> = ({ ...props }) => {
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Name and Message are required.");
      return;
    }

    const text = `Hello, my name is ${name}.${
      company ? ` I work at ${company}.` : ""
    } ${message}`;
    const url = `https://wa.me/6281230818789?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  const sidoarjoCoords: [number, number] = [-7.4469, 112.7183];

  return (
    <div
      {...props}
      className={classNames([
        "py-24 px-4 !w-full !flex !items-center !justify-center bg-dark-950",
        props.className,
      ])}
    >
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-extrabold text-center text-white mb-10 tracking-tight"
        >
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            Get in Touch
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-dark-800 border border-dark-700 p-6 rounded-xl"
          >
            <motion.input
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-dark-700 text-white p-3 rounded-md outline-none"
              required
            />
            <motion.input
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.3 }}
              type="text"
              placeholder="Company (optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-dark-700 text-white p-3 rounded-md outline-none"
            />
            <motion.textarea
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              placeholder="Your Message *"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-dark-700 text-white p-3 rounded-md outline-none h-32"
              required
            />
            <motion.button
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              type="submit"
              className={classNames(
                "inline-flex items-center gap-2 text-sm px-5 py-2 border border-orange-default text-orange-default rounded-md hover:bg-orange-default hover:text-white transition group"
              )}
            >
              Send via WhatsApp{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>
          </form>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-64 md:h-auto rounded-xl overflow-hidden border border-dark-700"
          >
            <Maps
              coords={sidoarjoCoords}
              location={
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Sidoarjo,+Sidoarjo+Regency,+East+Java/@-7.4472406,112.7068213,13z/data=!3m1!4b1!4m6!3m5!1s0x2dd7e1343346658b:0x96cbcb91139dab36!8m2!3d-7.4497718!4d112.7015495!16s%2Fg%2F1ywqfjwcp?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                >
                  Sidoarjo, Jawa Timur, Indonesia
                </Link>
              }
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
