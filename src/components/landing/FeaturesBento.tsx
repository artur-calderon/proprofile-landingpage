import MaterialIcon from "@/components/landing/MaterialIcon";

export default function FeaturesBento() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid auto-rows-[180px] grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6">
          <div className="group relative row-span-2 flex flex-col justify-end overflow-hidden rounded-[2rem] bg-primary p-10 text-white md:col-span-2 lg:col-span-3">
            <MaterialIcon
              name="auto_awesome"
              className="absolute right-10 top-10 text-[60px] opacity-20 transition-transform group-hover:scale-110"
            />
            <h3 className="mb-4 text-2xl font-black">
              Perfis Profissionais Reutilizáveis
            </h3>
            <p className="text-base text-primary-fixed opacity-90">
              Sua identidade profissional organizada por setor, cargo ou idioma.
              Nunca mais perca tempo buscando informações antigas.
            </p>
          </div>

          <div className="row-span-1 flex items-center gap-6 rounded-[2rem] bg-surface-container-high p-8 md:col-span-2 lg:col-span-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
              <MaterialIcon name="cloud_upload" className="text-[32px]" />
            </div>
            <div>
              <h4 className="text-base font-bold">Upload de Currículo</h4>
              <p className="text-[13px] text-on-surface-variant">
                Várias versões de CV a um clique de distância.
              </p>
            </div>
          </div>

          <div className="row-span-1 flex flex-col justify-center rounded-[2rem] bg-secondary-container p-8 text-on-secondary-container md:col-span-2 lg:col-span-2">
            <h4 className="mb-1 text-base font-bold">Inserção Rápida</h4>
            <p className="text-[13px]">Otimizado para velocidade total.</p>
          </div>

          <div className="group row-span-2 flex flex-col justify-between rounded-[2rem] border border-outline-variant/30 bg-surface-container-low p-8 md:col-span-2 lg:col-span-2">
            <div>
              <MaterialIcon name="groups" className="mb-4 text-[40px] text-primary" />
              <h4 className="text-base font-bold">Múltiplos Perfis (Pro)</h4>
            </div>
            <p className="text-sm text-on-surface-variant">
              Perfeito para quem atua em diferentes frentes ou idiomas (Português,
              Inglês, Espanhol).
            </p>
          </div>

          <div className="row-span-1 flex items-center justify-between rounded-[2rem] bg-inverse-surface p-8 text-surface md:col-span-2 lg:col-span-2">
            <div>
              <h4 className="text-base font-bold">Histórico</h4>
              <p className="text-[13px] opacity-70">Saiba onde você aplicou.</p>
            </div>
            <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold">
              PREMIUM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
