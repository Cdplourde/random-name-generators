<template>
  <div>
    <Generator
      title="First Name Generator"
      :names="names"
      :image="image"
    />
    <button
      @click="getNames"
      class="w-full px-4 py-3 mt-4 text-lg antialiased font-bold rounded-lg shadow outline-none text-pallet-navbar bg-pallet-text border-pallet-navbar sm:w-48"
    >Get More Names</button>
    <hr class="mt-6">
    <!-- <img
      class="w-full mt-6 rounded"
      src="https://via.placeholder.com/500x70"
      alt=""
    > -->
    <ExploreMore title="Explore More Generators" />
    <div class="mt-8">
      <h2 class="text-2xl text-center rounded shadow-lg md:text-3xl bg-pallet-sidebar md:pl-4 md:text-left">About This Generator</h2>
      <div class="text-gray-300 lg:flex">
        <div class="flex-1 p-4 m-2 mt-4 ml-2 rounded shadow-xl md:ml-2 bg-pallet-background">
          <h3 class="pb-2 text-2xl">First Name Generator for Every Need</h3>
          <p class="pb-2">There can be a lot of stress when picking out a first name, so let a generator do it for you! Whether you stumble upon the perfect name or see something close enough to inspire you, with just a click of the button our random first name generator will make a list of 12 names.</p>
          <p class="pb-2">This random first name generator contains a huge variety! It includes male, female, and unisex names from a mix of time periods and cultures. In total, there are over 1800 first names to choose from.</p>
          <p>Name original characters, expected babies, or even pets with just a few clicks of a button. It’s that easy!</p>
        </div>
        <div class="flex-1 p-4 m-2 mt-4 ml-2 rounded shadow-xl md:ml-2 bg-pallet-background">
          <h3 class="pb-2 text-2xl">Random First Names & More</h3>
          <p class="pb-2">Looking for something more specific? If you already have a gender in mind, head over to our <router-link to="/g/girl">girl name generator</router-link> or <router-link to="/g/boy">boy name generator</router-link> for a more specifically curated list of first names. For names that are nonbinary or  gender neutral, check out our <router-link to="/g/unisex">unisex name generator</router-link>.</p>
          <p class="pb-2">Over time we plan to keep adding more <router-link to="/">name generators</router-link>. We’re determined to offer the most sophisticated and varied name generators out there using research and hand-curated lists.</p>
          <p>Bookmark our site to keep up-to-date with our latest release of both fun and serious name generators. We’ll be here for all your naming needs!</p>
        </div>
      </div>
    </div>
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

<style scoped>
  a:link {
    color: #00cda2;
  }
  a:visited {
    color: #2fadb1;
  }
</style>