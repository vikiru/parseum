document 
	= elements: (list / paragraph / emptyLine / header)+ { return elements; }
    
list
  = spaces:(" ")* t:item+ {
      const list = t.map(({indentLevel, type, original, html}) => ({
        indentLevel,
        type,
        original,
        html
      }))
      let updatedHTML = '';
      const unorderedLists = list.filter(list => list.type === 'ul');
      const orderedLists = list.filter(list => list.type === 'ol');
      let firstItem = [];
      let original = '';
      let html = '';
      let remainingItems = [];
      if (list.length > 1 && (unorderedLists.length > 1 || orderedLists.length > 1) ){
     	 firstItem = list[0];
         const type = firstItem.type;
         const endTag = `</li></${type}>`;
         original = firstItem.original;
         html = firstItem.html.replace(endTag, '').trim();
         remainingItems = list.slice(1);
         for (const [index, item] of remainingItems.entries()){
             const itemType = item.type;
             const itemIndent = item.indentLevel;
             let itemOriginal = '';
             for (let i = 0; i < itemIndent; i++){
                  itemOriginal += "    ";
             }
             itemOriginal += item.original;
             original += itemOriginal;
             const nextItem = index + 1 < remainingItems.length ? remainingItems[index + 1] : null;
             if (nextItem && nextItem.type === itemType) {
                html += item.html.replace(`</${type}>`, '');
                const nextStart = `<${nextItem.type}>`;
                const nextEnd = `</${nextItem.type}>`;
                let nextHTML = nextItem.html.replace(nextStart, '').replace(nextEnd, '').trim();
                nextHTML = nextHTML.replace(`</${endTag}>`, '').trim();
                html += nextHTML;
                html += `</${type}>`;
             }
             else if (nextItem && nextItem.type !== itemType || index === remainingItems.length - 1 && itemType !== remainingItems[index - 1].type) {
                  html += item.html;
            }
            }
         html += endTag;
      }
      
      return { original: original, html: html, children: remainingItems }
    }

item
  = spaces:(" ")* t:(orderedList / unorderedList) {
      return {
        items: t,
        indentLevel: typeof(spaces) === 'object' ? spaces.length / 4 : '',
        type: t.type,
        original: t.original,
        html: t.html
    }}

orderedList
  = t:([0-9]? "."+ " "? text ("\n" / !.))+ {
      return {
        type: 'ol',
        original: t.flat().join(''),
        html: '<ol>' + t.map(([num, dot, space, text]) => '<li>' + text + '</li>').join('') + '</ol>'
    }}

unorderedList
  = t:([-]? " "? text ("\n" / !.))+ {
      return {
        x: t,
        type: 'ul',
        original: t.map(([dash, space, text, newLine = '']) => dash + space + text + newLine).join(''),
        html: '<ul>' + t.map(([dash, space, text, newLine = '']) => '<li>' + text.trim() + '</li>').join('') + '</ul>'
    }}
    
header 
  = h:"######" t:(" "+ text "\n"?)+ { return { type: 'h6', original: h + t.map(([s, w]) => s + w).join(''), html: '<h6>' + t.map(([s, w]) => s + w).join('').trim() + '</h6>' }; }
  / h:"#####" t:(" "+ text "\n"?)+ { return { type: 'h5', original: h + t.map(([s, w]) => s + w).join(''), html: '<h5>' + t.map(([s, w]) => s + w).join('').trim() + '</h5>' }; }
  / h:"####" t:(" "+ text "\n"?)+ { return { type: 'h4', original: h + t.map(([s, w]) => s + w).join(''), html: '<h4>' + t.map(([s, w]) => s + w).join('').trim() + '</h4>' }; }
  / h:"###" t:(" "+ text "\n"?)+ { return { type: 'h3', original: h + t.map(([s, w]) => s + w).join(''), html: '<h3>' + t.map(([s, w]) => s + w).join('').trim() + '</h3>' }; }
  / h:"##" t:(" "+ text "\n"?)+ { return { type: 'h2', original: h + t.map(([s, w]) => s + w).join(''), html: '<h2>' + t.map(([s, w]) => s + w).join('').trim() + '</h2>' }; }
  / h:"#" t:(" "+ text "\n"?)+ { return { type: 'h1', original: h + t.map(([s, w]) => s + w).join(''), html: '<h1>' + t.map(([s, w]) => s + w).join('').trim() + '</h1>' }; }

paragraph
  = t:(" "? text "\n"?)+ { return { original: t.map(([s, w]) => (s ? s : '') + w).join(''), html: '<p>' + t.map(([s, w]) => (s ? s : '') + w).join('').trim() + '</p>' }; }

emptyLine
  = t: "\n" { return { original: t, html: '<br/>'} }

text
  = chars:([a-zA-Z0-9 ]+ / bolditalic / bold / italic / code / strikethrough)+ { return chars.join('').replaceAll(',', ''); }

bold
 = bold: "**" chars:[a-zA-Z0-9.]+ "**" { return '<strong>' + chars.join('') + '</strong>'; }

code
 = code: "`" chars:[a-zA-Z0-9.]+ "`" { return '<code>' + chars.join('') + '</code>'; }
 
italic
 = italic: "*" chars:[a-zA-Z0-9.]+ "*" { return '<em>' + chars.join('') + '</em>'; }
 
bolditalic
 = bolditalic: "***" chars:[a-zA-Z0-9]+ "***" { return '<em><strong>' + chars.join('') + '</strong></em>'; }
 
strikethrough
 = strikethrough: "~~" chars:[a-zA-Z0-9.]+ "~~" { return '<del>' + chars.join('') + '</del>'; }