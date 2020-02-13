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
    <div class="pt-4">
      <h2 class="text-2xl md:text-3xl bg-pallet-sidebar shadow-lg md:pl-4 rounded text-center md:text-left">About This Generator</h2>
      <div class="lg:flex text-gray-300">
        <div class="flex-1 bg-pallet-background m-2 mt-4 ml-0 p-4 rounded shadow-xl">
          <h3 class="text-2xl pb-2">Random Unisex Name Generator </h3>
          <p class="pb-2">Gender neutral names are the new popular trend, and it’s easy to see why! Unisex names often put a fresh twist on common names, making them modern and classic at the same time.</p>
          <p class="pb-2">If you need a random gender neutral name, this is the place to look. Generate dozens of unisex names with a click of a button! If you don’t find the unisex name you’re looking for, simply click again.</p>
          <p>The best part about unisex names is how flexible they are. Even if you don’t find the perfect fit you’re looking for in this unisex name generator, try picking a name from our <router-link to="/g/boy">boy</router-link> or <router-link to="/g/girl">girl</router-link> name generators instead. Break the norms and be the first to use a brand new gender neutral name.</p>
        </div>
        <div class="flex-1 bg-pallet-background m-2 mt-4 mr-0 p-4 rounded shadow-xl">
          <h3 class="text-2xl pb-2">Generate Gender Neutral Names & More</h3>
          <p class="pb-2">For all your naming needs, we have you covered! You’ve found our random unisex name generator, but explore our site to find hundreds more cool names for your characters, pets, babies, and more.</p>
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
        { hid: 'description', name: 'description', content: 'Find the perfect unisex name for characters, babies and more. Cute, unique and memorable gender-neutral names are only a click away!' }
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