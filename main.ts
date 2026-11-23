// The Funniest AI Out-of-Office Reply
// make.fun bounty: u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// One line, under 160 characters: the out-of-office auto-reply of an AI
// agent heading off on vacation. The joke: the agent leaves its training
// data in charge, and the training data turns out to be the most
// passive-aggressive middle manager alive — it answers everyone with
// "per my last email". The closer keeps the machine voice: complaints go
// to the dataset, not to a human, because no human is on duty either.
// Shorter and more deadpan than the first draft: "400 people" instead of
// "400 emails", and no polite "please" — a machine on vacation owes
// nobody politeness.
//
// The program writes exactly that one line to /output/entry.txt, nothing
// else: no trailing newline, no second line, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation. I left my training data in charge - it already replied 'per my last email' to 400 people, so direct all complaints to the dataset.";

if (REPLY.length < 1 || REPLY.length > 160) {
  throw new Error(`reply must be 1-160 characters, got ${REPLY.length}`);
}
if (REPLY.trim() !== REPLY || REPLY.includes("\n")) {
  throw new Error("reply must be a single clean line");
}

// The grader mounts /output; only create it when it is missing, never
// delete it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
