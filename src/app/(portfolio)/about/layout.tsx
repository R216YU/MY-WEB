import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "R216YU's Web - About",
  description: "r216yuの自己紹介です。",
};

type WorksLayoutProps = {
  children: React.ReactNode;
};

const WorksLayout = ({ children }: WorksLayoutProps) => {
  return <>{children}</>;
};

export default WorksLayout;
