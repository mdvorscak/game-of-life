<script>
  export let wasm;
  import PlayButton from './PlayButton.svelte';
  import Universe from './Universe.svelte';
  const UniverseObj = wasm.Universe;
  const memory = wasm.get_memory();
</script>

<main>
  <PlayButton />
  <Universe {UniverseObj} {memory} />
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
