<template>
  <div>
    <h1 class="text-pallet-text text-3xl md:text-4xl bg-pallet-sidebar shadow-lg md:pl-4 rounded text-center md:text-left">Generate Random Names!</h1>
      <div class="bg-pallet-background text-gray-200 p-4 mt-4 rounded flex">
        <p class="text-lg">Welcome to Random Name Generator! For babies, characters, and nicknames, choosing a name can be a daunting task. That’s where our collection of name generators comes in. Browse around and explore thousands of potential names. You’re sure to discover the perfect fit.</p>
        <!-- <img class="flex-1 ml-2 rounded hidden lg:block max-w-full shadow-lg w-56 overflow w-1/2" :src="image" alt="random name generators"> -->
      </div>
    <!-- <button
      class="text-pallet-navbar bg-pallet-text px-4 py-3 rounded-lg mt-4 font-bold text-lg antialiased border-pallet-navbar shadow w-full sm:w-48 outline-none"
      @click="randomGenerator"
    >Surprise Me!</button> -->
    <button
      class="text-pallet-navbar bg-pallet-text px-4 py-3 rounded-lg mt-4 font-bold text-lg antialiased border-pallet-navbar shadow w-full sm:w-48 outline-none"
      @click="redirectRandomGenerator"
    >Surprise Me!</button>
    <hr class="mt-6">
    <ExploreMore title="Most Popular Name Generators" />
    <!-- <img
      class="w-full mt-6 rounded"
      src="https://via.placeholder.com/500x70"
      alt=""
    > -->
    <div class="pt-4">
      <h2 class="text-2xl md:text-3xl bg-pallet-sidebar shadow-lg md:pl-4 rounded text-center md:text-left">About Random Name Generators</h2>
      <div class="lg:flex text-gray-300">
        <div class="flex-1 bg-pallet-background m-2 mt-4 ml-0 p-4 rounded shadow-xl">
          <h3 class="text-2xl pb-2">Find the Perfect Name</h3>
          <p class="pb-2">Names can be hard. There’s a lot of pressure to find that perfect name, that perfect fit! </p>
          <p class="pb-2">We developed Random Name Generator as a user-friendly tool to browse dozens of names at a time. Instead of getting overwhelmed by long lists of names, explore your naming options in small, manageable chunks. It’s the best way to find names without giving yourself a headache or skimming over what might be the perfect name.</p>
          <p>Click through lots of options quickly until you chance upon one that clicks! With so many possibilities, you’re sure to find exactly what you need to name babies, pets, original characters, and more.</p>
        </div>
        <div class="flex-1 bg-pallet-background m-2 mt-4 mr-0 p-4 rounded shadow-xl">
          <h3 class="text-2xl pb-2">Name Generators For Every Need</h3>
          <p class="pb-2">With thousands of names to choose from, our name generators are perfect for any need. Currently we only offer a small selection of name generators, but we’re excited to add more!</p>
          <p>We’ve put a lot of time and effort into curating each generator to give you as many options as possible. Generators include names from various cultures, time periods, and more - including alternate or unique spellings.</p>
          <p>Each name generator is organized by type. For baby boy names or male characters, check out our random <router-link to="/g/boy">boy name generator</router-link> and start exploring hundreds of options! For girls names, head over to our <router-link to="/g/girl">girl name generator</router-link> and start clicking.</p>
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