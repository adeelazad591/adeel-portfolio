/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
