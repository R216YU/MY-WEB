import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "R216YU's Web - Works",
  description: "r216yuの作品一覧です。",
};

type WorksLayoutProps = {
  children: React.ReactNode;
};

const WorksLayout = ({ children }: WorksLayoutProps) => {
  return <>{children}</>;
};

export default WorksLayout;
