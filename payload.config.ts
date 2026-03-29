import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Articles } from './src/collections/Articles'
import { Users } from './src/collections/Users'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Articles, Users],
  editor: lexicalEditor(),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  typescript: {
    outputFile: './src/payload-types.ts',
  },
})
