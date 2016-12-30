module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "jquery": true,
    "node": true
  },
  "extends": [
    "eslint:recommended", // eslint
    "plugin:import/errors", // eslint-plugin-import
    "plugin:import/warnings", // eslint-plugin-import
    "plugin:react/recommended", // eslint-plugin-react
    "plugin:jsx-a11y/recommended" // eslint-plugin-jsx-a11y
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react", // eslint-plugin-react
    "jsx-a11y" // eslint-plugin-jsx-a11y
  ],
  "rules": {
    "no-unused-vars": 1
  }
};
