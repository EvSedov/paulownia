import { resolve } from "path";

const pages = [
  { name: 'index', path: resolve(__dirname, '../index.js') },
  { name: 'about', path: resolve(__dirname, '../pages/about.js') },
  { name: 'contact', path: resolve(__dirname, '../pages/contact.js') },
  { name: 'services', path: resolve(__dirname, '../pages/services.js') },
  { name: 'portfolio', path: resolve(__dirname, '../pages/portfolio.js') },
];

export default pages;
