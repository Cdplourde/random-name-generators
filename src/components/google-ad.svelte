<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  onMount(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
</script>

<style>

</style>

<div class="ads-widget-container">
  <slot></slot>
</div>