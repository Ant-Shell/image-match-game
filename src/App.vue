<script setup lang="ts">
import CardsContainer from './components/CardsContainer.vue'
import { ref } from 'vue'
import images from './data/imageData'
// import { createClient, ErrorResponse, Photos, Photo } from 'pexels';

// const API_KEY = import.meta.env.VITE_APP_API_KEY
// const client = createClient(API_KEY)

// May need to adjust downstream, or isolate the string somehow:
// const images = ref<Array<Photo> | string>() 

// Get images using The Pexels Javascript library
// const getImages = async () => {
//   await client.photos.curated({ per_page: 8 }).then(photos => {
//     if ((<Photos>photos).photos) {
//       const imageList = (<Photos>photos)
//       images.value = imageList.photos
//     } else {
//       const error = (<ErrorResponse>photos)
//       console.log(error.error)
//       images.value = error.error
//     }
//   })
// }
// getImages()

  type Image  = {
    id: number,
    src: { medium: string },
    isClicked?: boolean
  }

  const clickedCards = ref([])

  const matchedCards = ref([])

  const imageList = (urlList: Array<Image>): Array<Image> => {
    return urlList?.reduce((acc:Array<Image>, curr:Image): Array<Image> => {
      curr.isClicked = false
      acc.push(curr) && acc.push(curr)
      return acc
    }, [])
    .map((image:Image, index:number) => {
      const { src, isClicked } = image
      return {
        id: index,
        src: src,
        isClicked: isClicked
      }
    })
  }

  const imageShuffler = (imageList: Array<Image>): Array<Image> => {
    return imageList.sort(() => Math.random() - 0.5)
  }

  const shuffledImages = ref(imageShuffler(imageList(images)))

  defineProps({
    shuffledImages: Array<Image>,
    clickedCards: Array<string>,
    matchedCards: Array<string>
  })
</script>


<template>
  <section className="bg-[#1f2e27]">
      <CardsContainer v-bind:shuffledImages="shuffledImages" v-bind:clickedCards="clickedCards"
      v-bind:matchedCards="matchedCards" />
  </section>   
</template>
