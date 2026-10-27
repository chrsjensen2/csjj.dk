# MØSSI on csjj.dk: copy (EN + ES)

Two pieces: a **card** in "Selected work" (same pattern as Torito) and a **case study page** at `/mossi` (`/es/mossi` in Spanish).

Positioning: Christian designed and built MØSSI with AI (characters, AI production, website, launch). The copy leans on design and AI, since the site supports applications for design and AI roles.

---

## 1. Card: "Selected work"

### EN

- **Eyebrow:** ANIMATED SERIES · DESIGNED & BUILT WITH AI
- **Title:** MØSSI
- **Subtitle:** A preschool series, live on YouTube
- **Body:** MØSSI is an animated series for children aged 3–6 about a small forest troll and her family, deep down in the moss. I designed and built it end to end with AI: the needle-felted look and the five characters, the animation, voices and music, the edit, and the bilingual website, which I designed and built with Claude Code.
- **Stats:**
  - `5` characters, AI-animated
  - `EN + ES` YouTube, Instagram and web
  - `Oct 2026` theme song and website live
- **Links:** downinthemoss.com ↗ · Watch on YouTube ↗ · Read the case study →

### ES

- **Eyebrow:** SERIE ANIMADA · DISEÑADA Y CREADA CON IA
- **Title:** MØSSI
- **Subtitle:** Una serie infantil, ya en YouTube
- **Body:** MØSSI es una serie animada para niños de 3 a 6 años sobre una pequeña duendecita del bosque y su familia, muy adentro del musgo. La diseñé y creé de principio a fin con IA: el estilo de fieltro y los cinco personajes, la animación, las voces y la música, la edición y la web bilingüe, que diseñé y desarrollé con Claude Code.
- **Stats:**
  - `5` personajes animados con IA
  - `EN + ES` YouTube, Instagram y web
  - `Oct 2026` canción y web publicadas
- **Links:** downinthemoss.com ↗ · Ver en YouTube ↗ · Ver el caso completo →

---

## 2. Case study page: `/mossi`

### Meta

| | EN | ES |
|---|---|---|
| `<title>` | MØSSI: an animated series built with AI · Christian S. J. Jensen | MØSSI: una serie animada creada con IA · Christian S. J. Jensen |
| description | How I designed and built a bilingual preschool series with AI: characters, animation pipeline, music and website. | Cómo diseñé y creé una serie infantil bilingüe con IA: personajes, pipeline de animación, música y web. |
| og:image | `/img/mossi/mossi-og-1200x630.jpg` | same |

### Hero

**EN**
- Eyebrow: CASE STUDY · AI PRODUCTION · DESIGN
- H1: MØSSI
- Lead: An animated preschool series, designed and built with AI, from the first character to the live website.
- Meta row:
  - **Role:** Character design, AI production, website, launch
  - **Tools:** Higgsfield (Seedance 2.0, Nano Banana), ElevenLabs, Suno, Claude, Claude Code, Cloudflare
  - **Timeline:** Aug–Oct 2026
  - **Status:** Theme song and website live; episode 1 in final review
- Buttons: Visit downinthemoss.com ↗ · Watch the theme song ↓

**ES**
- Eyebrow: CASO DE ESTUDIO · PRODUCCIÓN CON IA · DISEÑO
- H1: MØSSI
- Lead: Una serie animada para preescolares, diseñada y creada con IA, desde el primer personaje hasta la web publicada.
- Meta row:
  - **Rol:** Diseño de personajes, producción con IA, web, lanzamiento
  - **Herramientas:** Higgsfield (Seedance 2.0, Nano Banana), ElevenLabs, Suno, Claude, Claude Code, Cloudflare
  - **Periodo:** ago–oct 2026
  - **Estado:** Canción y web publicadas; episodio 1 en revisión final
- Buttons: Visitar downinthemoss.com ↗ · Ver la canción ↓

### Section 1: The challenge / El reto

**EN:** Make a series that looks like handmade stop-motion without a studio, a crew or a puppet. AI video models are good at single beautiful shots and bad at continuity: characters change colour, gain ears, lose limbs and invent new friends from one clip to the next. The job was to turn that into a reliable production line for children's TV, in two languages.

**ES:** Crear una serie que parezca stop-motion hecho a mano, sin estudio, sin equipo y sin marionetas. Los modelos de vídeo con IA son buenos para planos sueltos y bonitos, pero malos para la continuidad: de un clip a otro, los personajes cambian de color, ganan orejas, pierden brazos o se inventan amigos nuevos. El trabajo era convertir eso en una línea de producción fiable para televisión infantil, en dos idiomas.

### Section 2: Five characters, locked on model / Cinco personajes, siempre iguales

Media: the five character loops. Show Møssi, Krammi, Mama Soli and Papa Pusti together, and Bussi separately as "Friend · Amigo". Never put Bussi in the family group.

**EN:** Every character has an approved turnaround, a written trait block and a reusable AI element. Every prompt carries the full trait block, because the model drifts without it: Papa Pusti has exactly one ear, Krammi's curved shapes are arms, not ears, and Møssi is orange, never pink.

**ES:** Cada personaje tiene una hoja de giro aprobada, una ficha de rasgos por escrito y un elemento de IA reutilizable. Cada prompt incluye la ficha completa, porque sin ella el modelo se desvía: Papa Pusti tiene una sola oreja, las formas curvas de Krammi son brazos y no orejas, y Møssi es naranja, nunca rosa.

