module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "plugins": [
    "prettier",
    "react"
  ],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": "off",
    "prettier/prettier": "error"
  }
};