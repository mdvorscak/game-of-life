import App from './App.svelte';
import wasm from '../../Cargo.toml';

async function loadWasm() {
  // const wasm = await import("../../Cargo.toml");
  // const exports = await wasm.default();
  const exports = await wasm();

  return exports;
}
const exports = await loadWasm();

const app = new App({
  target: document.body,
  props: {
    wasm: exports,
  },
});

export default app;
