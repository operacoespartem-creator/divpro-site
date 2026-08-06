import { Hero } from '@/components/Hero';
import {
  Stats, Marquee, PorQue, ProdutosGrid, FichaTecnica,
  Aplicacoes, Clientes, CTAFinal,
} from '@/components/Sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <PorQue />
      <ProdutosGrid />
      <FichaTecnica />
      <Aplicacoes />
      <Clientes />
      <CTAFinal />
    </>
  );
}
