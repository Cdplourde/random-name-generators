<script>
  export let mt = "0";
  export let mr = "0";
  export let mb = "0";
  export let ml = "0";
</script>

<div style="margin: {mt} {mr} {mb} {ml}">
  <slot></slot>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: space-between;
    grid-gap: 2rem;
  }
  div :global(a) {
    display: flex;
    justify-content: center;
  }
  div :global(img) {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
    max-width: 100%;
  }
  @media (max-width: 1024px) {
    div {
      grid-gap: 1rem;
    }
  }
  @media (max-width: 700px) {
    div {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>