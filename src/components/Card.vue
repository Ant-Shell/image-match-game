<script lang="ts" setup>

const props = defineProps({
  shuffledImage: Object,
  clickedCards: Array<string>
})

const addCard = (event:Event):void => {
    if (props.clickedCards !== undefined && props.clickedCards?.length < 2) {
      props.clickedCards.push((event.target as HTMLImageElement).src)
    }
    checkForMatch()
}

const checkForMatch = () => {
  if (props.clickedCards === undefined) {
    return
  }

  if (props.clickedCards[0] === props.clickedCards[1]) { // Cards match
    props.clickedCards.length = 0
    // console.log("Hello")
    // If cards match, leave cards face up
  } else if (props.clickedCards.length === 2) { // Cards don't match
    props.clickedCards.length = 0
    // console.log("Hi")
    // If cards do not match, flip cards face down again
  }
}
</script>

<template>
  <section className="border-black border-2 h-full w-full rounded-lg" @click="addCard">
      <img className="h-full w-full rounded-lg" :src="shuffledImage?.src.medium">
  </section> 
</template>
