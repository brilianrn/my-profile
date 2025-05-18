import classNames from "clsx";
import { FC } from "react";

export const Role: FC<{ role: "FS" | "FE" | "BE" }> = ({ role }) => {
  return (
    <div
      className={classNames([
        role === "FS"
          ? "bg-orange-default"
          : role === "FE"
          ? "bg-primary-600"
          : "bg-gray-600",
        "rounded-lg px-2 py-1 !w-fit !h-fit !text-white font-thin",
      ])}
    >
      {role}
    </div>
  );
};
