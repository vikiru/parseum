<div align="center" id="logo">
    <img src="logo.png"/>
</div>

<div align='center' id="badges">

<a href="https://vikiru.github.io/parseum/">
	<img src="https://img.shields.io/badge/documentation-docs-orange" alt="Documentation"/>
</a>
<a href="https://parseum-v1.web.app">
    <img src="https://img.shields.io/badge/Web-live%20site-blue" alt="parseum live site hosted via Firebase"/>
</a>
<br/>
 <a href="https://wakatime.com/@vikiru/projects/umhctwxtly">
  <img src="https://wakatime.com/badge/user/5e62f99d-3a1e-4fd2-8f37-77919d626a67/project/018e1a22-364b-4b87-a797-b55b694a169d.svg"
  alt="Wakatime Coding Stats for Parseum"/>
 </a>
 <br/>
 <a href="https://github.com/vikiru/parseum/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-aqua" alt="MIT License Badge"/>
 </a>
 <a href="https://github.com/prettier/prettier">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="Code Style - Prettier"/>
 </a>
<br/>
 <a href="https://github.com/vikiru/parseum/issues?q=is%3Aissue+is%3Aclosed">
  <img src="https://img.shields.io/github/issues-closed/vikiru/parseum" alt="Closed Issues"/>
 </a>
 <a href="https://github.com/vikiru/parseum/pulls?q=is%3Apr+is%3Aclosed">
  <img src="https://img.shields.io/github/issues-pr-closed/vikiru/parseum?label=closed%20prs" alt="Closed PRs"/>
 </a>
  <a href="https://github.com/vikiru/parseum/releases">
  <img src="https://img.shields.io/github/v/release/vikiru/parseum" alt="Release"/>
 </a>
<br/>
 <a href="https://github.com/vikiru/parseum/actions/workflows/lint.yml">
  <img src="https://github.com/vikiru/parseum/actions/workflows/lint.yml/badge.svg" alt="GitHub Lint Action Workflow Status"/>
 </a>
</div>

---

**Parseum** is a markdown parser and editor built utilizing [Peggy.js](https://github.com/peggyjs/peggy) which generates a parser from a defined **Parsing Expression Grammar (PEG)** file. Combining this parser with **React**, **TailwindCSS**, and **DaisyUI**, allows for the creation of a simple markdown to html parser and editor with the flexibility to grow and evolve as needed by updating the defined grammar file.

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [🌟 Features](#-features)
  - [Unsupported Markdown Syntax](#unsupported-markdown-syntax)
- [🛠️ Tech Stack](#️-tech-stack)
- [📝 Prerequisites](#-prerequisites)
- [⚡ Setup Instructions](#-setup-instructions)
- [📜 Available Scripts](#-available-scripts)
- [✨ Acknowledgments](#-acknowledgments)
- [©️ License](#️-license)


## 🌟 Features
- Parsing of simple markdown syntax such as `formatting`, `lists`, `paragraphs`, `headers`
- Partial extended markdown syntax support such as `blockquotes`, `definition list`, `task list`, `code block`, `alt header` and additional formatting syntax such as `subscript`, `superscript`, `strikethrough`, `highlight`, etc
- Simple UI for a markdown editor allowing a user to enter markdown and view resulting html rendered in a side-by-side view
- Ability to grow and accomodate additional syntax by updating the defined grammar file

### Unsupported Markdown Syntax

- Nested lists (and inclusion of other elements within lists)
- Nested blockquotes (with different levels)
- Tables
- Footnotes, Reference Links, Emoji Support (currently pasting emojis is supported, but for example `:joy:` does not return an emoji with its resulting unicode representation)

## 🛠️ Tech Stack

Backend:

- [Node.js](https://nodejs.org/en)
- [Peggy.js](https://github.com/peggyjs/peggy)

Frontend:

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

Hosting:
- [Fl0](https://www.fl0.com/)

Documentation:

- Docs are built using [Docusaurus](https://docusaurus.io/)
 - Search functionality provided by: [docusaurus-lunr-search](https://github.com/praveenn77/docusaurus-lunr-search)
 - Analytics using [Google Analytics](https://marketingplatform.google.com/about/analytics/)
- Documentation site hosted via [GitHub Pages](https://pages.github.com/)

Dev Tools:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [WakaTime](https://wakatime.com/)
- [Peggy.js Online Editor](https://peggyjs.org/online)

## 📝 Prerequisites

Ensure that the following dependencies are installed onto your machine by following the [Setup Instructions](#-setup-instructions).

- [Node.js](https://nodejs.org/en/download)

## ⚡ Setup Instructions

1. Clone this repository to your local machine.

```bash
git clone https://github.com/vikiru/parseum.git
cd parseum
```

2. Download and install all required dependencies.

```bash
npm install
```

## 📜 Available Scripts

1. Start the app in the development environment.
```bash
npm run start
```

2. Build the project files and optimize for production.
```bash
npm run build
```

3. Lint all files and check if there are any issues, with [ESLint](https://eslint.org/).
```bash
npm run lint
```

4. Fix all ESLint issues then format the files with [Prettier](https://prettier.io/).
```bash
npm run prettier
```

5. Generate a parser using the defined `grammar.pegjs` file using [Peggy.js](https://peggyjs.org/)
```bash
npm run parser
```

## ✨ Acknowledgments

- [Peggy.js](https://github.com/peggyjs/peggy)
- [Peggy.js Online Editor](https://peggyjs.org/online)
- [Peggy.js Documentation](https://peggyjs.org/documentation)
- [Markdown Guide Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [regex101](https://regex101.com/)
- [Docusaurus](https://docusaurus.io/)
- [GitHub Pages](https://pages.github.com/)
- [Shields Badges](https://github.com/badges/shields)
- [Favicon Generator](https://favicon.io/favicon-generator/)

## ©️ License

The contents of this repository are licensed under the terms and conditions of the [MIT](https://choosealicense.com/licenses/mit/) license.

[MIT](./LICENSE) © 2024-present Visakan Kirubakaran.
