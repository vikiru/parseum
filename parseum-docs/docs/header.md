---
title: Header
---

## Overview

A **header** is an element that is usually used to represent the title of a distinct section of text, denoted by a `#`. A header ranges from level 1 to level 6, where the level of the header is determined by the number of `#` characters and if the number of `#` characters exceeds 6, it will be parsed as a paragraph.

## Example Syntax

### Normal Header Syntax (ATX Header)

```text
# This is a header of level 1
## This is a header of level 2
### This is a header of level 3
#### This is a header of level 4
##### This is a header of level 5
###### This is a header of level 6
####### This is a normal paragraph.
```

```html
<h1>This is a header of level 1</h1>
<h2>This is a header of level 2</h2>
<h3>This is a header of level 3</h3>
<h4>This is a header of level 4</h4>
<h5>This is a header of level 5</h5>
<h6>This is a header of level 6</h6>
<p>####### This is a normal paragraph.</p>
```

### Alternate Header Syntax (Setext Header)

```text
Header Level 1
=====

Header Level 2
-----
```

```html
<h1>Header Level 1</h1>
<h2>Header Level 2</h2>
```
