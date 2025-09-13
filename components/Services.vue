<template>
  <section id="services" class="py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-up">
        Услуги
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, i) in services"
          :key="i"
          class="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border-l-4 border-emerald-400 animate-fade-up"
          :style="{ animationDelay: `${i * 150}ms` }"
        >
          <div class="flex items-center gap-3 mb-4">
            <i :class="`pi ${item.icon} text-3xl text-emerald-500`"></i>
            <h3 class="text-lg font-semibold text-gray-800">
              {{ item.title }}
            </h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Разработка на Laravel',
    desc: 'Создание API, backend, миграции, интеграции',
    icon: 'pi-database'
  },
  {
    title: 'Vue & Nuxt',
    desc: 'Современные frontend SPA и SSR приложения',
    icon: 'pi-desktop'
  },
  {
    title: 'CMS доработки',
    desc: 'WordPress, Bitrix, ModX и другие под ключ',
    icon: 'pi-cog'
  }
]
</script>

<style scoped>
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.6s ease-out forwards;
  opacity: 0;
}
</style>
