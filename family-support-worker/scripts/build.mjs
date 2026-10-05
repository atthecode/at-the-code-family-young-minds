import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const parts = [
  "part-01.b64",
  "part-02.b64",
  "part-03.b64",
  "part-04.b64",
  "part-05.b64",
  "part-06.b64"
];

let base64 = "";
for (const part of parts) {
  base64 += (await readFile(join("assets-src", part), "utf8")).trim();
}
await mkdir("public", { recursive: true });
await writeFile("public/family-connection-story.mp4", Buffer.from(base64, "base64"));
console.log("Prepared family story video for deployment.");