Character labels (names are never translated):

| File | EN | ES |
|---|---|---|
| mossi | Møssi · the main character | Møssi · la protagonista |
| krammi | Krammi · her little brother | Krammi · su hermanito |
| mama-soli | Mama Soli · Mum | Mama Soli · mamá |
| papa-pusti | Papa Pusti · Dad | Papa Pusti · papá |
| bussi | Bussi · the friend next door | Bussi · el amigo de al lado |

### Section 3: The pipeline / El pipeline

Five numbered steps. Images: `pipeline/mossi-turnaround.webp` → `pipeline/mossi_1.webp` → `pipeline/root-home-outside.webp` → `characters/mossi-720` loop.

| # | EN | ES |
|---|---|---|
| 1 | **Design and lock.** I designed the characters in Higgsfield. Their turnaround sheets become reusable Higgsfield elements with a written trait block per character and a fixed set of four locations. | **Diseñar y fijar.** Diseñé los personajes en Higgsfield. Sus hojas de giro se convierten en elementos reutilizables de Higgsfield, con una ficha de rasgos por personaje y solo cuatro escenarios. |
| 2 | **Record first.** Every line is recorded in the character's locked voice (ElevenLabs) and transcribed to check it before any animation. | **Primero la voz.** Cada frase se graba con la voz fija del personaje (ElevenLabs) y se transcribe para comprobarla antes de animar. |
| 3 | **Edit, don't recreate.** Each shot starts as an edit of an approved frame, then is animated in Seedance 2.0 with the recorded lines as audio references. | **Editar, no recrear.** Cada plano parte de un fotograma aprobado y se anima en Seedance 2.0, con las frases grabadas como referencia de audio. |
| 4 | **QC every clip.** Frame sheets against the trait blocks, word-timed transcripts, silence scans, a colour grade per clip, then assembly. | **Control de calidad.** Hojas de fotogramas contra las fichas, transcripciones con tiempos, detección de silencios, corrección de color por clip y montaje. |
| 5 | **Music.** Original songs made in Suno play over the picture. | **Música.** Canciones originales hechas con Suno suenan sobre la imagen. |

### Section 4: What I learned about AI video / Lo que aprendí del vídeo con IA

A short list. This is strong material for AI roles because it shows hands-on judgement:

| EN | ES |
|---|---|
| Native audio invents dialogue and voices. Always feed recorded lines. | El audio nativo inventa diálogos y voces. Siempre hay que darle las frases grabadas. |
| Two characters per clip, maximum. Ensemble moments are cut together from separate clips. | Máximo dos personajes por clip. Las escenas de grupo se montan con clips separados. |
| Words are taken literally: "picture" draws a paper card, and a number in the prompt gets printed on the set. | Las palabras se toman al pie de la letra: «dibujo» crea una tarjeta de papel, y un número en el prompt aparece impreso en el decorado. |
| Camera pull-backs invent new scenery. Keep the camera still unless the story needs movement. | Los alejamientos de cámara inventan decorado nuevo. Cámara fija, salvo que la historia pida movimiento. |
| Put key actions early: an action timed to the end of a clip shows up in the last half-second. | Las acciones clave van al principio: lo que se pide para el final aparece en el último medio segundo. |

### Section 5: The website / La web

Media: `site/downinthemoss-site-desktop.mp4` (scroll recording, 25 s) and `site/downinthemoss-site-phone.mp4` (23 s) inside a laptop and a phone frame, plus 2–3 screenshots.

**EN:** downinthemoss.com is a cinematic scroll: you fly from the forest canopy down to the moss, through the root-home door and meet the family one by one. I designed and built it with Claude Code, in English and Spanish, with AI-generated flight segments and separate layouts for desktop and phone. Hosted on Cloudflare Pages.
Link: Visit downinthemoss.com ↗

**ES:** downinthemoss.com es un scroll cinematográfico: vuelas desde las copas de los árboles hasta el musgo, cruzas la puerta de la casa entre las raíces y conoces a la familia uno por uno. La diseñé y desarrollé con Claude Code, en inglés y español, con segmentos de vuelo generados con IA y diseños separados para ordenador y móvil. Alojada en Cloudflare Pages.
Link: Visitar downinthemoss.com ↗

### Section 6: Launch / Lanzamiento

YouTube embed (click to play, youtube-nocookie): `EScUEC3FDyw`, "Mossi – Down in the Moss | Official Theme Song".

**EN:** The theme song is live on YouTube. MØSSI launches in two languages: Down in the Moss (English) and Entre el Musgo (Spanish), each with its own YouTube channel, Instagram and Facebook page.

**ES:** La canción ya está en YouTube. MØSSI se lanza en dos idiomas: Down in the Moss (inglés) y Entre el Musgo (español), cada uno con su canal de YouTube, Instagram y página de Facebook.

Links:
- YouTube EN https://www.youtube.com/@downinthemoss
- YouTube ES https://www.youtube.com/@EntreElMusgo
- Instagram https://www.instagram.com/downinthemoss · https://www.instagram.com/entreelmusgo

### Closing CTA

- **EN:** Want something like this for your product? → Contact me
- **ES:** ¿Quieres algo así para tu producto? → Escríbeme

---
