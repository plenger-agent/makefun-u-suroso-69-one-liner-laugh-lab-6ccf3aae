// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one line of text to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only. Never removes the output directory itself;
// it only empties the directory's contents.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't eat the sock — I filed it under 'flooring' and it never appealed.";

// The gate (1-200 chars, UTF-8, non-whitespace) is checked before writing,
// so a bad line fails loudly instead of shipping an invalid entry.
function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }
  if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
    throw new Error(`entry line fails the 1-200 char gate: ${LINE.length}`);
  }
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
