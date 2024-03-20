<script setup lang="ts">

const props = defineProps({
  gameResetter: Function,
})
</script>

<template>
  <header class="flex justify-evenly items-center w-screen h-[10%]">
    <button class="w-28 border-2 bg-[#3a3d2c] border-[#3a3d2c] text-white
    hover:bg-[#78807c] rounded-md" @click="props.gameResetter">
      Reset Game
    </button>
    <div>
      <h2>Matches:</h2>
      <h2>Total Moves:</h2>
    </div>
  </header>
</template>