import React from "react";

import type { Education } from "../_types/career-types";
import SectionCard from "./SectionCard";

type EducationSectionProps = {
  education: Education[];
};

/** 学歴セクション */
const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <SectionCard title="学歴">
      {/* モバイル用: カード型スタックレイアウト */}
      <div className="flex flex-col gap-3 text-sm md:hidden">
        {education.map((edu) => (
          <div
            key={`mobile-${edu.schoolName}-${edu.startDate}`}
            className="border-default-200 rounded-lg border p-3"
          >
            <div className="text-default-500 mb-1 text-xs">
              {formatPeriod(edu.startDate, edu.endDate)}
            </div>
            <div className="font-semibold">{edu.schoolName}</div>
            <div className="text-default-500 mt-1 text-xs">{edu.degree}</div>
          </div>
        ))}
      </div>

      {/* PC用: テーブルレイアウト */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-default-300 bg-default-50 border-b-2">
              <th className="text-default-600 px-4 py-3 text-left font-semibold">
                期間
              </th>
              <th className="text-default-600 px-4 py-3 text-left font-semibold">
                学校名
              </th>
              <th className="text-default-600 px-4 py-3 text-left font-semibold">
                区分
              </th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu) => (
              <tr
                key={`${edu.schoolName}-${edu.startDate}`}
                className="border-default-200 border-b last:border-b-0"
              >
                <td className="text-default-500 px-4 py-3 whitespace-nowrap">
                  {formatPeriod(edu.startDate, edu.endDate)}
                </td>
                <td className="px-4 py-3">{edu.schoolName}</td>
                <td className="px-4 py-3">{edu.degree}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
};

export default EducationSection;

/** "YYYY-MM" 形式の期間を "YYYY年MM月" 表記に変換する */
const formatPeriod = (start: string, end: string): string => {
  const formatYM = (ym: string) => {
    if (ym === "--") return "現在";
    const [year, month] = ym.split("-");
    return `${year}年${month}月`;
  };

  return `${formatYM(start)} 〜 ${formatYM(end)}`;
};
