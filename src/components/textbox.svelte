<script>
  export let mt = "0";
  export let mr = "0";
  export let mb = "0";
  export let ml = "0";
</script>

<div style="margin: {mt} {mr} {mb} {ml}"><slot></slot></div>

<style>
  div {
    color: var(--text-white);
    padding: 1rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
    background-color: var(--bg-light);
    border-radius: 0.25rem;
    font-size: 1.125rem;
  }
</style>