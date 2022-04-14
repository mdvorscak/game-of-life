<script>
  import { onMount, tick } from 'svelte';
  import { simulationOn, gameBoardSize } from './store.js';
  export let UniverseObj;
  export let memory;
  let canvas, canvasWidth, canvasHeight;
  let width, height;
  $: largeBoard = width >= 128;
  let universe;
  let redraw;
  const CELL_SIZE = 5; // px
  const GRID_COLOR = 'transparent';
  const DEAD_COLOR = '#ccc';
  const ALIVE_COLOR = '#00783e';

  const initialize = (size) => {
    universe = UniverseObj.new(size, size);
    width = universe.width();
    height = universe.height();
    // Give the canvas room for all of our cells and a 1px border
    // around each of them.
    canvasHeight = (CELL_SIZE + 1) * height + 1;
    canvasWidth = (CELL_SIZE + 1) * width + 1;
  };

  /**
   * Helper function used to force a repaint on important state changes
   */
  const cyleUniverse = () => {
    simulationOn.update((on) => !on);
    simulationOn.update((on) => !on);
  };

  gameBoardSize.subscribe(async (value) => {
    initialize(value);
    if (redraw) {
      // Should end in the off state so users can play with the universe settings
      simulationOn.set(false);
      // wait for the callbacks to be run, otherwise redraw happens first and the game cannot be paused
      await tick();
      redraw();
    }
  });

  export const clearUniverse = () => {
    universe.empty();
    // Need to force the toggle through the on/off cycle to ensure a renderloop on w/empty is hit
    cyleUniverse();
    // Should end in the off state so users can play with the universe settings
    simulationOn.set(false);
  };

  export async function randomize() {
    universe.randomize();
    cyleUniverse();
  }

  const getIndex = (row, column) => {
    return row * width + column;
  };

  const bitIsSet = (n, arr) => {
    const byte = Math.floor(n / 8);
    const mask = 1 << n % 8;
    return (arr[byte] & mask) === mask;
  };

  onMount(() => {
    const ctx = canvas.getContext('2d');

    const drawGrid = () => {
      ctx.beginPath();
      ctx.strokeStyle = GRID_COLOR;

      // Vertical lines.
      for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
      }

      // Horizontal lines.
      for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
      }

      ctx.stroke();
    };

    const drawCells = () => {
      const cellsPtr = universe.cells();
      const cells = new Uint8Array(
        memory.buffer,
        cellsPtr,
        (width * height) / 8
      );

      ctx.beginPath();

      for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
          const idx = getIndex(row, col);

          ctx.fillStyle = bitIsSet(idx, cells) ? ALIVE_COLOR : DEAD_COLOR;

          ctx.fillRect(
            col * (CELL_SIZE + 1) + 1,
            row * (CELL_SIZE + 1) + 1,
            CELL_SIZE,
            CELL_SIZE
          );
        }
      }

      ctx.stroke();
    };

    let animationId = null;
    const draw = () => {
      drawGrid();
      drawCells();
      animationId = requestAnimationFrame(renderLoop);
    };

    // Used when the game board size changes
    redraw = () => {
      animationId = requestAnimationFrame(() => {
        drawGrid();
        drawCells();
      });
    };

    canvas.addEventListener('click', (event) => {
      const boundingRect = canvas.getBoundingClientRect();

      const scaleX = canvas.width / boundingRect.width;
      const scaleY = canvas.height / boundingRect.height;

      const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
      const canvasTop = (event.clientY - boundingRect.top) * scaleY;

      const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
      const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

      universe.toggle_cell(row, col);

      drawGrid();
      drawCells();
    });

    const pause = () => {
      cancelAnimationFrame(animationId);
      animationId = null;
    };

    const renderLoop = () => {
      universe.tick();
      draw();
    };

    simulationOn.subscribe((on) => {
      if (on) {
        renderLoop();
      } else {
        pause();
      }
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  });
</script>

<div>
  <canvas
    class={largeBoard ? 'largeBoard' : 'smallBoard'}
    bind:this={canvas}
    width={canvasHeight}
    height={canvasWidth}
  />
</div>

<style>
  div {
    min-height: 80vh;
  }
  /* Only center horizontally for large boards, otherwise the board will go behind the controls */
  .largeBoard {
    margin: 0 auto;
    display: block;
  }
  /* vertically and horizontally center small boards */
  .smallBoard {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
