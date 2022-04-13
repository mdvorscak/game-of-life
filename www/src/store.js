import { writable, derived } from 'svelte/store';

//Should at least start on a 4x4, smaller games are meaningless
export const MIN_POWER_MODIFIER = 2;

export const simulationOn = writable(true);
//exponent of the game board 2*gameBoardPower
export const gameBoardPower = writable(5);
export const gameBoardSize = derived(
  gameBoardPower,
  ($gameBoardPower) => 2 ** ($gameBoardPower + MIN_POWER_MODIFIER)
);
