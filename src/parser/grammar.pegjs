document
    = elements:(
        blockquote
        / codeBlock
        / newLine
        / emptyLine
        / header
        / horizontalRule
        / comment
        / definitionList
        / taskList
        / nestedParagraph
        / list
        / altHeader
    )+ {
            return {
                type: 'document',
                original: elements.map((e) => e.original).join(''),
                html: elements.map((e) => e.html).join(''),
            };
        }
    / !.

definitionList
    = term:(text / formatting)+ "\n" definitions:definitionTerm {
            const termArr = term.flat(Infinity);
            let original = '';
            let html = '<dl><dt>';
            termArr.forEach((t) => {
                const type = typeof t;
                if (type === 'object') {
                    original += t.original;
                    html += t.html;
                } else {
                    original += t;
                    html += t;
                }
            });
            original += '\n';
            html += '</dt>';
            definitions.forEach((d, index) => {
                original += d.original;
                html += d.html;
                if (index < definitions.length - 1) {
                    original += '\n';
                }
            });
            html += '</dl>';
            return { type: 'definition list', original, html };
        }

definitionTerm
    = definitions:(":" " " (text / formatting)+ "\n"?)+ {
            const definitionArr = definitions.flat(Infinity).join('');
            const defs = definitionArr.split('\n').filter((d) => d !== '');
            const cleanedDefs = defs.map((def) => def.replace(': ', ''));
            const type = 'definition term';
            const definitionObjs = [];
            defs.forEach((d) => {
                let index = defs.indexOf(d);
                let original = d;
                let html = `<dd>${cleanedDefs[index]}</dd>`;
                definitionObjs.push({ type, original, html });
            });
            return definitionObjs;
        }

taskList
    = list:("-" " " items:taskItem+ "\n"?)+ {
            const listArray = list.flat(Infinity);
            const filteredArray = listArray.filter((l) => typeof l === 'object' && l !== null);
            let original = '';
            let html = '<ul>';
            filteredArray.forEach((l) => {
                original += `${l.original}\n`;
                html += l.html;
            });
            html += '</ul>';
            return { type: 'task list', original, html };
        }

taskItem
    = spaces:" "* checkbox:("[ ]" / "[x]") " " text:text+ "\n"? {
            const checked = checkbox === '[x]';
            const textContent = text.flat(Infinity).join('');
            const original = `- ${checkbox} ${textContent}`;
            const checkedEnabled = checked === true ? 'checked ' : '';
            const html = `<li><input type="checkbox" ${checkedEnabled}disabled/>${textContent}</li>`;
            return { type: 'task item', checked, original, html };
        }

altHeader
    = t:text+ "\n" underline:("="+ / "-"+) &("\n"?) {
            const textArr = t.flat(Infinity);
            const underlineArr = underline.flat(Infinity);
            const type = underlineArr[0];
            const level = type === '==' ? 1 : 2;
            let originalText = textArr.map((t) => (typeof t === 'object' ? t.original : t)).join('');
            let htmlText = textArr.map((t) => (typeof t === 'object' ? t.html : t)).join('');
            let original = originalText + '\n' + underlineArr.join('');
            let html = `<h${level}>${htmlText}</h${level}>`;
            return { type: 'header', original, html };
        }

header
    = hashes:("#"+)+ " " headerText:(formatting / text)* "\n"? {
            const hashArr = hashes.flat(Infinity);
            const textArr = headerText.flat(Infinity);
            const headerLevel = hashArr.length;
            let original = `${hashArr.join('')} `;
            let html = `<h${headerLevel}>`;
            textArr.forEach((l) => {
                const type = typeof l;
                if (type === 'object') {
                    original += `${l.original}`;
                    html += l.html;
                } else {
                    original += l;
                    html += l;
                }
            });
            original += '\n';
            html += `</h${headerLevel}>`;
            if (headerLevel > 6) {
                html = html
                    .replace(`<h${headerLevel}>`, `<p>${hashArr.join('')} `)
                    .replace(`</h${headerLevel}>`, '</p>');
                return { type: 'paragraph', original, html };
            }
            return { type: 'header', headerLevel, original, html };
        }

blockquoteContent = (header / image / link / blockquote / nestedParagraph / list)+

blockquote
    = quotes:(">"+ " "*)+ content:blockquoteContent+ {
            const quotesArr = quotes.flat(Infinity);
            const contentArr = content.flat(Infinity);
            const original = `${quotesArr.join('')} ${contentArr.map((c) => c.original).join('')}`;
            let html = '<blockquote>';
            let htmlMap = [];
            contentArr.forEach((c) => {
                c.html = c.html.replace('> ', '').replace('<br>><br>', '</p><p>');
                htmlMap.push(c);
            });
            html += htmlMap.map((h) => h.html).join('');
            html += '</blockquote>';
            return { type: 'blockquote', original, html };
        }

