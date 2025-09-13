<template>
  <section id="experience" class="py-20">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Опыт работы</h2>

      <div class="grid gap-6">
        <div
          v-for="(item, index) in experience"
          :key="index"
          class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md border-l-4 border-green-500 transition-all"
        >
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-semibold text-emerald-700">
              {{ item.role }}
            </h3>
            <span class="text-sm text-gray-500 italic whitespace-nowrap">
              {{ item.period }}
            </span>
          </div>
          <p class="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
            {{ item.desc }}
          </p>
          <div class="mt-3 text-xs text-gray-400">
            {{ item.stack }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    role: 'Технический лидер / Тимлид',
    period: '2024 — н.в.',
    desc: 'Организация процессов, взаимодействие с клиентами, технические задачи, архитектура, контроль сроков и качества.',
    stack: 'Laravel, Bitrix, DevOps, Jira, Vue, Vuex'
  },
  {
    role: 'Fullstack-разработчик',
    period: '2020 — 2024',
    desc: 'Создание и сопровождение сайтов и веб-приложений. Работа с backend и frontend, API, CMS, CRM.',
    stack: 'Laravel, Vue/Nuxt, Bitrix, WordPress, Node.js, MySQL, Git'
  }
]
</script>
