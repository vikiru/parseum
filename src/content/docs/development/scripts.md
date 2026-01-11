---
title: 📜 Available Scripts
description: Available scripts for Parseum development.
template: doc
---

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

9. Generate a parser using the defined [grammar.pegjs](https://github.com/vikiru/parseum/blob/main/src/parser/grammar.pegjs) file with [Peggy.js](https://peggyjs.org/).

```bash
pnpm parser
```

10. Run all tests.

```bash
pnpm test
```

11. Deploy to [Surge.sh](https://surge.sh/).

```bash
pnpm run deploy
```