codeBlock
    = "```" language:[a-zA-z]* content:(!"```" .)* "```" {
            let original = '```';
            const contentArr = content.flat(Infinity).filter((c) => c !== undefined);
            const filteredContent = contentArr.filter((c) => c !== '\n');
            original += language.join('');
            original += contentArr.join('');
            let html = '<pre><code>';
            html += filteredContent.join('');
            html += '</code></pre>';
            return { type: 'code block', original, html };
        }

list
    = spaces:" "* items:item+ "\n"? {
            const mainList = items[0];
            const type = mainList.type === 'ordered list' ? 'ol' : 'ul';
            const filteredItems = items.slice(1);
            let original = items.map((i) => i.original).join('');
            let html = mainList.html.replace('</${type}>', '');
            filteredItems.forEach((i) => {
                html += `<li>${i.html}</li>`;
            });
            html += `</${type}>`;
            return { type: 'list', original, html };
        }

item = spaces:" "* item:(orderedList / unorderedList) { return item; }

orderedList
    = spaces:" "* t:([0-9] "." " " text ("\n" / !.))+ {
            const textArr = t.flat(Infinity).filter((t) => t !== undefined);
            let original = '';
            let html = '<ol>';
            textArr.forEach((t) => {
                original += typeof t === 'object' ? t.original : t;
            });
            let objects = textArr.filter((t) => typeof t === 'object');
            let items = original.split('\n');
            items = items.map((i) => {
                let text =
                    i
                        .replace(/\d\. /g, '<li>')
                        .replace(/\n/g, '</li>')
                        .replace(/<li><li>/g, '<li>')
                        .replace(/<\/li><\/li>/g, '</li>') + '</li>';
                for (const obj of objects) {
                    text = text.replace(obj.original, obj.html);
                }
                return text;
            });
            html += items.join('') + '</ul>';
            return { type: 'ordered list', original, html };
        }

unorderedList
    = spaces:" "* t:([-] " " text ("\n" / !.))+ {
            const textArr = t.flat(Infinity).filter((t) => t !== undefined);
            let original = '';
            let html = '<ul>';
            textArr.forEach((t) => {
                original += typeof t === 'object' ? t.original : t;
            });
            let objects = textArr.filter((t) => typeof t === 'object');
            let items = original.split('\n');
            items = items.map((i) => {
                let text =
                    i
                        .replace(/- /, '<li>')
                        .replace(/\n/g, '</li>')
                        .replace(/<li><li>/g, '<li>')
                        .replace(/<\/li><\/li>/g, '</li>') + '</li>';
                for (const obj of objects) {
                    text = text.replace(obj.original, obj.html);
                }
                return text;
            });
            html += items.join('') + '</ul>';
            return { type: 'unordered list', original, html };
        }

nestedParagraph
    = paragraphs:paragraph+ &("\n"?) {
            let original = '';
            let html = '<p>';
            paragraphs.forEach((p, index) => {
                original += p.original;
                html += p.html.replace('<p>', '').replace('</p>', '');
                if (index < paragraphs.length - 1) {
                    original += '\n';
                    html += '<br>';
                }
            });
            html += '</p>';
            return { type: 'paragraph', original, html };
        }

paragraph
    = !(spaces:" "* ([-] / [0-9] ".") / emptyLine / newLine) t:text+ "\n"? {
            const text = t.flat(Infinity);
            let original = '';
            let html = '<p>';
            for (const t of text) {
                if (typeof t === 'object') {
                    original += t.original;
                    html += t.html;
                } else {
                    original += t;
                    html += t;
                }
            }
            html += '</p>';
            return { type: 'paragraph', original, html };
        }

newLine = "\n" { return { type: 'new line', original: '\n', html: '' }; }

emptyLine = spaces:(" " / "\t")+ !text "\n"? { return { type: 'empty line', original: spaces.join(''), html: '' }; }

text
    = chars:(htmlTag / escapedCharacters / specialCharacters / formatting / [a-zA-Z0-9 \t]+ / !newLine !emptyLine .)+ {
            const filteredChars = chars.flat(Infinity).filter((c) => c !== undefined);
            return filteredChars;
        }

formatting
    = boldItalic
    / bold
    / italic
    / code
    / strikethrough
    / emphasis
    / subScript
    / superScript
    / link
    / autoLink
    / image
    / codeBlock

specialCharacters
    = !escapedCharacters
        !formatting
        char:(
            "?"
            / "!"
            / "~"
            / "@"
            / "#"
            / "$"
            / "%"
            / "^"
            / "&"
            / "*"
            / "("
            / ")"
            / "_"
            / "-"
            / "+"
            / "="
            / "{"
            / "}"
            / "["
            / "]"
            / "|"
            / "\\"
            / "`"
            / ":"
            / ";"
            / "<"
            / ">"
            / ","
            / "."
            / "/"
            / "'"
            / "`"
            / "<"
            / ">"
            / "!"
            / "+"
            / "="
            / "-"
            / ":"
            / "|"
            / "/"
        ) { return char; }

escapedCharacters = "\\" char:. { return char; }

code
    = "`" code:(text:(!"`" !"\n" .)+)+ "`" {
            const text = code.flat(Infinity);
            const original = '`' + text.join('') + '`';
            const html = `<code>${text.join('')}</code>`;
            return { type: 'code', original, html };
        }

