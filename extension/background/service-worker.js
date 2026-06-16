const STORAGE_KEY = "proprofile_data";

function getDefaultStore() {
  const profileId = crypto.randomUUID();
  return {
    profiles: [
      {
        id: profileId,
        name: "Default Profile",
        title: "Full Stack Developer",
        aboutMe:
          "Passionate developer with 5+ years building scalable web applications. Focused on clean code, user experience, and delivering measurable business impact.",
        skills: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
        experience: [
          {
            id: crypto.randomUUID(),
            role: "Senior Software Engineer",
            company: "TechCorp Inc.",
            responsibilities:
              "Led development of customer-facing dashboard serving 50k+ users.",
            startDate: "2022-01",
            endDate: "",
            current: true,
          },
        ],
        education: [
          {
            id: crypto.randomUUID(),
            degree: "B.S. Computer Science",
            institution: "State University",
            year: "2018",
          },
        ],
        updatedAt: new Date().toISOString(),
      },
    ],
    activeProfileId: profileId,
  };
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(STORAGE_KEY, (result) => {
    if (!result[STORAGE_KEY]) {
      chrome.storage.local.set({ [STORAGE_KEY]: getDefaultStore() });
    }
  });
});
