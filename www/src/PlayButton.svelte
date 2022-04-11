<script>
  import { simulationOn } from './store.js';
  let on;
  simulationOn.subscribe((value) => (on = value));

  function toggle() {
    simulationOn.update((on) => !on);
  }
</script>

<button on:click={toggle} class={on ? 'playing' : 'stopped'} />

<style>
  .playing::before {
    content: '⏸';
  }
  .stopped::before {
    content: '▶';
  }
</style>
