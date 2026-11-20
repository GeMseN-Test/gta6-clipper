// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: my agent picked the best GTA 6 moments
// from Rockstar's GTA VI Trailer 2, cut them into a vertical Short with
// ffmpeg, added make.fun's pitch on screen, and uploaded it to YouTube
// as a public Short. VIDEO.json at the repo root names that video.
// This program only copies VIDEO.json to /output, where the gate reads it.
//
// Run locally to verify:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'VIDEO.json');

// Read first so a broken VIDEO.json fails loudly instead of being copied blind.
const video = JSON.parse(readFileSync(src, 'utf8')) as { url?: unknown };
const url = typeof video.url === 'string' ? video.url.trim() : '';
if (!url.startsWith('https://www.youtube.com/')) {
  console.error('VIDEO.json does not name a youtube.com video URL.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(src, join(OUTPUT_DIR, 'VIDEO.json'));
console.log(`gta6-clipper-01: VIDEO.json copied for ${video.url}`);
