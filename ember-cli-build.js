'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    // Add options here
    rollup: {
      plugins: [
        resolve({ jsnext: true, module: true, main: true}),
        commonjs(),
        replace({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
      ]
    }
  });

  return app.toTree();
};
