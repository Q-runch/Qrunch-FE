import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'calc-100-200': 'calc(100% - 200px)',
      },
    },
    screens: {
      xs: { min: '0px', max: '375px' }, //모바일
      sm: { min: '375px', max: '720px' }, //모바일
      md: { min: '721px', max: '1080px' }, //테블릿
      lg: { min: '1081px', max: '1440px' }, //테블릿 & 데스크탑
      xl: { min: '1441px', max: '1920px' }, //데스크탑
      xxl: { min: '1921px' }, //데스크탑
    },
    colors: {
      'primary-yellow': 'rgba(252, 232, 80, 0.5)',
      'primary-yellow-solid': 'rgba(252, 232, 80, 1)',
      'primary-blue': 'rgba(56, 122, 223, 0.5)',
      'primary-blue-solid': 'rgba(56, 122, 223, 1)',
      'light-blue': 'rgba(144, 160, 240, 1)',
      'dark-gray': 'rgba(15, 23, 42, 1)',
      black: 'rgba(0,0,0,1)',
    },
  },
  plugins: [require('daisyui')],
};
export default config;
