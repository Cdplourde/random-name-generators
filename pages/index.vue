<template>
  <div>
    <h1 class="text-pallet-text text-3xl md:text-4xl bg-pallet-sidebar shadow-lg md:pl-4 rounded text-center md:text-left">Generate Random Names!</h1>
      <div class="bg-pallet-background text-gray-200 p-4 mt-4 rounded">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem explicabo reprehenderit nobis fugiat, laboriosam blanditiis eos, rem unde aliquid debitis tempore officia repudiandae consequatur dignissimos iste nam odit exercitationem!Sequi eius laborum quisquam ipsa quae dignissimos porro excepturi! Nulla non recusandae perferendis tempore facere. Voluptate vero sint nobis dolor sed voluptates? Recusandae blanditiis explicabo sequi corrupti placeat, nobis quisquam!</p>
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
    <img
      class="w-full mt-6 rounded"
      src="https://via.placeholder.com/500x70"
      alt=""
    >
  </div>
</template>

<script>
import ExploreMore from '~/components/ExploreMore.vue'

export default {
  components: {
    ExploreMore
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