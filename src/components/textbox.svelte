<script>
  export let mt = "0";
  export let mr = "0";
  export let mb = "0";
  export let ml = "0";
  export let gridColumns = "1"
</script>

<div id="ye" style="margin: {mt} {mr} {mb} {ml}; grid-template-columns: repeat({gridColumns}, 1fr);"><slot></slot></div>

<style>
  div {
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
  }
  
  div :global(div) {
    color: var(--text-white);
    padding: 1rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
    background-color: var(--bg-light);
    border-radius: 0.25rem;
    font-size: 1.125rem;
  }

  div :global(a) {
    color: var(--text-green);
    text-decoration: none;
  }

  div :global(a):visited {
    color: #2fadb1;
  }

  div :global(.small) {
    font-size: 1rem;
  }

  div :global(h3) {
    padding-bottom: 0.5rem;
  }

  div :global(p):not(:last-of-type) {
    padding-bottom: 0.5rem;
  }

  @media (max-width: 900px) {
    div {
      grid-auto-flow: row;
      grid-template-columns: 1fr!important;
    }
  }
</style>