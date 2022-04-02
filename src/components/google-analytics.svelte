<script>
  import { page } from '$app/stores';
  $: {
    if (typeof gtag !== "undefined"){
      gtag("config", "G-NS4YTEN6YR", {
        page_path: $page.path
      });
    }
  }
</script>