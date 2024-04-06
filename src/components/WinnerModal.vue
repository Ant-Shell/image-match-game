<script setup lang="ts">

const props = defineProps({
  gameWon: Boolean,
  startNewGame: Function,
})

const restartGame = () => {
  props.startNewGame?.()
}

</script>

<template >
  <section v-if="props.gameWon" class="z-10 absolute w-full h-full bg-[#7f7972]/50">
    <div class="text-white md:text-xl lg:text-2xl w-full h-full flex flex-col items-center justify-center">
      <div class="w-60 h-60 md:w-72 md:h-72 md:ml-[20%] lg:ml-[15%] lg:w-80 lg:h-80 flex flex-col items-center justify-center bg-[#7f7972] rounded-lg">
        <h1 class="text-2xl mb-5">
          You Win!
        </h1>
        <button class="w-28 md:w-36 lg:w-40 h-10 md:h-12  border-2 bg-[#374F2F] border-[#304529] text-white md:text-xl lg:text-2xl
          hover:bg-[#4A6741] rounded-md" @click="restartGame">
          New Game
        </button>
      </div>
    </div>
  </section>
</template>