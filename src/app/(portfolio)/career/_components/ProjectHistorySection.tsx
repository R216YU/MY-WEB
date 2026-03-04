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
        <div className="flex flex-col gap-4 text-sm md:hidden">
          {detailItems.map((item) => (
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
              <th className="text-default-600 bg-default-50 w-1/5 px-4 py-3 text-left align-top font-semibold">
                概要
              </th>
              <td className="px-4 py-3 leading-relaxed">
                {project.description}
              </td>
            </tr>
            <tr className="border-default-200 border-b">
              <th className="text-default-600 bg-default-50 w-1/5 px-4 py-3 text-left align-top font-semibold">
                担当・役割
              </th>
              <td className="px-4 py-3 leading-relaxed">{project.role}</td>
            </tr>
            <tr>
              <th className="text-default-600 bg-default-50 w-1/5 px-4 py-3 text-left align-top font-semibold">
                使用技術
              </th>
              <td className="px-4 py-3">
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
