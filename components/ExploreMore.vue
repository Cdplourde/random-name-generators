<template>
  <div class="mt-4 mx-auto w-full">
      <h2 class="text-pallet-text text-2xl md:text-3xl bg-pallet-sidebar shadow-lg md:pl-4 rounded text-center md:text-left">{{ title }}</h2>
      <ul class="flex w-full pt-4 justify-between flex-wrap lg:flex-no-wrap">
        <li class="w-1/2 lg:w-auto flex justify-center pr-2">
          <router-link to="/g/boy">
            <img
              class="shadow-xl"
              :src="boyNameImage"
              alt="Random Boy Names"
            >                
          </router-link>
        </li>
        <li class="w-1/2 lg:w-auto flex justify-center pl-2 lg:px-2">
          <router-link to="/g/girl">
            <img
              class="shadow-xl"
              :src="girlNameImage"
              alt="Random Girl Names"
            >          
          </router-link>
        </li>
        <li class="w-1/2 lg:w-auto flex justify-center pt-4 lg:pt-0 pr-2 lg:px-2">
          <router-link to="/g/first">
            <img
              class="shadow-xl"
              :src="firstNameImage"
              alt="Random First Names"
            >          
          </router-link>
        </li>
        <li class="w-1/2 lg:w-auto flex justify-center pt-4 lg:pt-0 pl-2">
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