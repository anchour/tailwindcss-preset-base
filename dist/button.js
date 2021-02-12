'use strict';

var plugin = require('./plugin-adfde571.js');

var button = plugin.plugin(function ({
  addComponents,
  theme
}) {
  const components = {
    '.btn': {
      borderWidth: '2px',
      borderColor: theme('colors.current'),
      padding: `${theme('spacing.3')} ${theme('spacing.8')}`,
      lineHeight: theme('leading.tight')
    }
  };
  addComponents(components);
});

module.exports = button;
