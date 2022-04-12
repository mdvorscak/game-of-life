<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function randomize() {
    dispatch('randomize');
  }
</script>

<button on:click={randomize}>Randomize</button>

<style>
  button {
    width: 120px;
    height: 40px;
    border-radius: 3px;
    border: 0;
    background-color: #ccc;
    color: #333;
  }
  button:active {
    filter: brightness(0.85);
  }
</style>
