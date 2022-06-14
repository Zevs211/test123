<script setup>
import Price from './Price.vue'
const works = [
  { title: 'Лечение на системе элайнеров', src: 'elainer.png' },
  { title: 'Лечение на брекет-системе', src: 'braces.png' },
  { title: 'Детская ортодонтия', src: 'children.png' },
  {
    title: 'Подготовка перед рациональным протезированием',
    src: 'prosthesis.png',
  },
  { title: 'Улыбки', src: 'smile.png' },
]

const educations = [
  {
    title: 'Образование',
    details: [
      'Санкт-Петербургский Государственный Медицинский Университет им. акад. И.П. Павлова, диплом по специальности «Стоматология», 2012г.',
      'Интернатура: Ортодонтия», Северо-Западный государственный медицинский университет им. И.И. Мечникова, 2013г.',
      'Ординатура: «Ортодонтия», Северо-Западный государственный медицинский университет им. И.И. Мечникова, 2015г.',
    ],
    src: 'icon-education.png',
  },
  {
    title: 'Повышение квалификации',
    details: [
      '2012г: Повышение квалификации «Миофункциональные аппараты Myobrace», Нильс Халсинк.2012г: Повышение квалификации «Миофункциональные аппараты Myobrace», Нильс Халсинк.',
      '2014г: Повышение квалификации по курсу «Основы работы с несъемной ортодонтической аппаратурой биомеханика в ортодонтии», Е.В. Кирсанова, Учебно-консультационный центр «ПУМПА».',
      '2014г: Участие в XVI съезде профессионального общества ортодонтов России.',
      '2014г: Участие в семинаре «Использование скелетного роста в период сменного прикуса. Применение функциональных аппаратов (твин блок). Особенности ортодонтического лечения в период постоянного прикуса», Гвидо Самперман, ООО «Технодент».',
      '2015г: Участие в семинаре «Пародонтит. Удаление или ортодонтическое лечение.», Е. В. Быкова.',
      '2015г: Участие в семинаре «Alexander Discipline. Философия ортодонтического лечения. Р.Д. Александер», Е.В. Быкова.',
      '2015г: Участие в семинаре «Рецепты успеха и секреты влияния. Новые технологии для желающих преуспеть в профессии», Ангелина Шам, Учебный Центр PRIMED.',
      '2015г: Участие в «3D-конференция KaVo», 5 KaVo.Dental Excellence.',
      '2015г: Участие в Межрегиональной научно-практической конференции ПИКАССО, Санкт-Петербург.',
      '2015г: Участие в семинаре «Введение в философию FACE. Ортодонтия и функциональная окклюзия», Доминго Мартин, Учебно-консультационный центр «ПУМПА».',
      '2016г: Участие в Международной Восточноевропейской Конференции «Междисциплинарные аспекты диагностики и лечения краниомандибулярных расстройств», Санкт-Петербург.',
      '2016г: Участие в семинаре «Конструирование съемных аппаратов», Е.В. Кирсанова, Учебно-консультационный центр «ПУМПА».',
      '2016г: Участие в сертификационном курсе «Элайнеры VSD. Практическое использование цифровых технологий VSD-System в ортодонтии», Учебно-консультационный центр «ПУМПА».',
      '2016г: Участие в сертификационном курсе «Многофункциональный ортодонтический аппарат Twicare. Применение эластопозиционеров в ортодонтической практике», Учебно-консультационный центр «ПУМПА».',
      '2017г: Участие в семинаре «Star Smile Ортодонтия без брекетов».',
      '2017: Участие в семинаре «Возможности ортодонтического лечения при использовании нового поколения систем пассивного самолигирования - системы H4», Алексей Ермаков.',
      '2018г: Участие в авторской лекции «Шесть секретов достижения запланированного результата при лечении прозрачными элайнерами простой и сложной патологии прикуса», Бостонский Институт Эстетической медицины.',
      '2019г: Участие в семинаре «Устранение промежутков. Междисциплинарное и ортодонтическое лечение при заболеваниях тканей пародонта и отсутствия зубов в эстетической зоне улыбки», Prof. Marco Rosa, Dental-Event.',
      '2019г: Участие в семинаре «Полная диагностика дисфункций ВНЧС в ортодонтической практике», Ormco.',
      '2019г: участие в семинаре «Дистальная окклюзия. Коррекция с помощью MEAW», Анна Невдах, Ortholight.',
      '2020г: Участие в семинаре «Аппарат для дистализации зубов», Спесивцев А.В., Star Smile.',
      '2020г: Участие в семинаре «Kinder smile», Рягузова Е.Н., Star Smile.',
      '2021г: Участие в вебинаре «Практическое использование МРТ в работе ортодонта», Александр Коледов, Академия EuroKappa.',
      '2021г: Участие в вебинаре «Современное лечение детей с применением гнатологических принципов», Лиана Стрипская, Ortho.Love.',
      '2022г: Повышение квалификации по специальности «Ортодонтия», ЧОУ ОДПО «Межрегиональный институт дополнительного профессионального образования».',
    ],
    src: 'icon-arrow.png',
  },
  {
    title: 'Сертификация',
    details: [
      'Сертификат по специальности «Ортодонтия», ЧОУ ОДПО «Межрегиональный институт дополнительного профессионального образования», 2020г.',
    ],
    src: 'icon-check.png',
  },
]

