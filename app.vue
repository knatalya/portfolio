useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
// Здесь ничего не нужно — useHead и прочее делают страницы сами
</script>
