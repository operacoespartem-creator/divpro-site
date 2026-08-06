import type { Metadata } from 'next';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Eyebrow, Nabla } from '@/components/Brand';
import { empresa, produtos } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Solicite a especificação e o orçamento das divisórias sanitárias do seu projeto.',
};

const canais = [
  { icone: Phone, rotulo: 'Telefone', valor: empresa.telefone, href: `tel:${empresa.telefone}` },
  { icone: Mail, rotulo: 'E-mail', valor: empresa.email, href: `mailto:${empresa.email}` },
  {
    icone: MessageCircle,
    rotulo: 'WhatsApp',
    valor: 'Iniciar conversa',
    href: `https://wa.me/${empresa.whatsapp}`,
  },
  { icone: MapPin, rotulo: 'Onde estamos', valor: empresa.endereco },
];

const campo =
  'w-full border border-gelo-200 bg-white px-4 py-3.5 text-[15px] text-tinta transition-colors placeholder:text-tinta-400 focus:border-azul focus:outline-none';

export default function ContatoPage() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-dp grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <Eyebrow className="text-azul-vivo">Contato</Eyebrow>
          <h1 className="h-display mt-6 text-[2.4rem] text-tinta md:text-5xl">
            Vamos especificar o seu projeto.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-tinta-600">
            Mande a planta, as medidas ou só uma foto do ambiente. Devolvemos a
            especificação com linha indicada, acabamento e prazo de instalação.
          </p>

          <ul className="mt-12 divide-y divide-gelo-200 border-y border-gelo-200">
            {canais.map((c) => {
              const Icone = c.icone;
              const conteudo = (
                <div className="flex items-center gap-4 py-5">
                  <Icone size={18} className="shrink-0 text-azul-vivo" />
                  <div>
                    <p className="eyebrow text-tinta-400">{c.rotulo}</p>
                    <p className="mt-1 text-[15px] text-tinta-600">{c.valor}</p>
                  </div>
                </div>
              );
              return (
                <li key={c.rotulo}>
                  {c.href ? (
                    <a href={c.href} className="block transition-colors hover:text-azul">
                      {conteudo}
                    </a>
                  ) : (
                    conteudo
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bg-gelo-50 p-8 md:p-10">
          <h2 className="h-display text-xl text-tinta">
            Solicitar orçamento
          </h2>
          <p className="mt-2 text-sm text-tinta-400">
            Respondemos em até um dia útil.
          </p>

          <form className="mt-8 space-y-4" action="/contato" method="post">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="eyebrow text-tinta-400">
                  Nome
                </label>
                <input id="nome" name="nome" required className={`${campo} mt-2`} />
              </div>
              <div>
                <label htmlFor="empresa" className="eyebrow text-tinta-400">
                  Empresa
                </label>
                <input id="empresa" name="empresa" className={`${campo} mt-2`} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="eyebrow text-tinta-400">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={`${campo} mt-2`}
                />
              </div>
              <div>
                <label htmlFor="telefone" className="eyebrow text-tinta-400">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  className={`${campo} mt-2`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="linha" className="eyebrow text-tinta-400">
                Linha de interesse
              </label>
              <select id="linha" name="linha" className={`${campo} mt-2`} defaultValue="">
                <option value="">Ainda não sei</option>
                {produtos.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="eyebrow text-tinta-400">
                O ambiente
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                placeholder="Tipo de ambiente, quantidade de cabines, prazo previsto…"
                className={`${campo} mt-2 resize-y`}
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar solicitação
            </button>

            <p className="flex items-start gap-2.5 pt-1 text-xs leading-relaxed text-tinta-400">
              <Nabla className="mt-1 text-azul-vivo" />
              Formulário sem back-end nesta versão. Conecte a um endpoint,
              Formspree ou route handler antes de publicar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
