import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: { min: '0px', max: '350px' }, //모바일
      sm: { min: '350px', max: '720px' }, //모바일
      md: { min: '721px', max: '1080px' }, //테블릿
      lg: { min: '1081px', max: '1440px' }, //테블릿 & 데스크탑
      xl: { min: '1441px', max: '1920px' }, //데스크탑
      xxl: { min: '1921px' }, //데스크탑
    },
  },
  plugins: [require('daisyui')],
};
export default config;
