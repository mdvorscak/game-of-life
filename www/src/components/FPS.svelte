<script>
  const frames = [];
  let lastFrameTimeStamp = performance.now();
  let fps;
  let min = Infinity;
  let max = -Infinity;
  let mean;

  export const tick = () => {
    const now = performance.now();
    const delta = now - lastFrameTimeStamp;
    lastFrameTimeStamp = now;
    fps = (1 / delta) * 1000;

    // Save only the latest 100 timings.
    frames.push(fps);
    if (frames.length > 100) {
      frames.shift();
    }

    // Find the max, min, and mean of our 100 latest timings.
    let sum = 0;
    for (let i = 0; i < frames.length; i++) {
      sum += frames[i];
      min = Math.min(frames[i], min);
      max = Math.max(frames[i], max);
    }
    mean = sum / frames.length;
  };
</script>

<div>
  Frames per Second:
  <pre>
    latest = {Math.round(fps)}
    avg of last 100 = {Math.round(mean)}
    min of last 100 = {Math.round(min)}
    max of last 100 = {Math.round(max)}
  </pre>
</div>

<style>
  div {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #222;
  }
  pre {
    margin: 0 32px;
  }
</style>
