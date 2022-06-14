<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  modalData: {
    type: Array,
    default: () => [],
  },
  description: {
    type: String,
  },
})
const data = ref([])
const currentImg = ref(0)

const getImageUrl = (el) => {
  return new URL(`${el}`, import.meta.url).href
}
function nextSlide() {
  if (currentImg.value >= props.modalData.length - 1) {
    currentImg.value = 0
  } else {
    currentImg.value++
  }
}
function prevSlide() {
  if (currentImg.value <= 0) {
    currentImg.value = props.modalData.length - 1
  } else {
    currentImg.value--
  }
}
onMounted(() => {
  data.value = props.modalData
  console.log(data.value)
})
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div
      class="flex h-full w-fit flex-col items-center justify-center rounded-xl bg-white py-10"
    >
      <div class="flex h-full w-fit items-center justify-center">
        <img
          class="mx-4 h-10 w-5 cursor-pointer"
          src="../assets/aligners/arrow-left.png"
          @click="prevSlide"
        />
        <div v-for="(item, index) in data" :key="index">
          <img
            :class="{ hidden: currentImg != index }"
            class="h-60 w-60 sm:h-80 sm:w-80"
            :src="getImageUrl(item)"
          />
        </div>
        <img
          class="mx-4 h-10 w-5 cursor-pointer"
          src="../assets/aligners/arrow-right.png"
          @click="nextSlide"
        />
      </div>
      <div class="mt-5 flex flex-col items-center justify-center">
        <div class="flex">
          <div
            v-for="item in data.length"
            :key="item"
            :class="{
              'bg-main-200': currentImg === item - 1,
              'border border-main-200 bg-white': currentImg !== item - 1,
            }"
            class="mx-4 h-2 w-2 rounded-full"
          ></div>
        </div>
        <span class="my-4 px-10 text-sm text-main-200">{{
          `${props.description}`
        }}</span>
      </div>
    </div>
  </div>
</template>
