To publish a new post, add a `.md` file here. The filename (without `.md`) becomes the URL: `payments-101.md` → `/resources/payments-101`.

Each file needs this frontmatter block at the top:

```
---
title: "Post title"
category: "Category name"
excerpt: "One-sentence summary shown in the listing."
date: "2026-08-12"
relatedLabel: "Explore Settlements"   # optional
relatedHref: "/settlements"           # optional
---

Markdown body goes here. Use ## for section headings.
```

`category` groups the post under a tab on `/resources` — reuse an existing category name to add to it, or use a new one to create a new tab automatically. `relatedLabel`/`relatedHref` add an optional link at the end of the post; omit both if there's nothing to link to.

No other code changes are needed — the post appears on `/resources` and gets its own page automatically on the next deploy.
