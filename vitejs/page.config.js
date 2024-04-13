import { resolve } from "path";

const pages = [
  { name: 'index', path: resolve(__dirname, '../index.html') },
  { name: 'about', path: resolve(__dirname, '../pages/about.html') },
  { name: 'contact', path: resolve(__dirname, '../pages/contact.html') },
  { name: 'services', path: resolve(__dirname, '../pages/services.html') },
  { name: 'portfolio', path: resolve(__dirname, '../pages/portfolio.html') },
];

export default pages;
