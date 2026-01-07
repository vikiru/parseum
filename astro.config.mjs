import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidatorPlugin from 'starlight-links-validator';
import starlightThemeRapidePlugin from 'starlight-theme-rapide';
import { documentationConfig } from './docs.config.ts';

/** @type {import('astro/config').Config} */
export default defineConfig({
  base: documentationConfig.base + '/',
  site: documentationConfig.siteUrl,
  output: 'static',
  trailingSlash: 'never',
  build: {
    minify: true,
  },
  integrations: [
    starlight({
      title: documentationConfig.title.replace(' Documentation', ''),
      tagline: documentationConfig.description.replace('Documentation for ', ''),
      favicon: documentationConfig.faviconFileName,
      logo: {
        src: `./public/${documentationConfig.logoFileName}`,
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: documentationConfig.githubRepo,
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
      components: {
        Head: './src/components/Head.astro',
      },
      credits: true,
      lastUpdated: false,
      plugins: [
        starlightLinksValidatorPlugin({
          errorOnRelativeLinks: false,
        }),
        starlightThemeRapidePlugin(),
      ],
    }),
  ],
});
