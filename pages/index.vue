<script setup>
useHead({
  title: 'Фрилансер PHP & JS | Веб-разработка на Laravel и Vue',
  meta: [
    {
      name: 'description',
      content: 'Создаю быстрые и надёжные сайты и веб-приложения на Laravel, Vue и Nuxt.'
    },
    {
      property: 'og:title',
      content: 'Фрилансер PHP & JS'
    },
    {
      property: 'og:description',
      content: 'Закажи сайт или приложение с современными технологиями: Laravel, Vue, Nuxt'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://ваш-домен.ru'
    },
    {
      property: 'og:image',
      content: 'https://ваш-домен.ru/og-preview.png'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
    <Hero />
    <About />
    <Advantages />
    <Services />
    <Experience />
    <Certifications />
    <Contact />
  </div>
</template>
