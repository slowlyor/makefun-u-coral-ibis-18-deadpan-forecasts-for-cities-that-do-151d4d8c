// Entry for make.fun bounty: "Deadpan Forecasts for Cities That Do Not Exist".
// Writes a single deadpan one-line weather forecast for an invented city
// to /output/entry.txt. Node 22+ stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const FORECAST =
  "In Bumbershoot Falls, expect a high of 58 with light rain falling upward, winds at 12 mph from the north, and a 70% chance of brief confetti by 4 p.m.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORECAST + "\n", "utf8");
console.log(`Wrote ${FORECAST.length} characters to /output/entry.txt`);
