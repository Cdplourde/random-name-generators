<template>
  <div>
    <Generator
      title="Last Name Generator"
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
        <div class="flex-1 p-4 m-2 mt-4 ml-0 mr-0 rounded shadow-xl lg:mr-2 bg-pallet-background">
          <h3 class="pb-2 text-2xl">Random Last Name Generator</h3>
          <p class="pb-2">In need of a random male name? You’ve come to the right place! Find male name ideas or use it as a character name generator for the boys and men in your novel — you decide.</p>
          <p class="pb-2">This boy name generator includes over 900 male names from different time periods and cultural origins to offer a huge variety of options. Alternate spellings are also included so you can get creative and unique.</p>
          <p>Each time you click, the generator will create a list of 12 random boy names. If you don’t like your options, simply click again and you’ll get 12 more to choose from.</p>
        </div>
        <div class="flex-1 p-4 m-2 mt-4 ml-0 mr-0 rounded shadow-xl bg-pallet-background lg:ml-2">
          <h3 class="pb-2 text-2xl">Generators for Male Names & More</h3>
          <p class="pb-2">We’ve taken the time to gather and curate thousands of names and build them into fun and easy-to-use <router-link to="/">name generators</router-link>.</p>
          <p class="pb-2">In addition to boy names, we also have a <router-link to="/g/girl">girl name generator</router-link>, a <router-link to="/g/unisex">unisex name generator</router-link>, and many more! You’re sure to find a name that fits your needs.</p>
          <p>We update each generator as we find new names so we can continue to offer as many choices as possible. Explore all our generators and have fun!</p>
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
    }
  },
  mounted: function () {
    this.getNames()
    document.querySelector('.content').scrollTop = 0;
  },
  head () {
    return {
      title: 'Random Last Name Generator - Includes 2000+ Surnames!',
      meta: [
        { hid: 'description', name: 'description', content: 'Find the perfect last name! This random surname generator includes 2000+ last names gathered from around the world.' }
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