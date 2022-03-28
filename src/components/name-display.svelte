<script>
  import { generatedNames } from '/src/stores.js';
  export let mt = "0";
  export let mr = "0";
  export let mb = "0";
  export let ml = "0";

  let displayedNames = [];

  generatedNames.subscribe(value => {
    displayedNames = value
  })

</script>

<div style="margin: {mt} {mr} {mb} {ml}">
  <div class="gen-display">
    <ul>
      {#each displayedNames as name}
        <li>{name.name}</li>
      {/each}
    </ul>
    <slot></slot>
  </div>
</div>

<style>
  .gen-display {
    display: flex;
  }
  ul {
    margin: 0;
    width: 100%;
    background-color: var(--bg-light);
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    border-radius: 0.25rem;
    padding: 1rem;
    font-size: 1.25rem;
    color: var(--text-white);
  }
  li {
    padding: .5rem;
  }
  div :global(img) {
    border-radius: 0.25rem;
    margin-left: 1rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
  }
  @media (max-width: 1024px) {
    div :global(img) {
      display: none;
    }
  }
  @media (max-width: 640px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>