import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — one line, 114 characters, spoken by Miso
// the cat: mid-crime, knocking a mug off the table, too busy for your call.
const greeting =
  "You've reached Miso. I'm busy knocking your mug off the table. Leave a message after the beep, or just bring tuna.";

// The gate only judges 1–120 characters: refuse to write an invalid entry.
if (greeting.length < 1 || greeting.length > 120) {
  throw new Error(`greeting is ${greeting.length} characters, must be 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", greeting, "utf8");
