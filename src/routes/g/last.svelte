<script>
  import { onMount } from "svelte";
  import { generatedNames } from '/src/stores.js';
  import NameDisplay from '../../components/name-display.svelte';
  import SectionTitle from '../../components/section-title.svelte';
  import Button from '../../components/button.svelte';
  import ExploreMore from '../../components/explore-more.svelte';
  import Textbox from '../../components/textbox.svelte';

  async function getRandomNames() {
    const res = await fetch('/api/get/random/12/category/3');
    const names = await res.json();
    const namesArr = names.rows;
    generatedNames.set(namesArr)
  }
  onMount(async () => {
    getRandomNames()
  })
</script>

<svelte:head>
  <title>Last Name Generator - Includes 2000+ Surnames!</title>
  <meta name="description" content="Find the perfect last name! This random surname generator includes 2000+ last names gathered from around the world.">
</svelte:head>

<div>
  <SectionTitle mb="1rem"><h1>Last Name Generator</h1></SectionTitle>
  <NameDisplay mb="1rem">
    <img src="/last-name-surname-generator.png" alt="Random Last Names" title="Random Last Names">
  </NameDisplay>
  <Button on:click="{getRandomNames}">Get More Names</Button>
  <hr>
  <SectionTitle>
    <h2>Explore More Generators</h2>
  </SectionTitle>
  <ExploreMore mt="1rem" mb="2rem">
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
  </ExploreMore>
  <SectionTitle>
    <h2>About This Generator</h2>
  </SectionTitle>
  <Textbox mt="1rem" mb="1rem" gridColumns="2">
    <div>
      <h3>Find a Random Last Name</h3>
      <p class="small">Looking for a last name for an original character, alias, one-off random name, or something else? You’ve come to the right place!</p>
      <p class="small">This surname generator includes over 2,000 last names, so there are plenty of options to peruse! Explore until you find a surname that sounds right.</p>
      <p class="small">The world is filled with thousands of last names, all hailing from unique cultures and histories. Finding a last name that fits your needs can feel like a daunting task. We hope our last name generator simplifies the process.</p>
    </div>
    <div>
      <h3>Surnames for Every Need</h3>
      <p class="small">No matter who you’re naming, you’re sure to find a last name that fits! This last name generator includes common and unique surnames from all around the world.</p>
      <p class="small">For fantasy worlds, don’t be afraid to make up your own unique last name. Get inspiration from our surname generator, then add your own twist! Swapping out letters is a simple trick to create last names of your own.</p>
      <p class="small">Need more names? Use our <a href="/g/first">first name generator</a> to fit the last name you’ve just decided on. We’re always adding new random name generators to our site. Look around and have fun!</p>
    </div>
  </Textbox>  
</div>