import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // sharp loads its libvips .so via dynamic dlopen, which Next's file tracer
  // can't follow — so the native binaries get left out of the Vercel lambda
  // and every request 500s with "Could not load the sharp module". Force just
  // the linux-x64 binaries (what Vercel runs) into the serverless bundle.
  // Globbing all of @img would pull every platform's libvips and blow past
  // the 250mb function size limit.
  outputFileTracingIncludes: {
    '/**': [
      './node_modules/@img/sharp-linux-x64/**/*',
      './node_modules/@img/sharp-libvips-linux-x64/**/*',
    ],
  },
}

export default withPayload(nextConfig)
