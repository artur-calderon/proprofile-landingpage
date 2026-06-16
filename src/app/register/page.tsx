"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { ApiRequestError, register } from "@/lib/api";
import type { AuthResponse } from "@/lib/api-types";
import { Briefcase, CheckCircle2, Download } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const INSTALL_STEPS = [
  "Baixe o arquivo ZIP da extensão.",
  "Extraia o conteúdo em uma pasta no seu computador.",
  "Abra chrome://extensions no Google Chrome.",
  'Ative o "Modo do desenvolvedor" no canto superior direito.',
  'Clique em "Carregar sem compactação" e selecione a pasta extraída.',
  "Abra a extensão e faça login com o e-mail e senha que você acabou de criar.",
];

const PLAN_LABELS: Record<string, string> = {
  Free: "Grátis",
  Pro: "Pro",
  Premium: "Premium",
};

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<AuthResponse | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Nome deve ter pelo menos 2 caracteres.");
      return;
    }
    if (password.length < 8) {
      setError("Senha deve ter pelo menos 8 caracteres.");
      return;
    }

    setLoading(true);
    try {
      const response = await register({
        name: name.trim(),
        email: email.trim(),
        password,
      });
      setSuccess(response);
    } catch (err) {
      if (err instanceof ApiRequestError) {
        setError(err.message);
      } else {
        setError("Não foi possível criar a conta. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <header className="border-b border-border bg-surface/90">
          <div className="mx-auto flex h-14 max-w-lg items-center px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white">
                <Briefcase className="h-3.5 w-3.5" />
              </span>
              ProProfile
            </Link>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-4 py-12">
          <Card padding="lg" className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold">Conta criada com sucesso!</h1>
            <p className="mt-2 text-sm text-muted">
              Olá, <strong>{success.user.name}</strong>! Seu plano{" "}
              <strong>{PLAN_LABELS[success.user.plan] ?? success.user.plan}</strong>{" "}
              está ativo.
            </p>
            <p className="mt-1 text-sm text-muted">{success.user.email}</p>

            <a href="/api/download-extension" className="mt-8 block">
              <Button size="lg" className="w-full">
                <Download className="h-5 w-5" />
                Baixar extensão
              </Button>
            </a>

            <div className="mt-8 rounded-lg border border-border bg-background p-4 text-left">
              <p className="text-sm font-semibold">Como instalar</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
                {INSTALL_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <Link href="/" className="mt-6 inline-block text-sm text-primary hover:underline">
              Voltar para a página inicial
            </Link>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border bg-surface/90">
        <div className="mx-auto flex h-14 max-w-lg items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white">
              <Briefcase className="h-3.5 w-3.5" />
            </span>
            ProProfile
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Criar conta gratuita</h1>
          <p className="mt-2 text-sm text-muted">
            Cadastre-se no plano Grátis e baixe a extensão para começar.
          </p>
        </div>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <Input
                id="name"
                className="mt-1.5"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                className="mt-1.5"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                className="mt-1.5"
                placeholder="Mínimo 8 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Criando conta..." : "Criar conta"}
            </Button>
          </form>
        </Card>

        <p className="mt-6 text-center text-sm text-muted">
          Já tem conta?{" "}
          <span className="text-foreground">
            Faça login diretamente na extensão após instalá-la.
          </span>
        </p>
      </main>
    </div>
  );
}
