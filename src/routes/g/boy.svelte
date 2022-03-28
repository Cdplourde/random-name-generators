<script>
  import { onMount } from "svelte";
  import { generatedNames } from '/src/stores.js';
  import NameDisplay from '../../components/name-display.svelte';
  import SectionTitle from '../../components/section-title.svelte';
  import Button from '../../components/button.svelte';
  import ExploreMore from '../../components/explore-more.svelte';
  import Textbox from '../../components/textbox.svelte';

  async function getRandomNames() {
    const res = await fetch('/api/get/random/12/category/1');
    const names = await res.json();
    const namesArr = names.rows;
    generatedNames.set(namesArr)
  }
  onMount(async () => {
    getRandomNames()
  })
</script>

<svelte:head>
  <title>Boy Name Generator - Get Random Male Names!</title>
  <meta name="description" content="Find the perfect boy name with this name generator, male edition! Discover hundreds of random male names for characters, babies and more.">
</svelte:head>

<div>
  <SectionTitle mb="1rem"><h1>Boy Name Generator</h1></SectionTitle>
  <NameDisplay mb="1rem">
    <img src="/boy-male-name-generator.png" alt="Random Boy Names" title="Random Boy Names">
  </NameDisplay>
  <Button on:click="{getRandomNames}">Get More Names</Button>
  <hr>
  <SectionTitle>
    <h2>Explore More Generators</h2>
  </SectionTitle>
  <ExploreMore mt="1rem" mb="2rem">
    <a href="/g/girl">
      <img src="/girl-female-name-generator.png" alt="Random Girl Names" title="Random Girl Names">
    </a>
    <a href="/g/first">
      <img src="/all-first-name-generator.png" alt="Random First Names" title="Random First Names">
    </a>
    <a href="/g/last">
      <img src="/last-name-surname-generator.png" alt="Random Last Names" title="Random Last Names">
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
      <h3>Random Boy Name Generator</h3>
      <p class="small">In need of a random male name? You’ve come to the right place! Find male name ideas or use it as a character name generator for the boys and men in your novel — you decide.</p>
      <p class="small">This boy name generator includes over 900 male names from different time periods and cultural origins to offer a huge variety of options. Alternate spellings are also included so you can get creative and unique.</p>
      <p class="small">Each time you click, the generator will create a list of 12 random boy names. If you don’t like your options, simply click again and you’ll get 12 more to choose from.</p>
    </div>
    <div>
      <h3>Generators for Male Names & More</h3>
      <p class="small">We’ve taken the time to gather and curate thousands of names and build them into fun and easy-to-use <a href="/">name generators</a>.</p>
      <p class="small">In addition to boy names, we also have a <a href="/g/girl">girl name generator</a>, a <a href="/g/unisex">unisex name generator</a>, and many more! You’re sure to find a name that fits your needs.</p>
      <p class="small">We update each generator as we find new names so we can continue to offer as many choices as possible. Explore all our generators and have fun!</p>
    </div>
  </Textbox>  
</div>