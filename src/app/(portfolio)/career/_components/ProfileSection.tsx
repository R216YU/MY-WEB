import { Chip } from "@heroui/react";
import React from "react";

import type { CareerData } from "../_types/career-types";
import SectionCard from "./SectionCard";

type ProfileSectionProps = {
  name: CareerData["name"];
  birthday: CareerData["birthday"];
  profile: CareerData["profile"];
};

/** 基本情報 & プロフィールセクション */
const ProfileSection = ({ name, birthday, profile }: ProfileSectionProps) => {
  const age = calculateAge(birthday);

  const items = [
    {
      label: "氏名",
      value: <span>{name}</span>,
    },
    {
      label: "生年月日",
      value: (
        <span>
          {formatDate(birthday)}
          <Chip size="sm" variant="soft" className="ml-2">
            {age}歳
          </Chip>
        </span>
      ),
    },
    {
      label: "プロフィール",
      value: <span className="leading-relaxed">{profile}</span>,
    },
  ];

  return (
    <SectionCard title="基本情報">
      {/* モバイル用: スタックレイアウト */}
      <div className="flex flex-col gap-4 text-sm md:hidden">
        {items.map((item) => (
          <div key={item.label}>
            <div className="text-default-500 mb-1 text-xs font-semibold">
              {item.label}
            </div>
            <div className="bg-default-50 rounded-lg px-3 py-2">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* PC用: テーブルレイアウト */}
      <table className="hidden w-full text-sm md:table">
        <tbody>
          <tr className="border-default-200 border-b">
            <th className="text-default-600 bg-default-50 w-1/4 px-4 py-3 text-left font-semibold">
              氏名
            </th>
            <td className="px-4 py-3">{name}</td>
          </tr>
          <tr className="border-default-200 border-b">
            <th className="text-default-600 bg-default-50 w-1/4 px-4 py-3 text-left font-semibold">
              生年月日
            </th>
            <td className="px-4 py-3">
              {formatDate(birthday)}
              <Chip size="sm" variant="soft" className="ml-2">
                {age}歳
              </Chip>
            </td>
          </tr>
          <tr>
            <th className="text-default-600 bg-default-50 w-1/4 px-4 py-3 text-left align-top font-semibold">
              プロフィール
            </th>
            <td className="px-4 py-3 leading-relaxed">{profile}</td>
          </tr>
        </tbody>
      </table>
    </SectionCard>
  );
};

export default ProfileSection;

/** 生年月日から年齢を計算する */
const calculateAge = (birthday: string): number => {
  const birth = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

/** 日付文字列を "YYYY年MM月DD日" 形式にフォーマットする */
const formatDate = (dateStr: string): string => {
  const [year, month, day] = dateStr.split("-");
  return `${year}年${month}月${day}日`;
};
