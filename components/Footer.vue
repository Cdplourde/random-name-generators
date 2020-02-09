<template>
  <footer class="fixed bottom-0 bg-pallet-navbar w-full h-12 z-50">
    <!-- footer inner content -->
    <div class="nav-inner mx-auto max-w-6xl h-full md:px-4">
      <!-- <p class="text-gray-300 h-full flex justify-center items-center text-lg">
        <router-link to="/">Random Name Generators © 2019</router-link><span class="px-3">·</span>About<span class="px-3">·</span>Sitemap
      </p> -->
      <ul class="text-gray-300 h-full flex text-xs sm:text-lg justify-center items-center">
        <li class="px-1 sm:px-4">
          <router-link to="/">Random Name Generators © {{ getDate() }}</router-link>
        </li>
        <!-- · -->
        <!-- <li class="px-1 sm:px-4">About</li> -->
        ·
        <li class="px-1 sm:px-4">Sitemap</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    getDate() {
      const d = new Date()
      const year = d.getFullYear()
      return year
    }
  }
}
</script>