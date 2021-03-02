'use strict';

var button = require('./button.js');
var plugin = require('./plugin-adfde571.js');

var row = plugin.plugin(function ({
  addUtilities
}) {
  const utilities = {
    '.row': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  };
  addUtilities(utilities);
});

var screens = {
  'sm': '640px',
  'md': '768px',
  'lg': '992px',
  'xl': '1140px'
};

var src = {
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#fff',
        black: '#000'
      }
    },
    screens
  },
  corePlugins: {
    container: {
      padding: '1rem'
    }
  },
  plugins: [button, row]
};

module.exports = src;
