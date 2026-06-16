import MaterialIcon from "@/components/landing/MaterialIcon";
import Link from "next/link";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "",
    highlighted: false,
    features: [
      "1 perfil profissional",
      "1 currículo salvo",
      "Inserções ilimitadas",
    ],
    cta: "Começar agora",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "R$ 9,90",
    period: "/mês",
    highlighted: true,
    features: [
      "Perfis ilimitados",
      "Currículos ilimitados",
      "Backup na nuvem",
      "Login/Sincronização",
    ],
    cta: "Assinar Pro",
    variant: "primary" as const,
  },
  {
    name: "Premium",
    price: "R$ 19,90",
    period: "/mês",
    highlighted: false,
    features: [
      "Tudo do plano Pro",
      "Histórico de vagas",
      "Dashboard analítico",
      "Controle de status",
    ],
    cta: "Assinar Premium",
    variant: "secondary" as const,
  },
];

export default function Pricing() {
  return (
    <section
      className="relative overflow-hidden bg-surface-container-lowest py-24"
      id="planos"
    >
      <div className="pricing-glow bg-primary/20" />
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-black text-on-surface">
            O plano ideal para sua busca
          </h2>
          <p className="text-sm text-on-surface-variant">
            Comece grátis, faça o upgrade quando precisar de mais poder.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.highlighted
                  ? "z-10 scale-105 border-2 border-primary bg-surface-container-high shadow-xl shadow-primary/10"
                  : "border-outline-variant/40 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                  Mais popular
                </div>
              )}
              <h3 className="mb-2 text-base font-bold">{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-2xl font-black">{plan.price}</span>
                {plan.period && (
                  <span className="text-[11px] text-on-surface-variant">
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-[13px] ${
                      plan.highlighted
                        ? "text-on-surface"
                        : "text-on-surface-variant"
                    }`}
                  >
                    <MaterialIcon
                      name="check_circle"
                      className="text-[18px] text-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`w-full rounded-xl py-3 text-center font-bold transition-all ${
                  plan.variant === "primary"
                    ? "bg-primary text-white shadow-lg hover:bg-surface-tint active:scale-95"
                    : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
