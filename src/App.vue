<script setup lang="ts">
import CardsContainer from './components/CardsContainer.vue'
import { ref } from 'vue'
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

// Test "images"
const images = [
  {
    "id": 19562401,
    "width": 3874,
    "height": 2583,
    "url": "https://www.pexels.com/photo/marketplace-19562401/",
    "photographer": "Hanif Ismail",
    "photographer_url": "https://www.pexels.com/@hanif-ismail-257102645",
    "photographer_id": 257102645,
    "avg_color": "#5D4B41",
    "src": {
        "original": "https://images.pexels.com/photos/19562401/pexels-photo-19562401.jpeg",
        "large2x": "https://images.pexels.com/photos/19562401/pexels-photo-19562401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/19562401/pexels-photo-19562401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/19562401/pexels-photo-19562401.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/19562401/pexels-photo-19562401.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/19562401/pexels-photo-19562401.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/19562401/pexels-photo-19562401.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/19562401/pexels-photo-19562401.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "MARKETPLACE"
  },
  {
    "id": 19555785,
    "width": 4640,
    "height": 6960,
    "url": "https://www.pexels.com/photo/venice-19555785/",
    "photographer": "Efrem  Efre",
    "photographer_url": "https://www.pexels.com/@efrem-efre-2786187",
    "photographer_id": 2786187,
    "avg_color": "#898989",
    "src": {
        "original": "https://images.pexels.com/photos/19555785/pexels-photo-19555785.jpeg",
        "large2x": "https://images.pexels.com/photos/19555785/pexels-photo-19555785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/19555785/pexels-photo-19555785.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/19555785/pexels-photo-19555785.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/19555785/pexels-photo-19555785.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/19555785/pexels-photo-19555785.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/19555785/pexels-photo-19555785.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/19555785/pexels-photo-19555785.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Venice "
  },
  {
    "id": 19555818,
    "width": 4640,
    "height": 6960,
    "url": "https://www.pexels.com/photo/venice-19555818/",
    "photographer": "Efrem  Efre",
    "photographer_url": "https://www.pexels.com/@efrem-efre-2786187",
    "photographer_id": 2786187,
    "avg_color": "#959595",
    "src": {
        "original": "https://images.pexels.com/photos/19555818/pexels-photo-19555818.jpeg",
        "large2x": "https://images.pexels.com/photos/19555818/pexels-photo-19555818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/19555818/pexels-photo-19555818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/19555818/pexels-photo-19555818.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/19555818/pexels-photo-19555818.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/19555818/pexels-photo-19555818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/19555818/pexels-photo-19555818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/19555818/pexels-photo-19555818.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Venice "
  },
  {
    "id": 19552777,
    "width": 1920,
    "height": 2880,
    "url": "https://www.pexels.com/photo/sharp-point-19552777/",
    "photographer": "cami",
    "photographer_url": "https://www.pexels.com/@casnafu",
    "photographer_id": 132623139,
    "avg_color": "#646464",
    "src": {
        "original": "https://images.pexels.com/photos/19552777/pexels-photo-19552777.jpeg",
        "large2x": "https://images.pexels.com/photos/19552777/pexels-photo-19552777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/19552777/pexels-photo-19552777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/19552777/pexels-photo-19552777.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/19552777/pexels-photo-19552777.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/19552777/pexels-photo-19552777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/19552777/pexels-photo-19552777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/19552777/pexels-photo-19552777.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "sharp point"
  },
  {
    "id": 19551947,
    "width": 4640,
    "height": 6960,
    "url": "https://www.pexels.com/photo/a-person-holding-a-shell-in-front-of-a-body-of-water-19551947/",
    "photographer": "Liudmyla Shalimova",
    "photographer_url": "https://www.pexels.com/@ludakavun",
    "photographer_id": 103841118,
    "avg_color": "#B9AFA6",
    "src": {
        "original": "https://images.pexels.com/photos/19551947/pexels-photo-19551947.jpeg",
        "large2x": "https://images.pexels.com/photos/19551947/pexels-photo-19551947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/19551947/pexels-photo-19551947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/19551947/pexels-photo-19551947.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/19551947/pexels-photo-19551947.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/19551947/pexels-photo-19551947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/19551947/pexels-photo-19551947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/19551947/pexels-photo-19551947.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": ""
  },
  {
    "id": 19479502,
    "width": 3809,
    "height": 5714,
    "url": "https://www.pexels.com/photo/model-in-a-leather-jacket-and-jeans-crossing-the-street-19479502/",
    "photographer": "Kateryna Tsurik",
    "photographer_url": "https://www.pexels.com/@kateryna-tsurik-505461005",
    "photographer_id": 505461005,
    "avg_color": "#636363",
    "src": {
        "original": "https://images.pexels.com/photos/19479502/pexels-photo-19479502.jpeg",
        "large2x": "https://images.pexels.com/photos/19479502/pexels-photo-19479502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/19479502/pexels-photo-19479502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/19479502/pexels-photo-19479502.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/19479502/pexels-photo-19479502.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/19479502/pexels-photo-19479502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/19479502/pexels-photo-19479502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/19479502/pexels-photo-19479502.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": ""
  },
  {
    "id": 19479510,
    "width": 3820,
    "height": 5730,
    "url": "https://www.pexels.com/photo/model-in-a-brown-leather-jacket-on-the-sidewalk-19479510/",
    "photographer": "Kateryna Tsurik",
    "photographer_url": "https://www.pexels.com/@kateryna-tsurik-505461005",
    "photographer_id": 505461005,
    "avg_color": "#6E655E",
    "src": {
        "original": "https://images.pexels.com/photos/19479510/pexels-photo-19479510.jpeg",
        "large2x": "https://images.pexels.com/photos/19479510/pexels-photo-19479510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/19479510/pexels-photo-19479510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/19479510/pexels-photo-19479510.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/19479510/pexels-photo-19479510.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/19479510/pexels-photo-19479510.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/19479510/pexels-photo-19479510.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/19479510/pexels-photo-19479510.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": ""
  },
  {
    "id": 19479545,
    "width": 4000,
    "height": 6000,
    "url": "https://www.pexels.com/photo/model-in-brown-leather-jacket-and-jeans-tying-her-hair-in-an-alley-19479545/",
    "photographer": "Kateryna Tsurik",
    "photographer_url": "https://www.pexels.com/@kateryna-tsurik-505461005",
    "photographer_id": 505461005,
    "avg_color": "#543E31",
    "src": {
        "original": "https://images.pexels.com/photos/19479545/pexels-photo-19479545.jpeg",
        "large2x": "https://images.pexels.com/photos/19479545/pexels-photo-19479545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/19479545/pexels-photo-19479545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/19479545/pexels-photo-19479545.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/19479545/pexels-photo-19479545.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/19479545/pexels-photo-19479545.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/19479545/pexels-photo-19479545.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/19479545/pexels-photo-19479545.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": ""
  }
]

  const imageList = (urlList: Array<Object>): Array<Object> => {
    const imageDuplicator = urlList?.reduce((acc:Array<Object>, curr:Object): Array<Object> => {
      acc.push(curr) && acc.push(curr)
      return acc
    }, [])
    return imageDuplicator
  }

  const imageShuffler = (imageList: Array<Object>): Array<Object> => {
    return imageList.sort(() => Math.random() - 0.5)
  }

  const shuffledImages = ref(imageShuffler(imageList(images)))

  defineProps({
    shuffledImages: Array<{id: number, src: { medium: string }}>
  })

</script>


<template>
  <html className="bg-[#1f2e27] h-screen">
    <body className="bg-[#1f2e27]">
        <CardsContainer v-bind:shuffledImages="shuffledImages"/>
    </body>
  </html>
</template>
