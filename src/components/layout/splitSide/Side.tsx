import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Side = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      className={`flex-1 overflow-auto padding-container ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
