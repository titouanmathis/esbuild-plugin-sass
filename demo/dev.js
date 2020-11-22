const base = require('./base');

async function example() {
  const result = await require('esbuild').build({ ...base, incremental: true });

  // Call "rebuild" as many times as you want
  for (let i = 0; i < 5; i++) {
    console.log('rebuild', i);
    let result2 = await result.rebuild();
  }

  // Call "dispose" when you're done to free up resources.
  result.rebuild.dispose();
}

example();
