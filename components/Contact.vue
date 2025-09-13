<template>
  <section id="contact" class="py-20">
    <div class="max-w-xl mx-auto px-4">
      <Card class="rounded-xl shadow-lg border-l-4 border-green-500">
        <template #title>
          <h2 class="text-2xl font-bold text-green-700 text-center flex items-center justify-center gap-2">
            <i class="pi pi-envelope text-xl"></i>
            Связаться со мной
          </h2>
        </template>

        <template #content>
          <form
            action="https://formsubmit.co/kaukenova.nata@bk.ru"
            method="POST"
            class="space-y-6 mt-6"
          >
            <!-- Hidden config -->
            <input type="hidden" name="_subject" value="Новое сообщение с сайта" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <!-- Имя -->
            <div>
              <label class="block mb-1 text-sm font-medium text-gray-700">Имя</label>
              <InputText
                name="name"
                placeholder="Ваше имя"
                class="w-full p-3 border border-gray-300 rounded-md focus:border-green-500"
                required
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <InputText
                name="email"
                type="email"
                placeholder="example@mail.com"
                class="w-full p-3 border border-gray-300 rounded-md focus:border-green-500"
                required
              />
            </div>

            <!-- Сообщение -->
            <div>
              <label class="block mb-1 text-sm font-medium text-gray-700">Сообщение</label>
              <Textarea
                name="message"
                placeholder="Ваше сообщение..."
                rows="5"
                class="w-full p-3 border border-gray-300 rounded-md focus:border-green-500"
                autoResize
                required
              />
            </div>

            <!-- Кнопка -->
<Button
  type="submit"
  label="Отправить"
  icon="pi pi-send"
  iconPos="right"
  class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
/>
          </form>
        </template>
      </Card>
    </div>
  </section>
</template>
