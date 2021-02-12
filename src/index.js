const button = require('./plugins/button');

module.exports = {
  extend: {
    color: {
      current: 'currentColor',
    },
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
