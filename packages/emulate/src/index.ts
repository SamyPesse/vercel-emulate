import { CommanderError } from "commander";
import { createProgram } from "./program.js";

try {
  await createProgram().parseAsync();
} catch (error) {
  const exitCode = error instanceof CommanderError ? error.exitCode : 1;
  if (exitCode) console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = exitCode;
}
