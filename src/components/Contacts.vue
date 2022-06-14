<script setup>
import { ref } from 'vue'

import { IMaskComponent } from 'vue-imask'

const mask = '+{7} 000 000-00-00'

const showThanks = ref(false)
function resetData() {
  name.value = ''
  number.value = ''
  info.value = ''
}

async function sendSubmit() {
  try {
    formData.value = {
      name: name.value,
      number: number.value,
      info: info.value,
      url: 'www.google.com',
    }
    let response = await fetch(
      'https://glacial-river-96393.herokuapp.com/api/mail/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formData.value),
      }
    )
    let result = await response.json()
    console.log(JSON.parse(result))
  } catch (error) {
    console.log(error)
  } finally {
    resetData()
    showThanks.value = true
  }
}
const formData = {}

const name = ref('')
const number = ref('')
const info = ref('')
</script>

<template>
  <div
    class="relative flex flex-col items-center bg-gradient-to-b from-[#B9ABA0] pb-7 sm:from-transparent lg:pb-12 xl:pb-20"
    id="contacts"
  >
    <div class="flex w-full items-center gap-x-5 py-7 sm:pb-5 lg:gap-x-14">
      <hr class="w-full border-white sm:border-main-100 lg:border-[1.5px]" />
      <h2 class="text-white sm:text-main-100">Контакты</h2>
      <hr class="w-full border-white sm:border-main-100 lg:border-[1.5px]" />
    </div>
    <div class="container flex w-full flex-col items-center">
      <div class="grid w-full max-w-6xl grid-cols-1 gap-y-5 sm:grid-cols-3">
        <div
          v-for="contact in contacts"
          :key="contact.icon"
          class="flex flex-col items-center gap-y-2.5 text-white sm:text-main-100 sm:first-of-type:items-start sm:last-of-type:items-end"
        >
          <img class="w-5 sm:hidden" :src="getImageUrl(contact.icon)" alt="" />
          <a
            :href="contact.href"
            target="_blank"
            class="sm:text-lg lg:text-2xl xl:text-[28px]"
            >{{ contact.text }}</a
          >
        </div>
      </div>
      <div class="mt-11 w-full max-w-6xl sm:mt-8">
        <!-- ==================================== -->
        <div
          v-if="showThanks"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25"
        >
          <div
            class="flex h-fit w-full flex-col items-center justify-center rounded-2xl bg-white p-5 sm:h-fit sm:w-2/3 sm:rounded-[50px] sm:py-8 sm:px-20"
          >
            <div class="text-main-200 sm:text-xl">
              Благодарим вас за предоставленные данные. Мы свяжемся с вами в
              ближайшее время.
            </div>
            <button
              class="mt-8 h-10 rounded-full bg-main-100 px-8 transition hover:bg-main-200 hover:text-white"
              @click="showThanks = false"
            >
              <span class="text-xs uppercase">Вернуться на страницу</span>
            </button>
          </div>
        </div>
        <div
          class="flex h-fit w-full flex-col justify-between rounded-2xl bg-white p-5 sm:w-full sm:rounded-[50px] sm:py-8 sm:px-20"
          @on-close="closeMenu"
        >
          <div
            class="flex h-fit flex-col items-center gap-y-4 rounded-xl bg-white py-10 px-8 sm:gap-y-2 sm:rounded-3xl"
          >
            <h2
              class="w-min text-center text-2xl sm:w-max sm:text-3xl lg:text-4xl"
            >
              Запишитесь на прием
            </h2>
            <p class="text-center text-main-200 sm:text-xl">
              оставьте свой телефон и мы<br class="sm:hidden" />
              согласуем удобное время
            </p>
            <div
              class="mt-9 flex w-full max-w-2xl flex-col items-center gap-y-9 sm:mt-6 sm:gap-y-6"
            >
              <input
                class="w-full"
                type="text"
                v-model="name"
                placeholder="Ваше имя"
              />
              <IMaskComponent
                v-model="number"
                :mask="mask"
                placeholder="+7 --- ---------"
              />
              <textarea
                class="w-full sm:leading-none"
                v-model="info"
                id="message"
                rows="5"
              ></textarea>
              <button
                @click="sendSubmit"
                class="mb-4 h-10 w-max rounded-full bg-main-100 px-8 transition hover:bg-main-200 hover:text-white"
              >
                <span class="px-4 text-sm uppercase">Записаться</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      class="absolute bottom-0 left-0 -z-10"
      src="@/assets/contacts/blue-bg.png"
      alt=""
    />
  </div>
</template>
