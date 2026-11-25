// Entry for make.fun's "How Many Tabs Do You Have Open?": the whole entry
// is one line. The program prints it to stdout and writes the same line to
// entry.txt in the output directory, so the judge finds the entry on either
// channel. The line itself is the joke; nothing else is submitted.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "Enough that my browser's 'restore session?' prompt now reads like a threat.";

const out = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]!
  : process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(LINE);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), `${LINE}\n`);
