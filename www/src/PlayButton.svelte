<script>
  import { simulationOn } from './store.js';
  let on;
  simulationOn.subscribe((value) => (on = value));

  function toggle() {
    simulationOn.update((on) => !on);
  }
</script>

<button on:click={toggle} class={on ? 'playing' : 'stopped'}>
  {on ? 'Pause' : 'Play'}
</button>

<style>
  button {
    width: 80px;
    height: 40px;
    border-radius: 3px;
    border: 0;
  }
  button:active {
    filter: brightness(0.85);
  }
  .playing {
    background-color: lightcoral;
  }
  .stopped {
    background-color: lightgreen;
  }
</style>
