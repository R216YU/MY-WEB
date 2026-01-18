import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R216YU's Web - Diary",
  description: "r216yuのDiaryです。日々の日記を綴っています。",
};

interface DiaryLayoutProps {
  children: React.ReactNode;
}

const DiaryLayout: React.FC<DiaryLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default DiaryLayout;
