import React from "react";

import type { WorkExperience } from "../_types/career-types";
import SectionCard from "./SectionCard";

type WorkExperienceSectionProps = {
  workExperience: WorkExperience[];
};

/** 職歴セクション */
const WorkExperienceSection = ({
  workExperience,
}: WorkExperienceSectionProps) => {
  return (
    <SectionCard title="職歴">
      {/* モバイル用: カード型スタックレイアウト */}
      <div className="flex flex-col gap-3 text-sm md:hidden">
        {workExperience.map((work) => (
          <div
            key={`mobile-${work.companyName}-${work.startDate}`}
            className="border-default-200 rounded-lg border p-3"
          >
            <div className="text-default-500 mb-1 text-xs">
              {formatPeriod(work.startDate, work.endDate)}
            </div>
            <div className="font-semibold">{work.companyName}</div>
            <div className="text-default-500 mt-1 text-xs">{work.position}</div>
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
                会社名
              </th>
              <th className="text-default-600 px-4 py-3 text-left font-semibold">
                職種
              </th>
            </tr>
          </thead>
          <tbody>
            {workExperience.map((work) => (
              <tr
                key={`${work.companyName}-${work.startDate}`}
                className="border-default-200 border-b last:border-b-0"
              >
                <td className="text-default-500 px-4 py-3 whitespace-nowrap">
                  {formatPeriod(work.startDate, work.endDate)}
                </td>
                <td className="px-4 py-3">{work.companyName}</td>
                <td className="px-4 py-3">{work.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
};

export default WorkExperienceSection;

/** "YYYY-MM" 形式の期間を "YYYY年MM月" 表記に変換する */
const formatPeriod = (start: string, end: string): string => {
  const formatYM = (ym: string) => {
    if (ym === "--") return "現在";
    const [year, month] = ym.split("-");
    return `${year}年${month}月`;
  };

  return `${formatYM(start)} 〜 ${formatYM(end)}`;
};
