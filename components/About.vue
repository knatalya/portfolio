<template>
  <section id="about" class="py-20">
    <div
      class="max-w-3xl mx-auto px-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border-l-4 border-emerald-400 animate-fade-up"
    >
      <div class="flex items-center gap-3 mb-4 pt-6">
        <i class="pi pi-user text-2xl text-emerald-600"></i>
        <h2 class="text-2xl font-bold text-emerald-700">Обо мне</h2>
      </div>
      <p class="text-gray-800 text-lg pb-6 leading-relaxed">
        Я <strong>fullstack‑разработчик</strong> с 4+ годами опыта,
        <strong>руководитель команды</strong> и
        <strong>технический эксперт</strong>.<br />
        Специализируюсь на CMS (1С‑Битрикс, WordPress и др.), Laravel, Vue.js, Nuxt,
        Node.js и интеграции с CRM.
      </p>
    </div>
  </section>
</template>

<script setup>
// Ничего не подключаем, стили в Tailwind
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
  animation: fade-up 0.7s ease-out forwards;
}
</style>
