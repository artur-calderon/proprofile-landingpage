import MaterialIcon from "@/components/landing/MaterialIcon";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-outline-variant/30 bg-surface/80 px-4 shadow-sm backdrop-blur-md">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold text-primary">
          ProProfile
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#recursos"
            className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant transition-colors hover:text-primary"
          >
            Recursos
          </a>
          <a
            href="#planos"
            className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant transition-colors hover:text-primary"
          >
            Planos
          </a>
          <a
            href="#faq"
            className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant transition-colors hover:text-primary"
          >
            FAQ
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/register"
          className="hidden rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wide text-on-surface-variant transition-all duration-150 hover:bg-surface-container-low active:scale-95 sm:block"
        >
          Criar conta
        </Link>
        <Link
          href="/register"
          className="rounded-lg bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition-all duration-150 hover:bg-surface-tint active:scale-95"
        >
          Instalar extensão
        </Link>
      </div>
    </header>
  );
}
