<script>
  import BaseButton from './BaseButton.svelte';
  import { simulationOn } from '../store.js';
  let on;
  simulationOn.subscribe((value) => (on = value));

  function toggle() {
    simulationOn.update((on) => !on);
  }
</script>

<BaseButton on:click={toggle} class="play-button {on ? 'playing' : 'stopped'}">
  {on ? 'Pause' : 'Play'}
</BaseButton>

<style>
  :global(.play-button.playing) {
    background-color: lightcoral;
  }
  :global(.play-button.stopped) {
    background-color: lightgreen;
  }
</style>
