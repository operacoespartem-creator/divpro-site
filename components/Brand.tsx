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

/**
 * Marca do WhatsApp. O Lucide não traz ícones de marca — o balão genérico
 * que estava aqui antes não era reconhecível como WhatsApp.
 */
export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"
      className={cn('h-[17px] w-[17px] shrink-0', className)}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
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
