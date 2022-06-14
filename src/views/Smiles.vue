<script setup>
import Contacts from '../components/Contacts.vue'
import VFooter from '../components/VFooter.vue'
import VHeaderForExamples from '../components/VHeaderForExamples.vue'
import { ref } from 'vue'

const data = ref([
  '../assets/smiles/smiles-1.jpg',
  '../assets/smiles/smiles-2.jpg',
  '../assets/smiles/smiles-3.jpg',
  '../assets/smiles/smiles-4.jpg',
  '../assets/smiles/smiles-5.jpg',
  '../assets/smiles/smiles-6.jpg',
  '../assets/smiles/smiles-7.jpg',
  '../assets/smiles/smiles-8.jpg',
  '../assets/smiles/smiles-9.jpg',
  '../assets/smiles/smiles-10.jpg',
  '../assets/smiles/smiles-11.jpg',
  '../assets/smiles/smiles-12.jpeg',
  '../assets/smiles/smiles-13.jpeg',
  '../assets/smiles/smiles-14.jpg',
])
const getImageUrl = (el) => {
  return new URL(`${el}`, import.meta.url).href
}
</script>

<template>
  <div
    class="h-full w-full bg-[url(@/assets/examples/background.png)] bg-cover bg-no-repeat"
  >
    <VHeaderForExamples />

    <div class="flex w-full items-center justify-center pt-10">
      <div class="relative h-1 w-full bg-main-100 before:content-['']"></div>
      <h2 class="mx-4 sm:whitespace-nowrap sm:text-main-100">Улыбки</h2>
      <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
    </div>

    <div class="mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <!-- ======================================================================= -->
      <div v-for="(item, index) in data" :key="index" class="my-5">
        <div class="flex h-full w-full flex-col items-center justify-center">
          <img
            class="h-60 w-60 rounded-xl sm:h-80 sm:w-80 xl:h-5/6 xl:w-5/6"
            :src="getImageUrl(item)"
          />
        </div>
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
