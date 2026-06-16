"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import type { Experience } from "@/lib/types";
import { Plus, Trash2 } from "lucide-react";

interface ExperienceSectionProps {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

export default function ExperienceSection({
  experience,
  onChange,
}: ExperienceSectionProps) {
  const addEntry = () => {
    onChange([
      ...experience,
      {
        id: crypto.randomUUID(),
        role: "",
        company: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
        current: false,
      },
    ]);
  };

  const updateEntry = (id: string, updates: Partial<Experience>) => {
    onChange(
      experience.map((exp) => (exp.id === id ? { ...exp, ...updates } : exp))
    );
  };

  const removeEntry = (id: string) => {
    onChange(experience.filter((exp) => exp.id !== id));
  };

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Experience</h3>
          <p className="mt-1 text-sm text-muted">
            Role, company, responsibilities, and dates.
          </p>
        </div>
        <Button variant="secondary" size="sm" onClick={addEntry}>
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>

      <div className="mt-6 space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="rounded-lg border border-border bg-background p-4"
          >
            <div className="mb-3 flex justify-end">
              <Button variant="ghost" size="sm" onClick={() => removeEntry(exp.id)}>
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                placeholder="Role"
                value={exp.role}
                onChange={(e) => updateEntry(exp.id, { role: e.target.value })}
              />
              <Input
                placeholder="Company"
                value={exp.company}
                onChange={(e) => updateEntry(exp.id, { company: e.target.value })}
              />
              <Input
                type="month"
                placeholder="Start date"
                value={exp.startDate}
                onChange={(e) => updateEntry(exp.id, { startDate: e.target.value })}
              />
              <Input
                type="month"
                placeholder="End date"
                value={exp.endDate}
                disabled={exp.current}
                onChange={(e) => updateEntry(exp.id, { endDate: e.target.value })}
              />
            </div>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) =>
                  updateEntry(exp.id, {
                    current: e.target.checked,
                    endDate: e.target.checked ? "" : exp.endDate,
                  })
                }
                className="rounded border-border text-primary focus:ring-primary"
              />
              Currently working here
            </label>
            <Textarea
              className="mt-3"
              placeholder="Responsibilities and achievements..."
              value={exp.responsibilities}
              onChange={(e) =>
                updateEntry(exp.id, { responsibilities: e.target.value })
              }
            />
          </div>
        ))}

        {experience.length === 0 && (
          <p className="text-center text-sm text-muted py-4">
            No experience entries yet. Click Add to create one.
          </p>
        )}
      </div>
    </Card>
  );
}
