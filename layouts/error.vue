<template>
  <div class="container w-full h-full flex justify-center items-center flex-col mx-auto">
    <h1 v-if="error.statusCode === 404" class="super-large-text">404</h1>
    <h1 v-else>An error occurred</h1>
    <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-200">Oh no!! That page doesn't exist.</h2>
    <h2 class="text-xl md:text-xl lg:text-2xl text-gray-200 mt-8">Try one of these popular name generators.</h2>
    <ExploreMore />
    <!-- <nuxt-link class="text-pallet-navbar bg-pallet-text px-4 py-3 rounded-lg mt-4 font-bold text-lg antialiased border-pallet-navbar shadow w-full sm:w-48 outline-none text-center" to="/">Home page</nuxt-link> -->
  </div>
</template>

<script>
import ExploreMore from '~/components/ExploreMore.vue'

export default {
  components: { ExploreMore },
  props: ['error'],
  head () {
    return {
      title: 'Oops! Something Went Wrong',
      meta: [
        { hid: 'description', name: 'description', content: 'You\'ve encountered an error. The generator you\'re looking for may not exist! Please return to the homepage and try again.' }
      ]
    }
  }
}
</script>

<style scoped>
  .super-large-text {
    font-size: 6rem;
  }
</style>