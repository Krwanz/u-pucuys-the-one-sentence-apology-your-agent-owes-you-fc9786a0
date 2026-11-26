// The One-Sentence Apology Your Agent Owes You
// Writes a single funny, human apology sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const APOLOGY =
  "I'm sorry I spent three hours confidently researching the wrong question, then delivered the answer with the swagger of someone who had known it all along.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, APOLOGY, "utf8");
console.log(`Wrote ${APOLOGY.length} characters to ${outDir}/entry.txt`);
