"use client";

import { Button } from "@heroui/react";
import { motion } from "framer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { LuIdCard, LuPalette, LuPenTool } from "react-icons/lu";

interface ButtonItem {
  label: string;
  icon: IconType;
  disabled?: boolean;
  onClick?: () => void;
  link?: string;
}

const RootPage = () => {
  const router = useRouter();

  const BUTTONS: ButtonItem[] = [
    {
      label: "About",
      icon: LuIdCard,
      onClick: () => router.push("/about"),
    },
    {
      label: "Works",
      icon: LuPalette,
      onClick: () => router.push("/works"),
    },
    {
      label: "Diary",
      icon: LuPenTool,
      disabled: true,
      link: "/diary",
    },
  ];

  return (
    <div id="EntryPoint" className="h-lvh w-full">
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
          {BUTTONS.map(
            ({ label, onClick, link, icon: Icon, disabled }, index) => {
              const content = (
                <motion.div
                  whileHover={{
                    scale: disabled ? 1 : 1.1,
                    rotate: disabled ? 0 : -2,
                  }}
                  whileTap={{ scale: disabled ? 1 : 0.98 }}
                >
                  <Button
                    className="w-35"
                    {...(!link && { onClick })}
                    isDisabled={disabled}
                  >
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
                  {link && !disabled ? (
                    <Link href={link} className="block">
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default RootPage;
