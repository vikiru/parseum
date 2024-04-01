---
title: 🌟 Features
---

## 🌟 Features

-   Parsing of simple markdown syntax such as:
    - `paragraph`
    - `header`
    - `horizontal rule`
    - `list`
    - `link`
    - `image`
    - formatting such as `italic`, `bold`, `bold italic`, `code`, `emphasis`
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

A comprehensive overview detailing all supported Markdown syntax can be located within the documentation under the [Syntax Overview](/syntax) section. Each element has a dedicated page detailing an overview of what the element is and example input Markdown and resulting output HTML.