import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Eyebrow, Nabla, ModuleRule } from '@/components/Brand';
import { stats, empresa } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'A DivPro desenvolve divisórias sanitárias planejadas para ambientes corporativos, com projeto e fabricação sob uma única responsabilidade.',
};

const etapas = [
  {
    titulo: 'Leitura do espaço',
    texto:
      'Visita, levantamento dimensional e entendimento do uso real: fluxo, público, regime de limpeza e o que já existe no ambiente.',
  },
  {
    titulo: 'Especificação',
    texto:
      'Definição de linha, acabamento, ferragens e detalhamento de encontro com a arquitetura. Você recebe a solução escrita, não um orçamento genérico.',
  },
  {
    titulo: 'Fabricação',
    texto:
      'Produção sob medida a partir do levantamento aprovado. Cada módulo sai pronto para o vão a que pertence.',
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-azul-900 py-16 md:py-24">
        <Image
          src="/images/sobre.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div
          aria-hidden="true"
          className="modules absolute inset-0 text-white/[0.1]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-azul-900 via-azul-900/85 to-azul-900/25"
        />
        <div className="container-dp relative">
          <Eyebrow className="text-azul-vivo">Sobre a {empresa.nome}</Eyebrow>
          <h1 className="h-display mt-6 max-w-3xl text-[2.4rem] text-white md:text-6xl">
            Boas soluções começam pela leitura do espaço.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gelo/70">
            Trabalhamos com divisórias sanitárias para ambientes corporativos em
            todo o Brasil — do estudo do espaço ao acabamento final, sob uma
            única responsabilidade.
          </p>
        </div>
      </section>

      <section className="border-b border-gelo-200 bg-white">
        <div className="container-dp grid grid-cols-2 divide-gelo-200 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-10 md:px-8 md:text-center">
              <p className="h-display text-4xl text-azul md:text-5xl">
                {s.valor}
              </p>
              <p className="eyebrow mt-3 text-tinta-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-dp">
          <Eyebrow className="text-azul-vivo">Como um projeto anda</Eyebrow>
          <h2 className="h-display mt-6 max-w-2xl text-3xl text-tinta md:text-[2.75rem]">
            Três etapas, um interlocutor.
          </h2>

          {/*
            Numeração aqui carrega informação real: é uma sequência,
            cada etapa depende da anterior.
          */}
          <ol className="mt-12 grid gap-px bg-gelo-200 md:grid-cols-3">
            {etapas.map((e, i) => (
              <li key={e.titulo} className="bg-white p-8">
                <div className="flex items-center gap-3">
                  <Nabla className="text-azul-vivo" />
                  <span className="eyebrow text-tinta-400">
                    Etapa {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="h-display mt-5 text-lg text-tinta">
                  {e.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-tinta-600">
                  {e.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gelo-50">
        <ModuleRule className="text-gelo-300" />
        <div className="container-dp py-14 text-center md:py-20">
          <h2 className="h-display mx-auto max-w-2xl text-3xl text-tinta md:text-4xl">
            Tem um projeto em especificação?
          </h2>
          <Link href="/contato" className="btn-primary mt-9">
            Falar com a {empresa.nome}
          </Link>
        </div>
      </section>
    </>
  );
}
