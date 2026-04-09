// /components/recruitment/types.ts (atau src/types/index.ts)

export interface RecruitmentData {
  id: number;
  title: string;
  division: string;
  type: string;
  imageUrl?: string; // Database pakai imageUrl, bukan image
  shortDesc: string;
  fullDescription: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  linkApply: string;
  isOpen: boolean;
}