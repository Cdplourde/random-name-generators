<script>
  import { onMount } from 'svelte';
  import { sidebarToggled } from '/src/stores.js';

  let sidebarStatus;

  sidebarToggled.subscribe(value => {
    sidebarStatus = value
  })

  onMount(async () => {
    let mql = window.matchMedia('(max-width: 900px)')
    if (sidebarStatus) {
      toggleSidebar()
    }
    mql.addEventListener("change", () => {
      if (window.innerWidth > 900 && sidebarStatus) {
        toggleSidebar()
      }
    })
  })

  function toggleSidebar(bool) {
    sidebarToggled.update(n => bool === false ? bool : !n)
  }
</script>

<header>
  <div class="header-content">
    <div class="hamburger" id="hamburger-1" class:is-active="{sidebarStatus}" on:click={toggleSidebar}>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <a href="/" on:click="{() => toggleSidebar(false)}"><h1>Random Name Generators</h1></a>
  </div>
</header>

<style>
  header {
    background-color: var(--bg-dark);
    height: var(--header-height);
    z-index: 999;
    position: relative;
  }
  .header-content {
    max-width: 80rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  header h1 {
    color: var(--text-white);
    font-size: 1.875rem;
    font-weight: 700;
    margin-left: 1rem;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 1.5rem!important
    }
  }

  @media (min-width: 900px) {
    .hamburger, .line {
      display: none
    }
  }

  /* hamburger */
  .hamburger .line{
    width: 30px;
    height: 3px;
    background-color: var(--bg-green);
    display: block;
    margin: 6px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-left: 1rem;
  }

  #hamburger-1.is-active .line:nth-child(2){
    opacity: 0;
  }

  #hamburger-1.is-active .line:nth-child(1){
    -webkit-transform: translateY(9px) rotate(45deg);
    -ms-transform: translateY(9px) rotate(45deg);
    -o-transform: translateY(9px) rotate(45deg);
    transform: translateY(9px) rotate(45deg);
  }

  #hamburger-1.is-active .line:nth-child(3){
    -webkit-transform: translateY(-9px) rotate(-45deg);
    -ms-transform: translateY(-9px) rotate(-45deg);
    -o-transform: translateY(-9px) rotate(-45deg);
    transform: translateY(-9px) rotate(-45deg);
  }

  .hamburger:hover{
    cursor: pointer;
  }

</style>