italic
    = "*" italic:(text:(!"*" !"\n" .)+)+ "*" {
            const text = italic.flat(Infinity);
            const original = '*' + text.join('') + '*';
            const html = `<em>${text.join('')}</em>`;
            return { type: 'italic', original, html };
        }

bold
    = "**" bold:(text:(!"**" !"\n" .)+)+ "**" {
            const text = bold.flat(Infinity);
            const original = '**' + text.join('') + '**';
            const html = `<strong>${text.join('')}</strong>`;
            return { type: 'bold', original, html };
        }

boldItalic
    = "***" boldItalic:(text:(!"***" !"\n" .)+)+ "***" {
            const text = boldItalic.flat(Infinity);
            const original = '***' + text.join('') + '***';
            const html = `<strong><em>${text.join('')}</em></strong>`;
            return { type: 'bold italic', original, html };
        }

strikethrough
    = "~~" strikethrough:(text:(!"~~" !"\n" .)+)+ "~~" {
            const text = strikethrough.flat(Infinity);
            const original = '~~' + text.join('') + '~~';
            const html = `<del>${text.join('')}</del>`;
            return { type: 'strikethrough', original, html };
        }

emphasis
    = "==" emphasis:(text:(!"==" !"\n" .)+)+ "==" {
            const text = emphasis.flat(Infinity);
            const original = '==' + text.join('') + '==';
            const html = `<mark>${text.join('')}</mark>`;
            return { type: 'emphasis', original, html };
        }

subScript
    = "~" subScript:(text:(!"~" !"\n" .)+)+ "~" {
            const text = subScript.flat(Infinity);
            const original = '~' + text.join('') + '~';
            const html = `<sub>${text.join('')}</sub>`;
            return { type: 'subscript', original, html };
        }

superScript
    = "^" superScript:(text:(!"^" !"\n" .)+)+ "^" {
            const text = superScript.flat(Infinity);
            const original = '^' + text.join('') + '^';
            const html = `<sup>${text.join('')}</sup>`;
            return { type: 'superscript', original, html };
        }

horizontalRule
    = rule:(!formatting "---" "-"* / !formatting "***" "*"* / !formatting "___" "_"*)+ !text "\n"? {
            const text = rule.flat(Infinity);
            const original = text.join('');
            const html = `<hr>`;
            return { type: 'horizontal rule', original, html };
        }

image
    = "!" "[" altText:$(!"]" !"\n" .)* "]" "(" url:$(!")" .)* ")" {
            let original = `![${altText}](${url})`;
            let urlSplit = url.split(/ (.+)/).filter((part) => part.trim() !== '');
            let sourceUrl = urlSplit[0];
            let title = urlSplit.length > 1 ? urlSplit[1].replace(/"/g, '') : '';
            let imageTitle = title !== '' ? `title="${title}"` : '';
            let html = `<img src="${sourceUrl}" alt="${altText}" ${imageTitle}/>`;
            return { type: 'image', original, html };
        }

link
    = "[" linkText:$(!"]" !"\n" .)* "]" "(" url:$(!")" .)* ")" {
            let original = `[${linkText}](${url})`;
            let urlSplit = url.split(/ (.+)/).filter((part) => part.trim() !== '');
            let sourceUrl = urlSplit[0];
            let title = urlSplit.length > 1 ? urlSplit[1].replace(/"/g, '') : '';
            let linkTitle = title !== '' ? `title="${title}"` : '';
            let html = `<a href="${sourceUrl}" ${linkTitle}>${linkText}</a>`;
            return { type: 'link', original, html };
        }

scheme
    = "http" "://"
    / "https" "://"
    / "www" "."

autoLink
    = "<" scheme (!">" !"\n" .)* ">" {
            const address = text().replace(/^<|>$/g, '');
            const original = `<${address}>`;
            const html = `<a href="${address}">${address}</a>`;
            return { type: 'auto link', original, html };
        }

comment
    = comment:("[" [a-zA-Z0-9. ]+ "]" ":" " " "#" text+)+ {
            return { type: 'comment', original: comment.flat(Infinity).join(''), html: '' };
        }

htmlTag
    = "<"
        tagName:[a-zA-Z0-9]+
        attributes:(" "+ (!">" .)*)*
        ">"
        content:(htmlTag / (!("<" / ">") .))*
        "</"
        tagName2:[a-zA-Z0-9]+
        ">" {
            const attributeArr = attributes.flat(Infinity).filter((a) => a !== undefined);
            const contentArr = content.flat(Infinity).filter((c) => c !== undefined);
            const original = `&lt;${tagName.join('')}${attributeArr.join('')}&gt;${contentArr.join('')}&lt;/${tagName2.join('')}&gt;`;
            return { type: 'html', original, html: original };
        }
    / "<" tagName:[a-zA-Z0-9]+ "/>" {
            const original = `&lt;${tagName.join('')}&gt;`;
            return { type: 'html', original, html: original };
        }
