"use strict";

import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import screeps from 'rollup-plugin-screeps';
import visualizer from "rollup-plugin-visualizer";
import json from '@rollup/plugin-json';
import versionInjector from 'rollup-plugin-version-injector';
import progress from 'rollup-plugin-progress';

const Global = `var process = {
  env: {
    npm_package_versino: "${process.env.npm_package_version}"
  }
}`;


let cfg;
const dest = process.env.DEST;
if (!dest) {
  console.log("No destination specified - code will be compiled but not uploaded");
} else if ((cfg = require("./screeps.json")[dest]) == null) {
  throw new Error("Invalid upload destination");
}

export default {
  input: "src/main.ts",
  output: {
    file: "dist/main.js",
    format: "cjs",
    sourcemap: true,
    banner: Global
  },

  plugins: [
    json(),
    clear({ targets: ["dist"] }),
    resolve({ rootDir: "src" }),
    commonjs(),
    typescript({tsconfig: "./tsconfig.json"}),
    screeps({config: cfg, dryRun: cfg == null}),
    visualizer({filename: "Screeps-Visual.html",
                sourcemap: true,
                template: "treemap"}),
    versionInjector(),
    progress({
      clearLine: false // default: true
    })
  ]
};
