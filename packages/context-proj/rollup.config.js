import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

const inputOptions = {
  input: 'src/index.ts',
  external: ['react', 'react-showdown'],
  plugins: [
    postcss({
      modules: true,
      sourceMap: true,
      autoModules: true,
    }),
    resolve({
      extensions,
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      babelHelpers: 'runtime',
      extensions,
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    }),
  ],
};

const outputOptions = [
  {
    file: 'dist/index.esm.js',
    format: 'esm',
  },
  {
    file: 'dist/index.cjs.js',
    format: 'cjs',
    exports: 'named',
  },
  {
    file: 'dist/index.min.js',
    format: 'iife',
    name: 'version',
    globals: {
      react: 'React',
      'react-showdown': 'MarkdownView',
    },
    plugins: [terser()],
  },
];

export default {
  ...inputOptions,
  output: [...outputOptions],
};
