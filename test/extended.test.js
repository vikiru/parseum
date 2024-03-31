import { expect } from 'chai';
import { parse } from '../src/parser/parser.js';

describe('Extended Syntax Tests', function () {
    it('should return a task list', function () {
        const markdown = '- [ ] Item 1\n- [x] Item 2\n- [ ] Item 3';
        const result = parse(markdown).html;
        expect(result).to.equal(
            '<ul><li><input type="checkbox" disabled/>Item 1</li><li><input type="checkbox" checked disabled/>Item 2</li><li><input type="checkbox" disabled/>Item 3</li></ul>',
        );
    });

    it('should return a definition list', function () {
        const markdown = 'First Term\n: This is the definition of the first term.';
        const result = parse(markdown).html;
        expect(result).to.equal('<dl><dt>First Term</dt><dd>This is the definition of the first term.</dd></dl>');
    });

    it('should return a code block', function () {
        const markdown = '```\ncode block\n```';
        const result = parse(markdown).html;
        expect(result).to.equal('<pre><code>code block</code></pre>');
    });

    it('should return a blockquote', function () {
        const markdown = '> blockquote';
        const result = parse(markdown).html;
        expect(result).to.equal('<blockquote><p>blockquote</p></blockquote>');
    });

    it('should return a list within blockquotes', function () {
        const markdown = '> 1. Item 1\n> 2. Item 2\n> 3. Item 3';
        const result = parse(markdown).html;
        expect(result).to.equal('<blockquote><ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol></blockquote>');
    });

    it('should match a horizontal rule', function(){
        const markdown = '---';
        const result = parse(markdown).html;
        expect(result).to.equal('<hr>');
    })

    it('should return a paragraph with an emoji', function(){
        const markdown = '🖋️'
        const result = parse(markdown).html;
        expect(result).to.equal('<p>🖋️</p>');
    })

    it('should properly escape characters', function(){
        const markdown = '\\`\\*\\_\\[\\]\\(\\)';
        const result = parse(markdown).html;
        expect(result).to.equal('<p>`*_[]()</p>');
    })

    it('should recognize special characters', function(){
        const markdown = '@!?=';
        const result = parse(markdown).html;
        expect(result).to.equal('<p>@!?=</p>');
    })
});
