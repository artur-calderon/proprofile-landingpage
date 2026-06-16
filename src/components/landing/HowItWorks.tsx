import Image from "next/image";

const steps = [
  {
    title: "Crie seu perfil profissional",
    description:
      "Centralize todos os seus dados de carreira em um único lugar seguro dentro da extensão.",
  },
  {
    title: "Salve seu currículo",
    description:
      "Faça upload das suas diferentes versões de CV (PDF/Docx) para acesso rápido.",
  },
  {
    title: "Escolha o campo",
    description:
      "Navegue até qualquer site de vagas. Clique no campo que deseja preencher.",
  },
  {
    title: "Insira com um clique",
    description:
      "Selecione o dado desejado no popup do ProProfile e pronto. Formulário preenchido.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface-container-lowest py-24" id="recursos">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex-1 space-y-12">
            <h2 className="text-[32px] font-black leading-tight">
              Como o ProProfile acelera seu sucesso:
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="group flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-bold transition-colors group-hover:text-primary">
                      {step.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="relative rounded-[2rem] bg-gradient-to-tr from-primary/20 to-secondary-container p-2">
              <Image
                alt="Funcionalidade da Extensão"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzpp3VBSz2yaQTjBwqgiMJpWgzno8a_UtqHXV6Zbt98rir9N4xOCsxd1ZXFhTgHkosvebGRun3Pu0S6Fd3Y75_L6qZN4ZWuc3Qhw7_6oNUQX8zVuU66ylYpFVI-UTNE9AHKeCDrWdSKB-VvUGV790o7zoJNyhXl_SgQWhJAvfbpqUKJxa2MFklhkQubbfqoURxd2C-GqRPSIccQmLiMQy19Cyyq7-xoAUoxYdMfOg-NPrn30fm0pUZS3AYVpSBSUi6a_ZLtxmD3jtZ"
                width={800}
                height={500}
                className="h-[500px] w-full rounded-[1.8rem] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
