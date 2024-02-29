import { FC, ReactNode } from "react";

interface LayoutRootProps {
  children: ReactNode;
}

export const LayoutRoot: FC<LayoutRootProps> = ({ children }) => {
  return <main className="w-screen h-screen pt-28">{children}</main>;
};
