import { jsPDF } from "jspdf";
import type { Profile } from "./types";

export function profileToText(profile: Profile): string {
  const lines: string[] = [
    profile.name,
    "=".repeat(profile.name.length),
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
    lines.push("");
  });

  lines.push("Education");
  profile.education.forEach((edu) => {
    lines.push(`• ${edu.degree} – ${edu.institution} (${edu.year})`);
  });

  return lines.join("\n");
}

export async function copyProfileToClipboard(profile: Profile): Promise<void> {
  await navigator.clipboard.writeText(profileToText(profile));
}

export function downloadProfileJson(profile: Profile): void {
  const blob = new Blob([JSON.stringify(profile, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${profile.name.replace(/\s+/g, "-").toLowerCase()}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function exportProfilePdf(profile: Profile): void {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  const addLine = (text: string, size = 11, bold = false) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, 170);
    lines.forEach((line: string) => {
      if (y > 270) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += size * 0.5;
    });
    y += 4;
  };

  addLine(profile.name, 18, true);
  addLine(profile.title, 13, true);
  addLine("About Me", 12, true);
  addLine(profile.aboutMe);
  addLine("Skills", 12, true);
  addLine(profile.skills.join(", "));
  addLine("Experience", 12, true);

  profile.experience.forEach((exp) => {
    const dates = exp.current
      ? `${exp.startDate} – Present`
      : `${exp.startDate} – ${exp.endDate}`;
    addLine(`${exp.role} – ${exp.company} (${dates})`, 11, true);
    addLine(exp.responsibilities);
  });

  addLine("Education", 12, true);
  profile.education.forEach((edu) => {
    addLine(`${edu.degree} – ${edu.institution} (${edu.year})`);
  });

  doc.save(`${profile.name.replace(/\s+/g, "-").toLowerCase()}.pdf`);
}
