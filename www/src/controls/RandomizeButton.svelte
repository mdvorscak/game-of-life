<script>
  import { createEventDispatcher } from 'svelte';
  import BaseButton from './BaseButton.svelte';

  const dispatch = createEventDispatcher();

  function randomize() {
    dispatch('randomize');
  }
</script>

<BaseButton on:click={randomize} width={120}>Randomize</BaseButton>
