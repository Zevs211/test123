<script setup>
import Contacts from '../components/Contacts.vue'
import VFooter from '../components/VFooter.vue'
import VHeaderForExamples from '../components/VHeaderForExamples.vue'
import VModalForExamples from '../components/VModalForExamples.vue'
import { ref } from 'vue'

const data = ref([
  {
    url: [
      '../assets/childs/childs-34-1.jpg',
      '../assets/childs/childs-34-2.jpg',
      '../assets/childs/childs-34-3.jpg',
    ],
    description:
      'Лечение подростка (после ретенированных зубов) собрали промежутки на верхней и нижней челюстях, убрали перекрёстное соотношение зубов в области премоляров справа, изменили линию улыбки, сделав парня ещё более обворожительным',
  },
  {
    url: ['../assets/childs/childs-35-1.jpg'],
    description:
      'Закончили первый этап ортодонтического лечения. Поставили заблокированные двоечки на место. Ожидаем полной смены зубов для завершения лечения',
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
        Детская ортодонтия
      </h2>
      <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
    </div>

    <div
      class="mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:flex 2xl:justify-center"
    >
      <!-- ======================================================================= -->
      <div v-for="(item, index) in data" :key="index" class="my-5 px-10">
        <VModalForExamples
          class="2xl:w-96"
          :modalData="item.url"
          :description="item.description"
        ></VModalForExamples>
      </div>
      <!-- ======================================================================= -->
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
