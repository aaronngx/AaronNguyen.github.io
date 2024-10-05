// nuxt.config.ts
// Documentation: https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
      },
    ],
  },

  css: [
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  plugins: [
    '~/plugins/emailjs.js', // Plugin initialization for EmailJS
  ],

  compatibilityDate: '2024-10-03',
});
