---
title: Blockquote
---

## Overview

A **blockquote** is an element which represents a section of text that is typically referenced from another source. The blockquote element is indicated using a `>` followed by the content, subsequent lines can optionally include `>` or not. To separate the blockquote from other elements, a new line is needed at the end.

At present, it is possible to include a paragraph and lists within blockquotes.

## Example Syntax

### Paragraph within Blockquote

```text
> This is a paragraph within a blockquote.
```

```html
<blockquote>
    <p>This is a paragraph within a blockquote.</p>
</blockquote>
```

### Lists within Blockquote

```text
> 1. This is a list item within a blockquote.
> 2. This is another list item within a blockquote.
```

```html
<blockquote>
    <ol>
        <li>This is a list item within a blockquote.</li>
        <li>This is another list item within a blockquote.</li>
    </ol>
</blockquote>
```

### Two Separate Blockquotes

```text
> This is quote number 1

> This is quote number 2
```

```html
<blockquote>
    <p>This is quote number 1</p>
</blockquote>
<blockquote>
    <p>This is quote number 2</p>
</blockquote>
```
