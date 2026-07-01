import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // sharp loads its libvips .so via dynamic dlopen, which Next's file tracer
  // can't follow — so the native binaries get left out of the Vercel lambda
  // and every request 500s with "Could not load the sharp module". Force them
  // into the serverless bundle.
  outputFileTracingIncludes: {
    '/**': ['./node_modules/@img/**/*', './node_modules/sharp/**/*'],
  },
}

export default withPayload(nextConfig)
