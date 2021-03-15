<template>
  <div>
    <h1 class="text-3xl text-center rounded shadow-lg text-pallet-text md:text-4xl bg-pallet-sidebar md:pl-4 md:text-left">Generate Random Names!</h1>
      <div class="flex p-4 mt-4 text-gray-200 rounded bg-pallet-background">
        <p class="text-lg">Welcome to Random Name Generator! For babies, characters, and nicknames, choosing a name can be a daunting task. That’s where our collection of name generators comes in. Browse around and explore thousands of potential names. You’re sure to discover the perfect fit.</p>
        <!-- <img class="flex-1 hidden w-56 w-1/2 max-w-full ml-2 rounded shadow-lg lg:block overflow" :src="image" alt="random name generators"> -->
      </div>
    <!-- <button
      class="w-full px-4 py-3 mt-4 text-lg antialiased font-bold rounded-lg shadow outline-none text-pallet-navbar bg-pallet-text border-pallet-navbar sm:w-48"
      @click="randomGenerator"
    >Surprise Me!</button> -->
    <button
      class="w-full px-4 py-3 mt-4 text-lg antialiased font-bold rounded-lg shadow outline-none text-pallet-navbar bg-pallet-text border-pallet-navbar sm:w-48"
      @click="redirectRandomGenerator"
    >Surprise Me!</button>
    <hr class="mt-6">
    <ExploreMore title="Most Popular Name Generators" />
    <!-- <img
      class="w-full mt-6 rounded"
      src="https://via.placeholder.com/500x70"
      alt=""
    > -->
    <div class="mt-8">
      <h2 class="text-2xl text-center rounded shadow-lg md:text-3xl bg-pallet-sidebar md:pl-4 md:text-left">About Random Name Generators</h2>
      <div class="text-gray-300 lg:flex">
        <div class="flex-1 p-4 m-2 mt-4 ml-0 mr-0 rounded shadow-xl lg:mr-2 bg-pallet-background">
          <h3 class="pb-2 text-2xl">Find the Perfect Name</h3>
          <p class="pb-2">Names can be hard. There’s a lot of pressure to find that perfect name, that perfect fit!</p>
          <p class="pb-2">We developed Random Name Generators as a user-friendly tool to browse dozens of names at a time. Instead of getting overwhelmed by long lists, explore options in small, manageable chunks. It’s the best way to find names without getting a headache or skimming over a hidden gem.</p>
          <p>Click through lots of options quickly until you chance upon one that clicks! With so many possibilities, you’re sure to find exactly what you need to name babies, pets, original characters, and more.</p>
        </div>
        <div class="flex-1 p-4 m-2 mt-4 ml-0 mr-0 rounded shadow-xl bg-pallet-background lg:ml-2">
          <h3 class="pb-2 text-2xl">Name Generators For Every Need</h3>
          <p class="pb-2">With thousands of names to choose from, our name generators are perfect for any need. Currently we only offer a small selection of name generators, but we’re excited to add more.</p>
          <p>Each name generator is organized by type. To find names by gender, check out our random <router-link to="/g/boy">boy name generator</router-link> or <router-link to="/g/girl">girl name generator</router-link> and start exploring options! If you’re not particular, explore our <router-link to="/g/first">first name generator</router-link> which contains 1800+ names.</p>
          <p>We’ve put a lot of time into curating each generator to give you an impressive array of choices. Generators include names from various cultures and time periods as well as alternate spellings. You’re sure to find what you need!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ExploreMore from '~/components/ExploreMore.vue'
import randomNameImage from '~/static/images/random-name-generators.png'

export default {
  components: {
    ExploreMore
  },
  scrollToTop: true,
  data: function () {
    return {
      image: randomNameImage
    }
  },
  head () {
    return {
      title: 'Random Name Generators  - Find the Perfect Name!',
      meta: [
        { hid: 'description', name: 'description', content: 'Generate a list of random names with just one click! Explore dozens of name generators and thousands of possible names for babies, characters, inspiration and more.' }
      ]
    }
  },
  mounted: function () {
    document.querySelector('.content').scrollTop = 0;
  },
  methods: {
    redirectRandomGenerator() {
      // TODO: pull generator names dynamically
      const allGenerators = ['boy', 'first', 'girl', 'unisex']
      const randomGen = '/g/' + allGenerators[Math.floor(Math.random() * allGenerators.length)]
      this.$router.push(randomGen)
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