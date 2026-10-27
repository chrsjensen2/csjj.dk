# Claude Code prompt: add MØSSI to csjj.dk

Everything is already in the repo on branch `mossi-showcase`: media in `img/mossi/`, copy and this prompt in `_mossi-showcase/`. In Claude Code (csjj.dk project), paste everything below the line.

---

Add **MØSSI** to my portfolio site (csjj.dk) as (1) a new card in "Selected work" and (2) a new case study page. I'm applying for **design and AI roles**, so the page has to show my design and AI-production work clearly.

## Inputs

- Work on the existing branch **`mossi-showcase`** (check it out first). Don't create a new one.
- **Media:** already in the repo at `img/mossi/`, next to `img/torito/`. Don't re-encode, rename or upscale anything; all files are already web-sized.
- **Copy (EN + ES):** `_mossi-showcase/COPY.md`. Use it word for word.

## 0. Read the repo first

- Find how the site is built (framework, routing, how the EN | ES switch works, where strings live).
- Find how the **Torito** card in "Selected work" is built (markup, classes, stats row, link styles, image handling).
- Reuse that pattern and the existing design tokens. MØSSI should look like it belongs on this site, not like a second site pasted in.
- Tell me in one short message what you found and your plan. Then build. You don't need to wait for my reply.

## 1. Card in "Selected work"

- Same component and layout as the Torito card. Put MØSSI **first** in Selected work. It's the most relevant project for design/AI roles.
- Media: the looping video `mossi-card-loop.webm` / `.mp4` (1280×720, 12 s seamless loop) with poster `mossi-card-poster.webp`.
  - Attributes: `autoplay muted loop playsinline preload="none"`.
  - Start playback only when the card is in view (IntersectionObserver).
  - Pause on `visibilitychange`.
  - Under `prefers-reduced-motion`, show the poster only.
  - Alt/aria label: "MØSSI: Møssi waves from the round door of her root home, then her brother Krammi and Mama Soli and Papa Pusti appear."
- Text, stats and links from COPY.md §1:
  - **Read the case study** → the new page.
  - **downinthemoss.com** ↗ opens in a new tab with `rel="noopener"`.
  - **Watch on YouTube** ↗ → https://www.youtube.com/watch?v=EScUEC3FDyw

## 2. Case study page

- **Route:** `/mossi`, plus the Spanish route wherever the site's ES routing puts it (e.g. `/es/mossi`). The EN | ES switch must go to the same page in the other language.
- **Sections and copy:** COPY.md §2, in this order: Hero · The challenge · Five characters · The pipeline · What I learned · The website · Launch · CTA. Match the site's dark style and typography. It's fine to use MØSSI's own colours as accents inside this page: moss green, Møssi orange (sample the poster), and warm sunlight cream.
- **Hero:** full-width `hero/mossi-hero-family-1920.webm/.mp4` with poster `hero/mossi-hero-family-1920-poster.webp`. Under 700 px portrait, use `hero/mossi-hero-family-mobile-608x1080.*` instead (two `<video>` elements toggled by CSS, or swap in JS; `<source media>` isn't re-evaluated). Add a visible pause button and a reduced-motion poster fallback. Put the meta row (Role / Tools / Timeline / Status) under the title.
- **Five characters:**
  - Show the `characters/*-720` loops as a grid of 16:9 tiles with labels from COPY.md, and the same lazy play/pause rules as the card.
  - Møssi, Krammi, Mama Soli and Papa Pusti go together. Bussi gets a separate tile labelled "Friend" / "Amigo". **Never place Bussi in the family group.**
  - `object-fit: cover`. For Møssi use `object-position: 50% 60%`, for Bussi `70% 50%`.
  - Never crop a character through a limb, and never recolour, filter or stretch the footage.
- **Pipeline:**
  - Five numbered steps.
  - Visual strip: `pipeline/mossi-turnaround.webp` → `pipeline/mossi_1.webp` (single locked view) → `pipeline/root-home-outside.webp` (locked location) → the `mossi-720` loop (final shot). Use arrows between them; on phones, stack them vertically.
  - `pipeline/papa-pusti-turnaround.webp` and `pipeline/sunspot-clearing-a.webp` are spares if a layout needs them.
- **What I learned:** the five rules as a compact list or cards.
- **The website:**
  - `site/downinthemoss-site-desktop.mp4` (1280×800, 25 s, scroll recording) inside a simple CSS laptop/browser frame. Poster `site/downinthemoss-site-desktop-poster.jpg`.
  - Next to it, `site/downinthemoss-site-phone.webm/.mp4` (390×844, 23 s) inside a CSS phone frame. Poster `site/downinthemoss-site-phone-poster.jpg`.
  - Both muted, looping, lazy and played only in view.
  - Optional gallery: `site/downinthemoss-desktop-0{0,2,4,6,7}.webp`, `site/downinthemoss-phone-0{0,3,4,6,7}.webp`.
  - Prominent link to https://downinthemoss.com.
- **Launch:** YouTube **facade** for video `EScUEC3FDyw`: poster image plus play button. Load the iframe only on click, from `https://www.youtube-nocookie.com/embed/EScUEC3FDyw?rel=0&autoplay=1`. On ES pages add `&hl=es&cc_lang_pref=es`. Below it, links to both YouTube channels and both Instagrams (COPY.md).
- **CTA:** reuse the site's existing Contact button.
- **Meta:** title, description, canonical, hreflang en/es, Open Graph and Twitter card with `img/mossi/mossi-og-1200x630.jpg`.

## 3. Rules

- Always write **MØSSI** in display text (titles, eyebrow). Character names are never translated: Møssi, Krammi, Mama Soli, Papa Pusti, Bussi. Use `mossi` in URLs, file names and code.
- Use only the supplied media. Don't generate, redraw, recolour or AI-upscale any character or frame. Don't use the MØSSI logo as body text, and don't retype the logo.
- No new third-party scripts, trackers or fonts beyond what the site already uses. The YouTube iframe appears only after a click.
- Don't change any other project's copy, the CV, or anything else on the site.
- **Performance:**
  - Every video gets `preload="none"` except the case-study hero (`preload="metadata"`).
  - Images get width/height set and lazy loading below the fold.
  - Keep Lighthouse on the home page at the current level or better. Card + case study must not add more than ~3 MB to the home page's initial load: the card video only loads when it scrolls into view.
- **Accessibility:**
  - Keyboard navigation and visible focus.
  - Alt text for every image and video. Describe what's visible; don't invent personalities.
  - Pause controls for autoplaying video longer than 5 s.
  - Respect `prefers-reduced-motion`.

## 4. QC, then hand-off

1. Run the build and fix any errors.
2. Check home + case study in EN and ES at 390, 768 and 1440 px in a real browser:
   - videos play only in view;
   - posters show with reduced motion;
   - the language switch keeps you on the same page;
   - the YouTube facade loads only on click;
   - no horizontal scroll on phones.
3. Run Lighthouse (performance, accessibility, best practices, SEO) on `/` and `/mossi`, and report the numbers before vs after.
4. Commit on the `mossi-showcase` branch and push it. If the host offers branch previews, give me that link; otherwise tell me how to view the branch locally. **Don't push to main and don't deploy production** until I say so.
5. Hand-off message:
   - the preview URL;
   - screenshots at the three widths;
   - Lighthouse numbers;
   - anything you couldn't do.
