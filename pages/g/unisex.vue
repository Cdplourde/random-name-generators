<template>
  <div>
    <Generator
      title="Unisex Name Generator"
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
          <h3 class="pb-2 text-2xl">Random Unisex Name Generator </h3>
          <p class="pb-2">Gender neutral names are growing in popularity, and it’s easy to see why! Unisex names often put a fresh twist on common names, making them modern and classic at the same time. Boy, girl, nonbinary, genderfluid — they’re an excellent fit for anyone!</p>
          <p class="pb-2">If you need a random gender neutral name, this is the place to look. Generate dozens of nonbinary and unisex names with just a few clicks of a button! If you don’t find a name that you like, simply click again.</p>
          <p>The best part about unisex names is how flexible they are. Even if you don’t find that just-right name you’re looking for, try using our <router-link to="/g/boy">boy</router-link> or <router-link to="/g/girl">girl</router-link> name generators instead. Break the norms and be the first to use a brand new gender neutral name.</p>
        </div>
        <div class="flex-1 p-4 m-2 mt-4 ml-2 rounded shadow-xl md:ml-2 bg-pallet-background">
          <h3 class="pb-2 text-2xl">Generate Gender Neutral Names & More</h3>
          <p class="pb-2">For all your naming needs, we have you covered! You’ve found our random unisex name generator, but explore our site to find hundreds more cool <router-link to="/g/first">first names</router-link> for yourself, original characters, pets, expected babies, and more.</p>
          <p>We’re constantly adding new generators to the site! Our carefully curated lists include as much variety in names as possible, including different time periods, cultures, and spellings. It only takes a few clicks to find the perfect name to fit your needs.</p>
        </div>
      </div>
    </div>
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
        { hid: 'description', name: 'description', content: 'Explore amazing nonbinary and unisex names for yourself, characters, babies, and more. Over 100 unique and memorable gender-neutral names to discover.' }
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