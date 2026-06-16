const STORAGE_KEY = "proprofile_data";

let store = null;

async function loadStore() {
  return new Promise((resolve) => {
    chrome.storage.local.get(STORAGE_KEY, (result) => {
      resolve(result[STORAGE_KEY] || null);
    });
  });
}

async function saveStore(data) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ [STORAGE_KEY]: data }, resolve);
  });
}

function getActiveProfile() {
  if (!store) return null;
  return store.profiles.find((p) => p.id === store.activeProfileId) || store.profiles[0];
}

function profileToText(profile) {
  const lines = [
    profile.name,
    "",
    `Title: ${profile.title}`,
    "",
    "About Me",
    profile.aboutMe,
    "",
    "Skills",
    profile.skills.join(", "),
    "",
    "Experience",
  ];

  profile.experience.forEach((exp) => {
    const dates = exp.current
      ? `${exp.startDate} – Present`
      : `${exp.startDate} – ${exp.endDate}`;
    lines.push(`• ${exp.role} at ${exp.company} (${dates})`);
    lines.push(`  ${exp.responsibilities}`);
  });

  lines.push("", "Education");
  profile.education.forEach((edu) => {
    lines.push(`• ${edu.degree} – ${edu.institution} (${edu.year})`);
  });

  return lines.join("\n");
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 1500);
}

async function copyText(text) {
  await navigator.clipboard.writeText(text);
  showToast("Copied!");
}

function renderPreview() {
  const profile = getActiveProfile();
  if (!profile) return;

  document.getElementById("previewTitle").textContent =
    profile.title || "No title set";
  document.getElementById("previewAbout").textContent =
    profile.aboutMe || "No summary set";

  const skillsEl = document.getElementById("previewSkills");
  skillsEl.innerHTML = "";
  profile.skills.slice(0, 6).forEach((skill) => {
    const chip = document.createElement("span");
    chip.className = "skill-chip";
    chip.textContent = skill;
    skillsEl.appendChild(chip);
  });
  if (profile.skills.length > 6) {
    const more = document.createElement("span");
    more.className = "skill-chip";
    more.textContent = `+${profile.skills.length - 6}`;
    skillsEl.appendChild(more);
  }
}

function renderDropdown() {
  const select = document.getElementById("profileDropdown");
  select.innerHTML = "";

  store.profiles.forEach((profile) => {
    const option = document.createElement("option");
    option.value = profile.id;
    option.textContent = profile.name;
    option.selected = profile.id === store.activeProfileId;
    select.appendChild(option);
  });
}

async function init() {
  store = await loadStore();
  if (!store) {
    document.getElementById("previewTitle").textContent = "No profile found";
    return;
  }

  renderDropdown();
  renderPreview();

  document.getElementById("profileDropdown").addEventListener("change", async (e) => {
    store.activeProfileId = e.target.value;
    await saveStore(store);
    renderPreview();
  });

  document.getElementById("copyBtn").addEventListener("click", () => {
    const profile = getActiveProfile();
    if (profile) copyText(profileToText(profile));
  });

  document.getElementById("copyTitleBtn").addEventListener("click", () => {
    const profile = getActiveProfile();
    if (profile) copyText(profile.title);
  });

  document.getElementById("copyAboutBtn").addEventListener("click", () => {
    const profile = getActiveProfile();
    if (profile) copyText(profile.aboutMe);
  });

  document.getElementById("copySkillsBtn").addEventListener("click", () => {
    const profile = getActiveProfile();
    if (profile) copyText(profile.skills.join(", "));
  });

  document.getElementById("openDashboard").addEventListener("click", (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: "http://localhost:3000/dashboard" });
  });
}

document.addEventListener("DOMContentLoaded", init);
