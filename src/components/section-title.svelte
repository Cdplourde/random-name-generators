<script>
  export let mt = "0";
  export let mr = "0";
  export let mb = "0";
  export let ml = "0";
</script>

<div style="margin: {mt} {mr} {mb} {ml}"><slot></slot></div>

<style>
  div {
    background-color: var(--bg-med);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    border-radius: 0.25rem;
  }
  div :global(*) {
    color: var(--text-green);
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 900px) {
    div :global(*) {
      text-align: center;
    }
    div :global(h1) {
      font-size: 1.75rem;
    }
    div :global(h2) {
      font-size: 1.5rem;
    }
  }
</style>