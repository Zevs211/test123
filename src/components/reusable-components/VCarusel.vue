<script setup>
import { ref, onMounted, watch } from 'vue'
import VModal from './VModal.vue'

const items = ref([])
const visibleSlide = ref(2)
const props = defineProps(['sliderData'])
const arrCurrentComment = ref([])
const isOpen = ref(false)
const currentImg = ref('')

onMounted(() => {
  items.value = props.sliderData
  arrCurrentComment.value = [items.value[0], items.value[1], items.value[2]]
})
const getImageUrl = (el) => {
  return new URL(`${el}`, import.meta.url).href
}
function nextSlide() {
  if (visibleSlide.value >= items.value.length - 1) {
    visibleSlide.value = 0
  } else {
    visibleSlide.value++
  }
}
function prevSlide() {
  if (visibleSlide.value <= 0) {
    visibleSlide.value = items.value.length - 1
  } else {
    visibleSlide.value--
  }
}
function openMenu(item) {
  currentImg.value = item
  isOpen.value = true
}
function closeMenu() {
  isOpen.value = false
}

watch(visibleSlide, (newValue, oldValue) => {
  if (newValue === items.value.length - 1) {
    arrCurrentComment.value[0] = items.value[items.value.length - 3]
    arrCurrentComment.value[1] = items.value[items.value.length - 2]
    arrCurrentComment.value[2] = items.value[items.value.length - 1]
  } else if (newValue < oldValue && newValue === 0) {
    arrCurrentComment.value[0] = items.value[items.value.length - 2]
    arrCurrentComment.value[1] = items.value[items.value.length - 1]
    arrCurrentComment.value[2] = items.value[0]
  } else if (newValue > oldValue) {
    arrCurrentComment.value.shift()
    arrCurrentComment.value.push(items.value[newValue])
  } else if (newValue < oldValue && visibleSlide.value === 0) {
    arrCurrentComment.value.shift()
    arrCurrentComment.value.push(items.value[newValue])
  } else if (newValue < oldValue && visibleSlide.value === 1) {
    arrCurrentComment.value.pop()
    arrCurrentComment.value.unshift(items.value[items.value.length - 1])
  } else if (newValue < oldValue) {
    arrCurrentComment.value.pop()
    arrCurrentComment.value.unshift(items.value[newValue - 2])
  }
})
</script>

<template>
  <div class="my-10 flex h-full w-full items-center justify-between lg:hidden">
    <div class="mx-3 cursor-pointer" @click="prevSlide">
      <img src="@/assets/reviews/arrow-left.png" />
    </div>
    <div class="relative flex h-80 w-80 justify-center">
      <div
        v-for="(item, index) in items"
        :key="index"
        v-show="visibleSlide === index"
      >
        <img
          @click="openMenu(item)"
          class="h-80 w-80"
          :src="getImageUrl(item)"
        />
        <VModal v-if="isOpen" @on-close="closeMenu"
          ><img class="h-fit w-full" :src="getImageUrl(item)"
        /></VModal>
      </div>
    </div>
    <div class="mx-3 cursor-pointer" @click="nextSlide">
      <img src="@/assets/reviews/arrow-right.png" />
    </div>
  </div>
  <!-- ================================================================ -->
  <div class="my-4 hidden h-1/3 w-full items-center justify-between lg:flex">
    <div class="mx-3 cursor-pointer" @click="prevSlide">
      <img src="@/assets/reviews/arrow-left.png" />
    </div>
    <div v-for="(item, index) in arrCurrentComment" :key="index">
      <img
        @click="openMenu(item)"
        class="h-80 w-80 cursor-pointer"
        :src="getImageUrl(item)"
      />
      <VModal class="w-full" v-if="isOpen" @on-close="closeMenu"
        ><img
          class="sm:w-1/2 lg:w-2/3 xl:w-5/12"
          :src="getImageUrl(currentImg)"
      /></VModal>
    </div>
    <div class="mx-3 cursor-pointer" @click="nextSlide">
      <img src="@/assets/reviews/arrow-right.png" />
    </div>
  </div>
</template>
