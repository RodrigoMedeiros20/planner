import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared']
const sliceLayers = ['pages', 'widgets', 'features', 'entities']

function fsdBoundaries(layer) {
  const higherLayers = layers.slice(0, layers.indexOf(layer))

  const patterns = [
    {
      group: sliceLayers.map((name) => `@/${name}/*/*`),
      message:
        'Import from the slice public API (its index.ts), not from inside the slice.',
    },
    {
      group: ['../../*'],
      message: 'Use the @/ alias to import from another slice or layer.',
    },
  ]

  if (higherLayers.length > 0) {
    patterns.push({
      group: higherLayers.map((name) => `@/${name}/*`),
      message: `The ${layer} layer can only import from layers below it.`,
    })
  }

  return {
    files: [`src/${layer}/**/*.{ts,tsx}`],
    rules: {
      'no-restricted-imports': ['error', { patterns }],
    },
  }
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...layers.map(fsdBoundaries),
])
