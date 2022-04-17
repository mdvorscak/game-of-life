<script>
  export let wasm;
  import Universe from './Universe.svelte';
  import UniverseControls from './controls/UniverseControls.svelte';
  import CodeLink from './CodeLink.svelte';
  import FPS from './components/FPS.svelte';
  const UniverseObj = wasm.Universe;
  const memory = wasm.get_memory();
  let universe;
  let fps;
</script>

<CodeLink />
<main>
  <h1>Conway's Game of Life</h1>
  <UniverseControls {universe} />
  <FPS bind:this={fps} />
  <Universe bind:this={universe} {UniverseObj} {memory} {fps} />
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
