<script>
  import ExploreMore from '../components/explore-more.svelte';
</script>

<svelte:head>
  <title>Oops! Something Went Wrong</title>
  <meta name="description" content="You've encountered an error. The generator you're looking for may not exist! Please return to the homepage and try again.">
</svelte:head>

<div>
  <h2>404</h2>
  <h3>Oh no!! That page doesn't exist.</h3>
  <p>Try one of these popular name generators.</p>
  <ExploreMore></ExploreMore>
</div>

<style>
  div {
    text-align: center;
    color: var(--text-white);
  }
  h2 {
    font-size: 6rem;
    color: var(--text-green);
  }
  h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
</style>