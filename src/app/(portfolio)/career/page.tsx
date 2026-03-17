"use client";

import EducationSection from "./_components/EducationSection";
import ProfileSection from "./_components/ProfileSection";
import ProjectHistorySection from "./_components/ProjectHistorySection";
import WorkExperienceSection from "./_components/WorkExperienceSection";
import { careerData } from "./_constants/career-data";
import { FadeIn, SlideUp } from "@/shared/components/animations";

const CareerPage = () => {
  const sections = [
    <ProfileSection
      key="profile"
      name={careerData.name}
      birthday={careerData.birthday}
      profile={careerData.profile}
    />,
    <EducationSection key="education" education={careerData.education} />,
    <WorkExperienceSection
      key="work"
      workExperience={careerData.workExperience}
    />,
    <ProjectHistorySection key="history" history={careerData.history} />,
  ];

  return (
    <div id="Career" className="min-h-lvh w-full p-4 sm:p-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <FadeIn duration={1.0}>
          <h1 className="text-2xl font-bold tracking-wide">経歴</h1>
        </FadeIn>

        {sections.map((section, i) => (
          <SlideUp key={section.key} delay={i * 0.15}>
            {section}
          </SlideUp>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
