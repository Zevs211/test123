<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const menuItems = ref([
  { title: 'Главная', link: '/' },
  { title: 'Лечение на системе энлайнеров', link: '/examples/0' },
  { title: 'Лечение на брекет-системе', link: '/examples/1' },
  { title: 'Детская ортодонтия', link: '/examples/2' },
  {
    title: 'Подготовка перед протезированием',
    link: '/examples/3',
  },
  { title: 'Улыбки', link: '/examples/4' },
])
const isOpen = ref(false)
const router = useRoute()
const currentRoute = ref('')
onMounted(() => {
  currentRoute.value = router.path
})
</script>

<template>
  <div class="flex w-full items-center justify-between">
    <div class="flex h-20 w-full justify-between bg-[#c9cdc9] lg:hidden">
      <div class="flex h-full w-full justify-between px-10">
        <div class="flex h-full w-20 items-center justify-center sm:w-fit">
          <router-link to="/">
            <img class="w-10" src="@/assets/about-us/logo.png" />
          </router-link>
        </div>
        <div class="flex h-full w-20 items-center justify-center">
          <div @click="isOpen = !isOpen">
            <img
              class="w-10 cursor-pointer select-none"
              src="@/assets/about-us/burger.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="container hidden w-full lg:grid lg:grid-cols-3 xl:flex xl:w-full xl:justify-between"
    >
      <div v-for="(item, index) in menuItems" :key="index" class="">
        <div
          class="mt-4 flex h-12 items-center justify-center xl:justify-between"
        >
          <router-link
            class="hover:text-main-200"
            :class="{
              'border-b-2 border-black hover:border-main-200':
                currentRoute === item.link,
            }"
            :to="`${item.link}`"
            >{{ item.title }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="isOpen"
    @click="isOpen = !isOpen"
    class="fixed inset-0 z-40 bg-black opacity-20"
  ></div>
  <div
    v-if="isOpen"
    class="fixed right-0 top-0 z-50 flex h-screen w-3/5 flex-col bg-white opacity-90"
  >
    <div class="flex h-1/2 flex-col justify-center pl-10">
      <div class="flex w-full justify-end">
        <img
          @click="isOpen = false"
          class="mt-5 mr-5 h-5 w-5 cursor-pointer"
          src="@/assets/about-us/close.png"
        />
      </div>
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        class="my-px cursor-pointer select-none rounded-l-md py-3 pl-4 text-main-100 hover:bg-main-100 hover:text-white"
        :to="item.link"
        >{{ item.title }}</router-link
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
</template>
