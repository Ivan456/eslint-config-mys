module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "standard",
  "plugins": ["brackets"],
  "rules": {
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "no-nested-ternary": "error",
    "generator-star-spacing": ["error", { "before": false, "after": true }],
    "no-tabs": "off",
    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "functions": "never"
    }],
    "brackets/array-bracket-newline": ["error", { "onePerLine": true }],
    "brackets/call-parens-newline": ["error", { "onePerLine": true }],
    "brackets/conditional-parens-newline": ["error", { "onePerLine": true }],
    "brackets/func-parens-newline": ["error", { "onePerLine": true }],
    "brackets/object-curly-newline": ["error", { "onePerLine": true }]
  }
};
