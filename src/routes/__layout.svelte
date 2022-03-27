<script>
	import '../normalize.css';
  import '../global-styles.css';
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import Sidebar from '../components/sidebar.svelte';
  let toggled = true;
</script>


<Header />
<div class="main-content">
  <Sidebar hideable={true} toggled={toggled} />
  <main>
    <slot />
  </main>
</div>
<Footer />

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

  @media (max-width: 768px) {
    main {
      margin-right: 0;
    }
    .main-content {
      grid-template-columns: 1fr;
    }
  }
</style>