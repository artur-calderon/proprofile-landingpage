export interface Experience {
  id: string;
  role: string;
  company: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  aboutMe: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  updatedAt: string;
}

export interface ProfileStore {
  profiles: Profile[];
  activeProfileId: string;
}

export const STORAGE_KEY = "proprofile_data";
