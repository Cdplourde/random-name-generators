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
          <h3 class="pb-2 text-2xl">Find a Random Last Name!</h3>
          <p class="pb-2">Looking for a last name for an original character, alias, one-off random name, or something else? You’ve come to the right place!</p>
          <p class="pb-2">This surname generator includes over 2,000 last names, so there are plenty of options to peruse! Explore until you find a surname that sounds right.</p>
          <p>The world is filled with thousands of last names, all hailing from unique cultures and histories. Finding a last name that fits your needs can feel like a daunting task. We hope our last name generator simplifies the process.</p>
        </div>
        <div class="flex-1 p-4 m-2 mt-4 ml-0 mr-0 rounded shadow-xl bg-pallet-background lg:ml-2">
          <h3 class="pb-2 text-2xl">Surnames for Every Need</h3>
          <p class="pb-2">No matter who you’re naming, you’re sure to find a last name that fits! This last name generator includes common and unique surnames from all around the world.</p>
          <p class="pb-2">For fantasy worlds, don’t be afraid to make up your own unique last name. Get inspiration from our surname generator, then add your own twist! Swapping out letters is a simple trick to create last names of your own.</p>
          <p>Need more names? Use our <router-link to="/g/first">first name generator</router-link> to fit the last name you’ve just decided on. We’re always adding new random name generators to our site. Look around and have fun!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Generator from '~/components/Generator.vue'
import ExploreMore from '~/components/ExploreMore.vue'
import lastNames from '~/static/names/last.json'
import lastNameImage from '~/static/images/last-name-surname-generator.png'

export default {
  components: {
    Generator,
    ExploreMore
  },
  data: function () {
    return {
      names: [],
      image: lastNameImage
    }
  },
  methods: {
    getNames () {
      const tempArr = []
      for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * lastNames.names.length)
        if (!tempArr.includes(lastNames.names[randomIndex])) {
          tempArr.push(lastNames.names[randomIndex])
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