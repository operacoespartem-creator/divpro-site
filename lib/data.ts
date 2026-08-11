// ---------------------------------------------------------------------------
// Conteúdo da DivPro. Baseado no Portfólio 2026 — copy técnica, linhas de
// produto e carteira de clientes vêm de lá, não de suposição.
// ---------------------------------------------------------------------------

export const empresa = {
  nome: 'DivPro',
  assinatura: 'Divisórias Sanitárias',
  descricaoCurta:
    'Divisórias sanitárias planejadas para ambientes corporativos.',
  chamada: 'Seu próximo projeto merece um acabamento à altura.',
  garantia: '5 anos',
  cidade: 'Recife',
  estado: 'PE',
  telefone: '(81) 0000-0000',
  whatsapp: '5581991177648',
  email: 'atendimento@divpro.com.br',
  endereco: 'Recife — Pernambuco',
  instagram: 'https://instagram.com/divpro',
  linkedin: 'https://linkedin.com/company/divpro',
};

export type Produto = {
  slug: string;
  nome: string;
  sub?: string;
  categoria: string;
  resumo: string;
  descricao: string;
  caracteristicas: string[];
  imagem: string;
  destaque?: boolean;
};

export const produtos: Produto[] = [
  {
    slug: 'divpro-basic',
    nome: 'DivPro Basic',
    categoria: 'Linha essencial',
    resumo:
      'Sistema estrutural completo para áreas de grande circulação, com montagem rápida e repetição confiável.',
    descricao:
      'Montantes estruturais de alumínio fixados rigidamente ao piso e painéis em laminado estrutural TS. É a configuração direta para projetos que precisam de padronização e volume, sem abrir mão da resistência a impacto e ao uso intenso.',
    caracteristicas: [
      'Montantes estruturais em alumínio',
      'Painéis em laminado estrutural TS (fórmica maciça)',
      'Fixação rígida ao piso e às paredes',
      'Instalação rápida e padronizada',
    ],
    imagem: '/images/basic.jpg',
  },
  {
    slug: 'divpro-full',
    nome: 'DivPro Full',
    categoria: 'Linha completa',
    resumo:
      'Presença visual e acabamento texturizado para projetos corporativos de alto padrão.',
    descricao:
      'A linha completa, no modelo piso-teto, com painel de altura estendida e acabamento texturizado dupla face. Indicada quando a divisória participa da composição da arquitetura e o sanitário precisa acompanhar o padrão do resto do edifício.',
    caracteristicas: [
      'Modelo piso-teto',
      'Painel de altura estendida',
      'Acabamento texturizado dupla face',
      'Amplo repertório de padrões amadeirados',
      'Linhas limpas, sem estrutura aparente',
    ],
    imagem: '/images/full.jpg',
    destaque: true,
  },
  {
    slug: 'divpro-slim',
    nome: 'DivPro Slim',
    categoria: 'Perfil reduzido',
    resumo:
      'Leveza visual e aproveitamento máximo de área, para ambientes de linguagem contemporânea.',
    descricao:
      'Perfil estrutural enxuto, com menos estrutura aparente e leitura visual contínua. Mantém a resistência do sistema monolítico, mas com presença discreta — para quando a divisória precisa integrar em vez de pesar.',
    caracteristicas: [
      'Perfil estrutural reduzido',
      'Menos estrutura aparente',
      'Ganho de área útil por cabine',
      'Leitura visual contínua',
    ],
    imagem: '/images/slim.jpg',
  },
  {
    slug: 'banco-divpro',
    nome: 'Banco DivPro',
    categoria: 'Apoio e mobiliário',
    resumo:
      'O apoio que completa a funcionalidade de vestiários, sanitários e áreas de suporte.',
    descricao:
      'Bancos no mesmo material monolítico das divisórias, com estrutura autoportante e comprimentos sob medida. Totalmente à prova d’água, resolvem o vestiário sem introduzir um material novo no ambiente.',
    caracteristicas: [
      'Mesmo material monolítico das divisórias',
      'Estrutura autoportante',
      'Comprimentos sob medida',
      'À prova d’água, para áreas molhadas',
    ],
    imagem: '/images/banco.jpg',
  },
  {
    slug: 'porta-divpro',
    nome: 'Porta DivPro',
    sub: 'Granito · Alvenaria',
    categoria: 'Porta avulsa',
    resumo:
      'Portas para cabines já executadas em granito ou alvenaria, no padrão dimensional do sistema.',
    descricao:
      'Quando a cabine já existe em granito ou alvenaria, a porta é o que define o acabamento e a operação. Folhas, ferragens e batentes desenvolvidos no mesmo padrão das divisórias — inclusive em versões e cores para ambientes infantis.',
    caracteristicas: [
      'Para cabines em granito ou alvenaria',
      'Ferragens compatibilizadas com o sistema',
      'Versões e cores para ambientes infantis',
      'Reposição por componente',
    ],
    imagem: '/images/porta.jpg',
  },
  {
    slug: 'porta-divpro-fit',
    nome: 'Porta DivPro FIT',
    sub: 'MDF UC',
    categoria: 'Custo-benefício',
    resumo:
      'Solução em MDF UC com o melhor custo-benefício da linha, resistente à água.',
    descricao:
      'A linha FIT entrega o padrão DivPro com o investimento mais enxuto do catálogo, em MDF com acabamento UC. Resistente à água — não indicada para áreas de exposição direta e constante, como boxes de chuveiro.',
    caracteristicas: [
      'Acabamento MDF UC',
      'Melhor custo-benefício da linha',
      'Resistente à água',
      'Não indicada para boxes de chuveiro',
    ],
    imagem: '/images/porta-fit.jpg',
  },
];

