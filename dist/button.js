'use strict';

var plugin = require('./plugin-adfde571.js');

/**
 * This is a sensible base .btn style. Active states *probably* should be created
 * on a per-project basis, determined by the style guide for that particular
 * project.
 *
 * We may be able to make this a bit more configurable if we *only* use
 * the `theme` function below to pull in configuration values from the
 * tailwind.config.js file. Alternatively, we could explore using a
 * different config object within the Tailwind config dedicated
 * specifically to buttons.
 */

var button = plugin.plugin(function ({
  addComponents,
  config
}) {
  const components = {
    '.btn': {
      borderWidth: '2px',
      borderColor: config('theme.colors.current'),
      padding: `${config('theme.spacing.3')} ${config('theme.spacing.8')}`,
      lineHeight: config('theme.leading.tight')
    }
  };
  addComponents(components);
});

module.exports = button;
