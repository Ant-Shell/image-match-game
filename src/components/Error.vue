<script setup lang="ts">

const props = defineProps({
  errorMessage: String,
})
</script>

<template>
  <section v-if="props.errorMessage" class="h-[10%] md:h-[5%] w-screen z-10 fixed bottom-0 bg-red-500/50
   flex items-center justify-center text-white whitespace-pre md:whitespace-normal">
    <p>{{ props.errorMessage }}</p>
  </section>
</template>