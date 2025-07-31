import * as ps from "postcss-load-config";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: { "@tailwindcss/postcss": {} },
};

export default config;
