/**
 * Creating a sidebar enables you to:
 *
 * - Create an ordered group of docs
 * - Render a sidebar for each doc of that group
 * - Provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    docs: [
        {
            type: 'category',
            label: 'Getting Started',
            items: ['intro', 'prerequisites', 'setup', 'test', 'features'],
        },
        {
            type: 'category',
            label: 'Development',
            items: ['stack', 'scripts'],
        },
        {
            type: 'category',
            label: 'Syntax',
            items: [
                'syntax',
                {
                    type: 'category',
                    label: 'Basic Syntax',
                    items: ['paragraph', 'header', 'horizontalRule', 'list', 'link', 'image'],
                },
                {
                    type: 'category',
                    label: 'Formatting Syntax',
                    items: ['italic', 'bold', 'boldItalic', 'code', 'emphasis'],
                },
                {
                    type: 'category',
                    label: 'Extended Syntax',
                    items: [
                        'autoLink',
                        'blockquote',
                        'codeBlock',
                        'definitionList',
                        'taskList',
                        'strikethrough',
                        'subscript',
                        'superscript',
                    ],
                },
                {
                    type: 'category',
                    label: 'Excluded Syntax',
                    items: ['html', 'comment'],
                },
            ],
        },
        {
          type: 'category',
          label: 'Conclusion',
          items: ['acknowledgments'],
      },
    ],
};

export default sidebars;
