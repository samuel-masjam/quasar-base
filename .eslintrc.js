module.exports = {
  root: true,

  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: [".vue"],
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "standard",
  ],

  plugins: ["@typescript-eslint", "vue"],

  globals: {
    ga: "readonly", // Google Analytics
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
    defineModel: "readonly"
  },

  rules: {
    "generator-star-spacing": "off",
    "arrow-parens": "off",
    "one-var": "off",
    "no-void": "off",
    "multiline-ternary": "off",
    "import/first": "off",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/named": "off",
    "prefer-promise-reject-errors": "off",
    "no-empty-function": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-unused-vars": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": ["error", "always-multiline"],
    "indent": "off",
    "vue/component-tags-order": [
      "warn",
      {
        order: ["script", "template", "style"],
      },
    ],
    "func-call-spacing": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/no-v-text-v-html-on-component": "off",

    quotes: ["warn", "single", { avoidEscape: true }],
  },
};
