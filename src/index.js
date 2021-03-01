const button = require('./plugins/button');
const screens = require('./lib/screens');

module.exports = {
  theme: {
    extend: {
      color: {
        current: 'currentColor',
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
  ]
};
