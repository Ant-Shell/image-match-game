<script lang="ts" setup>
import Card from './Card.vue'

defineProps({
  shuffledImages: Array<{id: number, src: { medium: string }}>
})

</script>


<template>
  <section class="grid gap-4 grid-cols-4 place-items-center h-full w-full p-8 bg-[#1f2e27]">
    <div v-for="shuffledImage in shuffledImages">
      <Card v-bind:shuffledImage="shuffledImage"/>
    </div>
  </section>
</template>