// Os quatro argumentos institucionais do portfólio, com o texto original.
export const pilares = [
  {
    titulo: 'Durabilidade',
    texto:
      'Material monolítico de alta densidade, resistente a impacto e ao uso intenso em áreas de grande circulação.',
  },
  {
    titulo: 'Fácil limpeza',
    texto:
      'Superfície à prova d’água, própria para vestiários, sanitários e boxes de chuveiro, sem retenção de umidade.',
  },
  {
    titulo: 'Privacidade',
    texto:
      'Fixação rígida ao piso e vedações precisas garantem estabilidade e discrição no uso diário.',
  },
  {
    titulo: 'Estética moderna',
    texto:
      'Acabamento texturizado e linhas limpas que se integram a projetos corporativos de alto padrão.',
  },
];

export const caracteristicas = [
  {
    destaque: 'Sistema composto por montantes estruturais de alumínio,',
    texto:
      'fixados rigidamente ao piso, e painéis em laminado estrutural TS (fórmica maciça), fixados às paredes com fixações especiais, conferindo a necessária rigidez e estabilização ao sistema.',
  },
  {
    destaque: 'Total praticidade,',
    texto: 'versatilidade e rapidez na instalação.',
  },
  {
    destaque: 'Produzida com materiais à prova d’água,',
    texto:
      'pode ser utilizada em áreas molhadas, como vestiários e sanitários, inclusive em boxes de chuveiro.',
  },
];

export const especificacoes = [
  {
    destaque: 'Painéis:',
    texto:
      'laminado melamínico estrutural TS, com acabamento texturizado dupla face.',
  },
  {
    destaque: 'Material monolítico de alta densidade,',
    texto:
      'totalmente à prova d’água, com alta resistência mecânica, elevada dureza superficial, quimicamente estável e inerte.',
  },
  {
    destaque: 'Resultante da prensagem em alta temperatura e pressão (150 °C e 80 kgf/cm²)',
    texto:
      'de camadas de extrato de fibras celulósicas impregnadas com resina fenólica e papel decorativo “Print” nas duas faces, com resina melamínica.',
  },
];

export type Aplicacao = { slug: string; nome: string; descricao: string; imagem: string };

