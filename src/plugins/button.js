const plugin = require('tailwindcss/plugin');

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
module.exports = plugin(function ({ addComponents, theme }) {
  const components = {
    '.btn': {
      borderWidth: '2px',
      borderColor: theme('colors.current'),
      padding: `${theme('spacing.3')} ${theme('spacing.8')}`,
      lineHeight: theme('leading.tight'),
    },
  };

  addComponents(components);
});
