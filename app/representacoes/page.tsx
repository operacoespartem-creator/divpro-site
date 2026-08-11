import Link from 'next/link';
import type { Metadata } from 'next';
import { Mail, MapPin, User } from 'lucide-react';
import { Eyebrow, Nabla, ModuleRule, WhatsAppGlyph } from '@/components/Brand';
import { representantes } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Representações',
  description:
    'Representantes DivPro por estado, para especificação e atendimento local.',
};

export default function RepresentacoesPage() {
  return (
    <>
      <section className="border-b border-gelo-200 bg-white py-14 md:py-20">
        <div className="container-dp">
          <Eyebrow className="text-azul-vivo">Representações</Eyebrow>
          <h1 className="h-display mt-6 max-w-3xl text-[2.4rem] text-tinta md:text-6xl">
            Presença local, padrão DivPro.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-tinta-600">
            Nossos representantes atendem localmente, com o mesmo padrão de
            especificação e acabamento da DivPro.
          </p>
        </div>
      </section>

      <section className="bg-gelo-50 py-14 md:py-20">
        <div className="container-dp space-y-8">
          {representantes.map((r) => (
            <article
              key={`${r.estado}-${r.cidade}`}
              className="grid overflow-hidden border border-gelo-200 bg-white lg:grid-cols-[1fr_1.1fr]"
            >
              <div className="p-8 md:p-10">
                <p className="eyebrow text-tinta-400">
                  {r.cidade} — {r.estado}
                </p>
                <h2 className="h-display mt-4 text-2xl text-tinta md:text-3xl">
                  {r.empresa}
                </h2>

                <ul className="mt-8 divide-y divide-gelo-200 border-y border-gelo-200">
                  <li className="flex items-center gap-4 py-4">
                    <User size={17} className="shrink-0 text-azul-vivo" />
                    <div>
                      <p className="eyebrow text-tinta-400">Responsável</p>
                      <p className="mt-1 text-[15px] text-tinta-600">
                        {r.responsavel}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      href={`https://wa.me/${r.whatsapp}`}
                      className="flex items-center gap-4 py-4 transition-colors hover:text-azul"
                    >
                      <WhatsAppGlyph className="shrink-0 text-azul-vivo" />
                      <div>
                        <p className="eyebrow text-tinta-400">Telefone</p>
                        <p className="mt-1 text-[15px] text-tinta-600">
                          {r.telefone}
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`mailto:${r.email}`}
                      className="flex items-center gap-4 py-4 transition-colors hover:text-azul"
                    >
                      <Mail size={17} className="shrink-0 text-azul-vivo" />
                      <div className="min-w-0">
                        <p className="eyebrow text-tinta-400">E-mail</p>
                        <p className="mt-1 break-words text-[15px] text-tinta-600">
                          {r.email}
                        </p>
                      </div>
                    </a>
                  </li>

                  <li className="flex items-start gap-4 py-4">
                    <MapPin
                      size={17}
                      className="mt-1 shrink-0 text-azul-vivo"
                    />
                    <div>
                      <p className="eyebrow text-tinta-400">Endereço</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-tinta-600">
                        {r.endereco}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/*
                Mapa via embed público do Google (sem chave de API), para
                manter o export estático. Carrega só quando entra em tela.
              */}
              <div className="relative min-h-[300px] border-t border-gelo-200 bg-gelo-50 lg:min-h-full lg:border-l lg:border-t-0">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    r.mapaQuery,
                  )}&output=embed`}
                  title={`Mapa — ${r.empresa}, ${r.cidade}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <ModuleRule className="text-gelo-300" />
        <div className="container-dp py-14 text-center md:py-20">
          <h2 className="h-display mx-auto max-w-2xl text-3xl text-tinta md:text-4xl">
            Quer representar a DivPro na sua região?
          </h2>
          <p className="mx-auto mt-5 flex max-w-lg items-start justify-center gap-2.5 text-[15px] leading-relaxed text-tinta-600">
            <Nabla className="mt-1 shrink-0 text-azul-vivo" />
            Fale com a gente e entenda como funciona.
          </p>
          <Link href="/contato" className="btn-primary mt-9">
            Falar com a DivPro
          </Link>
        </div>
      </section>
    </>
  );
}
