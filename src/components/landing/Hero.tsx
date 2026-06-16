import MaterialIcon from "@/components/landing/MaterialIcon";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[921px] items-center bg-surface-container-lowest px-4 py-20">
      <div className="pricing-glow bg-primary" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="z-10 space-y-6 text-center lg:text-left">
          <span className="inline-block rounded-full bg-secondary-container px-3 py-1 text-[11px] font-medium text-on-secondary-container">
            CONQUISTE MAIS COM MENOS ESFORÇO
          </span>
          <h1 className="text-[40px] font-black leading-tight tracking-tighter text-on-surface md:text-[56px]">
            Pare de preencher as mesmas informações em toda candidatura.
          </h1>
          <p className="mx-auto max-w-lg text-base leading-6 text-on-surface-variant lg:mx-0">
            Crie perfis profissionais reutilizáveis e preencha formulários de
            emprego em segundos com nossa extensão de navegador inteligente.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/register"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-primary/20"
            >
              <MaterialIcon name="download" />
              Instalar extensão
            </Link>
            <a
              href="#planos"
              className="rounded-xl bg-surface-container-high px-8 py-4 font-semibold text-on-surface transition-all hover:bg-surface-container-highest"
            >
              Ver planos
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="glass-card group rotate-1 rounded-3xl p-4 shadow-2xl transition-transform duration-500 hover:rotate-0">
            <Image
              alt="Interface de Candidatura"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAO1Wgmzuw3xpexoNA9Ia7Xe29ipY1fkelhIMwQCE6l4qh2SCgvvpK0IqpZI7-CSaA68CBCy5l00qQPwR0iat_8oBzUwDtBQijpnKDsVpyTwhOpPNffmIk9zbKcI57L4TXmTrbA7_NqoyzBIPgew-LGmvET3OufcMDUjEOUK9imtkw9XCmh9pAG22aMCUfVOrli9TdwivItMS6KMBxI1m8Cn0svqFMZ2UEn20XXNYxSZ0HbzZIyPdxhTFlHqpfMbIfjJ9PLK1G5pUP"
              width={800}
              height={500}
              className="h-auto w-full rounded-2xl border border-outline-variant"
              priority
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-outline-variant bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <MaterialIcon name="bolt" />
                </div>
                <div>
                  <p className="text-xs font-bold">Preenchido!</p>
                  <p className="text-[10px] text-on-surface-variant">
                    Economizou 12 minutos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
