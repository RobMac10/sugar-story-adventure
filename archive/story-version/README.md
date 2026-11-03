# The Sugar Story

A choose-your-path historical adventure about the Queensland sugar industry, South Sea Islander labour, the Pacific Island Labourers Act 1901 and the deportations of 1906 to 1908. It is set mainly in the Mackay district, with short notes on Bundaberg, the Burdekin and Cairns. By Robin McKean, for teen readers.

- Student version: https://robmac10.github.io/sugar-story-adventure/
- Teacher version (answers and notes behind "Show" buttons): https://robmac10.github.io/sugar-story-adventure/teacher/

## What is in it

- 19 scenes and 5 endings, with real history panels that give sources.
- A "Behind the Story" page that lists everything that is invented.
- A "Discuss and write" page and a Sources page.
- Two old photographs from the State Library of Queensland (public domain or no known copyright restrictions), credited. No AI images.

## Content warning and review

This resource may contain names and images of deceased Aboriginal, Torres Strait Islander and South Sea Islander people. It has **not yet been reviewed** by Australian South Sea Islander community groups (for example QUASSIC, the Queensland United Australian South Sea Islander Council) or by Aboriginal Traditional Owners. Please seek that review before using it widely.

## Building

Edit the files in `src/` and run:

    node build.js

This writes the student version to the repository root and the teacher version to `teacher/`. The student files contain no answers or teacher notes. Do not edit the built files in the root or in `teacher/`.

- `src/data1.js` to `src/data4.js`: sources, scenes, endings, Behind the Story, questions and teacher notes.
- `src/app.js`: the app. Blocks between `/*T*/` and `/*/T*/` are teacher-only.
- `src/index.html`, `src/styles.css`: page and style. Blocks between `<!--T-->` and `<!--/T-->` are teacher-only.
- `images/`: photographs, with credits on the Behind the Story and Sources pages.

## Rules for this project

No invented historical facts. Invented people and events are labelled in Behind the Story. Public domain images only. Plain prose for teen readers, Australian English.
