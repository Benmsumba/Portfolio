import { readFile, writeFile } from "node:fs/promises";
import { render } from "../dist/prerender/prerender.js";

const index = new URL("../dist/client/index.html", import.meta.url);
const html = await readFile(index, "utf8");
const placeholder = '<div id="root"></div>';

if (!html.includes(placeholder)) {
  throw new Error("Could not find the portfolio root in the built HTML");
}

await writeFile(index, html.replace(placeholder, () => `<div id="root">${render()}</div>`));
