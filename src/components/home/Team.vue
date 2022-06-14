<script setup>
import { ref, watch } from 'vue'

const team = [
  {
    name: 'Абдумавланов Азамат',
    description: 'стоматолог-хирург, имплантолог, пародонтолог',
  },
  {
    name: 'Абрамашвили Софья Давидовна',
    description: 'стоматолог-ортодонт',
  },
  {
    name: 'Бугакова Анна Сергеевна',
    description: 'стоматолог-хирург, пародонтолог',
  },
  {
    name: 'Величко Константин Владимирович',
    description: 'стоматолог-терапевт',
  },
  {
    name: 'Гвоздева Анастасия Владимировна',
    description: 'стоматолог-хирург',
  },
  {
    name: 'Поляк Артем Олегович',
    description: 'стоматолог-ортопед',
  },
  {
    name: 'Титова Яна Олеговна',
    description: 'стоматолог-ортодонт',
  },
  {
    name: 'Экажева Марианна Солеховна',
    description: 'стоматолог-ортопед',
  },
  {
    name: 'Юркевич Роман Игоревич',
    description: 'стоматолог, хирург-имплантолог, к.м.н.',
  },
]

let currentMember = ref(0)

watch(currentMember, async (newCurrentMember) => {
  if (newCurrentMember > team.length - 1) {
    currentMember.value = 0
  } else if (newCurrentMember < 0) {
    currentMember.value = team.length - 1
  }
})

const getImageUrl = (name) => {
  return new URL(`../../assets/team/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="relative" id="team">
    <img src="@/assets/team/banner.png" alt="" />
    <div
      class="relative z-20 mb-7 flex w-full items-center gap-x-5 sm:-mt-16 sm:bg-main-100/75 sm:py-1 lg:mt-16 lg:mb-24 lg:gap-x-14"
    >
      <hr class="w-full border-main-200 sm:border-white lg:border-[1.5px]" />
      <h2 class="w-max shrink-0 sm:text-white">Моя команда</h2>
      <hr class="w-full border-main-200 sm:border-white lg:border-[1.5px]" />
    </div>
    <div class="container relative z-20 pb-8 sm:pb-16 lg:pb-28">
      <div class="flex flex-col items-center sm:hidden">
        <div class="relative mb-4">
          <img :src="getImageUrl(`${team[currentMember].name}.png`)" />
          <img
            class="absolute left-1 top-1/2 -translate-y-1/2 scale-50 cursor-pointer"
            @click="currentMember -= 1"
            src="@/assets/team/arrow-left.png"
            alt="<"
          />
          <img
            class="absolute right-1 top-1/2 -translate-y-1/2 scale-50 cursor-pointer"
            @click="currentMember += 1"
            src="@/assets/team/arrow-right.png"
            alt="<"
          />
        </div>
        <h5 class="mb-1 text-grey">{{ team[currentMember].name }}</h5>
        <p class="text-center text-grey">
          {{ team[currentMember].description }}
        </p>
      </div>
      <div class="hidden grid-cols-2 gap-8 sm:grid lg:grid-cols-3 lg:gap-12">
        <div
          v-for="teamMember in team"
          :key="teamMember.name"
          class="flex flex-col items-center"
        >
          <img class="mb-4" :src="getImageUrl(`${teamMember.name}.png`)" />
          <h5 class="mb-1 text-center text-grey">{{ teamMember.name }}</h5>
          <p class="text-center text-grey">
            {{ teamMember.description }}
          </p>
        </div>
      </div>
    </div>
    <img
      class="absolute bottom-0 left-0 w-screen"
      src="@/assets/team/bg.png"
      alt=""
    />
    <img
      class="absolute bottom-0 left-0 -z-10 w-screen"
      src="@/assets/team/bg-blue.png"
      alt=""
    />
  </div>
</template>
