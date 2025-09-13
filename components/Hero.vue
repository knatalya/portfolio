<template>
  <section
    class="relative py-24 text-center text-gray-900"
  >
    <div class="container mx-auto px-4 animate-fade-in">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
        Я - Наталья Каукенова
      </h1>
      <p class="text-lg md:text-xl mb-6 text-gray-700">
        Fullstack‑разработчик, TechLead, эксперт по web-разработке
      </p>
      <a
        href="#contact"
        class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
      >
        <i class="pi pi-send text-base"></i> Связаться
      </a>
    </div>
  </section>
</template>

<script setup>
// Ничего лишнего
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out both;
}
</style>
