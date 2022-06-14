<script setup>
import Contacts from '../components/Contacts.vue'
import VFooter from '../components/VFooter.vue'
import VHeaderForExamples from '../components/VHeaderForExamples.vue'
import VModalForExamples from '../components/VModalForExamples.vue'
import { ref } from 'vue'

const data1 = ref([
  {
    url: [
      '../assets/preparation/23/before-1.JPG',
      '../assets/preparation/23/before-2.JPG',
      '../assets/preparation/23/before-3.JPG',
      '../assets/preparation/23/before-4.JPG',
      '../assets/preparation/23/before-5.JPG',
      '../assets/preparation/23/before-6.JPG',
      '../assets/preparation/23/before-7.JPG',
    ],
    description: 'До ортодонтического лечения',
  },
  {
    url: [
      '../assets/preparation/23/during-1.JPG',
      '../assets/preparation/23/during-2.JPG',
      '../assets/preparation/23/during-3.JPG',
      '../assets/preparation/23/during-4.JPG',
      '../assets/preparation/23/during-5.JPG',
      '../assets/preparation/23/during-6.JPG',
    ],
    description: 'На этапе ортодонтической подготовки',
  },
  {
    url: [
      '../assets/preparation/23/after-1.JPG',
      '../assets/preparation/23/after-2.JPG',
      '../assets/preparation/23/after-3.JPG',
      '../assets/preparation/23/after-4.JPG',
      '../assets/preparation/23/after-5.JPG',
      '../assets/preparation/23/after-6.JPG',
      '../assets/preparation/23/after-7.JPG',
    ],
    description: 'После ортопедического восстановления',
  },
])
const data2 = ref([
  {
    url: [
      '../assets/preparation/24/before-1.JPG',
      '../assets/preparation/24/before-2.JPG',
      '../assets/preparation/24/before-3.JPG',
      '../assets/preparation/24/before-4.JPG',
      '../assets/preparation/24/before-5.JPG',
      '../assets/preparation/24/before-6.JPG',
    ],
    description: 'До ортодонтического лечения',
  },
  {
    url: [
      '../assets/preparation/24/during-1.JPG',
      '../assets/preparation/24/during-2.JPG',
      '../assets/preparation/24/during-3.JPG',
      '../assets/preparation/24/during-4.JPG',
      '../assets/preparation/24/during-5.JPG',
      '../assets/preparation/24/during-6.JPG',
    ],
    description: 'На этапе ортодонтической подготовки',
  },
  {
    url: [
      '../assets/preparation/24/after-1.JPG',
      '../assets/preparation/24/after-2.JPG',
      '../assets/preparation/24/after-3.JPG',
      '../assets/preparation/24/after-4.JPG',
      '../assets/preparation/24/after-5.JPG',
    ],
    description: 'После ортопедического восстановления',
  },
])
const data3 = ref([
  {
    url: [
      '../assets/preparation/25/before-1.JPG',
      '../assets/preparation/25/before-2.JPG',
      '../assets/preparation/25/before-3.JPG',
      '../assets/preparation/25/before-4.JPG',
      '../assets/preparation/25/before-5.JPG',
      '../assets/preparation/25/before-6.JPG',
    ],
    description: 'До ортодонтического лечения',
  },
  {
    url: [
      '../assets/preparation/25/during-1.JPG',
      '../assets/preparation/25/during-2.JPG',
      '../assets/preparation/25/during-3.JPG',
      '../assets/preparation/25/during-4.JPG',
      '../assets/preparation/25/during-5.JPG',
      '../assets/preparation/25/during-6.JPG',
      '../assets/preparation/25/during-7.JPG',
    ],
    description: 'Фиксация брекет-системы после проведнной сплинт-терапии',
  },
  {
    url: [
      '../assets/preparation/25/after-1.JPG',
      '../assets/preparation/25/after-2.JPG',
      '../assets/preparation/25/after-3.JPG',
      '../assets/preparation/25/after-4.JPG',
      '../assets/preparation/25/after-5.JPG',
      '../assets/preparation/25/after-6.JPG',
      '../assets/preparation/25/after-7.JPG',
    ],
    description: 'После ортопедического восстановления',
  },
])
</script>

<template>
  <div
    class="h-full w-full bg-[url(@/assets/examples/background.png)] bg-cover bg-no-repeat"
  >
    <VHeaderForExamples />

    <div class="flex w-full items-center justify-center pt-10">
      <div class="relative h-1 w-full bg-main-100 before:content-['']"></div>
      <h2 class="mx-4 sm:whitespace-nowrap sm:text-main-100">
        Подготовка перед рациональным протезированием
      </h2>
      <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
    </div>

    <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <div v-for="(item, index) in data1" :key="index" class="my-5 px-10">
        <VModalForExamples
          :modalData="item.url"
          :description="item.description"
        ></VModalForExamples>
      </div>
    </div>
    <div class="flex items-center justify-center"></div>

    <div class="mt-8 flex w-full items-center">
      <div class="relative h-1 w-full bg-main-100 before:content-['']"></div>
      <img class="mx-5 h-20 w-20" src="@/assets/reviews/silver-logo.png" />
      <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
    </div>

    <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <div v-for="(item, index) in data2" :key="index" class="my-5 px-10">
        <VModalForExamples
          :modalData="item.url"
          :description="item.description"
        ></VModalForExamples>
      </div>
    </div>
    <div class="flex items-center justify-center"></div>

    <div class="mt-8 flex w-full items-center">
      <div class="relative h-1 w-full bg-main-100 before:content-['']"></div>
      <img class="mx-5 h-20 w-20" src="@/assets/reviews/silver-logo.png" />
      <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
    </div>

    <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <div v-for="(item, index) in data3" :key="index" class="my-5 px-10">
        <VModalForExamples
          :modalData="item.url"
          :description="item.description"
        ></VModalForExamples>
      </div>
    </div>
    <div class="flex items-center justify-center"></div>

    <div class="mt-8 flex w-full items-center">
      <div class="relative h-1 w-full bg-main-100 before:content-['']"></div>
      <img class="mx-5 h-20 w-20" src="@/assets/reviews/silver-logo.png" />
      <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
    </div>

    <Contacts />
    <VFooter />
  </div>
</template>
