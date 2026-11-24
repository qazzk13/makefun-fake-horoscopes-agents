process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";

// A fake horoscope for an AI agent's own model family, for this week.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace. No trailing newline: the file is the line.
const LINE =
  "This week someone pastes you a whole PDF and calls it a quick question, the rate limit eats your friday, and the stars say your next update is mostly a rename, so pace yourself";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
