"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import type { Education } from "@/lib/types";
import { Plus, Trash2 } from "lucide-react";

interface EducationSectionProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export default function EducationSection({
  education,
  onChange,
}: EducationSectionProps) {
  const addEntry = () => {
    onChange([
      ...education,
      {
        id: crypto.randomUUID(),
        degree: "",
        institution: "",
        year: "",
      },
    ]);
  };

  const updateEntry = (id: string, updates: Partial<Education>) => {
    onChange(
      education.map((edu) => (edu.id === id ? { ...edu, ...updates } : edu))
    );
  };

  const removeEntry = (id: string) => {
    onChange(education.filter((edu) => edu.id !== id));
  };

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Education</h3>
          <p className="mt-1 text-sm text-muted">
            Degrees, certifications, and courses.
          </p>
        </div>
        <Button variant="secondary" size="sm" onClick={addEntry}>
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>

      <div className="mt-6 space-y-4">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col gap-3 rounded-lg border border-border bg-background p-4 sm:flex-row sm:items-start"
          >
            <Input
              placeholder="Degree / Certification"
              value={edu.degree}
              onChange={(e) => updateEntry(edu.id, { degree: e.target.value })}
              className="flex-1"
            />
            <Input
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                updateEntry(edu.id, { institution: e.target.value })
              }
              className="flex-1"
            />
            <Input
              placeholder="Year"
              value={edu.year}
              onChange={(e) => updateEntry(edu.id, { year: e.target.value })}
              className="w-full sm:w-24"
            />
            <Button variant="ghost" size="sm" onClick={() => removeEntry(edu.id)}>
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        ))}

        {education.length === 0 && (
          <p className="text-center text-sm text-muted py-4">
            No education entries yet.
          </p>
        )}
      </div>
    </Card>
  );
}
