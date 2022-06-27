<template>
  <div>
    <button
      @click="onClose"
      class="rounded-full bg-indigo-600 px-3 py-px text-center align-middle text-white outline-none"
    >
      close
    </button>
  </div>
</template>

<script setup lang="ts">
import { renderer } from '#preload'
const onClose = () => {
  renderer.send('close-windows')
}
</script>

<style scoped></style>
