<script>
	import '../normalize.css';
  import '../global-styles.css';
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import Sidebar from '../components/sidebar.svelte';
  import GoogleAnalytics from '../components/google-analytics.svelte';

  import { sidebarToggled } from '/src/stores.js';

  let sidebarStatus;

  sidebarToggled.subscribe(value => {
    sidebarStatus = value
  })

  function handleOverlayClick() {
    sidebarToggled.set(false)
  }

</script>
<GoogleAnalytics />
<div class:no-scroll="{sidebarStatus}">
  <Header />
  {#if sidebarStatus}
    <div class:overlay="{sidebarStatus}" on:click="{handleOverlayClick}"></div>
  {/if}
  <div class="main-content">
    <Sidebar hideable={true} />
    <main>
      <slot />
    </main>
  </div>
  <Footer />
</div>
<style>
  main {
    min-height: calc(100vh - var(--footer-height) - var(--header-height));
    background-color: var(--bg-main);
    padding: 1rem 2rem 1rem 2rem;
    margin-right: 1rem;
  }
  .main-content {
    display: grid;
    grid-template-columns: 18rem 1fr;
    min-height: calc(100vh - var(--footer-height) - var(--header-height));
    max-width: 80rem;
    margin: 0 auto;
  }
  .overlay {
    position: fixed;
    top: 0;
    height: 110vh;
    width: 100%;  
    background-color: black;
    opacity: 0.65;
  }
  .no-scroll {
    position: fixed;
    overflow-y: scroll;
  }

  @media (max-width: 900px) {
    main {
      margin-right: 0;
    }
    .main-content {
      grid-template-columns: 1fr;
    }
  }
</style>