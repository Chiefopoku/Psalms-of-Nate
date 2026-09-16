// Upload arbitrary files to Firebase Storage under a public/ prefix and print
// their deterministic public download URLs (storage.rules exposes public/** for
// read, so the ?alt=media URLs need no token).
//
// Usage (Application Default Credentials — org policy blocks SA keys):
//   gcloud auth application-default login
//   gcloud auth application-default set-quota-project psalms-of-nate
//   BUCKET=psalms-of-nate.firebasestorage.app \
//     node scripts/upload-public.mjs <srcDir> <destPrefix>
//
//   e.g. node scripts/upload-public.mjs ./decks public/presentations
//
// SA=<service-account.json> is also honoured if a key is ever available.

import { readdir } from "node:fs/promises";
import { homedir } from "node:os";
import { extname, join } from "node:path";
import { initializeApp, cert, applicationDefault } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const SA = (process.env.SA || "").replace(/^~/, homedir());
const BUCKET = process.env.BUCKET;
const SRC = (process.argv[2] || "").replace(/^~/, homedir());
const PREFIX = (process.argv[3] || "").replace(/^\/+|\/+$/g, "");

if (!BUCKET || !SRC || !PREFIX) {
  console.error("Usage: BUCKET=<bucket> node scripts/upload-public.mjs <srcDir> <destPrefix>");
  process.exit(1);
}

const TYPES = {
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pdf": "application/pdf",
  ".mp3": "audio/mpeg"
};

const credential = SA
  ? cert((await import(SA, { with: { type: "json" } })).default)
  : applicationDefault();
const app = initializeApp({ credential, storageBucket: BUCKET });
const bucket = getStorage(app).bucket();

const mediaUrl = (objectPath) =>
  `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(objectPath)}?alt=media`;

const result = {};
for (const file of (await readdir(SRC, { withFileTypes: true })).filter((d) => d.isFile()).map((d) => d.name)) {
  const objectPath = `${PREFIX}/${file}`;
  await bucket.upload(join(SRC, file), {
    destination: objectPath,
    metadata: {
      contentType: TYPES[extname(file).toLowerCase()] || "application/octet-stream",
      cacheControl: "public, max-age=31536000, immutable"
    }
  });
  console.error(`uploaded ${objectPath}`);
  result[file] = mediaUrl(objectPath);
}

console.log(JSON.stringify(result, null, 2));
