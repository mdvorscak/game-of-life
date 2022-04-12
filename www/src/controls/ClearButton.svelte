<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function clear() {
    dispatch('clear');
  }
</script>

<button on:click={clear}>Clear</button>

<style>
  button {
    width: 80px;
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
