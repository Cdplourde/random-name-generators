<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  $: {
    if ($page && typeof window !== 'undefined'){
      console.log('ran')
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

  onMount(() => {
    console.log('ran', window)
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
</script>

<style>

</style>

<div class="ads-widget-container">
  <slot></slot>
</div>