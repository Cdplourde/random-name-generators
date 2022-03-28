<script>
  import { onMount } from "svelte";
  import { generatedNames } from '/src/stores.js';
  import NameDisplay from '../../components/name-display.svelte';
  import SectionTitle from '../../components/section-title.svelte';
  import Button from '../../components/button.svelte';
  import ExploreMore from '../../components/explore-more.svelte';
  import Textbox from '../../components/textbox.svelte';

  async function getRandomNames() {
    const res = await fetch('/api/get/random/12/first');
    const names = await res.json();
    const namesArr = names.rows;
    generatedNames.set(namesArr)
  }
  onMount(async () => {
    getRandomNames()
  })
</script>

<svelte:head>
  <title>First Name Generator - 1000+ name possibilities!</title>
  <meta name="description" content="Find the perfect name! Generate a list of random first names for any need. Includes over 1000 male, female, and gender neutral names.">
</svelte:head>

<div>
  <SectionTitle mb="1rem"><h1>First Name Generator</h1></SectionTitle>
  <NameDisplay mb="1rem">
    <img src="/all-first-name-generator.png" alt="Random First Names" title="Random First Names">
  </NameDisplay>
  <Button on:click="{getRandomNames}">Get More Names</Button>
  <hr>
  <SectionTitle>
    <h2>Explore More Generators</h2>
  </SectionTitle>
  <ExploreMore mt="1rem" mb="2rem"></ExploreMore>
  <SectionTitle>
    <h2>About This Generator</h2>
  </SectionTitle>
  <Textbox mt="1rem" mb="1rem" gridColumns="2">
    <div>
      <h3>First Name Generator for Every Need</h3>
      <p class="small">There can be a lot of stress when picking out a first name, so let a generator do it for you! Whether you stumble upon the perfect name or see something close enough to inspire you, with just a click of the button our random first name generator will make a list of 12 names.</p>
      <p class="small">This random first name generator contains a huge variety! It includes male, female, and unisex names from a mix of time periods and cultures. In total, there are over 1800 first names to choose from.</p>
      <p class="small">Name original characters, expected babies, or even pets with just a few clicks of a button. It’s that easy!</p>
    </div>
    <div>
      <h3>Random First Names & More</h3>
      <p class="small">Looking for something more specific? If you already have a gender in mind, head over to our <a href="/g/girl">girl name generator</a> or <a href="/g/boy">boy name generator</a> for a more specifically curated list of first names. For names that are nonbinary or gender neutral, check out our <a href="/g/unisex">unisex name generator</a>.</p>
      <p class="small">Over time we plan to keep adding more <a href="/">name generators</a>. We’re determined to offer the most sophisticated and varied name generators out there using research and hand-curated lists.</p>
      <p class="small">Bookmark our site to keep up-to-date with our latest release of both fun and serious name generators. We’ll be here for all your naming needs!</p>
    </div>
  </Textbox>  
</div>