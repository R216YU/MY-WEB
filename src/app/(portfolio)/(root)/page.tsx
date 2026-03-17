"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { LuIdCard, LuPalette, LuPenTool } from "react-icons/lu";

import { FadeIn, FocusZoom, SlideUp } from "@/shared/components/animations";

type ButtonItem = {
  label: string;
  icon: IconType;
  disabled?: boolean;
  onClick?: () => void;
  link?: string;
};

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
      label: "Career",
      icon: LuIdCard,
      onClick: () => router.push("/career"),
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
      <div className="flex h-full flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-8">
          <FadeIn duration={1.0}>
            <h1>
              <span className="text-5xl lg:text-7xl">r216yu.xyz</span>
            </h1>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          {BUTTONS.map(
            ({ label, onClick, link, icon: Icon, disabled }, index) => {
              const content = (
                <FocusZoom scale={disabled ? 1 : 1.1}>
                  <Button
                    className="w-35"
                    {...(!link && { onClick })}
                    isDisabled={disabled}
                  >
                    <Icon className="" />
                    {label}
                  </Button>
                </FocusZoom>
              );
              return (
                <SlideUp key={label} delay={0.2 * index}>
                  {link && !disabled ? (
                    <Link href={link} className="block">
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </SlideUp>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default RootPage;
