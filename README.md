<div align="center" id="logo">
    <img src="logo.png"/>
</div>

<div align='center' id="badges">

<a href="https://vikiru.github.io/parseum/">
	<img src="https://img.shields.io/badge/documentation-docs-orange" alt="Documentation"/>
</a>
<a href="https://parseum.surge.sh/">
    <img src="https://img.shields.io/badge/Web-live%20site-blue" alt="Parseum live site hosted via Surge.sh"/>
</a>
 <a href="https://github.com/vikiru/parseum/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-aqua" alt="MIT License Badge"/>
 </a>
<br/>
<a href="https://github.com/vikiru/parseum/releases">
  <img src="https://img.shields.io/github/v/release/vikiru/parseum" alt="Release"/>
 </a>
 <a href="https://github.com/vikiru/parseum/issues?q=is%3Aissue+is%3Aclosed">
  <img src="https://img.shields.io/github/issues-closed/vikiru/parseum" alt="Closed Issues"/>
 </a>
 <a href="https://github.com/vikiru/parseum/pulls?q=is%3Apr+is%3Aclosed">
  <img src="https://img.shields.io/github/issues-pr-closed/vikiru/parseum?label=closed%20prs" alt="Closed PRs"/>
 </a>
<br/>
 <a href="https://github.com/vikiru/parseum/actions/workflows/lint.yml">
  <img src="https://github.com/vikiru/parseum/actions/workflows/lint.yml/badge.svg" alt="GitHub Lint Action Workflow Status"/>
 </a>
  <a href="https://github.com/vikiru/parseum/actions/workflows/test.yml">
    <img src="https://github.com/vikiru/parseum/actions/workflows/test.yml/badge.svg"/>
 </a>
</div>

---

**Parseum** is a markdown parser and editor built utilizing [Peggy.js](https://github.com/peggyjs/peggy) which generates a parser from a defined **Parsing Expression Grammar (PEG)** file. Combining this parser with **React**, **TailwindCSS**, and **DaisyUI**, allows for the creation of a simple markdown to html parser and editor with the flexibility to grow and evolve as needed by updating the defined grammar file.

[Parseum Demo](https://github.com/vikiru/parseum/assets/72267229/27e33f2c-a528-4273-92d0-5512d99ec837)

## 📖 Table of Contents

-   [📖 Table of Contents](#-table-of-contents)
-   [🌟 Features](#-features)
    -   [Unsupported Markdown Syntax](#unsupported-markdown-syntax)
-   [🛠️ Tech Stack](#️-tech-stack)
-   [📝 Prerequisites](#-prerequisites)
-   [⚡ Setup Instructions](#-setup-instructions)
-   [🔍 Testing](#-testing)
-   [📜 Available Scripts](#-available-scripts)
-   [✨ Acknowledgments](#-acknowledgments)
-   [©️ License](#️-license)

## 🌟 Features

-   Parsing of simple markdown syntax such as:
    -   `paragraph`
    -   `header`
    -   `horizontal rule`
    -   `list`
    -   `link`
    -   `image`
    -   formatting such as `italic`, `bold`, `bold italic`, `code`, `emphasis`
-   Partial extended markdown syntax support such as:
    -   `alternate header syntax`
    -   `blockquotes`
    -   `code block`
    -   `comments`
    -   `definition list`
    -   `task list`
    -   additional formatting syntax such as `subscript`,`superscript`, `strikethrough`, `highlight`, etc
-   Simple UI for a markdown editor allowing a user to enter markdown and view resulting html rendered in a side-by-side view
-   Ability to save and clear markdown content to and from local storage
-   Ability to grow and accomodate additional syntax by updating the defined grammar file

### Unsupported Markdown Syntax

-   Nested lists (and inclusion of other elements within lists)
-   Nested blockquotes (with different levels)
-   Tables
-   Footnotes
-   Reference Links
-   Emoji Support (currently pasting emojis is supported, but for example `:joy:` does not return an emoji with its resulting unicode representation)

A comprehensive overview detailing all supported Markdown syntax can be located within the documentation under the [Syntax Overview](https://vikiru.github.io/parseum/syntax/) section. Each element has a dedicated page detailing an overview of what the element is and example input Markdown and resulting output HTML.

## 🛠️ Tech Stack

Backend:

-   [Node.js](https://nodejs.org/en)
-   [Peggy.js](https://github.com/peggyjs/peggy)

Frontend:

-   [React](https://react.dev/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [DaisyUI](https://daisyui.com/)

Hosting:

-   [Surge.sh](https://surge.sh/)

Documentation:

-   Docs are built using [Starlight](https://starlight.astro.build/) by [Astro](https://astro.build/)
-   Link validation: [starlight-links-validator](https://github.com/HiDeoo/starlight-links-validator)
-   Theme: [starlight-theme-rapide](https://github.com/HiDeoo/starlight-theme-rapide)
-   Documentation site hosted via [GitHub Pages](https://docs.github.com/en/pages)

Dev Tools:

- [Biome](https://biomejs.dev/)
- [Knip](https://github.com/webpro-nl/knip)
- [Peggy.js Online Editor](https://peggyjs.org/online)

## 📝 Prerequisites

Ensure that the following dependencies are installed onto your machine by following the [Setup Instructions](#-setup-instructions).

-   [Node.js](https://nodejs.org/en/download)

## ⚡ Setup Instructions

1. Clone this repository to your local machine.

```bash
git clone https://github.com/vikiru/parseum.git
cd parseum
```

2. Download and install all required dependencies.

```bash
pnpm install
```

## 🔍 Testing

The comprehensive suite of tests for this project is housed within the **[test](/test)** directory. These tests are primarily designed to verify the functionality of the parser and ensure that the resulting HTML is as expected for the input Markdown.

The tests can be run with the following command:

```bash
pnpm test
```

## 📜 Available Scripts

1. Start the development server.

```bash
pnpm dev
```

2. Build the production version of the application.

```bash
pnpm build
```

3. Preview the production version of the application.

```bash
pnpm preview
```

5. Lint files using [Biome](https://biomejs.dev).

```bash
pnpm lint
```

6. Format files using [Biome](https://biomejs.dev).

```bash
pnpm format
```

7. Run TypeScript type checks without emitting files.

```bash
pnpm typecheck
```

8. Check for unused dependencies and files using [Knip](https://github.com/webpro-nl/knip).

```bash
pnpm unused
```

9. Generate a parser using the defined [grammar.pegjs](/src/parser/grammar.pegjs) file with [Peggy.js](https://peggyjs.org/).

```bash
pnpm parser
```

10. Run all tests.

```bash
pnpm test
```

11. Deploy to [Surge.sh](https://surge.sh/).

```bash
pnpm deploy
```

## ✨ Acknowledgments

-   [Peggy.js](https://github.com/peggyjs/peggy)
-   [Peggy.js Online Editor](https://peggyjs.org/online)
-   [Peggy.js Documentation](https://peggyjs.org/documentation)
-   [Markdown Guide Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
-   [regex101](https://regex101.com/)
-   [Surge.sh](https://surge.sh/)
- [Lefthook](https://github.com/evilmartians/lefthook)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
-   [Docusaurus](https://docusaurus.io/)
-   [GitHub Pages](https://pages.github.com/)
-   [Shields Badges](https://github.com/badges/shields)
-   [Favicon Generator](https://favicon.io/favicon-generator/)

## ©️ License

The contents of this repository are licensed under the terms and conditions of the [MIT](https://choosealicense.com/licenses/mit/) license.

[MIT](./LICENSE) © 2024-present Visakan Kirubakaran.
