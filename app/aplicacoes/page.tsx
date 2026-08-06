import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Eyebrow, Losango, ModuleRule } from '@/components/Brand';
import { aplicacoes } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Aplicações',
  description:
    'Divisórias sanitárias para ambientes corporativos, industriais, educacionais, comerciais, institucionais e academias.',
};

export default function AplicacoesPage() {
  return (
    <>
      <section className="border-b border-gelo-200 bg-white py-20 md:py-28">
        <div className="container-dp">
          <Eyebrow className="text-azul-vivo">Aplicações</Eyebrow>
          <h1 className="h-display mt-6 max-w-3xl text-[2.4rem] text-tinta md:text-6xl">
            Cada ambiente pede uma leitura diferente.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-tinta-600">
            Fluxo de pessoas, umidade, faixa etária, regime de limpeza e ciclo de
            manutenção mudam a especificação. A linha certa vem depois de
            entender o uso — não antes.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="container-dp">
          {aplicacoes.map((a, i) => (
            <article
              key={a.slug}
              id={a.slug}
              className="grid scroll-mt-24 items-center gap-10 border-b border-gelo-200 py-16 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : undefined}>
                <div className="flex items-center gap-3">
                  <Losango className="text-[1.2rem] text-azul-vivo" />
                  <span className="eyebrow text-tinta-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="h-display mt-5 text-3xl text-tinta md:text-4xl">
                  {a.nome}
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-tinta-600">
                  {a.descricao}
                </p>
                <Link
                  href="/contato"
                  className="btn-ghost mt-8 border-gelo-300 text-tinta hover:border-azul hover:text-azul"
                >
                  Falar sobre este ambiente
                </Link>
              </div>

              <div
                className={`relative aspect-[16/10] overflow-hidden ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <Image
                  src={a.imagem}
                  alt={`Divisórias sanitárias em ambiente ${a.nome.toLowerCase()}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-azul-dp">
        <ModuleRule className="text-white/10" />
        <div className="container-dp py-20 text-center md:py-24">
          <h2 className="h-display mx-auto max-w-2xl text-3xl text-white md:text-4xl">
            Não achou o seu caso aqui?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-gelo/65">
            A maior parte dos projetos que chegam tem alguma condição fora do
            padrão. É justamente aí que o projeto começa.
          </p>
          <Link href="/contato" className="btn-primary mt-9 bg-azul-vivo hover:bg-azul-vivo">
            Descrever o ambiente
          </Link>
        </div>
      </section>
    </>
  );
}
