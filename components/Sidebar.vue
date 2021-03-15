<template>
  <div class="fixed z-50 w-64 p-6 text-gray-300 shadow-lg sidebar bg-pallet-sidebar md:ml-4 md:block" ref="sticky" v-bind:class="{ 'hidden': this.$store.state.sidebarToggled }">
    <!-- <h3 class="text-xl text-pallet-text">See All</h3> -->
    <div>
      <h3 class="pb-2 text-2xl text-pallet-text">General Names</h3>
      <ul class="flex flex-col pl-4 text-xl">
        <li class="py-1">
          <router-link
            to="/g/first"
            v-on:click.native="toggleSidebar"
          >All First Names <span class="text-pallet-text">{{ this.$route.name === "g-first" ? "\u25c4" : "" }}</span></router-link>
        </li>
        <li class="py-1">
          <router-link
            to="/g/boy"
            v-on:click.native="toggleSidebar"
          >Boy Names <span class="text-pallet-text">{{ this.$route.name === "g-boy" ? "\u25c4" : "" }}</span></router-link>
        </li>
        <li class="py-1">
          <router-link
            to="/g/girl"
            v-on:click.native="toggleSidebar"
          >Girl Names <span class="text-pallet-text">{{ this.$route.name === "g-girl" ? "\u25c4" : "" }}</span></router-link>
        </li>
        <li class="py-1">
          <router-link
            to="/g/unisex"
            v-on:click.native="toggleSidebar"
          >Unisex Names <span class="text-pallet-text">{{ this.$route.name === "g-unisex" ? "\u25c4" : "" }}</span></router-link>
        </li>
        <li class="py-1">
          <router-link
            to="/g/last"
            v-on:click.native="toggleSidebar"
          >Last Names <span class="text-pallet-text">{{ this.$route.name === "g-last" ? "\u25c4" : "" }}</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
let win
if (process.client) {
  win = window
}

export default {
  computed: mapState([
    'sidebarToggled'
  ]),
  methods: {
    toggleSidebar(e) {
      if (e.view.innerWidth < 768) {
        this.$store.dispatch('toggleSidebar')
      }
    }
  },
  mounted() {
    if (process.client) {
      // Check client size, and toggle the sidebar if necessary
      // If the page is hit on a small window size, insure sidebar is toggled off, and vice verca
      let mql = window.matchMedia('(max-width: 767px)')
      if (!this.$store.state.sidebarToggled) {
        this.$store.dispatch('toggleSidebar')
      }
      mql.addListener((e) => {
        if (win.innerWidth > 767 && !this.$store.state.sidebarToggled) {
          this.$store.dispatch('toggleSidebar')
        }
      })
    }
  }
}
</script>