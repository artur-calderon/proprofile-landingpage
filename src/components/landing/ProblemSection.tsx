import MaterialIcon from "@/components/landing/MaterialIcon";

const painPoints = [
  {
    icon: "history",
    title: "Repetir experiências",
    description:
      "Chega de copiar e colar sua história profissional dezenas de vezes ao dia em cada novo formulário que abre.",
  },
  {
    icon: "edit_note",
    title: "Reescrever resumo",
    description:
      "Esqueça a tarefa de ajustar e reformatar seus resumos de carreira para caberem em campos de texto limitados.",
  },
  {
    icon: "attach_file_add",
    title: "Reanexar currículos",
    description:
      "Suas versões de currículo ficam perdidas em pastas. Nós as mantemos sincronizadas e prontas para o upload instantâneo.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-on-surface">
            Cansado da repetição infinita?
          </h2>
          <p className="text-sm text-on-surface-variant">
            Candidatar-se a vagas não deveria ser um trabalho de tempo integral.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {painPoints.map(({ icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-outline-variant/30 bg-surface-container-low p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
                <MaterialIcon name={icon} className="text-primary" />
              </div>
              <h3 className="mb-3 text-base font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
