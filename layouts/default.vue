<template>
  <div class="w-screen min-h-full overflow-x-hidden bg-pallet-background">
    <Navbar />
    <div class="relative max-w-6xl mx-auto page-wrapper">
      <Sidebar />
      <!-- main content -->
      <div class="min-h-full px-4 pt-4 pb-4 shadow-lg bg-pallet-main text-pallet-text md:px-8 md:ml-72 md:mr-4">
        <nuxt />
      </div>
      <div @click="toggleSidebar" v-if="!sidebarToggled" class="absolute top-0 w-full h-full overlay md:ml-72 md:mr-4"></div>
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
  methods: {
    toggleSidebar() {
        this.$store.dispatch('toggleSidebar')
    }
  }
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
