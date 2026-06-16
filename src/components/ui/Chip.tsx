import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ChipProps {
  label: string;
  onRemove?: () => void;
  className?: string;
}

export default function Chip({ label, onRemove, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-primary",
        className
      )}
    >
      {label}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="rounded-full p-0.5 hover:bg-primary/10"
          aria-label={`Remove ${label}`}
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}
