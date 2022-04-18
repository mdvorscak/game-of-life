<script>
  import devtools from 'devtools-detect';
  export let wasm;
  import Universe from './Universe.svelte';
  import UniverseControls from './controls/UniverseControls.svelte';
  import CodeLink from './CodeLink.svelte';
  import FPS from './components/FPS.svelte';
  const UniverseObj = wasm.Universe;
  const memory = wasm.get_memory();
  let universe;
  let fps;
  /**
   * Only show the FPS counter if devtools is open AND docked
   * Or FORCE_FPS is manually set in the window  (note: this must be done when docked)
   */
  let isDevToolsOpen = devtools.isOpen || window.FORCE_FPS;
  window.addEventListener('devtoolschange', (event) => {
    isDevToolsOpen = event.detail.isOpen || window.FORCE_FPS;
  });
</script>

<CodeLink />
<main>
  <h1>Conway's Game of Life</h1>
  <UniverseControls {universe} />
  {#if isDevToolsOpen}
    <FPS bind:this={fps} />
  {/if}
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
