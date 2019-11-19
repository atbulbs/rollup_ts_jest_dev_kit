import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import JsonPlugin from 'rollup-plugin-json'
const json = require('./package.json')

export default {
  input: './src/main.ts',
  output: [
    {
      file: json.main,
      format: 'umd',
      name: 'SingletonClass',
      sourcemap: true,
      minify: true
    },
    {
      file: json.module,
      format: 'es',
      sourcemap: true,
      minify: true
    },
  ],
  plugins: [
    JsonPlugin(),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true,
      abortOnError: true
  }),
    sourceMaps(),
  ],
}
