/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-packagejson", "prettier-plugin-tailwindcss"],
  printWidth: 120,
  tailwindFunctions: ["cn", "cva"],
};
