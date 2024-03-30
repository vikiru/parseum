import { expect } from 'chai';

import { parse } from '../src/parser/parser.js';

describe('Header Tests', function () {
    for (let i = 1; i <= 6; i++) {
        it(`should return a header of level ${i}`, function () {
            const markdown = `${'#'.repeat(i)} Header ${i}`;
            const result = parse(markdown).html;
            expect(result).to.equal(`<h${i}>Header ${i}</h${i}>`);
        });
    }

    it('should return a paragraph if more than 7 hashes', function () {
        const markdown = `${'#'.repeat(7)} hello world`;
        const result = parse(markdown).html;
        expect(result).to.equal(`<p>####### hello world</p>`);
    });

    it('should return a header of level 1 when using alternate header syntax', function () {
        const markdown = 'Hello World\n===';
        const result = parse(markdown).html;
        expect(result).to.equal(`<h1>Hello World</h1>`);
    });

    it('should return a header of level 2 when using alternate header syntax', function () {
        const markdown = 'Hello World\n---';
        const result = parse(markdown).html;
        expect(result).to.equal(`<h2>Hello World</h2>`);
    });

    it('should not return a header of any level', function () {
        const markdown = 'Hello World ## test header';
        const result = parse(markdown).html;
        expect(result).to.equal(`<p>Hello World ## test header</p>`);
    });
});
