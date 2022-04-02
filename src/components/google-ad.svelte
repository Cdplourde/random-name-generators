<script>
  import { onDestroy, onMount } from 'svelte';
  import { page } from '$app/stores';
  let adcontainer;

  let initialRun = true;

  const unsubscribe = page.subscribe((e) => {
    if (typeof window !== "undefined" && typeof document !== "undefined" && adcontainer) {
      if (!initialRun) {
        const adiframe = adcontainer.querySelector('iframe');
        adiframe ? adiframe.src = adiframe.src : '';
      }
    }
  });

  onDestroy(unsubscribe);

  onMount(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    initialRun = false;
  });
</script>

<style>

</style>

<div bind:this={adcontainer} class="ads-widget-container">
  <slot></slot>
</div>