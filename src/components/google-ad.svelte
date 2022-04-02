<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let initialRun = true;

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    page.subscribe(() => {
      if (!initialRun) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    })
  }

  onMount(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    initialRun = false;
  });
</script>

<style>

</style>

<div class="ads-widget-container">
  <slot></slot>
</div>