<script>
  import { onMount } from "svelte";
  import { generatedNames } from '/src/stores.js';
  import NameDisplay from '../../components/name-display.svelte';
  import SectionTitle from '../../components/section-title.svelte';
  import Button from '../../components/button.svelte';
  import ExploreMore from '../../components/explore-more.svelte';
  import Textbox from '../../components/textbox.svelte';

  async function getRandomNames() {
    const res = await fetch('/api/get/random/12/category/4');
    const names = await res.json();
    const namesArr = names.rows;
    generatedNames.set(namesArr)
  }
  onMount(async () => {
    getRandomNames()
  })
</script>

<svelte:head>
  <title>Unisex Name Generator - Get Gender Neutral Names Now!</title>
  <meta name="description" content="Find the perfect unisex name for characters, babies and more. Cute, unique and memorable gender-neutral names are only a click away!">
</svelte:head>

<div>
  <SectionTitle mb="1rem"><h1>Unisex Name Generator</h1></SectionTitle>
  <NameDisplay mb="1rem">
    <img src="/unisex-gender-neutral-name-generator.png" alt="Random Unisex Names" title="Random Unisex Names">
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
  <Textbox mt="1rem" mb="1rem">
    <div>
      <h3>Random Unisex Name Generator</h3>
      <p class="small">Gender neutral names are growing in popularity, and it’s easy to see why! Unisex names often put a fresh twist on common names, making them modern and classic at the same time. Boy, girl, nonbinary, genderfluid — they’re an excellent fit for anyone!</p>
      <p class="small">If you need a random gender neutral name, this is the place to look. Generate dozens of nonbinary and unisex names with just a few clicks of a button! If you don’t find a name that you like, simply click again.</p>
      <p class="small">The best part about unisex names is how flexible they are. Even if you don’t find that just-right name you’re looking for, try using our <a href="/g/boy">boy</a> or <a href="/g/girl">girl</a> name generators instead. Break the norms and be the first to use a brand new gender neutral name.</p>
    </div>
    <div>
      <h3>Generate Gender Neutral Names & More</h3>
      <p class="small">For all your naming needs, we have you covered! You’ve found our random unisex name generator, but explore our site to find hundreds more cool <a href="/g/first">first names</a> for yourself, original characters, pets, expected babies, and more.</p>
      <p class="small">We’re constantly adding new generators to the site! Our carefully curated lists include as much variety in names as possible, including different time periods, cultures, and spellings. It only takes a few clicks to find the perfect name to fit your needs.</p>
    </div>
  </Textbox>  
</div>