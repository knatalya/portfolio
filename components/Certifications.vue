<template>
  <section id="certs" class="py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Сертификаты</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="(cert, i) in certifications"
          :key="i"
          class="shadow-md border-l-4 border-green-500 hover:shadow-lg transition-all"
        >
          <template #title>
            <div class="flex items-center gap-3">
              <i class="pi pi-file text-green-600 text-2xl"></i>
              <span class="font-semibold">{{ cert.title }}</span>
            </div>
          </template>
          <template #content>
            <p class="text-sm text-gray-600 mb-4">{{ cert.desc }}</p>
            <Button
              v-if="cert.link"
              :label="'Посмотреть'"
              :href="cert.link"
              icon="pi pi-external-link"
              size="small"
              severity="secondary"
              target="_blank"
              outlined
            />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
const certifications = [
  {
    title: 'Разработчик Bitrix Framework',
    desc: 'Сертификат по разработке решений на платформе 1С-Битрикс.'
  },
  {
    title: 'Администратор сервиса Битрикс24',
    desc: 'Коробочная версия. Настройка и сопровождение системы.'
  },
  {
    title: 'Битрикс: Многосайтовость',
    desc: 'Работа с несколькими сайтами в рамках одной платформы.'
  },
  {
    title: 'Технология "Композитный сайт"',
    desc: 'Ускорение загрузки и повышение производительности сайтов.'
  },
  {
    title: 'Интеграция с 1С',
    desc: 'Настройка синхронизации данных между 1С и сайтом.'
  },
  {
    title: 'Экзамен №1',
    desc: 'Интеграция дизайна и настройка платформы 1С-Битрикс.'
  },
  {
    title: 'Экзамен №2',
    desc: 'Основные технологии и расширение типовых возможностей системы.'
  },
  {
    title: 'Курс Node.js для backend-разработки',
    desc: 'Курс от Нетологии. Работа с Express, API, базами данных.'
  }
]
</script>
