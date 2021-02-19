const { generateCss } = require('./bootstrap');
const cssMatcher = require('jest-matcher-css')

expect.extend({
  toMatchCss: cssMatcher
});

test('it creates a .btn component', () => {
  generateCss({
    extend: {
      borderWidth: '2px',
      borderColor: theme('colors.current'),
      padding: `${theme('spacing.3')} ${theme('spacing.8')}`,
      lineHeight: theme('leading.tight')
    }
  }).then(css => {
    expect(css).toContain(`.btn`)
  });

});
