'use strict';

var button = require('./button.js');
require('./plugin-adfde571.js');

var screens = {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '992px',
    'xl': '1140px'
  }
};

var src = {
  theme: {
    extend: {
      color: {
        current: 'currentColor'
      }
    },
    screens
  },
  corePlugins: {
    container: {
      padding: '1rem'
    }
  },
  plugins: [button]
};

module.exports = src;
