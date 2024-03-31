---
title: Paragraph
---

## Overview

A **paragraph** is a block of text that can include formatting options such as `bold`, `italic`,  `link`, etc. 

Paragraphs can additionally use something known as **hard break** and **soft break** which is used to determine how a paragraph should be rendered under certain conditions.

## Example Syntax

### Normal Paragraph

```text
This is a simple paragraph.
```

```html
<p>This is a simple paragraph.</p>
```

### Paragraph with Formatting

```text
This is a paragraph with *formatting* options such as `bold`, `code`.

Additionally, you can also use links such as [link](google.com).
```

```html
<p>
    This is a paragraph with <em>formatting</em> options such as <code>bold</code>, <code>code</code>.
</p>
<p>
    Additionally, you can also use links such as <a href="google.com">link</a>.
</p>
```

### Paragraphs - Soft vs. Hard Break

#### Soft Break

```text
This is paragraph 1.
And this is a continuation of paragraph 1.
```

```html
<p>
    This is paragraph 1.<br>And this is a continuation of paragraph 1.
</p>
```

#### Hard Break

```text
This is paragraph 1.

This is paragraph 2.
```

```html
<p>This is paragraph 1.</p>
<p>This is paragraph 2.</p>
```