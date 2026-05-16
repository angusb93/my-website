import { buildConfig } from 'payload'
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

const generateTitle: GenerateTitle<Article | Page | Project> = ({ doc }) =>
  doc?.title ? `${doc.title} | Angus Buick` : 'Angus Buick'

const generateURL: GenerateURL<Article | Page | Project> = ({ doc }) => {
  const base = process.env.NEXT_PUBLIC_SERVER_URL ?? ''
  return doc?.slug ? `${base}/${doc.slug}` : base
}

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
    url: process.env.MONGODB_URI || '',
  }),
  cors: [process.env.NEXT_PUBLIC_SERVER_URL ?? ''].filter(Boolean),
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  sharp,
  typescript: {
    outputFile: './src/payload-types.ts',
  },
})
