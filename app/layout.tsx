import type { Metadata } from 'next';
import { Outfit, Karla } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { empresa } from '@/lib/data';

/*
  Outfit no display: geométrica monolinear, o mesmo gesto do logotipo DivPro
  e da tipografia usada no Portfólio 2026.
  Karla no corpo — grotesca de leitura, com terminais levemente cortados que
  dão textura e evitam o efeito "tudo na mesma geométrica".
*/
const display = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${empresa.nome} — ${empresa.assinatura}`,
    template: `%s | ${empresa.nome}`,
  },
  description:
    'Divisórias sanitárias planejadas para ambientes corporativos. Projeto e fabricação sob uma única responsabilidade, em todo o Brasil.',
  keywords: [
    'divisórias sanitárias',
    'divisórias de banheiro',
    'cabines sanitárias',
    'divisórias corporativas',
    'portas para sanitário',
    'Recife',
    'Pernambuco',
    'DivPro',
  ],
  authors: [{ name: `${empresa.nome} ${empresa.assinatura}` }],
  openGraph: {
    title: `${empresa.nome} — ${empresa.assinatura}`,
    description: empresa.descricaoCurta,
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
