import { expect } from 'chai';

import { parse } from '../src/parser/parser.js';

describe('Excluded Syntax Tests', function () {
    it('should exclude new line from html', function () {
        const markdown = '\n';
        const result = parse(markdown).html;
        expect(result).to.equal('');
    });

    it('should exclude empty line from html', function () {
        const markdown = ' ';
        const result = parse(markdown).html;
        expect(result).to.equal('');
    });

    it('should exclude html tag in the form, `<tag>content</tag>`', function () {
        const markdown = '<tag>content</tag>';
        const result = parse(markdown).html;
        expect(result).to.equal('<p>content</p>');
    });

    it('should exclude html tag in the form, `</tag>`', function () {
        const markdown = '</tag>';
        const result = parse(markdown).html;
        expect(result).to.equal('');
    });

    it('should exclude html tag in the form, `<tag/>`', function () {
        const markdown = '<tag/>';
        const result = parse(markdown).html;
        expect(result).to.equal('');
    });

    it('should exclude html tag in the form, `<tag attributes="content">`', function () {
        const markdown = '<tag attributes="content">';
        const result = parse(markdown).html;
        expect(result).to.equal('');
    });

    it('should exclude a comment from html', function () {
        const markdown = '[comment1]: # This is a comment.';
        const result = parse(markdown).html;
        expect(result).to.equal('');
    });
});
