import "./globals.css";

import { Alert } from "@heroui/react";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "R216YU's Web",
  description: "r216yuのポートフォリオサイトです。",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ja" className="dark" data-theme="dark">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
        <BuildingAlert />
      </body>
    </html>
  );
};

export default RootLayout;

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
