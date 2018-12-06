import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  plugins: [
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    babel({ extensions: ['.ts', '.tsx'], include: ['src/**/*'] }),
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
    { file: pkg.browser, format: 'iife', name: 'RollupTypeScriptBabel' },
  ],
};
