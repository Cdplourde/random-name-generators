<script>
	import '../normalize.css';
  import '../global-styles.css';
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import Sidebar from '../components/sidebar.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>

<Header />
<div class="main-content">
  <Sidebar />
  <main>
    <slot />
  </main>
</div>
<Footer />

<style>
  main {
    min-height: calc(100vh - var(--footer-height) - var(--header-height));
    background-color: #27333e;
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
</style>