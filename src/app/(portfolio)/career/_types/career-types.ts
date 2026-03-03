/** 学歴 */
export type Education = {
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
};

/** 職歴 */
export type WorkExperience = {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
};

/** プロジェクト経歴 */
export type ProjectHistory = {
  title: string;
  description: string;
  role: string;
  technologies: string[];
};

/** 経歴データ全体 */
export type CareerData = {
  name: string;
  birthday: string;
  education: Education[];
  workExperience: WorkExperience[];
  profile: string;
  history: ProjectHistory[];
};
