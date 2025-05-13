"use client";

import Image from "next/image";
import { FC } from "react";
import { SectionProps } from "../components";

export const Contact: FC<SectionProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <Image
        src="/images/brilianrn-profile.jpg"
        alt="Brilian Rachmad Nurwachidin, A.Md.T"
        width={200}
        height={200}
        className="rounded-full mx-auto"
      />
      <div className="mt-10">
        <h1 className="text-4xl font-bold">CONTACT</h1>
      </div>
    </div>
  );
};
