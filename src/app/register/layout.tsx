import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar conta — ProProfile",
  description: "Cadastre-se gratuitamente e baixe a extensão Chrome do ProProfile.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
