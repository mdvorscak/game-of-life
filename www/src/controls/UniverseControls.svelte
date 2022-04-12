<script>
  import ClearButton from './ClearButton.svelte';
  import PlayButton from './PlayButton.svelte';
  import RandomizeButton from './RandomizeButton.svelte';
  export let universe;
</script>

<div>
  <PlayButton />
  <ClearButton on:clear={universe.clearUniverse} />
  <RandomizeButton on:randomize={universe.randomize} />
</div>

<style>
</style>
