<template>
  <nav class="sticky top-0 bg-pallet-navbar w-full h-16 z-50">
    <!-- navbar inner content -->
    <div class="nav-inner mx-auto max-w-6xl h-full md:px-4">
      <button
        class="hamburger hamburger--collapse"
        type="button"
        @click="toggleSidebar"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <div class="h-full inline-block">
        <router-link
          to="/"
          class="text-xl md:text-3xl font-bold text-gray-300 flex items-center h-full relative"
        >Random Name Generators</router-link>
        <!-- <h1 class=""></h1> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    }
  }
}
</script>

<style scoped>
nav {
  min-width: 320px;
}

.nav-inner {
  max-width: 80rem;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}
</style>