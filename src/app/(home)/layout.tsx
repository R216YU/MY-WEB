import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R216YU's Web - Home",
  description: "r216yuのポートフォリオサイトです。",
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return children;
};

export default HomeLayout;
