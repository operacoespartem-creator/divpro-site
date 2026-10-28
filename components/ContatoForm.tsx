'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Nabla } from '@/components/Brand';
import { empresa, formspreeId, produtos } from '@/lib/data';

const campo =
  'w-full border border-gelo-200 bg-white px-4 py-3.5 text-[15px] text-tinta transition-colors placeholder:text-tinta-400 focus:border-azul focus:outline-none';

type Estado = 'idle' | 'enviando' | 'ok' | 'erro';

/*
  O site é exportado estático, então o envio vai direto para o Formspree,
  que repassa a solicitação por e-mail. Accept: application/json faz ele
  responder com JSON em vez de redirecionar para a página de obrigado dele.
*/
export function ContatoForm() {
  const [estado, setEstado] = useState<Estado>('idle');

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setEstado('enviando');
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      form.reset();
      setEstado('ok');
    } catch {
      setEstado('erro');
    }
  }

  if (estado === 'ok') {
    return (
      <div className="mt-8 border border-gelo-200 bg-white p-8" role="status">
        <CheckCircle2 className="h-7 w-7 text-azul-vivo" />
        <p className="h-display mt-5 text-lg text-tinta">
          Recebemos sua solicitação.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-tinta-600">
          Nossa equipe responde em até um dia útil.
        </p>
        <button
          type="button"
          onClick={() => setEstado('idle')}
          className="mt-6 text-sm text-azul underline-offset-4 hover:underline"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  const enviando = estado === 'enviando';

  return (
    <form className="mt-8 space-y-4" onSubmit={enviar}>
      <input
        type="hidden"
        name="_subject"
        value="Nova solicitação de orçamento — site DivPro"
      />
      {/* Honeypot: invisível para pessoas, preenchido por robôs. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="eyebrow text-tinta-400">
            Nome
          </label>
          <input id="nome" name="nome" required className={`${campo} mt-2`} />
        </div>
        <div>
          <label htmlFor="empresa" className="eyebrow text-tinta-400">
            Empresa
          </label>
          <input id="empresa" name="empresa" className={`${campo} mt-2`} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="eyebrow text-tinta-400">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`${campo} mt-2`}
          />
        </div>
        <div>
          <label htmlFor="telefone" className="eyebrow text-tinta-400">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            className={`${campo} mt-2`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="linha" className="eyebrow text-tinta-400">
          Linha de interesse
        </label>
        {/* O valor é o nome, não o slug — é o que aparece no e-mail. */}
        <select id="linha" name="linha" className={`${campo} mt-2`} defaultValue="Ainda não sei">
          <option value="Ainda não sei">Ainda não sei</option>
          {produtos.map((p) => (
            <option key={p.slug} value={p.nome}>
              {p.nome}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="eyebrow text-tinta-400">
          O ambiente
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          placeholder="Tipo de ambiente, quantidade de cabines, prazo previsto…"
          className={`${campo} mt-2 resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="btn-primary w-full disabled:cursor-wait disabled:opacity-70"
      >
        {enviando ? 'Enviando…' : 'Enviar solicitação'}
      </button>

      {estado === 'erro' ? (
        <p role="alert" className="flex items-start gap-2.5 pt-1 text-xs leading-relaxed text-red-700">
          <Nabla className="mt-1" />
          <span>
            Não foi possível enviar agora. Tente de novo ou fale direto pelo{' '}
            <a href={`https://wa.me/${empresa.whatsapp}`} className="underline">
              WhatsApp
            </a>{' '}
            ou pelo e-mail{' '}
            <a href={`mailto:${empresa.email}`} className="underline">
              {empresa.email}
            </a>
            .
          </span>
        </p>
      ) : (
        <p className="flex items-start gap-2.5 pt-1 text-xs leading-relaxed text-tinta-400">
          <Nabla className="mt-1 text-azul-vivo" />
          Seus dados são usados apenas para responder a esta solicitação.
        </p>
      )}
    </form>
  );
}
