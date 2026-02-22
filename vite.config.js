import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/portfolio_me/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false
    }
})
