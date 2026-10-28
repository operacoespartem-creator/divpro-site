import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Eyebrow, WhatsAppGlyph } from '@/components/Brand';
import { ContatoForm } from '@/components/ContatoForm';
import { empresa } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Solicite a especificação e o orçamento das divisórias sanitárias do seu projeto.',
};

/*
  Tipado em ComponentType para aceitar tanto os ícones do Lucide quanto o
  glifo próprio do WhatsApp — ambos dimensionados por classe, não por prop.
*/
const canais: {
  icone: ComponentType<{ className?: string }>;
  rotulo: string;
  valor: string;
  href?: string;
}[] = [
  {
    icone: Phone,
    rotulo: 'Telefone',
    valor: empresa.telefone,
    // E.164 no href: o número formatado quebra o discador do iOS/macOS.
    href: `tel:+${empresa.whatsapp}`,
  },
  { icone: Mail, rotulo: 'E-mail', valor: empresa.email, href: `mailto:${empresa.email}` },
  {
    icone: WhatsAppGlyph,
    rotulo: 'WhatsApp',
    valor: 'Iniciar conversa',
    href: `https://wa.me/${empresa.whatsapp}`,
  },
  { icone: MapPin, rotulo: 'Onde estamos', valor: empresa.endereco },
];

export default function ContatoPage() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-dp grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <Eyebrow className="text-azul-vivo">Contato</Eyebrow>
          <h1 className="h-display mt-6 text-[2.4rem] text-tinta md:text-5xl">
            Vamos especificar o seu projeto.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-tinta-600">
            Mande a planta, as medidas ou só uma foto do ambiente. Devolvemos a
            especificação com linha indicada, acabamento e prazo de entrega.
          </p>

          <ul className="mt-12 divide-y divide-gelo-200 border-y border-gelo-200">
            {canais.map((c) => {
              const Icone = c.icone;
              const conteudo = (
                <div className="flex items-center gap-4 py-5">
                  <Icone className="h-[18px] w-[18px] shrink-0 text-azul-vivo" />
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

          <ContatoForm />
        </div>
      </div>
    </section>
  );
}
