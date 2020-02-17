<template>
  <div>
    <Generator
      title="First Name Generator"
      :names="names"
      :image="image"
    />
    <button
      @click="getNames"
      class="text-pallet-navbar bg-pallet-text px-4 py-3 rounded-lg mt-4 font-bold text-lg antialiased border-pallet-navbar shadow w-full sm:w-48 outline-none"
    >Get More Names</button>
    <hr class="mt-6">
    <!-- <img
      class="w-full mt-6 rounded"
      src="https://via.placeholder.com/500x70"
      alt=""
    > -->
    <ExploreMore title="Explore More Generators" />
  </div>
</template>

<script>
import Generator from '~/components/Generator.vue'
import ExploreMore from '~/components/ExploreMore.vue'
import boyNames from '~/static/names/boy.json'
import girlNames from '~/static/names/girl.json'
import firstNameImage from '~/static/images/all-first-name-generator.png'

const firstNames = boyNames.names.concat(girlNames.names.filter((item) => boyNames.names.indexOf(item) < 0))

export default {
  components: {
    Generator,
    ExploreMore
  },
  data: function () {
    return {
      names: [],
      image: firstNameImage
    }
  },
  methods: {
    getNames () {
      const tempArr = []
      for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * firstNames.length)
        if (!tempArr.includes(firstNames[randomIndex])) {
          tempArr.push(firstNames[randomIndex])
          this.names = tempArr
        } else {
          i--
        }

      }
    }
  },
  mounted: function () {
    this.getNames()
  },
  head () {
    return {
      title: 'First Name Generator - Get Random First Names!',
      meta: [
        { hid: 'description', name: 'description', content: 'Find the perfect first name with this name generator! Discover hundreds of random names for characters, babies and more.' }
      ]
    }
  }
}
</script>