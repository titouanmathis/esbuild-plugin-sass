const base =require('./base');

require('esbuild')
  .build(base)
  .catch(() => process.exit(1));
