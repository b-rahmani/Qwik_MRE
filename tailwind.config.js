import baseConfig from './TailwindBase.js'

const config = {
  presets: [
    baseConfig
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          color1: '#f1592a',
          color5: '#54c5d0',
          color2: '#F8F8F8',
          color21: '#C6C6C6',
          color22: '#232323',
          color23: '#e9e9e9',
          color3: '#383838',
          color31: '#333333',
          color4: '#00de8b',
        }
      }
    },
  },
}

export default config
