import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Eyebrow, Nabla, ModuleRule, SeloGarantia } from '@/components/Brand';
import { produtos } from '@/lib/data';

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const produto = produtos.find((p) => p.slug === params.slug);
  if (!produto) return { title: 'Solução não encontrada' };
  return { title: produto.nome, description: produto.resumo };
}

export default function SolucaoPage({ params }: { params: { slug: string } }) {
  const produto = produtos.find((p) => p.slug === params.slug);
  if (!produto) notFound();

  const outras = produtos.filter((p) => p.slug !== produto.slug).slice(0, 3);

  return (
    <>
      {/* Cabeçalho tipográfico — a foto entra logo abaixo, em faixa larga */}
      <section className="relative isolate overflow-hidden bg-azul-dp">
        <div
          aria-hidden="true"
          className="modules absolute inset-0 text-white/[0.07]"
        />
        <div className="container-dp relative py-16 md:py-20">
          <Link
            href="/#solucoes"
            className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-label text-gelo/55 transition-colors hover:text-azul-vivo"
          >
            <ArrowLeft size={14} />
            Todas as soluções
          </Link>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <Eyebrow className="text-azul-vivo">{produto.categoria}</Eyebrow>
              <h1 className="h-display mt-5 text-[2.4rem] text-white md:text-6xl">
                {produto.nome}
              </h1>
              {produto.sub && (
                <p className="eyebrow mt-4 text-white/60">{produto.sub}</p>
              )}
            </div>
            <div className="lg:pb-2">
              <p className="text-lg leading-relaxed text-white/70">{produto.resumo}</p>
              <SeloGarantia className="mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/*
        As fotos são 16:9 (não panorâmicas). Manter a mesma proporção larga
        do mobile no desktop em vez de aspect-[21/7] — esse crop mais agressivo
        cortava quase metade da altura da imagem.
      */}
      <section className="relative aspect-[16/7] w-full overflow-hidden bg-azul-900">
        <Image
          src={produto.imagem}
          alt={`Aplicação da linha ${produto.nome}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-dp grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <Eyebrow className="text-azul-vivo">A linha</Eyebrow>
            <p className="mt-7 text-xl leading-relaxed text-tinta-600">
              {produto.descricao}
            </p>
            <Link href="/contato" className="btn-primary mt-10">
              Especificar {produto.nome}
            </Link>
          </div>

          <div className="lg:pt-14">
            <h2 className="eyebrow text-tinta-400">O que define esta linha</h2>
            <ul className="mt-6 divide-y divide-gelo-200 border-y border-gelo-200">
              {produto.caracteristicas.map((c) => (
                <li key={c} className="flex items-center gap-4 py-4">
                  <Nabla className="text-azul-vivo" />
                  <span className="text-[15px] text-tinta-600">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gelo-50">
        <ModuleRule className="text-gelo-300" />
        <div className="container-dp py-20 md:py-24">
          <Eyebrow className="text-azul-vivo">Outras linhas</Eyebrow>
          <div className="mt-10 grid gap-px bg-gelo-200 sm:grid-cols-3">
            {outras.map((p) => (
              <Link
                key={p.slug}
                href={`/solucoes/${p.slug}`}
                className="group bg-white p-7 transition-colors hover:bg-gelo-50"
              >
                <p className="eyebrow text-tinta-400">{p.categoria}</p>
                <h3 className="h-display mt-3 flex items-start justify-between gap-3 text-lg text-tinta">
                  {p.nome}
                  <ArrowUpRight
                    size={17}
                    className="mt-1 shrink-0 text-gelo-300 transition-colors group-hover:text-azul"
                  />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
