<template>
  <div>
    <Generator
      title="Boy Name Generator"
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
    <div class="pt-4">
      <h2 class="text-2xl md:text-3xl bg-pallet-sidebar shadow-lg md:pl-4 rounded text-center md:text-left">About This Generator</h2>
      <div class="lg:flex text-gray-300">
        <div class="flex-1 bg-pallet-background m-2 mt-4 ml-0 p-4 rounded shadow-xl">
          <h3 class="text-2xl pb-2">Random Boy Name Generator</h3>
          <p class="pb-2">In need of a random male name? You’ve come to the right place! Find male baby name ideas or use it as a character name generator for the boys and men in your novel - you decide.</p>
          <p class="pb-2">This boy name generator includes over 800 male names from different time periods and cultural origins to offer a huge variety of options. Alternate spellings are also included so you can get creative and unique. You’re sure to find a name that fits your needs.</p>
          <p>Each time you click, this male name generator will create a list of 10 random boy names. If you don’t like your options, simply click again and you’ll get 10 more male names to choose from.</p>
        </div>
        <div class="flex-1 bg-pallet-background m-2 mt-4 mr-0 p-4 rounded shadow-xl">
          <h3 class="text-2xl pb-2">Generators for Male Names & More</h3>
          <p class="pb-2">We’ve taken the time to gather and curate thousands of names and build them into fun and easy-to-use <router-link to="/">name generators</router-link>. In addition to boy names, we also have a <router-link to="/g/girl">girl name generator</router-link>, a <router-link to="/g/unisex">unisex name generator</router-link>, and many more!</p>
          <p>We update each generator as we find new names so we can continue to offer as many choices as possible. Explore all our generators using the menu and have fun!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExploreMore from '~/components/ExploreMore.vue'
import Generator from '~/components/Generator.vue'
import boyNames from '~/static/names/boy.json'
import boyNameImage from '~/static/images/boy-male-name-generator.png'

export default {
  components: {
    Generator,
    ExploreMore
  },
  data: function () {
    return {
      names: [],
      image: boyNameImage
    }
  },
  methods: {
    getNames () {
      const tempArr = []
      for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * boyNames.names.length)
        if (!tempArr.includes(boyNames.names[randomIndex])) {
          tempArr.push(boyNames.names[randomIndex])
          this.names = tempArr
        } else {
          i--
        }
      }
      console.log(tempArr)
    }
  },
  mounted: function () {
    this.getNames()
  },
  head () {
    return {
      title: 'Boy Name Generator - Get Random Male Names!',
      meta: [
        { hid: 'description', name: 'description', content: 'Find the perfect boy name with this name generator, male edition! Discover hundreds of random male names for characters, babies and more.' }
      ]
    }
  }
}
</script>

<style scoped>
  a:link {
    color: #00cda2;
  }
  a:visited {
    color: #2fadb1;
  }
</style>