<script>
  export let hideable = false;
  let toggled;
</script>

<nav class={hideable || toggled ? 'hideable' : ''}>content</nav>

<style>
  nav {
    position: sticky;
    background-color: var(--bg-med);
    margin: 0 1rem 0 1rem;
    color: var(--text-white);
  }

  @media (max-width: 768px) {
    .hideable {
      display: none;
    }
  }
</style>  