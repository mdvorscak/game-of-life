<script>
  import ClearButton from './ClearButton.svelte';

  export let wasm;
  import PlayButton from './PlayButton.svelte';
  import Universe from './Universe.svelte';
  const UniverseObj = wasm.Universe;
  const memory = wasm.get_memory();
  let universe;
</script>

<main>
  <PlayButton />
  <ClearButton on:clear={universe.clearUniverse} />
  <Universe bind:this={universe} {UniverseObj} {memory} />
</main>

<style>
  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
