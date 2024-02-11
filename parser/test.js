const text = [
    ' 1',
    {
        t: [
            [
                null,
                ['.'],
                ' ',
                {
                    itemType: 'object',
                    item: ['First Subitem'],
                },
                '\n',
            ],
        ],
        type: 'ol',
        original: '. [object Object]\n',
        html: '<ol><li>[object Object]</li></ol>',
    },
];

const flat = text.flat();
console.log(flat[0] + flat[1].html);

// input:
//- Item
// 1. First Subitem

// input:
// - Item
//    1. First Subitem
//    2. Second Subitem
// 1. new
// 2. new
// this
