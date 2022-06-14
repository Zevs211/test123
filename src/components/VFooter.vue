<script setup>
const icons = [
  {
    icon: 'instagram.png',
    href: 'https://www.instagram.com/mv.ortho/',
  },
  {
    icon: 'phone.png',
    text: '8 (800) 500 07 02',
    href: 'tel:88005000702',
  },
  {
    icon: 'place.png',
    text: 'г. Москва, ул. Садовая-Сухаревская 7/1.',
    href: 'https://yandex.ru/maps/-/CCUJNZw2lC',
  },
]

const getImageUrl = (name) => {
  return new URL(`../assets/footer/${name}`, import.meta.url).href
}
</script>

<template>
  <footer class="bg-[#879197]">
    <div
      class="container flex flex-col items-center gap-y-10 pt-14 pb-20 md:gap-y-4"
    >
      <div
        class="flex flex-col items-center gap-y-10 md:w-full md:flex-row md:justify-between"
      >
        <a href="https://olymp.clinic/" target="_blank"
          ><img
            src="@/assets/footer/logo.png"
            alt="Олимп Клиник"
            class="md:w-40 lg:w-48"
        /></a>

        <a
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.href"
          class="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-4"
        >
          <img class="md:w-5 lg:w-8" :src="getImageUrl(icon.icon)" alt="" />
          <span
            :href="icon.href"
            target="_blank"
            class="text-center text-sm text-white md:text-base lg:text-lg"
            :class="{ 'lg:!text-3xl': icon.icon === 'phone.png' }"
            >{{ icon.text }}</span
          >
        </a>
      </div>
      <div class="flex flex-col gap-y-6 md:w-full lg:gap-y-2 xl:gap-y-4">
        <div
          class="border-y-2 border-white/50 py-8 text-center text-lg text-white/50 md:py-4 lg:border-none"
        >
          <div class="lg:hidden">
            ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА.
          </div>
          <div
            class="hidden scale-y-150 justify-between text-xl lg:flex xl:text-2xl"
          >
            <div
              v-for="letter in 'ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА.'.split(
                ''
              )"
              :key="letter"
            >
              {{ letter }}
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-center gap-y-5 text-center text-sm text-white/50 lg:flex-row lg:justify-between lg:text-base xl:text-lg"
        >
          <span
            ><a
              target="_blank"
              href="https://olymp.clinic/wp-content/uploads/2021/12/ooo_olimp_klinik_vypiska-iz-reestra-liczenzij.pdf"
              >Лицензия ЛО-77-01-021100 от 17.03.2021</a
            >, <br class="xl:hidden" />
            <a
              target="_blank"
              href="https://olymp.clinic/wp-content/uploads/2021/12/vypiska_iz_reestra_olimp_klinik_silnodejstvuyushhie_preparaty.pdf"
              >Лицензия ЛО-77-03-001003 от 29.04.2021</a
            ></span
          >
          <hr class="hidden h-8 border border-white/50 lg:block" />
          <span>Не является публичной офертой.</span>
          <hr class="hidden h-8 border border-white/50 lg:block" />
          <a
            target="_blank"
            href="https://olymp.clinic/wp-content/uploads/2021/11/soglashenie_o_personalnyh_dannyh_iso_ok112021.pdf"
            >Политика персональных данных</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
