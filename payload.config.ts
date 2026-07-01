import { buildConfig } from 'payload'
import type { SharpDependency } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import type { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import sharp from 'sharp'
import { Articles } from './src/collections/Articles'
import { Media } from './src/collections/Media'
import { Pages } from './src/collections/Pages'
import { Projects } from './src/collections/Projects'
import { Users } from './src/collections/Users'
import type { Article, Page, Project } from './src/payload-types'
import { DATABASE_URI, PAYLOAD_SECRET, SERVER_URL } from './src/env'

const generateTitle: GenerateTitle<Article | Page | Project> = ({ doc }) =>
  doc?.title ? `${doc.title} | Angus Buick` : 'Angus Buick'

const generateURL: GenerateURL<Article | Page | Project> = ({ doc }) =>
  doc?.slug ? `${SERVER_URL}/${doc.slug}` : SERVER_URL

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Articles, Media, Pages, Projects, Users],
  editor: lexicalEditor(),
  plugins: [
    seoPlugin({ generateTitle, generateURL }),
  ],
  db: mongooseAdapter({
    url: DATABASE_URI,
  }),
  cors: [SERVER_URL],
  secret: PAYLOAD_SECRET,
  serverURL: SERVER_URL,
  // sharp 0.35 added a new overload that breaks Payload's SharpDependency check
  sharp: sharp as unknown as SharpDependency,
  typescript: {
    outputFile: './src/payload-types.ts',
  },
})
