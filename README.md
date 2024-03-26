## Placeholder Name 

**Placeholder Name** is a markdown parser and editor built utilizing [Peggy.js](github.com) which generates a parser from a defined **Parsing Expression Grammar (PEG)** file. Combining this parser with **React**, **React Router**, **TailwindCSS**, and **DaisyUI**, allows for the combination of a simple markdown to html parser and editor with the flexibility to grow and evolve as needed by updating the defined grammar file.


## Features
- Parsing of simple markdown syntax such as `formatting`, `lists`, `paragraphs`, `headers`
- Partial extended markdown syntax support such as `blockquotes`, `definition list`, `task list`, `code block`, `alt header` and additional formatting syntax such as `subscript`, `superscript`, `strikethrough`, `highlight`, etc
- Simple UI for a markdown editor allowing a user to enter markdown and view resulting html rendered in a side-by-side view
- Ability to grow and accomodate additional syntax by updating the defined grammar file

### Unsupported Markdown Syntax

- Nested lists (and inclusion of other elements within lists)
- Tables
- Nested blockquotes
- Footnotes, Reference Links, Emoji Support (currently pasting emojis is supported, but for example `:joy:` does not return an emoji with its resulting unicode representation)