const getImageUrl = (name) => {
  return new URL(`../../assets/work/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="relative overflow-hidden pb-16 lg:pb-56" id="work">
    <div
      class="my-9 flex w-full items-center gap-x-5 lg:mt-16 lg:mb-24 lg:gap-x-14"
    >
      <hr class="w-full border-main-200 lg:border-[1.5px]" />
      <h2>Работы</h2>
      <hr class="w-full border-main-200 lg:border-[1.5px]" />
    </div>
    <div
      class="container grid grid-cols-1 gap-5 sm:grid-cols-4 md:gap-9 lg:grid-cols-6 xl:gap-12"
    >
      <router-link
        :to="`/examples/${index}`"
        v-for="(work, index) in works"
        :key="work.title"
        class="group relative z-30 flex aspect-square flex-col justify-end overflow-hidden rounded-2xl p-7 sm:col-span-2 lg:p-9 xl:p-11"
        :class="{
          'sm:col-start-2 lg:col-start-auto': index + 1 === works.length,
          'lg:col-start-2': index === works.length - 2,
        }"
      >
        <h4 class="z-40 text-center text-white">{{ work.title }}</h4>
        <div
          class="absolute inset-0 z-20 cursor-pointer bg-main-100/70 transition group-hover:bg-transparent"
        ></div>
        <img
          class="absolute top-0 left-0 h-full w-full"
          :src="getImageUrl(work.src)"
          :alt="work.title"
        />
      </router-link>
    </div>
    <div class="absolute top-0 right-0">
      <img
        class="mt-8 -translate-x-2/3 translate-y-2/3 scale-[300%] md:mt-0 md:translate-x-0 md:translate-y-0 md:scale-100"
        src="@/assets/work/bg.png"
        alt=""
      />
      <img
        class="absolute top-0 right-0 z-10 mt-8 -translate-x-2/3 translate-y-1/3 scale-[300%] md:mt-0 md:translate-x-0 md:-translate-y-1/3 md:scale-100"
        src="@/assets/work/bg-blue.png"
        alt=""
      />
    </div>
  </div>
  <div
    class="flex w-full flex-col items-center lg:container lg:-mt-36 lg:flex-row"
  >
    <img
      class="z-10 lg:w-1/2 xl:w-auto"
      src="@/assets/work/photo-full-size.png"
      alt=""
    />
    <div
      class="relative w-full overflow-hidden bg-main-100 py-10 lg:absolute lg:left-0"
    >
      <div class="container flex flex-row gap-x-14">
        <img
          class="hidden h-0 lg:block lg:w-1/2"
          src="@/assets/work/photo-full-size.png"
          alt=""
        />
        <div class="flex flex-col gap-y-5">
          <h3 class="z-20 text-white lg:hidden">
            Профессиональный<br /><span class="uppercase">опыт и навыки</span>
          </h3>
          <p class="z-20">Выпускница ПСПбГМУ им. акад. И.П. Павлова (2012г.)</p>
          <p class="z-20">
            С 2015 года занимаюсь частной практикой в клиниках г. Москвы
          </p>
          <p class="z-20">
            <b>Сфера моих профессиональных интересов:</b><br />
            • Исправление прикуса у взрослых и детей<br />
            • Аномалии и деформации зубочелюстной системы<br />
            • Ортодонтическая подготовка к протезированию
          </p>
        </div>
      </div>
      <img
        class="absolute -top-1/4 right-0 scale-[500%] lg:hidden"
        src="@/assets/work/bg-blue.png"
        alt=""
      />
    </div>
  </div>
  <div class="container hidden flex-col lg:flex">
    <h2 class="z-20 my-14">
      Профессиональный<br /><span class="uppercase">опыт и навыки</span>
    </h2>
    <hr class="border-main-200 lg:border-[1.5px]" />
  </div>
  <div class="relative">
    <div class="container relative flex flex-col divide-y py-9">
      <div
        v-for="education in educations"
        :key="education.title"
        class="flex items-start gap-x-4 py-5 lg:gap-x-8 xl:gap-x-12"
      >
        <img :src="getImageUrl(education.src)" class="w-11 lg:w-16 xl:w-24" />
        <details class="group mt-0.5 h-max w-full lg:mt-3 xl:mt-4">
          <summary
            class="flex cursor-pointer items-center justify-between uppercase text-[#7B7977] transition hover:text-main-200"
          >
            <span class="lg:text-xl xl:text-3xl">{{ education.title }}</span>
            <span class="text-4xl text-main-100 group-open:hidden xl:text-6xl"
              >+</span
            >
            <span
              class="hidden text-4xl text-main-100 group-open:block xl:text-6xl"
              >–</span
            >
          </summary>
          <div class="flex flex-col gap-y-4">
            <p v-for="detail in education.details" :key="detail">
              {{ detail }}
            </p>
          </div>
        </details>
      </div>
    </div>
    <img
      class="absolute bottom-0 left-0 -z-10 hidden w-screen lg:block"
      src="@/assets/work/bg-education.png"
      alt=""
    />
  </div>
  <Price class="mb-2" />
</template>

<style>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
