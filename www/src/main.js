import App from './App.svelte';
import wasm from '../../Cargo.toml';
const exports = await wasm();

const app = new App({
  target: document.body,
  props: {
    wasm: exports,
  },
});

export default app;
