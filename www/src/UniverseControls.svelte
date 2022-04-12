<script>
  import ClearButton from './ClearButton.svelte';
  import PlayButton from './PlayButton.svelte';
  export let universe;
</script>

<div>
  <PlayButton />
  <ClearButton on:clear={universe.clearUniverse} />
</div>

<style>
</style>
