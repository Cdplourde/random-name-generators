<script>
  const date = new Date();
  const year = date.getFullYear();
</script>

<footer>
  <div>Random Name Generators © {year}<span class="separator">·</span>Privacy Policy</div>
</footer>

<style>
  footer {
    background-color: #10171e;
    color: var(--text-white);
    font-size: 1.125rem;
    height: var(--footer-height);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .separator {
    margin: 0 1rem 0 1rem;
  }
</style>