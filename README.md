# DivPro — Divisórias Sanitárias

Site institucional em Next.js 14 (App Router) + Tailwind, construído a partir do
**Portfólio 2026** da DivPro. Copy técnica, linhas de produto, argumentos
institucionais, fotos de obra e carteira de parceiros vêm todos de lá.

---

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 13 rotas estáticas
```

Deploy: importar no Vercel. Sem variáveis de ambiente nesta versão.

O `next.config.mjs` está com `output: 'export'` para permitir gerar o preview
estático. Se preferir SSR/ISR no Vercel, remova essa linha.

---

## ⚠️ Antes de publicar

1. **Contato** (`lib/data.ts` → `empresa`): telefone, WhatsApp, e-mail e redes
   estão com placeholder.
2. **Formulário** (`app/contato/page.tsx`) não tem back-end. Conectar a um route
   handler, Formspree ou equivalente.
3. **Uso das marcas dos 24 parceiros**: confirmar autorização. Os logos foram
   extraídos do portfólio, mas exibi-los em site público é outra conversa.

---

## Identidade

Extraída do portfólio, não suposta.

| Token | Valor | Uso |
|---|---|---|
| `azul` | `#013185` | Azul do logotipo. Cor base. |
| `azul-vivo` | `#1259cf` | Topo do degradê, acentos, eyebrows. |
| `bg-azul-dp` | degradê `#01245f → #013185 → #1259cf` | **Assinatura.** Todas as faixas institucionais do portfólio são em degradê, não cor chapada. |
| `tinta` | `#0d2544` | Texto principal. |
| `gelo` | `#e9eff7` | Fundos claros e divisores. |

**Tipografia**: Outfit (display) + Karla (corpo), via `next/font/google`. Outfit é
geométrica monolinear, o mesmo gesto do logotipo e da tipografia do portfólio.

**Elementos de marca** (`components/Brand.tsx`):
- `Nabla` — o ▽ que substitui o V no logotipo, usado como marcador de lista e eyebrow
- `Losango` — o ◇ dentro do O, marca aplicações e separa o marquee
- `SeloGarantia` — escudo + "5 Anos de Garantia", recorrente em todo o portfólio
- `ModuleRule` — ritmo de linhas verticais reproduzindo uma bateria de cabines

---

## Estrutura

```
app/
  page.tsx                home: hero, stats, marquee, por quê,
                          soluções, ficha técnica, aplicações, parceiros, CTA
  solucoes/[slug]/        6 páginas geradas de lib/data.ts
  aplicacoes/  sobre/  contato/
components/
  Brand.tsx  Header.tsx  Footer.tsx  Hero.tsx  Sections.tsx
lib/data.ts               ⟵ todo o conteúdo mora aqui
public/images/            15 fotos de obra + logotipo (2 variantes)
public/logos/             24 logos de parceiros
```

---

## Soluções (6)

Conforme o índice do portfólio:

| Linha | Categoria |
|---|---|
| DivPro Basic | Linha essencial |
| DivPro Full | Linha completa |
| DivPro Slim | Perfil reduzido |
| Banco DivPro | Apoio e mobiliário |
| Porta DivPro | Granito · Alvenaria |
| Porta DivPro FIT | MDF UV |

Uma versão anterior deste site tinha uma linha "DivPro Kids", deduzida das portas
infantis que aparecem nas peças de social. O portfólio mostra que elas pertencem à
**Porta DivPro** — a linha foi removida e virou característica.

---

## Parceiros

Os 24 logos foram extraídos da página de parceiros do portfólio e recortados com
fundo transparente. O recorte usa o canal mais escuro como alpha, com
unpremultiply — necessário porque um recorte por luminância apaga cores claras
saturadas (o amarelo do Smart Fit, a seta da Amazon, o laranja da CESAR School).

São exibidos **em cor cheia**, como no portfólio. Um tratamento em grayscale foi
testado e descartado: os logos de tom claro desapareciam.

---

## Imagens

15 fotos de obra do portfólio, redimensionadas a 1600 px e comprimidas (~100 KB
cada). Substituíram recortes de peças de social que tinham texto de campanha
queimado.

---

## Qualidade

- Build limpo, 13 rotas estáticas
- Responsivo até 390 px, validado por screenshot
- Console sem erros em todas as páginas
- Foco de teclado visível; `prefers-reduced-motion` respeitado
- Metadata e Open Graph em pt-BR
