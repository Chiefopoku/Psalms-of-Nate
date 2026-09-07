# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| `psalms-of-nate` | Chaptered Sacred Anthology | Dark glassmorphic pill bar with gold accent mark | Dimensional Sanctuary Hero (4 planes, text behind subject) | 6 acts, 11.2vh: pin-hero &bull; pin-calling &bull; scrub-madesre &bull; pan-repertoire &bull; flow-desk &bull; close | Benediction altar close, dual CTA, streaming anchors | Conductor's Sheet Music Desk (interactive SATB voice isolator & score reader) | Sacred Choral / Royal Ghanaian Gold on Obsidian | 3000 |

---

## What is taken

- **Grammar**: Chaptered Sacred Anthology
- **Signature Move**: Conductor's Sheet Music Desk (SATB vocal part isolation & stave preview)
- **Palette**: Royal Ghanaian Gold (`#D4AF37`) on Sacred Obsidian (`#0A0908`)

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.

## label-revamp (Psalms of Nate)
- Grammar: catalogue-index (discography-first), not filmic one-shot
- Nav: inherited brand bar (unchanged)
- Hero: full-bleed artist-header, parallax + pointer
- Act shape: arrival → grid browse → single pinned peak → intimacy → list close
- Close: functional scores list + kept footer (resolves, not fade)
- Signature: square cover expands to full-frame while the performance film scrubs from inside it
