import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    [react()],
    [svgr()],
    babel({
      babelConfig: {
        plugins: [["babel-plugin-styled-components", { displayName: true }]],
      },
    }),
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
});
