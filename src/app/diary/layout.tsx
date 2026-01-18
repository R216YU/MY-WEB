import { Alert } from "@heroui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R216YU's Web - Diary",
  description: "r216yuのDiaryです。日々の日記を綴っています。",
};

interface DiaryLayoutProps {
  children: React.ReactNode;
}

const DiaryLayout: React.FC<DiaryLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <BuildingAlert />
    </>
  );
};

export default DiaryLayout;

const BuildingAlert = () => {
  return (
    <Alert
      status="warning"
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-lg"
    >
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Building now...</Alert.Title>
        <Alert.Description>r216yu.xyzは現在作成中です。</Alert.Description>
      </Alert.Content>
    </Alert>
  );
};
