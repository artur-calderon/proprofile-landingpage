import { existsSync, readFileSync, readdirSync, statSync } from "fs";
import JSZip from "jszip";
import path from "path";
import { NextResponse } from "next/server";

function addDirectoryToZip(
  zip: JSZip,
  dirPath: string,
  archivePath: string
) {
  for (const entry of readdirSync(dirPath)) {
    const fullPath = path.join(dirPath, entry);
    const relativePath = archivePath ? `${archivePath}/${entry}` : entry;

    if (statSync(fullPath).isDirectory()) {
      addDirectoryToZip(zip, fullPath, relativePath);
    } else {
      zip.file(relativePath, readFileSync(fullPath));
    }
  }
}

export async function GET() {
  const distPath = path.join(process.cwd(), "public", "dist");

  if (!existsSync(distPath)) {
    return NextResponse.json(
      { error: { message: "Extensão não encontrada.", code: "NOT_FOUND" } },
      { status: 404 }
    );
  }

  const zip = new JSZip();
  addDirectoryToZip(zip, distPath, "");
  const buffer = await zip.generateAsync({ type: "arraybuffer" });

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="proprofile-extension.zip"',
    },
  });
}
