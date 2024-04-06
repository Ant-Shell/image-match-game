<script setup lang="ts">

const props = defineProps({
  matchCount: Number,
  moveCount: Number,
  gameResetter: Function,
})

const resetGame = () => {
  props.gameResetter?.()
}

</script>

<template>
  <header class="flex justify-evenly items-center h-[10%] md:h-[20%] w-screen md:w-[20%] md:flex-col lg:w-[15%] bg-[#7f7972]/75">
    <div class="text-white md:text-xl lg:text-2xl">
      <h2>Matches: {{ props.matchCount }} / 8</h2>
      <h2>Total Moves: {{ props.moveCount }}</h2>
    </div>
    <button class="w-28 md:w-36 h-10 md:h-12 border-2 bg-[#374F2F] border-[#304529] text-white md:text-xl lg:text-2xl
    hover:bg-[#4A6741] rounded-md" @click="resetGame">
      Reset Game
    </button>
  </header>
</template>