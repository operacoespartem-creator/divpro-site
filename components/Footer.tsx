import Link from 'next/link';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Logo, ModuleRule } from './Brand';
import { empresa, produtos, aplicacoes } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-azul-900 text-gelo">
      <ModuleRule className="text-white/10" />

      <div className="container-dp grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" width={172} />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-gelo/70">
            {empresa.descricaoCurta} Projeto, fabricação e instalação sob uma
            única responsabilidade.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href={empresa.instagram}
              aria-label="Instagram da DivPro"
              className="border border-white/20 p-2.5 transition-colors hover:border-azul-vivo hover:text-azul-vivo"
            >
              <Instagram size={17} />
            </a>
            <a
              href={empresa.linkedin}
              aria-label="LinkedIn da DivPro"
              className="border border-white/20 p-2.5 transition-colors hover:border-azul-vivo hover:text-azul-vivo"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`https://wa.me/${empresa.whatsapp}`}
              aria-label="WhatsApp da DivPro"
              className="border border-white/20 p-2.5 transition-colors hover:border-azul-vivo hover:text-azul-vivo"
            >
              <MessageCircle size={17} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-azul-vivo">Soluções</h3>
          <ul className="mt-5 space-y-3">
            {produtos.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/solucoes/${p.slug}`}
                  className="text-sm text-gelo/70 transition-colors hover:text-white"
                >
                  {p.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-azul-vivo">Aplicações</h3>
          <ul className="mt-5 space-y-3">
            {aplicacoes.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/aplicacoes#${a.slug}`}
                  className="text-sm text-gelo/70 transition-colors hover:text-white"
                >
                  {a.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-azul-vivo">Contato</h3>
          <ul className="mt-5 space-y-3 text-sm text-gelo/70">
            <li>{empresa.endereco}</li>
            <li>
              <a href={`tel:${empresa.telefone}`} className="hover:text-white">
                {empresa.telefone}
              </a>
            </li>
            <li>
              <a href={`mailto:${empresa.email}`} className="hover:text-white">
                {empresa.email}
              </a>
            </li>
          </ul>
          <Link
            href="/contato"
            className="btn-ghost mt-7 border-white/25 text-white hover:border-azul-vivo hover:text-azul-vivo"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-dp flex flex-col gap-2 py-6 text-xs text-gelo/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {empresa.nome} {empresa.assinatura}.
            Todos os direitos reservados.
          </p>
          <p>
            {empresa.cidade} — {empresa.estado}
          </p>
        </div>
      </div>
    </footer>
  );
}
