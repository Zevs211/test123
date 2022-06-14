<script setup>
import Tooth from '../../assets/price/icon-tooth.vue'
import { ref } from 'vue'
import VModal from '../reusable-components/VModal.vue'

const listServices = [
  {
    name: 'Консультация стоматолога-ортодонта',
    price: [
      'Прием (консультация, осмотр) врача-ортодонта первичный 2500 руб',
      'Прием (консультация, осмотр) врача-ортодонта повторный 2500 руб',
      'Прием (осмотр, консультация) врача-ортодонта повторный (активация одной зубной дуги на этапе лечения брекет-системой) от 5 750 р',
      'Ортодонтическая коррекция (активация одной зубной дуги на этапе лечения лингвальной брекет-системой, категория) от 6 500 р',
    ],
  },
  {
    name: 'Исправление прикуса: брекеты, элайнеры',
    price: [
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (стандартного двучелюстного аппарата (LM-активатор, трейнер) от 21600 р',
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (окклюзионная терапия с применением каппы при лечении заболеваний ВНЧС (МСД) от 72 000 р',
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (лицевая маска, губной бампер) от 28 800 р',
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом от 21 600 р',
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (двухчелюстным) от 38 900 р',
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (элайнерами, производство Россия (1 шаг) от 7 200 р',
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (элайнерами Star Smile, I кат сложность) от 110 000 р',
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (элайнерами Star Smile, II кат сложность) от 198 000 р',
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (элайнерами Star Smile, III кат сложность) от 280 000 р',
      'Ортодонтическая коррекция с применением брекет-систем (фиксация самолигирующей эстетической на один зубной ряд) от 120 150 р',
      'Ортодонтическая коррекция с применением брекет-систем (фиксация самолигирующей металлической системы на один зубной ряд) от 96 150 р',
      'Ортодонтическая коррекция с применением брекет-систем (фиксация лингвальных брекетов на один зубной ряд) от 223 100 р',
      'Ортодонтическая коррекция с применением брекет-систем (фиксация лингвальных брекетов на один зубной ряд при лечении двух челюстей) от 199 100 р',
      'Ортодонтическая коррекция с применением брекет-систем (фиксация лигатурной эстетической системы на один зубной ряд) 98 250 р',
      'Ортодонтическая коррекция с применением брекет-систем (фиксация лигатурной металлической системы на один зубной ряд) от 81 000 р',
      'Ортодонтическая коррекция с применением брекет-систем (лечение на одной зубной дуге в период сменного прикуса) от 86 400 р',
      'Ортодонтическая коррекция с применением брекет-систем (фиксация эстетического брекета, 1 элемент) от 8 600 р',
      'Ортодонтическая коррекция с применением брекет-систем (фиксация металлического брекета,кнопки, ортодонтического кольца, 1 элемент) от 6 600 р',
      'Ортодонтическая коррекция с применением брекет-систем (снятие элементов несъемной техники, включая шлифовку и полировку эмали) от 40 350 р',
      'Ортодонтическая коррекция с применением брекет-систем (снятие лингвальных брекетов, включая шлифовку и полировку эмали) от 50 400 р',
      'Ортодонтическая коррекция с применением брекет-систем (снятие вестибулярной брекет-системы системы, 1 зуб) от 1 450 р',
      'Ортодонтическая коррекция с применением брекет-систем (активация 1 зубной дуги у пациента, начавшего лечение брекет-системой вне клиники) от 7 950 р',
    ],
  },

  {
    name: 'Сплинт-терапия',
    price: [
      'Ортодонтическая коррекция съемным ортодонтическим аппаратом (каппа сплинт) от 21 600 р',
    ],
  },
  {
    name: 'Подготовка перед рациональным протезированием',
    price: [
      'Антропометрические исследования (челюстно-лицевой области в ортодонтии) (цифровое сканирование зубных рядов) от 6 000 р',
      'Определение прикуса (использование восковых шаблонов с окклюзионными валиками) от 5 400 р',
      'Исследование на диагностических моделях челюстей (диагностическая расстановка зубов на моделях в/ч и н/ч) от 7 200 р',
      'Определение вида смыкания зубных рядов с помощью лицевой дуги от 17 300 р',
      'Санация полости рта (лечение кариеса) перед ортодонтическим лечением 1 зуб от 8 400 руб',
    ],
  },
]
const isOpen = ref(false)
const currentName = ref('')
const currentPrice = ref([])

function openMenu(item) {
  currentName.value = item.name
  currentPrice.value = item.price
  isOpen.value = true
}
function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <div id="price">
    <VModal v-if="isOpen" @on-close="closeMenu">
      <template v-slot:header>
        <div class="w-full">
          <div class="mt-5 flex items-center sm:mt-10">
            <div class="whitespace-normal text-main-100 sm:text-3xl">
              {{ currentName }}
            </div>
            <div
              class="relative ml-8 h-1 w-full bg-main-200 after:content-['']"
            ></div>
          </div>
        </div>
      </template>
      <div class="flex h-60 flex-col sm:my-10">
        <div class="overflow-y-scroll">
          <p
            v-for="(item, index) in currentPrice"
            :key="index"
            class="my-5 text-main-200"
          >
            <span>{{ item }}</span>
          </p>
        </div>
      </div>

      <template v-slot:footer>
        <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
      </template>
    </VModal>

    <div
      class="h-fit w-full bg-[url(@/assets/price/background.png)] bg-cover sm:hidden"
    >
      <div class="flex w-full flex-col items-center justify-center">
        <div class="mt-8 flex w-full items-center">
          <div class="relative h-1 w-full bg-white before:content-['']"></div>
          <h2 class="mx-4 whitespace-nowrap text-white sm:text-main-100">
            Услуги и цены
          </h2>
          <div class="relative h-1 w-full bg-white after:content-['']"></div>
        </div>
        <div class="flex flex-col justify-center">
          <div
            v-for="(item, index) in listServices"
            :key="index"
            class="mb-32 flex h-80 w-80 items-center justify-center bg-[url(@/assets/price/shadow.png)] bg-contain"
          >
            <div class="cursor-pointer" @click="openMenu(item)">
              <Tooth
                ><span class="text-center"> {{ item.name }}</span></Tooth
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden sm:flex">
      <div class="h-fit w-full bg-[url(@/assets/price/bg-desktop.png)]">
        <div class="mt-8 flex w-full items-center">
          <div
            class="relative h-1 w-full bg-main-100 before:content-['']"
          ></div>
          <h2 class="mx-4 whitespace-nowrap text-white sm:text-main-100">
            Услуги и цены
          </h2>
          <div class="relative h-1 w-full bg-main-100 after:content-['']"></div>
        </div>
        <div class="mb-14 mt-32 flex justify-center">
          <div
            v-for="(item, index) in listServices"
            :key="index"
            class="flex h-fit w-80 flex-col items-center justify-center bg-contain"
          >
            <div class="cursor-pointer" @click="openMenu(item)">
              <Tooth></Tooth>
            </div>
            <span
              @click="openMenu(item)"
              class="cursor-pointer text-center text-gray-700"
            >
              {{ item.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
