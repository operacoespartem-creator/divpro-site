import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Eyebrow, Nabla, SeloGarantia } from './Brand';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-azul-900">
      <Image
        src="/images/hero.jpg"
        alt="Bateria de cabines sanitárias DivPro em ambiente corporativo"
        fill priority sizes="100vw"
        className="object-cover object-center opacity-90"
      />
      <div aria-hidden="true" className="modules absolute inset-0 text-white/[0.12]" />
      {/* O degradê institucional do portfólio, aplicado sobre a foto */}
      <div aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-azul-900 via-azul-900/85 to-azul-900/20" />

      <div className="container-dp relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl animate-riseIn">
          <Eyebrow className="text-white/70">Divisórias sanitárias</Eyebrow>

          <h1 className="h-display mt-7 text-[2.6rem] text-white sm:text-6xl lg:text-[4.1rem]">
            Seu próximo projeto merece um acabamento à altura.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            Sistema monolítico de alta densidade, à prova d’água, para vestiários,
            sanitários e boxes de chuveiro em áreas de grande circulação.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contato" className="btn-branco group">
              Solicitar orçamento
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#solucoes"
              className="btn-ghost border-white/35 text-white hover:border-white hover:bg-white/10">
              Ver as 6 linhas
            </Link>
          </div>

          <SeloGarantia className="mt-12" />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-dp flex flex-wrap items-center gap-x-8 gap-y-2 py-5 text-[11px] uppercase tracking-label text-white/55">
          {['Projeto', 'Fabricação'].map((t) => (
            <span key={t} className="flex items-center gap-2.5">
              <Nabla className="text-white/80" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
