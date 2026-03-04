import { Card, Chip } from "@heroui/react";
import React from "react";

import type { ProjectHistory } from "../_types/career-types";
import SectionCard from "./SectionCard";

type ProjectHistorySectionProps = {
  history: ProjectHistory[];
};

/** プロジェクト経歴セクション */
const ProjectHistorySection = ({ history }: ProjectHistorySectionProps) => {
  return (
    <SectionCard title="プロジェクト経歴">
      <div className="flex flex-col gap-4">
        {history.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index + 1}
          />
        ))}
      </div>
    </SectionCard>
  );
};

export default ProjectHistorySection;

type ProjectCardProps = {
  project: ProjectHistory;
  index: number;
};

/** 個別のプロジェクト経歴カード */
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const detailItems = [
    {
      label: "概要",
      value: <span className="leading-relaxed">{project.description}</span>,
    },
    {
      label: "担当・役割",
      value: <span className="leading-relaxed">{project.role}</span>,
    },
    {
      label: "使用技術",
      value: (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Chip key={tech} size="sm" color="accent" variant="soft">
              {tech}
            </Chip>
          ))}
        </div>
      ),
    },
  ];

  return (
    <Card variant="secondary" className="w-full">
      <Card.Header>
        <Card.Title className="text-base font-bold">
          <span className="text-primary mr-2">#{index}</span>
          {project.title}
        </Card.Title>
      </Card.Header>
      <Card.Content className="px-6 pb-6">
        {/* モバイル用: スタックレイアウト */}
        <div className="flex flex-col gap-4 md:hidden text-sm">
          {detailItems.map((item) => (
            <div key={item.label}>
              <div className="text-xs font-semibold text-default-500 mb-1">
                {item.label}
              </div>
              <div className="rounded-lg bg-default-50 px-3 py-2">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* PC用: テーブルレイアウト */}
        <table className="hidden md:table w-full text-sm">
          <tbody>
            <tr className="border-b border-default-200">
              <th className="w-1/5 py-3 px-4 text-left font-semibold text-default-600 bg-default-50 align-top">
                概要
              </th>
              <td className="py-3 px-4 leading-relaxed">
                {project.description}
              </td>
            </tr>
            <tr className="border-b border-default-200">
              <th className="w-1/5 py-3 px-4 text-left font-semibold text-default-600 bg-default-50 align-top">
                担当・役割
              </th>
              <td className="py-3 px-4 leading-relaxed">{project.role}</td>
            </tr>
            <tr>
              <th className="w-1/5 py-3 px-4 text-left font-semibold text-default-600 bg-default-50 align-top">
                使用技術
              </th>
              <td className="py-3 px-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Chip key={tech} size="sm" color="accent" variant="soft">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Content>
    </Card>
  );
};
