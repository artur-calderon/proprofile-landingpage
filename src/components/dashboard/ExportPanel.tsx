"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { Profile } from "@/lib/types";
import {
  copyProfileToClipboard,
  downloadProfileJson,
  exportProfilePdf,
} from "@/lib/export";
import { Check, Copy, Download, FileText } from "lucide-react";
import { useState } from "react";

interface ExportPanelProps {
  profile: Profile;
}

export default function ExportPanel({ profile }: ExportPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyProfileToClipboard(profile);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <h3 className="font-semibold">Export Tools</h3>
      <p className="mt-1 text-sm text-muted">
        Copy, download, or share your profile data.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" onClick={handleCopy}>
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          {copied ? "Copied!" : "Copy to Clipboard"}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => downloadProfileJson(profile)}
        >
          <Download className="h-4 w-4" />
          Download JSON
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => exportProfilePdf(profile)}
        >
          <FileText className="h-4 w-4" />
          Export PDF
        </Button>
      </div>
    </Card>
  );
}
