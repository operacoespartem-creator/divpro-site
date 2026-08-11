import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow, Losango, Nabla, ModuleRule, SeloGarantia } from './Brand';
import {
  stats, marquee, pilares, produtos, aplicacoes, clientes,
  caracteristicas, especificacoes,
} from '@/lib/data';

export function Stats() {
  return (
    <section className="border-b border-gelo-200 bg-white">
      <div className="container-dp grid grid-cols-2 divide-gelo-200 md:divide-x">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-10 md:px-8 md:text-center">
            <p className="h-display text-4xl text-azul md:text-[2.9rem]">{s.valor}</p>
            <p className="eyebrow mt-3 text-tinta-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <section className="overflow-hidden border-b border-gelo-200 bg-gelo-50 py-5">
      <div className="flex w-max animate-marquee items-center">
        {items.map((item, i) => (
          <span key={i}
            className="flex items-center gap-6 whitespace-nowrap px-6 font-display text-[11px] uppercase tracking-label text-tinta-400">
            {item}
            <Losango className="text-azul-vivo" />
          </span>
        ))}
      </div>
    </section>
  );
}

/** Os quatro argumentos do portfólio, sobre o degradê institucional. */
export function PorQue() {
  return (
    <section className="relative isolate overflow-hidden bg-azul-dp py-24 md:py-28">
      <div aria-hidden="true" className="modules-tight absolute inset-0 text-white/[0.06]" />

      <div className="container-dp relative">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <h2 className="h-display max-w-xl text-3xl text-white md:text-[2.9rem]">
            <span className="font-normal opacity-80">Por que escolher a</span>
            <br />
            DivPro?
          </h2>
          <SeloGarantia className="md:pt-3" />
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/25 pt-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {pilares.map((p) => (
            <div key={p.titulo} className="border-t border-white/25 pt-6 lg:border-t-0 lg:pt-8">
              <h3 className="eyebrow flex items-center gap-2.5 text-white">
                {p.titulo}
                <Nabla className="text-white/70" />
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProdutosGrid() {
  return (
    <section id="solucoes" className="scroll-mt-24 bg-gelo-50 py-24 md:py-32">
      <div className="container-dp">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-azul-vivo">Soluções</Eyebrow>
            <h2 className="h-display mt-6 max-w-2xl text-3xl text-tinta md:text-[2.75rem]">
              Seis linhas, um único sistema.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-tinta-600">
            Divisória, banco e porta saem do mesmo padrão dimensional e do mesmo
            material monolítico. É o que garante continuidade no ambiente inteiro.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {produtos.map((p) => (
            <Link key={p.slug} href={`/solucoes/${p.slug}`}
              className="group flex flex-col border border-gelo-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-azul-vivo/40 hover:shadow-[0_18px_40px_-24px_rgba(1,49,133,0.5)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-azul-900">
                <Image src={p.imagem} alt={p.nome} fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                {p.destaque && (
                  <span className="absolute left-4 top-4 bg-azul-vivo px-3 py-1.5 font-display text-[10px] font-medium uppercase tracking-label text-white">
                    Linha completa
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="eyebrow text-tinta-400">{p.categoria}</p>
                <h3 className="h-display mt-3 flex items-start justify-between gap-3 text-xl text-tinta">
                  <span>
                    {p.nome}
                    {p.sub && (
                      <span className="mt-1 block text-[11px] font-normal uppercase tracking-wide2 text-tinta-400">
                        {p.sub}
                      </span>
                    )}
                  </span>
                  <ArrowUpRight size={18}
                    className="mt-1 shrink-0 text-gelo-300 transition-colors group-hover:text-azul" />
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-tinta-600">{p.resumo}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Ficha técnica — o conteúdo que separa a DivPro de um revendedor. */
export function FichaTecnica() {
  const blocos = [
    { titulo: 'Características', itens: caracteristicas },
    { titulo: 'Especificações', itens: especificacoes },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-dp">
        <Eyebrow className="text-azul-vivo">Ficha técnica</Eyebrow>
        <h2 className="h-display mt-6 max-w-2xl text-3xl text-tinta md:text-[2.75rem]">
          O que sustenta o sistema.
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {blocos.map((b) => (
            <div key={b.titulo}>
              <h3 className="h-display text-2xl text-azul">{b.titulo}</h3>
              <ul className="mt-7 space-y-6 border-t border-gelo-200 pt-7">
                {b.itens.map((it) => (
                  <li key={it.destaque} className="flex gap-4">
                    <Nabla className="mt-2 shrink-0 text-azul-vivo" />
                    <p className="text-[15px] leading-relaxed text-tinta-600">
                      <strong className="font-semibold text-tinta">{it.destaque}</strong>{' '}
                      {it.texto}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Aplicacoes() {
  return (
    <section className="bg-gelo-50 py-24 md:py-32">
      <div className="container-dp">
        <Eyebrow className="text-azul-vivo">Onde aplicamos</Eyebrow>
        <h2 className="h-display mt-6 max-w-3xl text-3xl text-tinta md:text-[2.75rem]">
          Cada ambiente pede uma leitura diferente.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {aplicacoes.map((a) => (
            <div key={a.slug} id={a.slug}
              className="group scroll-mt-24 border border-gelo-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-azul-vivo/40 hover:shadow-[0_18px_40px_-24px_rgba(1,49,133,0.5)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={a.imagem} alt={`Divisórias DivPro em ambiente ${a.nome.toLowerCase()}`}
                  fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <Losango className="text-[1rem] text-azul-vivo" />
                  <h3 className="h-display text-lg text-tinta">{a.nome}</h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-tinta-600">{a.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Parceiros, com os logos reais — não os nomes em texto. */
export function Clientes() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-dp">
        <div className="text-center">
          <Eyebrow className="justify-center text-azul-vivo">Parceiros DivPro</Eyebrow>
          <h2 className="h-display mx-auto mt-6 max-w-2xl text-3xl text-tinta md:text-[2.4rem]">
            Projetos que não podiam errar na entrega.
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px bg-gelo-200 sm:grid-cols-3 lg:grid-cols-6">
          {clientes.map((c) => (
            <li key={c.nome}
              className="group/logo flex items-center justify-center bg-white px-5 py-8">
              <Image
                src={c.logo}
                alt={c.nome}
                width={270}
                height={110}
                className="h-11 w-auto max-w-[135px] object-contain transition-transform duration-300 group-hover/logo:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CTAFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-azul-dp-v">
      <Image src="/images/cta.jpg" alt="" fill sizes="100vw"
        className="object-cover opacity-20" />
      <div aria-hidden="true" className="modules absolute inset-0 text-white/[0.09]" />

      <div className="container-dp relative py-24 text-center md:py-32">
        <Eyebrow className="justify-center text-white/70">Próximo passo</Eyebrow>
        <h2 className="h-display mx-auto mt-6 max-w-3xl text-3xl text-white md:text-[2.9rem]">
          Fale com a DivPro e descubra a solução ideal para o seu ambiente.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
          Mande a planta, as medidas ou só uma foto do ambiente. Devolvemos a
          especificação com linha indicada, acabamento e prazo de entrega.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contato" className="btn-branco">
            Solicitar orçamento
          </Link>
          <Link href="/sobre"
            className="btn-ghost border-white/35 text-white hover:border-white hover:bg-white/10">
            Sobre a DivPro
          </Link>
        </div>
      </div>
      <ModuleRule className="text-white/10" />
    </section>
  );
}
