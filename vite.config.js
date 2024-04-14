import { resolve } from 'path'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import legacy from '@vitejs/plugin-legacy'
// import pages from './vitejs/page.config'

// const pagesInput = {}

// pages.forEach((page) => {
//     pagesInput[page.name] = page.path
// })

export default defineConfig({
    base: '/paulownia/',
    root: resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '@bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        },
    },
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
        Inspect(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
})
