import type { Profile, ProfileStore } from "./types";

export function createEmptyProfile(name: string): Profile {
  return {
    id: crypto.randomUUID(),
    name,
    title: "",
    aboutMe: "",
    skills: [],
    experience: [],
    education: [],
    updatedAt: new Date().toISOString(),
  };
}

export function getDefaultStore(): ProfileStore {
  const profile = createEmptyProfile("Default Profile");
  profile.title = "Full Stack Developer";
  profile.aboutMe =
    "Passionate developer with 5+ years building scalable web applications. Focused on clean code, user experience, and delivering measurable business impact.";
  profile.skills = [
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
  ];
  profile.experience = [
    {
      id: crypto.randomUUID(),
      role: "Senior Software Engineer",
      company: "TechCorp Inc.",
      responsibilities:
        "Led development of customer-facing dashboard serving 50k+ users. Mentored junior developers and established code review practices.",
      startDate: "2022-01",
      endDate: "",
      current: true,
    },
  ];
  profile.education = [
    {
      id: crypto.randomUUID(),
      degree: "B.S. Computer Science",
      institution: "State University",
      year: "2018",
    },
  ];

  return {
    profiles: [profile],
    activeProfileId: profile.id,
  };
}
