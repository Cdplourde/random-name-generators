<script>
  const date = new Date();
  const year = date.getFullYear();
</script>

<footer>
  <div><a href="/">Random Name Generators © {year}</a><span class="separator">·</span><a href="/about">About</a><span class="separator">·</span><a href="/privacy-policy">Privacy Policy</a></div>
</footer>

<style>
  footer {
    background-color: var(--bg-dark);
    color: var(--text-white);
    font-size: 1.125rem;
    height: var(--footer-height);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: none;
    padding: 0 1rem;
  }

  div {
    width:100%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .separator {
    margin: 0 1rem 0 1rem;
  }

  a {
    text-decoration: none;
    color: var(--text-white);
  }

  @media (max-width: 640px) {
    footer {
      font-size: 0.9rem!important
    }
    .separator {
      margin: 0 .5rem 0 .5rem;
    }
  }
</style>