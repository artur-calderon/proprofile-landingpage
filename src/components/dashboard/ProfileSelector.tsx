"use client";

import Button from "@/components/ui/Button";
import type { ProfileStore } from "@/lib/types";
import { Plus, Trash2 } from "lucide-react";

interface ProfileSelectorProps {
  store: ProfileStore;
  onSelect: (id: string) => void;
  onCreate: (name: string) => void;
  onDelete: (id: string) => void;
}

export default function ProfileSelector({
  store,
  onSelect,
  onCreate,
  onDelete,
}: ProfileSelectorProps) {
  const handleCreate = () => {
    const name = prompt("Profile name:");
    if (name?.trim()) onCreate(name.trim());
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <select
        value={store.activeProfileId}
        onChange={(e) => onSelect(e.target.value)}
        className="h-10 flex-1 rounded-lg border border-border bg-surface px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {store.profiles.map((profile) => (
          <option key={profile.id} value={profile.id}>
            {profile.name}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <Button variant="secondary" size="sm" onClick={handleCreate}>
          <Plus className="h-4 w-4" />
          New Profile
        </Button>
        {store.profiles.length > 1 && (
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(store.activeProfileId)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
