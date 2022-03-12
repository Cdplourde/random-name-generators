<svelte:options tag="section-title" />
<div><slot></slot></div>
<style>
  div {
    background-color: #1a242e;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    border-radius: 0.25rem;
    padding: 0.5rem;
  }
  div :global(*) {
    color: var(--text-green);
    margin-left: 1rem;
  }
</style>