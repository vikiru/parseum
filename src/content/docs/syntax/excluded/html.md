---
title: HTML Tag
description: How HTML tags are handled and excluded in Parseum markdown parsing.
slug: syntax/excluded/html
---

**HTML Tag** refers to elements within the **HyperText Markup Language (HTML)** such as `<p>`, `<h1>`, etc.

At present, all HTML tags are not rendered by the parser, but are captured accordingly.

## Example Syntax

```text
<p>This is a paragraph element using HTML. </p>

This is a paragraph element using Markdown.
```

```html
<p>This is a paragraph element using Markdown.</p>
```
