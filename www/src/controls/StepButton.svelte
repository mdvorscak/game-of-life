<script>
  import { createEventDispatcher } from 'svelte';
  import BaseButton from './BaseButton.svelte';
  import { simulationOn } from '../store.js';
  let disabled;
  const HELPTEXT = 'Pause the game to step';
  $: title = disabled ? HELPTEXT : '';
  simulationOn.subscribe((on) => {
    disabled = on;
  });

  const dispatch = createEventDispatcher();

  function step() {
    dispatch('step');
  }
</script>

<BaseButton {title} {disabled} on:click={step}>Step</BaseButton>
