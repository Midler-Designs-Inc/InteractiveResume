// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: [
        '~/assets/scss/purple.scss'
    ],
    build: {
        transpile: ['@popperjs/core']
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    silenceDeprecations: ['color-functions', 'global-builtin', 'import'],
                    quietDeps: true,
                }
            }
        }
    }
})