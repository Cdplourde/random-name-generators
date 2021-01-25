<template>
  <div class="w-full mx-auto mt-4">
      <h2 class="text-2xl text-center rounded shadow-lg text-pallet-text md:text-3xl bg-pallet-sidebar md:pl-4 md:text-left">{{ title }}</h2>
      <ul class="flex flex-wrap justify-between w-full pt-4 lg:flex-no-wrap">
        <li class="flex justify-center w-1/2 pr-2 lg:w-auto">
          <router-link to="/g/boy">
            <img
              class="shadow-xl"
              :src="boyNameImage"
              alt="Random Boy Names"
            >
          </router-link>
        </li>
        <li class="flex justify-center w-1/2 pl-2 lg:w-auto lg:px-2">
          <router-link to="/g/girl">
            <img
              class="shadow-xl"
              :src="girlNameImage"
              alt="Random Girl Names"
            >
          </router-link>
        </li>
        <li class="flex justify-center w-1/2 pt-4 pr-2 lg:w-auto lg:pt-0 lg:px-2">
          <router-link to="/g/first">
            <img
              class="shadow-xl"
              :src="firstNameImage"
              alt="Random First Names"
            >
          </router-link>
        </li>
        <li class="flex justify-center w-1/2 pt-4 pl-2 lg:w-auto lg:pt-0">
          <router-link to="/g/unisex">
            <img
              class="shadow-xl"
              :src="unisexNamesImage"
              alt="Random Unisex Names"
            >
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
import boyNameImage from '~/static/images/boy-male-name-generator.png'
import firstNameImage from '~/static/images/all-first-name-generator.png'
import girlNameImage from '~/static/images/girl-female-name-generator.png'
import unisexNamesImage from '~/static/images/unisex-gender-neutral-name-generator.png'

export default {
  props: [
    'title'
  ],
  data: function () {
    return {
      boyNameImage,
      firstNameImage,
      girlNameImage,
      unisexNamesImage
    }
  }
}
</script>

<style scoped>
  .min-w-50 {
    width: 50%;
  }

  @media (min-width: 1024px) {
    .min-w-50 {
      min-width: auto;
    }
  }
</style>