<script setup>
import Contacts from '../components/Contacts.vue'
import VFooter from '../components/VFooter.vue'
import VHeaderForExamples from '../components/VHeaderForExamples.vue'
import VModalForExamples from '../components/VModalForExamples.vue'
import { ref } from 'vue'

const data = ref([
  {
    url: [
      '../assets/aligners/aligners-2-1.jpg',
      '../assets/aligners/aligners-2-2.jpg',
      '../assets/aligners/aligners-2-3.jpg',
    ],
    description:
      'Нейтральный прикус. Аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 16 месяцев',
  },
  {
    url: [
      '../assets/aligners/aligners-4-1.jpg',
      '../assets/aligners/aligners-4-2.jpg',
      '../assets/aligners/aligners-4-3.jpg',
      '../assets/aligners/aligners-4-4.jpg',
    ],
    description:
      'Перекрёстный прикус. Аномалии положения отельных зубов. Лечение на системе элайнеров. Срок 24 месяца',
  },
  {
    url: [
      '../assets/aligners/aligners-5-1.jpg',
      '../assets/aligners/aligners-5-2.jpg',
      '../assets/aligners/aligners-5-3.jpg',
    ],
    description:
      'Нейтральный прикус. Перекрёстный прикус. Бипротрузия. Тремы, аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 14 месяцев.',
  },
  {
    url: [
      '../assets/aligners/aligners-7-1.jpg',
      '../assets/aligners/aligners-7-2.jpg',
    ],
    description:
      'Нейтральный прикус. Выраженное сужение зубных рядов. Аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 14 месяцев',
  },
  {
    url: [
      '../assets/aligners/aligners-8-1.jpg',
      '../assets/aligners/aligners-8-2.jpg',
    ],
    description:
      'Нейтральный прикус. Смещение центральных линий на верхней и нижней челюстях. Аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 24 месяца.',
  },
  {
    url: [
      '../assets/aligners/aligners-9-1.jpg',
      '../assets/aligners/aligners-9-2.jpg',
      '../assets/aligners/aligners-9-3.jpg',
    ],
    description:
      'Нейтральный прикус. Тремы на верхней челюсти. Аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 7 месяцев.',
  },
  {
    url: [
      '../assets/aligners/aligners-11-1.jpg',
      '../assets/aligners/aligners-11-2.jpg',
    ],
    description:
      'Нейтральный прикус. Аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 12 месяцев.',
  },
  {
    url: ['../assets/aligners/aligners-15-1.jpg'],
    description:
      'Нейтральный прикус.Тремы на верхней и нижней челюстях. Аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 16 месяцев.',
  },
  {
    url: [
      '../assets/aligners/aligners-16-1.jpg',
      '../assets/aligners/aligners-16-2.jpg',
    ],
    description:
      'Нейтральный прикус. Диастема на верхней челюсти. Аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 16 месяцев.',
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
        Лечение на системе энлайнеров
      </h2>
      <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
    </div>

    <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <div v-for="(item, index) in data" :key="index" class="my-5 px-10">
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
