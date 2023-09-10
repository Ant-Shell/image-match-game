<script lang="ts" setup>
import Card from './Card.vue'

defineProps({
  images: Array<{id: number, imageURL: string}>
})

</script>


<template>
  <section>
    <div v-for="image in images">
      <Card v-bind:image="image"/>
    </div>
  </section>
</template>


