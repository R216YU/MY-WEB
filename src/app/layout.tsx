import "./globals.css";

import { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

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
      </body>
    </html>
  );
};

export default RootLayout;
