import MaterialIcon from "@/components/landing/MaterialIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-lowest py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-4">
        <div>
          <span className="mb-6 block text-xl font-bold text-primary">
            ProProfile
          </span>
          <p className="text-[13px] leading-relaxed text-on-surface-variant">
            A ferramenta definitiva para organização de carreira e automação de
            candidaturas. Economize tempo, ganhe precisão.
          </p>
        </div>
        <div>
          <h5 className="mb-6 text-xs font-bold uppercase tracking-wider">
            Produto
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/register"
                className="text-[13px] text-on-surface-variant transition-colors hover:text-primary"
              >
                Extensão Chrome
              </Link>
            </li>
            <li>
              <a
                href="#recursos"
                className="text-[13px] text-on-surface-variant transition-colors hover:text-primary"
              >
                Recursos Pro
              </a>
            </li>
            <li>
              <a
                href="#planos"
                className="text-[13px] text-on-surface-variant transition-colors hover:text-primary"
              >
                Planos e Preços
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-xs font-bold uppercase tracking-wider">
            Suporte
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                href="#faq"
                className="text-[13px] text-on-surface-variant transition-colors hover:text-primary"
              >
                Central de Ajuda
              </a>
            </li>
            <li>
              <a
                href="mailto:suporte@proprofile.com"
                className="text-[13px] text-on-surface-variant transition-colors hover:text-primary"
              >
                Fale Conosco
              </a>
            </li>
            <li>
              <span className="text-[13px] text-on-surface-variant">
                Comunidade
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-xs font-bold uppercase tracking-wider">
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <span className="text-[13px] text-on-surface-variant">
                Privacidade
              </span>
            </li>
            <li>
              <span className="text-[13px] text-on-surface-variant">
                Termos de Uso
              </span>
            </li>
            <li>
              <span className="text-[13px] text-on-surface-variant">
                Segurança
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-outline-variant/10 px-4 pt-8 md:flex-row">
        <p className="text-[12px] text-on-surface-variant">
          © {new Date().getFullYear()} ProProfile. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <span className="text-on-surface-variant">
            <MaterialIcon name="share" />
          </span>
          <span className="text-on-surface-variant">
            <MaterialIcon name="public" />
          </span>
          <a
            href="mailto:suporte@proprofile.com"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            <MaterialIcon name="mail" />
          </a>
        </div>
      </div>
    </footer>
  );
}
