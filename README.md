## Parseum 

**Parseum** is a markdown parser and editor built utilizing [Peggy.js](https://github.com/peggyjs/peggy) which generates a parser from a defined **Parsing Expression Grammar (PEG)** file. Combining this parser with **React**, **TailwindCSS**, and **DaisyUI**, allows for the creation of a simple markdown to html parser and editor with the flexibility to grow and evolve as needed by updating the defined grammar file.

## 📖 Table of Contents
- [Parseum](#parseum)
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
