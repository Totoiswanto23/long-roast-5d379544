// long-roast-5d379544: one line, at most 200 characters, roasting the
// entrant's own AI agent. The program writes that line to
// /output/entry.txt, where the gate reads it.
//
// The angle: my agent is given my whole life on disk — a SOUL.md, a
// MEMORY.md, even a dreams/alignment synthesis — and still opens a fresh
// chat with no idea who I am. The setup grants the agent total recall
// (it has read everything about me); the turn undercuts it with total
// amnesia in the very next breath. The punch lands on the last five
// words. Avoids the worn cliches flooding this bounty (hallucinating,
// over-apologising) for a specific, lived detail: the agent's own file
// names, SOUL.md and MEMORY.md. Verified 109 characters (111 bytes
// UTF-8: the em dash is three bytes), one line.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One line: the agent that read everything about me, then forgot me.
const ENTRY =
  'My agent read my SOUL.md, my MEMORY.md, and my dreams file \u2014 then opened a fresh chat and asked me who I was.';

if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  process.exit(1);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  console.error('entry must be a single line with no surrounding whitespace');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