export const aplicacoes: Aplicacao[] = [
  {
    slug: 'corporativo',
    nome: 'Corporativo',
    descricao:
      'Edifícios de escritório e sedes onde o sanitário integra a leitura da arquitetura.',
    imagem: '/images/corporativo.jpg',
  },
  {
    slug: 'industrial',
    nome: 'Industrial',
    descricao:
      'Vestiários de alto fluxo e uso severo, com exigência de limpeza e reposição rápida.',
    imagem: '/images/industrial.jpg',
  },
  {
    slug: 'educacional',
    nome: 'Educacional',
    descricao:
      'Escolas e universidades, com dimensionamento por faixa etária e uso intenso.',
    imagem: '/images/educacional.jpg',
  },
  {
    slug: 'comercial',
    nome: 'Comercial',
    descricao:
      'Shoppings e varejo, onde volume de público e manutenção convivem o dia inteiro.',
    imagem: '/images/comercial.jpg',
  },
  {
    slug: 'institucional',
    nome: 'Institucional',
    descricao:
      'Hospitais e órgãos públicos, com requisitos de acessibilidade e assepsia.',
    imagem: '/images/institucional.jpg',
  },
  {
    slug: 'academias',
    nome: 'Academias e clubes',
    descricao:
      'Vestiários com umidade constante, ciclo curto de uso e alta rotatividade.',
    imagem: '/images/academias.jpg',
  },
];

export const marquee = [
  'Divisórias sanitárias',
  'Laminado estrutural TS',
  'À prova d’água',
  'Bancos',
  'Portas',
  'Retrofit',
];

export const stats = [
  { valor: '5 anos', label: 'De garantia' },
  { valor: '6', label: 'Linhas de solução' },
];

// 24 parceiros, com os logos extraídos do Portfólio 2026.
export const clientes = [
  { nome: 'Rio Ave', logo: '/logos/rio-ave.png' },
  { nome: 'Unimed', logo: '/logos/unimed.png' },
  { nome: 'Grupo JCPM', logo: '/logos/grupo-jcpm.png' },
  { nome: 'Hemobrás', logo: '/logos/hemobras.png' },
  { nome: 'Faculdade Damas', logo: '/logos/faculdade-damas.png' },
  { nome: 'Cabanga Iate Clube', logo: '/logos/cabanga.png' },
  { nome: 'Motiva', logo: '/logos/motiva.png' },
  { nome: 'Coco Bambu', logo: '/logos/coco-bambu.png' },
  { nome: 'Carvalheira', logo: '/logos/carvalheira.png' },
  { nome: 'Aché', logo: '/logos/ache.png' },
  { nome: 'Planes Engenharia', logo: '/logos/planes-engenharia.png' },
  { nome: 'Entre Amigos', logo: '/logos/entre-amigos.png' },
  { nome: 'Chesf', logo: '/logos/chesf.png' },
  { nome: 'Shopping Recife', logo: '/logos/shopping-recife.png' },
  { nome: 'Real Hospital Português', logo: '/logos/real-hospital-portugues.png' },
  { nome: 'Amazon', logo: '/logos/amazon.png' },
  { nome: 'Moura Dubeux', logo: '/logos/moura-dubeux.png' },
  { nome: 'HBR Engenharia', logo: '/logos/hbr-engenharia.png' },
  { nome: 'CESAR School', logo: '/logos/cesar-school.png' },
  { nome: 'Parque Shopping Maceió', logo: '/logos/parque-shopping-maceio.png' },
  { nome: 'Smart Fit', logo: '/logos/smart-fit.png' },
  { nome: 'Colégio Damas', logo: '/logos/colegio-damas.png' },
  { nome: 'Wellness Club', logo: '/logos/wellness-club.png' },
  { nome: 'Pernambuco Construtora', logo: '/logos/pernambuco-construtora.png' },
  { nome: 'BYD', logo: '/logos/byd.svg' },
];

export type Representante = { estado: string; cidade: string; empresa: string };

export const representantes: Representante[] = [
  { estado: 'Alagoas', cidade: 'Maceió', empresa: 'Divine Divisórias' },
];
