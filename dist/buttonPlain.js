'use strict';

var plugin = require('./plugin-adfde571.js');

var buttonPlain = plugin.plugin(function ({
  addComponents
}) {
  addComponents();
});

module.exports = buttonPlain;
