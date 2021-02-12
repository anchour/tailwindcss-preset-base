'use strict';

var button = require('./button.js');
require('./plugin-adfde571.js');

var src = {
  extend: {
    color: {
      current: 'currentColor'
    }
  },
  corePlugins: {
    container: {
      padding: '1rem'
    }
  },
  plugins: [button]
};

module.exports = src;
