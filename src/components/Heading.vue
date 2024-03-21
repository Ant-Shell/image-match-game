<script setup lang="ts">

const props = defineProps({
  gameResetter: Function,
})
</script>

<template>
  <header class="flex justify-evenly items-center h-[10%] md:h-[20%] w-screen md:w-[20%] md:flex-col lg:w-[15%]">
    <div class="text-white md:text-xl lg:text-2xl">
      <h2>Matches: 1</h2>
      <h2>Total Moves: 2</h2>
    </div>
    <button class="w-28 md:w-36 h-10 md:h-12 lg:h-16 xl:h-12 border-2 bg-[#3a3d2c] border-[#3a3d2c] text-white md:text-xl lg:text-2xl
    hover:bg-[#78807c] rounded-md" @click="props.gameResetter">
      Reset Game
    </button>
  </header>
</template>