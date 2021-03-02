const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  const utilities = {
    '.row': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  };

  addUtilities(utilities);
});
