const { default: postcss } = require("postcss")
const tailwindcss = require('tailwindcss');
const assign = require('lodash/assign');

module.exports.generateCss = function (options = {}) {
  let opts = {
    corePlugins: false,
  }

  options = lodash.assign(opts, options);

  return postcss(tailwindcss(options))
    .process('@tailwind utilities; @tailwind components;', {
      from: undefined
    })
    .then(result => result.css);
}
