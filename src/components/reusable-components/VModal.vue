<script setup>
const emits = defineEmits('on-close')
function close() {
  emits('on-close')
}
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25"
  >
    <div
      class="flex h-fit w-full flex-col justify-between rounded-2xl bg-white p-5 sm:h-fit sm:w-full sm:rounded-[50px] sm:py-8 sm:px-20 lg:w-2/3"
    >
      <div class="flex h-full w-full flex-col">
        <div class="flex w-full justify-end">
          <img
            @click="close"
            class="cursor-pointer sm:h-8 sm:w-8"
            src="@/assets/about-us/close.png"
          />
        </div>
        <div class="flex h-full w-full flex-col items-center justify-between">
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
