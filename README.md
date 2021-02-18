# Anchour + TailwindCSS Preset

This preset is responsible for much of the base styles used in the Anchour WordPress base theme.

### Plugins

In addition to a sensible set of base styles, you also can import individual plugins instead of the whole package.

```
const buttons = require('@anchour/tailwindcss-preset/dist/button.js');

...

module.exports = {
  plugins: [
    buttons
  ]
}
```