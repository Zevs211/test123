<script setup>
import Contacts from '../components/Contacts.vue'
import VFooter from '../components/VFooter.vue'
import VHeaderForExamples from '../components/VHeaderForExamples.vue'
import VModalForExamples from '../components/VModalForExamples.vue'
import { ref } from 'vue'
// ====================================================================
const data = ref([
  {
    url: ['../assets/braces/braces-1-1.jpg'],
    description:
      'Дистальный прикус. Бипротрузия. Тремы на верхней и нижней челюсти. Ретенция зуба 4.5. Лечение на брекет-системе.Срок 24 месяца',
  },
  {
    url: [
      '../assets/braces/braces-3-1.jpg',
      '../assets/braces/braces-3-2.jpg',
      '../assets/braces/braces-3-3.jpg',
      '../assets/braces/braces-3-4.jpg',
    ],
    description:
      'Дистальный прикус. Дистопия зуба 2.3. Смещение центральных линий на верхней и нижней челюстях. Лечение на брекет-системе. Срок 22 месяца.',
  },
  {
    url: ['../assets/braces/braces-6-1.jpg', '../assets/braces/braces-6-2.jpg'],
    description:
      'Нейтральный прикус. Перекрёстный прикус.Аномалии положения отдельных зубов. Вторичная адентия отдельных зубов. Лечение на брекет-системе. Срок 16 месяцев.',
  },
  {
    url: ['../assets/braces/braces-10-1.jpg'],
    description:
      'Дистальный прикус. Аномалии положения отдельных зубов. Лечение на брекет-системе. Срок 19 месяцев.',
  },
  {
    url: [
      '../assets/braces/braces-12-1.jpg',
      '../assets/braces/braces-12-2.jpg',
    ],
    description:
      'Дистальный прикус. Аномалии положения отдельных зубов. Лечение на брекет-системе. Срок 18 месяцев.',
  },
  {
    url: ['../assets/braces/braces-13-1.jpg'],
    description:
      'Дистальный прикус. Аномалии положения отдельных зубов. Диастема на верхней челюсти. Лечение на брекет-системе. Срок 20 месяцев.',
  },
  {
    url: [
      '../assets/braces/braces-14-1.jpg',
      '../assets/braces/braces-14-2.jpg',
      '../assets/braces/braces-14-3.jpg',
    ],
    description:
      'Дистальный прикус. Дистопия зуба 1.5 (небное расположение). Аномалии положения отдельных зубов. Лечение на брекет-системе. Срок 24 месяца.',
  },
  {
    url: ['../assets/braces/braces-17-1.jpg'],
    description:
      'Мезиальный прикус. Открытый прикус. Дистопия зубов 1.3,2.3 ( дистопия клыков). Аномалии положения отдельных зубов. Лечение на брекет-системе. Срок 14 месяцев.',
  },
  {
    url: ['../assets/braces/braces-18-1.jpg'],
    description:
      'Открытый прикус. Аномалии положения отдельных зубов. Лечение на брекет- системе. Срок 14 месяцев.',
  },
  {
    url: ['../assets/braces/braces-19-1.jpg'],
    description:
      'Дистальный прикус. Дистопия зуба 1.3 ( дистопия клыка) адентия зуба 4.5 ( адентия премоляра). Лечение на брекет-системе. Срок 20 месяцев.',
  },
  {
    url: [
      '../assets/braces/braces-20-1.jpg',
      '../assets/braces/braces-20-2.jpg',
      '../assets/braces/braces-20-3.jpg',
    ],
    description:
      'Дистальный прикус. Аномалии положения отдельных зубов. Лечение на системе элайнеров. Срок 24 месяца',
  },
  {
    url: [
      '../assets/braces/braces-21-1.jpg',
      '../assets/braces/braces-21-2.jpg',
    ],
    description:
      'Мезиальный прикус. Ретенция зуба 1.3. Аномалии положения отдельных зубов. Лечение на брекет-системе. Срок 20 месяцев.',
  },
])

// ================================================================
</script>

<template>
  <div
    class="h-full w-full bg-[url(@/assets/examples/background.png)] bg-cover bg-no-repeat"
  >
    <VHeaderForExamples />

    <div class="flex w-full items-center justify-center pt-10">
      <div class="relative h-1 w-full bg-main-100 before:content-['']"></div>
      <h2 class="mx-4 sm:whitespace-nowrap sm:text-main-100">
        Лечение на брекет-системе
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
