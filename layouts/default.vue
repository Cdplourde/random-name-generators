<template>
  <div class="w-screen min-h-full bg-pallet-background overflow-x-hidden">
    <Navbar />
    <div class="page-wrapper mx-auto max-w-6xl relative">
      <Sidebar />
      <!-- main content -->
      <div class="bg-pallet-main min-h-full text-pallet-text px-4 pt-4 pb-4 md:px-8 shadow-lg md:ml-72 md:mr-4">
        <nuxt />
      </div>
      <div v-if="!sidebarToggled" class="overlay w-full h-full absolute top-0 md:ml-72 md:mr-4"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Sidebar,
    Navbar,
    Footer
  },
  computed: mapState([
    'sidebarToggled'
  ]),
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.page-wrapper {
  height: calc(100vh - 7rem);
  max-width: 80rem;
  min-width: 320px;
}

.sidebar {
  height: calc(100vh - 6rem);
  top: 4rem;
  scrollbar-width: none;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

h1 {
  bottom: 0.2rem;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.65);
}

@media (min-width: 768px) {
  .sidebar {
    height: calc(100vh - 4rem);
  }
  .page-wrapper {
    height: calc(100vh - 7rem);
  }
  .hamburger {
    display: none;
  }
}
</style>
