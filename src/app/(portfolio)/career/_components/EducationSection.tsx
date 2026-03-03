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
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-default-300 bg-default-50">
              <th className="py-3 px-4 text-left font-semibold text-default-600">
                期間
              </th>
              <th className="py-3 px-4 text-left font-semibold text-default-600">
                学校名
              </th>
              <th className="py-3 px-4 text-left font-semibold text-default-600">
                区分
              </th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu) => (
              <tr
                key={`${edu.schoolName}-${edu.startDate}`}
                className="border-b border-default-200 last:border-b-0"
              >
                <td className="py-3 px-4 whitespace-nowrap text-default-500">
                  {formatPeriod(edu.startDate, edu.endDate)}
                </td>
                <td className="py-3 px-4">{edu.schoolName}</td>
                <td className="py-3 px-4">{edu.degree}</td>
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
