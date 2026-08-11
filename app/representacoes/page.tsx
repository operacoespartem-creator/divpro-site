import Link from 'next/link';
import type { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import { Eyebrow, Nabla, ModuleRule } from '@/components/Brand';
import { representantes } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Representações',
  description:
    'Representantes DivPro por estado, para especificação e atendimento local.',
};

export default function RepresentacoesPage() {
  return (
    <>
      <section className="border-b border-gelo-200 bg-white py-20 md:py-28">
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

      <section className="bg-white py-24 md:py-32">
        <div className="container-dp">
          <ul className="grid gap-px bg-gelo-200 sm:grid-cols-2 lg:grid-cols-3">
            {representantes.map((r) => (
              <li
                key={`${r.estado}-${r.cidade}`}
                className="flex flex-col gap-4 bg-white p-8"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="shrink-0 text-azul-vivo" />
                  <p className="eyebrow text-tinta-400">
                    {r.cidade} — {r.estado}
                  </p>
                </div>
                <h2 className="h-display text-xl text-tinta">{r.empresa}</h2>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gelo-50">
        <ModuleRule className="text-gelo-300" />
        <div className="container-dp py-20 text-center md:py-24">
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
