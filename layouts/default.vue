<template>
  <!-- page container -->
  <div class="w-screen min-h-full bg-pallet-background overflow-hidden">
    <!-- navbar -->
    <nav class="sticky top-0 bg-pallet-navbar w-full h-16 z-50 md:mb-4">
      <!-- navbar inner content -->
      <div class="nav-inner mx-auto max-w-6xl h-full md:px-4">
        <button
          class="hamburger hamburger--collapse"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div class="h-full inline-block">
          <h1 class="text-xl md:text-3xl font-bold text-gray-300 flex items-center h-full relative">Random Name Generators</h1>
        </div>
      </div>
    </nav>
    <!-- inner page wrapper -->
    <div class="page-wrapper mx-auto max-w-6xl relative md:mb-4">
      <!-- sidebar -->
      <div class="sidebar bg-pallet-sidebar fixed w-64 md:ml-4 shadow-lg md:rounded hidden md:block text-gray-300 text-center pt-4">SIDEBAR STUFF</div>
      <!-- main content -->
      <div class="bg-pallet-main min-h-full text-pallet-text px-4 pt-4 md:px-8 shadow-lg md:rounded md:ml-72 md:mr-4">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.page-wrapper {
  height: calc(100vh - 4rem);
  max-width: 80rem;
  min-width: 320px;
}

nav {
  min-width: 320px;
}

@media (min-width: 768px) {
  .sidebar {
    height: calc(100vh - 6rem);
  }
  .page-wrapper {
    height: calc(100vh - 6rem);
  }
  .hamburger {
    display: none;
  }
}

.nav-inner {
  max-width: 80rem;
}

.sidebar {
  height: calc(100vh - 6rem);
  top: 5rem;
}

h1 {
  bottom: 0.2rem;
}
</style>
