'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Brand';
import { cn } from '@/lib/utils';

const nav = [
  { label: 'Soluções', href: '/#solucoes' },
  { label: 'Aplicações', href: '/aplicacoes' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Representações', href: '/representacoes' },
  { label: 'Contato', href: '/contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow',
        scrolled ? 'border-gelo-200 shadow-sm' : 'border-transparent',
      )}
    >
      <div className="container-dp flex h-20 items-center justify-between">
        <Link href="/" aria-label="DivPro — página inicial" className="shrink-0">
          <Logo width={150} />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[11px] font-medium uppercase tracking-label text-tinta transition-colors hover:text-azul"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contato" className="btn-primary">
            Solicitar orçamento
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="p-2 text-tinta lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-gelo-200 bg-white transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <nav className="container-dp flex flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-gelo-200 py-4 font-display text-[11px] font-medium uppercase tracking-label last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4"
          >
            Solicitar orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}
