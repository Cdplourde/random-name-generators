<script>
  import { onDestroy, onMount, createEventDispatcher } from 'svelte';
  import { page } from '$app/stores';

  const dispatch = createEventDispatcher();
  let adcontainer;

  let initialRun = true;

  const unsubscribe = page.subscribe((e) => {
    if (typeof window !== "undefined" && typeof document !== "undefined" && adcontainer) {
      if (!initialRun) {
        dispatch('refresh-ad')
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