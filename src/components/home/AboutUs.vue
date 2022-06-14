<script setup>
import VModal from '../reusable-components/VModal.vue'

import { ref } from 'vue'

import { IMaskComponent } from 'vue-imask'

const mask = '+{7} 000 000-00-00'

const isOpen = ref(false)
const showThanks = ref(false)
const contentCard = [
  {
    title: '10+',
    text: 'Лет в стоматологии',
  },
  {
    title: '> 2000',
    text: 'Идеальных улыбок',
  },
  {
    title: '99%',
    text: 'Довольных пациентов',
  },
]
function openMenu() {
  isOpen.value = true
}
function closeMenu() {
  isOpen.value = false
}
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
    closeMenu()
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
  <div class="relative flex h-fit w-full flex-col sm:-mt-20" id="about-us">
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
    <VModal v-if="isOpen" @on-close="closeMenu">
      <div
        class="flex h-fit flex-col items-center gap-y-4 overflow-y-scroll rounded-xl bg-white py-10 px-8 sm:gap-y-2 sm:overflow-hidden sm:rounded-3xl"
      >
        <h2 class="w-min text-center text-2xl sm:w-max sm:text-3xl lg:text-4xl">
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
    </VModal>

    <div class="absolute -left-1/3 top-1/3 w-2/3 sm:hidden">
      <img src="@/assets/about-us/sphere.png" />
    </div>
    <div class="absolute -right-1/3 top-60 w-2/3 sm:hidden">
      <img src="@/assets/about-us/sphere.png" />
    </div>
    <div class="absolute right-60 bottom-60 w-2/3 sm:hidden">
      <img src="@/assets/about-us/sphere.png" />
    </div>
    <div class="absolute -right-5 top-64 hidden h-80 w-80 xl:flex">
      <img src="@/assets/about-us/sphere.png" />
    </div>
    <div class="absolute -left-5 bottom-80 hidden h-80 w-80 sm:flex">
      <img src="@/assets/about-us/sphere.png" />
    </div>
    <div class="absolute -left-5 bottom-60 hidden h-52 w-52 sm:flex">
      <img src="@/assets/about-us/sphere.png" />
    </div>
    <div
      class="bg-[url(@/assets/about-us/background1.png)] bg-cover bg-right sm:justify-end sm:bg-[url(@/assets/about-us/background-desktop.png)]"
    >
      <div class="container flex w-full justify-between">
        <div
          class="md:text-md mt-32 hidden h-1/5 flex-col items-center bg-cover sm:flex sm:items-start sm:text-sm md:bg-none"
        >
          <img class="mb-10 w-20" src="@/assets/about-us/logo.png" />
          <h2 class="text-black">Величко</h2>
          <h2 class="mb-4 text-black">Мария Владимировна</h2>
          <span class="text-sm"
            >Сертифицированный врач стоматолог-ортодонт,</span
          >
          <span class="text-sm">Специализация: стоматология, ортодонтия</span>

          <div class="container absolute mt-96 -ml-10 h-1 w-full bg-white">
            <button
              @click="openMenu"
              class="ml-10 -mt-8 flex h-10 items-center justify-center rounded-full bg-main-100 py-8 px-6 transition hover:bg-main-200 hover:text-white"
            >
              <span class="text-sm uppercase tracking-[0.55em]"
                >Записаться</span
              >
            </button>
          </div>
        </div>
        <img class="z-10 2xl:mr-32" src="@/assets/about-us/photo.png" />
      </div>
    </div>
    <div
      class="flex h-1/5 w-full flex-col items-center bg-[url(@/assets/about-us/background2.png)] bg-cover sm:hidden"
    >
      <h2 class="text-black">Величко</h2>
      <h2 class="mb-4 text-black">Мария Владимировна</h2>
      <span class="text-sm">Сертифицированный врач стоматолог-ортодонт,</span>
      <span class="mb-4 text-sm">Специализация: стоматология, ортодонтия</span>
      <button
        @click="openMenu"
        class="z-10 mb-4 h-10 rounded-full bg-main-100 hover:bg-main-200"
      >
        <span class="px-4 text-sm uppercase">Записаться</span>
      </button>
    </div>
    <div class="h-2 w-full bg-white"></div>
    <div
      class="w-full bg-[url(@/assets/about-us/banner-background.png)] bg-cover"
    >
      <div
        class="flex w-full flex-col items-center justify-center sm:container sm:h-fit sm:items-center lg:flex-row lg:justify-between"
      >
        <div
          v-for="(el, index) in contentCard"
          :key="index"
          class="z-10 my-8 flex h-32 w-fit items-center justify-center bg-white p-2 sm:my-8"
          :class="{ 'mb-10 ': index === contentCard.length - 1 }"
        >
          <div
            class="flex h-full w-full flex-col items-center border-2 border-main-100 px-4"
          >
            <span class="font-sans text-6xl italic text-main-200">{{
              el.title
            }}</span>
            <span class="mt-2 text-sm">{{ el.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
