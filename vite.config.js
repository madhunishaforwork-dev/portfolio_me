import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/portfolio_madhu/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false
    }
})
