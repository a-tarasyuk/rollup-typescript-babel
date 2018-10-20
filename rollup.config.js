import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  plugins: [
    babel({ extensions: ['.ts'], exclude: ['dist/**', 'node_modules/**'] }),
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
    { file: pkg.browser, format: 'iife', name: 'RollupTypeScriptBabel' },
  ],
};
