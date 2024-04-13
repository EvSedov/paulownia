import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import pages from './vitejs/page.config'

const pagesInput = {}

pages.forEach((page) => {
    pagesInput[page.name] = page.path
})

export default defineConfig({
    build: {
        target: 'es2021',
        sourcemap: true,
        rollupOptions: {
            input: {
                ...pagesInput,
            },
        },
        base: 'https://evsedov.github.io/paulownia/',
    },
    server: {
        hmr: true,
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
})
