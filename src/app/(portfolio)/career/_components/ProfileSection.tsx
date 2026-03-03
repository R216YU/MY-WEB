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

  return (
    <SectionCard title="基本情報">
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b border-default-200">
            <th className="w-1/4 py-3 px-4 text-left font-semibold text-default-600 bg-default-50">
              氏名
            </th>
            <td className="py-3 px-4">{name}</td>
          </tr>
          <tr className="border-b border-default-200">
            <th className="w-1/4 py-3 px-4 text-left font-semibold text-default-600 bg-default-50">
              生年月日
            </th>
            <td className="py-3 px-4">
              {formatDate(birthday)}
              <Chip size="sm" variant="soft" className="ml-2">
                {age}歳
              </Chip>
            </td>
          </tr>
          <tr>
            <th className="w-1/4 py-3 px-4 text-left font-semibold text-default-600 bg-default-50 align-top">
              プロフィール
            </th>
            <td className="py-3 px-4 leading-relaxed">{profile}</td>
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
