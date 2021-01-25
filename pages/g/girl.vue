<template>
  <div>
    <Generator
      title="Girl Name Generator"
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
          <h3 class="pb-2 text-2xl">Random Girl Name Generator</h3>
          <p class="pb-2">If you need a random female name, you’ve come to the right place! This girl name generator includes over 900 female names from different time periods and cultural origins, giving you a huge variety of choices. </p>
          <p class="pb-2">We also include alternate spellings for female names so you can get creative and unique. Feel out female baby name ideas, find inspiration for the female characters in your novel, or brainstorm names for your newest pet. The options are endless!</p>
          <p>Each time you click the button, this female name generator will create a list of 12 random girl names. Don’t like your options? Just click again and you’ll get 12 more female names to choose from.</p>
        </div>
        <div class="flex-1 p-4 m-2 mt-4 ml-2 rounded shadow-xl md:ml-2 bg-pallet-background">
          <h3 class="pb-2 text-2xl">Generators for Female Names & More</h3>
          <p class="pb-2">We’ve taken the time to gather and curate thousands of names and build them into fun and easy-to-use <router-link to="/">name generators</router-link>. Anytime you need a name, you know where to go!</p>
          <p class="pb-2">In addition to girl names, we also have a <router-link to="/g/boy">boy name generator</router-link> and a <router-link to="/g/unisex">unisex name generator</router-link>. If you’re not particular about the type of the name you need, check out our <router-link to="/g/first">first name generator</router-link>.</p>
          <p>We continually update each generator because we want to offer as many options as possible. Each list of names is curated by hand with research and care. Have fun exploring!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExploreMore from '~/components/ExploreMore.vue'
import Generator from '~/components/Generator.vue'
import girlNames from '~/static/names/girl.json'
import girlNameImage from '~/static/images/girl-female-name-generator.png'

export default {
  components: {
    Generator,
    ExploreMore
  },
  data: function () {
    return {
      names: [],
      image: girlNameImage
    }
  },
  methods: {
    getNames () {
      const tempArr = []
      for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * girlNames.names.length)
        if (!tempArr.includes(girlNames.names[randomIndex])) {
          tempArr.push(girlNames.names[randomIndex])
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
      title: 'Girl Name Generator - Get Random Female Names!',
      meta: [
        { hid: 'description', name: 'description', content: 'Find the perfect girl name with this name generator, female edition! Discover hundreds of random female names for characters, babies and more.' }
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