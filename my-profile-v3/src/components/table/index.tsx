"use client";

import { useScreenSize } from "@/shared/hooks";
import classNames from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type TableColumn = {
  key: string;
  label: string;
  // eslint-disable-next-line
  render?: (value: any, row: TableRow) => React.ReactNode;
  className?: string;
  rowClassName?: string;
};

export type TableRow = {
  // eslint-disable-next-line
  [key: string]: any;
};

type TableProps = {
  columns: TableColumn[];
  data: TableRow[];
  stickyHeaderClassName?: string;
  bodyClassName?: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const Table = ({
  columns,
  data,
  stickyHeaderClassName,
  bodyClassName,
}: TableProps) => {
  const tableHeaderRef = useRef<HTMLTableSectionElement>(null);

  const [isSticky, setIsSticky] = useState<boolean>(false);

  const { isDesktop } = useScreenSize();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // eslint-disable-next-line
        isDesktop && setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: "-1px 0px 0px 0px" }
    );

    const header = tableHeaderRef.current;
    if (header) observer.observe(header);
    return () => {
      if (header) observer.unobserve(header);
    };
  }, [isDesktop]);

  return (
    <div className="relative">
      {/* Sticky Header */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={classNames([
              stickyHeaderClassName,
              "fixed top-0 left-0 right-0 z-50 bg-[#0d1117] border-b border-slate-700 lg:px-6 py-2",
            ])}
          >
            <div className="max-w-7xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-slate-300">
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className={`p-3 whitespace-nowrap ${
                          col.className ?? ""
                        }`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Table */}
      <div className="overflow-x-auto overflow-y-hidden mt-2">
        <table className="w-full border-separate border-spacing-y-3">
          <thead ref={tableHeaderRef}>
            <motion.tr className="text-left text-sm text-slate-300">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`p-3 whitespace-nowrap ${col.className ?? ""}`}
                >
                  {col.label}
                </th>
              ))}
            </motion.tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <motion.tr
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: (idx + 1) * 0.1 }}
                key={idx}
                className={classNames([
                  bodyClassName,
                  "bg-[#161b22] rounded-lg",
                ])}
              >
                {columns.map((col, i) => {
                  const value = row[col.key];
                  return (
                    <td
                      key={i}
                      className={classNames([col.rowClassName, "p-3"])}
                    >
                      {col.render ? col.render(value, row) : value}
                    </td>
                  );
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
