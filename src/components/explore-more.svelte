<script>
  export let mt = "0";
  export let mr = "0";
  export let mb = "0";
  export let ml = "0";
</script>

<div style="margin: {mt} {mr} {mb} {ml}">
  <a href="/g/boy">
    <img src="/boy-male-name-generator.png" alt="Random Boy Names" title="Random Boy Names">
  </a>
  <a href="/g/girl">
    <img src="/girl-female-name-generator.png" alt="Random Girl Names" title="Random Girl Names">
  </a>
  <a href="/g/first">
    <img src="/all-first-name-generator.png" alt="Random First Names" title="Random First Names">
  </a>
  <a href="/g/unisex">
    <img src="/unisex-gender-neutral-name-generator.png" alt="Random Unisex Names" title="Random Unisex Names">
  </a>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: space-between;
    grid-gap: 2rem;
  }
  div a {
    display: flex;
    justify-content: center;
  }
  div img {
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