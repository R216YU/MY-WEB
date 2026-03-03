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
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-default-300 bg-default-50">
              <th className="py-3 px-4 text-left font-semibold text-default-600">
                期間
              </th>
              <th className="py-3 px-4 text-left font-semibold text-default-600">
                会社名
              </th>
              <th className="py-3 px-4 text-left font-semibold text-default-600">
                職種
              </th>
            </tr>
          </thead>
          <tbody>
            {workExperience.map((work) => (
              <tr
                key={`${work.companyName}-${work.startDate}`}
                className="border-b border-default-200 last:border-b-0"
              >
                <td className="py-3 px-4 whitespace-nowrap text-default-500">
                  {formatPeriod(work.startDate, work.endDate)}
                </td>
                <td className="py-3 px-4">{work.companyName}</td>
                <td className="py-3 px-4">{work.position}</td>
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
