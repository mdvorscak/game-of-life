<script>
  import ClearButton from './ClearButton.svelte';
  import GameSize from './GameSize.svelte';
  import PlayButton from './PlayButton.svelte';
  import RandomizeButton from './RandomizeButton.svelte';
  export let universe;
</script>

<div>
  <GameSize />
  <PlayButton />
  <ClearButton on:clear={universe.clearUniverse} />
  <RandomizeButton on:randomize={universe.randomize} />
</div>

<style>
  div {
    /* For large boards, overlay the controls */
    z-index: 1;
    background-color: #222;
    padding: 0 20px;
  }
</style>
