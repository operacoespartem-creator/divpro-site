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
  telefone: '(81) 99117-7648',
  whatsapp: '5581991177648',
  email: 'atendimento@divpro.com.br',
  endereco: 'Recife — Pernambuco',
  instagram: 'https://www.instagram.com/divprodivisorias/',
};

// ID do formulário no Formspree (formspree.io → New form → destino
// atendimento@divpro.com.br). É o trecho final do endpoint /f/<id>.
export const formspreeId = 'mdekpywl';

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
    resumo: 'Resistência e eficiência para projetos de alto fluxo.',
    descricao:
      'Divisórias em laminado estrutural TS, com acabamento texturizado e montantes de alumínio com fixação rígida ao piso, desenvolvidas para uso intenso e padronização em escala.',
    caracteristicas: [
      'Laminado estrutural TS com acabamento texturizado',
      'Montantes de alumínio com fixação rígida ao piso',
      'Desenvolvida para uso intenso e alto fluxo',
      'Padronização em escala',
    ],
    imagem: '/images/basic.jpg',
  },
  {
    slug: 'divpro-full',
    nome: 'DivPro Full',
    categoria: 'Linha completa',
    resumo: 'Arquitetura, privacidade e resistência em uma solução piso-teto.',
    descricao:
      'Divisórias em laminado estrutural TS de altura estendida, com acabamento texturizado dupla face, desenvolvidas para integrar o sanitário à arquitetura do ambiente, sem abrir mão da durabilidade e do desempenho técnico.',
    caracteristicas: [
      'Modelo piso-teto',
      'Laminado estrutural TS de altura estendida',
      'Acabamento texturizado dupla face',
      'Integração do sanitário à arquitetura do ambiente',
      'Máxima privacidade',
    ],
    imagem: '/images/full.jpg',
    destaque: true,
  },
  {
    slug: 'divpro-slim',
    nome: 'DivPro Slim',
    categoria: 'Perfil reduzido',
    resumo: 'Leveza visual e eficiência para ambientes compactos.',
    descricao:
      'Divisórias com perfil estrutural minimalista e menor presença aparente, proporcionando uma estética mais contínua e discreta, sem abrir mão da resistência e robustez do laminado estrutural TS.',
    caracteristicas: [
      'Perfil estrutural minimalista',
      'Menor presença aparente',
      'Estética contínua e discreta',
      'Indicada para ambientes compactos',
      'Resistência do laminado estrutural TS',
    ],
    imagem: '/images/slim.jpg',
  },
  {
    slug: 'porta-divpro',
    nome: 'Porta DivPro',
    sub: 'Granito · Alvenaria',
    categoria: 'Porta avulsa',
    resumo: 'A solução ideal para modernizar e padronizar ambientes existentes.',
    descricao:
      'Portas com folhas, batentes e ferragens compatíveis com o sistema DivPro, desenvolvidas para instalações em granito ou alvenaria, garantindo acabamento, funcionalidade e padronização visual.',
    caracteristicas: [
      'Para instalações em granito ou alvenaria',
      'Folhas, batentes e ferragens compatíveis com o sistema',
      'Modernização de ambientes existentes',
      'Padronização visual',
    ],
    imagem: '/images/porta.jpg',
  },
  {
    slug: 'porta-divpro-fit',
    nome: 'Porta DivPro FIT',
    sub: 'UC Ultra Premium (Hidro)',
    categoria: 'Custo-benefício',
    resumo: 'Praticidade e economia para reformas e adaptações.',
    descricao:
      'Portas em UC Ultra Premium (Hidro), compatíveis com estruturas existentes, oferecendo o padrão DivPro com investimento otimizado e resistência à água, sendo indicadas para ambientes sem exposição direta e constante à água.',
    caracteristicas: [
      'Acabamento UC Ultra Premium (Hidro)',
      'Compatível com estruturas existentes',
      'Investimento otimizado',
      'Resistente à água',
      'Não indicada para exposição direta e constante à água',
    ],
    imagem: '/images/porta-fit.jpg',
  },
  {
    slug: 'banco-divpro',
    nome: 'Banco DivPro',
    categoria: 'Apoio e mobiliário',
    resumo: 'Durabilidade e funcionalidade para vestiários completos.',
    descricao:
      'Bancos em laminado estrutural TS, com estrutura autoportante e comprimentos sob medida, totalmente à prova d’água e desenvolvidos para integrar o vestiário ao padrão das divisórias DivPro.',
    caracteristicas: [
      'Laminado estrutural TS',
      'Estrutura autoportante',
      'Comprimentos sob medida',
      'Totalmente à prova d’água',
      'Mesmo padrão das divisórias DivPro',
    ],
    imagem: '/images/banco.jpg',
  },
  {
    slug: 'lockers-divpro',
    nome: 'Lockers DivPro',
    sub: 'Armários · Guarda-volumes',
    categoria: 'Armazenamento',
    resumo:
      'Organização, segurança e resistência para ambientes de uso coletivo.',
    descricao:
      'Armários e guarda-volumes em laminado estrutural TS, desenvolvidos para vestiários, academias, clubes, indústrias e ambientes corporativos, com estrutura robusta, resistência à umidade e configurações sob medida.',
    caracteristicas: [
      'Laminado estrutural TS',
      'Estrutura robusta',
      'Resistência à umidade',
      'Configurações sob medida',
      'Vestiários, academias, clubes, indústrias e escritórios',
    ],
    // TODO: trocar pela foto dos lockers quando a DivPro enviar.
    imagem: '/images/academias.jpg',
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
  'Armários',
  'Retrofit',
];

export const stats = [
  { valor: '5 anos', label: 'De garantia' },
  { valor: '7', label: 'Linhas de solução' },
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

export type Representante = {
  estado: string;
  cidade: string;
  empresa: string;
  responsavel: string;
  email: string;
  telefone: string;
  whatsapp: string;
  endereco: string;
  /* Consulta usada no mapa — sem travessões, para o Google resolver o pin. */
  mapaQuery: string;
};

export const representantes: Representante[] = [
  {
    estado: 'Alagoas',
    cidade: 'Maceió',
    empresa: 'Divine Divisórias',
    responsavel: 'Kleberth Domingos',
    email: 'atendimento@divisoriasdivine.com',
    telefone: '(81) 99999-3773',
    whatsapp: '5581999993773',
    endereco:
      'Empresarial Work Center — Av. Dom Antônio Brandão, 333, Sala 403 — Farol, Maceió — AL, 57051-190',
    mapaQuery:
      'Divine Divisórias, Av. Dom Antônio Brandão, 333, Farol, Maceió - AL, 57051-190',
  },
];
