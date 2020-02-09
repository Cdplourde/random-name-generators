<template>
  <div>
    <Generator
      title="Unisex Name Generator"
      :names="names"
      :image="image"
    />
    <button
      @click="getNames"
      class="text-pallet-navbar bg-pallet-text px-4 py-3 rounded-lg mt-4 font-bold text-lg antialiased border-pallet-navbar shadow w-full sm:w-48 outline-none"
    >Get More Names</button>
    <hr class="mt-6">
    <img
      class="w-full mt-6 rounded"
      src="https://via.placeholder.com/500x70"
      alt=""
    >
    <ExploreMore title="Explore More Generators" />
  </div>
</template>

<script>
import ExploreMore from '~/components/ExploreMore.vue'
import Generator from '~/components/Generator.vue'
import unisexNames from '~/static/names/unisex.json'
import unisexNamesImage from '~/static/images/unisex-gender-neutral-name-generator.png'

export default {
  components: {
    Generator,
    ExploreMore
  },
  data: function () {
    return {
      names: [],
      image: unisexNamesImage
    }
  },
  methods: {
    getNames () {
      const tempArr = []
      for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * unisexNames.names.length)
        if (!tempArr.includes(unisexNames.names[randomIndex])) {
          tempArr.push(unisexNames.names[randomIndex])
          this.names = tempArr
        } else {
          i--
        }

      }
    },
  },
  mounted: function () {
    this.getNames()
  },
  head () {
    return {
      title: 'Unisex Name Generator - Get Gender Neutral Names Now!',
      meta: [
        { hid: 'description', name: 'description', content: 'Find the perfect unisex name for characters, babies and more. Cute, unique and memorable gender-neutral names are only a click away!' }
      ]
    }
  }
}
</script>