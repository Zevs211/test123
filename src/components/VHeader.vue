<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
  { title: 'Обо мне', href: '#about-us' },
  { title: 'Работы', href: '#work' },
  { title: 'Услуги и цены', href: '#price' },
  { title: 'Моя команда', href: '#team' },
  { title: 'Отзывы', href: '#reviews' },
  { title: 'Контакты', href: '#contacts' },
])
</script>

<template>
  <div class="sm:hidden">
    <div
      class="absolute z-20 flex h-20 w-full items-center justify-between bg-[#c9cdc9]"
    >
      <div class="flex h-full w-20 items-center justify-center">
        <img
          class="w-10 sm:brightness-0 sm:invert"
          src="@/assets/about-us/logo.png"
        />
      </div>
      <div class="flex h-full w-20 items-center justify-center">
        <div @click="isOpen = !isOpen">
          <img
            class="w-10 cursor-pointer select-none"
            :class="{ hidden: isOpen }"
            src="@/assets/about-us/burger.png"
          />
        </div>
      </div>
    </div>
    <div
      v-if="isOpen"
      @click="isOpen = !isOpen"
      class="fixed z-40 h-full w-full bg-black opacity-20"
    ></div>
    <div
      v-if="isOpen"
      class="fixed right-0 z-50 flex h-screen w-3/5 flex-col bg-white opacity-90"
    >
      <div class="flex h-1/2 flex-col justify-center pl-10">
        <div class="flex w-full justify-end">
          <img
            @click="isOpen = false"
            class="mt-5 mr-5 h-5 w-5 cursor-pointer"
            src="@/assets/about-us/close.png"
          />
        </div>
        <a
          v-for="(item, index) in menuItems"
          :key="index"
          class="my-px cursor-pointer select-none rounded-l-md py-3 pl-4 text-main-100 hover:bg-main-100 hover:text-white"
          :href="item.href"
          >{{ item.title }}</a
        >
      </div>
      <div
        class="flex h-1/2 flex-col items-center justify-end bg-gradient-to-t from-[#DFD9D4]"
      >
        <div class="h-fit w-9/12">
          <div class="mb-6 flex flex-col text-sm text-main-200">
            <img class="mb-4 w-4" src="@/assets/about-us/nav-icon.png" />
            <span>Приемы пациентов:</span>
            <span>г. Москва,</span>
            <span>ул. Садовая-Сухаревская 7/1</span>
          </div>
          <div class="mb-6 flex flex-col text-main-200">
            <img class="mb-4 w-4" src="@/assets/about-us/phone-icon.png" />
            <span>8 800 500 07 02</span>
          </div>
          <div class="mb-8 flex w-full justify-center">
            <a href="#contacts">
              <button
                @click="isOpen = false"
                class="h-10 w-fit rounded-full border-2 border-main-100 hover:bg-main-100"
              >
                <span class="px-6 font-bellota text-sm uppercase"
                  >Записаться</span
                >
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative z-20 hidden w-full justify-center sm:flex">
    <div class="container flex h-20 flex-col items-center justify-center">
      <div class="flex w-full flex-row justify-between">
        <a
          v-for="(item, index) in menuItems"
          :key="index"
          class="transition hover:text-main-200 sm:z-10"
          :href="item.href"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>
