import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="px-4 py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-primary p-12 text-center text-white shadow-2xl">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_white,_transparent)]" />
        </div>
        <h2 className="mb-6 text-[36px] font-black leading-tight md:text-[48px]">
          Pronto para transformar sua busca por emprego?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-xl opacity-90">
          Junte-se a milhares de profissionais que economizam horas todos os dias
          com o ProProfile.
        </p>
        <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="rounded-2xl bg-white px-10 py-5 font-black text-primary shadow-xl transition-transform hover:scale-105"
          >
            Instalar extensão grátis
          </Link>
          <a
            href="mailto:suporte@proprofile.com"
            className="rounded-2xl border border-white/20 bg-primary-container px-10 py-5 font-bold text-white transition-colors hover:bg-white/10"
          >
            Falar com suporte
          </a>
        </div>
      </div>
    </section>
  );
}
