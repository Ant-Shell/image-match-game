<script lang="ts" setup>

defineProps({
  shuffledImage: Object
})

const test = ():void => {
    console.log("Hello!")
}
</script>

<template>
  <section className="border-black border-2 h-full w-full rounded-lg" @click="test">
      <img className="h-full w-full rounded-lg" :src="shuffledImage?.src.medium">
  </section> 
</template>
