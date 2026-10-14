export type ViewName = 'resume' | 'career';
export type LanguageName = 'ja' | 'zh';

type ResumeEntry = {
  year: string;
  month: string;
  title: string;
};

type LicenseEntry = { year: string; month: string; name: string };

type ProjectItem = {
  period: string;
  title: string;
  company: string;
  role: string;
  overview: string;
  responsibilities: string[];
  technologies: string;
  outcome: string;
};

export type ResumeData = {
  photo: string;
  updatedAt: string;
  kana: string;
  name: string;
  romanName: string;
  headline: string;
  developmentYears: string;
  primaryTechnologies: string;
  introduction: string;
  nationality: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
  stations: string;
  address: string;
  addressKana: string;
  residenceStatus: string;
  residenceExpiry: string;
  skills: string[];
  languages: string[];
  education: ResumeEntry[];
  experience: ResumeEntry[];
  licenses: LicenseEntry[];
  japanReason: string;
  selfPr: string;
  motivation: string;
  availability: string;
  preferredLocation: string;
  family: string;
  health: string;
  careerSummary: string;
  projects: ProjectItem[];
};

export type ResumeRecords = Record<LanguageName, ResumeData>;
