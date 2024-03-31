import { expect } from 'chai';

import { parse } from '../src/parser/parser.js';

describe('List Tests', function () {
    it('should return an ordered list', function () {
        const markdown = '1. Item 1\n2. Item 2\n3. Item 3';
        const result = parse(markdown).html;
        expect(result).to.equal('<ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>');
    });

    it('should return an unordered list', function () {
        const markdown = '- Item 1\n- Item 2\n- Item 3';
        const result = parse(markdown).html;
        expect(result).to.equal('<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>');
    });

    it('should not return a list of any kind', function () {
        const markdown = 'This is not a 1. list and - should be parsed as a paragraph.';
        const result = parse(markdown).html;
        expect(result).to.equal('<p>This is not a 1. list and - should be parsed as a paragraph.</p>');
    });
});
