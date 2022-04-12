<script>
  export let wasm;
  import Universe from './Universe.svelte';
  import UniverseControls from './UniverseControls.svelte';
  const UniverseObj = wasm.Universe;
  const memory = wasm.get_memory();
  let universe;
</script>

<main>
  <UniverseControls {universe} />
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
