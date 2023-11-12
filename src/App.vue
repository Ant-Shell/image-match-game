<script setup lang="ts">
import CardsContainer from './components/CardsContainer.vue'
import { ref } from 'vue'


const urls = ['Image_1', 'Image_2','Image_3','Image_4','Image_5','Image_6','Image_7','Image_8']

  const imageList = (urlList: Array<string>): Array<Object> => {
    let id = 0
    const imageBuilder = urlList?.reduce((acc:Array<Object>, curr:string): Array<Object> => {
      acc.push({id: id++, imageURL: curr}) && acc.push({id: id++, imageURL: curr})
      return acc
    }, [])
    return imageBuilder
  }

  const imageShuffler = (imageList: Array<Object>): Array<Object> => {
    return imageList.sort(() => Math.random() - 0.5)
  } // Need to call this whenever a new game is started and on app load

  const images = ref(imageList(urls)) // List of images
  const shuffledImages = ref(imageShuffler(imageList(urls))) // Shuffled images

  defineProps({
    images: Array<{id: number, imageURL: string}>,
    shuffledImages: Array<{id: number, imageURL: string}>
  })

</script>

<template>
  <html class="h-screen">
    <body>
      <CardsContainer v-bind:images="images"/>
    </body>
  </html>
</template>
