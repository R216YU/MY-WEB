import { Card } from "@heroui/react";
import React from "react";

type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

/** 経歴書の各セクションを囲む共通カードコンポーネント */
const SectionCard = ({ title, children }: SectionCardProps) => {
  return (
    <Card className="w-full">
      <Card.Header>
        <Card.Title className="text-lg font-bold">{title}</Card.Title>
      </Card.Header>
      <Card.Content className="px-6 pb-6">{children}</Card.Content>
    </Card>
  );
};

export default SectionCard;
