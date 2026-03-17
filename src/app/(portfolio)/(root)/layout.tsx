import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R216YU's Web - Home",
  description: "r216yuのポートフォリオサイトです。",
};

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <>{children}</>;
};

export default HomeLayout;
