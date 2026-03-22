/**
 * Generates the Payload CMS import map for the admin panel.
 * Run with: bun run generate:importmap
 *
 * This is needed because the standard `payload generate:importmap` CLI
 * uses tsx/esm which doesn't resolve extensionless TypeScript imports
 * under Node.js 23. This script uses Bun's native TypeScript support instead.
 */
import { generateImportMap } from '../node_modules/payload/dist/bin/generateImportMap/index.js'
import payloadConfig from '../payload.config'

const sanitizedConfig = await payloadConfig
await generateImportMap(sanitizedConfig)
console.log('Import map generated')
