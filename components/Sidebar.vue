<template>
  <div class="sidebar bg-pallet-sidebar fixed w-64 md:ml-4 shadow-lg md:block text-gray-300 p-6 z-50" ref="sticky" v-bind:class="{ 'hidden': this.$store.state.sidebarToggled }">
    <!-- <h3 class="text-pallet-text text-xl">See All</h3> -->
    <div>
      <h3 class="text-pallet-text text-2xl pb-2">General Names</h3>
      <ul class="flex flex-col pl-4 text-xl">
        <router-link
          to="/g/first"
          class="py-1"
          v-on:click.native="toggleSidebar"
        >All First Names</router-link>
        <router-link
          to="/g/boy"
          class="py-1"
          v-on:click.native="toggleSidebar"
        >Boy Names</router-link>
        <router-link
          to="/g/girl"
          class="py-1"
          v-on:click.native="toggleSidebar"
        >Girl Names</router-link>
        <router-link
          to="/g/unisex"
          class="py-1"
          v-on:click.native="toggleSidebar"
        >Unisex Names</router-link>
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