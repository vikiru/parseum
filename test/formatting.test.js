import { expect } from 'chai';
import { parse } from '../src/parser/parser.js';

describe('Formatting Tests', function () {
    it('should return a italic text', function () {
        const markdown = '*italic text*';
        const result = parse(markdown).html;
        expect(result).to.equal(`<p><em>italic text</em></p>`);
    });

    it('should return a bold text', function () {
        const markdown = '**bold text**';
        const result = parse(markdown).html;
        expect(result).to.equal(`<p><strong>bold text</strong></p>`);
    });

    it('should return a bold and italic text', function () {
        const markdown = '***bold italic text***';
        const result = parse(markdown).html;
        expect(result).to.equal(`<p><em><strong>bold italic text</strong></em></p>`);
    });

    it('should return inline code', function () {
        const markdown = '`inline code`';
        const result = parse(markdown).html;
        expect(result).to.equal('<p><code>inline code</code></p>');
    });

    it('should return strikethrough text', function () {
        const markdown = '~~strikethrough text~~';
        const result = parse(markdown).html;
        expect(result).to.equal('<p><del>strikethrough text</del></p>');
    });

    it('should return emphasis text', function () {
        const markdown = '==emphasis text==';
        const result = parse(markdown).html;
        expect(result).to.equal('<p><mark>emphasis text</mark></p>');
    });

    it('should return subscript text', function () {
        const markdown = '~subscript text~';
        const result = parse(markdown).html;
        expect(result).to.equal('<p><sub>subscript text</sub></p>');
    });

    it('should return superscript text', function () {
        const markdown = '^superscript text^';
        const result = parse(markdown).html;
        expect(result).to.equal('<p><sup>superscript text</sup></p>');
    });

    it('should return a link', function () {
        const markdown = '[link](https://www.google.com)';
        const result = parse(markdown).html;
        expect(result).to.equal('<p><a href="https://www.google.com">link</a></p>');
    });

    it('should return an image', function () {
        const markdown = '![image](https://www.google.com)';
        const result = parse(markdown).html;
        expect(result).to.equal('<p><img src="https://www.google.com" alt="image"/></p>');
    });

    it('should return an autolink', function () {
        const markdown = '<https://www.google.com>';
        const result = parse(markdown).html;
        expect(result).to.equal('<p><a href="https://www.google.com">https://www.google.com</a></p>');
    });

    it('should return a code block', function(){
        const markdown = '```\ncode block\n```';
        const result = parse(markdown).html;
        expect(result).to.equal('<pre><code>code block</code></pre>');
    })

    it('should return a blockquote', function(){
        const markdown = '> blockquote';
        const result = parse(markdown).html;
        expect(result).to.equal('<blockquote><p>blockquote</p></blockquote>');
    })
});
