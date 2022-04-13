<script>
  import { gameBoardPower } from '../store.js';
  const numberOfSizes = 7;
  let selectedSize;
  gameBoardPower.subscribe((value) => {
    selectedSize = value;
  });
  $: boardSize = 2 ** (selectedSize + 2);

  const selectedSizeChangeHandler = () => {
    gameBoardPower.set(selectedSize);
  };
</script>

<div class="board-size-control">
  <label for="size">Game board size</label>
  <input
    type="range"
    id="size"
    name="size"
    min="0"
    max={numberOfSizes}
    step="1"
    bind:value={selectedSize}
    on:change={selectedSizeChangeHandler}
  />
</div>
<p class="formatted-size">{boardSize}x{boardSize}</p>

<style>
  div,
  p {
    display: inline-block;
  }
  div {
    position: relative;
    top: 20px;
  }
  p {
    margin-left: 10px;
    margin-right: 20px;
  }
  input {
    margin: 0;
  }
</style>
