<template>
  <div>
    <h1 class="text-pallet-text text-3xl md:text-4xl bg-pallet-sidebar shadow-lg md:pl-4 rounded text-center md:text-left">{{ title }}</h1>
    <div class="flex">
      <ul class="names-list flex flex-wrap bg-pallet-background py-4 relative shadow-lg mt-4 rounded lg:mr-2">
        <li
          class="w-1/2 xl:w-1/3 md:w-1/3 sm:w-1/3 relative p-2 lg:w-1/3 text-left text-lg md:text-lg lg:text-xl text-gray-200"
          v-for="name in names"
          v-bind:key="name"
        >
          <div class="">
            <p class="relative">{{ name }}</p>
          </div>
        </li>
      </ul>
      <img
        class="generator-img mt-4 ml-2 rounded hidden lg:block max-w-full shadow-lg w-56 overflow"
        :src="image"
        alt="placeholder"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    names: Array,
    image: String
  }
}
</script>

<style scoped>
.names-list p {
  /* left: 25%; */
  transform: translateX(10%);
}

.names-list {
  flex: 4;
}

.generator-img {
  flex: 1;
}

@media (min-width: 768px) {
  .names-list p {
    /* left: 25%; */
    transform: translateX(10%);
  }
}
</style>