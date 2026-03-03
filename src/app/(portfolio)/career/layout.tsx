import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "R216YU's Web - Career",
  description: "r216yuのキャリア情報です。",
};

type CareerLayoutProps = {
  children: React.ReactNode;
};

const CareerLayout = ({ children }: CareerLayoutProps) => {
  return <>{children}</>;
};

export default CareerLayout;
