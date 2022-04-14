<script>
  export let width = 80;
  export let disabled = false;
  export let title;
</script>

<button
  {title}
  {disabled}
  class={$$props.class}
  style="width: {width}px"
  on:click
>
  <slot />
</button>

<style>
  button {
    width: 80px;
    height: 40px;
    border-radius: 3px;
    border: 0;
    background-color: #ccc;
    color: #333;
    cursor: pointer;
  }
  button:active {
    filter: brightness(0.85);
  }
  button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
</style>
