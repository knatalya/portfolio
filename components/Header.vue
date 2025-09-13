<template>
  <div class="sticky top-0 z-50 shadow bg-white/90 backdrop-blur-md animate-fade-down transition-all duration-500">
    <Menubar :model="items" class="px-4 py-2" :pt="menuStyles" />
  </div>
</template>

<script setup>
const items = [
  {
    label: 'Обо мне',
    icon: 'pi pi-user',
    command: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    label: 'Преимущества',
    icon: 'pi pi-star',
    command: () => document.getElementById('advantages')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    label: 'Услуги',
    icon: 'pi pi-briefcase',
    command: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    label: 'Опыт',
    icon: 'pi pi-calendar',
    command: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    label: 'Сертификаты',
    icon: 'pi pi-file',
    command: () => document.getElementById('certs')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    label: 'Контакты',
    icon: 'pi pi-envelope',
    command: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
]

// PrimeVue menu styling (optional, можно адаптировать)
const menuStyles = {
  root: {
    class: 'flex items-center gap-4 text-gray-700 font-medium'
  },
  menuitem: {
    class:
      'transition-colors duration-300 hover:text-green-600 hover:scale-[1.02] hover:bg-green-50 px-3 py-2 rounded-md cursor-pointer flex items-center gap-2'
  },
  icon: {
    class: 'mr-2 text-green-500'
  }
}
</script>

<style scoped>
/* Анимация появления */
@keyframes fade-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-down {
  animation: fade-down 0.5s ease-out;
}
</style>
