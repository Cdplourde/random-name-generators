<script>
  import { onMount } from "svelte";
  import { generatedNames } from '/src/stores.js';
  import NameDisplay from '../../components/name-display.svelte';
  import SectionTitle from '../../components/section-title.svelte';
  import Button from '../../components/button.svelte';
  import ExploreMore from '../../components/explore-more.svelte';
  import Textbox from '../../components/textbox.svelte';

  async function getRandomNames() {
    const res = await fetch('/api/get/random/12/category/2');
    const names = await res.json();
    const namesArr = names.rows;
    generatedNames.set(namesArr)
  }
  onMount(async () => {
    getRandomNames()
  })
</script>

<svelte:head>
  <title>Girl Name Generator - Get Random Female Names!</title>
  <meta name="description" content="Find the perfect girl name with this name generator, female edition! Discover hundreds of random female names for characters, babies and more.">
</svelte:head>

<div>
  <SectionTitle mb="1rem"><h1>Girl Name Generator</h1></SectionTitle>
  <NameDisplay mb="1rem">
    <img src="/girl-female-name-generator.png" alt="Random Girl Names" title="Random Girl Names">
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
      <h3>Random Girl Name Generator</h3>
      <p class="small">If you need a random female name, you’ve come to the right place! This girl name generator includes over 900 female names from different time periods and cultural origins, giving you a huge variety of choices.</p>
      <p class="small">We also include alternate spellings for female names so you can get creative and unique. Feel out female baby name ideas, find inspiration for the female characters in your novel, or brainstorm names for your newest pet. The options are endless!</p>
      <p class="small">Each time you click the button, this female name generator will create a list of 12 random girl names. Don’t like your options? Just click again and you’ll get 12 more female names to choose from.</p>
    </div>
    <div>
      <h3>Generators for Female Names & More</h3>
      <p class="small">We’ve taken the time to gather and curate thousands of names and build them into fun and easy-to-use <a href="/">name generators</a>. Anytime you need a name, you know where to go!</p>
      <p class="small">In addition to girl names, we also have a <a href="/g/boy">boy name generator</a> and a <a href="/g/unisex">unisex name generator</a>. If you’re not particular about the type of the name you need, check out our <a href="/g/first">first name generator</a>.</p>
      <p class="small">We continually update each generator because we want to offer as many options as possible. Each list of names is curated by hand with research and care. Have fun exploring!</p>
    </div>
  </Textbox>  
</div>