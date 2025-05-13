import classNames from "clsx";
import { FC, ReactNode } from "react";

export const AppLayout: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={classNames([className, "relative"])}>{children}</div>;
};
