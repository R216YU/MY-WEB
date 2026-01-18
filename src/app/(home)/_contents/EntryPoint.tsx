"use client";

import { Alert, Button } from "@heroui/react";
import { motion } from "framer";
import Link from "next/link";
import { IconType } from "react-icons";
import { LuIdCard, LuPalette, LuPenTool } from "react-icons/lu";

interface ButtonItem {
  label: string;
  icon: IconType;
  onClick?: () => void;
  link?: string;
}

const BUTTONS: ButtonItem[] = [
  {
    label: "About",
    icon: LuIdCard,
    onClick: () => {
      console.log("About Me clicked");
    },
  },
  {
    label: "Works",
    icon: LuPalette,
    onClick: () => {
      console.log("Works clicked");
    },
  },
  {
    label: "Diary",
    icon: LuPenTool,
    link: "/diary",
  },
];

const EntryPoint = () => {
  return (
    <>
      <div className="h-lvh w-full">
        <div className="h-full flex flex-col justify-center items-center gap-16">
          <div className="flex flex-col items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.5, ease: "easeOut" },
                y: { duration: 0.5, ease: "easeOut" },
              }}
            >
              <span className="text-5xl lg:text-7xl">r216yu.xyz</span>
            </motion.h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            {BUTTONS.map(({ label, onClick, link, icon: Icon }, index) => {
              const content = (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-35" {...(!link && { onClick })}>
                    <Icon className="" />
                    {label}
                  </Button>
                </motion.div>
              );
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.2 * index,
                    },
                    y: { duration: 0.5, ease: "easeOut", delay: 0.2 * index },
                  }}
                >
                  {link ? (
                    <Link href={link} className="block">
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <BuildingAlert />
    </>
  );
};

export default EntryPoint;

const BuildingAlert = () => {
  return (
    <Alert
      status="warning"
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-lg"
    >
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Building...</Alert.Title>
        <Alert.Description>r216yu.xyzは現在作成中です。</Alert.Description>
      </Alert.Content>
    </Alert>
  );
};
