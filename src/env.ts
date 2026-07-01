// Centralised environment validation. Imported by payload.config.ts, which is
// loaded during the build, so a missing required var throws and fails the build
// rather than 500ing at request time in production.

// Mongo connection string. Prod/CI provide DATABASE_URI; local .env.local uses
// MONGODB_URI. Either is accepted, but one must be present.
const _DATABASE_URI = process.env.DATABASE_URI || process.env.MONGODB_URI;
if (!_DATABASE_URI) {
  throw new Error("DATABASE_URI (or MONGODB_URI) is not set");
}
if (
  !_DATABASE_URI.startsWith("mongodb://") &&
  !_DATABASE_URI.startsWith("mongodb+srv://")
) {
  throw new Error(
    'DATABASE_URI must start with "mongodb://" or "mongodb+srv://"',
  );
}

const _PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;
if (!_PAYLOAD_SECRET) {
  throw new Error("PAYLOAD_SECRET is not set");
}

const _SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
if (!_SERVER_URL) {
  throw new Error("NEXT_PUBLIC_SERVER_URL is not set");
}

export const DATABASE_URI = _DATABASE_URI;
export const PAYLOAD_SECRET = _PAYLOAD_SECRET;
export const SERVER_URL = _SERVER_URL.replace(/\/$/, "");
