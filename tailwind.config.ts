import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta do Portfólio 2026: azul em degradê do escuro (logo) ao vivo.
        azul: {
          DEFAULT: '#013185', // azul do logotipo
          vivo: '#1259cf',    // topo do gradiente institucional
          600: '#0a48af',
          900: '#01245f',
        },
        tinta: {
          DEFAULT: '#0d2544', // texto principal
          600: '#3a5170',
          400: '#6b7f99',
        },
        gelo: {
          DEFAULT: '#e9eff7',
          50: '#f5f8fc',
          200: '#dae3ef',
          300: '#c2d0e2',
        },
      },
      backgroundImage: {
        // O degradê é assinatura do portfólio — não é decoração solta.
        'azul-dp': 'linear-gradient(102deg, #01245f 0%, #013185 38%, #1259cf 100%)',
        'azul-dp-v': 'linear-gradient(168deg, #013185 0%, #1259cf 100%)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { label: '0.2em', wide2: '0.1em' },
      maxWidth: { content: '1240px' },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        riseIn: { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
        riseIn: 'riseIn 0.7s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
