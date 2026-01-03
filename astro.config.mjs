import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidatorPlugin from 'starlight-links-validator';
import starlightThemeRapidePlugin from 'starlight-theme-rapide';

export default defineConfig({
  base: '/parseum/',
  site: 'https://vikiru.github.io/parseum/',
  output: 'static',
  integrations: [
    starlight({
      title: 'Parseum',
      tagline: 'A markdown to HTML parser and editor built using Peggy.js, React, TailwindCSS and DaisyUI.',
      favicon: '/favicon.ico',
      logo: {
        src: './public/logo.png',
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/vikiru/parseum',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Prerequisites', slug: 'getting-started/prerequisites' },
            { label: 'Setup', slug: 'getting-started/setup' },
            { label: 'Test', slug: 'getting-started/test' },
            { label: 'Features', slug: 'getting-started/features' },
          ],
        },
        {
          label: 'Development',
          items: [
            { label: 'Stack', slug: 'development/stack' },
            { label: 'Scripts', slug: 'development/scripts' },
          ],
        },
        {
          label: 'Syntax',
          items: [
            { label: 'Syntax Overview', slug: 'syntax' },
            {
              label: 'Basic Syntax',
              autogenerate: { directory: 'syntax/basic' },
            },
            {
              label: 'Formatting Syntax',
              autogenerate: { directory: 'syntax/formatting' },
            },
            {
              label: 'Extended Syntax',
              autogenerate: { directory: 'syntax/extended' },
            },
            {
              label: 'Excluded Syntax',
              autogenerate: { directory: 'syntax/excluded' },
            },
          ],
        },
        {
          label: 'Conclusion',
          items: [{ label: 'Acknowledgments', slug: 'conclusion/acknowledgments' }],
        },
      ],
      credits: true,
      plugins: [
        starlightLinksValidatorPlugin({
          errorOnRelativeLinks: false,
        }),
        starlightThemeRapidePlugin(),
      ],
    }),
  ],
});
