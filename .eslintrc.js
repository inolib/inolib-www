/** @type {import("eslint").Linter.Config} */
export default {
  extends: ["next/core-web-vitals"],
  rules: {
    "import/no-anonymous-default-export": "off",
    "react/no-unescaped-entities": "off",
  },
};
