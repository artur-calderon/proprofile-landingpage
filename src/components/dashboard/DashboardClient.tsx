"use client";

import EducationSection from "@/components/dashboard/EducationSection";
import ExperienceSection from "@/components/dashboard/ExperienceSection";
import ExportPanel from "@/components/dashboard/ExportPanel";
import ProfileSelector from "@/components/dashboard/ProfileSelector";
import SkillsSection from "@/components/dashboard/SkillsSection";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { createEmptyProfile } from "@/lib/default-profiles";
import { loadStore, saveStore } from "@/lib/storage";
import type { Profile, ProfileStore } from "@/lib/types";
import { Briefcase, Save } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function DashboardClient() {
  const [store, setStore] = useState<ProfileStore | null>(null);
  const [saved, setSaved] = useState(true);
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setStore(loadStore());
  }, []);

  const persist = useCallback((next: ProfileStore) => {
    setStore(next);
    setSaved(false);
    clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      saveStore(next);
      setSaved(true);
    }, 500);
  }, []);

  if (!store) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  const activeProfile = store.profiles.find(
    (p) => p.id === store.activeProfileId
  );

  if (!activeProfile) return null;

  const updateProfile = (updates: Partial<Profile>) => {
    persist({
      ...store,
      profiles: store.profiles.map((p) =>
        p.id === activeProfile.id
          ? { ...p, ...updates, updatedAt: new Date().toISOString() }
          : p
      ),
    });
  };

  const selectProfile = (id: string) => {
    persist({ ...store, activeProfileId: id });
  };

  const createProfile = (name: string) => {
    const profile = createEmptyProfile(name);
    persist({
      profiles: [...store.profiles, profile],
      activeProfileId: profile.id,
    });
  };

  const deleteProfile = (id: string) => {
    if (!confirm("Delete this profile? This cannot be undone.")) return;
    const remaining = store.profiles.filter((p) => p.id !== id);
    persist({
      profiles: remaining,
      activeProfileId: remaining[0]?.id ?? "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white">
              <Briefcase className="h-3.5 w-3.5" />
            </span>
            ProProfile
          </Link>
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <Save className="h-3.5 w-3.5" />
            {saved ? "All changes saved" : "Saving..."}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Profile Dashboard</h1>
          <p className="mt-1 text-sm text-muted">
            Edit your professional profiles. Changes auto-save locally.
          </p>
        </div>

        <div className="mb-6">
          <ProfileSelector
            store={store}
            onSelect={selectProfile}
            onCreate={createProfile}
            onDelete={deleteProfile}
          />
        </div>

        <div className="space-y-6">
          <Card>
            <label className="text-sm font-medium">Profile Name</label>
            <Input
              className="mt-2"
              value={activeProfile.name}
              onChange={(e) => updateProfile({ name: e.target.value })}
            />
          </Card>

          <Card>
            <label className="text-sm font-medium">Title / Position</label>
            <Input
              className="mt-2"
              placeholder="e.g. Full Stack Developer"
              value={activeProfile.title}
              onChange={(e) => updateProfile({ title: e.target.value })}
            />
          </Card>

          <Card>
            <label className="text-sm font-medium">About Me</label>
            <Textarea
              className="mt-2"
              placeholder="A concise 2-4 line professional summary..."
              value={activeProfile.aboutMe}
              onChange={(e) => updateProfile({ aboutMe: e.target.value })}
              rows={4}
            />
          </Card>

          <SkillsSection
            skills={activeProfile.skills}
            onChange={(skills) => updateProfile({ skills })}
          />

          <ExperienceSection
            experience={activeProfile.experience}
            onChange={(experience) => updateProfile({ experience })}
          />

          <EducationSection
            education={activeProfile.education}
            onChange={(education) => updateProfile({ education })}
          />

          <ExportPanel profile={activeProfile} />
        </div>
      </main>
    </div>
  );
}
