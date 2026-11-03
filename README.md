# Sugar and South Sea Islanders in Queensland

By Robin McKean. A non-fiction information bank about the Queensland sugar industry, South Sea Islander labour, the Pacific Island Labourers Act 1901 and the deportations of 1906 to 1908, with a focus on the Mackay district.

- Student version: https://robmac10.github.io/sugar-story-adventure/
- Teacher version: https://robmac10.github.io/sugar-story-adventure/teacher/ (not linked from the student version, and set to noindex). It adds discussion questions with suggested answers behind "Show" buttons.

## What is in it
Overview, Up the coast (an interactive map that follows sugar up the Queensland coast, district by district, with a card for each district), Timeline (dated events, each with a short explanation and its source), Places, People and groups (real ones only), Real lives (short documented accounts, with a person's own words only where a source records them), Did you know, and Sources (including where sources disagree). There are no invented characters, no story and no newspaper headlines.

## Content warning and review
This resource may contain names and images of deceased Aboriginal and Torres Strait Islander people (and, for the sugar resource, South Sea Islander people). It has **not yet been reviewed** by community members. Please seek review, for example from QUASSIC, local Australian South Sea Islander groups and the Traditional Owners of the Mackay district, including the Yuibera people, before classroom use.

## Up the coast
The Up the coast page has a simple SVG outline of Queensland (drawn from Natural Earth admin-1 data, public domain; no map tiles and no keys), a decade slider with Previous and Next buttons, and a list view. The district data is in `src/coast-districts.js`, the sources in `src/coast-sources.js`, the outline in `src/coast-map.js` and the other additions (timeline, places, people, did you know, disputes and teacher questions) in `src/coast.js`. Each district year is the first year in which the sources read document cane, a plantation or a mill there. Where sources disagree the card says so, and where they say nothing the card names the gap.

## Editing
Edit files in `src/` (`info.js` holds all text, facts and questions; `folklore.js` and the `coast-*.js` files hold the Folklore and Up the coast sections; `extra-sources.js` holds source notes; `app.js`, `index.html` and `styles.css` hold the page), then run `node build.js`. It writes the student version at the site root and the teacher version in `teacher/`. The student build removes all discussion questions, answers and teacher-only code. Do not edit the built files in the root or in `teacher/` directly.

## Archive
The earlier choose-your-path story version is kept, not deleted. It is the git tag `story-version` and the folder `archive/story-version/`.

## Rules followed
No invented facts (where sources disagree, the resource says so), public domain credited images only, no AI images, plain prose, Australian English.
