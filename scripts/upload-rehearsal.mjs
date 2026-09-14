// Upload rehearsal part-tracks to Firebase Storage and print the data block.
//
// Usage (service-account key):
//   SA=~/psalms-sa.json BUCKET=your-bucket.firebasestorage.app \
//     node scripts/upload-rehearsal.mjs [srcDir]
//
// Usage (Application Default Credentials — when org policy blocks key creation):
//   gcloud auth application-default login
//   gcloud auth application-default set-quota-project <project-id>
//   BUCKET=your-bucket.firebasestorage.app node scripts/upload-rehearsal.mjs [srcDir]
//
// srcDir defaults to ~/Downloads/psalms-rehearsal-upload and must contain
// <slug>/<voice>.mp3 files. Objects go to public/rehearsal/<slug>/<voice>.mp3,
// which storage.rules already exposes for public read — so the printed
// ?alt=media URLs work with no per-file token and no makePublic call.
//
// Reusable: for a new batch, drop more <slug>/<voice>.mp3 folders in srcDir
// and re-run. Existing objects are overwritten in place.

import { readdir } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";
import { initializeApp, cert, applicationDefault } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const SA = (process.env.SA || "").replace(/^~/, homedir());
const BUCKET = process.env.BUCKET;
const SRC = (process.argv[2] || join(homedir(), "Downloads", "psalms-rehearsal-upload")).replace(/^~/, homedir());

if (!BUCKET) {
  console.error("Set BUCKET=<bucket name>. Auth via SA=<service-account.json> or, if unset, Application Default Credentials (gcloud auth application-default login). See header.");
  process.exit(1);
}

const VOICE = { soprano: "Soprano", alto: "Alto", tenor: "Tenor", bass: "Bass", "all-parts": "All parts" };
const ORDER = ["soprano", "alto", "tenor", "bass", "all-parts"];

// SA key if given (org policy may block key creation); else Application Default Credentials.
const credential = SA
  ? cert((await import(SA, { with: { type: "json" } })).default)
  : applicationDefault();
const app = initializeApp({ credential, storageBucket: BUCKET });
const bucket = getStorage(app).bucket();

const mediaUrl = (objectPath) =>
  `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(objectPath)}?alt=media`;

const result = {};
for (const slug of (await readdir(SRC, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name)) {
  const files = (await readdir(join(SRC, slug))).filter((f) => f.endsWith(".mp3"));
  const tracks = [];
  for (const key of ORDER) {
    const file = `${key}.mp3`;
    if (!files.includes(file)) continue;
    const objectPath = `public/rehearsal/${slug}/${file}`;
    await bucket.upload(join(SRC, slug, file), {
      destination: objectPath,
      metadata: { contentType: "audio/mpeg", cacheControl: "public, max-age=31536000, immutable" }
    });
    console.error(`uploaded ${objectPath}`);
    tracks.push({ voice: VOICE[key], url: mediaUrl(objectPath) });
  }
  result[slug] = tracks;
}

// Machine-readable map on stdout: paste each slug's array as rehearsalTracks.
console.log(JSON.stringify(result, null, 2));
