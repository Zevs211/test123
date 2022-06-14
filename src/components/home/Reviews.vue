<script setup>
import { ref } from 'vue'
import VCarusel from '../reusable-components/VCarusel.vue'
const comments = ref([
  '../../assets/reviews/photo/0.jpg',
  '../../assets/reviews/photo/1.jpg',
  '../../assets/reviews/photo/2.jpg',
  '../../assets/reviews/photo/3.jpg',
  '../../assets/reviews/photo/4.jpg',
  '../../assets/reviews/photo/5.jpg',
  '../../assets/reviews/photo/6.jpg',
  '../../assets/reviews/photo/7.jpg',
  '../../assets/reviews/photo/8.jpg',
  '../../assets/reviews/photo/9.jpg',
  '../../assets/reviews/photo/10.jpg',
  '../../assets/reviews/photo/11.jpg',
  '../../assets/reviews/photo/12.jpg',
  '../../assets/reviews/photo/13.png',
  '../../assets/reviews/photo/14.jpg',
  '../../assets/reviews/photo/15.jpg',
  '../../assets/reviews/photo/16.jpg',
  '../../assets/reviews/photo/17.jpg',
  '../../assets/reviews/photo/18.jpg',
  '../../assets/reviews/photo/19.jpg',
  '../../assets/reviews/photo/20.jpg',
  '../../assets/reviews/photo/21.jpg',
  '../../assets/reviews/photo/22.jpg',
  '../../assets/reviews/photo/23.jpg',
  '../../assets/reviews/photo/24.jpg',
  '../../assets/reviews/photo/25.jpg',
  '../../assets/reviews/photo/26.jpg',
  '../../assets/reviews/photo/27.jpg',
  '../../assets/reviews/photo/28.jpg',
  '../../assets/reviews/photo/29.jpg',
  '../../assets/reviews/photo/30.jpg',
  '../../assets/reviews/photo/31.jpg',
  '../../assets/reviews/photo/32.jpg',
  '../../assets/reviews/photo/33.jpg',
])
</script>

<template>
  <div id="reviews">
    <div class="w-full bg-[url(@/assets/reviews/background.png)] bg-cover">
      <div class="flex w-full flex-col items-center justify-center">
        <div class="mt-8 flex w-full items-center">
          <div
            class="relative h-1 w-full bg-main-100 before:content-['']"
          ></div>
          <h2 class="mx-6 select-none whitespace-nowrap text-main-100">
            Отзывы
          </h2>
          <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
        </div>
        <div
          class="mt-10 flex flex-col items-center justify-center text-sm font-bold text-main-200"
        >
          <span>Получать обратную связь от моих</span>
          <span>пациетов особенно приятно и ценно!</span>
          <span>Это мощный стимул для меня</span>
          <span>развиваться дальше!</span>
        </div>
        <div class="flex w-full justify-center">
          <VCarusel :sliderData="comments"></VCarusel>
        </div>
        <div class="flex items-center justify-center">
          <div class="mb-10 h-20 w-20">
            <img src="@/assets/reviews/silver-logo.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
