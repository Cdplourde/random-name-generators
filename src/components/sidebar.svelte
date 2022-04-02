<script>
  import { page } from '$app/stores';
  import { sidebarToggled } from '/src/stores.js';
  export let hideable = false;


  let sidebarStatus;
  sidebarToggled.subscribe(value => {
    sidebarStatus = value
  })

  function toggleSidebar() {
    sidebarToggled.set(false)
  }

</script>

<nav class={hideable && !sidebarStatus ? 'hideable' : ''}>
  <div>
    <h3>General Names</h3>
    <ul>
      <li>{#if $page.url.pathname == '/g/first'} <div class="highlight"></div>{/if}<a href="/g/first" on:click="{toggleSidebar}">All First Names</a></li>
      <li>{#if $page.url.pathname == '/g/boy'} <div class="highlight"></div>{/if}<a href="/g/boy" on:click="{toggleSidebar}">Boy Names</a></li>
      <li>{#if $page.url.pathname == '/g/girl'} <div class="highlight"></div>{/if}<a href="/g/girl" on:click="{toggleSidebar}">Girl Names</a></li>
      <li>{#if $page.url.pathname == '/g/unisex'} <div class="highlight"></div>{/if}<a href="/g/unisex" on:click="{toggleSidebar}">Unisex Names</a></li>
      <li>{#if $page.url.pathname == '/g/last'} <div class="highlight"></div>{/if}<a href="/g/last" on:click="{toggleSidebar}">Last Names</a></li>
    </ul>
    <h3>Resources</h3>
    <ul>
      <li>{#if $page.url.pathname == '/blog/tips-for-choosing-first-name'} <div class="highlight"></div>{/if}<a href="/blog/tips-for-choosing-first-name" on:click="{toggleSidebar}">9 Tips for Choosing the Perfect Name</a></li>
    </ul>
  </div>
</nav>

<style>
  nav::-webkit-scrollbar {
    width: 20px;
  }
  nav::-webkit-scrollbar-track {
    background-color: transparent;
  }
  nav::-webkit-scrollbar-thumb {
    background-color: #343c45;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  nav::-webkit-scrollbar-thumb:hover {
    background-color: rgb(68, 77, 87);
  }
  nav {
    position: sticky;
    background-color: var(--bg-med);
    margin: 0 1rem 0 1rem;
    padding: 1.5rem;
    max-height: 100vh;
    top: 0;
    transition: height 0s;
    overflow: auto;
  }

  a, a:visited {
    text-decoration: none;
    color: var(--text-white);
  }

  h3 {
    color: var(--text-green);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    font-size: 1.25rem;
    padding-left: 1rem;
    margin: 0;
    margin-bottom: 1.5rem;
  }

  li {
    padding: .25rem 0 .25rem 0;
    position: relative;
  }

  .highlight {
    position: absolute;
    left: -.75rem;
    top: .55rem;
    width: .2rem;
    height: 1.2rem;
    background-color: var(--text-green)
  }

  @media (max-width: 900px) {
    .hideable {
      display: none;
    }
    nav {
      position: fixed;
      width: 256px;
      top: 4rem;
      min-height: 100%;
    }
  }
</style>  