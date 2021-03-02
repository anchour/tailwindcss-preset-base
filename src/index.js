const button = require('./plugins/button');
const row = require('./utilities/row');
const screens = require('./lib/screens');

module.exports = {
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#fff',
        black: '#000',
      },
    },

    screens,
  },
  corePlugins: {
    container: {
      padding: '1rem',
    },
  },
  plugins: [
    button,
    row,
  ]
};
