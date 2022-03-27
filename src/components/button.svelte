<script>
  export let expandable = false
</script>

<button class:expandable on:click><slot></slot></button>

<style>
  button {
    background-color: var(--bg-green);
    color: var(--text-black);
    padding: 12px 16px;
    border: none;
    cursor: pointer;
    padding: 1rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 0.5rem;
    min-width: 12rem;
    line-height: 1.15rem;
    transition: all 0.25s;
  }
  button:focus {
    outline: 5px auto -webkit-focus-ring-color;
  }
  button:hover {
    background-color: #00a381;
  }
  @media (max-width: 768px) {
    button {
      width: 100%;
    }
  }
</style>