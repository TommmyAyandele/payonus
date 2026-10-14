import fs from "fs";
import path from "path";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content/lead-magnets");

// Lead-magnet documents are kept verbatim in markdown. These markers become
// form controls so the visitor can fill the document in on the page:
//   ☐            → checkbox
//   empty <td>   → text input
//   [[text]]     → textarea (free-text write-in area)
//   ___          → inline text input (fill-in blank on a line)
export function getLeadMagnetHtml(file: string): string {
  const md = fs.readFileSync(path.join(DIR, file), "utf8");
  let html = marked.parse(md, { async: false }) as string;
  let n = 0;
  html = html
    .replace(/<p>\[\[text\]\]<\/p>/g, () => `<textarea class="lm-text" rows="3" aria-label="Your notes" data-k="t${n++}"></textarea>`)
    .replace(/<td><\/td>/g, () => `<td><input class="lm-cell" type="text" aria-label="Your entry" data-k="c${n++}" /></td>`)
    .replace(/_{3,}/g, () => `<input class="lm-cell lm-blank" type="text" aria-label="Your entry" data-k="b${n++}" />`)
    .replace(/☐/g, () => `<input class="lm-check" type="checkbox" aria-label="Tick" data-k="x${n++}" />`);
  return html;
}
