"use client";

import { motion } from "framer";

import EducationSection from "./_components/EducationSection";
import ProfileSection from "./_components/ProfileSection";
import ProjectHistorySection from "./_components/ProjectHistorySection";
import WorkExperienceSection from "./_components/WorkExperienceSection";
import { careerData } from "./_constants/career-data";

/** セクションごとのスライドインアニメーション設定 */
const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-2xl font-bold tracking-wide">経歴</h1>
        </motion.div>

        {sections.map((section, i) => (
          <motion.div
            key={section.key}
            custom={i}
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
          >
            {section}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
