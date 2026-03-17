import type { Metadata } from "next";

import BottomAlert from "@/shared/components/BottomAlert/BottomAlert";

export const metadata: Metadata = {
  title: "R216YU's Web - Diary",
  description: "r216yuのDiaryです。日々の日記を綴っています。",
};

type DiaryLayoutProps = {
  children: React.ReactNode;
};

const DiaryLayout = ({ children }: DiaryLayoutProps) => {
  return (
    <>
      {children}
      <BottomAlert
        type="warning"
        title="Developing now..."
        description="diary.r216yu.xyzは現在作成中です..."
      />
    </>
  );
};

export default DiaryLayout;
