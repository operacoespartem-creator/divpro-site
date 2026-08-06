import Image from 'next/image';
import { cn } from '@/lib/utils';
import { empresa } from '@/lib/data';

export function Logo({
  className, variant = 'dark', width = 168,
}: { className?: string; variant?: 'dark' | 'light'; width?: number }) {
  const src = variant === 'light' ? '/images/logo-branco.png' : '/images/logo.png';
  return (
    <Image
      src={src}
      alt="DivPro — Divisórias Sanitárias"
      width={width}
      height={Math.round((width * 291) / 1020)}
      priority
      className={cn('h-auto', className)}
    />
  );
}

/** Triângulo invertido — o glifo que substitui o "V" na marca. */
export function Nabla({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 10" aria-hidden="true" fill="currentColor"
      className={cn('inline-block h-[0.6em] w-[0.72em] shrink-0', className)}>
      <path d="M0 0h12L6 10z" />
    </svg>
  );
}

/** Losango — o glifo dentro do "O" da marca. */
export function Losango({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"
      className={cn('inline-block h-[0.55em] w-[0.55em] shrink-0', className)}>
      <path d="M5 0l5 5-5 5-5-5z" />
    </svg>
  );
}

/**
 * Selo de garantia — escudo + número, como aparece em todas as páginas
 * institucionais do Portfólio 2026.
 */
export function SeloGarantia({
  className, variant = 'light',
}: { className?: string; variant?: 'light' | 'dark' }) {
  const cor = variant === 'light' ? 'text-white' : 'text-azul';
  const borda = variant === 'light' ? 'border-white/45' : 'border-azul/35';
  return (
    <div className={cn('flex items-center gap-2.5', cor, className)}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 shrink-0"
        fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2.5 4 5.6v5.9c0 4.6 3.2 8.4 8 10 4.8-1.6 8-5.4 8-10V5.6z" />
        <path d="m8.7 12 2.3 2.3 4.3-4.6" strokeLinecap="round" />
      </svg>
      <span className={cn('flex items-center gap-2 rounded-full border px-4 py-1.5', borda)}>
        <span className="font-display text-2xl font-semibold leading-none">5</span>
        <span className="text-[11px] leading-[1.15] opacity-80">
          Anos de
          <br />
          Garantia
        </span>
      </span>
    </div>
  );
}

/** Régua modular — assinatura visual do site. */
export function ModuleRule({
  className, tight = false,
}: { className?: string; tight?: boolean }) {
  return (
    <div aria-hidden="true"
      className={cn('h-10 w-full', tight ? 'modules-tight' : 'modules', className)} />
  );
}

export function Eyebrow({
  children, className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('eyebrow flex items-center gap-2.5', className)}>
      <Nabla />
      {children}
    </p>
  );
}

export const garantiaLabel = `${empresa.garantia} de garantia`;
