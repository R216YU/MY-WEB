"use client";

import { Button } from "@heroui/react";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigationStore } from "../store/navigationStore";

const BackButton = () => {
  const { back, history } = useNavigationStore();

  return (
    <Button
      className={`fixed right-2 bottom-2`}
      size="sm"
      isIconOnly
      variant="primary"
      onClick={() => back()}
      isDisabled={history.length <= 1}
    >
      <LuArrowLeft className="text-amber-100" />
    </Button>
  );
};

export default BackButton;
