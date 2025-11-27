import { ReactNode } from "react";
import { Side } from "./Side";

export const SplitSide = ({ children }: { children: ReactNode }) => {
  return <div className="flex justify-between full-container">{children}</div>;
};

SplitSide.Side = Side;
