"use client";

import { Button, Dropdown, Label } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { LuMenu } from "react-icons/lu";

const MENU_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "Diary",
    href: "/diary",
  },
];

const MenuButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (href: string) => {
    router.push(href);
  };

  if (pathname === "/") {
    return null;
  }

  const CustomCheckmarkIcon = (
    <svg
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="text-accent"
        clipRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.1-8.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );

  return (
    <Dropdown>
      <Button
        aria-label="Menu"
        variant="primary"
        isIconOnly
        className="fixed right-2 bottom-2"
      >
        <LuMenu className="text-amber-100" />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Section>
            {MENU_ITEMS.map((item) => (
              <Dropdown.Item
                key={item.label}
                id={item.label}
                onClick={() => handleClick(item.href)}
              >
                <Dropdown.ItemIndicator>
                  {pathname === item.href ? CustomCheckmarkIcon : null}
                </Dropdown.ItemIndicator>
                <Label>{item.label}</Label>
              </Dropdown.Item>
            ))}
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default MenuButton;
