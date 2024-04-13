import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
// import pages from './vitejs/page.config'

// const pagesInput = {}

// pages.forEach((page) => {
//     pagesInput[page.name] = page.path
// })

export default defineConfig({
    base: 'https://evsedov.github.io/paulownia/',
    build: {
        target: 'es2021',
        sourcemap: true,
        rollupOptions: {
            // input: {
            //     ...pagesInput,
            // },
            output: {
                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                        return 'assets/images/[name]-[hash][extname]'
                    }

                    if (/\.(ttf|otf|fnt|woff|woff2|eot)$/.test(name ?? '')) {
                        return 'assets/fonts/[name]-[hash][extname]'
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]'
                    }

                    return 'assets/[name]-[hash][extname]'
                },
            },
        },
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
