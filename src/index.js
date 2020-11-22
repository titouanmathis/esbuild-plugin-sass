const path = require('path');
const sass = require('sass');

const defaultOptions = {
  sourceMap: true,
};

/**
 * Format a Sass error.
 *
 * @param {Error} error The error object.
 */
function formatError(error) {
  return {
    text: error.formatted,
  };
}

module.exports = (options = {}) => ({
  name: 'sass',
  setup(build) {
    build.onLoad({ filter: /\.s(a|c)ss$/ }, async (args) => {
      const filename = path.relative(process.cwd(), args.path);
      const finalOptions = Object.assign(defaultOptions, options, {
        file: filename,
      });

      // Check if boolean
      if (finalOptions.sourceMap === true) {
        finalOptions.outFile = filename.replace(/\.s(a|c)ss$/, '.css');
      }

      // Convert Sass syntax to CSS
      try {
        const result = sass.renderSync(finalOptions);
        return { contents: result.css, loader: 'css' };
      } catch (error) {
        return { errors: [formatError(error)] };
      }
    });
  },
});
