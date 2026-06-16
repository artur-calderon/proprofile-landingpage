"use client";

import MaterialIcon from "@/components/landing/MaterialIcon";
import { useState } from "react";

const faqs = [
  {
    question: "O ProProfile funciona em qualquer site?",
    answer:
      "Sim! A extensão é projetada para identificar campos de formulários em praticamente qualquer plataforma de recrutamento, incluindo LinkedIn, Gupy, Greenhouse, Lever e muitas outras.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Absolutamente. Utilizamos criptografia de ponta a ponta e seus dados só são acessados localmente ou via backup seguro se você optar pelo plano Pro. Nós nunca vendemos seus dados para terceiros.",
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim, sem letras miúdas. Você pode gerenciar ou cancelar sua assinatura diretamente no painel de configurações da extensão com apenas um clique.",
  },
  {
    question: "Qual a diferença do plano gratuito?",
    answer:
      "No plano gratuito você pode criar 1 perfil completo e manter 1 currículo base. É perfeito para quem está focado em um único tipo de oportunidade. Os planos pagos liberam múltiplos perfis e ferramentas de gestão.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-surface-container-low"
                >
                  <span className="text-base font-bold">{faq.question}</span>
                  <MaterialIcon
                    name="expand_more"
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-outline-variant/10 p-6 pt-0 text-sm text-on-surface-variant">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
