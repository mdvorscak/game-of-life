<script>
  export let wasm;
  import Universe from './Universe.svelte';
  import UniverseControls from './controls/UniverseControls.svelte';
  import CodeLink from './CodeLink.svelte';
  const UniverseObj = wasm.Universe;
  const memory = wasm.get_memory();
  let universe;
</script>

<CodeLink />
<main>
  <h1>Conway's Game of Life</h1>
  <UniverseControls {universe} />
  <Universe bind:this={universe} {UniverseObj} {memory} />
</main>

<style>
  h1 {
    margin: 0;
  }
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
