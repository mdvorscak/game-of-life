<script>
  import { createEventDispatcher } from 'svelte';
  import BaseButton from './BaseButton.svelte';

  const dispatch = createEventDispatcher();

  function clear() {
    dispatch('clear');
  }
</script>

<BaseButton on:click={clear}>Clear</BaseButton>
