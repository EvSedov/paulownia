import { defineConfig } from "vite";
import pages from "./vitejs/page.config.js";

const pagesInput = {};

pages.forEach(page => {
  pagesInput[page.name] = page.path;
});

export default defineConfig({
  base: 'https://evsedov.github.io/paulownia/',
  rollupOptions: {
    input: {
      ...pagesInput
    }
  }
})