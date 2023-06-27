// @ts-check

import { defineConfig } from 'rollup'
import { buildConfigs } from '../../scripts/getRollupConfig.js'

export default defineConfig([
  ...buildConfigs({
    name: 'react-query-persist-client',
    outputFile: 'index',
    entryFile: './src/index.ts',
  }),
  ...buildConfigs({
    name: 'react-query-persist-client-server',
    outputFile: 'server',
    entryFile: './src/server.ts',
  }),
])