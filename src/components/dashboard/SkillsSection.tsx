"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Input from "@/components/ui/Input";
import { Plus, Upload } from "lucide-react";
import { useState } from "react";

interface SkillsSectionProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillsSection({ skills, onChange }: SkillsSectionProps) {
  const [input, setInput] = useState("");

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onChange([...skills, trimmed]);
      setInput("");
    }
  };

  const bulkImport = () => {
    const text = prompt("Paste skills (comma or newline separated):");
    if (!text) return;
    const imported = text
      .split(/[,\n]/)
      .map((s) => s.trim())
      .filter(Boolean);
    const unique = [...new Set([...skills, ...imported])];
    onChange(unique);
  };

  return (
    <Card>
      <h3 className="font-semibold">Skills</h3>
      <p className="mt-1 text-sm text-muted">
        Add individually or bulk import via CSV/comma-separated list.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            onRemove={() => onChange(skills.filter((s) => s !== skill))}
          />
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <Input
          placeholder="Add a skill..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
          className="flex-1"
        />
        <Button variant="secondary" size="sm" onClick={addSkill}>
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="sm" onClick={bulkImport}>
          <Upload className="h-4 w-4" />
          Bulk
        </Button>
      </div>
    </Card>
  );
}
