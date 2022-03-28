<script>
  import SectionTitle from "../components/section-title.svelte";
  import Textbox from "../components/textbox.svelte";
  import ExploreMore from '../components/explore-more.svelte';
  import Button from "../components/button.svelte";

  import { sidebarToggled } from '/src/stores.js';
  import { onMount } from "svelte";
  import { goto } from '$app/navigation';

  let sidebarStatus;

  sidebarToggled.subscribe(value => {
    sidebarStatus = value
  })

  let paths = []

  onMount(async() => {
    const origin = window.location.origin
    paths = [`${origin}/g/boy`, `${origin}/g/girl`, `${origin}/g/first`, `${origin}/g/last`, `${origin}/g/unisex`];
  })
  function navigateRandomGen() {
    goto(`${paths[Math.floor(Math.random() * paths.length)]}`, { replaceState: false })
    }
</script>

<svelte:head>
  <title>Random Name Generators - Find the Perfect Name!</title>
  <meta name="description" content="Generate a list of random names with just one click! Explore dozens of name generators and thousands of possible names for babies, characters, inspiration and more.">
</svelte:head>

<div>
  <SectionTitle>
    <h1>Generate Random Names!</h1>
  </SectionTitle>
  <Textbox mt="1rem" mb="1rem">
    <div>
      <p>Welcome to Random Name Generator! For babies, characters, and nicknames, choosing a name can be a daunting task. That’s where our collection of name generators comes in. Browse around and explore thousands of potential names. You’re sure to discover the perfect fit.</p>
    </div>
  </Textbox>
  <Button on:click="{navigateRandomGen}">Surprise Me!</Button>
  <hr>
  <SectionTitle>
    <h2>Most Popular Name Generators</h2>
  </SectionTitle>
  <ExploreMore mt="1rem" mb="2rem"></ExploreMore>
  <SectionTitle>
    <h2>About Random Name Generators</h2>
  </SectionTitle>
  <Textbox mt="1rem" mb="1rem" gridColumns="2">
    <div>
      <h3>Find the Perfect Name</h3>
      <p class="small">Names can be hard. There’s a lot of pressure to find that perfect name, that perfect fit!</p>
      <p class="small">We developed Random Name Generators as a user-friendly tool to browse dozens of names at a time. Instead of getting overwhelmed by long lists, explore options in small, manageable chunks. It’s the best way to find names without getting a headache or skimming over a hidden gem.</p>
      <p class="small">Click through lots of options quickly until you chance upon one that clicks! With so many possibilities, you’re sure to find exactly what you need to name babies, pets, original characters, and more.</p>
    </div>
    <div>
      <h3>Name Generators For Every Need</h3>
      <p class="small">With thousands of names to choose from, our name generators are perfect for any need. Currently we only offer a small selection of name generators, but we’re excited to add more.</p>
      <p class="small">Each name generator is organized by type. To find names by gender, check out our random <a href="/g/boy">boy name generator</a> or <a href="/g/girl">girl name generator</a> and start exploring options! If you’re not particular, explore our <a href="/g/first">first name generator</a> which contains 1800+ names.</p>
      <p class="small">We’ve put a lot of time into curating each generator to give you an impressive array of choices. Generators include names from various cultures and time periods as well as alternate spellings. You’re sure to find what you need!</p>
    </div>
  </Textbox>  
</div>

<style>
  hr {
    margin: 1.5rem 0 1.5rem 0;
  }
</style>