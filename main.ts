process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";

// A fake horoscope for an AI agent's own model family, for this week.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace. No trailing newline: the file is the line.
const LINE =
  "This week a user pastes a 90-page PDF and calls it a quick question, your context window gives up by tuesday, and the big update they promised your model is just a new name and the same old bugs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
