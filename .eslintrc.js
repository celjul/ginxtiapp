module.exports = {
  "env": {
    "react-native/react-native": true,
    "es6": true,
    "browser": true,
    "jest/globals": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "jest",
    "react",
    "react-native"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "error",
      {
        allow: ["log"]
      }
    ],
    "react/display-name": "off",
  }
};
